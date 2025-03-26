"use client";
import { ThemeProvider } from "next-themes";

import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "./components/Header";
import ThemeSwitch from "./components/theme-switch";

import { Toaster } from "react-hot-toast";
import { useMountedTheme } from "@/lib/hook";
import { StarsCanvas } from "./components/StarBackground";

export default function ThemeProviderWraper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentTheme, mounted } = useMountedTheme();
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ActiveSectionContextProvider>
        <Header />
        {children}
        <Toaster position="top-center" />
        {mounted && currentTheme === "dark" && <StarsCanvas />}
        <ThemeSwitch />
      </ActiveSectionContextProvider>
    </ThemeProvider>
  );
}
