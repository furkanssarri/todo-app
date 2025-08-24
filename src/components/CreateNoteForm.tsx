import { useContext, useEffect, useRef, useState } from "react";
import { MobileContext } from "../context/MobileContext";
import NoteActionsMobile from "./NoteActionsMobile";
import { IconClock, IconTag } from "./icons";
import ActionsMenu from "./ActionsMenu";
import { type View } from "../constants/mobileViews";
import Button from "./Button";
import type { Note } from "../utils/useData";

type Props = {
  activeView: View;

  note: Note;
  setNote: React.Dispatch<React.SetStateAction<Note>>;
};

type FormData = {
  title: string;
  tags: string[];
  content: string;
  lastEdited: Date;
  isArchived: boolean;
};

const CreateNoteForm = ({ activeView, note, setNote }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const { isDesktop } = useContext(MobileContext);

  const [formData, setFormData] = useState<FormData>({
    title: "",
    tags: [],
    content: "",
    lastEdited: new Date(),
    isArchived: false,
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newNote = {
      ...note,
      id: Date.now().toString(),
      title: formData.title,
      tags: formData.tags,
      content: formData.content,
      lastEdited: Date.now().toString(),
      isArchived: false,
    };
    setNote(newNote);
  };

  return (
    <>
      <article className="note-details">
        {!isDesktop && (
          <div className="mobile-actions">
            <NoteActionsMobile exclude={["delete", "archive"]} />
          </div>
        )}
        <form id="add-new-form" onSubmit={(e) => handleFormSubmit(e)}>
          <div className="form-row">
            <input
              className="text-preset-1"
              type="text"
              name="title"
              id="title"
              placeholder="Enter a title..."
              ref={inputRef}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const input = e.currentTarget.value
                      .split(",")
                      .map((tag: string) => tag.trim())
                      .filter((tag: string) => tag.length > 0);
                    setFormData((prev) => ({
                      ...prev,
                      tags: [...prev.tags, ...input],
                    }));
                    e.currentTarget.value = "";
                  }
                }}
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
              onChange={(e) =>
                setFormData({
                  ...formData,
                  content: e.target.value,
                })
              }
            />
          </div>
        </form>
        {isDesktop && (
          <div className="submit-buttons">
            <Button color="primary" size="lg" type="submit" form="add-new-form">
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
