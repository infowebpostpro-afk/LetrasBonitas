import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/layout/SiteChrome";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Letras Bonitas — Generador de estilos Unicode",
  description:
    "Convierte tu texto en letras bonitas al instante. Más de 300 estilos Unicode para copiar y pegar.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo.webp", type: "image/webp" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Letras Bonitas",
    description:
      "Generador de letras bonitas con 300+ estilos Unicode. Escribe, copia y pega.",
    locale: "es",
    type: "website",
    url: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
