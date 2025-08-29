import NoteActions from "./NoteActions";

import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import NoteActionsMobile from "./NoteActionsMobile";
import type { View } from "../constants/pageViews";

type Props = {
  activeView: View;
  handleNoteActions: (id: string, action: string) => void;
  noteId: string;
};

const ActionsMenu = ({ activeView, handleNoteActions, noteId }: Props) => {
  const { isMobile, isTablet } = useContext(MobileContext);

  if (isMobile || isTablet) {
    return (
      <div className="mobile-actions">
        <NoteActionsMobile
          handleNoteActions={handleNoteActions}
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
            handleNoteActions={handleNoteActions}
            noteId={noteId}
          />
        )}
      </section>
    </menu>
  );
};

export default ActionsMenu;
