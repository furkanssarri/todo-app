import NoteActions from "./NoteActions";

import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";

const ActionsMenu = () => {
  const { isMobile } = useContext(MobileContext);

  if (isMobile) {
    return (
      <div className="mobile-actions">
        <NoteActions />
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
