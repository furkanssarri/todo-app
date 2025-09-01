import { useContext, useState } from "react";
import Button from "./Button";
import { IconArrowLeft, IconMoon, IconSun, IconSystemTheme } from "./icons";
import { ThemeContext, type Theme } from "../context/themeContext";
import { MobileContext } from "../context/MobileContext";
import { useNavigate } from "react-router-dom";
import { ToastContext } from "../context/toastContext";

const colorThemes = [
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

const ColorTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  const { isMobile, isTablet } = useContext(MobileContext);
  const navigate = useNavigate();

  const themeCtx = useContext(ThemeContext);
  if (!themeCtx) {
    throw new Error("ColorTheme must be used within a ThemeProvider.");
  }
  const { setTheme } = themeCtx;

  const { showToast } = useContext(ToastContext);

  return (
    <>
      {(isTablet || isMobile) && (
        <div className="mobile-actions">
          <div className="mobile-go-back">
            <a href="#" onClick={() => navigate(-1)}>
              <IconArrowLeft />
              Settings
            </a>
          </div>
        </div>
      )}
      <h2 className="setting-heading">Color Theme</h2>
      <fieldset className="setting-selector">
        <legend>Choose your color theme:</legend>
        {colorThemes.map((theme) => {
          const Icon = theme.icon;
          return (
            <label
              htmlFor={theme.name}
              className={`setting-item ${
                selectedTheme === theme.name ? "active" : ""
              }`}
              key={theme.id}
            >
              <div className="text-preset-4 setting-item-inner">
                <div className="item-middle">
                  <span className="setting-icon">
                    <Icon />
                  </span>
                  <div>
                    {theme.title}
                    <p className="text-preset-6">{theme.description}</p>
                  </div>
                </div>
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
            </label>
          );
        })}
        <div className="submit-button">
          <Button
            color="primary"
            size="lg"
            onClick={() => {
              setTheme(selectedTheme);
              localStorage.setItem("theme", selectedTheme);
              showToast("Settings updated successfully!", "", "success");
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
