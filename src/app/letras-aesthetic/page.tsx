import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HubFontGenerator } from "@/components/font-generator/HubFontGenerator";

export function generateMetadata(): Metadata {
  return {
    title: "Letras Aesthetic para Copiar y Pegar - Estilos Lindos",
    description:
      "Los estilos aesthetic más lindos para tus textos: letras suaves y minimalistas para copiar y pegar gratis.",
    alternates: {
      canonical: "/letras-aesthetic/",
    },
    openGraph: {
      title: "Letras Aesthetic para Copiar y Pegar - Estilos Lindos",
      description:
        "Los estilos aesthetic más lindos para tus textos: letras suaves y minimalistas para copiar y pegar gratis.",
      locale: "es",
      type: "website",
      url: "/letras-aesthetic/",
    },
    twitter: {
      card: "summary",
      title: "Letras Aesthetic para Copiar y Pegar - Estilos Lindos",
      description:
        "Los estilos aesthetic más lindos para tus textos: letras suaves y minimalistas para copiar y pegar gratis.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LetrasAestheticPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://letrasbonits.com/#website",
        url: "https://letrasbonits.com/",
        name: "LetrasBonitas",
        description:
          "Generador de letras bonitas y recursos tipográficos en español.",
        inLanguage: "es",
      },
      {
        "@type": "WebPage",
        "@id": "https://letrasbonits.com/letras-aesthetic/#webpage",
        url: "https://letrasbonits.com/letras-aesthetic/",
        name: "Letras Aesthetic para Copiar y Pegar - Estilos Lindos",
        description:
          "Los estilos aesthetic más lindos para tus textos: letras suaves y minimalistas para copiar y pegar gratis.",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/letras-aesthetic/#breadcrumb",
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
            name: "Letras Aesthetic",
            item: "https://letrasbonits.com/letras-aesthetic/",
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": "https://letrasbonits.com/letras-aesthetic/#app",
        name: "Generador de Letras Aesthetic",
        url: "https://letrasbonits.com/letras-aesthetic/",
        applicationCategory: "UtilityApplication",
        operatingSystem: "All",
        browserRequirements: "Requires HTML5 and JavaScript",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://letrasbonits.com/letras-aesthetic/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo hacer letras aesthetic para copiar y pegar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Escribe tu nombre o frase en la caja del generador, explora los estilos suaves, vaporwave o con destellos y haz clic en el botón Copiar en tu favorito. Luego pégalo en tu biografía o publicación.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué significa texto aesthetic?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Es una etiqueta de estilo visual que define textos limpios, suaves, ordenados o nostálgicos. No es una tipografía formal de imprenta, sino una combinación armónica de caracteres Unicode y símbolos decorativos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo usar letras aesthetic en Instagram y TikTok?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Puedes utilizarlas en el campo de nombre visible, en la descripción de tu biografía, en comentarios y en descripciones de publicaciones.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo convertir mi nombre en letras aesthetic?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Los nombres y apodos cortos son ideales porque permiten apreciar claramente los caracteres decorativos sin sobrecargar la pantalla ni dificultar la lectura.",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué algunas letras con tilde o la letra ñ no cambian de estilo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Los bloques matemáticos de Unicode no contienen variantes estilizadas para todas las letras con acento o para la ñ del español. Nuestro conversor conserva la letra original en lugar de eliminarla o sustituirla por un signo incorrecto.",
            },
          },
          {
            "@type": "Question",
            name: "¿Las letras aesthetic funcionan en todas las aplicaciones móviles?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La mayoría de dispositivos y aplicaciones modernas muestran estos caracteres sin dificultad. Si una aplicación antigua no tiene la fuente del sistema correspondiente, podría mostrar un rectángulo de reemplazo.",
            },
          },
          {
            "@type": "Question",
            name: "¿Necesito instalar o descargar una fuente?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Los estilos generados son caracteres Unicode que se copian y pegan como texto ordinario, sin necesidad de instalar archivos TTF o aplicaciones adicionales.",
            },
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

      {/* ── Soft Editorial Aesthetic Hero ── */}
      <header className="hero-saas hero-saas--compact hero-saas--aesthetic">
        <div className="hero-saas__watermark-left" aria-hidden="true">
          ♡ 𝓈𝑜𝒻𝓉 ♡
        </div>
        <div className="hero-saas__watermark-right" aria-hidden="true">
          ✧ 𝒶𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸 ✧
        </div>
        <div className="hero-saas__content">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Letras Aesthetic" },
            ]}
          />
          <span className="hero-saas__badge hero-saas__badge--aesthetic">
            ♡ SOFT · CUTE · MINIMAL
          </span>
          <h1 className="hero-saas__title">
            Letras <span className="gradient-text-aesthetic">Aesthetic</span> para Copiar y Pegar
          </h1>
          <p className="hero-saas__lead">
            Transforma cualquier nombre, biografía o frase corta en estilos aesthetic suaves, minimalistas y decorados con un solo clic. Compara decenas de variantes tipográficas y copia tu preferida al instante.
          </p>

          {/* Visual style showcase with real transformations of Luna */}
          <div className="hero-aesthetic-showcase" aria-label="Muestras de estilos aesthetic para la palabra Luna">
            <div className="hero-aesthetic-pill">
              <span className="hero-aesthetic-pill__label">Normal:</span>
              <strong>Luna</strong>
            </div>
            <div className="hero-aesthetic-pill">
              <span className="hero-aesthetic-pill__label">Cursiva:</span>
              <strong>𝓛𝓾𝓷𝓪</strong>
            </div>
            <div className="hero-aesthetic-pill">
              <span className="hero-aesthetic-pill__label">Serif:</span>
              <strong>𝐿𝑢𝑛𝑎</strong>
            </div>
            <div className="hero-aesthetic-pill">
              <span className="hero-aesthetic-pill__label">Versalitas:</span>
              <strong>ʟᴜɴᴀ</strong>
            </div>
            <div className="hero-aesthetic-pill">
              <span className="hero-aesthetic-pill__label">Vaporwave:</span>
              <strong>✧ Ｌｕｎａ ✧</strong>
            </div>
          </div>

          <div className="hero-aesthetic-cue" aria-hidden="true">
            <span>Escribe tu texto</span>
            <span>↓</span>
          </div>
        </div>
      </header>

      {/* ── Interactive Hub Font Generator ── */}
      <HubFontGenerator
        storagePrefix="aesthetic"
        defaultCategory="aesthetic"
        defaultExample="Luna"
        searchPlaceholder="Buscar estilo aesthetic (vaporwave, soft, brillos, cursiva)..."
        quickExamples={[
          "Luna",
          "Dreamer",
          "Mi mundo",
          "Soft girl",
          "Amor",
        ]}
        useCases={[
          { id: "bio", label: "Instagram Bio", icon: "♡", text: "𝓈𝓌𝑒𝑒𝓉 𝒹𝓇𝑒𝒶𝓂𝓈 ☾" },
          { id: "tiktok", label: "TikTok Nick", icon: "✦", text: "✧ 𝓈𝓉𝒶𝓇𝓈 ✧" },
          { id: "nombre", label: "Nombre", icon: "୨୧", text: "𝓛𝓾𝓷𝓪" },
          { id: "caption", label: "Caption", icon: "⋆", text: "ｇｏｏｄ  ｖｉｂｅｓ" },
          { id: "soft", label: "Soft Words", icon: "𐙚", text: "·˚ amor ˚·" },
        ]}
      />

      {/* ── Comprehensive Editorial Guide ── */}
      <article className="prose-section" aria-label="Guía completa sobre letras aesthetic para copiar y pegar">
        
        {/* Section 1: ¿Qué son las letras aesthetic? */}
        <section className="prose-card">
          <h2>¿Qué son las letras aesthetic?</h2>
          <p>
            El concepto de <strong>letras aesthetic para copiar y pegar</strong> agrupa un conjunto de estilos visuales diseñados para transmitir delicadeza, calma, elegancia y armonía en entornos digitales. A diferencia de las tipografías tradicionales de bloque o de los diseños llamativos de impacto, la tipografía aesthetic prioriza la sutileza: trazos caligráficos fluidos, caracteres con espaciado amplio, versalitas compactas y detalles ornamentales suaves como estrellas, lunas o destellos.
          </p>
          <p>
            En términos prácticos, &quot;aesthetic&quot; no representa una fuente única ni un alfabeto tipográfico cerrado. Es una etiqueta descriptiva que reúne diversas familias visuales de caracteres Unicode:
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Texto base:</span> <strong>Luna</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Ancho completo:</span> <strong>Ｌｕｎａ</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Cursiva suave:</span> <strong>𝓛𝓾𝓷𝓪</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Espaciado amplio:</span> <strong>L u n a</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Con marco de destello:</span> <strong>✧ Ｌｕｎａ ✧</strong>
            </div>
          </div>
          <p className="mt-3">
            Cada uno de estos estilos se apoya en símbolos y letras disponibles dentro del estándar Unicode internacional. Esto significa que puedes copiarlos y pegarlos directamente en perfiles, notas y aplicaciones móviles sin necesidad de instalar archivos externos.
          </p>
        </section>

        {/* Section 2: Cómo crear letras aesthetic */}
        <section className="prose-card">
          <h2>Cómo crear letras aesthetic para copiar y pegar</h2>
          <p>
            Personalizar tus frases y nombres requiere solo unos segundos gracias a nuestro generador interactivo:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-700">
            <li>
              <strong>Escribe tu texto en el recuadro superior:</strong> Introduce tu nombre, una palabra corta o la frase que deseas transformar.
            </li>
            <li>
              <strong>Compara los resultados en tiempo real:</strong> Desplázate por el catálogo para explorar variantes vaporwave, cursivas caligráficas, estilos versalitas o textos con marcos delicados.
            </li>
            <li>
              <strong>Elige el estilo adecuado según tu objetivo:</strong> Si buscas un nick de juego o perfil social, revisa que mantenga buena legibilidad tanto en pantallas pequeñas como en fondos oscuros.
            </li>
            <li>
              <strong>Pulsa el botón Copiar:</strong> El texto seleccionado se guardará inmediatamente en tu portapapeles.
            </li>
            <li>
              <strong>Pega y verifica:</strong> Ve a tu red social o aplicación, pega el texto en el campo correspondiente y comprueba cómo se visualiza antes de guardar los cambios.
            </li>
          </ol>
          <p className="mt-3">
            No necesitas memorizar códigos especiales ni buscar símbolos aislados. La herramienta convierte cada carácter de forma automática y ordenada.
          </p>
        </section>

        {/* Section 3: Estilos de letras aesthetic que puedes probar */}
        <section className="prose-card">
          <h2>Estilos de letras aesthetic que puedes probar</h2>
          <p>
            Dentro de nuestra herramienta encontrarás diferentes familias estéticas. Cada una evoca sensaciones distintas según el contexto en el que decidas aplicarla.
          </p>

          <h3>Letras suaves y vaporwave</h3>
          <p>
            Inspiradas en la estética retro de los años 80 y 90, las letras de ancho completo (conocidas también como fullwidth) utilizan caracteres con un espaciado generoso entre sí. Transmiten una atmósfera relajada, espaciosa y nostálgica.
          </p>
          <p>
            Ejemplo: <code>ｇｏｏｄ  ｖｉｂｅｓ</code>
          </p>

          <h3>Letras cursivas aesthetic</h3>
          <p>
            Las variantes caligráficas y manuscritas ofrecen un toque romántico y refinado. Son ideales para biografías personales, citas poéticas y nombres artísticos.
          </p>
          <p>
            Ejemplo: <code>𝓛𝓾𝓷𝓪</code> o <code>𝓈𝓌𝑒𝑒𝓉 𝒹𝓇𝑒𝒶𝓂𝓈</code>
          </p>

          <h3>Letras minimalistas y versalitas</h3>
          <p>
            Si prefieres un perfil limpio y ordenado sin decoraciones excesivas, las versalitas (small caps) y los estilos sans serif limpios aportan modernidad y pulcritud visual.
          </p>
          <p>
            Ejemplo: <code>ʟᴜɴᴀ</code> o <code>L · u · n · a</code>
          </p>

          <h3>Letras aesthetic con símbolos y destellos</h3>
          <p>
            Para quienes desean un toque más expresivo, las combinaciones con marcos de lunas, estrellas delicadas y destellos realzan la palabra central.
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Con lunas:</span> <strong>☾ Luna ☽</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Con destellos:</span> <strong>✧ Luna ✧</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Aesthetic suave:</span> <strong>·˚ Luna ˚·</strong>
            </div>
          </div>
        </section>

        {/* Section 4: Ejemplos de letras aesthetic para copiar y pegar */}
        <section className="prose-card">
          <h2>Ejemplos de letras aesthetic para copiar y pegar</h2>
          <p>
            A continuación te presentamos una selección de palabras y frases habituales convertidas a diferentes estilos aesthetic compatibles con nuestro motor de transformación:
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Luna:</span> <strong>✧ Ｌｕｎａ ✧</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Dreamer:</span> <strong>𝒟𝓇ℯ𝒶𝓂ℯ𝓇</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Amor:</span> <strong>♡ ａｍｏｒ ♡</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Mi mundo:</span> <strong>𝓜𝓲 𝓶𝓾𝓷𝓭𝓸</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Good vibes:</span> <strong>ｇｏｏｄ  ｖｉｂｅｓ</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Soft girl:</span> <strong>·˚ soft girl ˚·</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Mariposa:</span> <strong>𝑀𝒶𝓇𝒾𝓅𝑜𝓈𝒶</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Starlight:</span> <strong>☾ 𝓈𝓉𝒶𝓇𝓁𝒾𝑔𝒽𝓉 ☽</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Cielo:</span> <strong>ᴄɪᴇʟᴏ</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Serenidad:</span> <strong>S · e · r · e · n · i · d · a · d</strong>
            </div>
          </div>
          <p className="mt-3">
            Puedes probar cualquiera de estas expresiones en el generador interactivo para descubrir variantes adicionales con diferentes combinaciones ornamentales.
          </p>
        </section>

        {/* Section 5: Letras aesthetic para nombres y nicks */}
        <section className="prose-card">
          <h2>Letras aesthetic para nombres y nicks</h2>
          <p>
            Los nombres propios y los apodos en redes sociales representan una de las aplicaciones más populares de las letras aesthetic. Al tratarse de textos cortos, admiten un grado mayor de estilizado sin poner en riesgo la comprensión.
          </p>
          <p>
            Ejemplos de nombres estilizados:
          </p>
          <ul>
            <li><strong>Sofía:</strong> <code>𝓢𝓸𝓯í𝓪</code> o <code>Ｓｏｆíａ</code></li>
            <li><strong>Elena:</strong> <code>𝐸𝓁𝑒𝓃𝒶</code> o <code>✧ Elena ✧</code></li>
            <li><strong>Mateo:</strong> <code>ᴍᴀᴛᴇᴏ</code> o <code>𝑀𝒶𝓉𝑒𝑜</code></li>
            <li><strong>Valentina:</strong> <code>𝒱𝒶𝓁𝑒𝓃𝓉𝒾𝓃𝒶</code> o <code>·˚ Valentina ˚·</code></li>
          </ul>
          <p className="mt-3">
            Al elegir un estilo para tu nombre de usuario, considera la plataforma donde lo utilizarás. Mientras que el campo de nombre visible suele aceptar caracteres decorativos amplios, los nombres de usuario identificadores (los que llevan @ al inicio) a menudo exigen letras latinas básicas sin caracteres especiales.
          </p>
        </section>

        {/* Section 6: Letras aesthetic para bios */}
        <section className="prose-card">
          <h2>Letras aesthetic para bios de Instagram y redes sociales</h2>
          <p>
            Una biografía atractiva marca la primera impresión de tu perfil personal o creativo. Las letras aesthetic permiten estructurar la información con delicadeza sin saturar el espacio disponible.
          </p>
          <p>
            Ideas prácticas para organizar tu biografía:
          </p>
          <ul>
            <li>
              <strong>Destaca únicamente tu nombre o rol principal:</strong> Por ejemplo, colocar <code>𝒟𝒾𝓈𝑒ñ𝒶𝒹𝑜𝓇𝒶</code> en la primera línea y mantener el resto de la biografía en texto estándar facilita una lectura rápida.
            </li>
            <li>
              <strong>Añade frases breves de inspiración:</strong> Frases como <code>𝒸𝓇𝑒𝒶𝓉𝒾𝓃𝑔 𝓂𝓎 𝓌𝑜𝓇𝓁𝒹</code> o <code>ｇｏｏｄ  ｖｉｂｅｓ</code> aportan personalidad sin ocupar demasiadas líneas.
            </li>
            <li>
              <strong>Separa intereses con símbolos sutiles:</strong> Utiliza puntos centrales, lunas o destellos para estructurar aficiones, como <code>Arte · Café · Fotografía</code>.
            </li>
          </ul>
          <p className="mt-3">
            Recuerda que las biografías de plataformas como Instagram o TikTok cuentan con límites de caracteres. Los estilos con símbolos envolventes ocupan varios puntos de código, por lo que conviene mantener frases concisas.
          </p>
        </section>

        {/* Section 7: Letras aesthetic con símbolos */}
        <section className="prose-card">
          <h2>Letras aesthetic con símbolos decorativos</h2>
          <p>
            La estética visual se potencia al integrar símbolos ornamentales seleccionados con moderación. Elementos como corazones delgados, lunas crecientes y destellos complementan la forma de las letras.
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Destello cuatro puntas:</span> <strong>✦ Luna ✦</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Corazón suave:</span> <strong>♡ Luna ♡</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Luna mística:</span> <strong>☾ Luna ☽</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Estrellita chispa:</span> <strong>⋆ Luna ⋆</strong>
            </div>
          </div>
          <p className="mt-3">
            Es fundamental distinguir entre la transformación del alfabeto y los símbolos adicionales. Los símbolos decorativos son caracteres independientes que se colocan como prefijos o sufijos alrededor de tu palabra, mientras que la transformación cambia las letras individuales.
          </p>
        </section>

        {/* Section 8: Cómo crear un texto aesthetic que siga siendo fácil de leer */}
        <section className="prose-card">
          <h2>Cómo crear un texto aesthetic que siga siendo fácil de leer</h2>
          <p>
            Uno de los errores más frecuentes al personalizar textos consiste en transformar oraciones extensas o acumular demasiados adornos. El exceso de decoración compromete la legibilidad y cansa la vista del lector.
          </p>
          <p>
            Te sugerimos seguir estos criterios de diseño editorial:
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <span className="step-card__number">1</span>
              <h3>Aplica la prueba de los 5 segundos</h3>
              <p>
                Si alguien tarda más de cinco segundos en descifrar una palabra corta en tu perfil, el estilo elegido es excesivamente intrincado. Opta por una variante más limpia.
              </p>
            </div>
            <div className="step-card">
              <span className="step-card__number">2</span>
              <h3>Prioriza la jerarquía visual</h3>
              <p>
                Estiliza únicamente los titulares o la palabra más importante. Mantén el resto de datos clave, como enlaces, teléfonos o ubicaciones, en texto estándar legible.
              </p>
            </div>
            <div className="step-card">
              <span className="step-card__number">3</span>
              <h3>Cuida la accesibilidad digital</h3>
              <p>
                Los lectores de pantalla para personas con discapacidad visual interpretan los caracteres matemáticos especiales de manera literal, nombrando cada símbolo técnico. Reservar las letras aesthetic para nombres o palabras sueltas respeta la experiencia de todos los usuarios.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Letras aesthetic y caracteres especiales en español */}
        <section className="prose-card">
          <h2>Letras aesthetic y caracteres especiales en español</h2>
          <p>
            El idioma español cuenta con grafías esenciales como la letra <code>ñ</code>, las vocales con tilde (<code>á, é, í, ó, ú</code>) y la diéresis (<code>ü</code>). Muchos generadores de texto genéricos fallan al procesar estas letras, eliminándolas silenciosamente o reemplazándolas por signos rotos.
          </p>
          <p>
            En nuestro generador aplicamos una regla de preservación estricta:
          </p>
          <ul>
            <li>
              <strong>Preservación de caracteres auténticos:</strong> Si un alfabeto matemático concreto de Unicode no posee una variante directa para una vocal acentuada o para la <code>ñ</code>, el sistema mantiene el carácter original en lugar de borrarlo.
            </li>
            <li>
              <strong>Comportamiento en nombres reales:</strong> Al transformar un nombre como <code>Sofía</code>, la letra <code>í</code> se muestra correctamente para conservar la ortografía adecuada de tu palabra.
            </li>
            <li>
              <strong>Variantes de compatibilidad amplia:</strong> Estilos como el texto de ancho completo (fullwidth) o el espaciado amplio admiten la totalidad de letras del abecedario español sin alterar ningún acento.
            </li>
          </ul>
        </section>

        {/* Section 10: ¿Por qué algunas letras se ven diferentes al pegarlas? */}
        <section className="prose-card">
          <h2>¿Por qué algunas letras se ven diferentes al pegarlas?</h2>
          <p>
            Cuando copias un texto transformado, no estás copiando una imagen ni un archivo de fuente, sino secuencias de caracteres codificados en Unicode. La apariencia visual final depende del sistema operativo, navegador y tipografía predeterminada del dispositivo receptor.
          </p>
          <p>
            Factores habituales que influyen en la representación:
          </p>
          <dl className="faq-list">
            <dt>Diferencias entre Android, iOS y Windows</dt>
            <dd>
              Cada sistema operativo incluye sus propias tipografías de respaldo para mostrar símbolos matemáticos y caracteres poco frecuentes. Por ello, una letra cursiva puede verse ligeramente más estilizada en un iPhone que en una computadora de escritorio.
            </dd>
            <dt>Filtros específicos de cada aplicación</dt>
            <dd>
              Ciertas aplicaciones de mensajería o videojuegos restringen determinados caracteres especiales en los nombres de usuario para prevenir fraudes visuales o textos que alteren la interfaz.
            </dd>
            <dt>Símbolos en recuadros o signos de interrogación</dt>
            <dd>
              Si un dispositivo muy antiguo no reconoce un carácter específico, mostrará un rectángulo vacío o un signo de interrogación. Si esto ocurre, te recomendamos elegir una variante con compatibilidad alta como las versalitas o el texto espaciado.
            </dd>
          </dl>
        </section>

        {/* Section 11: ¿Son fuentes aesthetic reales? */}
        <section className="prose-card">
          <h2>¿Son fuentes aesthetic reales?</h2>
          <p>
            Técnicamente no son fuentes descargables en el sentido tipográfico tradicional. Una fuente de computadora (como un archivo TTF u OTF) es un programa informático que le indica a tu procesador de textos cómo dibujar letras convencionales sobre la pantalla o el papel.
          </p>
          <p>
            En cambio, un generador online de copiar y pegar trabaja con el estándar <strong>Unicode</strong>. Sustituye las letras del teclado por otros glifos existentes en el catálogo mundial de caracteres, principalmente procedentes de bloques matemáticos y de símbolos especiales.
          </p>
          <p>
            Esta distinción explica su gran ventaja: no necesitas que la persona que visita tu perfil tenga instalada ninguna fuente especial para que pueda ver el texto con estilo. Sin embargo, si necesitas diseñar un logotipo profesional, maquetar un libro o imprimir carteles publicitarios, te recomendamos recurrir a fuentes tipográficas vectoriales en programas de diseño gráfico.
          </p>
        </section>

        {/* Section 12: Preguntas frecuentes */}
        <section className="prose-card">
          <h2>Preguntas frecuentes sobre letras aesthetic</h2>
          <dl className="faq-list">
            <dt>¿Cómo hacer letras aesthetic para copiar y pegar?</dt>
            <dd>
              Escribe tu nombre o frase en la caja del generador, explora los estilos suaves, vaporwave o con destellos y haz clic en el botón Copiar en tu favorito. Luego pégalo en tu biografía o publicación.
            </dd>

            <dt>¿Qué significa texto aesthetic?</dt>
            <dd>
              Es una etiqueta de estilo visual que define textos limpios, suaves, ordenados o nostálgicos. No es una tipografía formal de imprenta, sino una combinación armónica de caracteres Unicode y símbolos decorativos.
            </dd>

            <dt>¿Puedo usar letras aesthetic en Instagram y TikTok?</dt>
            <dd>
              Sí. Puedes utilizarlas en el campo de nombre visible, en la descripción de tu biografía, en comentarios y en descripciones de publicaciones.
            </dd>

            <dt>¿Puedo convertir mi nombre en letras aesthetic?</dt>
            <dd>
              Sí. Los nombres y apodos cortos son ideales porque permiten apreciar claramente los caracteres decorativos sin sobrecargar la pantalla ni dificultar la lectura.
            </dd>

            <dt>¿Por qué algunas letras con tilde o la letra ñ no cambian de estilo?</dt>
            <dd>
              Los bloques matemáticos de Unicode no contienen variantes estilizadas para todas las letras con acento o para la ñ del español. Nuestro conversor conserva la letra original en lugar de eliminarla o sustituirla por un signo incorrecto.
            </dd>

            <dt>¿Las letras aesthetic funcionan en todas las aplicaciones móviles?</dt>
            <dd>
              La mayoría de dispositivos y aplicaciones modernas muestran estos caracteres sin dificultad. Si una aplicación antigua no tiene la fuente del sistema correspondiente, podría mostrar un rectángulo de reemplazo.
            </dd>

            <dt>¿Necesito instalar o descargar una fuente?</dt>
            <dd>
              No. Los estilos generados son caracteres Unicode que se copian y pegan como texto ordinario, sin necesidad de instalar archivos TTF o aplicaciones adicionales.
            </dd>
          </dl>
        </section>

        {/* Section 13: Crea tu propio texto aesthetic */}
        <section className="prose-card highlight-card">
          <h2>Crea tu propio texto aesthetic</h2>
          <p>
            Dar un toque especial a tus textos digitales es una manera sencilla de reflejar tu personalidad en redes sociales y notas personales. Elige combinaciones armónicas, cuida la legibilidad de tus mensajes y experimenta con diferentes estilos hasta encontrar el que mejor exprese tu identidad.
          </p>
          <p className="cta-motto">
            <strong>Escribe tu frase en la herramienta superior y copia tus letras aesthetic favoritas ahora mismo.</strong>
          </p>
        </section>

        {/* Section 14: Explora más estilos tipográficos */}
        <section className="prose-card">
          <h2>Explora más estilos tipográficos</h2>
          <p>
            Descubre otras colecciones de letras especiales y herramientas complementarias disponibles en LetrasBonitas:
          </p>
          <div className="family-cards-grid">
            <div className="family-card">
              <h3>Conversor de Letras</h3>
              <p>Herramienta principal con cientos de estilos tipográficos para transformar cualquier texto.</p>
              <Link href="/conversor-de-letras/" className="btn btn--secondary">Ir al Conversor</Link>
            </div>
            <div className="family-card">
              <h3>Letras Cursivas</h3>
              <p>Estilos caligráficos, firmas digitales y letras manuscritas elegantes.</p>
              <Link href="/letras-cursivas/" className="btn btn--secondary">Ver Cursivas</Link>
            </div>
            <div className="family-card">
              <h3>Letras Góticas</h3>
              <p>Fuentes medievales oscuras y llamativas inspiradas en estilos Fraktur y blackletter.</p>
              <Link href="/letras-goticas/" className="btn btn--secondary">Ver Góticas</Link>
            </div>
            <div className="family-card">
              <h3>Símbolos Aesthetic</h3>
              <p>Colección de lunas, estrellas, corazones y destellos para complementar tus textos.</p>
              <Link href="/simbolos/aesthetic/" className="btn btn--secondary">Ver Símbolos</Link>
            </div>
            <div className="family-card">
              <h3>Letras para Instagram</h3>
              <p>Tipografías y formatos preparados específicamente para biografías y publicaciones de Instagram.</p>
              <Link href="/letras-para-instagram/" className="btn btn--secondary">Ver Instagram</Link>
            </div>
            <div className="family-card">
              <h3>Letras Burbuja</h3>
              <p>Caracteres circulares limpios y llamativos ideales para nombres juveniles y nicks.</p>
              <Link href="/letras-burbuja/" className="btn btn--secondary">Ver Burbujas</Link>
            </div>
            <div className="family-card">
              <h3>Letras Negritas</h3>
              <p>Texto con grosor tipográfico destacado para resaltar títulos y mensajes importantes.</p>
              <Link href="/letras-negritas/" className="btn btn--secondary">Ver Negritas</Link>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}
