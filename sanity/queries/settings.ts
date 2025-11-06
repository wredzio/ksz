export const settingsQuery = `
  *[_type == "settings"][0] {
    _id,
    title,
    description,
    keywords,
    url,
    phone,
    address,
    mail,
    social,
    footerImage {
      ...,
      asset->,
      alt,
      hotspot,
      crop
    }
  }
`;


export type SettingsData = {
  _id: string;
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
  phone?: string;
  address?: string;
  mail?: string;
  social?: Array<{
    media: 'Facebook' | 'Instagram' | 'Twitter' | 'Linkedin' | 'Youtube';
    url: string;
  }>;
  footerImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
    hotspot?: unknown;
    crop?: unknown;
  };
};