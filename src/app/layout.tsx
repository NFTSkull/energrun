import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "ENERGRUN | Soluciones energéticas: solar, respaldo y financiamiento",
  description:
    "Paneles solares (ahorro en kWh), generadores de respaldo Generac (continuidad) y, si aplica, vía de pago vía crédito Mejoravit. Ingeniería, instalación y puesta en servicio en Monterrey y área metropolitana.",
  keywords: [
    "paneles solares Monterrey",
    "generación fotovoltaica",
    "generadores Generac",
    "respaldo automático",
    "integración solar generador",
    "Mejoravit",
  ],
  openGraph: {
    title: "ENERGRUN | Paneles solares y generadores de respaldo",
    description:
      "Venta e instalación de fotovoltaico y de sistemas con generadores Generac, por separado o coordinados. Monterrey y área metropolitana.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-svh min-h-0 w-full flex-col overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
