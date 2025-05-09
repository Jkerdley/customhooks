import { useEffect, useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

interface UseViewportSize {
  height: number;
  width: number;
}

export const useViewportSize = (): UseViewportSize => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, []);

  useWindowEvent("resize", () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  return { height, width };
};
