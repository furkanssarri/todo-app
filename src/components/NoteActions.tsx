import type { View } from "../constants/pageViews";
import Button from "./Button";

type Props = {
  activeView: View;
  handleNoteActions?: (id: string, action: string) => void;
  noteId?: string;
  handleOpenConfirm?: (
    id: string,
    action: "delete" | "archive" | "restore",
  ) => void;
  isArchived: boolean | undefined;
};

const NoteActions = ({
  activeView,
  noteId,
  handleOpenConfirm,
  isArchived,
}: Props) => {
  if (activeView.name === "Create Note") {
    return;
  }

  return (
    <ul>
      <li className="action-button">
        {handleOpenConfirm && (
          <Button
            startIcon={"delete"}
            size={"lg"}
            variant={"outline"}
            aria-label="Delete this note"
            onClick={() => {
              if (noteId) return handleOpenConfirm(noteId, "delete");
            }}
          >
            {" "}
            Delete Note
          </Button>
        )}
      </li>
      <li className="action-button">
        {handleOpenConfirm &&
          (isArchived === false ? (
            <Button
              startIcon={"archive"}
              size={"lg"}
              variant={"outline"}
              aria-label="Archive this note"
              onClick={() => {
                if (noteId) return handleOpenConfirm(noteId, "archive");
              }}
            >
              Archive Note
            </Button>
          ) : (
            <Button
              startIcon={"refresh"}
              size={"lg"}
              variant={"outline"}
              aria-label="Restore this note"
              onClick={() => {
                if (noteId) return handleOpenConfirm(noteId, "restore");
              }}
            >
              Restore Note
            </Button>
          ))}
      </li>
    </ul>
  );
};

export default NoteActions;
