import { useLocation } from "react-router-dom";
import { views, type View } from "../constants/pageViews";

export const useActiveView = (): View => {
  const location = useLocation();

  // special-case home
  if (location.pathname === "/") {
    return views.find((v) => v.path === "/") ?? views[0];
  }

  // otherwise find exact or subpath match
  return (
    views.find(
      (view) =>
        location.pathname === view.path ||
        location.pathname.startsWith(`${view.path}/`),
    ) ?? views[0]
  );
};
