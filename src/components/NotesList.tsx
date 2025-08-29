import Button from "./Button/index.js";
import { format } from "date-fns";

import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import { Link, useNavigate } from "react-router-dom";
import type { UseDataResult } from "../utils/useData.js";
import MainTitle from "./MainTitle.js";
import SearchBar from "./SearchBar.js";
import { useActiveView } from "../utils/useActiveView.js";
import SettingsList from "./SettingsList.js";

type PropTypes = {
  dataObj: UseDataResult;
  selectedTag: string | null;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const NotesList = ({
  dataObj,
  selectedTag,
  searchQuery,
  setSearchQuery,
}: PropTypes) => {
  const { error, isLoading } = dataObj;
  let data = dataObj.data;
  const navigate = useNavigate();
  const { isDesktop } = useContext(MobileContext);
  const activeView = useActiveView();

  if (activeView.path === "/archive") {
    const archivedData = data.filter((note) => note.isArchived);
    data = archivedData;
  }

  if (selectedTag !== null) {
    data = data.filter((note) => note.tags.includes(selectedTag));
  }

  if (error) return <p>{error}</p>;

  if (isLoading) return <p>Loading data...</p>;

  if (searchQuery !== "") {
    data = data.filter((note) => {
      const title = note.title.toLowerCase();
      const content = note.content.toLowerCase();
      const tags = note.tags.join(" ").toLowerCase();
      return (
        title.includes(searchQuery) ||
        content.includes(searchQuery) ||
        tags.includes(searchQuery)
      );
    });
  }

  return (
    <section className="inner-sidebar">
      {isDesktop && activeView.path !== "/settings" && (
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
          {searchQuery === "" ? (
            selectedTag ? (
              <MainTitle title={`Showing results for: ${selectedTag}`} />
            ) : (
              <MainTitle title={activeView.name} />
            )
          ) : (
            <MainTitle title={`Showing results for: ${searchQuery}`} />
          )}
        </div>
      )}

      {activeView.path === "/search" && (
        <>
          <section className="search-area">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </section>
          <p className="text-preset-5 search-bar-desc">
            All notes matching{" "}
            <b>{!searchQuery ? "your search term" : searchQuery}</b> are
            displayed here.
          </p>
        </>
      )}
      {activeView.path === "/settings" ? (
        <SettingsList />
      ) : (
        <ul>
          {data &&
            data.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/note/${item.id}`}
                  className="note-item text-preset-sans-3"
                >
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
            ))}
        </ul>
      )}
    </section>
  );
};

export default NotesList;
