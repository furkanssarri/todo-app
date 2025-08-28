import { Routes, Route } from "react-router-dom";
import LeftMenu from "../components/LeftMenu";
import NotesList from "../components/NotesList";
import NoteBody from "../components/NoteBody";
import CreateNoteForm from "../components/CreateNoteForm";

import Footer from "../components/Footer";
import Header from "../components/Header";
import type { UseDataResult } from "../utils/useData";
import SettingsPage from "../components/SettingsPage";
import { useActiveView } from "../utils/useActiveView";

type Props = {
  dataObj: UseDataResult;
  handleNoteActions: (id: string, action: string) => void;
  selectedTag: string | null;
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const DeskttopLayout = ({
  dataObj,
  handleNoteActions,
  selectedTag,
  setSelectedTag,
  searchQuery,
  setSearchQuery,
}: Props) => {
  const activeView = useActiveView();
  return (
    <>
      <div id="content">
        <aside>
          <LeftMenu dataObj={dataObj} setSelectedTag={setSelectedTag} />
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
                    handleNoteActions={handleNoteActions}
                  />
                }
              />
              <Route
                path="/create"
                element={
                  <CreateNoteForm
                    dataObj={dataObj}
                    handleNoteActions={handleNoteActions}
                  />
                }
              />
              <Route path="/settings" element={<SettingsPage />} />
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
