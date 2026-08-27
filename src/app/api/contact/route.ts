import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "RESEND_API_KEY is missing." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const project = String(formData.get("project") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const deadline = String(formData.get("deadline") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !project) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and project details are required.",
        },
        { status: 400 }
      );
    }

    // Prevent invalid reply-to values from reaching Resend.
    const emailIsValid =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const attachments: {
      filename: string;
      content: Buffer;
    }[] = [];

    const file = formData.get("file");

    if (file instanceof File && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());

      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    const result = await resend.emails.send({
      from: "HIGHH Website <onboarding@resend.dev>",
      to: ["manishnalumachu@gmail.com"],

      // Safe because we validated it above.
      replyTo: email,

      subject: `New project enquiry from ${name}`,

      html: `
        <h2>New Project Enquiry</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>

        <hr />

        <p><strong>What they're building:</strong></p>
        <p>${escapeHtml(project).replace(/\n/g, "<br />")}</p>

        <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
        <p><strong>Desired completion:</strong> ${escapeHtml(deadline)}</p>

        <p><strong>Additional message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,

      ...(attachments.length > 0 ? { attachments } : {}),
    });

    if (result.error) {
      console.error("RESEND ERROR:", result.error);

      return NextResponse.json(
        {
          success: false,
          message: result.error.message || "Resend failed.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Project enquiry sent successfully.",
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      },
      { status: 500 }
    );
  }
}