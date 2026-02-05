import React from "react";
import { icons } from "lucide-react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ServicesSectionProps {
  title: string;
  subtitle?: string | null;
  services: Service[];
}

export const ServicesSection = (props: ServicesSectionProps) => {
  const { title, subtitle, services } = props;

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

        {/* Services grid */}
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border bg-card p-8",
                "transition-all duration-300",
                "hover:border-accent/50 hover:neon-glow-accent",
              )}
            >
              {/* Accent line top */}
              <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <Icon name={service.icon as keyof typeof icons} className="size-7 text-accent" />
              </div>
              <h3 className="font-syne mb-3 text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="font-dm-sans text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
