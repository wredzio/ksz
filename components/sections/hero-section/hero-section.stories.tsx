import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { HeroSection } from "./hero-section";

const meta = {
  title: "Sections/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "KSZ",
    description:
      "Tworzymy nowoczesne strony internetowe, które wyróżnią Twój biznes w sieci.",
    ctaText: "Zobacz ofertę",
    ctaHref: "#uslugi",
  },
};

export const WithoutCTA: Story = {
  args: {
    title: "KSZ",
    description: "Profesjonalne rozwiązania webowe dla firm i freelancerów.",
  },
};

export const LongDescription: Story = {
  args: {
    title: "KSZ",
    description:
      "Od pomysłu do realizacji — tworzymy strony internetowe, które nie tylko wyglądają świetnie, ale też przyciągają klientów. Nowoczesny design, szybkie ładowanie, pełna optymalizacja SEO.",
    ctaText: "Skontaktuj się",
    ctaHref: "#kontakt",
  },
};
