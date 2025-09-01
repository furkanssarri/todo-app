import { createContext } from "react";

export type ToastType = "success" | "error" | "info" | "warning" | undefined;

interface ToastContextType {
  isVisible: boolean;
  message: string;
  link?: string;
  toastType?: string;
  showToast: (
    message: string,
    link?: string,
    toastType?: ToastType,
    duration?: number,
  ) => void;
  hideToast: () => void;
}

// Default values
export const ToastContext = createContext<ToastContextType>({
  isVisible: false,
  message: "",
  link: "",
  toastType: undefined,
  showToast: () => {},
  hideToast: () => {},
});
