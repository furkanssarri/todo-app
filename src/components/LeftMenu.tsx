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
    <section className="left-menu" aria-label="Main filtering">
      <Logo />
      <div className="left-menu-content text-preset-sans-4">
        <nav className="main-filter" aria-label="Primary note filters">
          <ul>
            <li>
              <NavLink
                className={
                  activeView.path === "/" || activeView.path === "/note"
                    ? "active"
                    : ""
                }
                aria-current="page"
                to="/"
                onClick={() => setSelectedTag(null)}
              >
                <IconHome aria-hidden="true" focusable="false" />
                All Notes
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/archive"
                className={({ isActive }) => ` ${isActive ? "active" : ""}`}
                aria-current="page"
                onClick={() => setSelectedTag(null)}
              >
                {" "}
                <IconArchive aria-hidden="true" focusable="false" />
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
