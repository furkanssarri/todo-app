import {
  IconHome,
  IconSearch,
  IconArchive,
  IconTag,
  IconSettings,
  IconArrowLeft,
  IconSun,
  IconFont,
  IconLock,
  IconLogout,
} from "../components/icons";

export const views = [
  { id: 1, path: "/", icon: IconHome, name: "Home" },
  { id: 2, path: "/search", icon: IconSearch, name: "Search" },
  { id: 3, path: "/archive", icon: IconArchive, name: "Archive" },
  { id: 4, path: "/tags", icon: IconTag, name: "Tags" },
  { id: 5, path: "/settings", icon: IconSettings, name: "Settings" },
  { id: 6, path: "/note", icon: IconHome, name: "Note" },
  { id: 7, path: "/create", icon: IconHome, name: "Create Note" },
] as const;

export type View = (typeof views)[number];

export const btns = [
  { id: 1, view: "back", name: "Go Back", icon: IconArrowLeft },
  { id: 2, view: "delete", name: "Delete", icon: "delete" },
  { id: 3, view: "archive", name: "Archive", icon: "archive" },
  { id: 4, view: "restore", name: "Restore", icon: "refresh" },
  { id: 5, view: "cancel", name: "Cancel", icon: null },
  { id: 6, view: "save", name: "Save Note", icon: null },
] as const;

export type BtnView = Btn["view"];

export type Btn = (typeof btns)[number];

export const settingsViews = [
  { id: 1, path: "color-theme", icon: IconSun, name: "Color Theme" },
  { id: 2, path: "font-theme", icon: IconFont, name: "Font Theme" },
  { id: 3, path: "change-password", icon: IconLock, name: "Change Password" },
  { id: 4, path: "logout", icon: IconLogout, name: "Logout" },
] as const;

export type SettingsView = (typeof settingsViews)[number];
