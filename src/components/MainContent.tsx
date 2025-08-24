import Header from "./Header";
import NotesList from "./NotesList";
import NoteBody from "./NoteBody";
import ActionsMenu from "./ActionsMenu";
import type { UseDataResult } from "../utils/useData";

type Props = {
  dataObj: UseDataResult;
};
const MainContent = ({ dataObj }: Props) => {
  return (
    <main>
      <Header title="All Notes" />
      <div className="main-content-wrapper">
        <NotesList dataObj={dataObj} />
        <NoteBody dataObj={dataObj} />
        <ActionsMenu />
      </div>
    </main>
  );
};

export default MainContent;
