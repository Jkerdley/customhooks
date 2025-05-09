import { useEffect } from "react";

type WindowEvent = (type: string, listener: () => void) => void;

export const useWindowEvent: WindowEvent = (type, listener) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(type, listener);
      return () => window.removeEventListener(type, listener);
    }
  }, [type, listener]);
};
