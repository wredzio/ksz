import { defineField, defineType } from 'sanity';

export const contactSection = defineType({
  name: 'contactSection',
  type: 'object',
  title: 'Contact Section',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'ID sekcji (anchor)',
      description: 'ID używane do linkowania (np. "kontakt" dla /#kontakt). Tylko małe litery i myślniki.',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true; // ID jest opcjonalne
          if (!/^[a-z0-9-]+$/.test(value)) {
            return 'ID może zawierać tylko małe litery, cyfry i myślniki';
          }
          return true;
        }),
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Telefon',
      description: 'Numer telefonu kontaktowego',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Adres',
      description: 'Adres fizyczny firmy',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      description: 'Adres email kontaktowy',
      validation: (Rule) => Rule.required().email(),
    }),
  ],
});
