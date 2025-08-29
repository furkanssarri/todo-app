import { createContext } from "react";

export type FontTheme = "sans-serif" | "serif" | "monospace";

type FontThemeContextType = {
  fontTheme: FontTheme;
  setFontTheme: (fontTheme: FontTheme) => void;
};

export const FontThemeContext = createContext<FontThemeContextType | null>(
  null,
);
