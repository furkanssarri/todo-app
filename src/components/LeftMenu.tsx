import { NavLink } from "react-router-dom";
import Logo from "./Logo.tsx";
import TagsList from "./TagsList.tsx";
import { IconHome, IconArchive } from "./icons/index.tsx";
import type { UseDataResult } from "../utils/useData.ts";
import { useActiveView } from "../utils/useActiveView.ts";

type Props = {
  dataObj: UseDataResult;
  selectedTag: string | null;
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>;
};

const LeftMenuNav = ({ dataObj, selectedTag, setSelectedTag }: Props) => {
  const activeView = useActiveView();
  return (
    <section className="left-menu">
      <Logo />
      <div className="left-menu-content text-preset-sans-4">
        <nav className="main-filter">
          <ul>
            <li>
              <NavLink
                className={
                  activeView.path === "/" || activeView.path === "/note"
                    ? "active"
                    : ""
                }
                to="/"
                onClick={() => setSelectedTag(null)}
              >
                <IconHome />
                All Notes
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/archive"
                className={({ isActive }) => ` ${isActive ? "active" : ""}`}
                onClick={() => setSelectedTag(null)}
              >
                {" "}
                <IconArchive />
                Archived Notes
              </NavLink>
            </li>
          </ul>
        </nav>
        <TagsList
          dataObj={dataObj}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
      </div>
    </section>
  );
};

export default LeftMenuNav;
