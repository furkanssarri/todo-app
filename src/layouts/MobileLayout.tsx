import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Logo from "../components/Logo";
import NotesList from "../components/NotesList";

import SettingsPage from "../components/SettingsPage";
import TagsList from "../components/TagsList";
import { MobileContext } from "../context/MobileContext";
import Button from "../components/Button";
import MobileBottomNav from "../components/MobileBottomNav";
import type { UseDataResult } from "../utils/useData";
import CreateNoteForm from "../components/CreateNoteForm";
import { useActiveView } from "../utils/useActiveView";

type Props = {
  dataObj: UseDataResult;
  handleNoteActions: (id: string, action: string) => void;
  selectedTag: string | null;
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const MobileLayout = ({
  dataObj,
  handleNoteActions,
  selectedTag,
  setSelectedTag,
  searchQuery,
  setSearchQuery,
}: Props) => {
  const navigate = useNavigate();
  const activeView = useActiveView();
  const { isDesktop } = useContext(MobileContext);

  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <div className="main-wrapper">
          <Routes>
            <Route
              path="/"
              element={
                <NotesList
                  dataObj={dataObj}
                  selectedTag={selectedTag}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
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
            <Route
              path="/search"
              element={
                <NotesList
                  dataObj={dataObj}
                  selectedTag={selectedTag}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              }
            />
            <Route
              path="/archive"
              element={
                <NotesList
                  dataObj={dataObj}
                  selectedTag={selectedTag}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              }
            />
            <Route
              path="/tags"
              element={
                <TagsList dataObj={dataObj} setSelectedTag={setSelectedTag} />
              }
            />
            <Route
              path="/tags/:tag"
              element={
                <NotesList
                  dataObj={dataObj}
                  selectedTag={selectedTag}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              }
            />
            <Route path="/settings" element={<SettingsPage />} />
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
          </Routes>
        </div>
        {!isDesktop && (
          <span className="mobile-add-note-button">
            <Button
              startIcon="plus"
              color="primary"
              size="lg"
              onClick={() => navigate("/create")}
            />
          </span>
        )}
      </main>

      <footer>
        <MobileBottomNav setSelectedTag={setSelectedTag} />
      </footer>
    </>
  );
};

export default MobileLayout;
