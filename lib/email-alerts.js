import { sendEmail } from "@/actions/send-email"; // Assuming sendEmail is defined in actions/send-email.js

export async function sendBudgetAlert(userId, accountId, currentExpenses, budgetAmount) {
  const subject = "Budget Alert: You have exceeded your budget!";
  const message = `
    Dear User,

    This is a notification that your current expenses have exceeded your budget limit.

    Current Expenses: ₹${currentExpenses}
    Budget Amount: ₹${budgetAmount}

    Please review your spending.

    Best regards,
    Your Finance Team
  `;

  // Call the sendEmail function to send the alert
  await sendEmail({
    to: userId, // Assuming userId is the email address
    subject,
    message,
  });
}
