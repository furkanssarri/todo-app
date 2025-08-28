import {
  IconHome,
  IconSearch,
  IconArchive,
  IconTag,
  IconSettings,
  IconArrowLeft,
} from "../components/icons";

export const views = [
  { id: 1, view: "/", icon: IconHome, name: "Home" },
  { id: 2, view: "/search", icon: IconSearch, name: "Search" },
  { id: 3, view: "/archive", icon: IconArchive, name: "Archive" },
  { id: 4, view: "/tags", icon: IconTag, name: "Tags" },
  { id: 5, view: "/settings", icon: IconSettings, name: "Settings" },
  { id: 6, view: "/noteBody", icon: IconHome, name: "NoteBody" },
  { id: 7, view: "/create", icon: IconHome, name: "Create Note" },
] as const;

export type View = (typeof views)[number];

export const btns = [
  { id: 1, view: "back", name: "Go Back", icon: IconArrowLeft },
  { id: 2, view: "delete", name: "Delete", icon: "delete" },
  { id: 3, view: "archive", name: "Archive", icon: "archive" },
  { id: 4, view: "cancel", name: "Cancel", icon: null },
  { id: 5, view: "save", name: "Save Note", icon: null },
] as const;

export type BtnView = Btn["view"];

export type Btn = (typeof btns)[number];
