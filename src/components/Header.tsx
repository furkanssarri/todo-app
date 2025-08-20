import Settings from "./Settings";
import SearchBar from "./SearchBar";
import MainTitle from "./MainTitle";

const Header = ({ title }: { title: string }) => {
  return (
    <>
      <section className="heading">
        <MainTitle title={title} />
      </section>
      <SearchBar />
      <Settings />
    </>
  );
};

export default Header;
