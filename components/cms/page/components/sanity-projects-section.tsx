import { PageSection } from "@/components/layout/page-section/page-section";
import { ProjectsSection } from "@/components/sections/projects-section/projects-section";
import { ResponsiveImage } from "@/components/ui/image/image";

interface SanityProjectsSectionProps {
  _key: string;
  _type: "projectsSection";
  id?: string | null;
  title: string;
  subtitle?: string | null;
  projects: Array<{
    _key: string;
    title: string;
    description: string;
    image: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      image: any;
      aspectRatio: string;
    };
    url?: string | null;
    tags?: string[] | null;
  }>;
}

export const SanityProjectsSection = (props: SanityProjectsSectionProps) => {
  return (
    <PageSection id={props.id ?? undefined} key={props._key}>
      <ProjectsSection
        title={props.title}
        subtitle={props.subtitle}
        projects={props.projects.map((p) => ({
          title: p.title,
          description: p.description,
          image: p.image?.image?.asset ? (
            <ResponsiveImage
              loaderType="sanity"
              image={p.image.image}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              aspectRatio={p.image.aspectRatio as any}
              alt={p.image.image.alt || p.title}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-card">
              <span className="text-muted-foreground">Brak zdjęcia</span>
            </div>
          ),
          url: p.url,
          tags: p.tags,
        }))}
      />
    </PageSection>
  );
};
