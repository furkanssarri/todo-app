import { useContext, useEffect, useState } from "react";
import { MobileContext } from "../context/MobileContext";
import NoteActionsMobile from "./NoteActionsMobile";
import ActionsMenu from "./ActionsMenu";
import ConfirmModal from "./ConfirmModal";
import Button from "./Button";
import type { Note, UseDataResult } from "../utils/useData";
import { useParams, useNavigate } from "react-router";
import { useActiveView } from "../utils/useActiveView";
import CreateNote from "./CreateNote";

type Props = {
  dataObj: UseDataResult;
  handleNoteActions: (id: string, action: string) => void;
};

export type FormData = {
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
};

const Body = ({ dataObj, handleNoteActions }: Props) => {
  const { isDesktop } = useContext(MobileContext);
  const { data, setData } = dataObj;
  const { id } = useParams();

  const navigate = useNavigate();
  const activeView = useActiveView();

  const [note, setNote] = useState<Note>();

  useEffect(() => {
    if (activeView.path !== "/create") {
      const currentNote = id
        ? data?.find((n) => n.id.toString() === id)
        : data[0];
      setNote(currentNote);
    } else if (activeView.path === "/create") {
      setNote(undefined);
    }
  }, [activeView, id, data]);

  const [modal, setModal] = useState<{
    open: boolean;
    action: "delete" | "archive" | "restore" | null;
  }>({
    open: false,
    action: null,
  });

  const handleOpenConfirm = (
    id: string,
    action: "delete" | "archive" | "restore",
  ) => {
    if (action !== "restore") {
      setModal({ open: true, action });
    } else {
      handleNoteActions(id, "archive");
    }
  };

  return (
    <>
      <article className="note-details">
        {!isDesktop && (
          <div className="mobile-actions">
            <NoteActionsMobile
              // TODO: this will be re-implemented as a "note-body" type of form in the future.
              exclude={note?.isArchived ? ["archive"] : ["restore"]}
              noteId={id!}
              handleOpenConfirm={handleOpenConfirm}
            />
          </div>
        )}
        <CreateNote note={note} setData={setData} />
        {isDesktop && (
          <div className="submit-buttons">
            <Button color="primary" size="lg" type="submit" form="add-new-form">
              Save Note
            </Button>
            <Button color="default" size="lg" onClick={() => navigate("/")}>
              Cancel
            </Button>
          </div>
        )}
      </article>
      {isDesktop && (
        <ActionsMenu
          handleOpenConfirm={handleOpenConfirm}
          noteId={id!}
          isArchived={note?.isArchived ?? false}
        />
      )}
      <ConfirmModal
        isOpen={modal.open}
        message={
          modal.action === "delete"
            ? "Are you sure you want to permanently delete this note? This action cannot be undone."
            : "Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime."
        }
        title={modal.action === "delete" ? "Delete Note" : "Archive Note"}
        type={modal.action}
        onConfirm={() => {
          if (modal.action && id) {
            handleNoteActions(id, modal.action); // dynamically call delete or archive
          }
          setModal({ open: false, action: null });
        }}
        onCancel={() => setModal({ open: false, action: null })}
        confirmLabel={
          modal.action === "delete" ? "Delete Note" : "Archive Note"
        }
        cancelLabel="Cancel"
      />
    </>
  );
};

export default Body;
