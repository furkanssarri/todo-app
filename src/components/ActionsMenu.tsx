import NoteActions from "./NoteActions";

import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import NoteActionsMobile from "./NoteActionsMobile";
import { useActiveView } from "../utils/useActiveView";

type Props = {
  handleNoteActions?: (id: string, action: string) => void;
  noteId?: string;
};

const ActionsMenu = ({ handleNoteActions, noteId }: Props) => {
  const { isMobile, isTablet } = useContext(MobileContext);
  const activeView = useActiveView();

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
    <menu
      className={`right-menu ${
        activeView.path === `/settings` ? "border-transparent" : ""
      }`}
    >
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
