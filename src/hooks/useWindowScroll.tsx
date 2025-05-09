import { useState, useEffect, useCallback } from "react";
import { useWindowEvent } from "./useWindowEvent";

interface Coordinates {
  x: number;
  y: number;
}

type WindowScroll = [Coordinates, (position: Partial<Coordinates>) => void];

export const useWindowScroll = (): WindowScroll => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setX(window.scrollX);
      setY(window.scrollY);
    }
  }, []);

  useWindowEvent("scroll", () => {
    setX(window.scrollX);
    setY(window.scrollY);
  });

  const scrollTo = useCallback((position: Partial<Coordinates>) => {
    if (typeof window === "undefined") return;

    window.scrollTo({
      left: position.x ?? window.scrollX,
      top: position.y ?? window.scrollY,
    });
  }, []);

  return [{ x, y }, scrollTo];
};
