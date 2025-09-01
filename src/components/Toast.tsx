import { Link } from "react-router-dom";
import { IconCheckmark, IconCross } from "./icons";
import { useContext } from "react";
import { ToastContext } from "../context/toastContext";

const Toast = () => {
  const { isVisible, message, link, toastType, hideToast } =
    useContext(ToastContext);

  if (!isVisible) return null;

  return (
    <div className="toast">
      <span className="toast-icon">
        {toastType === "success" && <IconCheckmark />}
      </span>
      <div className="toast-info">
        <p>{message}</p>
        {link && <Link to={`/${link}`}>{link}</Link>}
      </div>
      {/* <Button startIcon="plus" variant="text" onClick={hideToast}>
        X
      </Button> */}
      <a href="#" onClick={hideToast}>
        <IconCross />
      </a>
    </div>
  );
};

export default Toast;
