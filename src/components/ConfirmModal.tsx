import { IconArchive, IconDelete } from "./icons";
import Button from "./Button";
import { useEffect } from "react";
import { FocusTrap } from "focus-trap-react";

type Props = {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
  title: string;
  type: "delete" | "archive" | "restore" | null;
  confirmLabel?: string;
  cancelLabel?: string;
};

const ConfirmModal = ({
  isOpen,
  onConfirm,
  onCancel,
  message,
  title,
  type,
  confirmLabel,
  cancelLabel,
}: Props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onCancel]);

  if (!isOpen || type === "restore") return null;

  const Icon = type === "delete" ? IconDelete : IconArchive;

  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <FocusTrap>
        <article
          className="confirm-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-modal-title"
          aria-describedby="confirm-modal-message"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-info">
            <span className="modal-icon">
              <Icon />
            </span>
            <section className="modal-details">
              <h3 id="confirm-modal-title" className="text-preset-3">
                {title}
              </h3>
              <p id="confirm-modal-message" className="text-preset-3">
                {message}
              </p>
            </section>
          </div>
          <section className="modal-actions">
            <div className="submit-buttons">
              <Button color="default" size="lg" onClick={onCancel}>
                {cancelLabel}
              </Button>
              <Button
                color={type === "delete" ? "danger" : "primary"}
                size="lg"
                onClick={onConfirm}
              >
                {confirmLabel}
              </Button>
            </div>
          </section>
        </article>
      </FocusTrap>
    </div>
  );
};

export default ConfirmModal;
