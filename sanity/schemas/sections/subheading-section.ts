import { defineField, defineType } from "sanity";

export const subheadingSection = defineType({
  name: "subheadingSection",
  type: "object",
  title: "Subheading Section",
  fields: [
    defineField({
      name: "id",
      type: "string",
      title: "ID sekcji (anchor)",
      description:
        'ID używane do linkowania (np. "o-nas" dla /#o-nas). Tylko małe litery i myślniki.',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true; // ID jest opcjonalne
          if (!/^[a-z0-9-]+$/.test(value)) {
            return "ID może zawierać tylko małe litery, cyfry i myślniki";
          }
          return true;
        }),
    }),
    defineField({
      name: "text",
      type: "string",
      title: "Subheading Text",
      description: "The subheading text to display",
      validation: (Rule) => Rule.required().max(100),
    }),
  ],
  preview: {
    select: {
      text: "text",
    },
    prepare({ text }) {
      return {
        title: text || "Subheading",
        subtitle: "Subheading Section",
      };
    },
  },
});
