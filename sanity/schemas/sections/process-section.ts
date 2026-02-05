import { defineField, defineType } from "sanity";

export const processSection = defineType({
  name: "processSection",
  type: "object",
  title: "Process Section",
  fields: [
    defineField({
      name: "id",
      type: "string",
      title: "ID sekcji (anchor)",
      description: 'ID używane do linkowania (np. "proces" dla /#proces)',
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
      name: "steps",
      type: "array",
      title: "Kroki procesu",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "number",
              type: "string",
              title: "Numer kroku",
              description: 'Np. "01", "02"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              type: "string",
              title: "Tytuł kroku",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Opis kroku",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "number",
            },
            prepare({ title, subtitle }) {
              return {
                title: `${subtitle}. ${title}`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(2).max(8),
    }),
  ],
});
