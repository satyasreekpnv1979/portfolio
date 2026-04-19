"use client";

import { useLayoutEffect } from "react";
import Home from "../page";

const sectionToAnchorId: Record<string, string> = {
  about: "about",
  experience: "experience",
  education: "education",
  "phd-guidance": "phd-guidance",
  responsibilities: "responsibilities",
  publications: "publications",
  nptel: "nptel",
  awards: "awards",
  patents: "patents",
  "academic-enrichment": "academic-enrichment",
  "professional-profile": "professional-profile",
  contact: "contact",
};

type SectionRouteClientProps = {
  section: string;
};

export default function SectionRouteClient({ section }: SectionRouteClientProps) {
  useLayoutEffect(() => {
    const targetId = sectionToAnchorId[section];
    if (!targetId) {
      return;
    }

    const instantScrollTo = (top: number) => {
      const htmlElement = document.documentElement;
      const bodyElement = document.body;
      const previousHtmlScrollBehavior = htmlElement.style.scrollBehavior;
      const previousBodyScrollBehavior = bodyElement.style.scrollBehavior;

      htmlElement.style.scrollBehavior = "auto";
      bodyElement.style.scrollBehavior = "auto";
      window.scrollTo(0, top);

      window.requestAnimationFrame(() => {
        htmlElement.style.scrollBehavior = previousHtmlScrollBehavior;
        bodyElement.style.scrollBehavior = previousBodyScrollBehavior;
      });
    };

    let rafId = 0;
    let attempts = 0;

    const jumpToTargetSection = () => {
      const element = document.getElementById(targetId);
      if (!element) {
        if (attempts < 12) {
          attempts += 1;
          rafId = window.requestAnimationFrame(jumpToTargetSection);
        }
        return;
      }

      const navbarHeight = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      instantScrollTo(offsetPosition);
    };

    const timeoutId = window.setTimeout(() => {
      jumpToTargetSection();
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [section]);

  return <Home />;
}
