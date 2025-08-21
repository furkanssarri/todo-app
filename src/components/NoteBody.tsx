import Markdown from "react-markdown";
import { format } from "date-fns";
import { IconTag, IconClock } from "./icons";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import ActionsMenu from "./ActionsMenu";

import { MobileContext } from "../context/MobileContext";
import { useContext } from "react";

const NoteBody = () => {
  const { id } = useParams();
  const note = data.find((n) => n.id.toString() === id);
  const { isMobile, isDesktop } = useContext(MobileContext);

  if (!id) {
    return (
      <article className="note-details">
        <p>Select a note to view</p>
      </article>
    );
  }

  if (!note) {
    return (
      <article className="note-details">
        <p>Note not found</p>
      </article>
    );
  }

  return (
    <>
      <article className="note-details">
        {isMobile && <ActionsMenu />}
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
      {isDesktop && <ActionsMenu />}
    </>
  );
};

export default NoteBody;
