import React from "react";

import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  image: React.ReactNode;
  url?: string | null;
  tags?: string[] | null;
}

interface ProjectsSectionProps {
  title: string;
  subtitle?: string | null;
  projects: Project[];
}

export const ProjectsSection = (props: ProjectsSectionProps) => {
  const { title, subtitle, projects } = props;

  return (
    <div className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-syne mb-4 text-3xl font-bold text-foreground uppercase md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="font-dm-sans mx-auto max-w-2xl text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        {/* Projects grid */}
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const Wrapper = project.url ? "a" : "div";
            const wrapperProps = project.url
              ? {
                  href: project.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <li key={index}>
                <Wrapper
                  {...wrapperProps}
                  className={cn(
                    "group relative block overflow-hidden rounded-xl border border-border bg-card",
                    "transition-all duration-300",
                    "hover:border-primary/50 hover:neon-glow",
                  )}
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    {project.image}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-syne mb-2 text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="font-dm-sans mb-4 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <ul className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <li
                            key={tagIndex}
                            className="rounded-full border border-primary/30 px-3 py-1 text-xs text-primary"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Wrapper>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
