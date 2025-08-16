import Header from "./Header";
import NotesList from "./NotesList";
import RightMenu from "./RightMenu";
import Sidebar from "./Sidebar";

import data from "../data/data.json";

const MainContent = () => {
  const note = data[0];
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
                <span>Tags: </span> <span>{note.tags.join(", ")}</span>
              </div>
              <div className="info-line">
                <span>Last Edited: </span> <span>{note.lastEdited}</span>
              </div>
            </div>
            <div className="note-body">
              <p>{note.content}</p>
            </div>
          </div>
        </article>

        <RightMenu />
      </div>
    </main>
  );
};

export default MainContent;
