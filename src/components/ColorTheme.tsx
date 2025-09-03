import { useContext, useState } from "react";
import Button from "./Button";
import { ThemeContext, type Theme } from "../context/themeContext";
import { MobileContext } from "../context/MobileContext";
import { ToastContext } from "../context/toastContext";
import { colorThemes } from "../constants/themes";
import NoteActionsMobile from "./NoteActionsMobile";

const ColorTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  const { isMobile, isTablet } = useContext(MobileContext);

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
            <NoteActionsMobile
              exclude={["archive", "restore", "cancel", "delete", "save"]}
            />
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
                <span className="setting-icon">
                  <Icon aria-hidden="true" focusable="false" />
                </span>
                <div className="item-middle">
                  <span>
                    {theme.title}
                    <p className="text-preset-6">{theme.description}</p>
                  </span>
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
            aria-label="Apply color theme changes"
          >
            Apply Changes
          </Button>
        </div>
      </fieldset>
    </>
  );
};

export default ColorTheme;
