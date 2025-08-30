import { useContext, useState } from "react";
import { FontThemeContext, type FontsTheme } from "../context/fontThemeContext";
import {
  IconArrowLeft,
  IconFontMonospace,
  IconFontSansSerif,
  IconFontSerif,
} from "./icons";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { MobileContext } from "../context/MobileContext";

const fontThemes = [
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

const FontTheme = () => {
  const [selectedFontTheme, setSelectedFontTheme] = useState<FontsTheme>(() => {
    return (localStorage.getItem("font-theme") as FontsTheme) || "sans-serif";
  });

  const navigate = useNavigate();

  const { isMobile, isTablet } = useContext(MobileContext);

  const fontThemeCtx = useContext(FontThemeContext);
  if (!fontThemeCtx) {
    throw new Error("FontTheme must be used within a ThemeProvider.");
  }

  const { setFontTheme } = fontThemeCtx;

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
      <h2 className="setting-heading">Font Theme</h2>
      <fieldset className="setting-selector">
        <legend>Choose your font theme:</legend>
        {fontThemes.map((font) => {
          const Icon = font.icon;
          return (
            <label
              htmlFor={font.name}
              className={`setting-item ${
                selectedFontTheme === font.name ? "active" : ""
              }`}
              key={font.id}
            >
              <div className="text-preset-4 setting-item-inner">
                <div className="item-middle">
                  <span className="setting-icon">
                    <Icon />
                  </span>
                  <div>
                    {font.title}
                    <p className="text-preset-6">{font.description}</p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="font-theme"
                  id={font.name}
                  value={font.name}
                  checked={selectedFontTheme === font.name}
                  onChange={(e) =>
                    setSelectedFontTheme(
                      e.target.value as "sans-serif" | "serif" | "monospace",
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
              setFontTheme(selectedFontTheme);
              localStorage.setItem("font-theme", selectedFontTheme);
            }}
          >
            Apply Changes
          </Button>
        </div>
      </fieldset>
    </>
  );
};

export default FontTheme;
