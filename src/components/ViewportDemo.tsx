import { useViewportSize } from "../hooks/useViewportSize";

export function ViewportDemo() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
