import { useActiveSectionContext } from "@context/active-section-context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import type { SectionName, Theme } from "./type";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, lastOfClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - lastOfClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, lastOfClick, sectionName, setActiveSection]);
  return { ref, inView, lastOfClick, sectionName };
}

export function useMountedTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme | undefined>("dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setCurrentTheme(prefersDark ? "dark" : "light");
    } else if (theme) {
      setCurrentTheme(theme as Theme);
    }
  }, [theme]);

  return { currentTheme, setTheme, mounted };
}
