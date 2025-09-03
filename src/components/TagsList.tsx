import { useContext, useMemo } from "react";

import { IconTag } from "./icons/index";
import { MobileContext } from "../context/MobileContext";
import MainTitle from "./MainTitle";
import type { UseDataResult } from "../utils/useData";
import { NavLink } from "react-router-dom";

type Props = {
  dataObj: UseDataResult;
  selectedTag: string | null;
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>;
};

const TagsList = ({ dataObj, selectedTag, setSelectedTag }: Props) => {
  const { isDesktop } = useContext(MobileContext);

  const uniqueTags = useMemo(() => {
    const data = dataObj?.data ?? []; // Fallback
    const tagSet = new Set<string>();
    data.forEach((note) => note.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet);
  }, [dataObj?.data]);

  return (
    <section className="tags-wrapper">
      {isDesktop !== true ? (
        <div className="mobile-layout-main-heading">
          <MainTitle title="Tags" />
        </div>
      ) : (
        <h4 className="text-preset-sans-4">Tags</h4>
      )}
      <ul aria-label="Filter tags list">
        {uniqueTags.map((tag, index) => (
          <li key={`${tag}-${index}`} className="tag-item">
            {!isDesktop ? (
              <NavLink
                to={`/tags/${tag.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-preset-sans-4 ${isActive ? "active" : ""}`
                }
                aria-current={selectedTag === tag ? "page" : undefined}
                onClick={() => setSelectedTag(tag)}
              >
                <IconTag aria-hidden="true" focusable="false" />{" "}
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </NavLink>
            ) : (
              <button
                type="button"
                className={`text-preset-sans-4 ${
                  selectedTag === tag ? "active" : ""
                }`}
                onClick={() => setSelectedTag(tag)}
                aria-current={selectedTag === tag ? "page" : undefined}
              >
                <IconTag aria-hidden="true" focusable="false" />{" "}
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TagsList;
