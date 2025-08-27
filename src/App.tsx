import { MobileContext } from "./context/MobileContext";
import { useContext, useEffect, useState } from "react";

import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import useData from "./utils/useData";
import { type View, views } from "./constants/mobileViews";

function App() {
  const context = useContext(MobileContext);
  const { isDesktop } = context;

  const dataObj = useData("local");

  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const [activeView, setActiveView] = useState<View>(() => {
    const savedView = localStorage.getItem("view");
    return savedView ? (JSON.parse(savedView) as View) : views[0];
  });

  useEffect(() => {
    if (activeView) {
      localStorage.setItem("view", JSON.stringify(activeView));
    }
  }, [activeView]);

  const handleNoteActions = (id: string, action: string) => {
    if (action === "delete") {
      handleDeleteNote(id);
    } else if (action === "archive") {
      handleArchiveNote(id);
    }
  };

  const handleDeleteNote = (id: string) => {
    dataObj.setData((prev) => prev.filter((n) => n.id !== id));
  };

  const handleArchiveNote = (id: string) => {
    dataObj.setData((prev) =>
      prev.map((n) => {
        if (n.id === id) {
          return { ...n, isArchived: true };
        }
        return n;
      }),
    );
  };

  useEffect(() => {
    console.log(activeView);
  }, [activeView]);

  return isDesktop ? (
    <DesktopLayout
      dataObj={dataObj}
      activeView={activeView}
      setActiveView={setActiveView}
      handleNoteActions={handleNoteActions}
      selectedTag={selectedTag}
      setSelectedTag={setSelectedTag}
    />
  ) : (
    <MobileLayout
      dataObj={dataObj}
      activeView={activeView}
      setActiveView={setActiveView}
      handleNoteActions={handleNoteActions}
      selectedTag={selectedTag}
      setSelectedTag={setSelectedTag}
    />
  );
}

export default App;
