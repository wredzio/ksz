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
    footerLogo {
      asset-> {
        _id,
        url
      },
      alt,
      hotspot,
      crop
    },
    footerImage {
      asset-> {
        _id,
        url
      },
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
  footerLogo?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
    hotspot?: unknown;
    crop?: unknown;
  };
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