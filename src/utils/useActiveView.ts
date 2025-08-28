import { useLocation } from "react-router-dom";
import { views, type View } from "../constants/mobileViews";

export const useActiveView = (): View => {
  const location = useLocation();

  // special-case home
  if (location.pathname === "/") {
    return views.find((v) => v.view === "/") ?? views[0];
  }

  // otherwise find exact or subpath match
  return (
    views.find(
      (view) =>
        location.pathname === view.view ||
        location.pathname.startsWith(`${view.view}/`),
    ) ?? views[0]
  );
};
