import { useState } from "react";
import Logo from "../components/Logo";
import NotesList from "../components/NotesList";
import NoteBody from "../components/NoteBody";
import TagsList from "../components/TagsList";

type View = "home" | "note" | "tags";

const MobileLayout = () => {
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
      </main>
      <nav className="mobile-nav">
        <button onClick={() => setActiveView("home")}>Home</button>
        <button onClick={() => setActiveView("note")}>Note</button>
        <button onClick={() => setActiveView("tags")}>Tags</button>
      </nav>
      "
    </>
  );
};

export default MobileLayout;
