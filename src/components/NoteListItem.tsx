import { format } from "date-fns";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import type { Note } from "../utils/useData";

type Props = {
  data: Note[];
};

const NoteListItem = ({ data }: Props) => {
  const location = useLocation();
  return (
    <ul>
      {data &&
        data.map((item) => {
          const isActive = location.pathname === `/note/${item.id}`;
          return (
            <Fragment key={item.id}>
              <li
                className={`note-item text-preset-sans-3 ${
                  isActive ? "active" : ""
                }`}
              >
                <Link to={`/note/${item.id}`}>
                  {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                  <div className="item-details text-preset-sans-6">
                    <div className="item-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="item-tag">
                          {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </span>
                      ))}
                    </div>
                    <span className="item-date">
                      {format(item.lastEdited, "dd MMM yyyy")}
                    </span>
                  </div>
                </Link>
              </li>
            </Fragment>
          );
        })}
    </ul>
  );
};

export default NoteListItem;
