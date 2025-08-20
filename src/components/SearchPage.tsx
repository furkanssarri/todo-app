import NotesList from "./NotesList";
import SearchBar from "./SearchBar";

const SearchPage = () => {
  return (
    <>
      <section className="search-area">
        <SearchBar />
      </section>
      <section className="notes-list">
        <NotesList />
      </section>
    </>
  );
};

export default SearchPage;
