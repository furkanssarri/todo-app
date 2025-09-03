import { Fragment } from "react";
import { Link } from "react-router-dom";
import { views } from "../constants/pageViews";
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
    <nav className="mobile-nav" aria-label="Mobile Navigation">
      <ul>
        {views &&
          !isDesktop &&
          views.map((item, index) => {
            if (item.path !== "/note" && item.path !== "/create") {
              const Icon = item.icon;
              return (
                <Fragment key={item.id}>
                  <li>
                    <Link
                      to={item.path}
                      onClick={() => setSelectedTag(null)}
                      className={`${
                        activeView.path === item.path ? "active" : ""
                      }`}
                      aria-current={
                        activeView.path === item.path ? "page" : undefined
                      }
                    >
                      <Icon aria-hidden="true" focusable="false" />
                      {isTablet ? (
                        item.name
                      ) : (
                        <span className="sr-only">{item.name}</span>
                      )}
                    </Link>
                  </li>
                  {isTablet && index < views.length - 3 && (
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
