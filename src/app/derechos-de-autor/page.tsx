import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Derechos de Autor | LetrasBonitas",
  description:
    "Información sobre derechos de autor y propiedad intelectual en LetrasBonitas. Uso del texto generado, licencias de marca y protección de código.",
  alternates: {
    canonical: "/derechos-de-autor/",
  },
  openGraph: {
    title: "Derechos de Autor | LetrasBonitas",
    description:
      "Aviso sobre propiedad intelectual, licencias y uso de contenido en LetrasBonitas.",
    locale: "es",
    type: "website",
    url: "/derechos-de-autor/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DerechosDeAutorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://letrasbonits.com/#website",
        url: "https://letrasbonits.com/",
        name: "LetrasBonitas",
        inLanguage: "es",
      },
      {
        "@type": "WebPage",
        "@id": "https://letrasbonits.com/derechos-de-autor/#webpage",
        url: "https://letrasbonits.com/derechos-de-autor/",
        name: "Derechos de Autor | LetrasBonitas",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/derechos-de-autor/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://letrasbonits.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Derechos de Autor",
            item: "https://letrasbonits.com/derechos-de-autor/",
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
              { label: "Derechos de Autor" },
            ]}
          />
          <div className="hero-saas__badge">
            <span className="hero-saas__badge-dot" />
            <span className="hero-saas__badge-text">PROPIEDAD INTELECTUAL</span>
          </div>
          <h1 className="hero-saas__title">
            Derechos de <span className="gradient-text-pink">Autor</span>
          </h1>
          <p className="hero-saas__description">
            Política de propiedad intelectual de LetrasBonitas respecto al código del sitio, diseño de interfaz y la condición de libre uso de los caracteres Unicode generados.
          </p>
        </div>
      </section>

      <article className="content-article" style={{ marginTop: "2rem" }}>
        <section className="article-section">
          <h2>1. Propiedad del sitio web y marca</h2>
          <p>
            El diseño visual de la interfaz, el logotipo oficial, la estructura de código fuente, hojas de estilo, componentes interactivos y textos explicativos originales publicados en <strong>LetrasBonitas</strong> están protegidos por las leyes internacionales de derechos de autor y propiedad intelectual.
          </p>

          <h2>2. Condición del texto generado (Libre uso)</h2>
          <p>
            Los resultados de texto generados por nuestras herramientas utilizan caracteres del estándar universal **Unicode**.
          </p>
          <p>
            <strong>LetrasBonitas no reclama ningún derecho de propiedad ni copyright sobre el texto procesado por los usuarios.</strong> Puedes copiar, compartir, pegar y utilizar los resultados generados en tus proyectos personales, comerciales o en redes sociales con total libertad y sin necesidad de atribución.
          </p>

          <h2>3. Estándar Unicode de dominio público</h2>
          <p>
            Los puntos de código y conjuntos de caracteres de los alfabetos matemáticos Unicode pertenecen al estándar abierto definido por el Consorcio Unicode.
          </p>

          <h2>4. Uso no autorizado de la plataforma</h2>
          <p>Queda prohibida la reproducción total o parcial del sitio web que implique:</p>
          <ul>
            <li>Copia no autorizada del diseño de la interfaz o identidad visual de la marca LetrasBonitas.</li>
            <li>Reutilización no autorizada del texto explicativo original o contenido didáctico de nuestras guías.</li>
            <li>Extracción masiva automatizada de scripts o código propietario mediante técnicas de raspado de datos (scraping).</li>
          </ul>

          <h2>5. Reportar una posible infracción</h2>
          <p>
            Respetamos plenamente los derechos de propiedad intelectual de terceros. Si consideras de buena fe que algún elemento presente en LetrasBonitas vulnera tus derechos de autor, por favor ponte en contacto con nosotros para una pronta revisión y resolución.
          </p>

          <h2>6. Contacto</h2>
          <p>
            Para consultas sobre licencias o derechos de autor, escríbenos a través de nuestra página de <Link href="/contacto/">Contacto</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}

