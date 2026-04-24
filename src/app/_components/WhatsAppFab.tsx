"use client";

import {
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  WHATSAPP_DEFAULT_E164,
} from "@/lib/whatsapp";

const DEFAULT_WHATSAPP =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? WHATSAPP_DEFAULT_E164;

export function WhatsAppFab() {
  const href = buildWhatsAppUrl({
    phoneNumber: DEFAULT_WHATSAPP,
    message: buildWhatsAppMessage(),
  });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacto por WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex min-h-12 items-center gap-3 rounded-full bg-[#6CC04A] px-5 py-2.5 text-sm font-semibold leading-none text-white shadow-lg shadow-[#6CC04A]/25 ring-1 ring-[#6CC04A]/25 transition hover:bg-[#3BAA3F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]/60"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center self-center rounded-full bg-white/20">
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="block h-5 w-5 shrink-0"
          aria-hidden="true"
        >
          <path d="M19.11 17.53c-.3-.15-1.77-.87-2.05-.97-.28-.1-.49-.15-.69.15-.2.3-.79.97-.97 1.17-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.36.46-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.69-1.66-.95-2.28-.25-.6-.5-.52-.69-.53l-.59-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.89 1.23 3.09.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.08-.13-.28-.2-.58-.35M16.02 4C9.38 4 4 9.38 4 16.02c0 2.11.55 4.17 1.6 6l-1.7 6.2 6.35-1.66c1.77.97 3.76 1.48 5.77 1.48 6.64 0 12.02-5.38 12.02-12.02C28.04 9.38 22.66 4 16.02 4m0 21.86c-1.82 0-3.6-.49-5.16-1.42l-.37-.22-3.77.99 1.01-3.67-.24-.38a9.8 9.8 0 0 1-1.5-5.14c0-5.43 4.41-9.84 9.84-9.84 5.43 0 9.84 4.41 9.84 9.84 0 5.43-4.41 9.84-9.84 9.84" />
        </svg>
      </span>
      <span className="flex h-9 min-w-0 items-center self-center">
        <span className="hidden sm:inline">Contacto</span>
        <span className="sm:hidden">WhatsApp</span>
      </span>
    </a>
  );
}

