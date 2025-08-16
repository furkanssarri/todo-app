import logoUrl from "../assets/images/logo.svg";
import tags from "../data/tags.json";

import SvgIconHome from "./icons/IconHome.tsx";
import SvgIconArchive from "./icons/IconArchive.tsx";
import SvgIconTag from "./icons/IconTag";

const Sidebar = () => {
  return (
    <aside className="left-menu">
      <div className="logo">
        <img src={logoUrl} alt="Logo" />
      </div>
      <main className="left-menu-content">
        <nav>
          <ul>
            <li>
              <a href="#">
                <SvgIconHome /> All Notes
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                {" "}
                <SvgIconArchive /> Archived Notes
              </a>
            </li>
          </ul>
        </nav>
        <div className="tags-wrapper">
          <ul>
            {tags.map((tag) => (
              <li key={tag}>
                <a href="#">
                  <SvgIconTag /> {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </aside>
  );
};

export default Sidebar;
