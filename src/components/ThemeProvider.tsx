import { useState, useEffect } from "react";

type Theme = "dark" | "light";

type Listener = (theme: Theme) => void;
const listeners = new Set<Listener>();

// Initialize theme state safely on both SSR and client
let currentTheme: Theme = "dark";

if (typeof window !== "undefined") {
  const stored = localStorage.getItem("words4web-theme");
  if (stored === "dark" || stored === "light") {
    currentTheme = stored;
  } else {
    currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
}

export const themeStore = {
  getTheme() {
    return currentTheme;
  },
  setTheme(theme: Theme) {
    currentTheme = theme;
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      localStorage.setItem("words4web-theme", theme);
    }
    listeners.forEach((l) => l(theme));
  },
  subscribe(listener: Listener) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
};

// Hook that syncs state across separate React islands
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => themeStore.getTheme());

  useEffect(() => {
    // Sync state with store updates
    const unsubscribe = themeStore.subscribe((newTheme) => {
      setThemeState(newTheme);
    });

    // Make sure initial state matches store (handles any dynamic client mounts)
    setThemeState(themeStore.getTheme());

    return unsubscribe;
  }, []);

  return {
    theme,
    setTheme: (newTheme: Theme) => themeStore.setTheme(newTheme),
  };
}

// Dummy ThemeProvider to preserve component tree signatures
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
