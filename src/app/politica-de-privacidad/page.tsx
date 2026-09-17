import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Privacidad | LetrasBonitas",
  description:
    "Política de Privacidad de LetrasBonitas. Información transparente sobre la recopilación de datos, uso de cookies, publicidad de Google AdSense y procesamiento local en nuestras herramientas.",
  alternates: {
    canonical: "/politica-de-privacidad/",
  },
  openGraph: {
    title: "Política de Privacidad | LetrasBonitas",
    description:
      "Información transparente sobre la recopilación de datos, uso de cookies y publicidad en LetrasBonitas.",
    locale: "es",
    type: "website",
    url: "/politica-de-privacidad/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaDePrivacidadPage() {
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
        "@id": "https://letrasbonits.com/politica-de-privacidad/#webpage",
        url: "https://letrasbonits.com/politica-de-privacidad/",
        name: "Política de Privacidad | LetrasBonitas",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/politica-de-privacidad/#breadcrumb",
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
            name: "Política de Privacidad",
            item: "https://letrasbonits.com/politica-de-privacidad/",
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
              { label: "Política de Privacidad" },
            ]}
          />
          <div className="hero-saas__badge">
            <span className="hero-saas__badge-dot" />
            <span className="hero-saas__badge-text">LEGAL & TRANSPARENCIA</span>
          </div>
          <h1 className="hero-saas__title">
            Política de <span className="gradient-text-cyan">Privacidad</span>
          </h1>
          <p className="hero-saas__description">
            En LetrasBonitas respetamos y protegemos la privacidad de nuestros usuarios. Esta política describe qué información recopilamos, cómo la utilizamos y las opciones a tu disposición.
          </p>
        </div>
      </section>

      <article className="content-article" style={{ marginTop: "2rem" }}>
        <section className="article-section">
          <h2>1. Introducción</h2>
          <p>
            Bienvenido a <strong>LetrasBonitas</strong>. La presente Política de Privacidad explica cómo tratamos la información personal y los datos de navegación cuando utilizas nuestro sitio web accesible en <code>https://letrasbonits.com/</code> y cualquiera de sus subpáginas y herramientas interactivas.
          </p>

          <h2>2. Responsable del sitio web</h2>
          <p>
            LetrasBonitas opera como una plataforma web independiente dedicada al desarrollo de herramientas de transformación tipográfica, conversores de texto Unicode y recursos creativos en español. Si tienes cualquier consulta sobre privacidad, puedes comunicarte a través de nuestra página de <Link href="/contacto/">Contacto</Link>.
          </p>

          <h2>3. Información que recopilamos</h2>
          <p>
            Recopilamos el mínimo de información necesario para ofrecer una experiencia fluida, rápida y segura en nuestro sitio web.
          </p>

          <h2>4. Información que proporcionan los usuarios</h2>
          <p>
            Los usuarios pueden proporcionar voluntariamente información de contacto (como nombre o dirección de correo electrónico) únicamente cuando se comunican de forma directa con nosotros para soporte, comentarios o consultas relativas a privacidad.
          </p>

          <h2>5. Información recopilada automáticamente</h2>
          <p>
            Al navegar por LetrasBonitas, se pueden recopilar automáticamente ciertos datos técnicos de acceso no identificables personalmente, tales como la dirección IP anonimizada, el tipo de navegador, sistema operativo, idioma de preferencia, páginas consultadas y fecha/hora de la visita.
          </p>

          <h2>6. Uso de la información</h2>
          <p>La información recopilada se utiliza exclusivamente para:</p>
          <ul>
            <li>Garantizar el correcto funcionamiento técnico del sitio web.</li>
            <li>Mejorar el diseño, usabilidad y rendimiento de nuestras herramientas.</li>
            <li>Prevenir usos fraudulentos o actividades maliciosas.</li>
            <li>Mostrar publicidad relevante a través de nuestros proveedores autorizados.</li>
          </ul>

          <h2>7. Datos introducidos en nuestras herramientas</h2>
          <p>
            El texto que introduces en los campos de entrada de nuestros conversores de letras, generadores cursivos y exploradores de símbolos es procesado directamente en la memoria local de tu navegador web mediante código JavaScript.
          </p>
          <p>
            <strong>No almacenamos ni registramos en nuestros servidores el contenido que escribes o transformas en nuestras herramientas.</strong>
          </p>

          <h2>8. Procesamiento del texto en las herramientas</h2>
          <p>
            Dado que las transformaciones Unicode ocurren en el lado del cliente (en tu propio dispositivo), tu texto privado no se envía a bases de datos ni se comparte con terceros para análisis de contenido.
          </p>

          <h2>9. Cookies y tecnologías similares</h2>
          <p>
            Utilizamos cookies propias y de terceros, así como almacenamiento local en el navegador (<code>localStorage</code>), para ofrecer funcionalidades esenciales, recordar preferencias y analizar estadísticas anónimas de tráfico.
          </p>

          <h2>10. Google AdSense y publicidad</h2>
          <p>
            LetrasBonitas puede mostrar anuncios gestionados por <strong>Google AdSense</strong> y otros socios publicitarios. Google utiliza cookies para publicar anuncios basados en las visitas previas del usuario a nuestro sitio web o a otros sitios web de Internet.
          </p>
          <p>
            Los usuarios pueden inhabilitar la publicidad personalizada consultando la <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Configuración de Anuncios de Google</a>. Para más detalles sobre cómo gestiona Google los datos en sitios asociados, puedes visitar la política oficial de Google sobre el uso de datos.
          </p>

          <h2>11. Google Analytics</h2>
          <p>
            Podemos utilizar servicios de analítica web como Google Analytics para medir la interacción de los usuarios de manera agregada y anónima. Estos servicios emplean cookies para generar estadísticas sobre el tráfico del sitio sin identificar personalmente a visitantes individuales.
          </p>

          <h2>12. Otros servicios de terceros</h2>
          <p>
            Eventualmente podemos integrar servicios de terceros (tales como fuentes web de Google Fonts o librerías de distribución de contenido CDN) necesarios para la carga rápida del diseño. Estos servicios pueden recibir la dirección IP de tu dispositivo con fines puramente técnicos.
          </p>

          <h2>13. Publicidad personalizada</h2>
          <p>
            Para los usuarios ubicados en el Espacio Económico Europeo (EEE), el Reino Unido y Suiza, LetrasBonitas implementa mecanismos de gestión de consentimiento (CMP) que cumplen con el marco IAB TCF para recopilar el consentimiento transparente sobre publicidad personalizada.
          </p>

          <h2>14. Almacenamiento local y preferencias</h2>
          <p>
            Nuestras herramientas utilizan el almacenamiento local de tu navegador (<code>localStorage</code>) para recordar funciones útiles, como tus estilos guardados como favoritos o los últimos elementos copiados. Estos datos permanecen exclusivamente en tu navegador y puedes borrarlos en cualquier momento limpiando el historial de navegación.
          </p>

          <h2>15. Conservación de los datos</h2>
          <p>
            No mantenemos servidores con registros de actividad de usuarios ni bases de datos personales. Las comunicaciones enviadas por correo electrónico se conservan únicamente durante el tiempo necesario para resolver la consulta formulada.
          </p>

          <h2>16. Seguridad</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas adecuadas (incluyendo cifrado SSL/HTTPS en todo el sitio) para proteger la transmisión de datos y la integridad de nuestro servicio.
          </p>

          <h2>17. Enlaces externos</h2>
          <p>
            Nuestro sitio web puede contener enlaces a sitios externos de terceros. No asumimos responsabilidad alguna sobre las prácticas de privacidad o contenidos de dichos sitios externos.
          </p>

          <h2>18. Privacidad de menores</h2>
          <p>
            LetrasBonitas no recopila de forma aseverada o deliberada datos personales de menores de 13 años. El sitio está diseñado como una herramienta tipográfica abierta para todo público.
          </p>

          <h2>19. Derechos de los usuarios</h2>
          <p>
            De acuerdo con las normativas aplicables de protección de datos (como el RGPD), tienes derecho a acceder, rectificar o solicitar la supresión de cualquier dato personal que nos hayas proporcionado directamente.
          </p>

          <h2>20. Cambios en esta Política</h2>
          <p>
            Nos reservamos el derecho de actualizar esta Política de Privacidad para adaptarla a novedades legislativas o mejoras técnicas. La versión más reciente estará siempre disponible en esta misma página.
          </p>

          <h2>21. Contacto</h2>
          <p>
            Si tienes dudas o preguntas sobre esta Política de Privacidad, puedes escribirnos a través de nuestra página de <Link href="/contacto/">Contacto</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}

