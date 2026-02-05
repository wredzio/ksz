import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ContactFormSection } from "./contact-form-section";

const mockSubmitFn = async (data: { email: string; message: string }) => {
  console.log("[Storybook Mock]", data);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return { success: true };
};

const meta = {
  title: "Sections/ContactFormSection",
  component: ContactFormSection,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
  args: {
    submitFn: mockSubmitFn,
  },
} satisfies Meta<typeof ContactFormSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Wyślij Nam Wiadomość",
    subtitle:
      "Opisz swój projekt, a my odezwiemy się w ciągu 24 godzin.",
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: "Skontaktuj Się Z Nami",
  },
};

export const LongTitle: Story = {
  args: {
    title: "Masz Pomysł Na Projekt? Porozmawiajmy",
    subtitle: "Chętnie poznamy Twoje potrzeby i zaproponujemy rozwiązanie.",
  },
};
