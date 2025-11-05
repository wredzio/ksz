import { PhoneCall, Building2, Mail, Facebook, Instagram } from 'lucide-react';

import { ResponsiveImage } from '@/components/ui/image/image';

interface SanityFooterData {
  footerLogo?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  footerImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
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
  return (
    <footer className="bg-secondary">
      <div className="px-4 py-16 md:px-16 lg:px-[62px] lg:py-[84px]">
        <div className="mx-auto max-w-[1200px]">
          {/* Main Content */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
            {/* Left Column - Logo, Line, Showcase Image */}
            <div className="flex flex-col gap-6 lg:gap-8 lg:shrink-0 lg:w-[350px]">
              {/* Logo */}
              <div className="h-16 w-full lg:h-[92px]">
                {props.footerLogo?.asset && (
                  <ResponsiveImage
                    loaderType="sanity"
                    image={props.footerLogo}
                    className="h-full w-full object-contain object-left"
                    aspectRatio={{ type_: 'custom', value: '3/1' }}
                  />
                )}
              </div>

              {/* Decorative Line */}
              <div className="h-px w-full bg-gradient-to-r from-primary to-transparent"></div>

              {/* Showcase Image */}
              <div className="h-64 w-full max-w-[312px] lg:h-[305px] lg:w-[312px]">
                {props.footerImage?.asset && (
                  <ResponsiveImage
                    loaderType="sanity"
                    image={props.footerImage}
                    className="rounded-[10px] h-full w-full object-cover"
                    aspectRatio="1/1"
                  />
                )}
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="flex flex-col justify-start lg:max-w-[869px] lg:pt-16">
              <div className="flex flex-col gap-2">
                {/* Contact Header */}
                <div className="mb-2">
                  <h2 className="font-montserrat text-2xl font-bold uppercase tracking-[3.2px] text-primary lg:text-[32px]">
                    Kontakt
                  </h2>
                </div>

                {/* Contact Items */}
                <div className="flex flex-col gap-3">
                  {/* Phone */}
                  {props.phone && (
                    <div className="flex items-center gap-2">
                      <PhoneCall size={24} className="text-white shrink-0" />
                      <p className="font-montserrat text-sm uppercase tracking-[0.48px] text-white lg:text-base">
                        Telefon: {props.phone}
                      </p>
                    </div>
                  )}

                  {/* Address */}
                  {props.address && (
                    <div className="flex items-center gap-2">
                      <Building2 size={24} className="text-white shrink-0" />
                      <p className="font-montserrat text-sm uppercase tracking-[0.48px] text-white lg:text-base">
                        Adres: {props.address}
                      </p>
                    </div>
                  )}

                  {/* Email */}
                  {props.mail && (
                    <div className="flex items-center gap-2">
                      <Mail size={24} className="text-white shrink-0" />
                      <p className="font-montserrat text-sm uppercase tracking-[0.48px] text-white lg:text-base">
                        Mail:{' '}
                        <a
                          href={`mailto:${props.mail}`}
                          className="underline decoration-solid underline-offset-2 hover:text-primary transition-colors"
                        >
                          {props.mail}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Follow Us & Social */}
          <div className="mt-6 flex flex-col items-start justify-between gap-4 lg:mt-8 lg:flex-row lg:items-center">
            {/* Follow Us Text */}
            <div>
              <h3 className="font-orbitron text-3xl font-semibold uppercase text-white lg:text-[48px] lg:leading-none">
                Follow us
              </h3>
            </div>

            {/* Social Links */}
            {props.social && props.social.length > 0 && (
              <div className="flex gap-3">
                {props.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                    aria-label={`Follow us on ${social.media}`}
                  >
                    {social.media === 'Facebook' && (
                      <div className="flex h-[59px] w-[59px] items-center justify-center rounded-full bg-white transition-colors hover:bg-primary">
                        <Facebook size={30} className="text-secondary transition-colors" />
                      </div>
                    )}
                    {social.media === 'Instagram' && (
                      <div className="flex h-[59px] w-[59px] items-center justify-center rounded-full bg-white transition-colors hover:bg-primary">
                        <Instagram size={30} className="text-secondary transition-colors" />
                      </div>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}