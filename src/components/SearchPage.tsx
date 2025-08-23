import type { Note } from "../utils/useData";
import MainTitle from "./MainTitle";
import NotesList from "./NotesList";
import SearchBar from "./SearchBar";

type Props = {
  data: Note[] | null;
  error: string | null;
  isLoading: boolean;
};

const SearchPage = ({ data, error, isLoading }: Props) => {
  return (
    <>
      <div className="mobile-layout-main-heading">
        <MainTitle title="Search" />
      </div>
      <section className="search-area">
        <SearchBar />
      </section>
      <section className="notes-list">
        <NotesList data={data} error={error} isLoading={isLoading} />
      </section>
    </>
  );
};

export default SearchPage;
