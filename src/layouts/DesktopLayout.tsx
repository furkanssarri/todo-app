import { Routes, Route } from "react-router-dom";
import LeftMenu from "../components/LeftMenu";
import NotesList from "../components/NotesList";
import NoteBody from "../components/NoteBody";

import Footer from "../components/Footer";
import Header from "../components/Header";

const DeskttopLayout = () => {
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
