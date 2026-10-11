import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RaisedLettersGenerator } from "@/components/font-generator/RaisedLettersGenerator";

export function generateMetadata(): Metadata {
  return {
    title: "Letras Pequeñas Arriba para Copiar | LetrasBonitas",
    description:
      "Convierte texto en letras pequeñas arriba, crea nombres con superíndices y copia letras y números elevados fácilmente.",
    alternates: {
      canonical: "/letras-pequenas/letras-pequenas-arriba/",
    },
    openGraph: {
      title: "Letras Pequeñas Arriba para Copiar | LetrasBonitas",
      description:
        "Convierte texto en letras pequeñas arriba, crea nombres con superíndices y copia letras y números elevados fácilmente.",
      locale: "es",
      type: "website",
      url: "/letras-pequenas/letras-pequenas-arriba/",
    },
    twitter: {
      card: "summary",
      title: "Letras Pequeñas Arriba para Copiar | LetrasBonitas",
      description:
        "Convierte texto en letras pequeñas arriba, crea nombres con superíndices y copia letras y números elevados fácilmente.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LetrasPequenasArribaPage() {
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
        "@id": "https://letrasbonits.com/letras-pequenas/letras-pequenas-arriba/#webpage",
        url: "https://letrasbonits.com/letras-pequenas/letras-pequenas-arriba/",
        name: "Letras Pequeñas Arriba para Copiar | LetrasBonitas",
        description:
          "Convierte texto en letras pequeñas arriba, crea nombres con superíndices y copia letras y números elevados fácilmente.",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/letras-pequenas/letras-pequenas-arriba/#breadcrumb",
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
            name: "Letras Pequeñas",
            item: "https://letrasbonits.com/letras-pequenas/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Letras Pequeñas Arriba",
            item: "https://letrasbonits.com/letras-pequenas/letras-pequenas-arriba/",
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": "https://letrasbonits.com/letras-pequenas/letras-pequenas-arriba/#app",
        name: "Generador de Letras Pequeñas Arriba y Superíndice",
        url: "https://letrasbonits.com/letras-pequenas/letras-pequenas-arriba/",
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
        "@id": "https://letrasbonits.com/letras-pequenas/letras-pequenas-arriba/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo poner letras pequeñas arriba del nombre?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Escribe una etiqueta en el generador, conviértela a caracteres elevados y combínala con tu nombre. Después copia el resultado completo.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo hacer letras chiquitas arriba desde el celular?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Abre el generador en el navegador del móvil, escribe tu texto y pulsa Copiar. No necesitas instalar un teclado especial.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo copiar letras en superíndice?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Puedes copiar el resultado completo del generador o seleccionar una letra individual en el abecedario de caracteres elevados.",
            },
          },
          {
            "@type": "Question",
            name: "¿Hay letras mayúsculas arriba?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, existen varios caracteres Unicode con apariencia de mayúsculas elevadas. Sin embargo, no forman un alfabeto completamente uniforme.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo poner letras pequeñas arriba en Free Fire?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Prepara el nombre con el generador y comprueba si el campo de nombre del juego acepta los caracteres. La compatibilidad puede variar.",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué la letra q no aparece pequeña arriba?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Porque el conjunto habitual de caracteres elevados no incluye una alternativa directa equivalente a la q minúscula.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo copiar números pequeños arriba?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Los dígitos ⁰¹²³⁴⁵⁶⁷⁸⁹ están disponibles y pueden copiarse individualmente o como parte de una secuencia.",
            },
          },
          {
            "@type": "Question",
            name: "¿Las letras pequeñas arriba son una fuente?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No exactamente. El generador utiliza caracteres Unicode con apariencia elevada. No instala una tipografía ni modifica el tamaño de la fuente del dispositivo.",
            },
          },
          {
            "@type": "Question",
            name: "¿Se pueden usar letras arriba en Instagram?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pueden utilizarse en algunos campos compatibles con Unicode, como determinadas biografías o nombres visibles. La aceptación depende de las reglas de cada campo.",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué la ñ y los acentos no se convierten siempre?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Porque no todos los caracteres españoles tienen equivalentes elevados directos. Conservarlos evita cambiar silenciosamente la escritura original.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="container py-8 md:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── BREADCRUMBS ── */}
      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Letras Pequeñas", href: "/letras-pequenas/" },
            { label: "Letras Pequeñas Arriba" },
          ]}
        />
      </div>

      {/* ── ENCABEZADO PRINCIPAL (H1) ── */}
      <header className="text-center max-w-3xl mx-auto mb-8 space-y-3">
        <h1 className="text-3xl md:text-5xl font-black text-ink tracking-tight">
          Letras Pequeñas Arriba para Copiar y Pegar
        </h1>
        <p className="text-base md:text-lg text-muted font-normal leading-relaxed">
          ¿Quieres poner letras pequeñas arriba de tu nombre, crear un nick diferente o escribir palabras con un estilo elevado? Es posible que hayas visto nombres como ᴾᴿᴼ Shadow o frases como ʰᵒˡᵃ, pero no encuentres esas letras en el teclado de tu móvil.
        </p>
        <p className="text-sm md:text-base text-muted font-normal leading-relaxed">
          Con nuestro generador de letras pequeñas arriba puedes convertir texto, copiar caracteres individuales y combinar una etiqueta elevada con tu nombre. No necesitas instalar fuentes. Solo escribe, elige el resultado y cópialo.
        </p>
      </header>

      {/* ── HERRAMIENTA INTERACTIVA (3 SECCIONES) ── */}
      <section className="mb-16" aria-label="Herramienta de letras pequeñas arriba">
        <RaisedLettersGenerator />
      </section>

      {/* ── ARTÍCULO COMPLETO EN ESPAÑOL (VERBATIM E INTEGRADO) ── */}
      <article className="max-w-4xl mx-auto space-y-12 text-ink leading-relaxed font-normal">
        {/* ¿Qué son las letras pequeñas arriba? */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            ¿Qué son las letras pequeñas arriba?
          </h2>
          <p className="text-muted leading-relaxed">
            Las letras pequeñas arriba son caracteres que tienen una apariencia elevada respecto al texto habitual. Muchas personas las conocen como letras chiquitas arriba, letras mini o letras en superíndice.
          </p>
          <div className="p-4 rounded-xl bg-surface border border-border space-y-2 text-sm font-mono">
            <div>Texto normal: hola → Letras arriba: <strong className="text-ink">ʰᵒˡᵃ</strong></div>
            <div>Texto normal: PRO → Letras elevadas: <strong className="text-ink">ᴾᴿᴼ</strong></div>
            <div>Número normal: 2026 → Números arriba: <strong className="text-ink">²⁰²⁶</strong></div>
          </div>
          <p className="text-muted leading-relaxed">
            Aunque se parecen a letras normales con un tamaño reducido, no funcionan exactamente como una fuente pequeña. Son caracteres Unicode independientes que puedes copiar y pegar en campos de texto compatibles.
          </p>
          <p className="text-muted leading-relaxed">
            Esta diferencia es importante: cambiar el tamaño de una letra en Word no produce necesariamente un carácter que puedas copiar a un nombre de usuario. En cambio, los caracteres elevados se mantienen como parte del texto que copias.
          </p>
          <p className="text-muted leading-relaxed">
            También tienen limitaciones. No existe una versión elevada perfecta para todas las letras, los acentos y los símbolos. Si quieres explorar otros conversores relacionados, visita nuestro{" "}
            <Link href="/conversor-de-letras/" className="text-brand font-semibold underline">
              conversor de letras
            </Link>{" "}
            general.
          </p>
        </section>

        {/* Cómo hacer letras pequeñas arriba para copiar y pegar */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Cómo hacer letras pequeñas arriba para copiar y pegar
          </h2>
          <p className="text-muted leading-relaxed">
            Convertir un nombre es sencillo y no requiere conocimientos técnicos.
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-surface border border-border space-y-2">
              <h3 className="text-lg font-bold text-ink">
                1. Escribe el texto que quieres convertir
              </h3>
              <p className="text-sm text-muted">
                Introduce una palabra, una frase corta, un apodo o una etiqueta. Puedes probar con: Hola, Amor, Luna, Pro, Gamer, Elite, 2026. El generador mostrará el resultado usando los caracteres elevados disponibles.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-2">
              <h3 className="text-lg font-bold text-ink">
                2. Elige entre letras minúsculas y mayúsculas arriba
              </h3>
              <p className="text-sm text-muted">
                Las minúsculas elevadas suelen verse más delicadas y funcionan bien para palabras cortas (por ejemplo: ʰᵒˡᵃ, ᵃᵐᵒʳ, ˡᵘⁿᵃ, ᵖʳᵒ). Las mayúsculas elevadas tienen una apariencia diferente y son útiles para etiquetas de jugadores o clanes (por ejemplo: ᴾᴿᴼ, ᴳᴼᴰ, ᴷᴵᴺᴳ, ᴹⱽᴾ).
              </p>
              <p className="text-xs text-muted italic">
                Nota: No todas las letras cuentan con una variante mayúscula elevada exacta. Por eso, algunas combinaciones pueden incluir caracteres de apariencia similar.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-2">
              <h3 className="text-lg font-bold text-ink">
                3. Copia el resultado
              </h3>
              <p className="text-sm text-muted">
                Pulsa el botón Copiar junto al texto que prefieras. Después, abre la aplicación o el juego donde quieras utilizarlo, mantén pulsado el campo de texto y selecciona Pegar. Antes de guardar un nombre definitivo, revisa que todos los caracteres se hayan mostrado correctamente.
              </p>
            </div>
          </div>
        </section>

        {/* Letras chiquitas arriba listas para copiar */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Letras chiquitas arriba listas para copiar
          </h2>
          <p className="text-muted leading-relaxed">
            Si no quieres escribir nada, puedes utilizar estos ejemplos:
          </p>

          <div className="overflow-x-auto bg-surface rounded-2xl border border-border p-4">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase text-muted tracking-wider">
                  <th className="py-2.5 px-3">Texto normal</th>
                  <th className="py-2.5 px-3">Letras pequeñas arriba</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="py-2 px-3 font-semibold text-ink">Hola</td><td className="py-2 px-3 font-mono font-bold text-ink">ʰᵒˡᵃ</td></tr>
                <tr><td className="py-2 px-3 font-semibold text-ink">Amor</td><td className="py-2 px-3 font-mono font-bold text-ink">ᵃᵐᵒʳ</td></tr>
                <tr><td className="py-2 px-3 font-semibold text-ink">Luna</td><td className="py-2 px-3 font-mono font-bold text-ink">ˡᵘⁿᵃ</td></tr>
                <tr><td className="py-2 px-3 font-semibold text-ink">Pro</td><td className="py-2 px-3 font-mono font-bold text-ink">ᵖʳᵒ</td></tr>
                <tr><td className="py-2 px-3 font-semibold text-ink">Gamer</td><td className="py-2 px-3 font-mono font-bold text-ink">ᵍᵃᵐᵉʳ</td></tr>
                <tr><td className="py-2 px-3 font-semibold text-ink">Elite</td><td className="py-2 px-3 font-mono font-bold text-ink">ᵉˡⁱᵗᵉ</td></tr>
                <tr><td className="py-2 px-3 font-semibold text-ink">Mini</td><td className="py-2 px-3 font-mono font-bold text-ink">ᵐⁱⁿⁱ</td></tr>
                <tr><td className="py-2 px-3 font-semibold text-ink">Rey</td><td className="py-2 px-3 font-mono font-bold text-ink">ʳᵉʸ</td></tr>
                <tr><td className="py-2 px-3 font-semibold text-ink">2026</td><td className="py-2 px-3 font-mono font-bold text-ink">²⁰²⁶</td></tr>
                <tr><td className="py-2 px-3 font-semibold text-ink">123</td><td className="py-2 px-3 font-mono font-bold text-ink">¹²³</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted leading-relaxed">
            Estos ejemplos utilizan caracteres Unicode que puedes seleccionar y copiar. La apariencia exacta puede variar según la fuente del dispositivo. Si una letra se ve distinta de las demás, no significa necesariamente que el texto esté dañado. Puede deberse a que su carácter elevado procede de otro grupo de símbolos Unicode.
          </p>
        </section>

        {/* Letras pequeñas arriba del nombre */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Letras pequeñas arriba del nombre
          </h2>
          <p className="text-muted leading-relaxed">
            Uno de los usos más populares de este estilo es añadir una palabra corta antes o después de un nombre.
          </p>
          <div className="p-4 rounded-xl bg-surface border border-border text-sm">
            Por ejemplo: <strong className="text-ink font-mono text-base">ᴾᴿᴼ Shadow</strong>. En esta combinación, PRO aparece elevado y Shadow conserva su escritura habitual.
          </div>
          <p className="text-muted leading-relaxed">
            También puedes colocar la etiqueta al final (<span className="font-mono font-bold">Shadow ᴾᴿᴼ</span>) o utilizar un número (<span className="font-mono font-bold">Luna ²⁰²⁶</span>). Este estilo permite destacar una categoría, un rango, una abreviatura o una palabra especial sin transformar todo el nombre.
          </p>

          <div className="space-y-3 pt-2">
            <h3 className="text-lg font-bold text-ink">
              Cómo crear un nombre con letras arriba
            </h3>
            <p className="text-sm text-muted">
              Primero, elige una etiqueta corta. Puede ser PRO, MVP, GOD o una palabra que tenga significado para ti. Después, escribe el nombre principal. Por último, selecciona si quieres colocar la etiqueta antes o después.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-sm pt-1">
              <div className="p-2.5 rounded-lg bg-surface border border-border">ᴾᴿᴼ Shadow</div>
              <div className="p-2.5 rounded-lg bg-surface border border-border">ᴳᴼᴰ Alex</div>
              <div className="p-2.5 rounded-lg bg-surface border border-border">ᴹⱽᴾ Luna</div>
              <div className="p-2.5 rounded-lg bg-surface border border-border">ᴷᴵᴺᴳ Leo</div>
              <div className="p-2.5 rounded-lg bg-surface border border-border">Gamer ²⁰²⁶</div>
              <div className="p-2.5 rounded-lg bg-surface border border-border">ᵖʳᵒ Mateo</div>
            </div>
            <p className="text-xs text-muted">
              Las etiquetas cortas suelen resultar más fáciles de leer que una frase completa convertida en superíndice.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="text-lg font-bold text-ink">
              ¿Las letras aparecen realmente encima del nombre?
            </h3>
            <p className="text-muted leading-relaxed">
              No exactamente. Los caracteres elevados se colocan en la misma línea de texto que el nombre principal. Su diseño hace que parezcan más altos y pequeños, pero no crean una segunda línea flotante.
            </p>
            <p className="text-muted leading-relaxed">
              Por eso, <strong>ᴾᴿᴼ Shadow</strong> es una sola secuencia de texto, no dos elementos colocados uno encima del otro. Si necesitas situar una palabra en una línea superior independiente dentro de un diseño, lo adecuado es utilizar una herramienta de edición con controles de posición.
            </p>
          </div>
        </section>

        {/* Letras pequeñas arriba para Free Fire */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Letras pequeñas arriba para Free Fire
          </h2>
          <p className="text-muted leading-relaxed">
            Los jugadores de Free Fire pueden utilizar letras elevadas para preparar etiquetas decorativas y combinarlas con sus nombres.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-sm">
            <div className="p-2.5 rounded-lg bg-surface border border-border">ᴾᴿᴼ Alex</div>
            <div className="p-2.5 rounded-lg bg-surface border border-border">ᴳᴼᴰ Mateo</div>
            <div className="p-2.5 rounded-lg bg-surface border border-border">ᴹⱽᴾ Luna</div>
            <div className="p-2.5 rounded-lg bg-surface border border-border">ᴷᴵᴺᴳ Diego</div>
            <div className="p-2.5 rounded-lg bg-surface border border-border">ᴱᴸᴵᵀᴱ Leo</div>
            <div className="p-2.5 rounded-lg bg-surface border border-border">ˢⁿⁱᵖᵉʳ Max</div>
          </div>
          <p className="text-xs text-muted">
            Estos ejemplos son propuestas de texto, no una garantía de que el juego acepte todos los caracteres. Los juegos pueden limitar los símbolos permitidos, la longitud de los nombres y los cambios de apodo. Para más opciones, visita nuestra sección de{" "}
            <Link href="/nombres-para-free-fire/" className="text-brand font-semibold underline">
              nombres para Free Fire
            </Link>.
          </p>

          <div className="space-y-3 pt-2">
            <h3 className="text-lg font-bold text-ink">
              Cómo preparar un nick para Free Fire
            </h3>
            <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted">
              <li>Escribe la etiqueta que quieres elevar.</li>
              <li>Convierte la etiqueta con el generador.</li>
              <li>Añade tu nombre principal.</li>
              <li>Copia la combinación completa.</li>
              <li>Comprueba que el campo de nombre del juego acepta los caracteres antes de confirmar el cambio.</li>
            </ol>
            <p className="text-xs text-muted">
              Si el juego rechaza el texto, prueba una etiqueta más corta o elimina los caracteres especiales que causen el problema. También puedes usar un separador de{" "}
              <Link href="/texto-invisible/" className="text-brand font-semibold underline">
                texto invisible
              </Link>{" "}
              si el juego no permite espacios comunes.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="text-lg font-bold text-ink">
              Qué estilo elegir para un nick
            </h3>
            <p className="text-muted leading-relaxed">
              Las mayúsculas elevadas suelen funcionar bien para etiquetas breves porque destacan visualmente. Las minúsculas elevadas son una alternativa para nombres más suaves o discretos.
            </p>
            <p className="text-muted leading-relaxed">
              No es necesario transformar todas las letras. A menudo basta con elevar una etiqueta de tres o cuatro caracteres. También conviene evitar símbolos excesivos alrededor del nombre. Un apodo demasiado recargado puede ser difícil de reconocer, buscar o escribir.
            </p>
          </div>
        </section>

        {/* Letras mayúsculas pequeñas arriba */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Letras mayúsculas pequeñas arriba
          </h2>
          <p className="text-muted leading-relaxed">
            Las mayúsculas elevadas son caracteres que se parecen a letras capitales colocadas en una posición alta.
          </p>
          <div className="p-4 rounded-xl bg-surface border border-border text-sm font-mono tracking-widest font-bold">
            ᴬ ᴮ ᴰ ᴱ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᴿ ᵀ ᵁ ⱽ ᵂ
          </div>
          <p className="text-muted leading-relaxed">
            No existe un alfabeto uniforme de mayúsculas elevadas para todas las letras latinas. Por eso, algunos generadores utilizan una combinación de caracteres elevados y letras modificadoras. El resultado puede parecer coherente en ciertas palabras, pero presentar diferencias de altura o forma en otras.
          </p>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-ink">
              Ejemplos de mayúsculas arriba
            </h3>
            <div className="flex flex-wrap gap-2 font-mono text-sm">
              <span className="px-3 py-1.5 rounded-lg bg-surface border border-border font-bold">ᴾᴿᴼ</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface border border-border font-bold">ᴳᴼᴰ</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface border border-border font-bold">ᴷᴵᴺᴳ</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface border border-border font-bold">ᴹⱽᴾ</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface border border-border font-bold">ᴱᴸᴵᵀᴱ</span>
            </div>
            <p className="text-xs text-muted">
              Para un resultado legible, utiliza palabras cortas y comprueba la vista previa.
            </p>
          </div>
        </section>

        {/* Letras minúsculas arriba */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Letras minúsculas arriba
          </h2>
          <p className="text-muted leading-relaxed">
            Las minúsculas elevadas ofrecen una apariencia más ligera:
          </p>
          <div className="p-4 rounded-xl bg-surface border border-border text-sm font-mono tracking-widest font-bold">
            ᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ⁱ ʲ ᵏ ˡ ᵐ ⁿ ᵒ ᵖ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ
          </div>
          <p className="text-muted leading-relaxed">
            Estas letras permiten crear palabras como <strong>ʰᵒˡᵃ</strong>, <strong>ᵃᵐᵒʳ</strong> y <strong>ˡᵘⁿᵃ</strong>.
          </p>
          <p className="text-muted leading-relaxed">
            Sin embargo, no todas las letras del alfabeto tienen un equivalente directo. La <strong>q</strong> es un caso especialmente importante para los generadores de texto elevado. Si escribes una palabra que contiene q, un conversor transparente debe conservarla o explicar que está utilizando una aproximación.
          </p>
        </section>

        {/* Abecedario de letras pequeñas arriba */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Abecedario de letras pequeñas arriba
          </h2>
          <p className="text-muted leading-relaxed">
            El abecedario individual resulta útil cuando solo necesitas una letra y no una palabra completa. Puedes copiar una a elevada para un apodo, una m para una etiqueta o una combinación de dos letras para un nombre. El selector del generador debe mostrar claramente qué caracteres están disponibles.
          </p>

          <div className="overflow-x-auto bg-surface rounded-2xl border border-border p-4">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase text-muted tracking-wider">
                  <th className="py-2.5 px-3">Letra</th>
                  <th className="py-2.5 px-3">Forma elevada</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm font-mono">
                <tr><td className="py-2 px-3 font-bold text-ink">a</td><td className="py-2 px-3">ᵃ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">b</td><td className="py-2 px-3">ᵇ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">c</td><td className="py-2 px-3">ᶜ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">d</td><td className="py-2 px-3">ᵈ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">e</td><td className="py-2 px-3">ᵉ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">f</td><td className="py-2 px-3">ᶠ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">g</td><td className="py-2 px-3">ᵍ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">h</td><td className="py-2 px-3">ʰ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">i</td><td className="py-2 px-3">ⁱ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">j</td><td className="py-2 px-3">ʲ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">k</td><td className="py-2 px-3">ᵏ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">l</td><td className="py-2 px-3">ˡ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">m</td><td className="py-2 px-3">ᵐ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">n</td><td className="py-2 px-3">ⁿ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">o</td><td className="py-2 px-3">ᵒ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">p</td><td className="py-2 px-3">ᵖ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">q</td><td className="py-2 px-3 text-muted">Sin equivalente directo</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">r</td><td className="py-2 px-3">ʳ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">s</td><td className="py-2 px-3">ˢ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">t</td><td className="py-2 px-3">ᵗ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">u</td><td className="py-2 px-3">ᵘ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">v</td><td className="py-2 px-3">ᵛ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">w</td><td className="py-2 px-3">ʷ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">x</td><td className="py-2 px-3">ˣ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">y</td><td className="py-2 px-3">ʸ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">z</td><td className="py-2 px-3">ᶻ</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted">
            No debes interpretar esta tabla como un conjunto de letras creado originalmente para decorar nombres. Muchos de estos caracteres tienen usos específicos en transcripción fonética. El generador aprovecha su apariencia visual para crear texto decorativo.
          </p>
        </section>

        {/* Números pequeños arriba para copiar */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Números pequeños arriba para copiar
          </h2>
          <p className="text-muted leading-relaxed">
            A diferencia de las letras, los dígitos elevados del 0 al 9 están disponibles. Puedes copiarlos aquí:
          </p>
          <div className="p-4 rounded-xl bg-surface border border-border text-2xl font-mono tracking-widest font-bold">
            ⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹
          </div>
          <p className="text-muted leading-relaxed">
            Ejemplos: <span className="font-mono font-bold">¹²³</span>, <span className="font-mono font-bold">²⁰²⁶</span>, <span className="font-mono font-bold">⁹⁹</span>, <span className="font-mono font-bold">¹⁰⁰</span>, <span className="font-mono font-bold">ᴾᴿᴼ ¹</span>, <span className="font-mono font-bold">Luna ²⁰²⁶</span>.
          </p>
          <p className="text-muted leading-relaxed">
            Los números elevados pueden servir como adornos de nombres, etiquetas o referencias breves. También aparecen en determinados contextos matemáticos, como ² y ³. Sin embargo, para escribir expresiones matemáticas complejas en un documento, es preferible utilizar el formato de superíndice de un editor o un sistema de notación adecuado.
          </p>
        </section>

        {/* Letras pequeñas arriba para Instagram, TikTok y WhatsApp */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Letras pequeñas arriba para Instagram, TikTok y WhatsApp
          </h2>
          <p className="text-muted leading-relaxed">
            Los caracteres elevados pueden utilizarse en algunos campos de texto que admiten Unicode. Entre los usos posibles están las biografías, los nombres visibles, los mensajes y las descripciones (por ejemplo: <span className="font-mono font-bold">ᵐⁱⁿⁱ ᵇⁱᵒ</span>, <span className="font-mono font-bold">ᵃᵐᵒʳ</span>, <span className="font-mono font-bold">ᵖʳᵒ</span>, <span className="font-mono font-bold">Luna ²⁰²⁶</span>).
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">Para biografías</h3>
              <p className="text-sm text-muted">
                Una palabra corta elevada puede servir como detalle decorativo dentro de una biografía. No es necesario transformar toda la descripción. Combinar texto normal con una etiqueta elevada suele facilitar la lectura. Encuentra más estilos en nuestra sección de{" "}
                <Link href="/letras-para-instagram/" className="text-brand font-semibold underline">
                  letras para Instagram
                </Link>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">Para nombres visibles</h3>
              <p className="text-sm text-muted">
                Si una plataforma admite los caracteres, puedes utilizarlos en un nombre mostrado públicamente. No confundas el nombre visible con el identificador de usuario. Los campos de identificador pueden tener reglas mucho más estrictas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">Para mensajes</h3>
              <p className="text-sm text-muted">
                Puedes copiar una palabra elevada y pegarla en una conversación. Si el destinatario utiliza un dispositivo o una fuente que no representa bien el carácter, la apariencia puede variar. Por eso conviene comprobar el resultado antes de utilizarlo en un texto importante.
              </p>
            </div>
          </div>
        </section>

        {/* Diferencia entre superíndice, versalitas y subíndice */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Diferencia entre superíndice, versalitas y subíndice
          </h2>
          <p className="text-muted leading-relaxed">
            Aunque los tres estilos pueden parecer pequeños, no son lo mismo.
          </p>

          <div className="overflow-x-auto bg-surface rounded-2xl border border-border p-4">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase text-muted tracking-wider">
                  <th className="py-2.5 px-3">Estilo</th>
                  <th className="py-2.5 px-3">Ejemplo</th>
                  <th className="py-2.5 px-3">Apariencia</th>
                  <th className="py-2.5 px-3">Uso principal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="py-2.5 px-3 font-bold text-ink">Superíndice</td>
                  <td className="py-2.5 px-3 font-mono font-bold text-ink">ʰᵒˡᵃ</td>
                  <td className="py-2.5 px-3 text-muted">Letras elevadas</td>
                  <td className="py-2.5 px-3 text-muted">Etiquetas y decoración</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-ink">Versalitas</td>
                  <td className="py-2.5 px-3 font-mono font-bold text-ink">ʜᴏʟᴀ</td>
                  <td className="py-2.5 px-3 text-muted">Mayúsculas de apariencia pequeña</td>
                  <td className="py-2.5 px-3 text-muted">Nombres y biografías</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-ink">Subíndice</td>
                  <td className="py-2.5 px-3 font-mono font-bold text-ink">ₕₒₗₐ</td>
                  <td className="py-2.5 px-3 text-muted">Letras situadas más abajo, con cobertura parcial</td>
                  <td className="py-2.5 px-3 text-muted">Notación y decoración limitada</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted leading-relaxed">
            El superíndice es la opción adecuada si buscas específicamente letras arriba del nombre. Las versalitas son una alternativa cuando quieres letras pequeñas pero alineadas con el texto normal. El subíndice produce el efecto contrario al superíndice y no dispone de equivalentes directos para todas las letras.
          </p>
          <p className="text-muted leading-relaxed">
            Para explorar estos estilos juntos, utiliza la página principal de{" "}
            <Link href="/letras-pequenas/" className="text-brand font-semibold underline">
              Letras Pequeñas
            </Link>{" "}
            de LetrasBonitas.
          </p>
        </section>

        {/* ¿Por qué algunas letras no se convierten? */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            ¿Por qué algunas letras no se convierten?
          </h2>
          <p className="text-muted leading-relaxed">
            Una de las preguntas más importantes sobre los generadores de superíndices es por qué algunas letras permanecen normales. La explicación está en Unicode.
          </p>
          <p className="text-muted leading-relaxed">
            Unicode no ofrece una versión elevada completa de todos los caracteres para decorar cualquier palabra. Los caracteres disponibles proceden de diferentes necesidades de escritura, especialmente de la notación y la transcripción fonética. Por eso puede faltar una letra que parece muy común.
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">Qué pasa con la letra q</h3>
              <p className="text-sm text-muted">
                La q no cuenta con una alternativa directa equivalente a las demás minúsculas elevadas del alfabeto latino utilizado por estos generadores. Un conversor puede dejar la q normal para evitar sustituirla por un carácter incorrecto. Esto es preferible a cambiar silenciosamente el significado del texto.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">Qué ocurre con la ñ</h3>
              <p className="text-sm text-muted">
                La ñ es importante para los usuarios que escriben en español. No debe convertirse automáticamente en n sin avisar. Por ejemplo, transformar año en una secuencia equivalente a ano cambiaría la palabra. Cuando no exista un carácter elevado adecuado, es mejor conservar la ñ original o mostrar una opción explícita de aproximación.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">Qué ocurre con las vocales acentuadas</h3>
              <p className="text-sm text-muted">
                Las vocales á, é, í, ó y ú tampoco deben perder sus acentos automáticamente. Algunos generadores eliminan las tildes para producir un resultado visualmente uniforme, pero eso modifica la escritura original. Un generador fiable debe explicar qué hace con los caracteres que no puede convertir.
              </p>
            </div>
          </div>
        </section>

        {/* ¿Las letras pequeñas arriba funcionan en todos los dispositivos? */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            ¿Las letras pequeñas arriba funcionan en todos los dispositivos?
          </h2>
          <p className="text-muted leading-relaxed">
            No se puede garantizar que todos los caracteres se vean idénticos en todos los móviles, navegadores y aplicaciones. Unicode identifica los caracteres, pero su apariencia depende de las fuentes y de la representación del sistema. Puede haber diferencias de grosor, altura, espaciado y alineación. También es posible que una aplicación limite determinados caracteres en algunos campos.
          </p>
          <div className="p-4 rounded-xl bg-surface border border-border text-sm text-muted space-y-1">
            <p className="font-bold text-ink">Para comprobar la compatibilidad:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Genera una palabra corta.</li>
              <li>Cópiala.</li>
              <li>Pégala en el campo donde quieras usarla.</li>
              <li>Comprueba que se muestra correctamente.</li>
              <li>Guarda el cambio solo cuando estés satisfecho.</li>
            </ol>
            <p className="pt-1">
              Si un carácter aparece como un cuadro vacío o un símbolo extraño, prueba una alternativa más sencilla.
            </p>
          </div>
        </section>

        {/* Consejos para crear nombres con letras arriba */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Consejos para crear nombres con letras arriba
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface border border-border space-y-1">
              <h3 className="text-sm font-bold text-ink">Utiliza etiquetas cortas</h3>
              <p className="text-xs text-muted">
                Las etiquetas de dos a cinco caracteres suelen ser más fáciles de leer que frases largas. Por ejemplo, ᴾᴿᴼ es más compacto que una descripción completa convertida en letras elevadas.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border space-y-1">
              <h3 className="text-sm font-bold text-ink">Combina texto normal y elevado</h3>
              <p className="text-xs text-muted">
                No necesitas convertir todo el nombre. Una etiqueta elevada seguida de un nombre normal puede crear una separación visual clara.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border space-y-1">
              <h3 className="text-sm font-bold text-ink">Comprueba las letras que faltan</h3>
              <p className="text-xs text-muted">
                Si tu palabra contiene q, ñ o vocales acentuadas, revisa el resultado con especial atención.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border space-y-1">
              <h3 className="text-sm font-bold text-ink">Evita demasiados símbolos</h3>
              <p className="text-xs text-muted">
                Añadir marcos, estrellas, separadores y letras elevadas al mismo tiempo puede dificultar la lectura. Si necesitas adornos complementarios, usa los recursos de nuestra sección de{" "}
                <Link href="/simbolos/" className="text-brand font-semibold underline">
                  símbolos
                </Link>.
              </p>
            </div>
          </div>
          <p className="text-xs text-muted">
            <strong>Guarda una copia del nombre original:</strong> Antes de cambiar un nombre importante, conserva su versión normal. Así podrás recuperarla fácilmente si necesitas modificarlo.
          </p>
        </section>

        {/* Problemas frecuentes y soluciones */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Problemas frecuentes y soluciones
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-surface border border-border">
              <h3 className="text-base font-bold text-ink">El botón Copiar no funciona</h3>
              <p className="text-sm text-muted mt-1">
                Comprueba que el navegador permite utilizar el portapapeles. Si la copia automática falla, selecciona manualmente el resultado y utiliza la opción de copiar del dispositivo.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border">
              <h3 className="text-base font-bold text-ink">Algunas letras aparecen normales</h3>
              <p className="text-sm text-muted mt-1">
                Probablemente no existe una variante elevada adecuada en el conjunto utilizado por el generador. Revisa el aviso de caracteres no compatibles.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border">
              <h3 className="text-base font-bold text-ink">El nombre se ve diferente en otro móvil</h3>
              <p className="text-sm text-muted mt-1">
                Las fuentes y los sistemas operativos pueden representar los caracteres con pequeñas diferencias. Prueba una etiqueta más corta o utiliza caracteres más comunes.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border">
              <h3 className="text-base font-bold text-ink">La aplicación no acepta el texto</h3>
              <p className="text-sm text-muted mt-1">
                Algunas aplicaciones aplican restricciones propias. El hecho de que puedas copiar un carácter no significa que todos los campos permitan utilizarlo.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border">
              <h3 className="text-base font-bold text-ink">Las letras se ven demasiado pequeñas</h3>
              <p className="text-sm text-muted mt-1">
                Prueba una etiqueta en mayúsculas elevadas o combina menos caracteres especiales. Si la legibilidad es más importante que el efecto decorativo, utiliza letras normales.
              </p>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes sobre letras pequeñas arriba */}
        <section className="space-y-4" id="faq">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Preguntas frecuentes sobre letras pequeñas arriba
          </h2>
          <div className="space-y-3">
            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Cómo poner letras pequeñas arriba del nombre?
              </h3>
              <p className="text-sm text-muted">
                Escribe una etiqueta en el generador, conviértela a caracteres elevados y combínala con tu nombre. Después copia el resultado completo.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Cómo hacer letras chiquitas arriba desde el celular?
              </h3>
              <p className="text-sm text-muted">
                Abre el generador en el navegador del móvil, escribe tu texto y pulsa Copiar. No necesitas instalar un teclado especial.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Cómo copiar letras en superíndice?
              </h3>
              <p className="text-sm text-muted">
                Puedes copiar el resultado completo del generador o seleccionar una letra individual en el abecedario de caracteres elevados.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Hay letras mayúsculas arriba?
              </h3>
              <p className="text-sm text-muted">
                Sí, existen varios caracteres Unicode con apariencia de mayúsculas elevadas. Sin embargo, no forman un alfabeto completamente uniforme.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Cómo poner letras pequeñas arriba en Free Fire?
              </h3>
              <p className="text-sm text-muted">
                Prepara el nombre con el generador y comprueba si el campo de nombre del juego acepta los caracteres. La compatibilidad puede variar.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Por qué la letra q no aparece pequeña arriba?
              </h3>
              <p className="text-sm text-muted">
                Porque el conjunto habitual de caracteres elevados no incluye una alternativa directa equivalente a la q minúscula.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Puedo copiar números pequeños arriba?
              </h3>
              <p className="text-sm text-muted">
                Sí. Los dígitos ⁰¹²³⁴⁵⁶⁷⁸⁹ están disponibles y pueden copiarse individualmente o como parte de una secuencia.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Las letras pequeñas arriba son una fuente?
              </h3>
              <p className="text-sm text-muted">
                No exactamente. El generador utiliza caracteres Unicode con apariencia elevada. No instala una tipografía ni modifica el tamaño de la fuente del dispositivo.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Se pueden usar letras arriba en Instagram?
              </h3>
              <p className="text-sm text-muted">
                Pueden utilizarse en algunos campos compatibles con Unicode, como determinadas biografías o nombres visibles. La aceptación depende de las reglas de cada campo.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Por qué la ñ y los acentos no se convierten siempre?
              </h3>
              <p className="text-sm text-muted">
                Porque no todos los caracteres españoles tienen equivalentes elevados directos. Conservarlos evita cambiar silenciosamente la escritura original.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusión */}
        <section className="space-y-4 bg-surface rounded-2xl border border-border p-6 md:p-8 text-center">
          <h2 className="text-2xl font-extrabold text-ink tracking-tight">
            Conclusión
          </h2>
          <p className="text-muted leading-relaxed max-w-2xl mx-auto">
            Las letras pequeñas arriba permiten crear etiquetas, nombres y detalles decorativos utilizando caracteres Unicode que puedes copiar y pegar. Son especialmente útiles para combinar una palabra elevada con un nombre normal o para añadir números pequeños a un apodo.
          </p>
          <p className="text-muted leading-relaxed max-w-2xl mx-auto">
            Utiliza el generador de LetrasBonitas para preparar tu texto, revisar las letras que no tienen equivalentes y copiar la combinación que prefieras. Antes de usarla en un juego o una red social, comprueba que el resultado se muestra correctamente.
          </p>
          <div className="pt-2">
            <a
              href="#convInput"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-white font-bold text-sm shadow-md hover:bg-brand-hover transition-colors"
            >
              Ir al Generador de Letras Arriba ↑
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
