import { MobileContext } from "./MobileContext";
import { useMediaQuery } from "react-responsive";

const MobileContextProvider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery({ maxWidth: "424px" });
  const isTablet = useMediaQuery({ minWidth: "425px", maxWidth: "768px" });
  const isDesktop = useMediaQuery({ minWidth: "769px" });

  return (
    <MobileContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </MobileContext.Provider>
  );
};

export default MobileContextProvider;
