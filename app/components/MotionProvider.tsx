"use client";

import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";

type MotionProviderProps = {
  children: React.ReactNode;
};

export default function MotionProvider({ children }: MotionProviderProps) {
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");

    const updateMotionPreference = () => {
      setReduceMotion(mobileQuery.matches);
    };

    updateMotionPreference();

    mobileQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mobileQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  return <MotionConfig reducedMotion={reduceMotion ? "always" : "never"}>{children}</MotionConfig>;
}