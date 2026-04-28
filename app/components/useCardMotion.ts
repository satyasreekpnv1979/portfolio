"use client";

import { useEffect, useMemo, useState } from "react";
import type { MotionProps } from "framer-motion";

const desktopMotion: MotionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  viewport: { once: true },
};

// On mobile: no animations at all.
// - initial={false} → skip initial state; Framer Motion won't hide the element.
// - animate → instantly snap to fully visible (duration 0 = no animation).
// - NO whileInView / NO viewport → no IntersectionObserver attached.
//   This is the key: IntersectionObserver callbacks during scroll cause
//   layout thrashing and the "stutter when restarting scroll" bug.
const mobileMotion: MotionProps = {
  initial: false,
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0 },
};

export const useCardMotion = (): MotionProps => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  return useMemo(() => {
    // Return desktopMotion during SSR so server HTML matches first client render
    if (!mounted) return desktopMotion;
    return isMobile ? mobileMotion : desktopMotion;
  }, [isMobile, mounted]);
};
