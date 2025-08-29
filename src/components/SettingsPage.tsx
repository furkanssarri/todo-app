import { useParams } from "react-router-dom";
import ColorTheme from "./ColorTheme";
import FontTheme from "./FontTheme";
import ChangePassword from "./ChangePassword";
import type { JSX } from "react";

const SettingsPage = () => {
  const { setting } = useParams();

  const components: Record<string, JSX.Element> = {
    "color-theme": <ColorTheme />,
    "font-theme": <FontTheme />,
    "change-password": <ChangePassword />,
  };

  return (
    <>
      <article className="note-details">
        <div className="note-content">
          <div className="note-body"></div>
          {setting && components[setting] ? (
            components[setting]
          ) : (
            <p>Select a setting.</p>
          )}
        </div>
      </article>
    </>
  );
};

export default SettingsPage;
