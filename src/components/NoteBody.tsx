import Markdown from "react-markdown";
import { format } from "date-fns";
import { IconTag, IconClock } from "./icons";
import { useParams } from "react-router-dom";

import ActionsMenu from "./ActionsMenu";

import { MobileContext } from "../context/MobileContext";
import { useContext } from "react";
import type { UseDataResult } from "../utils/useData";

type Props = {
  dataObj: UseDataResult;
};

const NoteBody = ({ dataObj }: Props) => {
  const { data, error, isLoading } = dataObj;
  const { id } = useParams();
  const note = data?.find((n) => n.id.toString() === id);
  const { isTablet, isMobile, isDesktop } = useContext(MobileContext);

  if (!id) {
    return (
      <article
        className="note-details"
        role="main"
        aria-label="Note content"
      ></article>
    );
  }

  if (!note) {
    return (
      <article className="note-details" role="main" aria-label="Note content">
        <p role="status" aria-live="polite">
          Note not found
        </p>
      </article>
    );
  }

  if (error)
    return (
      <p role="status" aria-live="polite">
        {error}
      </p>
    );

  if (isLoading)
    return (
      <p role="status" aria-live="polite">
        Loading data...
      </p>
    );

  return (
    <>
      <article className="note-details" role="main" aria-label="Note content">
        {(isTablet || isMobile) && <ActionsMenu noteId={id!} />}

        <div className="note-content">
          <h2 aria-label={`Note title: ${note.title}`}>{note.title}</h2>
          <div className="quick-info">
            <div className="info-line">
              <span>
                <IconTag aria-hidden="true" focusable="false" />
                <span className="visually-hidden">Tags: </span>
              </span>{" "}
              <span>{note.tags.join(", ")}</span>
            </div>
            <div className="info-line">
              <span>
                <IconClock aria-hidden="true" focusable="false" />
                <span className="visually-hidden">Last Edited: </span>
              </span>{" "}
              <span>{format(note.lastEdited, "dd MMM yyyy")}</span>
            </div>
          </div>
          <div className="note-body">
            <Markdown>{note.content}</Markdown>
          </div>
        </div>
      </article>
      {isDesktop && <ActionsMenu noteId={id} />}
    </>
  );
};

export default NoteBody;
