import { PageSection } from "@/components/layout/page-section/page-section";
import { HeroSection } from "@/components/sections/hero-section/hero-section";

interface SanityHeroSectionProps {
  _key: string;
  _type: "heroSection";
  title: string;
  description: string;
  ctaText?: string | null;
  ctaHref?: string | null;
}

export const SanityHeroSection = (props: SanityHeroSectionProps) => {
  return (
    <PageSection className="mt-0" fullWidth key={props._key}>
      <HeroSection
        title={props.title}
        description={props.description}
        ctaText={props.ctaText}
        ctaHref={props.ctaHref}
      />
    </PageSection>
  );
};
