"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Paneles solares", href: "/paneles-solares" },
  { label: "Generadores", href: "/generadores" },
];

export function Header(props: { contactHref?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const contactHref = props.contactHref ?? "#contacto";
  const linkHover = scrolled ? "hover:text-[#1E4D8C]" : "hover:text-white";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const { style } = document.body;
    const prev = style.overflow;
    style.overflow = "hidden";
    return () => {
      style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-300 ease-out",
        scrolled || open
          ? "border-b border-slate-200/90 bg-white/95 shadow-sm backdrop-blur-sm"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3.5 sm:gap-5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo1.png"
            alt="ENERGRÜN"
            width={236}
            height={86}
            priority
            className={[
              "h-[3.4rem] w-auto object-contain sm:h-16",
              scrolled || open ? "" : "drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]",
            ].join(" ")}
          />
          <div className="hidden min-w-0 leading-tight sm:block">
            <div
              className={[
                "text-lg font-semibold tracking-tight",
                scrolled || open ? "text-[#1E4D8C]" : "text-white",
              ].join(" ")}
            >
              ENERGRÜN
            </div>
            <div
              className={[
                "text-[15px]",
                scrolled || open ? "text-slate-500" : "text-white/70",
              ].join(" ")}
            >
              Soluciones energéticas
            </div>
          </div>
        </Link>

        <nav
          className={[
            "hidden items-center gap-6 text-sm font-medium xl:flex",
            scrolled ? "text-slate-600" : "text-white/90",
          ].join(" ")}
        >
          {NAV_ITEMS.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className={[
                "transition duration-200",
                linkHover,
                pathname === it.href ? "text-[#6CC04A]" : "",
              ].join(" ")}
            >
              {it.label}
            </Link>
          ))}
          <a href={contactHref} className={["transition duration-200", linkHover].join(" ")}>
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="hidden shrink-0 items-center justify-center rounded-lg bg-[#1E4D8C] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#17407a] sm:inline-flex sm:text-sm"
            href={contactHref}
          >
            Contacto
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={[
              "xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border",
              scrolled || open
                ? "border-slate-200 text-slate-700 hover:bg-slate-100"
                : "border-white/30 text-white hover:bg-white/10",
            ].join(" ")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-5 w-5"
              aria-hidden
            >
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú mobile/tablet */}
      {open ? (
        <div className="border-t border-slate-200/90 bg-white/98 backdrop-blur-sm xl:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {NAV_ITEMS.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#1E4D8C]"
              >
                {it.label}
              </Link>
            ))}
            <a
              href={contactHref}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-[#1E4D8C] px-5 text-sm font-semibold text-white transition hover:bg-[#17407a]"
            >
              Contacto
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
