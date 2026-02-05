import { PageSection } from "@/components/layout/page-section/page-section";
import { ContactFormSection } from "@/components/sections/contact-form-section/contact-form-section";

interface SanityContactFormSectionProps {
  _key: string;
  _type: "contactFormSection";
  id?: string | null;
  title: string;
  subtitle?: string | null;
}

export const SanityContactFormSection = (
  props: SanityContactFormSectionProps,
) => {
  return (
    <PageSection id={props.id ?? undefined} key={props._key}>
      <ContactFormSection title={props.title} subtitle={props.subtitle} />
    </PageSection>
  );
};
