import { useState, useRef, type ReactNode } from "react";
import { ToastContext, type ToastType } from "./toastContext";

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [toastType, setToastType] = useState<ToastType>(undefined);

  const timeoutRef = useRef<number | null>(null);

  const showToast = (
    message: string,
    link?: string,
    toastType?: ToastType,
    duration: number = 3000,
  ) => {
    setMessage(message);
    setLink(link ?? "");
    setToastType(toastType);
    setIsVisible(true);
    console.log("başarılı işlem");

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, duration);
  };

  const hideToast = () => {
    setIsVisible(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <ToastContext.Provider
      value={{ isVisible, message, link, toastType, showToast, hideToast }}
    >
      {children}
    </ToastContext.Provider>
  );
};
