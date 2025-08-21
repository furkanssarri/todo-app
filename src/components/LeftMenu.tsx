import { Link } from "react-router-dom";
import Logo from "./Logo.tsx";
import TagsList from "./TagsList.tsx";
import { IconHome, IconArchive } from "./icons/index.tsx";

const LeftMenuNav = () => {
  return (
    <section className="left-menu">
      <Logo />
      <main className="left-menu-content text-preset-sans-4">
        <nav className="main-filter">
          <ul>
            <li>
              <Link to="/">
                <IconHome /> All Notes
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/archive">
                {" "}
                <IconArchive /> Archived Notes
              </Link>
            </li>
          </ul>
        </nav>
        <TagsList />
      </main>
    </section>
  );
};

export default LeftMenuNav;
