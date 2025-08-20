import Header from "./Header";
import NotesList from "./NotesList";
import NoteBody from "./NoteBody";
import ActionsMenu from "./ActionsMenu";

const MainContent = () => {
  return (
    <main>
      <Header title="All Notes" />
      <div className="main-content-wrapper">
        <NotesList />
        <NoteBody />
        <ActionsMenu />
      </div>
    </main>
  );
};

export default MainContent;
