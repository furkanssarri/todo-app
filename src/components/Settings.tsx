import { Link } from "react-router-dom";
import { IconSettings } from "./icons";

const Settings = () => {
  return (
    <Link to="/settings" className="settings-button" aria-label="Open settings">
      <IconSettings aria-hidden="true" />
    </Link>
  );
};

export default Settings;
