import type { Meta, StoryObj } from "@storybook/nextjs";

import { AboutSection } from "./about-section";

const meta = {
  title: "Sections/AboutSection",
  component: AboutSection,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof AboutSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "O nas",
    description:
      "Jesteśmy zespołem pasjonatów tworzenia stron internetowych. Łączymy nowoczesny design z najnowszymi technologiami, aby dostarczać rozwiązania, które naprawdę działają.",
    features: [
      {
        icon: "Code",
        title: "Nowoczesne technologie",
        description:
          "Korzystamy z Next.js, React i TypeScript — narzędzi, które gwarantują wydajność i skalowalność.",
      },
      {
        icon: "Zap",
        title: "Szybkość działania",
        description:
          "Optymalizujemy każdy element strony, aby ładowała się błyskawicznie na każdym urządzeniu.",
      },
      {
        icon: "Shield",
        title: "Bezpieczeństwo",
        description:
          "Stosujemy najlepsze praktyki zabezpieczeń, aby Twoja strona była chroniona przed zagrożeniami.",
      },
    ],
  },
};

export const TwoFeatures: Story = {
  args: {
    title: "Dlaczego my?",
    description: "Wybierz nas, bo dostarczamy rezultaty.",
    features: [
      {
        icon: "Palette",
        title: "Unikalny design",
        description:
          "Każda strona jest projektowana od zera, dopasowana do Twojej marki.",
      },
      {
        icon: "Headphones",
        title: "Wsparcie 24/7",
        description: "Jesteśmy dostępni zawsze, gdy potrzebujesz pomocy.",
      },
    ],
  },
};
