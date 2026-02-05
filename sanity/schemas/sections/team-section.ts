import { defineField, defineType } from "sanity";

export const teamSection = defineType({
  name: "teamSection",
  type: "object",
  title: "Team Section",
  fields: [
    defineField({
      name: "id",
      type: "string",
      title: "ID sekcji (anchor)",
      description: 'ID używane do linkowania (np. "zespol" dla /#zespol)',
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
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "responsiveImage",
      title: "Zdjęcie zespołu",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
