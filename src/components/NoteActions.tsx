import type { View } from "../constants/mobileViews";
import Button from "./Button";

type Props = {
  activeView: View;
  handleDeleteNote: (id: string) => void;
  noteId?: string;
};

const NoteActions = ({ activeView, handleDeleteNote, noteId }: Props) => {
  if (activeView.name === "Create Note") {
    return;
  }

  return (
    <ul>
      <li className="action-button">
        <Button
          startIcon={"delete"}
          size={"lg"}
          variant={"outline"}
          onClick={() => {
            if (noteId) return handleDeleteNote(noteId);
          }}
        >
          {" "}
          Delete Note
        </Button>
      </li>
      <li className="action-button">
        <Button startIcon={"archive"} size={"lg"} variant={"outline"}>
          {" "}
          Archive Note
        </Button>
      </li>
    </ul>
  );
};

export default NoteActions;
