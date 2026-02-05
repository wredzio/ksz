import React from "react";

import { cn } from "@/lib/utils";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title: string;
  subtitle?: string | null;
  steps: Step[];
}

export const ProcessSection = (props: ProcessSectionProps) => {
  const { title, subtitle, steps } = props;

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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 left-6 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2 md:block" />

          <ol className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <li
                key={index}
                className={cn(
                  "relative flex flex-col gap-4 md:flex-row md:items-center md:gap-12",
                  {
                    "md:flex-row-reverse": index % 2 === 1,
                  },
                )}
              >
                {/* Content */}
                <div
                  className={cn("flex-1", {
                    "md:text-right": index % 2 === 0,
                    "md:text-left": index % 2 === 1,
                  })}
                >
                  <div
                    className={cn(
                      "rounded-xl border border-border bg-card p-6",
                      "transition-all duration-300",
                      "hover:border-primary/30 hover:neon-glow",
                    )}
                  >
                    <h3 className="font-syne mb-2 text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="font-dm-sans text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Number circle */}
                <div className="absolute -top-6 left-4 z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background md:relative md:inset-auto">
                  <span className="font-syne text-sm font-bold text-primary" aria-hidden="true">
                    {step.number}
                  </span>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 md:block" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
