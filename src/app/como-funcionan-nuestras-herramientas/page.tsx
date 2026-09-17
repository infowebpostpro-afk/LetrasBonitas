import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cómo Funcionan Nuestras Herramientas | LetrasBonitas",
  description:
    "Metodología técnica de LetrasBonitas: cómo transformamos el texto en caracteres Unicode, soporte para letras españolas con tildes y ñ, y procesamiento local en el navegador.",
  alternates: {
    canonical: "/como-funcionan-nuestras-herramientas/",
  },
  openGraph: {
    title: "Cómo Funcionan Nuestras Herramientas | LetrasBonitas",
    description:
      "Explicación transparente sobre Unicode, algoritmos de conversión y soporte del idioma español en nuestras herramientas.",
    locale: "es",
    type: "website",
    url: "/como-funcionan-nuestras-herramientas/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ComoFuncionanNuestrasHerramientasPage() {
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
        "@id": "https://letrasbonits.com/como-funcionan-nuestras-herramientas/#webpage",
        url: "https://letrasbonits.com/como-funcionan-nuestras-herramientas/",
        name: "Cómo Funcionan Nuestras Herramientas | LetrasBonitas",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/como-funcionan-nuestras-herramientas/#breadcrumb",
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
            name: "Cómo Funcionan Nuestras Herramientas",
            item: "https://letrasbonits.com/como-funcionan-nuestras-herramientas/",
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
              { label: "Cómo Funcionan Nuestras Herramientas" },
            ]}
          />
          <div className="hero-saas__badge">
            <span className="hero-saas__badge-dot" />
            <span className="hero-saas__badge-text">METODOLOGÍA & UNICODE</span>
          </div>
          <h1 className="hero-saas__title">
            Cómo Funcionan <span className="gradient-text-cyan">Nuestras Herramientas</span>
          </h1>
          <p className="hero-saas__description">
            Explicación transparente y detallada sobre la tecnología de codificación Unicode, mapeo de puntos de código y procesamiento en tiempo real de nuestras herramientas.
          </p>
        </div>
      </section>

      <article className="content-article" style={{ marginTop: "2rem" }}>
        <section className="article-section">
          <h2>1. ¿Cómo transformamos el texto?</h2>
          <p>
            Cuando introduces una frase en nuestras herramientas, el convertidor no cambia la fuente tipográfica instalada en tu sistema. En su lugar, analiza cada carácter individual y lo mapea hacia un carácter equivalente del estándar <strong>Unicode</strong>.
          </p>

          <h2>2. El estándar Unicode y los bloques estilizados</h2>
          <p>
            Unicode es un estándar internacional de codificación diseñado para representar el texto en sistemas informáticos. Además de las letras latinas estándar (A-Z, a-z), Unicode contempla alfabetos matemáticos especiales que incluyen variantes como:
          </p>
          <ul>
            <li><strong>Mathematical Script:</strong> <code>𝒜 𝓑 𝓒 𝒹 ℯ 𝒻</code></li>
            <li><strong>Mathematical Bold:</strong> <code>𝐀 𝐁 𝐂 𝐝 𝐞 𝐟</code></li>
            <li><strong>Mathematical Fraktur (Gótica):</strong> <code>𝔄 𝔅 𝔍 𝔞 𝔟 𝔠</code></li>
            <li><strong>Double-Struck (Doble Trazo):</strong> <code>𝔸 𝔹 ℂ 𝕕 𝕖 𝕗</code></li>
            <li><strong>Monospace (Monoespaciada):</strong> <code>𝙰 𝙱 𝙲 𝕕 𝕖 𝕗</code></li>
          </ul>

          <h2>3. Procesamiento seguro en el navegador</h2>
          <p>
            Nuestras herramientas funcionan íntegramente del lado del cliente mediante código optimizado en JavaScript. Esto ofrece tres ventajas clave:
          </p>
          <ol>
            <li><strong>Velocidad instantánea:</strong> El resultado se genera al instante mientras escribes sin esperar respuesta de un servidor.</li>
            <li><strong>Privacidad total:</strong> Tus datos y palabras no se transmiten ni almacenan en bases de datos externas.</li>
            <li><strong>Funcionamiento sin conexión:</strong> Una vez cargada la página, las herramientas pueden procesar texto incluso si pierdes conexión momentáneamente.</li>
          </ol>

          <h2>4. Tratamiento del idioma español (Tildes y Ñ)</h2>
          <p>
            El estándar Unicode definió originalmente los bloques matemáticos estilizados basados en el alfabeto inglés básico (26 letras). Para garantizar que el texto en español siga siendo ortográficamente correcto:
          </p>
          <ul>
            <li>Si un estilo no tiene un punto de código directo para una vocal acentuada (como <code>á</code>) o para la letra <code>ñ</code>, nuestra herramienta conserva el carácter original en lugar de sustituirlo erróneamente por <code>n</code> o una vocal sin acento.</li>
            <li>En estilos compatibles, empleamos marcas diacríticas combinantes para preservar el acento gráfico.</li>
          </ul>

          <h2>5. Copiar y pegar en 1 toque</h2>
          <p>
            Cada tarjeta de resultado cuenta con botones optimizados que hacen uso de la API nativa de portapapeles del navegador (<code>navigator.clipboard</code>). Esto te permite copiar el resultado completo con un solo clic o toque en pantallas táctiles móviles.
          </p>

          <h2>6. Compatibilidad y fallbacks visuales</h2>
          <p>
            Cuando pegas el texto en otra aplicación (como Instagram, TikTok o WhatsApp), el dispositivo receptor debe contar con soporte tipográfico para ese punto de código Unicode. Si un sistema antiguo carece del glifo adecuado, puede mostrar un símbolo de reemplazo (cuadrado vacante <code></code>). Si esto ocurre, recomendamos probar una variante con mayor nivel de compatibilidad, como Sans Serif o Negrita.
          </p>

          <h2>7. Más información y pruebas</h2>
          <p>
            Si deseas probar los conversores en vivo, dirígete al <Link href="/conversor-de-letras/">Conversor de Letras</Link> o explora nuestra colección de <Link href="/letras-cursivas/">Letras Cursivas</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}

