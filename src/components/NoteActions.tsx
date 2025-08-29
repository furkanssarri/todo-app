import type { View } from "../constants/pageViews";
import Button from "./Button";

type Props = {
  activeView: View;
  handleNoteActions?: (id: string, action: string) => void;
  noteId?: string;
};

const NoteActions = ({ activeView, handleNoteActions, noteId }: Props) => {
  if (activeView.name === "Create Note") {
    return;
  }

  return (
    <ul>
      <li className="action-button">
        {handleNoteActions && (
          <Button
            startIcon={"delete"}
            size={"lg"}
            variant={"outline"}
            onClick={() => {
              if (noteId) return handleNoteActions(noteId, "delete");
            }}
          >
            {" "}
            Delete Note
          </Button>
        )}
      </li>
      <li className="action-button">
        {handleNoteActions && (
          <Button
            startIcon={"archive"}
            size={"lg"}
            variant={"outline"}
            onClick={() => {
              if (noteId) return handleNoteActions(noteId, "archive");
            }}
          >
            {" "}
            Archive Note
          </Button>
        )}
      </li>
    </ul>
  );
};

export default NoteActions;
