import { PageSection } from "@/components/layout/page-section/page-section";
import { AboutSection } from "@/components/sections/about-section/about-section";

interface SanityAboutSectionProps {
  _key: string;
  _type: "aboutSection";
  id?: string | null;
  title: string;
  description: string;
  features: Array<{
    _key: string;
    icon: string;
    title: string;
    description: string;
  }>;
}

export const SanityAboutSection = (props: SanityAboutSectionProps) => {
  return (
    <PageSection id={props.id ?? undefined} key={props._key}>
      <AboutSection
        title={props.title}
        description={props.description}
        features={props.features.map((f) => ({
          icon: f.icon,
          title: f.title,
          description: f.description,
        }))}
      />
    </PageSection>
  );
};
