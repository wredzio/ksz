import { defineQuery } from "next-sanity";

export const pageQuery =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  slug,
  metadata{
    metaTitle,
    metaDescription,
    keywords,
    ogImage{
      ...,
      asset->
    },
    noIndex
  },
  sections[]{
    _key,
    _type,
    id,
    title,
    description,
    text,
    subtitle,
    ctaText,
    ctaHref,
    images[]{
      ...,
       image{
        ...,
        asset->
      },
      asset->,
      alt,
      aspectRatio
    },
    body[]{
      ...,
      _type == 'image' => {
        ...,
        asset->
      }
    },
    image{
      ...,
      image{
        ...,
        asset->
      },
      aspectRatio
    },
    layout,
    fullWidth,
    phone,
    address,
    email,
    _type == 'aboutSection' => {
      features[]{
        _key,
        icon,
        title,
        description
      }
    },
    _type == 'servicesSection' => {
      services[]{
        _key,
        title,
        description,
        icon
      }
    },
    _type == 'projectsSection' => {
      projects[]{
        _key,
        title,
        description,
        image{
          image{
            asset->,
            alt,
            hotspot
          },
          aspectRatio
        },
        url,
        tags
      }
    },
    _type == 'processSection' => {
      steps[]{
        _key,
        number,
        title,
        description
      }
    },
    _type == 'faqSection' => {
      items[]{
        _key,
        question,
        answer
      }
    }
  }
}`);

export const allPagesQuery = defineQuery(`*[_type == "page"]{
  _id,
  title,
  slug
}`);
