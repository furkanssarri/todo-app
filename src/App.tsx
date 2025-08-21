import { MobileContext } from "./context/MobileContext";
import { useContext, useState } from "react";

import DesktopLayout from "./layouts/DeskttopLayout";
import MobileLayout from "./layouts/MobileLayout";

import { views, type View } from "./constants/mobileViews";

function App() {
  const [activeView, setActiveView] = useState<View>(views[0]);
  const context = useContext(MobileContext);
  if (!context) {
    throw new Error("Mobilecontext not provided");
  }
  const { isMobile } = context;

  return isMobile ? (
    <MobileLayout activeView={activeView} setActiveView={setActiveView} />
  ) : (
    <DesktopLayout activeView={activeView} setActiveView={setActiveView} />
  );
}

export default App;
