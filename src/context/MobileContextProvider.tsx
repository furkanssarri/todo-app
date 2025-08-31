import { MobileContext } from "./MobileContext";
import { useMediaQuery } from "react-responsive";

const MobileContextProvider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery({ maxWidth: "425px" });
  const isTablet = useMediaQuery({ minWidth: "426px", maxWidth: "768px" });
  const isLaptop = useMediaQuery({ minWidth: "769px", maxWidth: "1024px" });
  const isDesktop = useMediaQuery({ minWidth: "769px" });

  return (
    <MobileContext.Provider value={{ isMobile, isTablet, isLaptop, isDesktop }}>
      {children}
    </MobileContext.Provider>
  );
};

export default MobileContextProvider;
