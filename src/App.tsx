import Footer from "./components/Footer";
import LeftMenuNav from "./components/LeftMenu";
import MainContent from "./components/MainContent";
import { MobileContext } from "./context/MobileContext";

import DesktopLayout from "./layouts/DeskttopLayout";
import MobileLayout from "./layouts/MobileLayout";

import { useContext, useEffect } from "react";

function App() {
  const context = useContext(MobileContext);
  if (!context) {
    throw new Error("Mobilecontext not provided");
  }
  const { isMobile } = context;
  // const isMobile = useMediaQuery({ maxWidth: "768px" });

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);
  return isMobile ? <MobileLayout /> : <DesktopLayout />;
  return (
    <>
      <div id="content">
        <LeftMenuNav />
        <MainContent />
      </div>
      <Footer />
    </>
  );
}

export default App;
