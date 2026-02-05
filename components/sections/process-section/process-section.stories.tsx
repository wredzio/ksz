import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ProcessSection } from "./process-section";

const meta = {
  title: "Sections/ProcessSection",
  component: ProcessSection,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof ProcessSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Jak pracujemy",
    subtitle: "Nasz sprawdzony proces tworzenia stron internetowych",
    steps: [
      {
        number: "01",
        title: "Konsultacja",
        description:
          "Poznajemy Twój biznes, cele i oczekiwania. Razem ustalamy zakres projektu i dobieramy najlepsze rozwiązania.",
      },
      {
        number: "02",
        title: "Projektowanie",
        description:
          "Tworzymy projekt graficzny strony, który jest zgodny z Twoją marką i przyciąga uwagę użytkowników.",
      },
      {
        number: "03",
        title: "Realizacja",
        description:
          "Programujemy stronę z użyciem najnowszych technologii, dbając o wydajność i responsywność.",
      },
      {
        number: "04",
        title: "Wdrożenie",
        description:
          "Uruchamiamy stronę, konfigurujemy hosting i szkolimy Cię z obsługi systemu zarządzania treścią.",
      },
    ],
  },
};

export const ThreeSteps: Story = {
  args: {
    title: "Proces",
    steps: [
      {
        number: "01",
        title: "Analiza",
        description: "Analizujemy potrzeby i cele projektu.",
      },
      {
        number: "02",
        title: "Tworzenie",
        description: "Projektujemy i programujemy rozwiązanie.",
      },
      {
        number: "03",
        title: "Dostawa",
        description: "Wdrażamy i zapewniamy wsparcie.",
      },
    ],
  },
};
