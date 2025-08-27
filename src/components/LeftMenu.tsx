import { Link } from "react-router-dom";
import Logo from "./Logo.tsx";
import TagsList from "./TagsList.tsx";
import { IconHome, IconArchive } from "./icons/index.tsx";
import { views, type View } from "../constants/mobileViews.ts";
import type { UseDataResult } from "../utils/useData.ts";

type Props = {
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
  dataObj: UseDataResult;
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>;
};

const LeftMenuNav = ({ setActiveView, dataObj, setSelectedTag }: Props) => {
  return (
    <section className="left-menu">
      <Logo />
      <main className="left-menu-content text-preset-sans-4">
        <nav className="main-filter">
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => {
                  setActiveView(views[0]);
                  setSelectedTag(null);
                }}
              >
                <IconHome /> All Notes
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/archive"
                onClick={() => {
                  setActiveView(views[2]);
                  setSelectedTag(null);
                }}
              >
                {" "}
                <IconArchive /> Archived Notes
              </Link>
            </li>
          </ul>
        </nav>
        <TagsList dataObj={dataObj} setSelectedTag={setSelectedTag} />
      </main>
    </section>
  );
};

export default LeftMenuNav;
