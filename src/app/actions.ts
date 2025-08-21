"use server";

import { z } from "zod";

const emailSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type EmailData = z.infer<typeof emailSchema>;

export async function sendEmail(data: EmailData): Promise<{ success: boolean, message?: string }> {
  const validation = emailSchema.safeParse(data);

  if (!validation.success) {
    return { success: false, message: "Invalid data provided." };
  }

  // Here you would typically use a service like Nodemailer, Resend, or SendGrid
  // to send the email. For this example, we'll just log it to the console.
  console.log("New message received:");
  console.log("Name:", data.name);
  console.log("Email:", data.email);
  console.log("Message:", data.message);

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In a real application, you would handle potential errors from the email service.
  // For now, we'll assume it's always successful.
  return { success: true };
}
