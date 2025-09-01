import { createContext } from "react";

export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastItem {
  id: string;
  message: string;
  link?: string;
  toastType?: ToastType;
}

interface ToastContextType {
  toasts: ToastItem[];
  showToast: (
    message: string,
    link?: string,
    toastType?: ToastType,
    duration?: number,
  ) => void;
  hideToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextType>({
  toasts: [],
  showToast: () => {},
  hideToast: () => {},
});
