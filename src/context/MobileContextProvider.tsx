import { MobileContext } from "./MobileContext";
import { useMediaQuery } from "react-responsive";

const MobileContextProvider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery({ maxWidth: "768px" });

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export default MobileContextProvider;
