import { useEffect, useState } from "react";
import { FontThemeContext, type FontTheme } from "./fontThemeContext";

export function FontThemeProvider({ children }: { children: React.ReactNode }) {
  const [fontTheme, setFontTheme] = useState<FontTheme>(() => {
    return (localStorage.getItem("font-theme") as FontTheme) || "sans-serif";
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
