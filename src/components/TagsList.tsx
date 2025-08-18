import tags from "../data/tags.json";

import { IconTag } from "./icons/index";

const TagsList = () => {
  return (
    <section className="tags-wrapper">
      <h4 className="text-preset-sans-4">Tags</h4>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <a href="#">
              <IconTag /> {tag}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TagsList;
