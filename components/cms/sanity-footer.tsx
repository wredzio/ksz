import { Footer } from '@/components/sections/footer/footer';
import { ResponsiveImage } from '@/components/ui/image/image';
import Image from 'next/image';

interface SanityFooterData {
  footerImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
    hotspot?: unknown;
    crop?: unknown;
  };
  phone?: string;
  address?: string;
  mail?: string;
  social?: Array<{
    media: 'Facebook' | 'Instagram' | 'Twitter' | 'Linkedin' | 'Youtube';
    url: string;
  }>;
}

export function SanityFooter(props: SanityFooterData) {
  // Używaj statycznego logo
  const logoComponent = (
    <div className='relative h-full w-full'>
      <Image src='/images/wb-cars-logo.svg' alt='WB Cars Logo' fill className='object-contain object-left' priority />
    </div>
  );

  // Renderuj showcase image z Sanity lub fallback
  const showcaseImageComponent = props.footerImage?.asset ? (
    <ResponsiveImage loaderType='sanity' image={props.footerImage} aspectRatio='1/1' />
  ) : (
    <div className='flex h-full w-full items-center justify-center rounded-[10px] bg-gray-200'>
      <span className='text-gray-500'>No Image</span>
    </div>
  );

  return (
    <Footer
      logo={logoComponent}
      showcaseImage={showcaseImageComponent}
      contact={{
        phone: props.phone || '',
        address: props.address || '',
        email: props.mail || '',
      }}
      socialLinks={
        props.social?.map((social) => ({
          platform: social.media as 'Facebook' | 'Instagram' | 'Twitter' | 'Linkedin' | 'Youtube',
          url: social.url,
        })) || []
      }
    />
  );
}
