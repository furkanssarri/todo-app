import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Logo from "../components/Logo";
import NotesList from "../components/NotesList";
import NoteBody from "../components/NoteBody";
import SearchPage from "../components/SearchPage";
import ArchiveList from "../components/ArchiveList";
import SettingsPage from "../components/SettingsPage";
import TagsList from "../components/TagsList";
import { MobileContext } from "../context/MobileContext";
import Button from "../components/Button";
import MobileBottomNav from "../components/MobileBottomNav";
import { type View } from "../constants/mobileViews";
import type { Note, UseDataResult } from "../utils/useData";
import CreateNoteForm from "../components/CreateNoteForm";

type Props = {
  dataObj: UseDataResult;
  activeView: View;
  setActiveView: React.Dispatch<React.SetStateAction<View>>;

  note: Note;
  setNote: React.Dispatch<React.SetStateAction<Note>>;
};

const MobileLayout = ({
  dataObj,
  activeView,
  setActiveView,
  note,
  setNote,
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
                <NotesList dataObj={dataObj} setActiveView={setActiveView} />
              }
            />
            <Route
              path="/create"
              element={
                <CreateNoteForm
                  activeView={activeView}
                  note={note}
                  setNote={setNote}
                />
              }
            />
            <Route
              path="/search"
              element={
                <SearchPage dataObj={dataObj} setActiveView={setActiveView} />
              }
            />
            <Route
              path="/archive"
              element={<ArchiveList setActiveView={setActiveView} />}
            />
            <Route path="/tag" element={<TagsList />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route
              path="/note/:id"
              element={<NoteBody dataObj={dataObj} activeView={activeView} />}
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

      <MobileBottomNav activeView={activeView} setActiveView={setActiveView} />
    </>
  );
};

export default MobileLayout;
