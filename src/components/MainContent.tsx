import Header from "./Header";
import NotesList from "./NotesList";
import RightMenu from "./RightMenu";
import Sidebar from "./Sidebar";

import Markdown from "react-markdown";
import { format } from "date-fns";

import SvgIconTag from "./icons/IconTag";
import SvgIconClock from "./icons/IconClock";

import data from "../data/data.json";

const MainContent = () => {
  const note = data[1];
  return (
    <main>
      <Header title="All Notes" />
      <div className="main-content-wrapper">
        <Sidebar>
          <NotesList />
        </Sidebar>

        <article className="note-details">
          <div className="note-content">
            <h2>{note.title}</h2>
            <div className="quick-info">
              <div className="info-line">
                <span>
                  <SvgIconTag />
                  Tags:{" "}
                </span>{" "}
                <span>{note.tags.join(", ")}</span>
              </div>
              <div className="info-line">
                <span>
                  <SvgIconClock />
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

        <RightMenu />
      </div>
    </main>
  );
};

export default MainContent;
