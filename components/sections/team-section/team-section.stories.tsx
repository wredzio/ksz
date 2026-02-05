import type { Meta, StoryObj } from "@storybook/nextjs";
import { Users } from "lucide-react";

import { TeamSection } from "./team-section";

const MockImage = () => (
  <div className="flex aspect-[4/3] h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
    <Users className="size-16 text-muted-foreground" />
  </div>
);

const meta = {
  title: "Sections/TeamSection",
  component: TeamSection,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof TeamSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Kim jesteśmy",
    description:
      "Jesteśmy przyjaciółmi, którzy połączyli swoje doświadczenie w jedną firmę. Lata pracy w branży IT nauczyły nas, że najlepsze projekty powstają tam, gdzie jest zaufanie i prosta komunikacja.\n\nNie jesteśmy korporacją — jesteśmy małym, zgranym zespołem. Rozmawiamy wprost, działamy szybko i traktujemy każdy projekt jak swój własny. Stawiamy na długofalowe relacje, nie jednorazowe zlecenia.",
    image: <MockImage />,
  },
};
