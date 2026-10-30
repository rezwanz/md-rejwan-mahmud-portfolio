import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function useTypewriter(
  words: string[],
  {
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseTime = 1800,
  }: UseTypewriterOptions = {},
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(() =>
    prefersReducedMotion() ? (words[0] ?? "") : "",
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    if (reducedMotion) return;

    const currentWord = words[wordIndex % words.length];

    if (!isDeleting && text === currentWord) {
      const pause = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(pause);
    }

    if (isDeleting && text === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, 0);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? currentWord.slice(0, prev.length - 1)
            : currentWord.slice(0, prev.length + 1),
        );
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime, reducedMotion]);

  return text;
}
