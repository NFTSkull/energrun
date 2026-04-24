"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
};

/**
 * Revelado por ficha al entrar en viewport (catálogo Generac): añade
 * `gen-article-reveal--in` para animar hijos `.gen-reveal-stagger` y
 * `.gen-reveal-media`. Una sola activación por tarjeta.
 */
export function GeneratorArticleReveal(props: Props) {
  const { children, id, className = "" } = props;
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = window.setTimeout(() => setActive(true), 0);
      return () => window.clearTimeout(t);
    }

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setActive(true);
        obs.unobserve(e.target);
      },
      { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const merged = [
    "gen-article-reveal",
    active ? "gen-article-reveal--in" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article ref={ref} id={id} className={merged}>
      {children}
    </article>
  );
}
