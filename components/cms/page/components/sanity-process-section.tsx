import { PageSection } from "@/components/layout/page-section/page-section";
import { ProcessSection } from "@/components/sections/process-section/process-section";

interface SanityProcessSectionProps {
  _key: string;
  _type: "processSection";
  id?: string | null;
  title: string;
  subtitle?: string | null;
  steps: Array<{
    _key: string;
    number: string;
    title: string;
    description: string;
  }>;
}

export const SanityProcessSection = (props: SanityProcessSectionProps) => {
  return (
    <PageSection id={props.id ?? undefined} key={props._key}>
      <ProcessSection
        title={props.title}
        subtitle={props.subtitle}
        steps={props.steps.map((s) => ({
          number: s.number,
          title: s.title,
          description: s.description,
        }))}
      />
    </PageSection>
  );
};
