import { PageSection } from "@/components/layout/page-section/page-section";
import { ServicesSection } from "@/components/sections/services-section/services-section";

interface SanityServicesSectionProps {
  _key: string;
  _type: "servicesSection";
  id?: string | null;
  title: string;
  subtitle?: string | null;
  services: Array<{
    _key: string;
    title: string;
    description: string;
    icon: string;
  }>;
}

export const SanityServicesSection = (props: SanityServicesSectionProps) => {
  return (
    <PageSection id={props.id ?? undefined} key={props._key}>
      <ServicesSection
        title={props.title}
        subtitle={props.subtitle}
        services={props.services.map((s) => ({
          title: s.title,
          description: s.description,
          icon: s.icon,
        }))}
      />
    </PageSection>
  );
};
