import { PageSection } from "@/components/layout/page-section/page-section";
import { ContactSection } from "@/components/sections/contact-section/contact-section";

interface SanityContactSectionProps {
  _key: string;
  _type: "contactSection";
  id?: string | null;
  title: string;
  phone: string;
  address: string;
  email: string;
}

export const SanityContactSection = (props: SanityContactSectionProps) => {
  return (
    <PageSection fullWidth key={props._key} id={props.id ?? undefined}>
      <ContactSection
        title={props.title}
        phone={props.phone}
        address={props.address}
        email={props.email}
      />
    </PageSection>
  );
};
