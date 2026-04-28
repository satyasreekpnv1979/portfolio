"use client";

import { useEffect, useMemo, useState } from "react";
import type { MotionProps } from "framer-motion";

const desktopMotion: MotionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  viewport: { once: true },
};

export const useCardMotion = (): MotionProps => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const updateMotion = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);

    return () => {
      mediaQuery.removeEventListener("change", updateMotion);
    };
  }, []);

  return useMemo(() => (isMobile ? {} : desktopMotion), [isMobile]);
};
