import { Routes, Route } from "react-router-dom";
import LeftMenu from "../components/LeftMenu";
import NotesList from "../components/NotesList";
import NoteBody from "../components/NoteBody";
import CreateNoteForm from "../components/CreateNoteForm";

import Footer from "../components/Footer";
import Header from "../components/Header";
import type { UseDataResult } from "../utils/useData";
import type { View } from "../constants/mobileViews";

type Props = {
  dataObj: UseDataResult;
  activeView: View;
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
};

const DeskttopLayout = ({ dataObj, activeView }: Props) => {
  return (
    <>
      <div id="content">
        <aside>
          <LeftMenu activeView={activeView} />
        </aside>
        <main>
          <header>
            <Header title="All Notes" />
          </header>
          <div className="main-content-wrapper">
            <NotesList dataObj={dataObj} />
            <Routes>
              <Route path="/" element={<NoteBody dataObj={dataObj} />} />
              <Route
                path="/note/:id"
                element={<NoteBody dataObj={dataObj} />}
              />
              <Route path="/create" element={<CreateNoteForm />} />
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
