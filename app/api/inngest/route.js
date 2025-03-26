import { serve } from "inngest/next";


import {
  checkBudgetAlerts,
  generateMonthlyReports,
  processRecurringTransaction,
  triggerRecurringTransactions,
} from "../../../lib/inngest/function"; // Corrected import statement

// Create an Inngest function for sending welcome emails
export const sendWelcomeEmail = inngest.createFunction(
  { name: "Send Welcome Email" },
  { cron: "0 0 * * *" }, // Run daily at midnight
  async ({ logger }) => {
    try {
      // Get all users who signed up in the last 24 hours
      const users = await prisma.user.findMany({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
          },
        },
        select: {
          email: true,
          name: true,
        },
      });

      for (const user of users) {
        await sendEmail({
          to: user.email,
          subject: "Welcome to Finance Platform!",
          html: `
            <h1>Welcome to Finance Platform, ${user.name}!</h1>
            <p>Thank you for joining our platform. We're excited to help you manage your finances better.</p>
            <p>Here are some things you can do to get started:</p>
            <ul>
              <li>Add your first account</li>
              <li>Set up your budget</li>
              <li>Track your expenses</li>
            </ul>
            <p>If you have any questions, feel free to reach out to our support team.</p>
          `,
        });
      }

      return { success: true };
    } catch (error) {
      logger.error("Failed to send welcome emails:", error);
      return { success: false, error };
    }
  }
);

// Create an Inngest function for sending budget alerts
export const sendBudgetAlerts = inngest.createFunction(
  { name: "Send Budget Alerts" },
  { cron: "0 9 * * *" }, // Run daily at 9 AM
  async ({ logger }) => {
    try {
      // Get all users with budgets
      const users = await prisma.user.findMany({
        where: {
          budgets: {
            some: {},
          },
        },
        include: {
          budgets: {
            include: {
              transactions: {
                where: {
                  date: {
                    gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
                  },
                },
              },
            },
          },
        },
      });

      for (const user of users) {
        const budgetAlerts = user.budgets
          .filter((budget) => {
            const spent = budget.transactions.reduce(
              (sum, t) => sum + t.amount,
              0
            );
            return spent > budget.amount * 0.8; // Alert when 80% of budget is spent
          })
          .map((budget) => budget.name);

        if (budgetAlerts.length > 0) {
          await sendEmail({
            to: user.email,
            subject: "Budget Alert: You're Close to Your Limits",
            html: `
              <h1>Budget Alert</h1>
              <p>Hi ${user.name},</p>
              <p>You're close to reaching your budget limits for the following categories:</p>
              <ul>
                ${budgetAlerts.map((budget) => `<li>${budget}</li>`).join("")}
              </ul>
              <p>Please review your spending and adjust your budget if needed.</p>
            `,
          });
        }
      }

      return { success: true };
    } catch (error) {
      logger.error("Failed to send budget alerts:", error);
      return { success: false, error };
    }
  }
);

// Create an Inngest function for sending monthly reports
export const sendMonthlyReports = inngest.createFunction(
  { name: "Send Monthly Reports" },
  { cron: "0 0 1 * *" }, // Run on the 1st of every month
  async ({ logger }) => {
    try {
      // Get all users
      const users = await prisma.user.findMany({
        include: {
          transactions: {
            where: {
              date: {
                gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
              },
            },
          },
        },
      });

      for (const user of users) {
        const totalSpent = user.transactions.reduce(
          (sum, t) => sum + t.amount,
          0
        );
        const topCategories = user.transactions
          .reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + t.amount;
            return acc;
          }, {})
          .sort((a, b) => b - a)
          .slice(0, 3);

        await sendEmail({
          to: user.email,
          subject: "Your Monthly Financial Report",
          html: `
            <h1>Monthly Financial Report</h1>
            <p>Hi ${user.name},</p>
            <p>Here's your financial summary for the past month:</p>
            <h2>Total Spending: ₹${totalSpent.toFixed(2)}</h2>
            <h3>Top Spending Categories:</h3>
            <ul>
              ${Object.entries(topCategories)
                .map(([category, amount]) => `<li>${category}: ₹${amount.toFixed(2)}</li>`)
                .join("")}
            </ul>
            <p>Log in to your dashboard to see more detailed insights.</p>
          `,
        });
      }

      return { success: true };
    } catch (error) {
      logger.error("Failed to send monthly reports:", error);
      return { success: false, error };
    }
  }
);

// Serve the Inngest API
export const { GET, POST, dynamic } = serve(inngest, [
  sendWelcomeEmail,
  sendBudgetAlerts,
  sendMonthlyReports,
]);
