import { defineField, defineType } from "sanity";

export const aboutSection = defineType({
  name: "aboutSection",
  type: "object",
  title: "About Section",
  fields: [
    defineField({
      name: "id",
      type: "string",
      title: "ID sekcji (anchor)",
      description: 'ID używane do linkowania (np. "o-nas" dla /#o-nas)',
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
      name: "description",
      type: "text",
      title: "Opis",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "features",
      type: "array",
      title: "Cechy / Feature",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              type: "string",
              title: "Ikona (nazwa Lucide)",
              description:
                "Nazwa ikony z biblioteki Lucide (np. Code, Zap, Shield)",
              validation: (Rule) => Rule.required(),
            }),
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
              rows: 3,
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
      validation: (Rule) => Rule.required().min(1).max(6),
    }),
  ],
});
