import data from "../data/data.json";
// import SvgIconPlus from "./icons/IconPlus";

import Button from "./Button/index.js";

import { format } from "date-fns";

const NotesList = () => {
  return (
    <nav className="inner-sidebar">
      <Button startIcon="plus" color="primary" size="lg">
        Create New Note
      </Button>
      {/* <button className="create-note-button text-preset-sans-4">
        <SvgIconPlus /> Create New Note
      </button> */}
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="note-item text-preset-sans-3">
                {item.title}
                <div className="item-details text-preset-sans-6">
                  <div className="item-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="item-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="item-date">
                    {format(item.lastEdited, "dd MMM yyyy")}
                  </span>
                </div>
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default NotesList;
