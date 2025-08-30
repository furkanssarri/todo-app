import { createContext } from "react";

type MobileContextType = {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
};
export const MobileContext = createContext<MobileContextType>({
  isMobile: false,
  isTablet: false,
  isLaptop: false,
  isDesktop: false,
} as MobileContextType);
