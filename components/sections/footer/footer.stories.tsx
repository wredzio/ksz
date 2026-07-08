import type { Meta, StoryObj } from "@storybook/nextjs-vite";

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
      phones: ["515 569 992", "530 096 608"],
      emails: ["wojciech.szmidt.e@gmail.com", "jkosman95@gmail.com"],
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
      phones: ["515 569 992", "530 096 608"],
      emails: ["wojciech.szmidt.e@gmail.com", "jkosman95@gmail.com"],
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
      phones: ["515 569 992", "530 096 608"],
      emails: ["wojciech.szmidt.e@gmail.com", "jkosman95@gmail.com"],
    },
    socialLinks: [],
  },
};
