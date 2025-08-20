import Button from "./Button";
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
  const { isMobile, isTablet } = useContext(MobileContext);
  return (
    <nav className="mobile-nav">
      <ul>
        {views &&
          isMobile &&
          views.map((item, index) => {
            if (item !== "noteBody") {
              return (
                <>
                  <li key={item}>
                    <Button
                      startIcon={item}
                      variant="text"
                      color="primary"
                      size="lg"
                      onClick={() => setActiveView(item)}
                      className={activeView === item ? "active" : ""}
                    />
                  </li>
                  {isTablet && index < views.length - 2 && (
                    <hr className="mobile-nav-line" />
                  )}
                </>
              );
            }
          })}
      </ul>
    </nav>
  );
};

export default MobileBottomNav;
