import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import Logo from "../components/Logo";
import { MobileContext } from "../context/MobileContext";
import Button from "../components/Button";
import MobileBottomNav from "../components/MobileBottomNav";
import type { UseDataResult } from "../utils/useData";
import { mobileRoutes } from "../routes/routeConfig";
import Toast from "../components/Toast";
import { AnimatePresence, motion } from "motion/react";
import { useActiveView } from "../utils/useActiveView";

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
  const location = useLocation();
  const { isDesktop } = useContext(MobileContext);

  const activeView = useActiveView();

  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <div className="main-wrapper">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {mobileRoutes.map(({ path, element: Component }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <motion.div
                      key={path}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Component
                        dataObj={dataObj}
                        handleNoteActions={handleNoteActions}
                        selectedTag={selectedTag}
                        setSelectedTag={setSelectedTag}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                      />
                    </motion.div>
                  }
                />
              ))}
            </Routes>
          </AnimatePresence>
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

        {!isDesktop &&
          activeView.path !== "/create" &&
          activeView.path !== "/note" && (
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
