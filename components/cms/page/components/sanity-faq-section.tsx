import { PageSection } from "@/components/layout/page-section/page-section";
import { FaqSection } from "@/components/sections/faq-section/faq-section";

interface SanityFaqSectionProps {
  _key: string;
  _type: "faqSection";
  id?: string | null;
  title: string;
  subtitle?: string | null;
  items: Array<{
    _key: string;
    question: string;
    answer: string;
  }>;
}

export const SanityFaqSection = (props: SanityFaqSectionProps) => {
  return (
    <PageSection id={props.id ?? undefined} key={props._key}>
      <FaqSection
        title={props.title}
        subtitle={props.subtitle}
        items={props.items.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />
    </PageSection>
  );
};
