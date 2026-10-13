import { useRef, useEffect } from "react";

/**
 * useMagnetic Hook
 * Smooth magnetic attraction effect for interactive buttons/cards.
 * Disabled on touch/mobile devices where fine hover is not supported.
 */
export function useMagnetic(strength = 0.25) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Desativação estrita em dispositivos sem mouse fino (touch)
    const isTouch = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - elementCenterX) * strength;
      const deltaY = (e.clientY - elementCenterY) * strength;

      element.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
      element.style.transition = "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)";
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate3d(0, 0, 0)";
      element.style.transition = "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
}
