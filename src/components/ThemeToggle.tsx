
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

type Theme = "dark" | "light" | "system";

export function ThemeToggle() {
  const [theme, setThemeState] = React.useState<Theme>(
    localStorage.getItem("theme") as Theme || "dark"
  );

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }
    
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(theme === "dark" ? "light" : "dark");
    
    // Add transition class temporarily for smooth color transitions
    document.documentElement.classList.add('transition-colors');
    document.documentElement.style.setProperty('transition-duration', '500ms');
    
    // Remove the transition class after the transition is complete
    setTimeout(() => {
      document.documentElement.classList.remove('transition-colors');
      document.documentElement.style.removeProperty('transition-duration');
    }, 500);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="glassmorphism rounded-full animate-glow-pulse"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-amber-300" />
      ) : (
        <Moon className="h-5 w-5 text-indigo-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
