import { defineField, defineType } from 'sanity';

export const carouselSection = defineType({
  name: 'carouselSection',
  type: 'object',
  title: 'Carousel Section',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tytuł (opcjonalny)',
      description: 'Niewidoczny dla użytkowników, tylko w CMS',
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Zdjęcia',
      of: [
        {
          type: 'responsiveImage',
          initialValue: {
            aspectRatio: '1/1',
          },
        },
      ],
      validation: (Rule) => Rule.min(1).required(),
      description: 'Dodaj zdjęcia do karuzeli (zalecane kwadratowe 1:1, 3-6 zdjęć)',
    }),
    defineField({
      name: 'showCtaCard',
      type: 'boolean',
      title: 'Pokaż kartę Instagram',
      description: 'Czy wyświetlić żółtą kartę z linkiem do Instagrama',
      initialValue: true,
    }),
    defineField({
      name: 'ctaText',
      type: 'string',
      title: 'Tekst na karcie Instagram',
      description: 'Domyślnie: "Po więcej zapraszamy na nasze konto na instagramie"',
      hidden: ({ parent }) => !parent?.showCtaCard,
    }),
    defineField({
      name: 'instagramUrl',
      type: 'url',
      title: 'Link do Instagrama',
      description: 'Link do profilu Instagram',
      hidden: ({ parent }) => !parent?.showCtaCard,
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'ctaPosition',
      type: 'number',
      title: 'Pozycja karty Instagram',
      description: 'Po którym zdjęciu wyświetlić kartę (np. 2 = po drugim zdjęciu)',
      hidden: ({ parent }) => !parent?.showCtaCard,
      initialValue: 2,
      validation: (Rule) => Rule.min(0).integer(),
    }),
  ],
  preview: {
    select: {
      images: 'images',
      showCta: 'showCtaCard',
      title: 'title',
    },
    prepare({ images, showCta, title }) {
      const imageCount = images?.length || 0;
      const ctaText = showCta ? ' + karta Instagram' : '';
      return {
        title: title || 'Karuzela',
        subtitle: `${imageCount} zdjęć${ctaText}`,
        media: images?.[0]?.image,
      };
    },
  },
});
