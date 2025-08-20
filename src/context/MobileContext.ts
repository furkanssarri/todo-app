import { createContext } from "react";

type MobileContextType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};
export const MobileContext = createContext<MobileContextType>({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
} as MobileContextType);
