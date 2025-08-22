import { MobileContext } from "./context/MobileContext";
import { useContext } from "react";

import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import useData from "./utils/useData";

function App() {
  const { data, error, isLoading } = useData("/db.json");

  const context = useContext(MobileContext);
  if (!context) {
    throw new Error("Mobilecontext not provided");
  }
  const { isDesktop } = context;

  return isDesktop ? (
    <DesktopLayout data={data} error={error} isLoading={isLoading} />
  ) : (
    <MobileLayout data={data} error={error} isLoading={isLoading} />
  );
}

export default App;
