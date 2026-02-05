import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ContactSection } from "./contact-section";

const meta = {
  title: "Sections/ContactSection",
  component: ContactSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ContactSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Skontaktuj się z nami",
    phone: "+48 123 456 789",
    address: "Polska",
    email: "kontakt@ksz.dev",
  },
};

export const DifferentData: Story = {
  args: {
    title: "Napisz do nas",
    phone: "+48 987 654 321",
    address: "Kraków, ul. Przykładowa 1",
    email: "info@ksz.dev",
  },
};

export const LongTitle: Story = {
  args: {
    title: "Porozmawiajmy o Twoim projekcie",
    phone: "+48 123 456 789",
    address: "Polska",
    email: "kontakt@ksz.dev",
  },
};
