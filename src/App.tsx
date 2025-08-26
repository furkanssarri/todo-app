import { MobileContext } from "./context/MobileContext";
import { useContext, useState } from "react";

import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import useData from "./utils/useData";
import { type View, views } from "./constants/mobileViews";

function App() {
  const context = useContext(MobileContext);
  const { isDesktop } = context;

  const dataObj = useData("local");

  const [activeView, setActiveView] = useState<View>(views[0]);

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

  return isDesktop ? (
    <DesktopLayout
      dataObj={dataObj}
      activeView={activeView}
      setActiveView={setActiveView}
      handleNoteActions={handleNoteActions}
    />
  ) : (
    <MobileLayout
      dataObj={dataObj}
      activeView={activeView}
      setActiveView={setActiveView}
      handleNoteActions={handleNoteActions}
    />
  );
}

export default App;
