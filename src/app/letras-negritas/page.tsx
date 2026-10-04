import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HubFontGenerator } from "@/components/font-generator/HubFontGenerator";

export function generateMetadata(): Metadata {
  return {
    title: "Letras Negritas para Copiar y Pegar - Texto en Negrita",
    description:
      "Convierte tu texto en negritas Unicode para copiar y pegar en WhatsApp, Instagram y Facebook. Gratis.",
    alternates: {
      canonical: "/letras-negritas/",
    },
    openGraph: {
      title: "Letras Negritas para Copiar y Pegar - Texto en Negrita",
      description:
        "Convierte tu texto en negritas Unicode para copiar y pegar en WhatsApp, Instagram y Facebook. Gratis.",
      locale: "es",
      type: "website",
      url: "/letras-negritas/",
    },
    twitter: {
      card: "summary",
      title: "Letras Negritas para Copiar y Pegar - Texto en Negrita",
      description:
        "Convierte tu texto en negritas Unicode para copiar y pegar en WhatsApp, Instagram y Facebook. Gratis.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LetrasNegritasPage() {
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
        "@id": "https://letrasbonits.com/letras-negritas/#webpage",
        url: "https://letrasbonits.com/letras-negritas/",
        name: "Letras Negritas para Copiar y Pegar - Texto en Negrita",
        description:
          "Convierte tu texto en negritas Unicode para copiar y pegar en WhatsApp, Instagram y Facebook. Gratis.",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/letras-negritas/#breadcrumb",
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
            name: "Letras Negritas",
            item: "https://letrasbonits.com/letras-negritas/",
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": "https://letrasbonits.com/letras-negritas/#app",
        name: "Generador de Letras Negritas",
        url: "https://letrasbonits.com/letras-negritas/",
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
        "@id": "https://letrasbonits.com/letras-negritas/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo poner letras negritas para copiar y pegar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Escribe tu palabra o frase en el generador, compara los estilos de negrita sans-serif, serif o cursiva y pulsa Copiar. Después pega el resultado directamente en tu biografía, mensaje o publicación.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo convertir mi nombre a negrita?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Los nombres y apodos son ideales para este estilo porque el peso tipográfico reforzado los hace resaltar con claridad en perfiles y listas de contactos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Las letras Unicode en negrita son una fuente descargable?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Son caracteres específicos del catálogo internacional Unicode con trazos reforzados. No necesitas descargar archivos de fuentes ni instalar aplicaciones externas para utilizarlas.",
            },
          },
          {
            "@type": "Question",
            name: "¿Es lo mismo que poner texto entre asteriscos en WhatsApp?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Los asteriscos (*texto*) son la sintaxis nativa de WhatsApp y solo funcionan dentro del cuerpo de los mensajes. Las letras negritas Unicode son caracteres independientes y funcionan también en nombres de perfil, estados y biografías.",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué algunas letras con tilde o la letra ñ no cambian a negrita matemática?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Unicode no diseñó variantes matemáticas en negrita para caracteres acentuados ni para la letra ñ del español. Nuestro conversor conserva la letra original para mantener la ortografía correcta de tus palabras.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo copiar números en negrita?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Los dígitos del 0 al 9 cuentan con versiones completas en negrita serif y negrita sans-serif dentro de los caracteres matemáticos de Unicode.",
            },
          },
          {
            "@type": "Question",
            name: "¿Funcionan estas letras en todas las aplicaciones móviles?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, en la gran mayoría de plataformas actuales como Instagram, Facebook, TikTok, X (Twitter), WhatsApp y Discord en dispositivos Android, iPhone y computadoras.",
            },
          },
          {
            "@type": "Question",
            name: "¿Necesito instalar alguna fuente o programa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. El generador funciona directamente en tu navegador y genera texto plano editable listo para copiar y pegar de forma gratuita.",
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

      {/* ── Normal -> Bold Typography Transformation Hero ── */}
      <header className="hero-saas hero-saas--compact hero-saas--negritas">
        <div className="hero-saas__watermark-left" aria-hidden="true">
          𝐁 𝐎 𝐋 𝐃
        </div>
        <div className="hero-saas__watermark-right" aria-hidden="true">
          𝗕𝗢𝗟𝗗
        </div>
        <div className="hero-saas__content">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Letras Negritas" },
            ]}
          />
          <span className="hero-saas__badge hero-saas__badge--bold">
            BOLD · UNICODE · COPIAR
          </span>
          <h1 className="hero-saas__title">
            Letras <span className="gradient-text-amber">Negritas</span> para Copiar y Pegar
          </h1>
          <p className="hero-saas__lead">
            Convierte palabras, nombres y textos cortos en estilos de negrita Unicode con máximo grosor visual. Compara variantes sans-serif, con serifa y cursivas negritas listas para copiar y pegar al instante.
          </p>

          {/* Transformation Centerpiece */}
          <div className="hero-bold-transform-box" aria-label="Demostración visual de conversión a negrita">
            <div className="hero-bold-transform-item">
              <span className="hero-bold-transform-label">Texto normal</span>
              <span className="hero-bold-transform-val">Letras Bonitas</span>
            </div>
            <div className="hero-bold-transform-arrow" aria-hidden="true">
              <span>↓</span>
              <span className="hero-bold-transform-arrow__badge">convertir</span>
            </div>
            <div className="hero-bold-transform-item">
              <span className="hero-bold-transform-label">Texto en negrita</span>
              <span className="hero-bold-transform-val hero-bold-transform-val--bold">𝐋𝐞𝐭𝐫𝐚𝐬 𝐁𝐨𝐧𝐢𝐭𝐚𝐬</span>
            </div>
          </div>

          {/* Weight & Style Showcase */}
          <div className="hero-bold-showcase" aria-label="Variantes tipográficas de negrita para la palabra Luna">
            <div className="hero-bold-pill">
              <span className="hero-bold-pill__label">Serif:</span>
              <strong>𝐋𝐮𝐧𝐚</strong>
            </div>
            <div className="hero-bold-pill">
              <span className="hero-bold-pill__label">Sans:</span>
              <strong>𝗟𝘂𝗻𝗮</strong>
            </div>
            <div className="hero-bold-pill">
              <span className="hero-bold-pill__label">Cursiva:</span>
              <strong>𝑳𝒖𝒏𝒂</strong>
            </div>
            <div className="hero-bold-pill">
              <span className="hero-bold-pill__label">Sans Cursiva:</span>
              <strong>𝙇𝙪𝙣𝙖</strong>
            </div>
            <div className="hero-bold-pill">
              <span className="hero-bold-pill__label">Números:</span>
              <strong>𝟐𝟎𝟐𝟔</strong>
            </div>
          </div>

          <div className="hero-bold-cue" aria-hidden="true">
            <span>Escribe tu texto</span>
            <span>↓</span>
          </div>
        </div>
      </header>

      {/* ── Interactive Hub Font Generator ── */}
      <HubFontGenerator
        storagePrefix="negritas"
        defaultCategory="bold"
        defaultExample="Luna"
        searchPlaceholder="Buscar estilos en negrita (sans, serif, cursiva negrita)..."
        quickExamples={[
          "Luna",
          "Sofía",
          "Mi nombre",
          "Hola mundo",
          "IMPORTANTE",
          "Nuevo",
          "2026",
          "Oferta",
        ]}
        useCases={[
          { id: "titulo", label: "Titular", icon: "📌", text: "𝗜𝗠𝗣𝗢𝗥𝗧𝗔𝗡𝗧𝗘" },
          { id: "whatsapp", label: "WhatsApp", icon: "💬", text: "𝐍𝐨𝐦𝐛𝐫𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩" },
          { id: "instagram", label: "Bio Insta", icon: "✨", text: "𝐄𝐦𝐩𝐫𝐞𝐧𝐝𝐞𝐝𝐨𝐫 𝐃𝐢𝐠𝐢𝐭𝐚𝐥" },
          { id: "anuncio", label: "Anuncio FB", icon: "📢", text: "𝗔𝗧𝗘𝗡𝗖𝗜𝗢́𝗡 𝗚𝗥𝗨𝗣𝗢" },
          { id: "oferta", label: "Oferta", icon: "🏷️", text: "𝐎𝐟𝐞𝐫𝐭𝐚 𝐄𝐬𝐩𝐞𝐜𝐢𝐚𝐥" },
        ]}
      />

      {/* ── Comprehensive Editorial Guide ── */}
      <article className="prose-section" aria-label="Guía completa sobre letras negritas para copiar y pegar">
        
        {/* Section 1: ¿Qué son las letras negritas para copiar y pegar? */}
        <section className="prose-card">
          <h2>¿Qué son las letras negritas para copiar y pegar?</h2>
          <p>
            Las <strong>letras negritas para copiar y pegar</strong> son caracteres especiales pertenecientes al estándar internacional Unicode (concretamente a los bloques de símbolos alfanuméricos matemáticos) que presentan un grosor de trazo reforzado en comparación con las letras básicas del teclado.
          </p>
          <p>
            Cuando aplicas negrita en un procesador de textos como Microsoft Word o mediante código HTML con la etiqueta <code>&lt;strong&gt;</code>, el texto sigue estando compuesto por letras latinas estándar; es el software el que altera su visualización gráfica en pantalla.
          </p>
          <p>
            En cambio, un conversor de negritas para copiar y pegar sustituye cada letra por un carácter Unicode independiente:
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Texto normal:</span> <strong>Letras Bonitas</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Negrita con serifa:</span> <strong>𝐋𝐞𝐭𝐫𝐚𝐬 𝐁𝐨𝐧𝐢𝐭𝐚𝐬</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Negrita sin serifa:</span> <strong>𝗟𝗲𝘁𝗿𝗮𝘀 𝗕𝗼𝗻𝗶𝘁𝗮𝘀</strong>
            </div>
          </div>
          <p className="mt-3">
            Gracias a esta diferencia técnica, el texto resultante conserva su peso visual reforzado al pegarlo en redes sociales, aplicaciones de mensajería y formularios web que no disponen de barras de herramientas de edición.
          </p>
        </section>

        {/* Section 2: Cómo convertir texto a negrita */}
        <section className="prose-card">
          <h2>Cómo convertir texto a negrita para copiar y pegar</h2>
          <p>
            El proceso para generar letras en negrita con nuestra herramienta es rápido y no requiere registros:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-700">
            <li>
              <strong>Escribe o pega tu texto:</strong> Introduce en el generador superior la palabra, nombre o titular que deseas resaltar.
            </li>
            <li>
              <strong>Compara los estilos disponibles:</strong> Observa las variantes en negrita sans-serif, negrita clásica serif, cursiva en negrita y combinaciones con marcos.
            </li>
            <li>
              <strong>Selecciona la variante adecuada:</strong> La negrita sans-serif resulta moderna y limpia para redes sociales; la negrita con serifa aporta un carácter formal y editorial.
            </li>
            <li>
              <strong>Pulsa el botón Copiar:</strong> El texto seleccionado se guardará inmediatamente en tu portapapeles.
            </li>
            <li>
              <strong>Pega y verifica:</strong> Abre la aplicación o perfil de destino, pega el texto y confirma que se visualice correctamente en tu pantalla.
            </li>
          </ol>
        </section>

        {/* Section 3: Tipos de letras negritas que puedes probar */}
        <section className="prose-card">
          <h2>Tipos de letras negritas que puedes probar</h2>
          <p>
            No todas las negritas transmiten la misma personalidad. Nuestro generador incluye diferentes familias tipográficas con peso reforzado:
          </p>

          <h3>Negrita con serifa (Mathematical Bold Serif)</h3>
          <p>
            Presenta pequeños remates o terminaciones ornamentales en los extremos de cada trazo. Recuerda a la tipografía clásica de imprenta, libros y diarios tradicionales. Aporta seriedad, elegancia y autoridad a nombres o títulos.
          </p>
          <p>
            Ejemplo: <code>𝐋𝐮𝐧𝐚</code> o <code>𝐎𝐟𝐞𝐫𝐭𝐚 𝐄𝐬𝐩𝐞𝐜𝐢𝐚𝐥</code>
          </p>

          <h3>Negrita sin serifa (Mathematical Bold Sans-Serif)</h3>
          <p>
            Líneas geométricas limpias y uniformes sin remates adicionales. Es el estilo preferido en interfaces digitales, aplicaciones móviles y titulares modernos por su nitidez visual en pantallas de alta resolución.
          </p>
          <p>
            Ejemplo: <code>𝗟𝘂𝗻𝗮</code> o <code>𝗜𝗠𝗣𝗢𝗥𝗧𝗔𝗡𝗧𝗘</code>
          </p>

          <h3>Negrita cursiva (Bold Italic)</h3>
          <p>
            Combina el grosor tipográfico con una inclinación dinámica hacia la derecha. Funciona muy bien para firmas artísticas, llamadas a la acción en publicaciones o estados de ánimo expresivos.
          </p>
          <p>
            Ejemplo en serifa: <code>𝑳𝒖𝒏𝒂</code> | Ejemplo sans-serif: <code>𝙇𝙪𝙣𝙖</code>
          </p>

          <h3>Números en negrita</h3>
          <p>
            Los dígitos numéricos del 0 al 9 disponen de equivalentes completos en negrita matemática, lo que permite destacar fechas, precios, porcentajes y cifras importantes:
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Serif:</span> <strong>𝟎 𝟏 𝟐 𝟑 𝟒 𝟓 𝟔 𝟕 𝟖 𝟗</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Sans:</span> <strong>𝟬 𝟭 𝟮 𝟯 𝟰 𝟱 𝟲 𝟳 𝟴 𝟵</strong>
            </div>
          </div>
        </section>

        {/* Section 4: Ejemplos de letras negritas para copiar */}
        <section className="prose-card">
          <h2>Ejemplos de letras negritas para copiar y pegar</h2>
          <p>
            Inspírate con estas combinaciones frecuentes ya transformadas y probadas con nuestro conversor:
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Luna:</span> <strong>𝐋𝐮𝐧𝐚</strong> | <strong>𝗟𝘂𝗻𝗮</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Sofía:</span> <strong>𝐒𝐨𝐟í𝐚</strong> | <strong>𝗦𝗼𝗳í𝐚</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Mi nombre:</span> <strong>𝐌𝐢 𝐧𝐨𝐦𝐛𝐫𝐞</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Hola mundo:</span> <strong>𝗛𝗼𝗹𝗮 𝗺𝘂𝗻𝗱𝗼</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Importante:</span> <strong>𝗜𝗠𝗣𝗢𝗥𝗧𝗔𝗡𝗧𝗘</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Nuevo:</span> <strong>𝐍𝐮𝐞𝐯𝐨</strong> | <strong>𝗡𝘂𝗲𝘃𝗼</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Año 2026:</span> <strong>𝟐𝟎𝟐𝟔</strong> | <strong>𝟮𝟬𝟮𝟲</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Oferta:</span> <strong>𝐎𝐟𝐞𝐫𝐭𝐚</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>España:</span> <strong>𝐄𝐬𝐩𝐚ñ𝐚</strong> | <strong>𝗘𝘀𝗽𝗮ñ𝗮</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Corazón:</span> <strong>𝐜𝐨𝐫𝐚𝐳ó𝐧</strong> | <strong>𝗰𝗼𝗿𝗮𝘇ó𝗻</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Atención:</span> <strong>📢 𝗔𝗧𝗘𝗡𝗖𝗜𝗢́𝗡</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Destacado:</span> <strong>✨ 𝗟𝘂𝗻𝗮 ✨</strong>
            </div>
          </div>
          <p className="mt-3">
            Para convertir tus propias frases personalizadas, ingresa el texto en la caja interactiva superior y pulsa Copiar.
          </p>
        </section>

        {/* Section 5: Letras negritas para nombres y nicks */}
        <section className="prose-card">
          <h2>Letras negritas para nombres y nicks</h2>
          <p>
            Los nombres personales y los apodos en redes sociales representan una de las principales aplicaciones de las letras en negrita. Al contar con pocas palabras, el trazo reforzado individualiza el perfil sin sobrecargar la interfaz:
          </p>
          <ul>
            <li><strong>Carlos:</strong> <code>𝐂𝐚𝐫𝐥𝐨𝐬</code> o <code>𝗖𝗮𝗿𝗹𝗼𝘀</code></li>
            <li><strong>Valentina:</strong> <code>𝐕𝐚𝐥𝐞𝐧𝐭𝐢𝐧𝐚</code> o <code>𝗩𝗮𝗹𝗲𝗻𝘁𝗶𝗻𝗮</code></li>
            <li><strong>Daniel:</strong> <code>𝐃𝐚𝐧𝐢𝐞𝐥</code> o <code>𝑫𝒂𝒏𝒊𝒆𝒍</code></li>
            <li><strong>Alex:</strong> <code>𝐀𝐥𝐞𝐱</code> o <code>𝗔𝗹𝗲𝘅</code></li>
          </ul>
          <p className="mt-3">
            Recomendamos utilizar negrita para el nombre visible de tu cuenta. En cambio, para el nombre de usuario único con arroba (@usuario), la mayoría de plataformas exigen caracteres alfanuméricos básicos sin formato.
          </p>
        </section>

        {/* Section 6: Letras negritas para bios y perfiles */}
        <section className="prose-card">
          <h2>Letras negritas para bios y perfiles</h2>
          <p>
            Una biografía efectiva necesita jerarquía visual para que los visitantes comprendan rápidamente a qué te dedicas o qué ofreces:
          </p>
          <ul>
            <li>
              <strong>Destaca tu profesión o propuesta de valor:</strong> Frases iniciales como <code>𝐄𝐦𝐩𝐫𝐞𝐧𝐝𝐞𝐝𝐨𝐫 𝐃𝐢𝐠𝐢𝐭𝐚𝐥</code> o <code>𝗗𝗶𝘀𝗲ñ𝗮𝗱𝗼𝗿 𝗨𝗫</code> guían la mirada de inmediato.
            </li>
            <li>
              <strong>Encabezados de sección:</strong> Puedes emplear negrita para organizar tus intereses: <code>𝗙𝗼𝘁𝗼𝗴𝗿𝗮𝗳í𝗮 | 𝗩𝗶𝗮𝗷𝗲𝘀 | 𝗖𝗮𝗳é</code>.
            </li>
            <li>
              <strong>Llamadas a la acción claras:</strong> Expresiones como <code>👇 𝗖𝗼𝗻𝘀𝗶𝗴𝘂𝗲 𝘁𝘂 𝗴𝘂í𝗮 𝗮𝗾𝘂í</code> consiguen mayor tasa de interacción antes del enlace externo.
            </li>
          </ul>
        </section>

        {/* Section 7: Letras negritas para redes sociales */}
        <section className="prose-card">
          <h2>Letras negritas para redes sociales</h2>
          <p>
            El flujo constante de publicaciones en las aplicaciones sociales hace que los usuarios realicen desplazamientos rápidos en sus pantallas. Utilizar negrita en la primera línea o en palabras clave funciona como un freno visual que despierta curiosidad y retiene la atención.
          </p>
          <p>
            Casos de uso habituales:
          </p>
          <ul>
            <li>Titulares iniciales (ganchos) en hilos de X (Twitter) o publicaciones de LinkedIn.</li>
            <li>Comentarios destacados en canales de YouTube o publicaciones virales de Instagram.</li>
            <li>Encabezados de comunicados o anuncios en grupos comunitarios de Facebook.</li>
          </ul>
        </section>

        {/* Section 8: Texto Unicode en negrita frente a formato negrita tradicional */}
        <section className="prose-card">
          <h2>Texto Unicode en negrita frente a formato negrita tradicional</h2>
          <p>
            Comprender la diferencia técnica entre ambos enfoques te permitirá elegir la mejor opción según el entorno donde trabajes:
          </p>
          <div className="prose-table-container">
            <table className="prose-table">
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th>Negrita Unicode (Copiar y Pegar)</th>
                  <th>Formato Negrita Tradicional (HTML / CSS / Word)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Mecanismo</strong></td>
                  <td>Caracteres independientes con forma gruesa (bloque matemático)</td>
                  <td>Mismo carácter latino dibujado con propiedad <code>font-weight: bold</code></td>
                </tr>
                <tr>
                  <td><strong>Disponibilidad</strong></td>
                  <td>Funciona en campos de texto plano (bios, nicks, comentarios)</td>
                  <td>Requiere editor de texto enriquecido o soporte de etiquetas</td>
                </tr>
                <tr>
                  <td><strong>Copia y pega</strong></td>
                  <td>Mantiene su peso visual al transferirse entre aplicaciones</td>
                  <td>Pierde el formato si se pega en una caja de texto simple</td>
                </tr>
                <tr>
                  <td><strong>Lectores de pantalla</strong></td>
                  <td>Pueden pronunciar cada carácter como símbolo matemático especial</td>
                  <td>Interpretan la semántica natural de énfasis o importancia</td>
                </tr>
                <tr>
                  <td><strong>Uso idóneo</strong></td>
                  <td>Titulares cortos, nombres y palabras destacadas en redes</td>
                  <td>Párrafos completos, documentos formales, páginas web y libros</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Para perfiles sociales y títulos breves, la negrita Unicode es práctica e insustituible. Para redactar artículos extensos o páginas web accesibles, el formato nativo mediante etiquetas semánticas es siempre la elección correcta.
          </p>
        </section>

        {/* Section 9: Letras negritas para WhatsApp */}
        <section className="prose-card">
          <h2>Letras negritas para WhatsApp: asteriscos frente a texto Unicode</h2>
          <p>
            WhatsApp dispone de dos formas distintas para mostrar texto en negrita, y cada una tiene su ámbito específico:
          </p>
          <dl className="faq-list">
            <dt>Formato nativo de WhatsApp (*palabra*)</dt>
            <dd>
              Dentro de los chats individuales o de grupo, escribir una palabra entre asteriscos (por ejemplo: <code>*importante*</code>) aplica negrita nativa de forma limpia. Esta sintaxis es la recomendada para mensajes largos porque mantiene la accesibilidad y el peso tipográfico estándar de la aplicación.
            </dd>
            <dt>Negrita Unicode para campos sin formato nativo</dt>
            <dd>
              Los asteriscos no funcionan en tu nombre de perfil visible de WhatsApp ni en la línea de estado (&quot;Info&quot;). Para esos campos, nuestro generador de negritas Unicode te permite colocar tu nombre o frase descriptiva con trazo grueso permanente.
            </dd>
          </dl>
          <p className="mt-3">
            Si deseas profundizar en estilos y trucos específicos para esta plataforma de mensajería, consulta nuestra guía dedicada de <Link href="/letras-para-whatsapp/" className="text-brand font-semibold underline">letras para WhatsApp</Link>.
          </p>
        </section>

        {/* Section 10: Letras negritas para Instagram */}
        <section className="prose-card">
          <h2>Letras negritas para Instagram</h2>
          <p>
            Instagram no ofrece botones de formato de texto en biografías, descripciones de publicaciones ni comentarios. Por ello, las letras en negrita generadas con Unicode son la alternativa más utilizada por creadores de contenido, marcas y negocios.
          </p>
          <p>
            Puedes aplicarlas en el campo de nombre visible de tu cuenta, en los primeros renglones de tus pies de foto para detener el scroll y en respuestas destacadas a seguidores. Para explorar formatos y combinaciones optimizadas para esta red, visita nuestra sección de <Link href="/letras-para-instagram/" className="text-brand font-semibold underline">letras para Instagram</Link>.
          </p>
        </section>

        {/* Section 11: Letras negritas para Facebook */}
        <section className="prose-card">
          <h2>Letras negritas para Facebook</h2>
          <p>
            En los perfiles personales y páginas de Facebook no existe una herramienta directa para dar formato en negrita a las publicaciones habituales del muro. Copiar titulares en negrita sans-serif desde nuestro conversor ayuda a estructurar anuncios en grupos de compraventa, publicaciones comunitarias y eventos. Para más opciones, visita nuestra página de <Link href="/letras-para-facebook/" className="text-brand font-semibold underline">letras para Facebook</Link>.
          </p>
        </section>

        {/* Section 12: ¿Qué pasa con la ñ y las vocales con tilde? */}
        <section className="prose-card">
          <h2>¿Qué pasa con la ñ y las vocales con tilde en español?</h2>
          <p>
            En el idioma español utilizamos caracteres esenciales que no forman parte del alfabeto latino básico en inglés, tales como la <code>ñ</code>, las vocales acentuadas (<code>á, é, í, ó, ú</code>) y la diéresis (<code>ü</code>).
          </p>
          <p>
            El consorcio Unicode definió los alfabetos matemáticos en negrita para fórmulas científicas, incluyendo exclusivamente letras latinas de la A a la Z y dígitos del 0 al 9. Por consiguiente, no existen caracteres matemáticos precompuestos en negrita para la <code>ñ</code> ni para las vocales con tilde.
          </p>
          <p>
            Frente a esta limitación técnica, nuestro conversor aplica una regla de calidad estricta:
          </p>
          <ul>
            <li>
              <strong>Preservación ortográfica:</strong> Conservamos la letra acentuada o la <code>ñ</code> original en lugar de eliminarla o sustituirla por caracteres rotos.
            </li>
            <li>
              <strong>Comportamiento en palabras reales:</strong> Al transformar <code>Sofía</code>, <code>España</code>, <code>corazón</code> o <code>pingüino</code>, las letras básicas adoptan la negrita matemática mientras que los caracteres acentuados permanecen en su forma correcta (<code>𝐒𝐨𝐟í𝐚</code>, <code>𝐄𝐬𝐩𝐚ñ𝐚</code>, <code>𝐜𝐨𝐫𝐚𝐳ó𝐧</code>, <code>𝐩𝐢𝐧𝐠ü𝐢𝐧𝐨</code>).
            </li>
          </ul>
        </section>

        {/* Section 13: ¿Por qué algunas letras no cambian? */}
        <section className="prose-card">
          <h2>¿Por qué algunas letras no cambian?</h2>
          <p>
            Signos de puntuación como comas, puntos, signos de exclamación o emojis no tienen equivalentes en los alfabetos matemáticos de Unicode. El generador los mantiene intactos para que tus frases no pierdan sentido ni expresividad.
          </p>
        </section>

        {/* Section 14: ¿Por qué la negrita puede verse diferente después de pegarla? */}
        <section className="prose-card">
          <h2>¿Por qué la negrita puede verse diferente después de pegarla?</h2>
          <p>
            Aunque el código digital del carácter que copias es el mismo en cualquier parte del mundo, el dibujo exacto de las letras depende de la tipografía predeterminada del sistema operativo del receptor:
          </p>
          <dl className="faq-list">
            <dt>Diferencias entre iOS, Android y Windows</dt>
            <dd>
              Los dispositivos de Apple utilizan San Francisco y New York como fuentes de sistema, mientras que Android utiliza Roboto y Noto Sans. Esto produce sutiles variaciones en el grosor o espaciado de las letras matemáticas.
            </dd>
            <dt>Compatibilidad en dispositivos antiguos</dt>
            <dd>
              Teléfonos móviles lanzados hace más de diez años con versiones desactualizadas de su sistema operativo pueden carecer de fuentes con soporte para caracteres matemáticos suplementarios, mostrando pequeños rectángulos vacíos. En dispositivos actuales la compatibilidad supera el 99%.
            </dd>
          </dl>
        </section>

        {/* Section 15: Cuándo usar negritas y cuándo mantener texto normal */}
        <section className="prose-card">
          <h2>Cuándo usar negritas y cuándo mantener texto normal</h2>
          <p>
            Para mantener un perfil profesional y agradable para tus lectores, te recomendamos seguir estas pautas de diseño y accesibilidad:
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <span className="step-card__number">1</span>
              <h3>Aplica negrita con moderación</h3>
              <p>
                Si todo un párrafo está en negrita, nada resalta. Reserva el texto grueso para titulares, palabras clave, nombres o avisos importantes.
              </p>
            </div>
            <div className="step-card">
              <span className="step-card__number">2</span>
              <h3>Mantén enlaces y datos clave legibles</h3>
              <p>
                Direcciones de correo electrónico, números de teléfono y URLs deben escribirse siempre en texto normal para evitar problemas de reconocimiento en navegadores y lectores de pantalla.
              </p>
            </div>
            <div className="step-card">
              <span className="step-card__number">3</span>
              <h3>Respeta la accesibilidad digital</h3>
              <p>
                Las personas que utilizan lectores de pantalla o herramientas de asistencia auditiva pueden escuchar la pronunciación de cada letra matemática por separado. Limitar la negrita Unicode a textos cortos garantiza una navegación inclusiva para todos.
              </p>
            </div>
          </div>
        </section>

        {/* Section 16: Preguntas frecuentes */}
        <section className="prose-card">
          <h2>Preguntas frecuentes sobre letras negritas</h2>
          <dl className="faq-list">
            <dt>¿Cómo poner letras negritas para copiar y pegar?</dt>
            <dd>
              Escribe tu palabra o frase en el generador, compara los estilos de negrita sans-serif, serif o cursiva y pulsa Copiar. Después pega el resultado directamente en tu biografía, mensaje o publicación.
            </dd>

            <dt>¿Puedo convertir mi nombre a negrita?</dt>
            <dd>
              Sí. Los nombres y apodos son ideales para este estilo porque el peso tipográfico reforzado los hace resaltar con claridad en perfiles y listas de contactos.
            </dd>

            <dt>¿Las letras Unicode en negrita son una fuente descargable?</dt>
            <dd>
              No. Son caracteres específicos del catálogo internacional Unicode con trazos reforzados. No necesitas descargar archivos de fuentes ni instalar aplicaciones externas para utilizarlas.
            </dd>

            <dt>¿Es lo mismo que poner texto entre asteriscos en WhatsApp?</dt>
            <dd>
              No. Los asteriscos (*texto*) son la sintaxis nativa de WhatsApp y solo funcionan dentro del cuerpo de los mensajes. Las letras negritas Unicode son caracteres independientes y funcionan también en nombres de perfil, estados y biografías.
            </dd>

            <dt>¿Por qué algunas letras con tilde o la letra ñ no cambian a negrita matemática?</dt>
            <dd>
              Unicode no diseñó variantes matemáticas en negrita para caracteres acentuados ni para la letra ñ del español. Nuestro conversor conserva la letra original para mantener la ortografía correcta de tus palabras.
            </dd>

            <dt>¿Puedo copiar números en negrita?</dt>
            <dd>
              Sí. Los dígitos del 0 al 9 cuentan con versiones completas en negrita serif y negrita sans-serif dentro de los caracteres matemáticos de Unicode.
            </dd>

            <dt>¿Funcionan estas letras en todas las aplicaciones móviles?</dt>
            <dd>
              Sí, en la gran mayoría de plataformas actuales como Instagram, Facebook, TikTok, X (Twitter), WhatsApp y Discord en dispositivos Android, iPhone y computadoras.
            </dd>

            <dt>¿Necesito instalar alguna fuente o programa?</dt>
            <dd>
              No. El generador funciona directamente en tu navegador y genera texto plano editable listo para copiar y pegar de forma gratuita.
            </dd>
          </dl>
        </section>

        {/* Section 17: Convierte tu texto a negrita */}
        <section className="prose-card highlight-card">
          <h2>Convierte tu texto a negrita</h2>
          <p>
            Resaltar tus palabras clave y nombres es una forma efectiva de captar miradas y mejorar la estructura de tus publicaciones digitales. Explora los diferentes grosores en la herramienta superior, copia tu versión favorita y dale presencia a tus mensajes hoy mismo.
          </p>
          <p className="cta-motto">
            <strong>Escribe tu texto en el generador y copia tus letras negritas al instante.</strong>
          </p>
        </section>

        {/* Section 18: Explora más estilos tipográficos */}
        <section className="prose-card">
          <h2>Explora más estilos tipográficos</h2>
          <p>
            Combina tus letras en negrita con otras colecciones y herramientas especializadas de LetrasBonitas:
          </p>
          <div className="family-cards-grid">
            <div className="family-card">
              <h3>Conversor de Letras</h3>
              <p>Herramienta principal con cientos de estilos tipográficos para transformar cualquier texto.</p>
              <Link href="/conversor-de-letras/" className="btn btn--secondary">Ir al Conversor</Link>
            </div>
            <div className="family-card">
              <h3>Letras Cursivas</h3>
              <p>Estilos caligráficos, manuscritos y firmas digitales elegantes.</p>
              <Link href="/letras-cursivas/" className="btn btn--secondary">Ver Cursivas</Link>
            </div>
            <div className="family-card">
              <h3>Letras Góticas</h3>
              <p>Fuentes medievales oscuras y llamativas con estilo Fraktur clásico.</p>
              <Link href="/letras-goticas/" className="btn btn--secondary">Ver Góticas</Link>
            </div>
            <div className="family-card">
              <h3>Letras Aesthetic</h3>
              <p>Tipografías suaves, espaciadas y con destellos sutiles.</p>
              <Link href="/letras-aesthetic/" className="btn btn--secondary">Ver Aesthetic</Link>
            </div>
            <div className="family-card">
              <h3>Letras Burbuja</h3>
              <p>Caracteres esféricos y circulares ideales para nicks juveniles y numeraciones.</p>
              <Link href="/letras-burbuja/" className="btn btn--secondary">Ver Burbujas</Link>
            </div>
            <div className="family-card">
              <h3>Letras para Instagram</h3>
              <p>Formatos y estilos optimizados para biografías y publicaciones de Instagram.</p>
              <Link href="/letras-para-instagram/" className="btn btn--secondary">Ver Instagram</Link>
            </div>
            <div className="family-card">
              <h3>Letras para WhatsApp</h3>
              <p>Tipografías preparadas para nicks, estados y mensajes de WhatsApp.</p>
              <Link href="/letras-para-whatsapp/" className="btn btn--secondary">Ver WhatsApp</Link>
            </div>
            <div className="family-card">
              <h3>Letras para Facebook</h3>
              <p>Fuentes llamativas para titulares de publicaciones y anuncios comunitarios.</p>
              <Link href="/letras-para-facebook/" className="btn btn--secondary">Ver Facebook</Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
