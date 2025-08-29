import { settingsViews } from "../constants/pageViews";
import { Link } from "react-router-dom";

const SettingsList = () => {
  return (
    <>
      {/* TODO: fix the class name to a more meaningful one or refactor existing left-menu styling to fiti; */}

      <ul className="settings-menu">
        {settingsViews.map((view) => {
          const Icon = view.icon;
          return (
            <li key={view.id}>
              <Link to={`/settings/${view.path}`}>
                <Icon />
                {view.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SettingsList;
