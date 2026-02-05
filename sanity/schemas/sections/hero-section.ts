import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  type: "object",
  title: "Hero Section",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Tytuł",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Opis",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaText",
      type: "string",
      title: "Tekst przycisku CTA",
      description: 'Tekst wyświetlany na przycisku (np. "Zobacz ofertę")',
    }),
    defineField({
      name: "ctaHref",
      type: "string",
      title: "Link CTA",
      description: 'Anchor lub URL dla przycisku (np. "#uslugi")',
    }),
  ],
});
