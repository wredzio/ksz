import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ServicesSection } from "./services-section";

const meta = {
  title: "Sections/ServicesSection",
  component: ServicesSection,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof ServicesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Usługi",
    subtitle: "Oferujemy kompleksowe usługi tworzenia stron internetowych",
    services: [
      {
        title: "Strony internetowe",
        description:
          "Tworzymy responsywne strony internetowe z nowoczesnym designem i optymalizacją pod wyszukiwarki.",
        icon: "Globe",
      },
      {
        title: "Sklepy internetowe",
        description:
          "E-commerce na miarę Twoich potrzeb — szybkie, bezpieczne i łatwe w zarządzaniu.",
        icon: "ShoppingCart",
      },
      {
        title: "Aplikacje webowe",
        description:
          "Dedykowane aplikacje webowe, które automatyzują procesy i zwiększają efektywność.",
        icon: "Smartphone",
      },
      {
        title: "SEO i optymalizacja",
        description:
          "Pozycjonowanie stron w wyszukiwarkach i optymalizacja wydajności.",
        icon: "Search",
      },
      {
        title: "Systemy CMS",
        description:
          "Wdrażamy systemy zarządzania treścią, które pozwalają Ci samodzielnie aktualizować stronę.",
        icon: "Settings",
      },
      {
        title: "Utrzymanie i wsparcie",
        description:
          "Dbamy o Twoją stronę po wdrożeniu — aktualizacje, monitoring i wsparcie techniczne.",
        icon: "Wrench",
      },
    ],
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: "Co robimy",
    services: [
      {
        title: "Design",
        description: "Projektowanie interfejsów użytkownika.",
        icon: "Palette",
      },
      {
        title: "Development",
        description: "Programowanie front-end i back-end.",
        icon: "Code",
      },
    ],
  },
};
