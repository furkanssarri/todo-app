import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Logo from "../components/Logo";
import NotesList from "../components/NotesList";

import SettingsPage from "../components/SettingsPage";
import TagsList from "../components/TagsList";
import { MobileContext } from "../context/MobileContext";
import Button from "../components/Button";
import MobileBottomNav from "../components/MobileBottomNav";
import { type View } from "../constants/mobileViews";
import type { UseDataResult } from "../utils/useData";
import CreateNoteForm from "../components/CreateNoteForm";

type Props = {
  dataObj: UseDataResult;
  activeView: View;
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
  handleNoteActions: (id: string, action: string) => void;
  selectedTag: string | null;
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>;
};

const MobileLayout = ({
  dataObj,
  activeView,
  setActiveView,
  handleNoteActions,
  selectedTag,
  setSelectedTag,
}: Props) => {
  const navigate = useNavigate();
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
                  activeView={activeView}
                  setActiveView={setActiveView}
                  selectedTag={selectedTag}
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
                  activeView={activeView}
                  setActiveView={setActiveView}
                  selectedTag={selectedTag}
                />
              }
            />
            <Route
              path="/archive"
              element={
                <NotesList
                  dataObj={dataObj}
                  activeView={activeView}
                  setActiveView={setActiveView}
                  selectedTag={selectedTag}
                />
              }
            />
            <Route
              path="/tag"
              element={
                <TagsList dataObj={dataObj} setSelectedTag={setSelectedTag} />
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
        <MobileBottomNav
          activeView={activeView}
          setActiveView={setActiveView}
          setSelectedTag={setSelectedTag}
        />
      </footer>
    </>
  );
};

export default MobileLayout;
