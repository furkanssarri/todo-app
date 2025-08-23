import { Link } from "react-router-dom";
import Logo from "./Logo.tsx";
import TagsList from "./TagsList.tsx";
import { IconHome, IconArchive } from "./icons/index.tsx";
import type { View } from "../constants/mobileViews.ts";

type Props = {
  activeView: View;
};

const LeftMenuNav = ({ activeView }: Props) => {
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
        <TagsList activeView={activeView} />
      </main>
    </section>
  );
};

export default LeftMenuNav;
