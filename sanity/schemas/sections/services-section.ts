import { defineField, defineType } from "sanity";

export const servicesSection = defineType({
  name: "servicesSection",
  type: "object",
  title: "Services Section",
  fields: [
    defineField({
      name: "id",
      type: "string",
      title: "ID sekcji (anchor)",
      description: 'ID używane do linkowania (np. "uslugi" dla /#uslugi)',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true;
          if (!/^[a-z0-9-]+$/.test(value)) {
            return "ID może zawierać tylko małe litery, cyfry i myślniki";
          }
          return true;
        }),
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Tytuł",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      type: "string",
      title: "Podtytuł",
    }),
    defineField({
      name: "services",
      type: "array",
      title: "Usługi",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
              title: "Nazwa usługi",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Opis usługi",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "icon",
              type: "string",
              title: "Ikona (nazwa Lucide)",
              description:
                "Nazwa ikony z biblioteki Lucide (np. Globe, Smartphone, Search)",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "icon",
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(8),
    }),
  ],
});
