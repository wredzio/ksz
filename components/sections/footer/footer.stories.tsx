import type { Meta, StoryObj } from "@storybook/nextjs";

import { Footer } from "./footer";

const meta: Meta<typeof Footer> = {
  title: "Sections/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    contact: {
      phone: "+48 123 456 789",
      address: "Polska",
      email: "kontakt@ksz.dev",
    },
    socialLinks: [
      {
        platform: "Facebook" as const,
        url: "https://facebook.com/ksz",
      },
      {
        platform: "Instagram" as const,
        url: "https://instagram.com/ksz",
      },
    ],
  },
};

export const SingleSocialLink: Story = {
  args: {
    contact: {
      phone: "+48 123 456 789",
      address: "Polska",
      email: "kontakt@ksz.dev",
    },
    socialLinks: [
      {
        platform: "Instagram" as const,
        url: "https://instagram.com/ksz",
      },
    ],
  },
};

export const NoSocialLinks: Story = {
  args: {
    contact: {
      phone: "+48 123 456 789",
      address: "Polska",
      email: "kontakt@ksz.dev",
    },
    socialLinks: [],
  },
};
