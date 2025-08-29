import NotesList from "../components/NotesList";
import CreateNoteForm from "../components/CreateNoteForm";
import TagsList from "../components/TagsList";
import NoteBody from "../components/NoteBody";
import SettingsPage from "../components/SettingsPage";

export const mobileRoutes = [
  { path: "/", element: NotesList },
  { path: "/create", element: CreateNoteForm },
  { path: "/search", element: NotesList },
  { path: "/archive", element: NotesList },
  { path: "/tags", element: TagsList },
  { path: "/tags/:tag", element: NotesList },
  { path: "/settings", element: NotesList },
  { path: "/note/:id", element: CreateNoteForm },
  { path: "/settings/:setting", element: SettingsPage },
];

export const desktopRoutes = [
  { path: "/", element: NoteBody },
  { path: "/note/:id", element: CreateNoteForm },
  { path: "/create", element: CreateNoteForm },
  { path: "/settings", element: SettingsPage },
  { path: "/settings/:setting", element: SettingsPage },
];
