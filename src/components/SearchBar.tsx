import { IconSearch } from "./icons/index";

type Props = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <section className="search">
      <IconSearch className="search-icon" />
      <input
        type="text"
        id="search"
        name="search"
        className="search-input"
        placeholder="Search by title, content or tags..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </section>
  );
};

export default SearchBar;
