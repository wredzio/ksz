import { Facebook, Instagram, Mail, PhoneCall } from "lucide-react";

import { Logo } from "@/components/ui/logo/logo";

export interface FooterProps {
  contact: {
    phones: string[];
    emails: string[];
  };
  socialLinks: Array<{
    platform: "Facebook" | "Instagram" | "Twitter" | "Linkedin" | "Youtube";
    url: string;
  }>;
}

const telHref = (phone: string) => {
  const digits = phone.replaceAll(" ", "");
  return `tel:${digits.startsWith("+") ? digits : `+48${digits}`}`;
};

export function Footer({ contact, socialLinks }: FooterProps) {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "Facebook":
        return (
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-primary/30 transition-all duration-300 hover:bg-primary/10 hover:neon-glow">
            <Facebook size={24} className="text-primary" />
          </div>
        );
      case "Instagram":
        return (
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-primary/30 transition-all duration-300 hover:bg-primary/10 hover:neon-glow">
            <Instagram size={24} className="text-primary" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-secondary">
      <div className="px-4 py-12 md:px-16 lg:px-[62px] lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Main Content */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Left Column - Logo & Brand */}
            <div className="flex flex-col items-start gap-6">
              <Logo className="h-8" />
              <div className="h-px w-48 bg-gradient-to-r from-primary to-transparent" />
              <p className="font-dm-sans max-w-sm text-sm text-muted-foreground">
                Tworzymy nowoczesne strony internetowe, które wyróżnią Twój
                biznes w sieci.
              </p>
            </div>

            {/* Right Column - Contact Info */}
            <div className="flex flex-col justify-start">
              <div className="flex flex-col gap-2">
                <div className="mb-2">
                  <p className="font-syne text-xl font-bold tracking-wider text-primary uppercase">
                    Kontakt
                  </p>
                </div>

                <address className="flex flex-col gap-3 not-italic">
                  {contact.phones.map((phone) => (
                    <div key={phone} className="flex items-center gap-2">
                      <PhoneCall
                        size={20}
                        className="shrink-0 text-primary/70"
                        aria-hidden="true"
                      />
                      <p className="font-dm-sans text-sm text-foreground/80">
                        <a
                          href={telHref(phone)}
                          className="transition-colors hover:text-primary"
                        >
                          {phone}
                        </a>
                      </p>
                    </div>
                  ))}

                  {contact.emails.map((email) => (
                    <div key={email} className="flex items-center gap-2">
                      <Mail
                        size={20}
                        className="shrink-0 text-primary/70"
                        aria-hidden="true"
                      />
                      <p className="font-dm-sans text-sm text-foreground/80">
                        <a
                          href={`mailto:${email}`}
                          className="text-primary underline-offset-2 transition-colors hover:underline"
                        >
                          {email}
                        </a>
                      </p>
                    </div>
                  ))}
                </address>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 lg:flex-row lg:items-center">
            <p className="font-dm-sans text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} KSZ. Wszystkie prawa
              zastrzeżone.
            </p>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <nav aria-label="Media społecznościowe">
                <ul className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-110"
                        aria-label={`Obserwuj nas na ${social.platform}`}
                      >
                        {getSocialIcon(social.platform)}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
