import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contacto | LetrasBonitas",
  description:
    "Contacto oficial de LetrasBonitas. Ponte en contacto con nosotros para informar errores, enviar sugerencias, consultas de privacidad o preguntas sobre herramientas tipográficas.",
  alternates: {
    canonical: "/contacto/",
  },
  openGraph: {
    title: "Contacto | LetrasBonitas",
    description:
      "Contacto oficial de LetrasBonitas. Envíanos tus dudas, comentarios o informes de errores.",
    locale: "es",
    type: "website",
    url: "/contacto/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactoPage() {
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
        "@type": "ContactPage",
        "@id": "https://letrasbonitas.com/contacto/#webpage",
        url: "https://letrasbonitas.com/contacto/",
        name: "Contacto | LetrasBonitas",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonitas.com/contacto/#breadcrumb",
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
            name: "Contacto",
            item: "https://letrasbonitas.com/contacto/",
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
              { label: "Contacto" },
            ]}
          />
          <div className="hero-saas__badge">
            <span className="hero-saas__badge-dot" />
            <span className="hero-saas__badge-text">ATENCIÓN & SOPORTE</span>
          </div>
          <h1 className="hero-saas__title">
            Centro de <span className="gradient-text-pink">Contacto</span>
          </h1>
          <p className="hero-saas__description">
            ¿Tienes dudas, sugerencias o quieres informar sobre algún error en nuestras herramientas? Estamos a tu disposición.
          </p>
        </div>
      </section>

      <article className="content-article" style={{ marginTop: "2rem" }}>
        <section className="article-section">
          <h2>¿Cómo podemos ayudarte?</h2>
          <p>
            Nos tomamos muy en serio la calidad de nuestras herramientas y la experiencia de los usuarios. Puedes comunicarte con el equipo de <strong>LetrasBonitas</strong> para los siguientes temas:
          </p>
          <ul>
            <li><strong>Informar de un error:</strong> Si alguna transformación Unicode falla o un botón de copia presenta inconvenientes.</li>
            <li><strong>Sugerencias de nuevos estilos:</strong> Si buscas un estilo de fuente decorativa o símbolo que te gustaría ver en el sitio.</li>
            <li><strong>Consultas sobre Privacidad:</strong> Preguntas o solicitudes relativas a tus derechos de protección de datos (consulte nuestra <Link href="/politica-de-privacidad/">Política de Privacidad</Link>).</li>
            <li><strong>Preguntas sobre accesibilidad:</strong> Reportes o sugerencias para mejorar la navegación inclusiva en la plataforma.</li>
            <li><strong>Derechos de autor o avisos legales:</strong> Consultas relacionadas con propiedad intelectual.</li>
          </ul>

          <h2>Vías directas de contacto</h2>
          <div className="code-block" style={{ margin: "1.5rem 0", padding: "1.5rem" }}>
            <p style={{ margin: 0, fontWeight: 600, fontSize: "1.1rem" }}>
              📧 Correo de atención oficial: <code style={{ color: "var(--color-primary)" }}>contacto@letrasbonitas.com</code>
            </p>
          </div>

          <h2>Tiempos de respuesta</h2>
          <p>
            Respondemos habitualmente a las consultas recibidas en un plazo estimado de 24 a 48 horas laborables. Agradecemos incluir detalles precisos (como el navegador y dispositivo utilizado) si tu mensaje trata sobre un problema técnico.
          </p>

          <h2>Enlaces de interés rápido</h2>
          <p>Antes de contactarnos, quizás encuentres respuesta inmediata en nuestras secciones explicativas:</p>
          <ul>
            <li><Link href="/sobre-nosotros/">Conoce más sobre nuestro proyecto</Link></li>
            <li><Link href="/como-funcionan-nuestras-herramientas/">Aprende cómo procesamos los caracteres Unicode</Link></li>
            <li><Link href="/politica-de-cookies/">Información sobre el uso de cookies</Link></li>
          </ul>
        </section>
      </article>
    </main>
  );
}
