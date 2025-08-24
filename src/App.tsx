import { MobileContext } from "./context/MobileContext";
import { useContext, useEffect, useState } from "react";

import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import useData from "./utils/useData";
import { type View, views } from "./constants/mobileViews";

function App() {
  const dataObj = useData("/db.json");

  useEffect(() => {
    console.log(dataObj);
  }, [dataObj]);

  const [activeView, setActiveView] = useState<View>(views[0]);

  // const handleAddNewNote = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(event);
  // };

  const context = useContext(MobileContext);
  if (!context) {
    throw new Error("Mobilecontext not provided");
  }
  const { isDesktop } = context;

  return isDesktop ? (
    <DesktopLayout dataObj={dataObj} />
  ) : (
    <MobileLayout
      dataObj={dataObj}
      activeView={activeView}
      setActiveView={setActiveView}
    />
  );
}

export default App;
