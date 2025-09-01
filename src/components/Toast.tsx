import { Link } from "react-router-dom";
import { IconCheckmark, IconCross } from "./icons";
import { useContext } from "react";
import { ToastContext } from "../context/toastContext";

const Toast = () => {
  const { toasts, hideToast } = useContext(ToastContext);

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map(({ id, message, link, toastType }) => (
        <div className="toast" key={id}>
          <span className="toast-icon">
            {toastType === "success" && <IconCheckmark />}
          </span>
          <div className="toast-info">
            <p>{message}</p>
            {link && <Link to={`/${link}`}>{link}</Link>}
          </div>
          <button type="button" onClick={() => hideToast(id)}>
            <IconCross />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
