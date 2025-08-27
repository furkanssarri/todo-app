import { Routes, Route } from "react-router-dom";
import LeftMenu from "../components/LeftMenu";
import NotesList from "../components/NotesList";
import NoteBody from "../components/NoteBody";
import CreateNoteForm from "../components/CreateNoteForm";

import Footer from "../components/Footer";
import Header from "../components/Header";
import type { UseDataResult } from "../utils/useData";
import type { View } from "../constants/mobileViews";

type Props = {
  dataObj: UseDataResult;
  activeView: View;
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
  handleNoteActions: (id: string, action: string) => void;
  selectedTag: string | null;
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const DeskttopLayout = ({
  dataObj,
  activeView,
  setActiveView,
  handleNoteActions,
  selectedTag,
  setSelectedTag,
  searchQuery,
  setSearchQuery,
}: Props) => {
  return (
    <>
      <div id="content">
        <aside>
          <LeftMenu
            setActiveView={setActiveView}
            dataObj={dataObj}
            setSelectedTag={setSelectedTag}
          />
        </aside>
        <main>
          <header>
            <Header
              title={activeView.name}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </header>
          <div className="main-content-wrapper">
            <div className="notes-list-wrapper">
              <NotesList
                dataObj={dataObj}
                activeView={activeView}
                setActiveView={setActiveView}
                selectedTag={selectedTag}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
            <Routes>
              <Route
                path="/"
                element={
                  <NoteBody
                    dataObj={dataObj}
                    activeView={activeView}
                    handleNoteActions={handleNoteActions}
                  />
                }
              />
              <Route
                path="/note/:id"
                element={
                  // TODO: this will be replaced with a note body-type form component for design fidelity.
                  <CreateNoteForm
                    dataObj={dataObj}
                    activeView={activeView}
                    handleNoteActions={handleNoteActions}
                  />
                }
              />
              <Route
                path="/create"
                element={
                  <CreateNoteForm
                    dataObj={dataObj}
                    activeView={activeView}
                    handleNoteActions={handleNoteActions}
                  />
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
