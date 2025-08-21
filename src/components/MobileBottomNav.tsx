import { Fragment } from "react";
import { Link } from "react-router-dom";
import { views, type View } from "../constants/mobileViews";
import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";

type MobileBottomNavProps = {
  activeView: View;
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
};

const MobileBottomNav = ({
  activeView,
  setActiveView,
}: MobileBottomNavProps) => {
  const { isTablet, isDesktop } = useContext(MobileContext);
  return (
    <nav className="mobile-nav">
      <ul>
        {views &&
          !isDesktop &&
          views.map((item, index) => {
            if (item.view !== "/noteBody") {
              const Icon = item.icon;
              return (
                <Fragment key={item.id}>
                  <li>
                    <Link
                      to={item.view}
                      onClick={() => setActiveView(item)}
                      className={`${activeView === item ? "active" : ""}`}
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
