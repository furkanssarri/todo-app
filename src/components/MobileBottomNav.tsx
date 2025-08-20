import Button from "./Button";
import { views, type View } from "../constants/mobileViews";

type MobileBottomNavProps = {
  activeView: View;
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
};

const MobileBottomNav = ({
  activeView,
  setActiveView,
}: MobileBottomNavProps) => {
  return (
    <nav className="mobile-nav">
      <ul>
        {views &&
          views.map((item) => {
            if (item !== "noteBody") {
              return (
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
              );
            }
          })}
      </ul>
    </nav>
  );
};

export default MobileBottomNav;
