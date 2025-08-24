import NoteActions from "./NoteActions";

import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import NoteActionsMobile from "./NoteActionsMobile";
import type { View } from "../constants/mobileViews";

type Props = {
  activeView: View;
};

const ActionsMenu = ({ activeView }: Props) => {
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
        <NoteActions activeView={activeView} />
      </section>
    </menu>
  );
};

export default ActionsMenu;
