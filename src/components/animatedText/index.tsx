"use client";
import { useState, useEffect } from "react";

const WORDS = [
  "Full Stack Developer",
  "Creative Frontend Engineer",
  "Backend API Architect",
];

export function AnimatedText() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === WORDS[index].length + 1 && !deleting) {
      setDeleting(true);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % WORDS.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? 60 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <span className="text-white dark:text-white font-bold lg:text-[70px]">
      {WORDS[index].substring(0, subIndex)}
      <span className="border-r-2 border-white ml-1 animate-pulse"></span>
    </span>
  );
}
