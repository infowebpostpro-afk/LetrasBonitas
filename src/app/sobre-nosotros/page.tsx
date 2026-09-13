import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Sobre Nosotros | LetrasBonitas",
  description:
    "Conoce LetrasBonitas: nuestra filosofía, metodología de desarrollo tipográfico, compromiso con el estándar Unicode y el idioma español.",
  alternates: {
    canonical: "/sobre-nosotros/",
  },
  openGraph: {
    title: "Sobre Nosotros | LetrasBonitas",
    description:
      "Conoce el proyecto LetrasBonitas y nuestra filosofía sobre herramientas tipográficas abiertas en español.",
    locale: "es",
    type: "website",
    url: "/sobre-nosotros/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SobreNosotrosPage() {
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
        "@type": "AboutPage",
        "@id": "https://letrasbonitas.com/sobre-nosotros/#webpage",
        url: "https://letrasbonitas.com/sobre-nosotros/",
        name: "Sobre Nosotros | LetrasBonitas",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonitas.com/sobre-nosotros/#breadcrumb",
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
            name: "Sobre Nosotros",
            item: "https://letrasbonitas.com/sobre-nosotros/",
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
              { label: "Sobre Nosotros" },
            ]}
          />
          <div className="hero-saas__badge">
            <span className="hero-saas__badge-dot" />
            <span className="hero-saas__badge-text">QUIÉNES SOMOS & PROPÓSITO</span>
          </div>
          <h1 className="hero-saas__title">
            Sobre <span className="gradient-text-purple">LetrasBonitas</span>
          </h1>
          <p className="hero-saas__description">
            Una plataforma de herramientas tipográficas diseñada para ofrecer conversión de texto Unicode rápida, elegante y respetuosa con los caracteres del idioma español.
          </p>
        </div>
      </section>

      <article className="content-article" style={{ marginTop: "2rem" }}>
        <section className="article-section">
          <h2>¿Qué es LetrasBonitas?</h2>
          <p>
            <strong>LetrasBonitas</strong> es una plataforma web independiente orientada a la utilidad tipográfica y la generación de texto decorativo para usuarios de habla hispana.
          </p>
          <p>
            Nuestro objetivo principal es facilitar la exploración, transformación y copia rápida de caracteres Unicode estilizados para su uso en biografías de redes sociales, nombres de perfiles, proyectos creativos y mensajes.
          </p>

          <h2>¿Qué puedes hacer en LetrasBonitas?</h2>
          <p>En nuestro sitio web encontrarás herramientas interactivas especializadas:</p>
          <ul>
            <li><Link href="/letras-cursivas/">Generador de Letras Cursivas</Link>: Más de 80 variantes de escritura manuscrita, script, itálica y caligrafía.</li>
            <li><Link href="/conversor-de-letras/">Conversor de Letras</Link>: Catálogo dinámico con estilos de negrita, gótica, aesthetic y monospace.</li>
            <li><Link href="/letras-para-instagram/">Letras para Instagram</Link>: Diseños adaptados para nombres de perfil, bios y publicaciones.</li>
            <li><Link href="/letras-para-instagram/simbolos-para-instagram/">Explorador de Símbolos</Link>: Colección organizada de caracteres decorativos con copia al toque.</li>
          </ul>

          <h2>Nuestra filosofía: Transparencia y Utilidad Primero</h2>
          <p>
            Creemos que una herramienta web debe ser **útil desde el primer segundo**. Por ello, diseñamos nuestras páginas poniendo la funcionalidad interactiva arriba de todo, sin forzar a los usuarios a navegar por textos extensos antes de llegar a la casilla de transformación.
          </p>

          <h2>Nuestro enfoque técnico sobre Unicode</h2>
          <p>
            No vendemos ni instalamos archivos de fuentes (TTF/OTF) en los dispositivos de los usuarios. En su lugar, utilizamos transformaciones dinámicas basadas en los alfabetos matemáticos y bloques estilizados definidos por el **Estándar Internacional Unicode**.
          </p>
          <p>
            Para conocer más detalles sobre nuestra metodología técnica, te invitamos a consultar nuestra página sobre <Link href="/como-funcionan-nuestras-herramientas/">Cómo Funcionan Nuestras Herramientas</Link>.
          </p>

          <h2>Respeto por el idioma español</h2>
          <p>
            A diferencia de herramientas genéricas concebidas únicamente para el alfabeto inglés, en LetrasBonitas prestamos especial cuidado a las peculiaridades de nuestro idioma:
          </p>
          <ul>
            <li>Tratamiento adecuado de vocales con tildes (<code>á, é, í, ó, ú, ü</code>).</li>
            <li>Preservación explícita de la letra <code>ñ</code> y <code>Ñ</code>.</li>
            <li>Manejo seguro de caracteres combinantes para evitar sustituciones ortográficas indebidas.</li>
          </ul>

          <h2>Procesamiento 100% privado en tu navegador</h2>
          <p>
            Nuestras transformaciones tipográficas se ejecutan de manera local mediante código JavaScript en tu propio dispositivo. No enviamos ni almacenamos el texto que escribes en servidores remotos.
          </p>

          <h2>Contacto y sugerencias</h2>
          <p>
            Estamos en constante evolución para añadir nuevos estilos y mejorar el rendimiento de la plataforma. Si tienes alguna sugerencia o informe de error, puedes ponerte en contacto con nosotros en la sección de <Link href="/contacto/">Contacto</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}
