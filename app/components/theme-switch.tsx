"use client";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useMountedTheme } from "@lib/hook";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const { currentTheme, setTheme, mounted } = useMountedTheme();

  // Ensure we do not render until the component is mounted to avoid hydration issues
  if (!mounted) return null;

  return (
    <button
      className="fixed z-50 bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {currentTheme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
