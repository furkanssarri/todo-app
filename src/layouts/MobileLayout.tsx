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
      <header role="banner">
        <Logo />
      </header>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content" role="main" aria-label="Main content">
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
                      aria-live="polite"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
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
        </div>

        {!isDesktop &&
          activeView.path !== "/create" &&
          activeView.path !== "/note" &&
          activeView.path !== "/settings" && (
            <span className="mobile-add-note-button">
              <Button
                startIcon="plus"
                color="primary"
                size="lg"
                aria-label="Create a new note"
                onClick={() => navigate("/create")}
              />
            </span>
          )}
        <div role="status" aria-live="polite">
          <Toast />
        </div>
      </main>

      <footer role="contentinfo">
        <MobileBottomNav setSelectedTag={setSelectedTag} />
      </footer>
    </>
  );
};

export default MobileLayout;
