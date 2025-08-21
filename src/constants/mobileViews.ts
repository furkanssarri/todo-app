import {
  IconHome,
  IconSearch,
  IconArchive,
  IconTag,
  IconSettings,
} from "../components/icons";

export const views = [
  { id: 1, view: "/", icon: IconHome, name: "Home" },
  { id: 2, view: "/search", icon: IconSearch, name: "Search" },
  { id: 3, view: "/archive", icon: IconArchive, name: "Archive" },
  { id: 4, view: "/tag", icon: IconTag, name: "Tags" },
  { id: 5, view: "/settings", icon: IconSettings, name: "Settings" },
  { id: 6, view: "/noteBody", icon: IconHome, name: "NoteBody" },
] as const;

export type View = (typeof views)[number];
