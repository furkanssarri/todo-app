import { Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
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
import { views, type View } from "../constants/mobileViews";
import type { Note } from "../utils/useData";
import CreateNoteForm from "../components/CreateNoteForm";

type Props = {
  data: Note[] | null;
  error: string | null;
  isLoading: boolean;
};

const MobileLayout = ({ data, error, isLoading }: Props) => {
  const { isMobile, isTablet } = useContext(MobileContext);
  const [activeView, setActiveView] = useState<View>(views[0]);

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
        {isMobile ||
          (isTablet && (
            <span className="mobile-add-note-button">
              <Button startIcon="plus" color="primary" size="lg" />
            </span>
          ))}
      </main>

      <MobileBottomNav activeView={activeView} setActiveView={setActiveView} />
    </>
  );
};

export default MobileLayout;
