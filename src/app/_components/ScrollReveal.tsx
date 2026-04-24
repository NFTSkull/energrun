"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Retraso escala visual (stagger) en ms, solo aplica si hay animación. */
  delayMs?: number;
};

export function ScrollReveal(props: ScrollRevealProps) {
  const { children, className = "", delayMs = 0 } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = window.setTimeout(() => setActive(true), 0);
      return () => window.clearTimeout(t);
    }

    let timer: number | undefined;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        if (delayMs > 0) {
          timer = window.setTimeout(() => {
            setActive(true);
            obs.unobserve(e.target);
          }, delayMs);
        } else {
          setActive(true);
          obs.unobserve(e.target);
        }
      },
      { root: null, rootMargin: "0px 0px -5% 0px", threshold: 0 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (timer) window.clearTimeout(timer);
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={[
        "transition-[opacity,transform] duration-700 ease-out",
        active
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
