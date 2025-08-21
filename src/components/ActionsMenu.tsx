import NoteActions from "./NoteActions";

import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import NoteActionsMobile from "./NoteActionsMobile";

const ActionsMenu = () => {
  const { isMobile, isTablet } = useContext(MobileContext);

  if (isMobile || isTablet) {
    return (
      <div className="mobile-actions">
        <NoteActionsMobile />
      </div>
    );
  }

  return (
    <menu className="right-menu">
      <section className="actions">
        <NoteActions />
      </section>
    </menu>
  );
};

export default ActionsMenu;
