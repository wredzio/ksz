"use client";

import React, { useCallback, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps {
  className?: string;
}

function subscribeToTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getIsDark() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return true; // default dark
}

export const AnimatedThemeToggler = ({
  className,
}: AnimatedThemeTogglerProps) => {
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getIsDark,
    getServerSnapshot,
  );

  const toggleTheme = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const x = e.clientX;
      const y = e.clientY;

      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      const willBeDark = !isDark;

      // Fallback if View Transitions API is not available
      if (!document.startViewTransition) {
        document.documentElement.classList.toggle("dark", willBeDark);
        localStorage.setItem("theme", willBeDark ? "dark" : "light");
        return;
      }

      const transition = document.startViewTransition(() => {
        flushSync(() => {
          document.documentElement.classList.toggle("dark", willBeDark);
          localStorage.setItem("theme", willBeDark ? "dark" : "light");
        });
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 500,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });
    },
    [isDark],
  );

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex size-10 items-center justify-center",
        "rounded-full",
        "transition-colors duration-200",
        "hover:bg-foreground/[0.06]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className,
      )}
      aria-label="Przełącz motyw"
    >
      {isDark ? (
        <Sun className="size-5 text-foreground/80" />
      ) : (
        <Moon className="size-5 text-foreground/80" />
      )}
    </button>
  );
};
