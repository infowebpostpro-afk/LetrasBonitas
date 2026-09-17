import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Información Publicitaria | LetrasBonitas",
  description:
    "Información transparente sobre la publicidad en LetrasBonitas, el programa Google AdSense, anuncios de terceros y nuestra política de no interferencia con la usabilidad de las herramientas.",
  alternates: {
    canonical: "/publicidad/",
  },
  openGraph: {
    title: "Información Publicitaria | LetrasBonitas",
    description:
      "Transparencia publicitaria, programa Google AdSense y políticas de monetización en LetrasBonitas.",
    locale: "es",
    type: "website",
    url: "/publicidad/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PublicidadPage() {
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
        "@id": "https://letrasbonits.com/publicidad/#webpage",
        url: "https://letrasbonits.com/publicidad/",
        name: "Información Publicitaria | LetrasBonitas",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/publicidad/#breadcrumb",
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
            name: "Información Publicitaria",
            item: "https://letrasbonits.com/publicidad/",
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
              { label: "Información Publicitaria" },
            ]}
          />
          <div className="hero-saas__badge">
            <span className="hero-saas__badge-dot" />
            <span className="hero-saas__badge-text">MONETIZACIÓN RESPONSABLE</span>
          </div>
          <h1 className="hero-saas__title">
            Información <span className="gradient-text-cyan">Publicitaria</span>
          </h1>
          <p className="hero-saas__description">
            Transparencia sobre la financiación de LetrasBonitas mediante publicidad digital respetuosa y libre de molestias para el usuario.
          </p>
        </div>
      </section>

      <article className="content-article" style={{ marginTop: "2rem" }}>
        <section className="article-section">
          <h2>1. Financiación del sitio web</h2>
          <p>
            En <strong>LetrasBonitas</strong> ofrecemos herramientas gratuitas y abiertas para todos los usuarios. Para financiar los costes de infraestructura de servidores, desarrollo continuo y mantenimiento de rendimiento, mostramos anuncios publicitarios en determinadas áreas del sitio.
          </p>

          <h2>2. Programa Google AdSense</h2>
          <p>
            El canal principal de monetización es <strong>Google AdSense</strong>. Google gestiona la subasta y distribución de anuncios de forma automatizada mediante redes de anunciantes verificados.
          </p>

          <h2>3. Filosofía de diseño: La experiencia del usuario es lo primero</h2>
          <p>
            Nos adherimos a estándares estrictos respecto al emplazamiento de anuncios para asegurar que la publicidad jamás interfiera con la usabilidad de las herramientas:
          </p>
          <ul>
            <li><strong>Separación clara:</strong> Los espacios publicitarios están etiquetados de forma transparente y separados visualmente de los paneles de transformación tipográfica.</li>
            <li><strong>No a los clics accidentales:</strong> Jamás ubicamos anuncios pegados a los botones de copiar, casillas de texto o menús de navegación.</li>
            <li><strong>No a la publicidad engañosa:</strong> No utilizamos banners que simulen ser botones del sistema o avisos falsos de descarga.</li>
            <li><strong>Sin interrupción de uso:</strong> Las herramientas interactivas permanecen siempre accesibles en la parte superior para ser utilizadas de inmediato.</li>
          </ul>

          <h2>4. Ausencia de patrocinio directo</h2>
          <p>
            La presencia de un anuncio publicitario en nuestro sitio web no implica que LetrasBonitas recomiende, patrocine o avale automáticamente el producto o servicio comercial mostrado por la red publicitaria.
          </p>

          <h2>5. Gestión de preferencias y personalización</h2>
          <p>
            Los anuncios pueden adaptarse a los intereses de los usuarios según su navegación previa. Para consultar cómo gestionar tus opciones de privacidad y desactivar los anuncios personalizados de Google, visita nuestra <Link href="/politica-de-cookies/">Política de Cookies</Link> o la <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Configuración de Anuncios de Google</a>.
          </p>

          <h2>6. Contacto sobre publicidad</h2>
          <p>
            Si deseas hacernos llegar algún comentario referente a la experiencia con anuncios en la plataforma, puedes escribirnos desde nuestra página de <Link href="/contacto/">Contacto</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}

