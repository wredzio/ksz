import { defineField, defineType } from "sanity";

export const projectsSection = defineType({
  name: "projectsSection",
  type: "object",
  title: "Projects Section",
  fields: [
    defineField({
      name: "id",
      type: "string",
      title: "ID sekcji (anchor)",
      description: 'ID używane do linkowania (np. "projekty" dla /#projekty)',
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
      name: "projects",
      type: "array",
      title: "Projekty",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
              title: "Nazwa projektu",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Opis projektu",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "image",
              type: "responsiveImage",
              title: "Zdjęcie projektu",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              type: "url",
              title: "URL projektu",
              description: "Link do strony projektu (opcjonalny)",
            }),
            defineField({
              name: "tags",
              type: "array",
              title: "Tagi technologii",
              of: [{ type: "string" }],
            }),
          ],
          preview: {
            select: {
              title: "title",
              media: "image.image",
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
