import type { View } from "../constants/mobileViews";
import type { UseDataResult } from "../utils/useData";
import MainTitle from "./MainTitle";
import NotesList from "./NotesList";
import SearchBar from "./SearchBar";

type Props = {
  dataObj: UseDataResult;
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
};

const SearchPage = ({ dataObj, setActiveView }: Props) => {
  return (
    <>
      <div className="mobile-layout-main-heading">
        <MainTitle title="Search" />
      </div>
      <section className="search-area">
        <SearchBar />
      </section>
      <section className="notes-list">
        <NotesList dataObj={dataObj} setActiveView={setActiveView} />
      </section>
    </>
  );
};

export default SearchPage;
