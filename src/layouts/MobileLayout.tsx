import { useState, useContext } from "react";
import Logo from "../components/Logo";
import NotesList from "../components/NotesList";
import NoteBody from "../components/NoteBody";
import TagsList from "../components/TagsList";
import { MobileContext } from "../context/MobileContext";
import Button from "../components/Button";

type View = "home" | "note" | "tags";

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
          {activeView === "home" && <NotesList />}
          {activeView === "note" && <NoteBody />}
          {activeView === "tags" && <TagsList />}
        </div>
        {isMobile && (
          <span className="mobile-add-note-button">
            <Button startIcon="plus" color="primary" size="lg" />
          </span>
        )}
      </main>
      <nav className="mobile-nav">
        <Button
          startIcon={"home"}
          color="primary"
          size="lg"
          onClick={() => setActiveView("home")}
        />
        <Button
          startIcon={"archive"}
          color="primary"
          size="lg"
          onClick={() => setActiveView("note")}
        />
        <Button
          startIcon={"tag"}
          color="primary"
          size="lg"
          onClick={() => setActiveView("tags")}
        />
      </nav>
    </>
  );
};

export default MobileLayout;
