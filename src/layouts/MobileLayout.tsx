import { Routes, Route } from "react-router-dom";
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
import MainTitle from "../components/MainTitle";

type ViewProps = {
  activeView: View;
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
};

const MobileLayout = ({ activeView, setActiveView }: ViewProps) => {
  const { isMobile } = useContext(MobileContext);

  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <div className="main-wrapper">
          <div className="mobile-layout-main-heading">
            <MainTitle title={activeView.name} />
          </div>
          <Routes>
            <Route path="/" element={<NotesList />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/archive" element={<ArchiveList />} />
            <Route path="/tag" element={<TagsList />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/note/:id" element={<NoteBody />} />
          </Routes>
        </div>
        {isMobile && (
          <span className="mobile-add-note-button">
            <Button startIcon="plus" color="primary" size="lg" />
          </span>
        )}
      </main>

      <MobileBottomNav activeView={activeView} setActiveView={setActiveView} />
    </>
  );
};

export default MobileLayout;
