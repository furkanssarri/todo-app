import { Routes, Route } from "react-router-dom";
import LeftMenu from "../components/LeftMenu";
import NotesList from "../components/NotesList";
import NoteBody from "../components/NoteBody";

import Footer from "../components/Footer";
import Header from "../components/Header";
import type { Note } from "../utils/useData";

type Props = {
  data: Note[] | null;
  error: string | null;
  isLoading: boolean;
};

const DeskttopLayout = ({ data, error, isLoading }: Props) => {
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
            <NotesList data={data} error={error} isLoading={isLoading} />
            <Routes>
              <Route
                path="/"
                element={
                  <NoteBody data={data} error={error} isLoading={isLoading} />
                }
              />
              <Route
                path="/note/:id"
                element={
                  <NoteBody data={data} error={error} isLoading={isLoading} />
                }
              />
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
