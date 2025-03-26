import { useActiveSectionContext } from "@context/active-section-context";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import type { SectionName, Theme } from "./type";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, lastOfClick } = useActiveSectionContext();
  const lastClickRef = useRef(lastOfClick); // Store the value in a ref

  useEffect(() => {
    if (inView && Date.now() - lastClickRef.current > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection]); // Removed `lastOfClick` to avoid unnecessary re-renders

  return { ref, inView, lastOfClick, sectionName };
}

export function useMountedTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const newTheme = theme === "system" ? "light" : (theme as Theme);
    if (mounted) {
      setCurrentTheme(newTheme);
    }
  }, [theme, mounted]);

  return { currentTheme: currentTheme ?? "dark", setTheme, mounted };
}
