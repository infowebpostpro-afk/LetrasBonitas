import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Descargo de Responsabilidad | LetrasBonitas",
  description:
    "Descargo de Responsabilidad de LetrasBonitas. Información clara sobre la representación Unicode, compatibilidad en dispositivos y ausencia de afiliación con marcas externas.",
  alternates: {
    canonical: "/descargo-de-responsabilidad/",
  },
  openGraph: {
    title: "Descargo de Responsabilidad | LetrasBonitas",
    description:
      "Aviso legal y descargo de responsabilidad sobre herramientas y compatibilidad en LetrasBonitas.",
    locale: "es",
    type: "website",
    url: "/descargo-de-responsabilidad/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DescargoDeResponsabilidadPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://letrasbonitas.com/#website",
        url: "https://letrasbonitas.com/",
        name: "LetrasBonitas",
        inLanguage: "es",
      },
      {
        "@type": "WebPage",
        "@id": "https://letrasbonitas.com/descargo-de-responsabilidad/#webpage",
        url: "https://letrasbonitas.com/descargo-de-responsabilidad/",
        name: "Descargo de Responsabilidad | LetrasBonitas",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonitas.com/descargo-de-responsabilidad/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://letrasbonitas.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Descargo de Responsabilidad",
            item: "https://letrasbonitas.com/descargo-de-responsabilidad/",
          },
        ],
      },
    ],
  };

  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero-saas hero-saas--compact">
        <div className="hero-saas__container">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Descargo de Responsabilidad" },
            ]}
          />
          <div className="hero-saas__badge">
            <span className="hero-saas__badge-dot" />
            <span className="hero-saas__badge-text">AVISO LEGAL</span>
          </div>
          <h1 className="hero-saas__title">
            Descargo de <span className="gradient-text-cyan">Responsabilidad</span>
          </h1>
          <p className="hero-saas__description">
            Aclaraciones importantes respecto a la compatibilidad de caracteres Unicode, representación en dispositivos y ausencia de afiliación con marcas de terceros.
          </p>
        </div>
      </section>

      <article className="content-article" style={{ marginTop: "2rem" }}>
        <section className="article-section">
          <h2>1. Información general</h2>
          <p>
            El contenido y las herramientas disponibles en <strong>LetrasBonitas</strong> se ofrecen con fines informativos, creativos y de utilidad pública.
          </p>

          <h2>2. Compatibilidad de caracteres Unicode</h2>
          <p>
            LetrasBonitas no garantiza que todos los caracteres Unicode generados por nuestras herramientas se muestren de manera idéntica en todos los dispositivos, sistemas operativos, aplicaciones o navegadores.
          </p>
          <p>
            La forma en que se visualiza un carácter Unicode depende de los glifos y tipografías instalados por el fabricante en el sistema receptor (iOS, Android, Windows, macOS, etc.).
          </p>

          <h2>3. Ausencia de afiliación comercial</h2>
          <p>
            LetrasBonitas es un sitio web independiente. Los nombres de marcas o aplicaciones mencionados en nuestras guías o herramientas (tales como Instagram, TikTok, WhatsApp, Discord, Free Fire o similares) se citan exclusivamente con carácter descriptivo para ilustrar casos de uso.
          </p>
          <p>
            <strong>LetrasBonitas no está patrocinado, afiliado, asociado ni avalado por Meta Platforms, ByteDance, WhatsApp LLC, Discord Inc., Garena u otras corporaciones mencionadas.</strong>
          </p>

          <h2>4. Uso del texto en juegos y plataformas externas</h2>
          <p>
            Cada videojuego o plataforma social establece sus propias políticas internas y filtros de caracteres aceptados en nombres de usuario. Si una plataforma rechaza un carácter Unicode determinado, ello depende de las reglas del propio servicio externo y no representa una falla de LetrasBonitas.
          </p>

          <h2>5. Precisión del contenido</h2>
          <p>
            Nos esforzamos por mantener explicaciones precisas respecto al estándar Unicode y la representación de letras en español. No obstante, el estándar tipográfico internacional puede evolucionar y no garantizamos la total ausencia de imprecisiones involuntarias.
          </p>

          <h2>6. Enlaces externos</h2>
          <p>
            Cualquier enlace hacia sitios web de terceros se incluye únicamente para comodidad del usuario. No controlamos el contenido ni la disponibilidad de dichas fuentes externas.
          </p>

          <h2>7. Contacto</h2>
          <p>
            Si deseas hacernos llegar alguna consulta referente a este aviso, puedes escribirnos a través de nuestra página de <Link href="/contacto/">Contacto</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}
