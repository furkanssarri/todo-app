import { Routes, Route } from "react-router-dom";
import LeftMenu from "../components/LeftMenu";
import NotesList from "../components/NotesList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import type { UseDataResult } from "../utils/useData";
import { useActiveView } from "../utils/useActiveView";
import { desktopRoutes } from "../routes/routeConfig";
import Toast from "../components/Toast";

type Props = {
  dataObj: UseDataResult;
  handleNoteActions: (id: string, action: string) => void;
  selectedTag: string | null;
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const DeskttopLayout = ({
  dataObj,
  handleNoteActions,
  selectedTag,
  setSelectedTag,
  searchQuery,
  setSearchQuery,
}: Props) => {
  const activeView = useActiveView();
  return (
    <>
      <div id="content">
        <aside>
          <LeftMenu
            dataObj={dataObj}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        </aside>
        <main>
          <header>
            <Header
              title={activeView.name}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </header>
          <div className="main-content-wrapper">
            <div className="notes-list-wrapper">
              <NotesList
                dataObj={dataObj}
                selectedTag={selectedTag}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
            <Routes>
              {desktopRoutes.map(({ path, element: Component }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <Component
                      dataObj={dataObj}
                      handleNoteActions={handleNoteActions}
                    />
                  }
                />
              ))}
            </Routes>
          </div>
        </main>
      </div>
      <Toast />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default DeskttopLayout;
