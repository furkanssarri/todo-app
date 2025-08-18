import tags from "../data/tags.json";

import { IconHome, IconArchive, IconTag } from "./icons/index.tsx";

import SvgLogo from "./logo/Logo.tsx";

const LeftMenuNav = () => {
  return (
    <aside className="left-menu text-preset-sans-4">
      <div className="logo-wrapper">
        <SvgLogo className="logo" />
      </div>
      <main className="left-menu-content">
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
        <section className="tags-wrapper">
          <h4 className="text-preset-sans-4">Tags</h4>
          <ul>
            {tags.map((tag) => (
              <li key={tag}>
                <a href="#">
                  <IconTag /> {tag}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </aside>
  );
};

export default LeftMenuNav;
