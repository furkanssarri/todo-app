import Footer from "./components/Footer";
import LeftMenuNav from "./components/LeftMenu";
import MainContent from "./components/MainContent";

import DesktopLayout from "./layouts/DeskttopLayout";
import MobileLayout from "./layouts/MobileLayout";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ maxWidth: "768px" });

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
