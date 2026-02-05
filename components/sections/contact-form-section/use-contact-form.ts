"use client";

import { useCallback, useRef, useState } from "react";

import type { TerminalLine, TerminalStep } from "@/components/ui/interactive-terminal/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 5;

type SubmitFn = (data: {
  email: string;
  message: string;
}) => Promise<{ success: boolean; error?: string }>;

interface UseContactFormOptions {
  submitFn: SubmitFn;
}

let lineCounter = 0;
function createLine(
  type: TerminalLine["type"],
  text: string,
): TerminalLine {
  return { id: `line-${++lineCounter}`, type, text };
}

export function useContactForm({ submitFn }: UseContactFormOptions) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentStep, setCurrentStep] = useState<TerminalStep>("idle");
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [inputPlaceholder, setInputPlaceholder] = useState("");

  const emailRef = useRef("");
  const messageRef = useRef("");
  const startedRef = useRef(false);

  const addLine = useCallback(
    (type: TerminalLine["type"], text: string) => {
      setLines((prev) => [...prev, createLine(type, text)]);
    },
    [],
  );

  const startForm = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    setLines([
      createLine("system", "Witaj! Skontaktuj się z nami."),
      createLine("info", "Wypełnij poniższe pola, aby wysłać wiadomość."),
    ]);
    setCurrentStep("email_prompt");
    setCurrentPrompt("Podaj swój adres email:");
  }, []);

  const handlePromptComplete = useCallback(() => {
    // Add the typed prompt as a system line
    setLines((prev) => [...prev, createLine("system", currentPrompt)]);
    setCurrentPrompt("");

    if (currentStep === "email_prompt") {
      setCurrentStep("email_input");
      setShowInput(true);
      setInputPlaceholder("twoj@email.com");
    } else if (currentStep === "message_prompt") {
      setCurrentStep("message_input");
      setShowInput(true);
      setInputPlaceholder("Twoja wiadomość...");
    } else if (currentStep === "confirm_prompt") {
      setCurrentStep("confirm_input");
      setShowInput(true);
      setInputPlaceholder("y/n");
    } else if (currentStep === "restart_prompt") {
      setCurrentStep("restart_input");
      setShowInput(true);
      setInputPlaceholder("y/n");
    }
  }, [currentStep, currentPrompt]);

  const resetForm = useCallback(() => {
    emailRef.current = "";
    messageRef.current = "";
    startedRef.current = false;
    lineCounter = 0;
    setLines([]);
    setCurrentPrompt("");
    setShowInput(false);
    setCurrentStep("idle");

    // Re-start after a brief pause
    setTimeout(() => {
      startedRef.current = false;
      startForm();
    }, 300);
  }, [startForm]);

  const handleInput = useCallback(
    async (value: string) => {
      if (currentStep === "email_input") {
        addLine("user", value);
        setShowInput(false);

        if (!EMAIL_REGEX.test(value)) {
          addLine("error", "Nieprawidłowy adres email. Spróbuj ponownie.");
          setShowInput(true);
          return;
        }

        emailRef.current = value;
        setCurrentStep("message_prompt");
        setCurrentPrompt("Napisz wiadomość:");
      } else if (currentStep === "message_input") {
        addLine("user", value);
        setShowInput(false);

        if (value.trim().length < MIN_MESSAGE_LENGTH) {
          addLine(
            "error",
            `Wiadomość musi mieć minimum ${MIN_MESSAGE_LENGTH} znaków.`,
          );
          setShowInput(true);
          return;
        }

        messageRef.current = value;
        addLine("info", "─────────────────────────────");
        addLine("info", `Email:      ${emailRef.current}`);
        addLine("info", `Wiadomość:  ${messageRef.current}`);
        addLine("info", "─────────────────────────────");
        setCurrentStep("confirm_prompt");
        setCurrentPrompt("Wysłać wiadomość? (y/n):");
      } else if (currentStep === "confirm_input") {
        const answer = value.toLowerCase();
        addLine("user", value);
        setShowInput(false);

        if (answer === "y" || answer === "yes" || answer === "tak") {
          setCurrentStep("submitting");

          const result = await submitFn({
            email: emailRef.current,
            message: messageRef.current,
          });

          if (result.success) {
            addLine("success", "Wiadomość wysłana pomyślnie!");
            addLine("info", "Odpowiemy najszybciej jak to możliwe.");
            addLine("system", "");
            setCurrentStep("restart_prompt");
            setCurrentPrompt("Nowa wiadomość? (y/n):");
          } else {
            addLine("error", result.error ?? "Wystąpił błąd. Spróbuj ponownie.");
            addLine("system", "");
            setCurrentStep("restart_prompt");
            setCurrentPrompt("Spróbować ponownie? (y/n):");
          }
        } else if (answer === "n" || answer === "no" || answer === "nie") {
          resetForm();
        } else {
          addLine("error", "Wpisz y (tak) lub n (nie).");
          setShowInput(true);
        }
      } else if (currentStep === "restart_input") {
        const answer = value.toLowerCase();
        addLine("user", value);
        setShowInput(false);

        if (answer === "y" || answer === "yes" || answer === "tak") {
          resetForm();
        } else if (answer === "n" || answer === "no" || answer === "nie") {
          addLine("info", "Do zobaczenia! 👋");
          setCurrentStep("idle");
        } else {
          addLine("error", "Wpisz y (tak) lub n (nie).");
          setShowInput(true);
        }
      }
    },
    [currentStep, addLine, submitFn, resetForm],
  );

  return {
    lines,
    currentStep,
    currentPrompt,
    showInput,
    inputPlaceholder,
    startForm,
    handlePromptComplete,
    handleInput,
  };
}
