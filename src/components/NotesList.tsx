import Button from "./Button/index.js";
import { format } from "date-fns";

import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import { Link, useNavigate } from "react-router-dom";
import type { Note } from "../utils/useData.js";
import MainTitle from "./MainTitle.js";

type PropTypes = {
  data: Note[] | null;
  error: string | null;
  isLoading: boolean;
};

const NotesList = ({ data, error, isLoading }: PropTypes) => {
  const navigate = useNavigate();
  const context = useContext(MobileContext);

  if (!context) {
    throw new Error("Mobilecontext not provided");
  }
  const { isDesktop } = context;

  if (error) return <p>{error}</p>;

  if (isLoading) return <p>Loading data...</p>;

  return (
    <section className="inner-sidebar">
      {isDesktop && (
        <Button
          startIcon="plus"
          color="primary"
          size="lg"
          onClick={() => navigate("/create")}
        >
          Create New Note
        </Button>
      )}
      {!isDesktop && (
        <div className="mobile-layout-main-heading">
          <MainTitle title="Home" />
        </div>
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
