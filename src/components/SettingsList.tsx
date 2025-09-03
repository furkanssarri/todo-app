import { settingsViews } from "../constants/pageViews";
import { NavLink } from "react-router-dom";

const SettingsList = () => {
  return (
    <>
      <ul className="settings-menu" role="menu" aria-label="Settings menu">
        {settingsViews.map((view) => {
          const Icon = view.icon;
          return (
            <li key={view.id}>
              <NavLink
                to={`/settings/${view.path}`}
                className={({ isActive }) => ` ${isActive ? "active" : ""}`}
              >
                <Icon aria-hidden="true" focusable="false" />
                {view.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SettingsList;
