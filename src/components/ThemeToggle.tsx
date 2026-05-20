"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Handle hydration mismatch safely without calling setState in an effect
  // next-themes provides resolvedTheme which is undefined on server
  if (resolvedTheme === undefined) {
    return <button className="w-10 h-10 p-2 neo-box bg-background border-2 border-foreground hover:bg-foreground hover:text-background transition-colors" aria-label="Toggle Theme" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 neo-box bg-background text-foreground border-2 border-foreground hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
