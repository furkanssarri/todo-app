import { IconSearch } from "./icons/index";

const SearchBar = () => {
  return (
    <section className="search">
      <IconSearch className="search-icon" />
      <input
        type="text"
        id="search"
        name="search"
        className="search-input"
        placeholder="Search by title, content or tags..."
      />
    </section>
  );
};

export default SearchBar;
