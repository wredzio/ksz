import { defineField, defineType } from "sanity";

export const contactFormSection = defineType({
  name: "contactFormSection",
  type: "object",
  title: "Formularz Kontaktowy (Terminal)",
  fields: [
    defineField({
      name: "id",
      type: "string",
      title: "ID sekcji (anchor)",
      description: 'ID używane do linkowania (np. "kontakt" dla /#kontakt)',
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
      type: "text",
      title: "Podtytuł",
      rows: 2,
    }),
  ],
});
