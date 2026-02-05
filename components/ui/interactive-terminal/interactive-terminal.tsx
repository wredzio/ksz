"use client";

import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

import type { TerminalLine, TerminalStep } from "./types";
import { useTypingAnimation } from "./use-typing-animation";

interface InteractiveTerminalProps {
  lines: TerminalLine[];
  currentStep: TerminalStep;
  currentPrompt: string;
  onPromptComplete: () => void;
  onInput: (value: string) => void;
  showInput: boolean;
  inputPlaceholder?: string;
  terminalTitle?: string;
  className?: string;
}

const lineColorMap: Record<TerminalLine["type"], string> = {
  system: "text-primary",
  user: "text-foreground",
  success: "text-green-400",
  error: "text-red-400",
  info: "text-muted-foreground",
};

const linePrefixMap: Record<TerminalLine["type"], string> = {
  system: "$ ",
  user: "> ",
  success: "✓ ",
  error: "✗ ",
  info: "  ",
};

export const InteractiveTerminal = ({
  lines,
  currentStep,
  currentPrompt,
  onPromptComplete,
  onInput,
  showInput,
  inputPlaceholder,
  terminalTitle = "ksz@terminal ~ kontakt",
  className,
}: InteractiveTerminalProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isTypingPrompt = currentPrompt.length > 0;

  const { displayedText: typedPrompt, isTyping } = useTypingAnimation({
    text: currentPrompt,
    enabled: isTypingPrompt,
    speed: 25,
    onComplete: onPromptComplete,
  });

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, typedPrompt, showInput]);

  // Auto-focus input
  useEffect(() => {
    if (showInput && !isTyping) {
      inputRef.current?.focus();
    }
  }, [showInput, isTyping]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("terminal-input") as HTMLInputElement;
    const value = input.value.trim();
    if (value) {
      onInput(value);
      input.value = "";
    }
  };

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card",
        className,
      )}
    >
      {/* macOS header bar */}
      <div className="flex items-center gap-2 border-b border-border bg-card/80 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-red-500/80" />
          <div className="size-3 rounded-full bg-yellow-500/80" />
          <div className="size-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          {terminalTitle}
        </span>
      </div>

      {/* Terminal output */}
      <div
        ref={scrollRef}
        role="log"
        aria-live="polite"
        className="h-80 overflow-y-auto p-4 md:h-96"
      >
        <AnimatePresence initial={false}>
          {lines.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "font-mono text-xs leading-relaxed md:text-sm",
                lineColorMap[line.type],
              )}
            >
              <span
                className={cn(
                  line.type === "user" ? "text-primary" : "opacity-60",
                )}
              >
                {linePrefixMap[line.type]}
              </span>
              {line.text}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Currently typing prompt */}
        {isTypingPrompt && (
          <div className="font-mono text-xs leading-relaxed text-primary md:text-sm">
            <span className="opacity-60">$ </span>
            {typedPrompt}
            {isTyping && (
              <span className="ml-0.5 inline-block animate-pulse">▊</span>
            )}
          </div>
        )}

        {/* Submitting indicator */}
        {currentStep === "submitting" && (
          <div className="font-mono text-xs leading-relaxed text-muted-foreground md:text-sm">
            <span className="animate-pulse">⠋ Wysyłanie...</span>
          </div>
        )}

        {/* Input */}
        {showInput && !isTyping && (
          <form
            role="form"
            aria-label="Formularz kontaktowy"
            onSubmit={handleSubmit}
            className="flex items-center font-mono text-xs leading-relaxed md:text-sm"
          >
            <span className="text-primary">{">"}</span>
            <label htmlFor="terminal-input" className="sr-only">
              {inputPlaceholder ?? "Wpisz odpowiedź"}
            </label>
            <input
              ref={inputRef}
              id="terminal-input"
              name="terminal-input"
              type="text"
              autoComplete="off"
              placeholder={inputPlaceholder}
              className="ml-1.5 flex-1 border-none bg-transparent text-foreground caret-primary outline-none placeholder:text-muted-foreground/50"
            />
          </form>
        )}
      </div>
    </div>
  );
};
