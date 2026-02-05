"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler/animated-theme-toggler";
import { cn } from "@/lib/utils";

export interface NavigationLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface PageHeaderProps {
  navigationLinks: NavigationLink[];
  className?: string;
}

export const Header = ({ navigationLinks, className }: PageHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isMobileMenuOpen]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      setIsMobileMenuOpen(false);

      if (href.startsWith("#") || href.startsWith("/#")) {
        e.preventDefault();
        const targetId = href.replace(/^\/?#/, "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const header = document.querySelector("header");
          const headerHeight = header?.offsetHeight || 0;
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });

          window.history.pushState(null, "", href);
        }
      }
    },
    [],
  );

  return (
    <header
      className={cn(
        "fixed z-50",
        "left-0 right-0",
        "mx-auto",
        "transition-[top,left,right,max-width,padding,border-radius] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
        isScrolled
          ? [
              "top-4 left-4 right-4",
              "max-w-2xl",
              "rounded-3xl",
              "px-5 py-2",
            ]
          : [
              "top-0",
              "max-w-full",
              "px-4 md:px-6 xl:px-0",
            ],
        className,
      )}
    >
      {/* Pill background — fades in/out */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit]",
          "border border-foreground/[0.08]",
          "bg-background/80 backdrop-blur-xl",
          "shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
          "dark:shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]",
          "transition-opacity duration-300",
          isScrolled ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Content */}
      <div
        className={cn(
          "relative mx-auto flex items-center justify-between",
          "transition-[max-width,padding] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isScrolled ? "py-1.5" : "max-w-7xl py-4",
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-syne text-2xl font-extrabold tracking-tight text-primary neon-text-glow"
          aria-label="Strona główna"
        >
          KSZ
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center lg:flex"
          aria-label="Nawigacja główna"
        >
          <div
            className={cn(
              "flex items-center transition-[gap] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
              isScrolled ? "gap-5" : "gap-8 lg:gap-10",
            )}
          >
            {navigationLinks.map((link, index) => (
              <Link
                key={`${link.href}-${index}`}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "font-dm-sans text-[13px] leading-tight font-bold uppercase",
                  "text-foreground/80 transition-colors duration-200",
                  "hover:text-primary",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                )}
              >
                {link.label}
              </Link>
            ))}
            <AnimatedThemeToggler />
          </div>
        </nav>

        {/* Mobile: Theme Toggle + Hamburger */}
        <div className="flex items-center gap-1 lg:hidden">
          <AnimatedThemeToggler />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "flex size-10 items-center justify-center",
              "rounded-full",
              "transition-colors duration-200",
              "hover:bg-foreground/[0.06]",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
            )}
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-6 bg-foreground transition-all duration-300",
                  isMobileMenuOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-foreground transition-all duration-300",
                  isMobileMenuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-foreground transition-all duration-300",
                  isMobileMenuOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu — CSS Grid height animation */}
      <div
        className={cn(
          "relative lg:hidden",
          "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isMobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-foreground/[0.06]">
            <nav
              className="flex flex-col gap-1 py-3"
              aria-label="Nawigacja mobilna"
            >
              {navigationLinks.map((link, index) => (
                <Link
                  key={`mobile-${link.href}-${index}`}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "font-dm-sans text-base leading-tight font-bold uppercase",
                    "text-foreground/80 transition-colors duration-200",
                    "hover:text-primary active:text-primary",
                    "rounded-lg px-3 py-3",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
