import { useMousePosition, useWindowSize } from "../hooks";

export default function Cursor() {
  const { pos, hovered } = useMousePosition();
  const { width } = useWindowSize();
  if (width <= 768) return null;

  return (
    <>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: pos.y, left: pos.x,
          width: 10, height: 10,
          borderRadius: "50%",
          background: "#C8F135",
          pointerEvents: "none",
          zIndex: 9999,
          transform: `translate(-50%, -50%) scale(${hovered ? 0 : 1})`,
          transition: "transform 0.2s ease",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: pos.y, left: pos.x,
          width: 36, height: 36,
          borderRadius: "50%",
          border: "1.5px solid #C8F135",
          pointerEvents: "none",
          zIndex: 9998,
          transform: `translate(-50%, -50%) scale(${hovered ? 1.8 : 1})`,
          opacity: hovered ? 0.4 : 0.65,
          transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}