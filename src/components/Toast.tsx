import { Link } from "react-router-dom";
import { IconCheckmark, IconCross } from "./icons";
import { useContext } from "react";
import { ToastContext } from "../context/toastContext";

const Toast = () => {
  const { toasts, hideToast } = useContext(ToastContext);

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      {toasts.map(({ id, message, link, toastType }) => (
        <article className="toast" key={id}>
          <span className="toast-icon">
            {toastType === "success" && <IconCheckmark />}
          </span>
          <div className="toast-info">
            <p>{message}</p>

            {link && (
              <Link
                to={`${link}`}
                aria-label={`Go to ${
                  link === "/" ? "All Notes" : "Archived Notes"
                }`}
              >
                {link === "/" ? "All Notes" : "Archived Notes"}
              </Link>
            )}
          </div>
          <button
            type="button"
            onClick={() => hideToast(id)}
            aria-label="Close notification"
          >
            <IconCross aria-hidden="true" />
          </button>
        </article>
      ))}
    </div>
  );
};

export default Toast;
