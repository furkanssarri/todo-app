import { useLocation } from "react-router-dom";
import { views, type View } from "../constants/mobileViews";

export const useActiveView = (): View => {
  const location = useLocation();
  return (
    views.find(
      (view) =>
        location.pathname === view.view ||
        location.pathname.startsWith(`${view.view}/`),
    ) ?? views[0]
  );
};
