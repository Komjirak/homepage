"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-foreground hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
            aria-label="Toggle theme"
        >
            <Sun className="h-4 w-4 transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
        </button>
    );
}
