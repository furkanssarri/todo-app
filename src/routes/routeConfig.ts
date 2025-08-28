import NotesList from "../components/NotesList";
import CreateNoteForm from "../components/CreateNoteForm";
import TagsList from "../components/TagsList";
import SettingsPage from "../components/SettingsPage";
import NoteBody from "../components/NoteBody";

export const mobileRoutes = [
  { path: "/", element: NotesList },
  { path: "/create", element: CreateNoteForm },
  { path: "/search", element: NotesList },
  { path: "/archive", element: NotesList },
  { path: "/tags", element: TagsList },
  { path: "/tags/:tag", element: NotesList },
  { path: "/settings", element: SettingsPage },
  { path: "/note/:id", element: CreateNoteForm },
];

export const desktopRoutes = [
  { path: "/", element: NoteBody },
  { path: "/note/:id", element: CreateNoteForm },
  { path: "/create", element: CreateNoteForm },
  { path: "/settings", element: SettingsPage },
];
