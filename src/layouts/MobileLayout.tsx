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
import type { Note } from "../utils/useData";
import CreateNoteForm from "../components/CreateNoteForm";

type Props = {
  data: Note[] | null;
  error: string | null;
  isLoading: boolean;
  activeView: View;
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
};

const MobileLayout = ({
  data,
  error,
  isLoading,
  activeView,
  setActiveView,
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
                <NotesList data={data} error={error} isLoading={isLoading} />
              }
            />
            <Route path="/create" element={<CreateNoteForm />} />
            <Route
              path="/search"
              element={
                <SearchPage data={data} error={error} isLoading={isLoading} />
              }
            />
            <Route path="/archive" element={<ArchiveList />} />
            <Route path="/tag" element={<TagsList activeView={activeView} />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route
              path="/note/:id"
              element={
                <NoteBody data={data} error={error} isLoading={isLoading} />
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

      <MobileBottomNav activeView={activeView} setActiveView={setActiveView} />
    </>
  );
};

export default MobileLayout;
