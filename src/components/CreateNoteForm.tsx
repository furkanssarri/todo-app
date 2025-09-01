import { useContext, useEffect, useRef, useState } from "react";
import { MobileContext } from "../context/MobileContext";
import { IconClock, IconTag } from "./icons";
import NoteActionsMobile from "./NoteActionsMobile";
import ActionsMenu from "./ActionsMenu";
import ConfirmModal from "./ConfirmModal";
import Button from "./Button";
import type { UseDataResult } from "../utils/useData";
import { format, formatISO } from "date-fns";
import { useParams, useNavigate } from "react-router";
import { ToastContext } from "../context/toastContext";

type Props = {
  dataObj: UseDataResult;
  handleNoteActions: (id: string, action: string) => void;
};

type FormData = {
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
};

const CreateNoteForm = ({ dataObj, handleNoteActions }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { isDesktop } = useContext(MobileContext);
  const { data, setData } = dataObj;
  const { id } = useParams();
  const note = data?.find((n) => n.id.toString() === id);
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

  const [modal, setModal] = useState<{
    open: boolean;
    action: "delete" | "archive" | "restore" | null;
  }>({
    open: false,
    action: null,
  });

  const { showToast } = useContext(ToastContext);

  // Form Title element auto focus
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
        id: Date.now().toString(),
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

  const handleOpenConfirm = (
    id: string,
    action: "delete" | "archive" | "restore",
  ) => {
    if (action !== "restore") {
      setModal({ open: true, action });
    } else {
      handleNoteActions(id, "archive");
    }
  };

  return (
    <>
      <article className="note-details">
        {!isDesktop && (
          <div className="mobile-actions">
            <NoteActionsMobile
              // TODO: this will be re-implemented as a "note-body" type of form in the future.
              exclude={note?.isArchived ? ["archive"] : ["restore"]}
              noteId={id!}
              handleOpenConfirm={handleOpenConfirm}
            />
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
            {/* TODO: refactor this into tags being separated by a comma and shown properly */}
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
        {isDesktop && (
          <div className="submit-buttons">
            <Button color="primary" size="lg" type="submit" form="add-new-form">
              Save Note
            </Button>
            <Button color="default" size="lg" onClick={() => navigate("/")}>
              Cancel
            </Button>
          </div>
        )}
      </article>
      {isDesktop && (
        <ActionsMenu
          handleOpenConfirm={handleOpenConfirm}
          noteId={id!}
          isArchived={note?.isArchived ?? false}
        />
      )}
      <ConfirmModal
        isOpen={modal.open}
        message={
          modal.action === "delete"
            ? "Are you sure you want to permanently delete this note? This action cannot be undone."
            : "Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime."
        }
        title={modal.action === "delete" ? "Delete Note" : "Archive Note"}
        type={modal.action}
        onConfirm={() => {
          if (modal.action && id) {
            handleNoteActions(id, modal.action); // dynamically call delete or archive
          }
          setModal({ open: false, action: null });
        }}
        onCancel={() => setModal({ open: false, action: null })}
        confirmLabel={
          modal.action === "delete" ? "Delete Note" : "Archive Note"
        }
        cancelLabel="Cancel"
      />
    </>
  );
};

export default CreateNoteForm;
