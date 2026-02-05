"use server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 5;

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
  if (!EMAIL_REGEX.test(data.email)) {
    return { success: false, error: "Nieprawidłowy adres email." };
  }

  if (data.message.trim().length < MIN_MESSAGE_LENGTH) {
    return {
      success: false,
      error: `Wiadomość musi mieć minimum ${MIN_MESSAGE_LENGTH} znaków.`,
    };
  }

  // Symulowane opóźnienie
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log("[Contact Form]", { email: data.email, message: data.message });

  return { success: true };
}
