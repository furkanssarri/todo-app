import { useState, type ReactNode } from "react";
import { ToastContext, type ToastType, type ToastItem } from "./toastContext";

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (
    message: string,
    link?: string,
    toastType?: ToastType,
    duration: number = 3000,
  ) => {
    const id = Date.now().toString();

    const newToast: ToastItem = { id, message, link, toastType };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  };

  const hideToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};
