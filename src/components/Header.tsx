import logoUrl from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logoUrl} alt="Logo" />
      </div>
      <div className="heading">
        <h1>All Notes</h1>
        <div className="header-actions">
          <div className="search">
            <input type="text" name="search" id="search" />
          </div>
          <div className="settings"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
