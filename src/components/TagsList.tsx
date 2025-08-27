import { useContext, useMemo } from "react";

import { IconTag } from "./icons/index";
import { MobileContext } from "../context/MobileContext";
import MainTitle from "./MainTitle";
import type { UseDataResult } from "../utils/useData";

type Props = {
  dataObj: UseDataResult;
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>;
};

const TagsList = ({ dataObj, setSelectedTag }: Props) => {
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
      <ul>
        {uniqueTags.map((tag, index) => (
          <li key={`${tag}-${index}`} className="tag-item">
            <a
              href="#"
              className="text-preset-sans-4"
              onClick={() => setSelectedTag(tag)}
            >
              <IconTag /> {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TagsList;
