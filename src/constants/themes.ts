import {
  IconSun,
  IconMoon,
  IconSystemTheme,
  IconFontMonospace,
  IconFontSansSerif,
  IconFontSerif,
} from "../components/icons";

export const colorThemes = [
  {
    id: 1,
    name: "light",
    title: "Light Mode",
    description: "Pick a clean and classic light theme",
    icon: IconSun,
  },
  {
    id: 2,
    name: "dark",
    title: "Dark Mode",
    description: "Select a sleek and modern dark theme",
    icon: IconMoon,
  },
  {
    id: 3,
    name: "system",
    title: "System",
    description: "Adapts to your device's theme",
    icon: IconSystemTheme,
  },
];

export const fontThemes = [
  {
    id: 1,
    name: "sans-serif",
    title: "Sans Serif",
    description: "Clean and modern, easy to read.",
    icon: IconFontSansSerif,
  },
  {
    id: 2,
    name: "serif",
    title: "Serif",
    description: "Classic and elegant for a timeless feel.",
    icon: IconFontSerif,
  },
  {
    id: 3,
    name: "monospace",
    title: "Monospace",
    description: "Code-like, great for a technical vibe.",
    icon: IconFontMonospace,
  },
];
