"use server";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { userEmail } = body[0];
  const { pairedEmail } = body[1];
  try {
    const data = await resend.emails.send({
      from: "PAIRED <onboarding@resend.dev>",
      to: userEmail,
      subject: `Welcome to Paired - Your Journey to Ideal Living Spaces Begins!`,
      react: EmailTemplate(),
      reply_to: pairedEmail,
    });
    // console.log(Response.json(data));
    console.log("Post Request has been Sent");
    return Response.json(data);
  } catch (error) {
    console.log(Response.json({ error }));
    return Response.json({ error });
  }
}
