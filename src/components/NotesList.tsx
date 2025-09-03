import Button from "./Button/index.js";
import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import { useNavigate } from "react-router-dom";
import type { UseDataResult } from "../utils/useData.js";
import MainTitle from "./MainTitle.js";
import SearchBar from "./SearchBar.js";
import { useActiveView } from "../utils/useActiveView.js";
import SettingsList from "./SettingsList.js";
import EmptyStateIndicator from "./EmptyStateIndicator.js";
import NoteListItem from "./NoteListItem.js";

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
    if (!Array.isArray(archivedData) && archivedData < 1)
      return (
        <EmptyStateIndicator message="No notes have been archived yet. Move notes here for safekeeping, or create a new note." />
      );
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
    <section className="inner-sidebar" aria-label="Notes list" role="region">
      {isDesktop && activeView.path !== "/settings" && (
        <Button
          startIcon="plus"
          color="primary"
          size="lg"
          onClick={() => navigate("/create")}
          aria-label="Create a new note"
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
          <section className="search-area" aria-label="Search notes">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </section>
          <p
            className="text-preset-5 search-bar-desc"
            role="status"
            aria-live="polite"
          >
            All notes matching{" "}
            <b>{!searchQuery ? "your search term" : searchQuery}</b> are
            displayed here.
          </p>
        </>
      )}
      {activeView.path === "/settings" ? (
        <SettingsList />
      ) : (
        <>
          {Array.isArray(data) && data.length > 0 ? (
            <NoteListItem data={data} />
          ) : (
            <EmptyStateIndicator
              message={
                activeView.path === "/archive"
                  ? "No notes have been archived yet. Move notes here for safekeeping, or create a new note."
                  : activeView.path === "/search" || searchQuery
                  ? `No notes match your search. Try a different keyword or create a new note.`
                  : "You don't have any notes yet. Start a new note to capture your thoughts and ideas."
              }
            />
          )}
        </>
      )}
    </section>
  );
};

export default NotesList;
