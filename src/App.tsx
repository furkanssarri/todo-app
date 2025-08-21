import { MobileContext } from "./context/MobileContext";
import { useContext } from "react";

import DesktopLayout from "./layouts/DeskttopLayout";
import MobileLayout from "./layouts/MobileLayout";

function App() {
  const context = useContext(MobileContext);
  if (!context) {
    throw new Error("Mobilecontext not provided");
  }
  const { isMobile } = context;

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}

export default App;
