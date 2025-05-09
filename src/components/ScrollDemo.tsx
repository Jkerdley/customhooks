import { useWindowScroll } from "../hooks/useWindowScroll";

export function ScrollDemo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <p className="coordinates">
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button className="coordinates" onClick={() => scrollTo({ y: 0 })}>
        Scroll to top
      </button>
    </div>
  );
}
