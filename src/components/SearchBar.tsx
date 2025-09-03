import { IconSearch } from "./icons/index";

type Props = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <section className="search" role="search">
      <IconSearch
        className="search-icon"
        aria-hidden="true"
        focusable="false"
      />
      <input
        type="text"
        id="search"
        name="search"
        className="search-input"
        placeholder="Search by title, content or tags..."
        aria-label="Search tasks by title, content, or tags"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </section>
  );
};

export default SearchBar;
