import Header from "./Header";
import NotesList from "./NotesList";
import NoteBody from "./NoteBody";
import ActionsMenu from "./ActionsMenu";
import type { UseDataResult } from "../utils/useData";
import type { View } from "../constants/mobileViews";

type Props = {
  dataObj: UseDataResult;
  activeView: View;
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
};
const MainContent = ({ dataObj, activeView, setActiveView }: Props) => {
  return (
    <main>
      <Header title="All Notes" />
      <div className="main-content-wrapper">
        <NotesList dataObj={dataObj} setActiveView={setActiveView} />
        <ActionsMenu activeView={activeView} />
        <NoteBody dataObj={dataObj} activeView={activeView} />
      </div>
    </main>
  );
};

export default MainContent;
