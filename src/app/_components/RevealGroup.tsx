"use client";

import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Ctx = { visible: boolean };

const RevealContext = createContext<Ctx | null>(null);

export function useRevealVisible(): Ctx | null {
  return useContext(RevealContext);
}

const AS_OPTIONS = {
  section: "section",
  div: "div",
  main: "main",
  article: "article",
} as const;

type As = keyof typeof AS_OPTIONS;

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Contenedor del observador. Por defecto `section`. */
  as?: As;
};

/**
 * Activa un reveal escalonado para descendientes con `.reveal-t` / `.reveal-m`
 * y `data-stagger` (0…10, pasos de ~100 ms). Una sola activación vía
 * IntersectionObserver (`threshold: 0`), respeta `prefers-reduced-motion`.
 *
 * `StaggeredFade` anidado puede sincronizarse: si este grupo está en contexto
 * (visible), reutiliza la misma señal en lugar de un segundo observer.
 */
export function RevealGroup(props: Props) {
  const { as: asProp = "section", children, className = "", id } = props;
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(t);
    }

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setVisible(true);
        obs.unobserve(e.target);
      },
      /**
       * `threshold: 0.2` falla en secciones muy altas: el rectángulo
       * completo nunca alcanza 20% en viewport, así que el copy queda
       * invisible. Usamos 0: activar en cuanto entre cualquier fracción.
       */
      { root: null, rootMargin: "0px 0px -5% 0px", threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const As = AS_OPTIONS[asProp];
  const mergedClass = [
    "reveal-root",
    visible ? "reveal-root--visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const ctxValue = useMemo(() => ({ visible }), [visible]);

  return (
    <RevealContext.Provider value={ctxValue}>
      {createElement(
        As,
        { ref, id, className: mergedClass },
        children,
      )}
    </RevealContext.Provider>
  );
}
