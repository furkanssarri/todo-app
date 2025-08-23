import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import NoteActionsMobile from "./NoteActionsMobile";

const CreateNoteForm = () => {
  const { isDesktop } = useContext(MobileContext);
  return (
    <>
      {!isDesktop && (
        <div className="mobile-actions">
          <NoteActionsMobile exclude={["delete", "archive"]} />
        </div>
      )}
      <form id="mobile-form">
        <div className="form-row">
          <input
            className="text-preset-1"
            type="text"
            name="title"
            id="title"
            placeholder="Enter a title..."
          />
        </div>
        <div className="form-group">
          <div className="form-row">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              name="tags"
              id="tags"
              placeholder="Add tags by commas (e.g. Work, Planning)"
            />
          </div>
          <div className="form-row">
            <label htmlFor="lastEdited">Last Edited</label>
            <input
              type="text"
              name="lastEdited"
              id="lastEdited"
              placeholder="Not yet saved"
            />
          </div>
        </div>

        <div className="form-group">
          <textarea
            name="content"
            id="content"
            placeholder="Start typing your note here..."
            rows={10}
            cols={50}
          />
        </div>

        {isDesktop && (
          <div className="submitButtons">
            <button type="submit">Save Note</button>
            <button type="button">Cancel</button>
          </div>
        )}
      </form>
    </>
  );
};

export default CreateNoteForm;
