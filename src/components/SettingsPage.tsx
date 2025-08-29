import { useParams } from "react-router-dom";
import ColorTheme from "./ColorTheme";
import FontTheme from "./FontTheme";
import ChangePassword from "./ChangePassword";
import { useContext, type JSX } from "react";
import { MobileContext } from "../context/MobileContext";
import ActionsMenu from "./ActionsMenu";

const SettingsPage = () => {
  const { isDesktop } = useContext(MobileContext);
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
          <div className="note-body">
            {setting && components[setting] ? (
              components[setting]
            ) : (
              <p>Select a setting.</p>
            )}
          </div>
        </div>
      </article>
      {isDesktop && <ActionsMenu />}
    </>
  );
};

export default SettingsPage;
