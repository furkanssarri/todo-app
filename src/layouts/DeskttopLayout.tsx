import { Routes, Route } from "react-router-dom";
import LeftMenu from "../components/LeftMenu";
import NotesList from "../components/NotesList";
import NoteBody from "../components/NoteBody";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ActionsMenu from "../components/ActionsMenu";
import type { View } from "../constants/mobileViews";
import { useEffect } from "react";

type ViewProps = {
  activeView: View;
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
};

const DeskttopLayout = ({ activeView, setActiveView }: ViewProps) => {
  useEffect(() => {
    console.log(activeView);
  }, [activeView]);
  return (
    <>
      <div id="content">
        <aside>
          <LeftMenu />
        </aside>
        <main>
          <header>
            <Header title="All Notes" />
          </header>
          <div className="main-content-wrapper">
            <NotesList />
            <Routes>
              <Route path="/" element={<NoteBody />} />
              <Route path="/note/:id" element={<NoteBody />} />
            </Routes>
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default DeskttopLayout;
