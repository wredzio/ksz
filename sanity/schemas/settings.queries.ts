import { defineQuery } from 'next-sanity';

// Query to fetch navigation data from settings
export const navigationQuery = defineQuery(`*[_type == "settings"][0]{
  _id,
  navigation{
    logo{
      ...,
      asset->
    },
    navigationLinks[]{
      label,
      href,
      external,
      order
    } | order(order asc)
  }
}`);

// Query to fetch all settings
export const settingsQuery = defineQuery(`*[_type == "settings"][0]{
  _id,
  title,
  url,
  description,
  keywords,
  openGraphImage{
    ...,
    asset->
  },
  navigation{
    logo{
      ...,
      asset->
    },
    navigationLinks[]{
      label,
      href,
      external,
      order
    } | order(order asc)
  },
  phone,
  mail,
  address,
  nip,
  bdo,
  social[]{
    media,
    url
  }
}`);
