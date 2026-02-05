"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface UseTypingAnimationOptions {
  text: string;
  enabled: boolean;
  speed?: number;
  onComplete?: () => void;
}

export function useTypingAnimation({
  text,
  enabled,
  speed = 30,
  onComplete,
}: UseTypingAnimationOptions) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const indexRef = useRef(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const cleanup = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!enabled) {
      cleanup();
      // Use microtask to avoid synchronous setState in effect
      queueMicrotask(() => {
        setDisplayedText("");
        setIsTyping(false);
      });
      indexRef.current = 0;
      return;
    }

    if (prefersReducedMotion) {
      queueMicrotask(() => {
        setDisplayedText(text);
        setIsTyping(false);
        onCompleteRef.current?.();
      });
      return;
    }

    indexRef.current = 0;

    const startTyping = () => {
      setDisplayedText("");
      setIsTyping(true);

      const typeNextChar = () => {
        if (indexRef.current < text.length) {
          indexRef.current++;
          setDisplayedText(text.slice(0, indexRef.current));
          timeoutRef.current = setTimeout(typeNextChar, speed);
        } else {
          setIsTyping(false);
          onCompleteRef.current?.();
        }
      };

      timeoutRef.current = setTimeout(typeNextChar, speed);
    };

    // Start typing via setTimeout to avoid synchronous setState in effect
    timeoutRef.current = setTimeout(startTyping, 0);

    return cleanup;
  }, [text, enabled, speed, prefersReducedMotion, cleanup]);

  return { displayedText, isTyping };
}
