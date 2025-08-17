import tags from "../data/tags.json";

import SvgLogo from "./logo/Logo.tsx";
import SvgIconHome from "./icons/IconHome.tsx";
import SvgIconArchive from "./icons/IconArchive.tsx";
import SvgIconTag from "./icons/IconTag.tsx";

const LeftMenuNav = () => {
  return (
    <aside className="left-menu">
      <div className="logo-wtapper">
        <SvgLogo className="logo" />
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

export default LeftMenuNav;
