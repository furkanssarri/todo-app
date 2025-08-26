import { Link } from "react-router-dom";
import Logo from "./Logo.tsx";
import TagsList from "./TagsList.tsx";
import { IconHome, IconArchive } from "./icons/index.tsx";
import { views, type View } from "../constants/mobileViews.ts";

type Props = {
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
};

const LeftMenuNav = ({ setActiveView }: Props) => {
  return (
    <section className="left-menu">
      <Logo />
      <main className="left-menu-content text-preset-sans-4">
        <nav className="main-filter">
          <ul>
            <li>
              <Link to="/" onClick={() => setActiveView(views[0])}>
                <IconHome /> All Notes
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/archive" onClick={() => setActiveView(views[2])}>
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
