import { Link } from "react-router-dom";
import { IconSettings } from "./icons";

const Settings = () => {
  return (
    <button className="settings-button">
      <Link to="/settings">
        <IconSettings />
      </Link>
    </button>
  );
};

export default Settings;
