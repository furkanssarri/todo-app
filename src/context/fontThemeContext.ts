import { createContext } from "react";

export type FontsTheme = "sans-serif" | "serif" | "monospace";

type FontThemeContextType = {
  fontTheme: FontsTheme;
  setFontTheme: (fontTheme: FontsTheme) => void;
};

export const FontThemeContext = createContext<FontThemeContextType | null>(
  null,
);
