import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Logo from "../components/Logo";
import { MobileContext } from "../context/MobileContext";
import Button from "../components/Button";
import MobileBottomNav from "../components/MobileBottomNav";
import type { UseDataResult } from "../utils/useData";
import { mobileRoutes } from "../routes/routeConfig";
import Toast from "../components/Toast";

type Props = {
  dataObj: UseDataResult;
  handleNoteActions: (id: string, action: string) => void;
  selectedTag: string | null;
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const MobileLayout = ({
  dataObj,
  handleNoteActions,
  selectedTag,
  setSelectedTag,
  searchQuery,
  setSearchQuery,
}: Props) => {
  const navigate = useNavigate();
  const { isDesktop } = useContext(MobileContext);

  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <div className="main-wrapper">
          <Routes>
            {mobileRoutes.map(({ path, element: Component }) => (
              <Route
                key={path}
                path={path}
                element={
                  <Component
                    dataObj={dataObj}
                    handleNoteActions={handleNoteActions}
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  />
                }
              />
            ))}
          </Routes>
          {/* <Route
              path="/note/:id"
              element={
                // TODO: this will be replaced with a note body-type form component for design fidelity.
                <CreateNoteForm
                  dataObj={dataObj}
                  handleNoteActions={handleNoteActions}
                />
              }
            /> */}
        </div>
        {!isDesktop && (
          <span className="mobile-add-note-button">
            <Button
              startIcon="plus"
              color="primary"
              size="lg"
              onClick={() => navigate("/create")}
            />
          </span>
        )}
        <Toast />
      </main>

      <footer>
        <MobileBottomNav setSelectedTag={setSelectedTag} />
      </footer>
    </>
  );
};

export default MobileLayout;
