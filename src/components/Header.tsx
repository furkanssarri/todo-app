import Settings from "./Settings";
import SearchBar from "./SearchBar";
import MainTitle from "./MainTitle";

type Props = {
  title: string;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ title, searchQuery, setSearchQuery }: Props) => {
  return (
    <>
      <section className="heading" aria-label="Main title">
        <MainTitle title={title} />
      </section>
      <section className="header-right" aria-label="Search and settings">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Settings />
      </section>
    </>
  );
};

export default Header;
