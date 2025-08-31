import { IconArchive, IconDelete } from "./icons";
import Button from "./Button";

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
  if (!isOpen || type === "restore") return null;

  const Icon = type === "delete" ? IconDelete : IconArchive;

  return (
    <div className="modal-backdrop">
      <article className="confirm-modal">
        <div className="modal-info">
          <span className="modal-icon">
            <Icon />
          </span>
          <section className="modal-details">
            <h3 className="text-preset-3">{title}</h3>
            <p className="text-preset-3">{message}</p>
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
    </div>
  );
};

export default ConfirmModal;
