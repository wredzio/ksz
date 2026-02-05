import React from "react";

interface TeamSectionProps {
  title: string;
  description: string;
  image: React.ReactNode;
}

export const TeamSection = (props: TeamSectionProps) => {
  const { title, description, image } = props;

  const words = title.split(" ");
  const lastWord = words.pop();
  const titleStart = words.join(" ");

  const paragraphs = description.split("\n\n").filter(Boolean);

  return (
    <div className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12 lg:gap-16">
          <div className="flex-1 overflow-hidden rounded-2xl border border-border">
            {image}
          </div>

          <div className="flex flex-1 flex-col justify-center">
            <div className="mb-4 h-0.5 w-12 bg-primary" />
            <h2 className="font-syne mb-6 text-3xl font-bold text-foreground md:text-4xl">
              {titleStart}{" "}
              <span className="text-primary">{lastWord}</span>
            </h2>
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-dm-sans leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
