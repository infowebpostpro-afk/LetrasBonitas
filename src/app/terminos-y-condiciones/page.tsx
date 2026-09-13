import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Términos y Condiciones | LetrasBonitas",
  description:
    "Términos y Condiciones de Uso de LetrasBonitas. Normas de uso permitido, compatibilidad con caracteres Unicode, limitación de responsabilidad y derechos del servicio.",
  alternates: {
    canonical: "/terminos-y-condiciones/",
  },
  openGraph: {
    title: "Términos y Condiciones | LetrasBonitas",
    description:
      "Términos y Condiciones de Uso del sitio web LetrasBonitas.",
    locale: "es",
    type: "website",
    url: "/terminos-y-condiciones/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TerminosYCondicionesPage() {
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
        "@id": "https://letrasbonitas.com/terminos-y-condiciones/#webpage",
        url: "https://letrasbonitas.com/terminos-y-condiciones/",
        name: "Términos y Condiciones | LetrasBonitas",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonitas.com/terminos-y-condiciones/#breadcrumb",
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
            name: "Términos y Condiciones",
            item: "https://letrasbonitas.com/terminos-y-condiciones/",
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
              { label: "Términos y Condiciones" },
            ]}
          />
          <div className="hero-saas__badge">
            <span className="hero-saas__badge-dot" />
            <span className="hero-saas__badge-text">CONDICIONES DE USO</span>
          </div>
          <h1 className="hero-saas__title">
            Términos y <span className="gradient-text-pink">Condiciones</span>
          </h1>
          <p className="hero-saas__description">
            Reglas de uso del sitio web LetrasBonitas, alcance de nuestras herramientas de transformación Unicode y normas generales para usuarios.
          </p>
        </div>
      </section>

      <article className="content-article" style={{ marginTop: "2rem" }}>
        <section className="article-section">
          <h2>1. Introducción</h2>
          <p>
            Al acceder y utilizar el sitio web <strong>LetrasBonitas</strong> (<code>https://letrasbonitas.com/</code>), aceptas cumplir y quedar vinculado por los siguientes Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, te solicitamos abstenerte de utilizar el sitio.
          </p>

          <h2>2. Aceptación de los términos</h2>
          <p>
            El uso de cualquier herramienta, conversor o recurso publicado en LetrasBonitas implica la aceptación expresa e incondicional de estos Términos y Condiciones.
          </p>

          <h2>3. Descripción del sitio web</h2>
          <p>
            LetrasBonitas es una plataforma orientada a la utilidad tipográfica que ofrece conversores en tiempo real, generadores de letras cursivas, símbolos Unicode y recursos educativos en español.
          </p>

          <h2>4. Uso de nuestras herramientas</h2>
          <p>
            Nuestras herramientas son de uso gratuito y abierto para fines personales, creativos y comerciales legítimos, como la edición de perfiles en redes sociales o diseño gráfico personal.
          </p>

          <h2>5. Uso permitido</h2>
          <p>Se permite utilizar el texto transformado por LetrasBonitas en:</p>
          <ul>
            <li>Biografías, nombres de usuario y publicaciones en redes sociales (Instagram, TikTok, WhatsApp, Discord, etc.).</li>
            <li>Documentos personales, mensajes y composiciones creativas.</li>
            <li>Nombres de usuario en videojuegos y plataformas compatibles.</li>
          </ul>

          <h2>6. Usos prohibidos</h2>
          <p>Queda estrictamente prohibido utilizar LetrasBonitas para:</p>
          <ul>
            <li>Generar o distribuir contenido difamatorio, engañoso, de acoso o ilegal.</li>
            <li>Intentar saturar o interrumpir la infraestructura del servidor mediante ataques automatizados o scraping malicioso.</li>
            <li>Suplantar la identidad de personas o entidades legales.</li>
          </ul>

          <h2>7. Texto introducido por los usuarios</h2>
          <p>
            El usuario es el único responsable del texto que introduce en las herramientas. LetrasBonitas no supervisa ni almacena dicho contenido.
          </p>

          <h2>8. Resultados generados por las herramientas</h2>
          <p>
            Los resultados entregados son cadenas de caracteres Unicode procesadas dinámicamente. El usuario es libre de copiar y utilizar dichos resultados de forma libre.
          </p>

          <h2>9. Caracteres Unicode y compatibilidad</h2>
          <p>
            Los resultados generados por LetrasBonitas utilizan caracteres Unicode. La apariencia visual y compatibilidad de determinados caracteres puede variar según el dispositivo, sistema operativo, versión de aplicación o navegador utilizado. No garantizamos una compatibilidad visual idéntica en el 100% de plataformas de terceros.
          </p>

          <h2>10. Propiedad intelectual</h2>
          <p>
            El código fuente, diseño de la interfaz, marcas, gráficos y textos explicativos del sitio son propiedad de LetrasBonitas. Los caracteres Unicode en sí forman parte del estándar universal de codificación y son de dominio libre.
          </p>

          <h2>11. Enlaces a terceros</h2>
          <p>
            Nuestro sitio puede incorporar enlaces a plataformas externas. LetrasBonitas no controla ni se responsabiliza por el contenido o servicios de dichos sitios de terceros.
          </p>

          <h2>12. Disponibilidad del sitio</h2>
          <p>
            Nos esforzamos por mantener el servicio disponible las 24 horas del día. Sin embargo, no garantizamos la disponibilidad ininterrumpida debido a mantenimientos o eventuales contingencias técnicas.
          </p>

          <h2>13. Cambios en las herramientas</h2>
          <p>
            Nos reservamos el derecho de modificar, actualizar o discontinuar herramientas o estilos tipográficos en cualquier momento sin previo aviso.
          </p>

          <h2>14. Limitaciones de responsabilidad</h2>
          <p>
            LetrasBonitas no se hace responsable por inconvenientes causados por la incompatibilidad de caracteres en aplicaciones de terceros (por ejemplo, si un juego no admite un carácter Unicode determinado).
          </p>

          <h2>15. Exclusión de garantías</h2>
          <p>
            El servicio se proporciona &quot;tal cual&quot; (&quot;as is&quot;) y sin garantías expresas o implícitas sobre resultados específicos.
          </p>

          <h2>16. Modificaciones de estos términos</h2>
          <p>
            Podemos revisar estos Términos y Condiciones en cualquier momento. La fecha de última actualización estará indicada en el sitio.
          </p>

          <h2>17. Legislación aplicable</h2>
          <p>
            Estos términos se rigen por los principios generales del derecho de internet y las normativas aplicables en materia de comercio electrónico y protección al usuario.
          </p>

          <h2>18. Contacto</h2>
          <p>
            Para cualquier duda sobre estos Términos y Condiciones, por favor visita nuestra página de <Link href="/contacto/">Contacto</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}
