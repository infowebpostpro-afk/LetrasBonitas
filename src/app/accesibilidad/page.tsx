import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Accesibilidad | LetrasBonitas",
  description:
    "Declaración de Accesibilidad Web de LetrasBonitas. Nuestro compromiso con el diseño inclusivo, soporte para lectores de pantalla y navegación accesible.",
  alternates: {
    canonical: "/accesibilidad/",
  },
  openGraph: {
    title: "Accesibilidad | LetrasBonitas",
    description:
      "Declaración de accesibilidad web y usabilidad inclusiva en LetrasBonitas.",
    locale: "es",
    type: "website",
    url: "/accesibilidad/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccesibilidadPage() {
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
        "@id": "https://letrasbonitas.com/accesibilidad/#webpage",
        url: "https://letrasbonitas.com/accesibilidad/",
        name: "Accesibilidad | LetrasBonitas",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonitas.com/accesibilidad/#breadcrumb",
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
            name: "Accesibilidad",
            item: "https://letrasbonitas.com/accesibilidad/",
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
              { label: "Accesibilidad" },
            ]}
          />
          <div className="hero-saas__badge">
            <span className="hero-saas__badge-dot" />
            <span className="hero-saas__badge-text">DISEÑO INCLUSIVO</span>
          </div>
          <h1 className="hero-saas__title">
            Declaración de <span className="gradient-text-purple">Accesibilidad</span>
          </h1>
          <p className="hero-saas__description">
            En LetrasBonitas estamos comprometidos con garantizar la accesibilidad digital para personas con capacidades diversas y la usabilidad universal en todos los dispositivos.
          </p>
        </div>
      </section>

      <article className="content-article" style={{ marginTop: "2rem" }}>
        <section className="article-section">
          <h2>Nuestro compromiso con la accesibilidad</h2>
          <p>
            Trabajamos continuamente para aplicar las pautas internacionales de accesibilidad web (WCAG 2.1) en los niveles A y AA. Creemos que las herramientas de texto en internet deben ser sencillas y utilizables por cualquier persona, independientemente de sus capacidades físicas, sensoriales o del equipo con el que navegue.
          </p>

          <h2>Medidas implementadas en la plataforma</h2>
          <p>Para lograr un entorno inclusivo, aplicamos las siguientes prácticas de diseño y desarrollo:</p>
          <ul>
            <li><strong>Navegación por teclado completa:</strong> Todos los elementos interactivos (menús, botones de copia, campos de entrada y filtros) son accesibles utilizando la tecla <code>Tab</code> y la barra espaciadora o <code>Enter</code>.</li>
            <li><strong>Estados de foco visibles:</strong> Mantenemos indicadores visuales claros en los botones y enlaces enfocados por teclado.</li>
            <li><strong>HTML Semántico:</strong> Estructuración correcta mediante etiquetas HTML5 (<code>header</code>, <code>main</code>, <code>nav</code>, <code>article</code>, <code>section</code>) y encabezados jerárquicos (H1 a H3).</li>
            <li><strong>Contraste de color óptimo:</strong> Elección de paletas de color con alto contraste entre el texto y el fondo para facilitar la lectura a personas con baja visión.</li>
            <li><strong>Etiquetado ARIA para lectores de pantalla:</strong> Uso de atributos <code>aria-label</code>, <code>aria-live</code> y roles descriptivos en los botones de copiar y anuncios flotantes.</li>
            <li><strong>Diseño adaptativo móvil:</strong> Interfaz responsive que permite ampliar el tamaño del texto hasta un 200% sin que el contenido se solape ni requiera desplazamiento horizontal.</li>
            <li><strong>Respeto a la preferencia de movimiento reducido:</strong> Soporte para la regla CSS <code>prefers-reduced-motion</code> que desactiva animaciones secundarias para personas susceptibles al mareo por movimiento.</li>
          </ul>

          <h2>Puntos de atención técnica sobre Unicode y lectores de pantalla</h2>
          <p>
            Nuestras herramientas permiten generar texto Unicode decorativo. Es importante tener en cuenta que los lectores de pantalla (como NVDA, JAWS o VoiceOver) pueden interpretar los caracteres de los alfabetos matemáticos Unicode leyendo la descripción técnica de cada glifo individual. Por ello, recomendamos utilizar estos estilos con moderación en frases cortas para mantener la mejor experiencia de lectura accesible.
          </p>

          <h2>Comentarios y sugerencias de accesibilidad</h2>
          <p>
            Agradecemos activamente los comentarios de los usuarios sobre cualquier barrera de accesibilidad que hayan podido encontrar. Si experimentas alguna dificultad para acceder a alguna función en LetrasBonitas, por favor ponte en contacto con nosotros en la página de <Link href="/contacto/">Contacto</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}
