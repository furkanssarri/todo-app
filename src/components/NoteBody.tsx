import Markdown from "react-markdown";
import { format } from "date-fns";
import { IconTag, IconClock } from "./icons";
import { useParams } from "react-router-dom";

import ActionsMenu from "./ActionsMenu";

import { MobileContext } from "../context/MobileContext";
import { useContext } from "react";
import type { UseDataResult } from "../utils/useData";
import type { View } from "../constants/mobileViews";

type Props = {
  dataObj: UseDataResult;
  activeView: View;
};

const NoteBody = ({ dataObj, activeView }: Props) => {
  const { data, error, isLoading } = dataObj;
  const { id } = useParams();
  const note = data?.find((n) => n.id.toString() === id);
  const { isTablet, isMobile, isDesktop } = useContext(MobileContext);

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

  if (error) return <p>{error}</p>;

  if (isLoading) return <p>Loading data...</p>;

  return (
    <>
      <article className="note-details">
        {(isTablet || isMobile) && <ActionsMenu activeView={activeView} />}

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
      {isDesktop && <ActionsMenu activeView={activeView} />}
    </>
  );
};

export default NoteBody;
