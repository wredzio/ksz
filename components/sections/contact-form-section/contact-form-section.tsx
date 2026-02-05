"use client";

import { useEffect } from "react";

import { submitContactForm } from "@/app/actions/contact";
import { InteractiveTerminal } from "@/components/ui/interactive-terminal/interactive-terminal";

import { useContactForm } from "./use-contact-form";

interface ContactFormSectionProps {
  title: string;
  subtitle?: string | null;
  submitFn?: (data: {
    email: string;
    message: string;
  }) => Promise<{ success: boolean; error?: string }>;
}

export const ContactFormSection = ({
  title,
  subtitle,
  submitFn = submitContactForm,
}: ContactFormSectionProps) => {
  const {
    lines,
    currentStep,
    currentPrompt,
    showInput,
    inputPlaceholder,
    startForm,
    handlePromptComplete,
    handleInput,
  } = useContactForm({ submitFn });

  useEffect(() => {
    startForm();
  }, [startForm]);

  const words = title.split(" ");
  const lastWord = words.pop();
  const titleStart = words.join(" ");

  return (
    <div className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-syne text-3xl font-bold md:text-4xl lg:text-5xl">
            {titleStart}{" "}
            <span className="text-primary">{lastWord}</span>
          </h2>
          {subtitle && (
            <p className="mt-4 font-dm-sans text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* Terminal */}
        <InteractiveTerminal
          lines={lines}
          currentStep={currentStep}
          currentPrompt={currentPrompt}
          onPromptComplete={handlePromptComplete}
          onInput={handleInput}
          showInput={showInput}
          inputPlaceholder={inputPlaceholder}
          className="neon-glow"
        />
      </div>
    </div>
  );
};
