import NotesList from "../components/NotesList";
import Body from "../components/Body";
import TagsList from "../components/TagsList";
import SettingsPage from "../components/SettingsPage";
import NotFound from "../pages/NotFound";

export const mobileRoutes = [
  { path: "/", element: NotesList },
  { path: "/create", element: Body },
  { path: "/search", element: NotesList },
  { path: "/archive", element: NotesList },
  { path: "/tags", element: TagsList },
  { path: "/tags/:tag", element: NotesList },
  { path: "/settings", element: NotesList },
  { path: "/note/:id", element: Body },
  { path: "/settings/:setting", element: SettingsPage },
  { path: "*", element: NotFound },
];

export const desktopRoutes = [
  { path: "/", element: Body },
  { path: "/archive", element: Body },
  { path: "/note/:id", element: Body },
  { path: "/create", element: Body },
  { path: "/settings", element: SettingsPage },
  { path: "/settings/:setting", element: SettingsPage },
  { path: "*", element: NotFound },
];
