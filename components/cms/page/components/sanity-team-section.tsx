import { PageSection } from "@/components/layout/page-section/page-section";
import { TeamSection } from "@/components/sections/team-section/team-section";
import { ResponsiveImage } from "@/components/ui/image/image";

interface SanityTeamSectionProps {
  _key: string;
  _type: "teamSection";
  id?: string | null;
  title: string;
  description: string;
  image: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: any;
    aspectRatio: string;
  };
}

export const SanityTeamSection = (props: SanityTeamSectionProps) => {
  return (
    <PageSection id={props.id ?? undefined} key={props._key}>
      <TeamSection
        title={props.title}
        description={props.description}
        image={
          props.image?.image?.asset ? (
            <ResponsiveImage
              loaderType="sanity"
              image={props.image.image}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              aspectRatio={props.image.aspectRatio as any}
              alt={props.image.image.alt || props.title}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-card">
              <span className="text-muted-foreground">Brak zdjęcia</span>
            </div>
          )
        }
      />
    </PageSection>
  );
};
