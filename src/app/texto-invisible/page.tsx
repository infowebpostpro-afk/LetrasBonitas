import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { TextoInvisibleTool } from "@/components/font-generator/TextoInvisibleTool";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Texto Invisible para Copiar y Pegar | LetrasBonitas",
  description:
    "Copia texto invisible y espacios en blanco al instante. Elige caracteres Unicode (U+3164, U+2800, U+200B), genera la cantidad que necesitas y comprueba tu texto.",
  alternates: {
    canonical: `${SITE_URL}/texto-invisible/`,
  },
  openGraph: {
    title: "Texto Invisible para Copiar y Pegar | LetrasBonitas",
    description:
      "Copia caracteres invisibles en un clic, genera espacios en blanco a medida y analiza el contenido oculto de tu texto.",
    url: `${SITE_URL}/texto-invisible/`,
    siteName: "LetrasBonitas",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Texto Invisible para Copiar y Pegar | LetrasBonitas",
    description:
      "Generador de texto invisible, espacios en blanco Unicode y detector en tiempo real para WhatsApp, Instagram y juegos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TextoInvisiblePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/texto-invisible/#webpage`,
        url: `${SITE_URL}/texto-invisible/`,
        name: "Texto Invisible para Copiar y Pegar",
        description:
          "Herramienta interactiva para copiar texto invisible, generar espacios en blanco Unicode y detectar caracteres ocultos.",
        isPartOf: {
          "@type": "WebSite",
          name: "LetrasBonitas",
          url: `${SITE_URL}/`,
        },
        inLanguage: "es-ES",
      },
      {
        "@type": "WebApplication",
        "@id": `${SITE_URL}/texto-invisible/#tool`,
        name: "Generador y Detector de Texto Invisible de LetrasBonitas",
        url: `${SITE_URL}/texto-invisible/`,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        browserRequirements:
          "Requiere JavaScript para la copia interactiva al portapapeles y el analisis de caracteres",
        description:
          "Utilidad Unicode para copiar caracteres invisibles (U+3164, U+2800, U+200B), generar cadenas en blanco y analizar textos.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/texto-invisible/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Texto Invisible",
            item: `${SITE_URL}/texto-invisible/`,
          },
        ],
      },
    ],
  };

  return (
    <main className="page-shell">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ COMPACT SAAS HERO ═══ */}
      <header className="hero-saas hero-saas--compact">
        <div className="hero-saas__watermark-right" aria-hidden="true">
          [ㅤ]
        </div>
        <div className="hero-saas__content">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Texto Invisible", href: "/texto-invisible/" },
            ]}
          />
          <span className="hero-saas__badge">✦ UTILIDAD UNICODE INTERACTIVA</span>
          <h1 className="hero-saas__title">
            Texto Invisible para <span className="gradient-text-cyan">Copiar y Pegar</span>
          </h1>
          <p className="hero-saas__lead">
            Copia caracteres invisibles en un clic, genera espacios en blanco a medida y analiza el contenido oculto de tu texto antes de usarlo.
          </p>
        </div>
      </header>

      {/* ═══ PRIMARY INTERACTIVE TOOL DIRECTLY UNDER HERO ═══ */}
      <TextoInvisibleTool />

      {/* ═══ SPECIALIZED ROUTING SUGGESTIONS ═══ */}
      <div className="prose-card mb-8 mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 m-0">
              <span>🎯</span>
              <span>¿Buscas personalizar aún más tus textos y nombres?</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1 m-0">
              Explora otras utilidades complementarias para combinar espacios invisibles con estilos tipográficos y símbolos:
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <Link
              href="/simbolos/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 transition-colors"
            >
              Biblioteca de Símbolos
            </Link>
            <Link
              href="/conversor-de-letras/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
            >
              Conversor de Letras
            </Link>
            <Link
              href="/nombres-para-free-fire/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors"
            >
              Nombres para Free Fire
            </Link>
            <Link
              href="/letras-para-instagram/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors"
            >
              Letras para Instagram
            </Link>
            <Link
              href="/letras-cursivas/"
              className="text-xs px-3.5 py-2 rounded-lg font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Letras Cursivas
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ COMPREHENSIVE SUPPORTING SEO CONTENT ═══ */}
      <article className="prose-section" aria-label="Guía completa sobre texto invisible y espacios en blanco Unicode">
        {/* Section 1: Concise PAS Introduction */}
        <section className="prose-card">
          <h2>El problema del espacio en blanco en formularios y aplicaciones</h2>
          <p>
            Intentar enviar un mensaje sin palabras en WhatsApp, dejar un nombre de usuario completamente vacío en Free Fire o insertar una línea en blanco en una biografía de Instagram suele terminar en frustración. Al presionar la barra espaciadora ordinaria, la mayoría de los sistemas web y aplicaciones ejecutan funciones automáticas de saneamiento como trim(), eliminando los espacios normales y mostrando avisos de error como campo obligatorio o introduce un nombre válido.
          </p>
          <p>
            Esta limitación ocurre porque el espacio tradicional de teclado (U+0020) está clasificado formalmente en el estándar Unicode bajo la propiedad White_Space=Yes. La solución real no consiste en pulsar repetidamente la barra espaciadora, sino en utilizar caracteres Unicode especiales (como el Relleno Hangul U+3164 o el Blanco Braille U+2800). Estos caracteres son visualmente indistinguibles de la nada, pero al estar clasificados internamente como letras o símbolos, no son recortados por los filtros convencionales. Con la herramienta interactiva de <Link href="/" className="text-indigo-600 hover:underline font-semibold">LetrasBonitas</Link> situada en la parte superior, puedes copiar estos caracteres con un clic, multiplicar su cantidad y analizar cualquier cadena antes de publicarla.
          </p>
        </section>

        {/* Section 2: What is Invisible Text */}
        <section className="prose-card">
          <h2>¿Qué es el texto invisible?</h2>
          <p>
            El texto invisible, conocido también como espacio invisible, carácter vacío o espacio en blanco para copiar y pegar, hace referencia a un grupo específico de puntos de código dentro del estándar internacional Unicode que no poseen ningún glifo gráfico visible asignado cuando se renderizan en pantalla.
          </p>
          <p>
            Desde el punto de vista del usuario, la pantalla muestra un vacío absoluto. Sin embargo, para el procesador de textos, el navegador web o la base de datos de una aplicación, ese vacío representa datos binarios reales y legítimos. El sistema registra que el campo contiene uno o varios bytes de información, satisfaciendo las comprobaciones de longitud mínima sin que el ojo humano perciba ninguna letra o número impreso.
          </p>
          <p>
            Es fundamental comprender que el texto invisible no es una fuente mágica ni un truco de estilo CSS como color: transparent. Es texto plano en formato Unicode que viaja en el portapapeles de tu dispositivo exactamente igual que una letra A o un dígito 9.
          </p>
        </section>

        {/* Section 3: How to Copy and Paste Walkthrough */}
        <section className="prose-card">
          <h2>Cómo copiar y pegar texto invisible paso a paso</h2>
          <p>
            Nuestra herramienta ha sido diseñada para resolver tu necesidad de forma inmediata, tanto si buscas un único carácter para un apodo como si necesitas decenas de espacios para estructurar un documento digital:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
            {[
              {
                step: "01",
                icon: "⚡",
                title: "Copia rápida directa",
                desc: "Si solo necesitas un carácter para tu apodo o mensaje, ve al Paso 1 de la herramienta, elige entre U+3164 (juegos) o U+2800 (mensajes) y presiona Copiar texto invisible. El carácter pasará de inmediato a tu portapapeles.",
              },
              {
                step: "02",
                icon: "🔢",
                title: "Generación por cantidad",
                desc: "Si requieres un espacio más amplio o una serie continua de espacios, desplázate al Paso 2. Elige el multiplicador preajustado (10, 20, 50, 100) o introduce una cifra personalizada de 1 a 500 y presiona Copiar resultado.",
              },
              {
                step: "03",
                icon: "🔍",
                title: "Inspección y comprobación",
                desc: "Antes de guardar un nombre importante en un juego o enviar un mensaje, pega el texto en el Paso 3 (Detector). Podrás comprobar cuántos caracteres invisibles contiene exactamente tu texto y en qué posición se encuentran.",
              },
            ].map((card) => (
              <div key={card.step} className="p-4 rounded-xl bg-slate-50 border border-slate-200 relative overflow-hidden">
                <span className="absolute top-2 right-3 text-3xl font-black text-slate-200/80">{card.step}</span>
                <span className="text-2xl block mb-1">{card.icon}</span>
                <h3 className="text-sm font-bold text-slate-900 m-0 mb-1">{card.title}</h3>
                <p className="text-xs text-slate-600 m-0 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <p>
            Si tu navegador bloquea temporalmente los permisos del portapapeles, utiliza el botón de selección manual disponible en la herramienta: resaltará el carácter para que simplemente presiones Ctrl+C en Windows o Cmd+C en Mac.
          </p>
        </section>

        {/* Section 4: Types of Invisible Characters & Unicode Library Table */}
        <section className="prose-card">
          <h2>Tipos de caracteres invisibles y biblioteca Unicode</h2>
          <p>
            Uno de los errores más comunes de los usuarios y de muchos sitios web es tratar todos los caracteres invisibles como si fueran idénticos. En la arquitectura Unicode, cada punto de código tiene una categoría general, un comportamiento de salto de línea y un ancho visual particular:
          </p>

          <div className="overflow-x-auto my-2">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-100 text-slate-800">
                  <th className="p-2.5 font-bold">Punto Unicode</th>
                  <th className="p-2.5 font-bold">Nombre Oficial</th>
                  <th className="p-2.5 font-bold">Categoría</th>
                  <th className="p-2.5 font-bold">¿Ocupa ancho?</th>
                  <th className="p-2.5 font-bold">White_Space</th>
                  <th className="p-2.5 font-bold">Uso Principal Recomendado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-mono font-bold text-indigo-700">U+3164</td>
                  <td className="p-2.5 font-bold">HANGUL FILLER</td>
                  <td className="p-2.5">Lo (Letra, Otra)</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Sí (Ancho completo)</td>
                  <td className="p-2.5 text-slate-600">No</td>
                  <td className="p-2.5">Nombres en Free Fire, apodos en Discord y juegos donde no se admiten espacios.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-mono font-bold text-indigo-700">U+2800</td>
                  <td className="p-2.5 font-bold">BRAILLE PATTERN BLANK</td>
                  <td className="p-2.5">So (Símbolo, Otro)</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Sí (Celda Braille)</td>
                  <td className="p-2.5 text-slate-600">No</td>
                  <td className="p-2.5">Mensajes vacíos en WhatsApp, comentarios en blanco en TikTok y saltos de línea.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-mono font-bold text-indigo-700">U+200B</td>
                  <td className="p-2.5 font-bold">ZERO WIDTH SPACE</td>
                  <td className="p-2.5">Cf (Formato)</td>
                  <td className="p-2.5 text-sky-700 font-semibold">No (0 píxeles)</td>
                  <td className="p-2.5 text-slate-600">No</td>
                  <td className="p-2.5">Separar palabras para saltos de línea sin espacio visual; romper filtros de palabras clave.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-mono font-bold text-indigo-700">U+00A0</td>
                  <td className="p-2.5 font-bold">NO-BREAK SPACE</td>
                  <td className="p-2.5">Zs (Separador, Espacio)</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Sí (Espacio estándar)</td>
                  <td className="p-2.5 text-amber-700 font-semibold">Sí</td>
                  <td className="p-2.5">Evitar cortes de línea entre palabras o cifras en redacción web y documentos.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-mono font-bold text-indigo-700">U+2003</td>
                  <td className="p-2.5 font-bold">EM SPACE</td>
                  <td className="p-2.5">Zs (Separador, Espacio)</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Sí (1 em de ancho)</td>
                  <td className="p-2.5 text-amber-700 font-semibold">Sí</td>
                  <td className="p-2.5">Espaciado tipográfico generoso y sangrías en textos estructurados.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-mono font-bold text-indigo-700">U+2060</td>
                  <td className="p-2.5 font-bold">WORD JOINER</td>
                  <td className="p-2.5">Cf (Formato)</td>
                  <td className="p-2.5 text-sky-700 font-semibold">No (0 píxeles)</td>
                  <td className="p-2.5 text-slate-600">No</td>
                  <td className="p-2.5">Impedir saltos de línea entre caracteres sin introducir espacio visible alguno.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-mono font-bold text-indigo-700">U+200C</td>
                  <td className="p-2.5 font-bold">ZERO WIDTH NON-JOINER</td>
                  <td className="p-2.5">Cf (Formato)</td>
                  <td className="p-2.5 text-sky-700 font-semibold">No (0 píxeles)</td>
                  <td className="p-2.5 text-slate-600">No</td>
                  <td className="p-2.5">Control de ligaduras tipográficas en alfabetos complejos; invisible en texto latino.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-mono font-bold text-indigo-700">U+200D</td>
                  <td className="p-2.5 font-bold">ZERO WIDTH JOINER</td>
                  <td className="p-2.5">Cf (Formato)</td>
                  <td className="p-2.5 text-sky-700 font-semibold">No (0 píxeles)</td>
                  <td className="p-2.5 text-slate-600">No</td>
                  <td className="p-2.5">Combinación de glifos en emojis compuestos y tipografía avanzada.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Como se observa en la tabla, si intentas colocar un espacio en blanco en el nombre de un juego usando U+200B (ancho cero), las letras se mantendrán pegadas porque tiene 0 píxeles de anchura. Para crear separación física visible necesitas un carácter con anchura activa como U+3164 o U+2800.
          </p>
        </section>

        {/* Section 5: Invisible Text for WhatsApp */}
        <section className="prose-card">
          <h2>Texto invisible para WhatsApp</h2>
          <p>
            En la aplicación de mensajería WhatsApp, el botón de enviar (el icono del avión de papel) permanece desactivado si el cuadro de texto únicamente contiene espacios normales generados con la barra espaciadora del teclado. La aplicación comprueba si el mensaje está vacío tras aplicar un filtro de recorte.
          </p>
          <p>
            Para enviar un mensaje completamente en blanco en WhatsApp, el carácter más efectivo es el Blanco Braille (U+2800). Al pertenecer a la categoría de símbolos tipográficos y no a la de separadores de espacio en blanco, WhatsApp interpreta que el mensaje contiene contenido real y habilita de inmediato el botón de envío.
          </p>
          <p>
            También puedes utilizar nuestro generador de cantidad para copiar 50 o 100 caracteres de U+2800 y crear un mensaje en blanco vertical de gran longitud, ideal para bromas visuales entre amigos o para separar conversaciones en grupos. Recuerda que no podemos garantizar que futuras actualizaciones de la aplicación no modifiquen sus filtros internos de saneamiento. Si deseas explorar más estilos para tus conversaciones, revisa nuestra guía de <Link href="/letras-para-whatsapp/" className="text-indigo-600 hover:underline font-semibold">letras para WhatsApp</Link>.
          </p>
        </section>

        {/* Section 6: Invisible Text for Instagram */}
        <section className="prose-card">
          <h2>Texto invisible para Instagram</h2>
          <p>
            En Instagram, los usuarios recurren habitualmente a los caracteres invisibles por dos razones principales:
          </p>
          <ul>
            <li>
              <strong>Saltos de línea limpios en la biografía:</strong> Por defecto, el editor de perfiles de Instagram suele colapsar las líneas vacías consecutivas, juntando párrafos que el usuario deseaba mantener separados. Al pegar un carácter como U+2800 o U+3164 en una línea solitaria, Instagram detecta contenido y mantiene el salto de línea perfecto sin necesidad de recurrir a puntos (.) o guiones antiestéticos.
            </li>
            <li>
              <strong>Ocultar texto o alinear elementos:</strong> Colocar espacios de ancho visual permite centrar frases o desplazar visualmente ciertos datos en la biografía.
            </li>
          </ul>
          <p>
            En el campo del nombre de usuario (@handle), Instagram no permite ningún tipo de espacio (ni visible ni invisible), ya que los identificadores de cuenta únicamente admiten caracteres alfanuméricos, puntos y guiones bajos. Sin embargo, en el campo Nombre de perfil (el texto en negrita que aparece debajo de tu foto) sí es posible emplear caracteres invisibles. Puedes complementar tu perfil con nuestra sección de <Link href="/letras-para-instagram/" className="text-indigo-600 hover:underline font-semibold">letras para Instagram</Link>.
          </p>
        </section>

        {/* Section 7: Invisible Text for Free Fire & Games */}
        <section className="prose-card">
          <h2>Texto invisible para Free Fire y otros videojuegos</h2>
          <p>
            El universo de los juegos móviles y competitivos como Free Fire, PUBG Mobile, Roblox y Call of Duty Mobile es uno de los principales destinos del texto invisible. Los jugadores buscan frecuentemente tener un nick en blanco, aparentar que no tienen nombre en las tablas de clasificación o separar clanes y etiquetas sin recurrir a símbolos llamativos.
          </p>
          <p>
            En Free Fire, el carácter indiscutible es el <strong>Relleno Hangul (U+3164)</strong>. Los desarrolladores del juego configuran el validador de nombres para rechazar el espacio estándar de teclado, pero como U+3164 pertenece al bloque de letras coreanas, el motor del juego lo acepta como una letra válida mientras que el motor gráfico lo muestra como un espacio totalmente transparente.
          </p>
          <p>
            Ten en cuenta las restricciones de los juegos:
          </p>
          <ul>
            <li>
              <strong>Límite de longitud:</strong> Free Fire limita los apodos a un máximo aproximado de 12 caracteres. Cada carácter invisible cuenta como una posición contra ese límite.
            </li>
            <li>
              <strong>Nombres duplicados:</strong> Si intentas registrar un nombre formado únicamente por un solo U+3164, el juego indicará que el nombre ya existe porque otro jugador ya lo registró antes. La solución suele consistir en combinar 2 o 3 caracteres invisibles en secuencias únicas o alternar U+3164 con U+2800.
            </li>
          </ul>
          <p>
            Si quieres crear combinaciones más elaboradas con insignias y armas, visita nuestra sección especializada en <Link href="/nombres-para-free-fire/" className="text-indigo-600 hover:underline font-semibold">nombres para Free Fire</Link>.
          </p>
        </section>

        {/* Section 8: Invisible Text for Discord and TikTok */}
        <section className="prose-card">
          <h2>Texto invisible para Discord y TikTok</h2>
          <p>
            En plataformas de comunidad como Discord y redes de vídeo como TikTok, los caracteres vacíos ofrecen ventajas prácticas adicionales:
          </p>
          <ul>
            <li>
              <strong>Apodos de servidor en Discord:</strong> En servidores con permisos activos para cambiar tu apodo, puedes establecer un Relleno Hangul (U+3164) como apodo para que tu nombre aparezca completamente en blanco en la lista de miembros del canal de voz o chat.
            </li>
            <li>
              <strong>Comentarios vacíos en TikTok:</strong> Los usuarios emplean con frecuencia el carácter Blanco Braille (U+2800) para publicar comentarios sin texto en vídeos virales, creando un efecto de curiosidad entre la comunidad.
            </li>
            <li>
              <strong>Formato de canales:</strong> Los administradores de Discord utilizan caracteres invisibles para dar espaciado estético a los nombres de categorías y canales de texto. Si quieres dar más personalidad a tus servidores, consulta nuestras opciones en <Link href="/letras-para-discord/" className="text-indigo-600 hover:underline font-semibold">letras para Discord</Link> y <Link href="/letras-para-tiktok/" className="text-indigo-600 hover:underline font-semibold">letras para TikTok</Link>.
            </li>
          </ul>
        </section>

        {/* Section 9: How to Create Long Invisible Text */}
        <section className="prose-card">
          <h2>Cómo crear texto invisible largo</h2>
          <p>
            En muchas ocasiones se requiere generar un bloque extenso de texto invisible, ya sea para rellenar un documento de prueba, enviar un mensaje con efecto de desplazamiento vertical en mensajería o separar bloques de contenido en plataformas de texto enriquecido.
          </p>
          <p>
            Para lograrlo, utiliza el generador del Paso 2 de nuestra herramienta:
          </p>
          <ol>
            <li>Selecciona el carácter deseado (te recomendamos U+2800 para mensajes o U+3164 para juegos).</li>
            <li>Elige una cantidad predefinida como 50 o 100 caracteres, o escribe directamente en el campo numérico un valor de hasta 500.</li>
            <li>Haz clic en Copiar resultado. La cadena exacta con la repetición solicitada quedará en tu portapapeles.</li>
          </ol>
          <p>
            Es importante recordar la diferencia entre repetición y ancho visual: si generas 100 caracteres de U+200B (ancho cero), la cadena tendrá 100 puntos de código pero ocupará 0 píxeles de anchura en la pantalla. En cambio, 100 caracteres de U+3164 generarán una franja en blanco equivalente al ancho de 100 letras normales.
          </p>
        </section>

        {/* Section 10: How to Detect and Inspect Invisible Characters */}
        <section className="prose-card">
          <h2>Cómo saber si un texto contiene caracteres invisibles</h2>
          <p>
            Cuando recibes un texto sospechoso o cuando copias un código que provoca errores inexplicables de compilación o análisis sintáctico, la causa suele ser la presencia de caracteres invisibles incrustados accidentalmente.
          </p>
          <p>
            En el Paso 3 de nuestra herramienta dispones de un <strong>Detector e Inspector en tiempo real</strong>. Al pegar cualquier fragmento de texto, el analizador examina cada posición de memoria y te ofrece:
          </p>
          <ul>
            <li><strong>Recuento de puntos de código:</strong> La cantidad exacta de caracteres que componen la cadena en memoria.</li>
            <li><strong>Desglose de invisibles:</strong> Te indica con exactitud qué caracteres ocultos están presentes (por ejemplo: 2 veces U+3164 y 1 vez U+200B).</li>
            <li><strong>Cálculo de bytes UTF-8:</strong> Muestra el peso real en bytes de la cadena utilizando el codificador nativo del sistema.</li>
            <li><strong>Mapa visual de tokens:</strong> Resalta en un panel interactivo la ubicación exacta de cada carácter oculto con etiquetas coloreadas para que puedas distinguir dónde termina el texto visible y dónde comienza el carácter invisible.</li>
          </ul>
        </section>

        {/* Section 11: Differences Between Invisible Text, Blank Space and Zero Width */}
        <section className="prose-card">
          <h2>Diferencias entre texto invisible, espacio en blanco y espacio de ancho cero</h2>
          <p>
            Para evitar confusiones habituales, conviene distinguir con precisión estos tres conceptos:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                Espacio en blanco común
              </h3>
              <p className="text-xs text-slate-600 m-0 leading-relaxed">
                El carácter U+0020 obtenido con la barra espaciadora. Tiene la propiedad Unicode White_Space=Yes. Cualquier formulario con validación estándar o función trim() lo elimina cuando se encuentra al inicio, al final o aislado.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Texto invisible con ancho
              </h3>
              <p className="text-xs text-slate-600 m-0 leading-relaxed">
                Caracteres como U+3164 (Hangul) o U+2800 (Braille). No tienen la propiedad de espacio en blanco común y se registran como letras o símbolos, pero carecen de dibujo visible y ocupan anchura física en pantalla.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                Espacio de ancho cero
              </h3>
              <p className="text-xs text-slate-600 m-0 leading-relaxed">
                Puntos de código como U+200B o U+2060. Tienen 0 píxeles de anchura. No generan separación visible alguna entre las letras contiguas y se emplean para control de saltos de línea y procesamiento lingüístico.
              </p>
            </div>
          </div>
        </section>

        {/* Section 12: Why Invisible Text Fails & Troubleshooting */}
        <section className="prose-card">
          <h2>¿Por qué no funciona el texto invisible? Solución a problemas frecuentes</h2>
          <p>
            Si has copiado un carácter invisible y no produce el resultado esperado en tu juego o red social, generalmente se debe a una de las siguientes causas técnicas:
          </p>

          <div className="space-y-3 my-2">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1">1. La plataforma filtra caracteres no pertenecientes al alfabeto latino</h3>
              <p className="text-xs text-slate-600 m-0 leading-relaxed">
                Algunas aplicaciones bloquean caracteres de alfabetos extranjeros (como el Hangul coreano de U+3164) para evitar suplantaciones de identidad. Si U+3164 es rechazado, prueba con el Blanco Braille (U+2800) o con el Espacio Indivisible (U+00A0).
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1">2. Aparece un cuadro vacío o símbolo de interrogación (tofu)</h3>
              <p className="text-xs text-slate-600 m-0 leading-relaxed">
                Si en lugar de un espacio ves un rectángulo con una cruz o un signo de interrogación, significa que la fuente tipográfica instalada en ese dispositivo no incluye ese carácter Unicode en su mapa de glifos. En ese caso, cambia al carácter Blanco Braille (U+2800), cuya compatibilidad en sistemas operativos móviles modernos es superior.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1">3. El carácter elegido tiene ancho cero</h3>
              <p className="text-xs text-slate-600 m-0 leading-relaxed">
                Si intentaste separar dos palabras en tu apodo pero se ven completamente juntas, verifica que no hayas seleccionado U+200B (Zero Width Space). Selecciona en su lugar U+3164 para obtener una separación visual efectiva.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 m-0 mb-1">4. El portapapeles no se actualizó</h3>
              <p className="text-xs text-slate-600 m-0 leading-relaxed">
                En ciertos navegadores móviles, las restricciones de privacidad pueden impedir que el botón de copia automática escriba en el portapapeles. Utiliza el botón de copia manual que se despliega en nuestra herramienta para seleccionarlo directamente.
              </p>
            </div>
          </div>
        </section>

        {/* Section 13: Tips for Choosing the Right Character */}
        <section className="prose-card">
          <h2>Consejos prácticos para elegir el carácter invisible adecuado</h2>
          <ul>
            <li><strong>Para nombres de juegos y Free Fire:</strong> Utiliza siempre <code>U+3164 (Relleno Hangul)</code> como primera opción. Es el más tolerado por los motores de videojuegos móviles.</li>
            <li><strong>Para mensajes vacíos en WhatsApp:</strong> Elige <code>U+2800 (Blanco Braille)</code>. Es el que mejor elude la comprobación de mensaje vacío.</li>
            <li><strong>Para saltos de línea en Instagram y biografías:</strong> Puedes usar tanto <code>U+2800</code> como <code>U+3164</code> para conservar las separaciones de párrafo intactas.</li>
            <li><strong>Para documentos de texto y páginas web:</strong> Utiliza <code>U+00A0 (Espacio indivisible)</code> para asegurar que cifras o nombres compuestos nunca se fracturen entre dos líneas.</li>
          </ul>
        </section>

        {/* Section 14: Security, Accessibility & Technical Considerations */}
        <section className="prose-card">
          <h2>Seguridad, accesibilidad y consideraciones técnicas</h2>
          <p>
            Aunque el texto invisible es una herramienta muy práctica para personalización y formato estético, conviene tener presentes sus implicaciones técnicas:
          </p>
          <ul>
            <li>
              <strong>Accesibilidad y lectores de pantalla:</strong> Los lectores de pantalla para personas con discapacidad visual interpretan los caracteres invisibles según su función. Mientras que U+200B suele ser ignorado silenciosamente, caracteres como U+2800 o U+3164 pueden ser anunciados como símbolo braille en blanco o letra hangul de relleno, lo que puede resultar desconcertante si se usan en exceso dentro de textos informativos largos.
            </li>
            <li>
              <strong>Impacto en código y programación:</strong> Pegar accidentalmente caracteres invisibles dentro de archivos fuente de código (JavaScript, Python, JSON) puede generar errores de sintaxis difíciles de detectar, ya que el archivo parece limpio a simple vista pero el compilador encuentra bytes desconocidos. Si sospechas de un archivo con errores extraños, pásalo por nuestro detector.
            </li>
            <li>
              <strong>Indexación en motores de búsqueda:</strong> Google y otros motores de búsqueda normalizan y colapsan los caracteres de espacio en blanco antes de indexar las páginas web. Usar caracteres invisibles con la intención de ocultar palabras clave se considera una práctica contraria a las directrices para webmasters y no aporta ningún beneficio en posicionamiento.
            </li>
          </ul>
        </section>

        {/* Section 15: Frequently Asked Questions (8 FAQs) */}
        <section className="prose-card">
          <h2>Preguntas frecuentes sobre texto invisible</h2>

          <div className="space-y-3 my-2">
            {[
              {
                q: "¿Cómo copiar un espacio invisible desde el móvil?",
                a: "Solo tienes que entrar en nuestra página desde el navegador de tu teléfono (Chrome, Safari u otro), presionar el botón Copiar texto invisible en la parte superior y quedará guardado en tu portapapeles. Después ve a tu aplicación y mantén presionado el dedo sobre el campo para pulsar Pegar.",
              },
              {
                q: "¿Por qué WhatsApp no envía mi mensaje si solo puse espacios?",
                a: "Porque los espacios de la barra espaciadora (U+0020) son eliminados automáticamente por el sistema de comprobación de WhatsApp. Para enviar un mensaje vacío, debes copiar el Blanco Braille (U+2800) desde nuestra herramienta, que al ser reconocido como símbolo activa el botón de enviar.",
              },
              {
                q: "¿Cuál es la diferencia entre U+3164 y U+200B?",
                a: "U+3164 (Relleno Hangul) ocupa un ancho visual completo en pantalla y está clasificado como letra, por lo que es ideal para nombres de juegos. En cambio, U+200B (Espacio de ancho cero) no ocupa nada de espacio visual (0 píxeles) y solo sirve para indicar oportunidades de salto de línea.",
              },
              {
                q: "¿El texto invisible funciona en el juego Free Fire?",
                a: "Sí. El carácter U+3164 (Relleno Hangul) es ampliamente utilizado por la comunidad de Free Fire para crear nombres invisibles o separar letras en nicks sin que el juego lo rechace.",
              },
              {
                q: "¿Cómo puedo generar 100 caracteres invisibles juntos?",
                a: "Desplázate al Paso 2 de nuestra herramienta, pulsa en el botón predefinido ×100 y presiona Copiar resultado. Tendrás una secuencia continua de exactamente 100 caracteres lista en tu portapapeles.",
              },
              {
                q: "¿Cómo puedo comprobar si un texto copiado contiene caracteres invisibles?",
                a: "Pega el texto dentro del Paso 3 (Detector e Inspector). La herramienta analizará al instante todos los puntos de código Unicode, te dirá cuántos caracteres invisibles hay y te mostrará un mapa visual señalando su posición exacta.",
              },
              {
                q: "¿Por qué el carácter invisible desaparece al pegarlo en algunas aplicaciones?",
                a: "Algunas aplicaciones aplican filtros estrictos de saneamiento que eliminan caracteres fuera de los rangos ASCII estándar o suprimen símbolos vacíos. Si una aplicación elimina U+3164, prueba con U+2800 o U+00A0.",
              },
              {
                q: "¿Es seguro usar texto invisible en redes sociales?",
                a: "Sí, es completamente seguro. Se trata de caracteres legítimos del estándar internacional Unicode que no contienen código malicioso ni dañan tu dispositivo.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm m-0 mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">
                    ?
                  </span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-xs pl-7 m-0 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 16: Closing Call to Action */}
        <section className="prose-card">
          <h2>Copia tu texto invisible con LetrasBonitas</h2>
          <p>
            En LetrasBonitas ponemos a tu alcance herramientas Unicode rápidas, precisas y seguras, sin necesidad de registros, descargas ni pasos innecesarios. Ya sea que busques un carácter invisible para personalizar tu nombre de jugador, organizar una biografía estética o comprobar cadenas de texto, nuestra suite te ofrece todo lo necesario en una sola página.
          </p>
          <p>
            Sube al inicio de la página para copiar tu carácter favorito, consulta nuestra guía de <Link href="/texto-invisible/caracter-invisible/" className="text-indigo-600 hover:underline font-semibold">carácter invisible</Link> para inspeccionar códigos Unicode individuales y detectar caracteres ocultos, visita nuestra herramienta de <Link href="/texto-invisible/espacio-en-blanco/" className="text-indigo-600 hover:underline font-semibold">espacio en blanco</Link> para controlar anchos tipográficos específicos, o prueba nuestras otras utilidades como el <Link href="/conversor-de-letras/" className="text-indigo-600 hover:underline font-semibold">conversor de letras</Link> y la <Link href="/simbolos/" className="text-indigo-600 hover:underline font-semibold">biblioteca de símbolos</Link> para llevar la personalización de tus textos al siguiente nivel.
          </p>
        </section>
      </article>
    </main>
  );
}
