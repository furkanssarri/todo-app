import { useState, useContext } from "react";
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

const MobileLayout = () => {
  const context = useContext(MobileContext);

  if (!context) {
    throw new Error("Mobilecontext not provided");
  }
  const { isMobile } = context;
  const [activeView, setActiveView] = useState<View>("home");

  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <div className="main-wrapper">
          <div className="mobile-layout-main-heading">
            <h1>{activeView}</h1> {/* Change this to the desired heading */}
          </div>
          {activeView === "home" && <NotesList />}
          {activeView === "search" && <SearchPage />}
          {activeView === "archive" && <ArchiveList />}
          {activeView === "tag" && <TagsList />}
          {activeView === "settings" && <SettingsPage />}
          {activeView === "noteBody" && <NoteBody />}
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
