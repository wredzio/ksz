import { RichText } from "@/components/cms/shared/rich-text/rich-text";
import { PageSection } from "@/components/layout/page-section/page-section";
import { ResponsiveImage } from "@/components/ui/image/image";

interface SanityImageSectionProps {
  _key: string;
  _type: "imageSection";
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  image: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: any;
    aspectRatio: string;
  };
  layout: "left" | "right";
  fullWidth?: boolean | null;
}

export const SanityImageSection = (props: SanityImageSectionProps) => {
  const fullWidth = props.fullWidth || false;

  return (
    <PageSection key={props._key} fullWidth={fullWidth}>
      <div className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div
            className={`flex flex-col gap-8 md:flex-row md:items-center ${props.layout === "right" ? "md:flex-row-reverse" : ""}`}
          >
            <div className="flex-1">
              <div className="mb-4 h-0.5 w-12 bg-primary" />
              <h2 className="font-syne mb-4 text-2xl font-bold text-foreground md:text-3xl">
                {props.title}
              </h2>
              <div className="font-dm-sans text-muted-foreground">
                <RichText value={props.body} />
              </div>
            </div>
            <div className="flex-1">
              {props.image?.image?.asset && (
                <ResponsiveImage
                  loaderType="sanity"
                  image={props.image.image}
                  alt={props.title}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  aspectRatio={props.image.aspectRatio as any}
                  priority={false}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};
