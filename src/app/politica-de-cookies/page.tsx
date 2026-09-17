import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Cookies | LetrasBonitas",
  description:
    "Política de Cookies de LetrasBonitas. Información detallada sobre el uso de cookies necesarias, análisis, publicidad de terceros y almacenamiento local.",
  alternates: {
    canonical: "/politica-de-cookies/",
  },
  openGraph: {
    title: "Política de Cookies | LetrasBonitas",
    description:
      "Información sobre cookies y tecnologías de almacenamiento en LetrasBonitas.",
    locale: "es",
    type: "website",
    url: "/politica-de-cookies/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaDeCookiesPage() {
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
        "@id": "https://letrasbonits.com/politica-de-cookies/#webpage",
        url: "https://letrasbonits.com/politica-de-cookies/",
        name: "Política de Cookies | LetrasBonitas",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/politica-de-cookies/#breadcrumb",
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
            name: "Política de Cookies",
            item: "https://letrasbonits.com/politica-de-cookies/",
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
              { label: "Política de Cookies" },
            ]}
          />
          <div className="hero-saas__badge">
            <span className="hero-saas__badge-dot" />
            <span className="hero-saas__badge-text">TRANSPARENCIA TECNOLÓGICA</span>
          </div>
          <h1 className="hero-saas__title">
            Política de <span className="gradient-text-purple">Cookies</span>
          </h1>
          <p className="hero-saas__description">
            Explicación detallada sobre qué son las cookies, cómo las utilizamos en LetrasBonitas y las herramientas para configurar tus preferencias de navegación.
          </p>
        </div>
      </section>

      <article className="content-article" style={{ marginTop: "2rem" }}>
        <section className="article-section">
          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (ordenador, teléfono móvil o tableta) cuando los visitas. Permiten que la plataforma recuerde tus acciones o preferencias con el tiempo.
          </p>

          <h2>2. ¿Cómo utiliza LetrasBonitas las cookies?</h2>
          <p>
            En LetrasBonitas utilizamos cookies técnicas indispensables, tecnologías de almacenamiento local en el navegador y servicios publicitarios de terceros para garantizar la mejor experiencia posible.
          </p>

          <h2>3. Cookies necesarias</h2>
          <p>
            Son aquellas imprescindibles para que el sitio funcione de forma adecuada. Incluyen la gestión del tráfico, la prevención de ataques automatizados y el mantenimiento de la seguridad de la sesión.
          </p>

          <h2>4. Cookies de preferencias</h2>
          <p>
            Permiten recordar configuraciones del usuario como el idioma o el consentimiento otorgado en los banners de aviso de privacidad.
          </p>

          <h2>5. Cookies de análisis</h2>
          <p>
            Utilizamos servicios de medición anónima para conocer cuántos usuarios nos visitan, qué páginas son las más populares y cómo podemos optimizar la velocidad de respuesta de las herramientas.
          </p>

          <h2>6. Cookies publicitarias</h2>
          <p>
            Son cookies colocadas por socios publicitarios como <strong>Google AdSense</strong>. Permiten mostrar anuncios más relevantes y limitar la frecuencia con la que ves un mismo anuncio.
          </p>

          <h2>7. Cookies de Google AdSense</h2>
          <p>
            Google utiliza cookies para publicar anuncios en nuestro sitio. Las cookies de publicidad de Google permiten mostrar anuncios en función de las visitas anteriores de los usuarios a este sitio o a otros sitios de Internet.
          </p>

          <h2>8. Cookies de terceros</h2>
          <p>
            En algunas secciones pueden intervenir proveedores de servicios externos (tales como servidores CDN o scripts de medición de rendimiento) que pueden establecer sus propias cookies estrictamente necesarias.
          </p>

          <h2>9. Almacenamiento local (localStorage)</h2>
          <p>
            Nuestras herramientas interactivas emplean la tecnología <code>localStorage</code> del navegador en lugar de enviar datos a servidores. Esto nos permite guardar tus fuentes favoritas o tus elementos copiados de manera 100% privada dentro de tu propio equipo.
          </p>

          <h2>10. Cómo gestionar y desactivar las cookies</h2>
          <p>
            Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador que utilices:
          </p>
          <ul>
            <li><strong>Google Chrome:</strong> Configuración &rarr; Privacidad y seguridad &rarr; Cookies.</li>
            <li><strong>Mozilla Firefox:</strong> Opciones &rarr; Privacidad y seguridad.</li>
            <li><strong>Safari:</strong> Preferencias &rarr; Privacidad.</li>
            <li><strong>Microsoft Edge:</strong> Configuración &rarr; Permisos del sitio.</li>
          </ul>

          <h2>11. Consentimiento de cookies</h2>
          <p>
            Al navegar por LetrasBonitas por primera vez, puedes aceptar o gestionar tus preferencias de publicidad y cookies mediante nuestra plataforma de gestión de consentimiento integrada.
          </p>

          <h2>12. Cambios en esta política</h2>
          <p>
            Podemos actualizar nuestra Política de Cookies periódicamente para reflejar cambios técnicos o legales.
          </p>

          <h2>13. Contacto</h2>
          <p>
            Si deseas realizar alguna consulta sobre el uso de cookies en nuestro sitio web, visítanos en la página de <Link href="/contacto/">Contacto</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}

