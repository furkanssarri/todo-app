import { useParams } from "react-router-dom";
import ColorTheme from "./ColorTheme";
import FontTheme from "./FontTheme";
import ChangePassword from "./ChangePassword";
import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import ActionsMenu from "./ActionsMenu";

const SettingsPage = () => {
  const { isDesktop, isLaptop } = useContext(MobileContext);
  const { setting } = useParams();

  return (
    <main role="main" aria-label="Settings content">
      <section aria-label="Settings section">
        <div className="note-content">
          <div className="note-body">
            {setting === "color-theme" && <ColorTheme />}
            {setting === "font-theme" && <FontTheme />}
            {setting === "change-password" && <ChangePassword />}
          </div>
        </div>
      </section>
      {isDesktop && !isLaptop && (
        <nav aria-label="Settings actions menu">
          <ActionsMenu />
        </nav>
      )}
    </main>
  );
};

export default SettingsPage;
