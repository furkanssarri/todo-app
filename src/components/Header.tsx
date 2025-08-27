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
      <section className="heading">
        <MainTitle title={title} />
      </section>
      <section className="header-right">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Settings />
      </section>
    </>
  );
};

export default Header;
