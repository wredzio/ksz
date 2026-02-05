import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FaqSection } from "./faq-section";

const meta = {
  title: "Sections/FaqSection",
  component: FaqSection,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof FaqSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    question: "Ile kosztuje stworzenie strony internetowej?",
    answer:
      "Każdy projekt wyceniamy indywidualnie na podstawie zakresu prac, wymagań funkcjonalnych i złożoności projektu. Skontaktuj się z nami, aby otrzymać bezpłatną wycenę dopasowaną do Twoich potrzeb.",
  },
  {
    question: "Jak długo trwa realizacja projektu?",
    answer:
      "Czas realizacji zależy od złożoności projektu. Prosta strona wizytówka to około 2-3 tygodnie, bardziej rozbudowane projekty z CMS i integracjami to 4-6 tygodni. Dokładny harmonogram ustalamy na etapie briefu.",
  },
  {
    question: "Jakie technologie wykorzystujecie?",
    answer:
      "Pracujemy z najnowszymi technologiami: Next.js, React, TypeScript, Tailwind CSS i Sanity CMS. Wybieramy narzędzia, które gwarantują wydajność, bezpieczeństwo i łatwość dalszego rozwoju strony.",
  },
  {
    question: "Czy oferujecie wsparcie po wdrożeniu?",
    answer:
      "Tak, oferujemy pakiety maintenance obejmujące aktualizacje, monitoring wydajności, poprawki bezpieczeństwa i drobne modyfikacje. Nie zostawiamy klientów po wdrożeniu — jesteśmy dostępni na bieżąco.",
  },
  {
    question: "Czy mogę samodzielnie edytować treści na stronie?",
    answer:
      "Oczywiście! Używamy Sanity CMS — intuicyjnego systemu zarządzania treścią. Po wdrożeniu przeszkolimy Cię z obsługi panelu, dzięki czemu samodzielnie zmienisz teksty, zdjęcia i inne elementy strony.",
  },
  {
    question: "Jak wygląda proces współpracy?",
    answer:
      "Nasz proces składa się z 5 etapów: brief i analiza wymagań, projekt graficzny (UI/UX), development i implementacja, testy na różnych urządzeniach, a na końcu wdrożenie i szkolenie. Na każdym etapie masz pełny wgląd w postępy.",
  },
];

export const Default: Story = {
  args: {
    title: "Najczęściej Zadawane Pytania",
    items: defaultItems,
  },
};

export const WithSubtitle: Story = {
  args: {
    title: "Najczęściej Zadawane Pytania",
    subtitle:
      "Odpowiedzi na pytania, które najczęściej słyszymy od naszych klientów.",
    items: defaultItems,
  },
};
