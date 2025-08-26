import { MobileContext } from "./context/MobileContext";
import { useContext, useEffect, useState } from "react";

import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import useData, { type Notes } from "./utils/useData";
import { type View, views } from "./constants/mobileViews";

function App() {
  const context = useContext(MobileContext);
  const { isDesktop } = context;

  const dataObj = useData("local");

  const [activeView, setActiveView] = useState<View>(views[0]);
  const [notes, setNotes] = useState<Notes>(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return isDesktop ? (
    <DesktopLayout
      dataObj={dataObj}
      activeView={activeView}
      setActiveView={setActiveView}
      setNotes={setNotes}
    />
  ) : (
    <MobileLayout
      dataObj={dataObj}
      activeView={activeView}
      setActiveView={setActiveView}
      setNotes={setNotes}
    />
  );
}

export default App;
