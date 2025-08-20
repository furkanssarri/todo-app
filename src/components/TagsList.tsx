import { useContext } from "react";
import tags from "../data/tags.json";

import { IconTag } from "./icons/index";
import { MobileContext } from "../context/MobileContext";

const TagsList = () => {
  const { isTablet } = useContext(MobileContext);
  return (
    <section className="tags-wrapper">
      {!isTablet && <h4 className="text-preset-sans-4">Tags</h4>}
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
