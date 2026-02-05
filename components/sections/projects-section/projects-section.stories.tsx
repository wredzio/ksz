import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ProjectsSection } from "./projects-section";

const MockImage = ({ alt }: { alt: string }) => (
  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
    <span className="text-sm text-muted-foreground">{alt}</span>
  </div>
);

const meta = {
  title: "Sections/ProjectsSection",
  component: ProjectsSection,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof ProjectsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Projekty",
    subtitle: "Zobacz nasze ostatnie realizacje",
    projects: [
      {
        title: "Restauracja Italiano",
        description:
          "Nowoczesna strona internetowa dla restauracji z rezerwacją online i menu w formie galerii.",
        image: <MockImage alt="Restauracja Italiano" />,
        url: "https://example.com",
        tags: ["Next.js", "Tailwind", "Sanity CMS"],
      },
      {
        title: "Studio Fotografii",
        description:
          "Portfolio fotografa z galerią zdjęć i systemem rezerwacji sesji.",
        image: <MockImage alt="Studio Fotografii" />,
        tags: ["React", "TypeScript", "Framer Motion"],
      },
      {
        title: "Kancelaria Prawna",
        description:
          "Profesjonalna strona wizytówka kancelarii prawnej z blogiem prawniczym.",
        image: <MockImage alt="Kancelaria Prawna" />,
        url: "https://example.com",
        tags: ["Next.js", "Sanity", "SEO"],
      },
      {
        title: "Sklep z odzieżą",
        description:
          "Sklep internetowy z integracją płatności i zarządzaniem magazynem.",
        image: <MockImage alt="Sklep z odzieżą" />,
        tags: ["E-commerce", "Stripe", "React"],
      },
    ],
  },
};

export const SingleProject: Story = {
  args: {
    title: "Realizacja",
    projects: [
      {
        title: "Strona firmowa XYZ",
        description:
          "Kompleksowa strona firmowa z systemem zarządzania treścią.",
        image: <MockImage alt="Strona firmowa" />,
        tags: ["Next.js", "CMS"],
      },
    ],
  },
};
