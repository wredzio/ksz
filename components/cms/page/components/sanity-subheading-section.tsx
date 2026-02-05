import { PageSection } from "@/components/layout/page-section/page-section";

interface SanitySubheadingSectionProps {
  _key: string;
  _type: "subheadingSection";
  id?: string | null;
  text: string;
}

export const SanitySubheadingSection = (
  props: SanitySubheadingSectionProps,
) => {
  return (
    <PageSection key={props._key} id={props.id ?? undefined}>
      <div className="px-4 py-8">
        <h2 className="font-syne text-3xl font-bold text-primary md:text-4xl">
          {props.text}
        </h2>
      </div>
    </PageSection>
  );
};
