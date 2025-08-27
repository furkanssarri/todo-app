import Button from "./Button/index.js";
import { format } from "date-fns";

import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import { Link, useNavigate } from "react-router-dom";
import type { UseDataResult } from "../utils/useData.js";
import MainTitle from "./MainTitle.js";
import { views, type View } from "../constants/mobileViews.js";
import SearchBar from "./SearchBar.js";

type PropTypes = {
  dataObj: UseDataResult;
  activeView: View;
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
  selectedTag: string | null;
};

const NotesList = ({
  dataObj,
  activeView,
  setActiveView,
  selectedTag,
}: PropTypes) => {
  const { error, isLoading } = dataObj;
  let data = dataObj.data;
  const navigate = useNavigate();
  const { isDesktop } = useContext(MobileContext);

  if (activeView.view === "/archive") {
    const archivedData = data.filter((note) => note.isArchived);
    data = archivedData;
  }

  if (selectedTag !== null) {
    data = data.filter((note) => note.tags.includes(selectedTag));
  }

  if (error) return <p>{error}</p>;

  if (isLoading) return <p>Loading data...</p>;

  return (
    <section className="inner-sidebar">
      {isDesktop && (
        <Button
          startIcon="plus"
          color="primary"
          size="lg"
          onClick={() => {
            navigate("/create");
            setActiveView(views[6]);
          }}
        >
          Create New Note
        </Button>
      )}
      {!isDesktop && (
        <div className="mobile-layout-main-heading">
          <MainTitle title={activeView.name} />
        </div>
      )}

      {activeView.view === "/search" && (
        <>
          <section className="search-area">
            <SearchBar />
            {/* TODO: actually get a searchparam variable for this. */}
          </section>
          <p className="text-preset-5 search-bar-desc">
            All notes matching <b>"SEARCH PARAM"</b> are displayed here.
          </p>
        </>
      )}
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <Link
                to={`/note/${item.id}`}
                className="note-item text-preset-sans-3"
                onClick={() => {
                  setActiveView(views[5]);
                }}
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
