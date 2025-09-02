import { settingsViews } from "../constants/pageViews";
import { NavLink } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const SettingsList = () => {
  return (
    <>
      {/* TODO: fix the class name to a more meaningful one or refactor existing left-menu styling to fiti; */}

      <ul className="settings-menu">
        {settingsViews.map((view) => {
          const Icon = view.icon;
          return (
            <Fragment key={view.id}>
              <li>
                <NavLink
                  to={`/settings/${view.path}`}
                  className={({ isActive }) => ` ${isActive ? "active" : ""}`}
                >
                  <Icon />
                  {view.name}
                </NavLink>
              </li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default SettingsList;
