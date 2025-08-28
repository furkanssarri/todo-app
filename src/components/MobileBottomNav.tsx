import { Fragment } from "react";
import { Link } from "react-router-dom";
import { views } from "../constants/mobileViews";
import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";
import { useActiveView } from "../utils/useActiveView";

type MobileBottomNavProps = {
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>;
};

const MobileBottomNav = ({ setSelectedTag }: MobileBottomNavProps) => {
  const { isTablet, isDesktop } = useContext(MobileContext);
  const activeView = useActiveView();

  return (
    <nav className="mobile-nav">
      <ul>
        {views &&
          !isDesktop &&
          views.map((item, index) => {
            if (item.view !== "/note" && item.view !== "/create") {
              const Icon = item.icon;
              return (
                <Fragment key={item.id}>
                  <li>
                    <Link
                      to={item.view}
                      onClick={() => setSelectedTag(null)}
                      className={`${
                        activeView.view === item.view ? "active" : ""
                      }`}
                    >
                      <Icon />
                      {isTablet && item.name}
                    </Link>
                  </li>
                  {isTablet && index < views.length - 2 && (
                    <hr className="mobile-nav-line" />
                  )}
                </Fragment>
              );
            }
          })}
      </ul>
    </nav>
  );
};

export default MobileBottomNav;
