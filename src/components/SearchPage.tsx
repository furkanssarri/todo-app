import type { Note } from "../utils/useData";
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
