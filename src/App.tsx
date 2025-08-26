import { MobileContext } from "./context/MobileContext";
import { useContext, useState } from "react";

import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import useData from "./utils/useData";
import { type View, views } from "./constants/mobileViews";

function App() {
  const context = useContext(MobileContext);
  const { isDesktop } = context;

  const dataObj = useData("local");

  const [activeView, setActiveView] = useState<View>(views[0]);

  return isDesktop ? (
    <DesktopLayout
      dataObj={dataObj}
      activeView={activeView}
      setActiveView={setActiveView}
    />
  ) : (
    <MobileLayout
      dataObj={dataObj}
      activeView={activeView}
      setActiveView={setActiveView}
    />
  );
}

export default App;
