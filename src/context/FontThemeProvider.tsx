import { useEffect, useState } from "react";
import { FontThemeContext, type FontsTheme } from "./fontThemeContext";

export function FontThemeProvider({ children }: { children: React.ReactNode }) {
  const [fontTheme, setFontTheme] = useState<FontsTheme>(() => {
    return (localStorage.getItem("font-theme") as FontsTheme) || "sans-serif";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-font", fontTheme);
    localStorage.setItem("font-theme", fontTheme);
  }, [fontTheme]);

  return (
    <FontThemeContext.Provider value={{ fontTheme, setFontTheme }}>
      {children}
    </FontThemeContext.Provider>
  );
}
