import type { UseDataResult } from "../utils/useData";
import MainTitle from "./MainTitle";
import NotesList from "./NotesList";
import SearchBar from "./SearchBar";

type Props = {
  dataObj: UseDataResult;
};

const SearchPage = ({ dataObj }: Props) => {
  return (
    <>
      <div className="mobile-layout-main-heading">
        <MainTitle title="Search" />
      </div>
      <section className="search-area">
        <SearchBar />
      </section>
      <section className="notes-list">
        <NotesList dataObj={dataObj} />
      </section>
    </>
  );
};

export default SearchPage;
