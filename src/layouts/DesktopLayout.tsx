import { Routes, Route } from "react-router-dom";
import LeftMenu from "../components/LeftMenu";
import NotesList from "../components/NotesList";
import NoteBody from "../components/NoteBody";
import CreateNoteForm from "../components/CreateNoteForm";

import Footer from "../components/Footer";
import Header from "../components/Header";
import type { Notes, UseDataResult } from "../utils/useData";
import type { View } from "../constants/mobileViews";

type Props = {
  dataObj: UseDataResult;
  activeView: View;
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
  setNotes: React.Dispatch<React.SetStateAction<Notes>>;
};

const DeskttopLayout = ({
  dataObj,
  activeView,
  setActiveView,
  setNotes,
}: Props) => {
  return (
    <>
      <div id="content">
        <aside>
          <LeftMenu />
        </aside>
        <main>
          <header>
            <Header title="All Notes" />
          </header>
          <div className="main-content-wrapper">
            <div className="notes-list-wrapper">
              <NotesList dataObj={dataObj} setActiveView={setActiveView} />
            </div>
            <Routes>
              <Route
                path="/"
                element={<NoteBody dataObj={dataObj} activeView={activeView} />}
              />
              <Route
                path="/note/:id"
                element={<NoteBody dataObj={dataObj} activeView={activeView} />}
              />
              <Route
                path="/create"
                element={
                  <CreateNoteForm activeView={activeView} setNotes={setNotes} />
                }
              />
            </Routes>
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default DeskttopLayout;
