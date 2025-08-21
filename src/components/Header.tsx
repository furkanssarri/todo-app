import Settings from "./Settings";
import SearchBar from "./SearchBar";
import MainTitle from "./MainTitle";

const Header = ({ title }: { title: string }) => {
  return (
    <>
      <section className="heading">
        <MainTitle title={title} />
      </section>
      <section className="header-right">
        <SearchBar />
        <Settings />
      </section>
    </>
  );
};

export default Header;
