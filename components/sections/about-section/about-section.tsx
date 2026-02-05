import React from "react";
import { icons } from "lucide-react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface AboutSectionProps {
  title: string;
  description: string;
  features: Feature[];
}

export const AboutSection = (props: AboutSectionProps) => {
  const { title, description, features } = props;

  return (
    <div className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="font-syne mb-6 text-3xl font-bold text-foreground uppercase md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="font-dm-sans text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group rounded-xl border border-border bg-card p-8",
                "transition-all duration-300",
                "hover:border-primary/50 hover:neon-glow",
              )}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Icon name={feature.icon as keyof typeof icons} className="size-6 text-primary" />
              </div>
              <h3 className="font-syne mb-3 text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="font-dm-sans text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
