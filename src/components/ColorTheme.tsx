import { useContext, useState } from "react";
import Button from "./Button";
import { IconMoon, IconSun, IconSystemTheme } from "./icons";
import { ThemeContext, type Theme } from "../context/themeContext";

const colorThemes = [
  {
    id: 1,
    name: "light",
    title: "Light Mode",
    description: "Pick a clean and classic light theme",
    icon: IconSun,
    isActive: false,
  },
  {
    id: 2,
    name: "dark",
    title: "Dark Mode",
    description: "Select a sleek and modern dark theme",
    icon: IconMoon,
    isActive: false,
  },
  {
    id: 3,
    name: "system",
    title: "System",
    description: "Adapts to your device's theme",
    icon: IconSystemTheme,
    isActive: false,
  },
];

const ColorTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  const themeCtx = useContext(ThemeContext);
  if (!themeCtx) {
    throw new Error("ColorTheme must be used within a ThemeProvider.");
  }
  const { setTheme } = themeCtx;

  return (
    <>
      <h2 className="setting-heading">Color Theme</h2>
      <fieldset className="setting-selector">
        <legend>Choose your color theme:</legend>
        {colorThemes.map((theme) => {
          const Icon = theme.icon;
          return (
            <div className="setting-item" key={theme.id}>
              <span className="setting-icon">
                <Icon />
              </span>
              <label className="text-preset-4" htmlFor={theme.name}>
                {theme.title}
                <p className="text-preset-6">{theme.description}</p>
              </label>
              <input
                type="radio"
                name="theme"
                id={theme.name}
                value={theme.name}
                checked={selectedTheme === theme.name}
                onChange={(e) =>
                  setSelectedTheme(
                    e.target.value as "light" | "dark" | "system",
                  )
                }
              />
            </div>
          );
        })}
        <div className="submit-button">
          <Button
            color="primary"
            size="lg"
            onClick={() => {
              setTheme(selectedTheme);
              localStorage.setItem("theme", selectedTheme);
            }}
          >
            Apply Changes
          </Button>
        </div>
      </fieldset>
    </>
  );
};

export default ColorTheme;
