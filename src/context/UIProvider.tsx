// src/context/UIProvider.tsx
import { ThemeProvider } from "./ThemeContextProvider";
import { FontThemeProvider } from "./FontThemeProvider";

export function UIProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <FontThemeProvider>{children}</FontThemeProvider>
    </ThemeProvider>
  );
}
