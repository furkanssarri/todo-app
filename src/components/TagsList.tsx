import { useContext } from "react";
import tags from "../db/tags.json";

import { IconTag } from "./icons/index";
import { MobileContext } from "../context/MobileContext";
import MainTitle from "./MainTitle";

const TagsList = () => {
  const { isDesktop } = useContext(MobileContext);
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
        {tags.map((tag) => (
          <li key={tag} className="tag-item">
            <a href="#" className="text-preset-sans-4">
              <IconTag /> {tag}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TagsList;
