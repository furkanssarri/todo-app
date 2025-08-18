import { IconSettings, IconSearch } from "./icons";

const Header = ({ title }: { title: string }) => {
  return (
    <header>
      <section className="heading">
        <h1>{title}</h1>
      </section>
      <section className="search">
        <IconSearch className="search-icon" />
        <input
          type="text"
          id="search"
          name="search"
          className="search-input"
          placeholder="Search by title, content or tags..."
        />
        <button className="settings-button">
          <IconSettings />
        </button>
      </section>
    </header>
  );
};

export default Header;
