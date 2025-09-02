import { MobileContext } from "./context/MobileContext";
import { useContext, useEffect, useState } from "react";

import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import useData from "./utils/useData";
import { useLocation } from "react-router-dom";
import { ToastContext } from "./context/toastContext";

function App() {
  const context = useContext(MobileContext);
  const { showToast } = useContext(ToastContext);
  const { isDesktop } = context;
  const location = useLocation();
  const dataObj = useData("local");

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (!location.pathname.startsWith("/search")) {
      setSearchQuery("");
    }
  }, [location, setSearchQuery]);

  const handleNoteActions = (id: string, action: string) => {
    if (action === "delete") {
      handleDeleteNote(id);
    } else if (action === "archive") {
      handleArchiveNote(id);
    }
  };

  const handleDeleteNote = (id: string) => {
    dataObj.setData((prev) => prev.filter((n) => n.id !== id));
    showToast("Note permanently deleted.", "", "success");
  };

  const handleArchiveNote = (id: string) => {
    const note = dataObj.data.find((n) => n.id === id);
    if (!note) return;

    if (note.isArchived) {
      showToast("Note restored to active notes.", "/", "success");
    } else {
      showToast("Note archived.", "/archive", "success");
    }
    dataObj.setData((prev) =>
      prev.map((n) => {
        if (n.id === id) {
          return { ...n, isArchived: !n.isArchived };
        }
        return n;
      }),
    );
  };

  return isDesktop ? (
    <DesktopLayout
      dataObj={dataObj}
      handleNoteActions={handleNoteActions}
      selectedTag={selectedTag}
      setSelectedTag={setSelectedTag}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  ) : (
    <MobileLayout
      dataObj={dataObj}
      handleNoteActions={handleNoteActions}
      selectedTag={selectedTag}
      setSelectedTag={setSelectedTag}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
}

export default App;
