import { useEffect, useRef, useState } from "react";

interface UseHover {
  hovered: boolean;
  ref: React.RefObject<HTMLDivElement | null>;
}

export const useHover = (): UseHover => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const fiberNode = ref.current;
    if (!fiberNode) return;

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    fiberNode.addEventListener("mouseenter", handleMouseEnter);
    fiberNode.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      fiberNode.removeEventListener("mouseenter", handleMouseEnter);
      fiberNode.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { hovered, ref };
};
