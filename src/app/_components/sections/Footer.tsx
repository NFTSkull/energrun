const NAV = [
  { label: "Inicio", href: "/" },
  { label: "Paneles solares", href: "/paneles-solares" },
  { label: "Generadores", href: "/generadores" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/90 bg-white py-12 text-sm text-slate-600">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold tracking-tight text-[#1E4D8C]">
            ENERGRÜN
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            Soluciones energéticas para casas, negocios e industria ligera:
            paneles solares, generadores Generac y sistemas integrados.
          </p>
        </div>

        <div className="text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Mapa del sitio
          </p>
          <ul className="mt-3 grid gap-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-slate-700 transition hover:text-[#1E4D8C]"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Cobertura
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Monterrey, N.L. y área metropolitana
          </p>
          <p className="mt-2 text-xs leading-6 text-slate-500">
            Distribución Generac · Paneles solares · Sistemas integrados
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:px-6 sm:text-left lg:px-8">
        <p>
          © {new Date().getFullYear()} ENERGRÜN. Todos los derechos reservados.
        </p>
        <p>Solicita evaluación en la sección de contacto.</p>
      </div>
    </footer>
  );
}
