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
              <a href="#">
                <IconHome /> All Notes
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                {" "}
                <IconArchive /> Archived Notes
              </a>
            </li>
          </ul>
        </nav>
        <TagsList />
      </main>
    </section>
  );
};

export default LeftMenuNav;
