import { Link } from "react-router-dom";
import Logo from "./Logo.tsx";
import TagsList from "./TagsList.tsx";
import { IconHome, IconArchive } from "./icons/index.tsx";
import type { UseDataResult } from "../utils/useData.ts";

type Props = {
  dataObj: UseDataResult;
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>;
};

const LeftMenuNav = ({ dataObj, setSelectedTag }: Props) => {
  return (
    <section className="left-menu">
      <Logo />
      <main className="left-menu-content text-preset-sans-4">
        <nav className="main-filter">
          <ul>
            <li>
              <Link to="/" onClick={() => setSelectedTag(null)}>
                <IconHome /> All Notes
              </Link>
            </li>
            <li>
              {" "}
              <a href="#" onClick={() => setSelectedTag(null)}>
                {" "}
                <IconArchive /> Archived Notes
              </a>
            </li>
          </ul>
        </nav>
        <TagsList dataObj={dataObj} setSelectedTag={setSelectedTag} />
      </main>
    </section>
  );
};

export default LeftMenuNav;
