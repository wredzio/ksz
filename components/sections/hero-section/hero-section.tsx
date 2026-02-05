"use client";

import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { FloatingLines } from "../../ui/floating-lines/floating-lines";

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText?: string | null;
  ctaHref?: string | null;
}

export const HeroSection = (props: HeroSectionProps) => {
  const { title, description, ctaText, ctaHref } = props;

  return (
    <section className="relative h-dvh w-full overflow-hidden bg-background">
      {/* FloatingLines background */}
      <div className="absolute inset-0">
        <FloatingLines
          linesGradient={["#00ffaa", "#8a2be2", "#00d4ff"]}
          enabledWaves={["middle", "bottom"]}
          lineCount={[2, 2]}
          lineDistance={[88.5, 88.5]}
          bendRadius={14}
          bendStrength={-1.0}
          animationSpeed={0.8}
          interactive={true}
          parallax={true}
          parallaxStrength={0.15}
          className="h-full w-full"
        />
      </div>

      {/* Bottom gradient fade into background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Content overlay — pointer-events-none so mouse reaches the canvas */}
      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="flex max-w-4xl flex-col items-center gap-8 text-center">
          <h1
            className={cn(
              "font-syne text-5xl font-extrabold tracking-tight text-primary uppercase",
              "neon-text-glow",
              "md:text-7xl lg:text-8xl",
            )}
          >
            {title}
          </h1>

          <p className="font-dm-sans max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:text-2xl">
            {description}
          </p>

          {ctaText && ctaHref && (
            <Link
              href={ctaHref}
              onClick={(e) => {
                if (
                  ctaHref.startsWith("#") ||
                  ctaHref.startsWith("/#")
                ) {
                  e.preventDefault();
                  const targetId = ctaHref.replace(/^\/?#/, "");
                  const target = document.getElementById(targetId);
                  if (target) {
                    const header = document.querySelector("header");
                    const offset = header?.offsetHeight || 0;
                    window.scrollTo({
                      top:
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        offset,
                      behavior: "smooth",
                    });
                    window.history.pushState(null, "", ctaHref);
                  }
                }
              }}
              className={cn(
                "pointer-events-auto font-syne mt-4 inline-flex items-center rounded-full border border-primary px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary",
                "transition-all duration-300",
                "hover:bg-primary hover:text-primary-foreground hover:neon-glow",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              )}
            >
              {ctaText}
            </Link>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-8 w-5 rounded-full border-2 border-primary/50">
            <div className="mx-auto mt-1.5 h-2 w-1 rounded-full bg-primary/70" />
          </div>
        </div>
      </div>
    </section>
  );
};
