import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ENERGRÜN | Soluciones energéticas: solar, respaldo y financiamiento",
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
    title: "ENERGRÜN | Paneles solares y generadores de respaldo",
    description:
      "Venta e instalación de fotovoltaico y de sistemas con generadores Generac, por separado o coordinados. Monterrey y área metropolitana.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo1.png",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
