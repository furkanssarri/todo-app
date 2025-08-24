import { useContext, useEffect, useRef } from "react";
import { MobileContext } from "../context/MobileContext";
import NoteActionsMobile from "./NoteActionsMobile";
import { IconClock, IconTag } from "./icons";
import ActionsMenu from "./ActionsMenu";
import type { View } from "../constants/mobileViews";
import Button from "./Button";

type Props = {
  activeView: View;
};

const CreateNoteForm = ({ activeView }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const { isDesktop } = useContext(MobileContext);
  return (
    <>
      <article className="note-details">
        {!isDesktop && (
          <div className="mobile-actions">
            <NoteActionsMobile exclude={["delete", "archive"]} />
          </div>
        )}
        <form id="add-new-form">
          <div className="form-row">
            <input
              className="text-preset-1"
              type="text"
              name="title"
              id="title"
              placeholder="Enter a title..."
              ref={inputRef}
            />
          </div>
          <div className="properties">
            <div className="properties-labels">
              <span className="tags-label">
                <IconTag />
                <label htmlFor="tags">Tags</label>
              </span>
              <span className="lastEdited-label">
                <IconClock />
                <label htmlFor="lastEdited">Last Edited</label>
              </span>
            </div>
            <div className="properties-inputs">
              <input
                type="text"
                name="tags"
                id="tags"
                placeholder="Add tags by commas (e.g. Work, Planning)"
              />
              <input
                type="text"
                name="lastEdited"
                id="lastEdited"
                placeholder="Not yet saved"
              />
            </div>
          </div>
          <div className="textarea">
            <textarea
              name="content"
              id="content"
              placeholder="Start typing your note here..."
              rows={27}
              cols={50}
            />
          </div>
        </form>
        {isDesktop && (
          <div className="submit-buttons">
            <Button color="primary" size="lg">
              Save Note
            </Button>
            <Button color="default" size="lg">
              Cancel
            </Button>
            {/* <button type="submit">Save Note</button> */}
            {/* // <button type="button">Cancel</button> */}
          </div>
        )}
      </article>
      {isDesktop && <ActionsMenu activeView={activeView} />}
    </>
  );
};

export default CreateNoteForm;
