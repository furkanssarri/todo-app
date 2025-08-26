import NoteActions from "./NoteActions";

import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import NoteActionsMobile from "./NoteActionsMobile";
import type { View } from "../constants/mobileViews";

type Props = {
  activeView: View;
  handleDeleteNote: (id: string) => void;
  noteId: string;
};

const ActionsMenu = ({ activeView, handleDeleteNote, noteId }: Props) => {
  const { isMobile, isTablet } = useContext(MobileContext);

  if (isMobile || isTablet) {
    return (
      <div className="mobile-actions">
        <NoteActionsMobile
          handleDeleteNote={handleDeleteNote}
          noteId={noteId}
        />
      </div>
    );
  }

  return (
    <menu className="right-menu">
      <section className="actions">
        {activeView.name !== "Create Note" && (
          <NoteActions
            activeView={activeView}
            handleDeleteNote={handleDeleteNote}
            noteId={noteId}
          />
        )}
      </section>
    </menu>
  );
};

export default ActionsMenu;
