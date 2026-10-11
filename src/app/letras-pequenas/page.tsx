import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SmallLettersGenerator } from "@/components/font-generator/SmallLettersGenerator";

export function generateMetadata(): Metadata {
  return {
    title: "Letras Pequeñas para Copiar y Pegar | LetrasBonitas",
    description:
      "Convierte texto en letras pequeñas, versalitas, superíndices y subíndices. Copia letras chiquitas y números pequeños para nombres y biografías.",
    alternates: {
      canonical: "/letras-pequenas/",
    },
    openGraph: {
      title: "Letras Pequeñas para Copiar y Pegar | LetrasBonitas",
      description:
        "Convierte texto en letras pequeñas, versalitas, superíndices y subíndices. Copia letras chiquitas y números pequeños para nombres y biografías.",
      locale: "es",
      type: "website",
      url: "/letras-pequenas/",
    },
    twitter: {
      card: "summary",
      title: "Letras Pequeñas para Copiar y Pegar | LetrasBonitas",
      description:
        "Convierte texto en letras pequeñas, versalitas, superíndices y subíndices. Copia letras chiquitas y números pequeños para nombres y biografías.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LetrasPequenasPage() {
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
        "@id": "https://letrasbonits.com/letras-pequenas/#webpage",
        url: "https://letrasbonits.com/letras-pequenas/",
        name: "Letras Pequeñas para Copiar y Pegar | LetrasBonitas",
        description:
          "Convierte texto en letras pequeñas, versalitas, superíndices y subíndices. Copia letras chiquitas y números pequeños para nombres y biografías.",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/letras-pequenas/#breadcrumb",
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
        ],
      },
      {
        "@type": "WebApplication",
        "@id": "https://letrasbonits.com/letras-pequenas/#app",
        name: "Generador de Letras Pequeñas y Chiquitas",
        url: "https://letrasbonits.com/letras-pequenas/",
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
        "@id": "https://letrasbonits.com/letras-pequenas/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo escribir letras pequeñas para copiar y pegar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ingresa tu palabra o apodo en la casilla del generador, elige entre versalitas, superíndice o subíndice, y pulsa el botón Copiar en tu estilo preferido. El resultado se guardará en tu portapapeles listo para pegarse en cualquier red social.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo poner letras pequeñas arriba en un nombre?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Selecciona el estilo de superíndice (letras arriba) o mayúsculas elevadas en la herramienta. Estos caracteres flotan sobre la línea base del texto común y son compatibles con apodos de Free Fire, biografías y títulos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué diferencia hay entre versalitas y superíndice?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Las versalitas son letras mayúsculas con la altura de las minúsculas que se apoyan normalmente sobre el renglón. El superíndice se compone de glifos elevados que flotan en la parte superior, como los exponentes numéricos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué algunas letras quedan normales y no se convierten en subíndice?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El estándar Unicode no incluye versiones en subíndice para letras como b, c, d, f, g, q, w, y, z. Cuando un conversor procesa estas letras, las mantiene en su formato normal para evitar alterar el texto con caracteres incorrectos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo copiar números pequeños?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "En la biblioteca de caracteres de la herramienta encontrarás números en superíndice (del cero al nueve elevados) y números en subíndice (del cero al nueve inferiores). Puedes escribirlos en el convertidor o copiarlos de uno en uno con un clic.",
            },
          },
          {
            "@type": "Question",
            name: "¿Funcionan las letras pequeñas en Free Fire?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, la mayoría de los caracteres en superíndice y versalitas son plenamente visibles en Free Fire. Recuerda que el límite máximo del juego es de 12 caracteres y cada glifo pequeño cuenta como un carácter entero.",
            },
          },
          {
            "@type": "Question",
            name: "¿Se pueden usar letras pequeñas en el nombre de usuario de Instagram?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No se pueden usar en el identificador técnico (@usuario), ya que este solo admite letras estándar de la a a la z, números, puntos y guiones bajos. Sin embargo, sí funcionan sin problemas en el campo de Nombre visible y en la descripción de la biografía.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo hacer letras pequeñas desde el móvil?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Abre esta página desde el navegador de tu celular Android o iPhone, teclea tu frase en el convertidor y pulsa el botón Copiar. No necesitas instalar aplicaciones de teclados ni realizar descargas externas.",
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
            { label: "Letras Pequeñas" },
          ]}
        />
      </div>

      {/* ── ENCABEZADO PRINCIPAL (H1) ── */}
      <header className="text-center max-w-3xl mx-auto mb-8 space-y-3">
        <h1 className="text-3xl md:text-5xl font-black text-ink tracking-tight">
          Letras Pequeñas para Copiar y Pegar
        </h1>
        <p className="text-base md:text-lg text-muted font-normal leading-relaxed">
          Convierte nombres y frases en letras chiquitas, versalitas, superíndices y subíndices. Elige tu estilo y cópialo en un clic.
        </p>
      </header>

      {/* ── HERRAMIENTA INTERACTIVA VIP ── */}
      <section className="mb-16" aria-label="Herramienta de letras pequeñas">
        <SmallLettersGenerator />
      </section>

      {/* ── ARTÍCULO COMPLETO DE GUÍA Y DOCUMENTACIÓN SEO ── */}
      <article className="max-w-4xl mx-auto space-y-12 text-ink leading-relaxed font-normal">
        {/* Introducción PAS */}
        <section className="space-y-4 bg-surface rounded-2xl border border-border p-6 md:p-8">
          <p className="text-base md:text-lg text-ink font-medium">
            ¿Intentas personalizar tu biografía de Instagram, diseñar un apodo llamativo para Free Fire o crear un estado original en WhatsApp y las fuentes comunes se ven monótonas y aburridas? En la mayoría de las plataformas digitales las opciones de formato son mínimas: no hay botones de tamaño ni barras de herramientas tipográficas para reducir el texto.
          </p>
          <p className="text-base md:text-lg text-ink font-medium">
            Esta limitación hace que millones de perfiles luzcan idénticos y pasen desapercibidos entre la multitud. Nuestro generador de letras pequeñas soluciona este problema mediante caracteres Unicode especializados: traduce tus palabras en versalitas elegantes, superíndices flotantes y subíndices matemáticos que puedes copiar con un solo toque y pegar donde quieras, sin instalar aplicaciones adicionales.
          </p>
        </section>

        {/* Sección: ¿Qué son las letras pequeñas? */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            ¿Qué son las letras pequeñas?
          </h2>
          <p className="text-muted leading-relaxed">
            Las llamadas <strong>letras pequeñas</strong> (también conocidas popularmente como <em>letras chiquitas</em>, <em>letras diminutas</em> o <em>letras mini</em>) no son una fuente tipográfica instalada en el sistema, sino una colección de glifos independientes pertenecientes al estándar universal de codificación <strong>Unicode</strong>.
          </p>
          <p className="text-muted leading-relaxed">
            A diferencia de un documento de Word donde seleccionas una frase y reduces el tamaño de letra de 16 a 10 puntos (lo cual es un ajuste visual de presentación mediante CSS o formato enriquecido), las letras pequeñas Unicode son caracteres con códigos numéricos propios. Esto significa que cuando escribes la letra <strong>H</strong> y la transformas en la versalita <strong>ʜ</strong> o en el superíndice <strong>ʰ</strong>, el sistema operativo no lee una letra grande reducida con una lupa, sino un carácter tipográfico único que viaja íntegro en el portapapeles.
          </p>
          <p className="text-muted leading-relaxed">
            Por esta razón, estos textos diminutos pueden viajar a través de campos de texto plano donde no existe ningún menú de edición, como las biografías de redes sociales, el chat de mensajería instantánea o las pantallas de nombres de los videojuegos más populares. Si quieres explorar otros efectos textuales parecidos, puedes visitar nuestro{" "}
            <Link href="/conversor-de-letras/" className="text-brand font-semibold underline">
              conversor de letras
            </Link>{" "}
            general o la sección de{" "}
            <Link href="/conversor-de-letras/letras-para-copiar-y-pegar/" className="text-brand font-semibold underline">
              letras para copiar y pegar
            </Link>.
          </p>
        </section>

        {/* Sección: Cómo crear letras pequeñas online */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Cómo crear letras pequeñas online paso a paso
          </h2>
          <p className="text-muted leading-relaxed">
            Generar texto diminuto con nuestro conversor es un proceso instantáneo que requiere solo tres acciones:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-surface border border-border space-y-2">
              <span className="text-brand font-black text-2xl">01</span>
              <h3 className="text-lg font-bold text-ink">Escribe tu texto</h3>
              <p className="text-sm text-muted">
                Escribe tu apodo, palabra o frase en el cuadro superior. El conversor actualizará todos los alfabetos de forma simultánea e inmediata.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-surface border border-border space-y-2">
              <span className="text-brand font-black text-2xl">02</span>
              <h3 className="text-lg font-bold text-ink">Elige tu estilo</h3>
              <p className="text-sm text-muted">
                Compara entre versalitas, letras arriba, mayúsculas de clan o estilos decorados. Utiliza el control deslizante para ajustar el tamaño de vista previa.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-surface border border-border space-y-2">
              <span className="text-brand font-black text-2xl">03</span>
              <h3 className="text-lg font-bold text-ink">Copia y pega</h3>
              <p className="text-sm text-muted">
                Pulsa el botón Copiar en tu diseño favorito. Abre tu red social o juego y pega el resultado manteniendo pulsado el campo de texto.
              </p>
            </div>
          </div>
        </section>

        {/* Sección: Tipos de letras pequeñas */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Tipos de letras pequeñas disponibles en el generador
          </h2>
          <p className="text-muted leading-relaxed">
            No todas las letras reducidas pertenecen a la misma familia estilística. Es fundamental distinguir las tres ramas principales y sus variantes decorativas para saber cuándo conviene emplear cada una:
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-surface border border-border space-y-2">
              <h3 className="text-lg font-bold text-ink">
                1. Versalitas (Small Capitals)
              </h3>
              <p className="text-sm text-muted">
                Las versalitas representan letras en mayúscula dibujadas con proporciones reducidas, alineadas a la altura de la x de las minúsculas normales. Se apoyan con firmeza sobre el renglón y ofrecen la mejor legibilidad de todo el catálogo.
              </p>
              <div className="p-3 rounded-xl bg-surface-2 font-mono text-sm text-ink font-semibold">
                Ejemplo: hola mundo → ʜᴏʟᴀ ᴍᴜɴᴅᴏ
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-2">
              <h3 className="text-lg font-bold text-ink">
                2. Letras pequeñas arriba (Superíndice)
              </h3>
              <p className="text-sm text-muted">
                Son caracteres que se sitúan suspendidos en la parte superior del renglón. Originalmente fueron concebidos para notación matemática, fonética y abreviaturas ordinales, pero hoy en día son los favoritos indiscutibles para prefijos de clanes y títulos en videojuegos. Si buscas un compositor de apodos especializado, consulta nuestra guía de <Link href="/letras-pequenas/letras-pequenas-arriba/" className="text-brand font-semibold underline">letras pequeñas arriba</Link>.
              </p>
              <div className="p-3 rounded-xl bg-surface-2 font-mono text-sm text-ink font-semibold">
                Ejemplo: gamer pro → ᵍᵃᵐᵉʳ ᵖʳᵒ
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-2">
              <h3 className="text-lg font-bold text-ink">
                3. Mayúsculas arriba (Raised Capitals)
              </h3>
              <p className="text-sm text-muted">
                A diferencia del superíndice estándar en minúsculas, este estilo utiliza glifos en caja alta elevados. Permite crear etiquetas de clan compactas y contundentes, como el famoso distintivo de marca registrada.
              </p>
              <div className="p-3 rounded-xl bg-surface-2 font-mono text-sm text-ink font-semibold">
                Ejemplo: rey del juego → ᴿᴱʸ ᴰᴱᴸ ᴶᵁᴱᴳᴼ
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-2">
              <h3 className="text-lg font-bold text-ink">
                4. Letras pequeñas abajo (Subíndice)
              </h3>
              <p className="text-sm text-muted">
                Estos glifos se ubican por debajo de la línea base del texto. En el entorno académico se emplean para fórmulas químicas (como el 2 en H₂O) e índices de matrices. Su cobertura en el abecedario latino es parcial por limitaciones históricas del estándar.
              </p>
              <div className="p-3 rounded-xl bg-surface-2 font-mono text-sm text-ink font-semibold">
                Ejemplo: aeroplano → ₐₑᵣₒₚₗₐₙₒ
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-2">
              <h3 className="text-lg font-bold text-ink">
                5. Letras pequeñas decoradas y aesthetic
              </h3>
              <p className="text-sm text-muted">
                Combinan las versalitas y los caracteres flotantes con marcos de destellos, corazones, coronas de rey o corchetes japoneses. Son perfectas si deseas un acabado más expresivo sin perder la compacidad del texto reducido. Para ver colecciones similares, visita nuestra guía de{" "}
                <Link href="/letras-aesthetic/" className="text-brand font-semibold underline">
                  letras aesthetic
                </Link>.
              </p>
              <div className="p-3 rounded-xl bg-surface-2 font-mono text-sm text-ink font-semibold">
                Ejemplo: estrella → ⋆｡°✩ ᴇꜱᴛʀᴇʟʟᴀ ✩°｡⋆
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Letras pequeñas para copiar y pegar */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Letras pequeñas para copiar y pegar: guía de uso práctico
          </h2>
          <p className="text-muted leading-relaxed">
            Una de las ventajas más valoradas de las letras pequeñas es su portabilidad. Al tratarse de texto puro, puedes copiarlas con el botón integrado o seleccionarlas manualmente con el cursor. Una vez almacenadas en el portapapeles, son aceptadas en:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted">
            <li>
              <strong>Descripciones y biografías:</strong> Funcionan en Instagram, TikTok, Facebook, X (Twitter), Threads y Pinterest.
            </li>
            <li>
              <strong>Nombres de usuario visibles:</strong> En muchas plataformas puedes cambiar el nombre mostrado (Display Name) manteniendo intacto tu arroba técnico.
            </li>
            <li>
              <strong>Comentarios y publicaciones:</strong> Aportan jerarquía visual para crear notas al pie de foto, advertencias breves o pies de página creativos.
            </li>
            <li>
              <strong>Servidores de Discord y chats grupales:</strong> Para crear apodos de servidor organizados por rangos, facciones o roles de moderación.
            </li>
          </ul>
          <p className="text-muted leading-relaxed">
            Si combinas estas letras con otros formatos tipográficos, como las{" "}
            <Link href="/letras-negritas/" className="text-brand font-semibold underline">
              letras negritas
            </Link>{" "}
            o las{" "}
            <Link href="/letras-cursivas/" className="text-brand font-semibold underline">
              letras cursivas
            </Link>, puedes estructurar una biografía profesional con un nivel de diseño que pocos usuarios consiguen.
          </p>
        </section>

        {/* Sección: Abecedario de letras pequeñas de la A a la Z */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Abecedario de letras pequeñas de la A a la Z
          </h2>
          <p className="text-muted leading-relaxed">
            A continuación se presenta la correspondencia alfabética directa para cada una de las familias. Esta referencia te permite entender cómo se mapea cada letra latina estándar en su respectivo bloque de Unicode:
          </p>

          <div className="overflow-x-auto bg-surface rounded-2xl border border-border p-4">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase text-muted tracking-wider">
                  <th className="py-2.5 px-3">Letra</th>
                  <th className="py-2.5 px-3">Versalita</th>
                  <th className="py-2.5 px-3">Superíndice</th>
                  <th className="py-2.5 px-3">Mayúscula Arriba</th>
                  <th className="py-2.5 px-3">Subíndice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border font-mono text-sm">
                <tr><td className="py-2 px-3 font-bold text-ink">A / a</td><td className="py-2 px-3">ᴀ</td><td className="py-2 px-3">ᵃ</td><td className="py-2 px-3">ᴬ</td><td className="py-2 px-3">ₐ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">B / b</td><td className="py-2 px-3">ʙ</td><td className="py-2 px-3">ᵇ</td><td className="py-2 px-3">ᴮ</td><td className="py-2 px-3 text-muted">b (sin Unicode)</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">C / c</td><td className="py-2 px-3">ᴄ</td><td className="py-2 px-3">ᶜ</td><td className="py-2 px-3">ᶜ</td><td className="py-2 px-3 text-muted">c (sin Unicode)</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">D / d</td><td className="py-2 px-3">ᴅ</td><td className="py-2 px-3">ᵈ</td><td className="py-2 px-3">ᴰ</td><td className="py-2 px-3 text-muted">d (sin Unicode)</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">E / e</td><td className="py-2 px-3">ᴇ</td><td className="py-2 px-3">ᵉ</td><td className="py-2 px-3">ᴱ</td><td className="py-2 px-3">ₑ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">F / f</td><td className="py-2 px-3">ғ</td><td className="py-2 px-3">ᶠ</td><td className="py-2 px-3">ᶠ</td><td className="py-2 px-3 text-muted">f (sin Unicode)</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">G / g</td><td className="py-2 px-3">ɢ</td><td className="py-2 px-3">ᵍ</td><td className="py-2 px-3">ᴳ</td><td className="py-2 px-3 text-muted">g (sin Unicode)</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">H / h</td><td className="py-2 px-3">ʜ</td><td className="py-2 px-3">ʰ</td><td className="py-2 px-3">ᴴ</td><td className="py-2 px-3">ₕ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">I / i</td><td className="py-2 px-3">ɪ</td><td className="py-2 px-3">ⁱ</td><td className="py-2 px-3">ᴵ</td><td className="py-2 px-3">ᵢ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">J / j</td><td className="py-2 px-3">ᴊ</td><td className="py-2 px-3">ʲ</td><td className="py-2 px-3">ᴶ</td><td className="py-2 px-3">ⱼ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">K / k</td><td className="py-2 px-3">ᴋ</td><td className="py-2 px-3">ᵏ</td><td className="py-2 px-3">ᴷ</td><td className="py-2 px-3">ₖ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">L / l</td><td className="py-2 px-3">ʟ</td><td className="py-2 px-3">ˡ</td><td className="py-2 px-3">ᴸ</td><td className="py-2 px-3">ₗ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">M / m</td><td className="py-2 px-3">ᴍ</td><td className="py-2 px-3">ᵐ</td><td className="py-2 px-3">ᴹ</td><td className="py-2 px-3">ₘ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">N / n</td><td className="py-2 px-3">ɴ</td><td className="py-2 px-3">ⁿ</td><td className="py-2 px-3">ᴺ</td><td className="py-2 px-3">ₙ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">O / o</td><td className="py-2 px-3">ᴏ</td><td className="py-2 px-3">ᵒ</td><td className="py-2 px-3">ᴼ</td><td className="py-2 px-3">ₒ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">P / p</td><td className="py-2 px-3">ᴘ</td><td className="py-2 px-3">ᵖ</td><td className="py-2 px-3">ᴾ</td><td className="py-2 px-3">ₚ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">Q / q</td><td className="py-2 px-3">ǫ</td><td className="py-2 px-3 text-muted">q (sin Unicode)</td><td className="py-2 px-3 text-muted">Q</td><td className="py-2 px-3 text-muted">q (sin Unicode)</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">R / r</td><td className="py-2 px-3">ʀ</td><td className="py-2 px-3">ʳ</td><td className="py-2 px-3">ᴿ</td><td className="py-2 px-3">ᵣ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">S / s</td><td className="py-2 px-3">ꜱ</td><td className="py-2 px-3">ˢ</td><td className="py-2 px-3">ˢ</td><td className="py-2 px-3">ₛ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">T / t</td><td className="py-2 px-3">ᴛ</td><td className="py-2 px-3">ᵗ</td><td className="py-2 px-3">ᵀ</td><td className="py-2 px-3">ₜ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">U / u</td><td className="py-2 px-3">ᴜ</td><td className="py-2 px-3">ᵘ</td><td className="py-2 px-3">ᵁ</td><td className="py-2 px-3">ᵤ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">V / v</td><td className="py-2 px-3">ᴠ</td><td className="py-2 px-3">ᵛ</td><td className="py-2 px-3">ⱽ</td><td className="py-2 px-3">ᵥ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">W / w</td><td className="py-2 px-3">ᴡ</td><td className="py-2 px-3">ʷ</td><td className="py-2 px-3">ᵂ</td><td className="py-2 px-3 text-muted">w (sin Unicode)</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">X / x</td><td className="py-2 px-3">x</td><td className="py-2 px-3">ˣ</td><td className="py-2 px-3">ˣ</td><td className="py-2 px-3">ₓ</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">Y / y</td><td className="py-2 px-3">ʏ</td><td className="py-2 px-3">ʸ</td><td className="py-2 px-3">ʸ</td><td className="py-2 px-3 text-muted">y (sin Unicode)</td></tr>
                <tr><td className="py-2 px-3 font-bold text-ink">Z / z</td><td className="py-2 px-3">ᴢ</td><td className="py-2 px-3">ᶻ</td><td className="py-2 px-3">ᶻ</td><td className="py-2 px-3 text-muted">z (sin Unicode)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sección: Letras pequeñas arriba para nombres y nicks */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Letras pequeñas arriba para nombres y nicks
          </h2>
          <p className="text-muted leading-relaxed">
            El estilo de <strong>letras arriba</strong> se ha convertido en el estándar no oficial de la comunidad gamer y de creadores de contenido. Al colocar una etiqueta flotante al inicio o al final de tu nombre principal, generas un contraste inmediato entre el texto base y la insignia.
          </p>
          <p className="text-muted leading-relaxed">
            Algunos de los formatos más populares incluyen:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface border border-border">
              <span className="text-xs uppercase text-brand font-bold">Insignia de Clan</span>
              <p className="text-base font-bold text-ink mt-1">ᵀᴹ ᴅᴀʀᴋɴᴇꜱꜱ</p>
              <p className="text-xs text-muted mt-1">Combina la marca elevada con versalitas centrales.</p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border">
              <span className="text-xs uppercase text-brand font-bold">Prefijo de Rango</span>
              <p className="text-base font-bold text-ink mt-1">ᵖʳᵒ ꜰᴇɴɪx</p>
              <p className="text-xs text-muted mt-1">Letras minúsculas suspendidas antes del nombre.</p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border">
              <span className="text-xs uppercase text-brand font-bold">Subtítulo Elevado</span>
              <p className="text-base font-bold text-ink mt-1">ᴢᴇᴜꜱ ᵇᵒˢˢ</p>
              <p className="text-xs text-muted mt-1">Remate al final del nick en tamaño diminuto.</p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border">
              <span className="text-xs uppercase text-brand font-bold">Siglas de Equipo</span>
              <p className="text-base font-bold text-ink mt-1">ᶠᶠ ᴠᴀʟᴋɪʀɪᴀ</p>
              <p className="text-xs text-muted mt-1">Abreviatura compacta para escuadras competitivas.</p>
            </div>
          </div>
          <p className="text-muted leading-relaxed">
            Puedes encontrar más sugerencias de apodos estructurados en nuestra sección dedicada a los{" "}
            <Link href="/nombres-para-juegos/" className="text-brand font-semibold underline">
              nombres para juegos
            </Link>.
          </p>
        </section>

        {/* Sección: Letras pequeñas para Free Fire */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Letras pequeñas para Free Fire
          </h2>
          <p className="text-muted leading-relaxed">
            En Garena Free Fire, el nombre de perfil es tu carta de presentación ante compañeros y rivales. Sin embargo, el juego impone reglas estrictas que debes conocer para no desperdiciar diamantes ni tarjetas de cambio de nombre:
          </p>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">1. Límite estricto de 12 caracteres</h3>
              <p className="text-sm text-muted">
                Existe el mito popular de que las letras pequeñas ocupan medio espacio o permiten saltarse el límite de caracteres. En términos técnicos, <strong>cada letra pequeña cuenta como exactamente un carácter</strong> en la base de datos de Garena. Por ejemplo, el texto <strong>ᵀᴹᴋɪɴɢ</strong> cuenta como 5 caracteres completos. Diseña apodos de 8 a 10 letras para dejar margen a posibles espacios y símbolos.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">2. Espacios en blanco invisibles</h3>
              <p className="text-sm text-muted">
                Free Fire rechaza la barra espaciadora común del teclado. Si deseas separar tus letras pequeñas del resto de tu apodo, debes insertar un espacio en blanco Unicode compatible, como el espacio de no separación o el espacio de figura. Puedes obtenerlo fácilmente en nuestra sección de{" "}
                <Link href="/texto-invisible/" className="text-brand font-semibold underline">
                  texto invisible
                </Link>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">3. Combinación con símbolos ornamentales</h3>
              <p className="text-sm text-muted">
                Las versalitas combinan a la perfección con cruces, alas y armas. Visita nuestro catálogo de{" "}
                <Link href="/nombres-para-free-fire/" className="text-brand font-semibold underline">
                  nombres para Free Fire
                </Link>{" "}
                o el explorador de{" "}
                <Link href="/simbolos/" className="text-brand font-semibold underline">
                  símbolos
                </Link>{" "}
                para complementar tu diseño antes de aplicarlo en tu perfil.
              </p>
            </div>
          </div>
        </section>

        {/* Sección: Letras pequeñas para Instagram y TikTok */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Letras pequeñas para Instagram y TikTok
          </h2>
          <p className="text-muted leading-relaxed">
            Tanto Instagram como TikTok cuentan con millones de creadores compitiendo por la atención de la audiencia en fracciones de segundo. El uso de letras pequeñas aporta un toque minimalista y sofisticado a los perfiles que desean proyectar pulcritud y elegancia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-surface border border-border space-y-2">
              <h3 className="text-base font-bold text-ink">Dónde sí funcionan</h3>
              <ul className="text-sm text-muted space-y-1.5 list-disc list-inside">
                <li>En el <strong>Nombre de perfil visible</strong> (Display Name).</li>
                <li>En las líneas de la <strong>biografía</strong> o descripción de perfil.</li>
                <li>En los <strong>textos de las publicaciones</strong> y comentarios.</li>
                <li>En los títulos de las historias destacadas de Instagram.</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-surface border border-border space-y-2">
              <h3 className="text-base font-bold text-ink">Dónde no funcionan</h3>
              <ul className="text-sm text-muted space-y-1.5 list-disc list-inside">
                <li>En el <strong>nombre de usuario (@handle)</strong>, que únicamente admite caracteres alfanuméricos ASCII básicos.</li>
                <li>En correos electrónicos o enlaces URL directos vinculados en la cuenta.</li>
              </ul>
            </div>
          </div>
          <p className="text-muted leading-relaxed">
            Para optimizar al máximo tu cuenta de Instagram con fuentes específicas para perfiles, puedes consultar nuestra herramienta de{" "}
            <Link href="/letras-para-instagram/" className="text-brand font-semibold underline">
              letras para Instagram
            </Link>.
          </p>
        </section>

        {/* Sección: Letras pequeñas para WhatsApp y Discord */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Letras pequeñas para WhatsApp y Discord
          </h2>
          <p className="text-muted leading-relaxed">
            En las plataformas de mensajería instantánea y comunidades de voz, las letras pequeñas ofrecen una gran utilidad para jerarquizar la información:
          </p>
          <p className="text-muted leading-relaxed">
            En <strong>WhatsApp</strong>, puedes utilizarlas en tu frase de Información (el estado permanente del perfil) o dentro de tus mensajes para redactar aclaraciones sin necesidad de usar el formato de tachado o cursiva tradicional de la aplicación. Las versalitas se leen con gran nitidez en pantallas móviles tanto en Android como en iOS.
          </p>
          <p className="text-muted leading-relaxed">
            En <strong>Discord</strong>, son especialmente útiles en los nombres de canales de texto y voz. Aunque Discord convierte las mayúsculas en minúsculas en los nombres de canales estándar, las versalitas y los caracteres en superíndice no sufren esa conversión, lo que te permite organizar categorías con una estética distinguida.
          </p>
        </section>

        {/* Sección: Números pequeños para copiar */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Números pequeños para copiar (Superíndice y Subíndice)
          </h2>
          <p className="text-muted leading-relaxed">
            Además de las letras alfabéticas, Unicode dispone de un repertorio completo de dígitos pequeños del 0 al 9 en dos posiciones de elevación distintas. A diferencia de las letras, <strong>todos los números del 0 al 9 cuentan con representación oficial tanto en superíndice como en subíndice</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface border border-border space-y-2">
              <span className="text-xs uppercase text-brand font-bold">Números Arriba (Superíndice)</span>
              <div className="text-2xl font-mono text-ink tracking-widest font-bold">
                ⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹
              </div>
              <p className="text-xs text-muted">
                Ideales para fechas de nacimiento en nicks, números de escuadrón o aniversarios en biografías (ejemplo: ᴊᴜᴀɴ²⁰²⁴).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border space-y-2">
              <span className="text-xs uppercase text-brand font-bold">Números Abajo (Subíndice)</span>
              <div className="text-2xl font-mono text-ink tracking-widest font-bold">
                ₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉
              </div>
              <p className="text-xs text-muted">
                Diseñados para fórmulas científicas, notas matemáticas e identificadores de series técnicas (ejemplo: ᴄᴏ₂ o x₁₂).
              </p>
            </div>
          </div>
        </section>

        {/* Sección: Diferencia entre letras pequeñas, minúsculas y superíndices */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Diferencia entre letras pequeñas, minúsculas y fuentes tipográficas
          </h2>
          <p className="text-muted leading-relaxed">
            Existe una confusión habitual entre tres conceptos que parecen similares pero funcionan de manera enteramente diferente en informática:
          </p>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-surface border border-border">
              <h3 className="text-base font-bold text-ink">1. Letras minúsculas convencionales</h3>
              <p className="text-sm text-muted mt-1">
                Son las letras estándar de nuestro teclado (como <em>a, b, c</em>). Pertenecen al bloque ASCII básico de Unicode. Aunque son más bajas que las mayúsculas, no son caracteres reducidos ni flotantes.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border">
              <h3 className="text-base font-bold text-ink">2. Tamaño de fuente reducido por software (CSS / Word)</h3>
              <p className="text-sm text-muted mt-1">
                Ocurre cuando aplicas una instrucción de estilo visual (como <code>font-size: 10px</code>). Al copiar ese texto y pegarlo en una casilla que solo admite texto plano (como un apodo de juego), el formato se descarta inmediatamente y la letra vuelve a su tamaño estándar.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border">
              <h3 className="text-base font-bold text-ink">3. Letras pequeñas Unicode (nuestra herramienta)</h3>
              <p className="text-sm text-muted mt-1">
                Son caracteres autosuficientes. No dependen de hojas de estilo ni de instrucciones del navegador. Si copias <strong>ʜᴏʟᴀ</strong> o <strong>ʰᵒˡᵃ</strong>, el sistema receptor almacena esos caracteres exactos sin perder jamás su apariencia diminuta.
              </p>
            </div>
          </div>
        </section>

        {/* Sección: Por qué algunas letras no se convierten */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Por qué algunas letras no se convierten y qué hacer
          </h2>
          <p className="text-muted leading-relaxed">
            Al utilizar generadores de letras pequeñas en internet, es común notar que ciertas letras no cambian o se quedan en su formato original. La explicación no es un error de programación, sino una limitación inherente a la historia de Unicode:
          </p>
          <p className="text-muted leading-relaxed">
            El Consorcio Unicode nunca creó estos caracteres pensando en la personalización estética de redes sociales. Fueron añadidos a lo largo de décadas para satisfacer las necesidades de la <strong>fonética internacional (alfabeto AFI)</strong> y la <strong>notación científica</strong>. Dado que los lingüistas no necesitaban una letra <em>q</em> volada ni una <em>b</em> en subíndice para sus transcripciones dialectales, dichos caracteres nunca fueron asignados formalmente en los bloques estándar.
          </p>
          <div className="p-5 rounded-2xl bg-surface border border-border space-y-3">
            <h3 className="text-base font-bold text-ink">Cómo manejamos los caracteres especiales en español:</h3>
            <ul className="text-sm text-muted space-y-2 list-disc list-inside">
              <li>
                <strong>Tildes (á, é, í, ó, ú):</strong> En el estándar no existen versalitas ni superíndices acentuados. Nuestro generador conserva tus acentos por defecto para respetar la ortografía. Si prefieres la máxima cobertura visual, puedes activar la casilla de normalización de tildes en el panel superior.
              </li>
              <li>
                <strong>La letra Ñ / ñ:</strong> Al igual que las tildes, no existe una versalita con virgulilla nativa en Unicode. El generador mantiene la letra original para que tu texto conserve su sentido fonético.
              </li>
              <li>
                <strong>Política de reemplazo honesta:</strong> En lugar de insertar símbolos extraños o caracteres de alfabetos ajenos que puedan romperse en otros teléfonos, preferimos dejar la letra legible o informarte mediante la notificación de caracteres no convertidos.
              </li>
            </ul>
          </div>
        </section>

        {/* Sección: Cómo elegir el mejor estilo de letra pequeña */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Cómo elegir el mejor estilo de letra pequeña
          </h2>
          <p className="text-muted leading-relaxed">
            Para obtener el mejor resultado posible según la plataforma donde vayas a pegar tu texto, consulta la siguiente tabla de recomendaciones prácticas:
          </p>

          <div className="overflow-x-auto bg-surface rounded-2xl border border-border p-4">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase text-muted tracking-wider">
                  <th className="py-2.5 px-3">Familia</th>
                  <th className="py-2.5 px-3">Legibilidad</th>
                  <th className="py-2.5 px-3">Compatibilidad</th>
                  <th className="py-2.5 px-3">Uso Recomendado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="py-2.5 px-3 font-bold text-ink">Versalitas</td>
                  <td className="py-2.5 px-3 text-emerald-600 font-semibold">Excelente</td>
                  <td className="py-2.5 px-3 text-emerald-600 font-semibold">99% de dispositivos</td>
                  <td className="py-2.5 px-3 text-muted">Biografías completas, nombres de Instagram, títulos limpios.</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-ink">Letras Arriba (Superíndice)</td>
                  <td className="py-2.5 px-3 text-amber-600 font-semibold">Media-Alta</td>
                  <td className="py-2.5 px-3 text-emerald-600 font-semibold">95% de dispositivos</td>
                  <td className="py-2.5 px-3 text-muted">Apodos de Free Fire, prefijos de clan, marcas registradas.</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-ink">Mayúsculas Arriba</td>
                  <td className="py-2.5 px-3 text-emerald-600 font-semibold">Alta</td>
                  <td className="py-2.5 px-3 text-emerald-600 font-semibold">95% de dispositivos</td>
                  <td className="py-2.5 px-3 text-muted">Siglas de clanes, abreviaturas de equipos, etiquetas de juego.</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-ink">Letras Abajo (Subíndice)</td>
                  <td className="py-2.5 px-3 text-amber-600 font-semibold">Media (huecos)</td>
                  <td className="py-2.5 px-3 text-amber-600 font-semibold">85% de dispositivos</td>
                  <td className="py-2.5 px-3 text-muted">Fórmulas, números inferiores, palabras con letras a, e, o, i.</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-ink">Aesthetic / Decoradas</td>
                  <td className="py-2.5 px-3 text-emerald-600 font-semibold">Alta</td>
                  <td className="py-2.5 px-3 text-emerald-600 font-semibold">98% de dispositivos</td>
                  <td className="py-2.5 px-3 text-muted">Frases destacadas, historias de Instagram, bios creativas.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sección: Problemas frecuentes al copiar letras pequeñas */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Problemas frecuentes al copiar letras pequeñas y soluciones
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-surface border border-border">
              <h3 className="text-base font-bold text-ink">Aparecen rectángulos o signos de interrogación (tofu)</h3>
              <p className="text-sm text-muted mt-1">
                Esto sucede cuando el dispositivo o la versión del sistema operativo del receptor no tiene instaladas las fuentes del bloque de Extensiones Fonéticas de Unicode. Suele ocurrir en modelos muy antiguos de teléfonos. En todos los dispositivos modernos con Android 9+ e iOS 13+ el soporte supera el 98%.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border">
              <h3 className="text-base font-bold text-ink">El juego me indica que el nombre contiene caracteres no permitidos</h3>
              <p className="text-sm text-muted mt-1">
                Algunos títulos aplican filtros estrictos de seguridad para prevenir ataques de inyección o suplantación. Si tu juego rechaza una combinación, prueba utilizando únicamente las <strong>Versalitas</strong>, que al apoyarse en la línea base suelen superar la gran mayoría de filtros antifraude.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border">
              <h3 className="text-base font-bold text-ink">El portapapeles no copia al pulsar el botón</h3>
              <p className="text-sm text-muted mt-1">
                Ciertos navegadores en modo incógnito o ventanas de navegación interna bloquean el permiso de escritura automática del portapapeles. Si eso ocurre, nuestra herramienta abrirá inmediatamente una ventana emergente que selecciona el texto para que lo copies con el atajo tradicional o con un toque en la pantalla.
              </p>
            </div>
          </div>
        </section>

        {/* Sección: Preguntas frecuentes (FAQ) */}
        <section className="space-y-4" id="faq">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
            Preguntas Frecuentes sobre las Letras Pequeñas
          </h2>
          <div className="space-y-3">
            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Cómo escribir letras pequeñas para copiar y pegar?
              </h3>
              <p className="text-sm text-muted">
                Solo debes escribir tu texto en el recuadro superior de esta página, seleccionar la categoría que más te guste (como versalitas o letras arriba) y hacer clic en el botón Copiar. Luego ve a tu aplicación y pégalo directamente.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Cómo poner letras pequeñas arriba en mi nombre?
              </h3>
              <p className="text-sm text-muted">
                Elige la opción de superíndice o mayúsculas elevadas en nuestro convertidor. Estas letras flotan por encima del renglón y son el formato predilecto para nicks y clanes en juegos multijugador.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Qué diferencia hay entre versalitas y superíndice?
              </h3>
              <p className="text-sm text-muted">
                Las versalitas descansan normalmente sobre la línea base del texto y tienen la altura de las minúsculas normales. El superíndice, en cambio, flota en la parte alta del texto, asemejándose a un exponente numérico o una marca registrada.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Por qué algunas letras no se hacen pequeñas?
              </h3>
              <p className="text-sm text-muted">
                Porque el estándar Unicode carece de glifos en subíndice para letras como b, c, d, f, g, q, w, y, z y tampoco tiene una q volada en superíndice. Para garantizar la veracidad del texto, el conversor las conserva en su formato legible.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Cómo copiar números pequeños?
              </h3>
              <p className="text-sm text-muted">
                En nuestra sección de abecedario encontrarás todos los dígitos del 0 al 9 en superíndice y subíndice. Puedes copiarlos con un solo clic o escribirlos en el convertidor junto con tu nombre.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Funcionan las letras pequeñas en Free Fire?
              </h3>
              <p className="text-sm text-muted">
                Sí, se muestran a la perfección tanto en el juego como en la sala de espera. Ten presente que Free Fire impone un límite máximo de 12 caracteres en total para cualquier apodo.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Se pueden usar letras pequeñas en Instagram y TikTok?
              </h3>
              <p className="text-sm text-muted">
                Puedes utilizarlas libremente en el campo de Nombre, en la biografía, en comentarios y en publicaciones. No se permiten en el nombre de usuario de inicio de sesión (@handle).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <h3 className="text-base font-bold text-ink">
                ¿Cómo hacer letras pequeñas desde el teléfono móvil?
              </h3>
              <p className="text-sm text-muted">
                Ingresa a esta página web desde el navegador de tu celular (Chrome, Safari o Firefox). La herramienta está totalmente optimizada para dispositivos táctiles, sin necesidad de instalar apps ni otorgar permisos.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusión */}
        <section className="space-y-4 bg-surface rounded-2xl border border-border p-6 md:p-8 text-center">
          <h2 className="text-2xl font-extrabold text-ink tracking-tight">
            Crea tu diseño en letras pequeñas ahora mismo
          </h2>
          <p className="text-muted leading-relaxed max-w-2xl mx-auto">
            Personalizar tu presencia online nunca había sido tan sencillo. Sube a la herramienta interactiva en la parte superior, escribe tu nombre o frase y descubre la combinación de letras pequeñas que mejor se adapte a tu estilo personal.
          </p>
          <div className="pt-2">
            <a
              href="#mainInput"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-white font-bold text-sm shadow-md hover:bg-brand-hover transition-colors"
            >
              Ir al Generador de Letras Pequeñas ↑
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
