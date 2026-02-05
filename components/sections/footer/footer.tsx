import { Building2, Facebook, Instagram,Mail, PhoneCall } from "lucide-react";

export interface FooterProps {
  contact: {
    phone: string;
    address: string;
    email: string;
  };
  socialLinks: Array<{
    platform: "Facebook" | "Instagram" | "Twitter" | "Linkedin" | "Youtube";
    url: string;
  }>;
}

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
            <div className="flex flex-col gap-6">
              <span className="font-syne text-3xl font-extrabold text-primary neon-text-glow">
                KSZ
              </span>
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
                  <h2 className="font-syne text-xl font-bold tracking-wider text-primary uppercase">
                    Kontakt
                  </h2>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <PhoneCall size={20} className="shrink-0 text-primary/70" />
                    <p className="font-dm-sans text-sm text-foreground/80">
                      Telefon: {contact.phone}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Building2 size={20} className="shrink-0 text-primary/70" />
                    <p className="font-dm-sans text-sm text-foreground/80">
                      Adres: {contact.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail size={20} className="shrink-0 text-primary/70" />
                    <p className="font-dm-sans text-sm text-foreground/80">
                      Mail:{" "}
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-primary underline-offset-2 transition-colors hover:underline"
                      >
                        {contact.email}
                      </a>
                    </p>
                  </div>
                </div>
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
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                    aria-label={`Obserwuj nas na ${social.platform}`}
                  >
                    {getSocialIcon(social.platform)}
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
