import Markdown from "react-markdown";
import { format } from "date-fns";
import { IconTag, IconClock } from "./icons";
import data from "../data/data.json";

const NoteBody = () => {
  const note = data[0];
  return (
    <article className="note-details">
      <div className="note-content">
        <h2>{note.title}</h2>
        <div className="quick-info">
          <div className="info-line">
            <span>
              <IconTag />
              Tags:{" "}
            </span>{" "}
            <span>{note.tags.join(", ")}</span>
          </div>
          <div className="info-line">
            <span>
              <IconClock />
              Last Edited:{" "}
            </span>{" "}
            <span>{format(note.lastEdited, "dd MMM yyyy")}</span>
          </div>
        </div>
        <div className="note-body">
          <Markdown>{note.content}</Markdown>
        </div>
      </div>
    </article>
  );
};

export default NoteBody;
