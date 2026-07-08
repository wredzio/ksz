"use server";

import nodemailer from "nodemailer";

import { CONTACT_EMAILS, SITE_NAME } from "@/lib/site-config";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 5;
const MAX_MESSAGE_LENGTH = 5000;

interface ContactFormData {
  email: string;
  message: string;
}

interface ContactFormResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactFormResult> {
  const email = data.email?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  if (!EMAIL_REGEX.test(email)) {
    return { success: false, error: "Nieprawidłowy adres email." };
  }

  if (message.length < MIN_MESSAGE_LENGTH) {
    return {
      success: false,
      error: `Wiadomość musi mieć minimum ${MIN_MESSAGE_LENGTH} znaków.`,
    };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return {
      success: false,
      error: `Wiadomość może mieć maksymalnie ${MAX_MESSAGE_LENGTH} znaków.`,
    };
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error(
      "[Contact Form] Missing GMAIL_USER / GMAIL_APP_PASSWORD env vars",
    );
    return {
      success: false,
      error: `Wysyłka jest chwilowo niedostępna. Napisz do nas bezpośrednio: ${CONTACT_EMAILS[0]}`,
    };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Formularz ${SITE_NAME}" <${user}>`,
      // ponytail: self-send — leady zbiera dedykowana skrzynka (GMAIL_USER)
      to: user,
      replyTo: email,
      subject: `Nowa wiadomość ze strony — ${email}`,
      text: `Od: ${email}\n\n${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("[Contact Form] sendMail failed:", error);
    return {
      success: false,
      error: "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
    };
  }
}
