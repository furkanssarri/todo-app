import { MobileContext } from "./context/MobileContext";
import { useContext, useEffect, useState } from "react";

import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import useData, { type Note } from "./utils/useData";
import { type View, views } from "./constants/mobileViews";

function App() {
  const dataObj = useData("/db.json");

  const [activeView, setActiveView] = useState<View>(views[0]);
  const [note, setNote] = useState<Note>({
    id: "",
    title: "",
    tags: [],
    content: "",
    lastEdited: "",
    isArchived: false,
  });
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(note));
  }, [note]);

  const context = useContext(MobileContext);
  if (!context) {
    throw new Error("Mobilecontext not provided");
  }
  const { isDesktop } = context;

  return isDesktop ? (
    <DesktopLayout
      dataObj={dataObj}
      activeView={activeView}
      setActiveView={setActiveView}
      note={note}
      setNote={setNote}
    />
  ) : (
    <MobileLayout
      dataObj={dataObj}
      activeView={activeView}
      setActiveView={setActiveView}
      note={note}
      setNote={setNote}
    />
  );
}

export default App;
