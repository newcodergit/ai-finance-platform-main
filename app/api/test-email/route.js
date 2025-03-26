import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const { email } = await req.json();

    // Test direct email sending
    const emailResult = await sendEmail({
      to: email,
      subject: "Test Email from Finance Platform",
      html: `
        <h1>Test Email</h1>
        <p>This is a test email to verify the email system is working correctly.</p>
      `,
    });

    // Test Inngest function
    const inngestResult = await inngest.send({
      name: "Send Welcome Email",
      data: { email },
    });

    return NextResponse.json({
      success: true,
      emailResult,
      inngestResult,
    });
  } catch (error) {
    console.error("Test failed:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
} 