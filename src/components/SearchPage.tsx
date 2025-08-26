import type { View } from "../constants/mobileViews";
import type { UseDataResult } from "../utils/useData";
import MainTitle from "./MainTitle";
import NotesList from "./NotesList";
import SearchBar from "./SearchBar";

type Props = {
  dataObj: UseDataResult;
  activeView: View;
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
};

const SearchPage = ({ dataObj, activeView, setActiveView }: Props) => {
  return (
    <>
      <div className="mobile-layout-main-heading">
        <MainTitle title="Search" />
      </div>
      <section className="search-area">
        <SearchBar />
      </section>
      <section className="notes-list">
        <NotesList
          dataObj={dataObj}
          activeView={activeView}
          setActiveView={setActiveView}
        />
      </section>
    </>
  );
};

export default SearchPage;
