import data from "../data/data.json";
import Button from "./Button/index.js";
import { format } from "date-fns";

import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import { Link } from "react-router-dom";

const NotesList = () => {
  const context = useContext(MobileContext);

  if (!context) {
    throw new Error("Mobilecontext not provided");
  }
  const { isMobile } = context;
  return (
    <section className="inner-sidebar">
      {!isMobile && (
        <Button startIcon="plus" color="primary" size="lg">
          Create New Note
        </Button>
      )}
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <Link
                to={`/note/${item.id}`}
                className="note-item text-preset-sans-3"
              >
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
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default NotesList;
