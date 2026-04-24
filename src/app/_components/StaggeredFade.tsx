"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRevealVisible } from "@/app/_components/RevealGroup";

type Props = {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  threshold?: number;
  /** Celdas con imagen: `scale(0.98) → 1` además del fade. */
  withMedia?: boolean;
  /**
   * Si el padre es `RevealGroup` y el copy va antes (`.reveal-t` con
   * data-stagger), posponer la activación del stagger de las cards.
   */
  activateAfterMs?: number;
};

/**
 * Hijos con clase `stagger-fade__item`: opacidad + leve translateY con retraso en
 * cascada. Dentro de `RevealGroup`, reutiliza la señal del padre (un solo
 * observer en la sección). `prefers-reduced-motion` vía CSS.
 */
export function StaggeredFade(props: Props) {
  const {
    children,
    className = "",
    rootMargin = "0px 0px -5% 0px",
    threshold = 0.1,
    withMedia = false,
    activateAfterMs = 0,
  } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const reveal = useRevealVisible();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = window.setTimeout(() => setActive(true), 0);
      return () => window.clearTimeout(t);
    }

    if (reveal) {
      if (reveal.visible) {
        const d = activateAfterMs > 0 ? activateAfterMs : 0;
        const t = window.setTimeout(() => setActive(true), d);
        return () => window.clearTimeout(t);
      }
      return;
    }

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setActive(true);
        obs.unobserve(e.target);
      },
      { root: null, rootMargin, threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reveal, reveal?.visible, rootMargin, threshold, activateAfterMs]);

  return (
    <div
      ref={ref}
      className={[
        "stagger-fade",
        withMedia ? "stagger-fade--with-media" : "",
        active ? "stagger-fade--visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
