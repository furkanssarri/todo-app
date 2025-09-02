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
    <>
      <article className="note-details">
        <div className="note-content">
          <div className="note-body">
            {setting === "color-theme" && <ColorTheme />}
            {setting === "font-theme" && <FontTheme />}
            {setting === "change-password" && <ChangePassword />}
          </div>
        </div>
      </article>
      {isDesktop && !isLaptop && <ActionsMenu />}
    </>
  );
};

export default SettingsPage;
