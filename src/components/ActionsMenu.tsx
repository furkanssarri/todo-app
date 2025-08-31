import NoteActions from "./NoteActions";

import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import NoteActionsMobile from "./NoteActionsMobile";
import { useActiveView } from "../utils/useActiveView";

type Props = {
  handleNoteActions?: (id: string, action: string) => void;
  noteId?: string;
  handleOpenConfirm: (
    id: string,
    action: "delete" | "archive" | "restore",
  ) => void;
  isArchived?: boolean | undefined;
};

const ActionsMenu = ({ noteId, handleOpenConfirm, isArchived }: Props) => {
  const { isMobile, isTablet } = useContext(MobileContext);
  const activeView = useActiveView();

  if (isMobile || isTablet) {
    return (
      <div className="mobile-actions">
        <NoteActionsMobile noteId={noteId} />
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
            handleOpenConfirm={handleOpenConfirm}
            noteId={noteId}
            isArchived={isArchived}
          />
        )}
      </section>
    </menu>
  );
};

export default ActionsMenu;
