import { format, formatISO } from "date-fns";
import { useContext, useEffect, useRef, useState } from "react";
import type { Note, Notes } from "../utils/useData";
import { IconTag, IconClock } from "./icons";
import { useActiveView } from "../utils/useActiveView";
import type { FormData } from "./Body";
import { ToastContext } from "../context/toastContext";
import { useNavigate } from "react-router-dom";

type Props = {
  note: Note | undefined;
  setData: React.Dispatch<React.SetStateAction<Notes>>;
};

const CreateNote = ({ note, setData }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const activeView = useActiveView();
  const { showToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const [tagsText, setTagsText] = useState<string>(() =>
    note ? note.tags.join(", ") : "",
  );

  const [formData, setFormData] = useState<FormData>(() => {
    return note
      ? {
          title: note.title,
          tags: note.tags,
          content: note.content,
          lastEdited: note.lastEdited,
          isArchived: note.isArchived,
        }
      : {
          title: "",
          tags: [],
          content: "",
          lastEdited: "",
          isArchived: false,
        };
  });

  useEffect(() => {
    setFormData(() => {
      return note
        ? {
            title: note.title,
            tags: note.tags,
            content: note.content,
            lastEdited: note.lastEdited,
            isArchived: note.isArchived,
          }
        : {
            title: "",
            tags: [],
            content: "",
            lastEdited: "",
            isArchived: false,
          };
    });
    setTagsText(note ? note.tags.join(", ") : "");
  }, [note]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (note) {
      // Editing an existing note
      setData((prev) =>
        prev.map((n) =>
          n.id === note.id
            ? {
                ...n,
                title: formData.title,
                tags: formData.tags,
                content: formData.content,
                lastEdited: formatISO(Date.now()),
                isArchived: formData.isArchived,
              }
            : n,
        ),
      );
      showToast("Note updated successfully!", "", "success");
    } else {
      // Creating a new note
      const newNote = {
        id: crypto.randomUUID(),
        title: formData.title,
        tags: formData.tags,
        content: formData.content,
        lastEdited: formatISO(Date.now()),
        isArchived: false,
      };
      setData((prev) => [...prev, newNote]);
      showToast("Note saved successfully!", "", "success");
    }

    // reset only if creating
    if (!note) {
      setFormData({
        title: "",
        tags: [],
        content: "",
        lastEdited: "",
        isArchived: false,
      });
      inputRef.current?.focus();
    }
    navigate("/");
  };

  // Form Title element auto focus
  useEffect(() => {
    if (activeView.path === "/create") {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [activeView]);
  return (
    <>
      <form id="add-new-form" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="form-row">
          <input
            className="text-preset-1"
            type="text"
            name="title"
            id="title"
            placeholder="Enter a title..."
            required
            ref={inputRef}
            value={formData.title}
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
              value={tagsText}
              onChange={(e) => {
                const text = e.target.value;
                setTagsText(text);
                const parsed = text
                  .split(",")
                  .map((tag) => tag.trim())
                  .filter((tag) => tag.length > 0);
                setFormData((prev) => ({
                  ...prev,
                  tags: parsed,
                }));
              }}
              onBlur={() => {
                setTagsText((prev) => {
                  const normalized = prev
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean)
                    .join(", ");
                  return normalized;
                });
              }}
            />
            {note ? (
              <p className="last-edited-span">
                {format(note.lastEdited, "dd MMM yyyy")}
              </p>
            ) : (
              <input
                type="text"
                name="lastEdited"
                id="lastEdited"
                placeholder="Not yet saved"
                disabled
              />
            )}
          </div>
        </div>
        <div className="textarea">
          <textarea
            name="content"
            id="content"
            placeholder="Start typing your note here..."
            value={formData.content}
            onChange={(e) =>
              setFormData({
                ...formData,
                content: e.target.value,
              })
            }
          />
        </div>
      </form>
    </>
  );
};

export default CreateNote;
