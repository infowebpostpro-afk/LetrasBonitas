import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HubFontGenerator } from "@/components/font-generator/HubFontGenerator";

export function generateMetadata(): Metadata {
  return {
    title: "Letras Góticas para Copiar y Pegar — Generador Gratis",
    description:
      "Generador de letras góticas para copiar y pegar. Convierte texto normal a estilo Fraktur, gótica negrita y letras decoradas para nicks, bios y redes sociales.",
    alternates: {
      canonical: "/letras-goticas/",
    },
    openGraph: {
      title: "Letras Góticas para Copiar y Pegar — Generador Gratis",
      description:
        "Generador de letras góticas para copiar y pegar. Convierte texto normal a estilo Fraktur, gótica negrita y letras decoradas para nicks, bios y redes sociales.",
      locale: "es",
      type: "website",
      url: "/letras-goticas/",
    },
    twitter: {
      card: "summary",
      title: "Letras Góticas para Copiar y Pegar — Generador Gratis",
      description:
        "Generador de letras góticas para copiar y pegar. Convierte texto normal a estilo Fraktur, gótica negrita y letras decoradas para nicks, bios y redes sociales.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LetrasGoticasPage() {
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
        "@id": "https://letrasbonits.com/letras-goticas/#webpage",
        url: "https://letrasbonits.com/letras-goticas/",
        name: "Letras Góticas para Copiar y Pegar — Generador Gratis",
        description:
          "Genera letras góticas oscuras y llamativas inspiradas en estilos Fraktur y blackletter para copiar y pegar directamente.",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/letras-goticas/#breadcrumb",
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
            name: "Letras Góticas",
            item: "https://letrasbonits.com/letras-goticas/",
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": "https://letrasbonits.com/letras-goticas/#app",
        name: "Generador de Letras Góticas",
        url: "https://letrasbonits.com/letras-goticas/",
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
        "@id": "https://letrasbonits.com/letras-goticas/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo hacer letras góticas para copiar y pegar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Escribe tu texto en el generador, revisa las variantes góticas y pulsa Copiar en la que prefieras. Después pega el resultado en el campo de texto donde quieras probarlo.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué significa Fraktur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fraktur es un término asociado con una forma de blackletter. Unicode también utiliza el nombre Fraktur para determinados caracteres de sus alfabetos matemáticos estilizados.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo convertir mi nombre en letras góticas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Los nombres y nicks cortos son especialmente adecuados para comparar estilos porque puedes ver rápidamente cómo cambia cada letra.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuál es la diferencia entre Fraktur y Fraktur negrita?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Visualmente, la variante negrita tiene mayor peso. Unicode contiene conjuntos denominados Mathematical Fraktur y Mathematical Bold Fraktur.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo escribir una frase completa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Puedes hacerlo si el generador lo permite, pero un estilo muy ornamental puede reducir la legibilidad. Para textos largos suele ser mejor estilizar solo una palabra, nombre o encabezado.",
            },
          },
          {
            "@type": "Question",
            name: "¿Las letras góticas funcionan en todas partes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No se debe asumir compatibilidad universal. La representación depende del soporte de caracteres y de las fuentes disponibles en el dispositivo, navegador o aplicación de destino.",
            },
          },
          {
            "@type": "Question",
            name: "¿Necesito descargar una fuente?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No para utilizar los resultados de este generador. El objetivo de la herramienta es ofrecer caracteres que puedas copiar como texto. Si necesitas diseñar un logotipo, imprimir material o controlar la tipografía con precisión, una fuente real puede ser más apropiada.",
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

      <header className="hero-saas hero-saas--compact hero-saas--conversor">
        <div className="hero-saas__watermark-right" aria-hidden="true">
          𝕲 𝕱 𝕿
        </div>
        <div className="hero-saas__content">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Letras Góticas" },
            ]}
          />
          <span className="hero-saas__badge">⚔️ ESTILO FRAKTUR & BLACKLETTER</span>
          <h1 className="hero-saas__title">
            Letras <span className="gradient-text-cyan">Góticas</span> para Copiar y Pegar
          </h1>
          <p className="hero-saas__lead">
            ¿Quieres que tu nombre, nick o una frase corta tenga un aspecto más oscuro y llamativo? Las letras normales pueden quedarse cortas cuando buscas una identidad visual inspirada en estilos góticos, blackletter o Fraktur.
          </p>
          <p className="hero-saas__lead" style={{ marginTop: "0.5rem" }}>
            Con nuestro generador de letras góticas puedes escribir tu texto una sola vez, comparar diferentes estilos y copiar el resultado que prefieras. No necesitas instalar una fuente para utilizar los resultados del generador.
          </p>
        </div>
      </header>

      {/* ── [GENERADOR DE LETRAS GÓTICAS] ── */}
      <HubFontGenerator
        storagePrefix="goticas"
        defaultCategory="gothic"
        defaultExample="Letras Góticas"
        searchPlaceholder="Buscar estilo gótico (Fraktur, medieval, dark)..."
        quickExamples={[
          "𝕲𝖔𝖙𝖍𝖎𝖈",
          "𝔖𝔬𝔪𝔟𝔯𝔞",
          "𝕷𝖚𝖓𝖆",
          "𝕯𝖆𝖗𝖐 𝖂𝖔𝖑𝖋",
          "𝔐𝔦 𝔪𝔲𝔫𝔡𝔬",
          "𝕹𝖔𝖈𝖍𝖊",
        ]}
        useCases={[
          { id: "nombres", label: "Nombres", icon: "👤", text: "𝔇𝔞𝔫𝔦𝔢𝔩" },
          { id: "nicks", label: "Nicks", icon: "⚔️", text: "𝕯𝖆𝖗𝖐 𝖂𝖔𝖑𝖋" },
          { id: "bios", label: "Bios", icon: "✨", text: "𝔇𝔯𝔢𝔞𝔪𝔢𝔯 | música • arte" },
          { id: "titulos", label: "Títulos", icon: "📜", text: "𝕹𝖔𝖈𝖍𝖊" },
          { id: "firmas", label: "Firmas", icon: "✒️", text: "☾ 𝔖𝔎 ☽" },
        ]}
      />

      {/* ── Editorial Guide Content ── */}
      <article className="prose-section" aria-label="Guía completa sobre letras góticas para copiar y pegar">
        
        {/* Section 1: ¿Qué son las letras góticas para copiar y pegar? */}
        <section className="prose-card">
          <h2>¿Qué son las letras góticas para copiar y pegar?</h2>
          <p>
            En herramientas como esta, el nombre &quot;letras góticas&quot; se utiliza para describir texto creado con caracteres Unicode que visualmente recuerdan a estilos Fraktur o blackletter.
          </p>
          <p>Por ejemplo:</p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Texto normal:</span> <strong>Letras Bonitas</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Estilo Fraktur:</span> <strong>𝔏𝔢𝔱𝔯𝔞𝔰 𝔅𝔬𝔫𝔦𝔱𝔞𝔰</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Fraktur negrita:</span> <strong>𝕷𝖊𝖙𝖗𝖆𝖘 𝕭𝖔𝖓𝖎𝖙𝖆𝖘</strong>
            </div>
          </div>
          <p className="mt-3">
            El resultado no funciona exactamente igual que seleccionar una fuente gótica dentro de un programa de diseño. El generador sustituye determinadas letras por otros caracteres Unicode con una apariencia diferente.
          </p>
          <p>
            Por eso puedes copiar el resultado como texto y probarlo en campos que admitan esos caracteres.
          </p>
        </section>

        {/* Section 2: Cómo usar el generador de letras góticas */}
        <section className="prose-card">
          <h2>Cómo usar el generador de letras góticas</h2>
          <p>El proceso es sencillo:</p>
          <ol className="list-decimal pl-6 space-y-1 text-slate-700">
            <li>Escribe un nombre, palabra o frase en el generador.</li>
            <li>Revisa los estilos que aparecen automáticamente.</li>
            <li>Compara la versión gótica clásica, la negrita y otras variantes disponibles.</li>
            <li>Pulsa <strong>Copiar</strong> en el resultado que prefieras.</li>
            <li>Pega el texto en el lugar donde quieras probarlo.</li>
          </ol>
          <p className="mt-3">
            No tienes que transformar cada letra manualmente.
          </p>
          <p>Por ejemplo, si escribes:</p>
          <p><code>Sombra</code></p>
          <p>puedes obtener una variante como:</p>
          <p><code>𝔖𝔬𝔪𝔟𝔯𝔞</code></p>
          <p>o:</p>
          <p><code>𝕾𝖔𝖒𝖇𝖗𝖆</code></p>
          <p>
            Así puedes comparar el resultado antes de decidir cuál utilizar.
          </p>
        </section>

        {/* Section 3: Estilos de letras góticas que puedes probar */}
        <section className="prose-card">
          <h2>Estilos de letras góticas que puedes probar</h2>
          <p>
            No todo el texto que se describe como &quot;gótico&quot; tiene exactamente la misma apariencia.
          </p>

          <h3>Gótica clásica o Fraktur</h3>
          <p>Tiene una apariencia ornamental y angular.</p>
          <p>Ejemplo: <code>𝔏𝔲𝔫𝔞</code></p>
          <p>
            Puede funcionar bien cuando buscas un nombre corto con un aspecto clásico u oscuro.
          </p>

          <h3>Gótica negrita</h3>
          <p>Utiliza caracteres visualmente más pesados.</p>
          <p>Ejemplo: <code>𝕷𝖚𝖓𝖆</code></p>
          <p>
            Al tener más peso visual, puede destacar mejor en determinadas composiciones cortas.
          </p>

          <h3>Letras góticas decoradas</h3>
          <p>
            También puedes encontrar resultados que combinan el texto con símbolos.
          </p>
          <p>Por ejemplo:</p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Con lunas:</span> <strong>☾ 𝔏𝔲𝔫𝔞 ☽</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Con destellos:</span> <strong>✦ 𝕷𝖚𝖓𝖆 ✦</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Con marcos:</span> <strong>『𝔏𝔲𝔫𝔞』</strong>
            </div>
          </div>
          <p className="mt-3">
            Aquí los símbolos son elementos adicionales. No forman parte de la transformación Fraktur de las letras.
          </p>
        </section>

        {/* Section 4: Ejemplos de letras góticas para copiar */}
        <section className="prose-card">
          <h2>Ejemplos de letras góticas para copiar</h2>
          <p>
            Una buena forma de elegir un estilo es verlo aplicado a algo parecido a lo que realmente quieres escribir.
          </p>

          <h3>Para un nombre</h3>
          <p>Normal: <code>Daniel</code></p>
          <p>Gótico: <code>𝔇𝔞𝔫𝔦𝔢𝔩</code></p>
          <p>Gótico negrita: <code>𝕯𝖆𝖓𝖎𝖊𝖑</code></p>

          <h3>Para un nick corto</h3>
          <p>Normal: <code>Dark Wolf</code></p>
          <p>Gótico: <code>𝔇𝔞𝔯𝔨 𝔚𝔬𝔩𝔣</code></p>
          <p>Decorado: <code>☾ 𝔇𝔞𝔯𝔨 𝔚𝔬𝔩𝔣 ☽</code></p>

          <h3>Para una bio</h3>
          <p>Puedes combinar una palabra estilizada con texto normal:</p>
          <p><code>𝔇𝔯𝔢𝔞𝔪𝔢𝔯 | música • arte • noche</code></p>
          <p>
            Esto evita convertir toda la información de la bio en un estilo más difícil de leer.
          </p>

          <h3>Para un título corto</h3>
          <p>Por ejemplo: <code>𝕹𝖔𝖈𝖍𝖊</code> o <code>✦ 𝔑𝔬𝔠𝔥𝔢 ✦</code></p>

          <h3>Para una firma visual</h3>
          <p>Puedes mantenerla muy simple: <code>𝔖𝔎</code> o añadir un detalle: <code>☾ 𝔖𝔎 ☽</code></p>
          <p>
            La mejor opción depende del espacio disponible y de cuánto protagonismo quieras darle al estilo.
          </p>
        </section>

        {/* Section 5: ¿Dónde usar letras góticas? */}
        <section className="prose-card">
          <h2>¿Dónde usar letras góticas?</h2>
          <p>
            Este tipo de texto funciona especialmente bien cuando quieres destacar una parte pequeña del contenido.
          </p>
          <p>Puedes probarlo en:</p>
          <ul>
            <li>nombres y apodos;</li>
            <li>bios y perfiles;</li>
            <li>captions;</li>
            <li>encabezados cortos;</li>
            <li>mensajes;</li>
            <li>nombres gamer;</li>
            <li>firmas digitales;</li>
            <li>palabras decorativas.</li>
          </ul>
          <p>
            Una palabra corta como <code>𝕹𝖔𝖈𝖍𝖊</code> suele ser más fácil de reconocer que un párrafo entero convertido a caracteres ornamentales.
          </p>
          <p>
            Para información importante, instrucciones o textos largos, mantener letras normales suele ofrecer mejor legibilidad.
          </p>
        </section>

        {/* Section 6: Letras góticas para nombres y nicks */}
        <section className="prose-card">
          <h2>Letras góticas para nombres y nicks</h2>
          <p>
            Los nombres son uno de los usos más naturales de este estilo porque normalmente contienen pocas palabras.
          </p>
          <p>Puedes probar:</p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem"><strong>𝔖𝔞𝔧𝔦𝔡</strong></div>
            <div className="sample-pill" role="listitem"><strong>𝕬𝖑𝖊𝖝</strong></div>
            <div className="sample-pill" role="listitem"><strong>𝔏𝔲𝔫𝔞</strong></div>
            <div className="sample-pill" role="listitem"><strong>𝕯𝖆𝖗𝖐 𝖂𝖔𝖑𝖋</strong></div>
          </div>
          <p className="mt-3">
            También puedes comparar diferentes versiones antes de copiar.
          </p>
          <p>
            Si un resultado parece demasiado cargado, elimina decoraciones y conserva únicamente la transformación de las letras.
          </p>
          <p>
            Por ejemplo: <code>꧁☾ 𝕯𝖆𝖗𝖐 𝖂𝖔𝖑𝖋 ☽꧂</code> puede llamar más la atención, pero <code>𝕯𝖆𝖗𝖐 𝖂𝖔𝖑𝖋</code> es más simple.
          </p>
          <p>
            El estilo más decorado no siempre es el más adecuado.
          </p>
        </section>

        {/* Section 7: Letras góticas para redes sociales */}
        <section className="prose-card">
          <h2>Letras góticas para redes sociales</h2>
          <p>
            Puedes probar estos caracteres en nombres visibles, bios, publicaciones, comentarios u otros campos de texto que permitan pegarlos.
          </p>
          <p>Por ejemplo:</p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem"><strong>𝔐𝔦 𝔪𝔲𝔫𝔡𝔬</strong></div>
            <div className="sample-pill" role="listitem"><strong>𝕸𝖚́𝖘𝖎𝖈𝖆 | 𝕬𝖗𝖙𝖊 | 𝕱𝖔𝖙𝖔𝖘</strong></div>
            <div className="sample-pill" role="listitem"><strong>☾ 𝔫𝔦𝔤𝔥𝔱 ☽</strong></div>
          </div>
          <p className="mt-3">
            Antes de dejar un perfil definitivo, pega el resultado en la plataforma de destino y revisa cómo aparece.
          </p>
          <p>
            No es recomendable asumir que cada carácter decorativo tendrá exactamente la misma apariencia en todas las aplicaciones, dispositivos o fuentes.
          </p>
        </section>

        {/* Section 8: ¿Son fuentes góticas reales? */}
        <section className="prose-card">
          <h2>¿Son fuentes góticas reales?</h2>
          <p>
            No en el mismo sentido que instalar un archivo de fuente en un editor gráfico.
          </p>
          <p>
            Una fuente tradicional cambia la forma en la que un programa dibuja caracteres normales.
          </p>
          <p>
            Un generador de copiar y pegar utiliza caracteres Unicode diferentes para conseguir una apariencia estilizada.
          </p>
          <p>
            Esa diferencia explica por qué puedes seleccionar el resultado del generador, copiarlo y pegarlo como texto.
          </p>
          <p>
            También significa que no deberías utilizar esta herramienta como sustituto de una fuente blackletter profesional cuando estás preparando un logotipo, un documento impreso o un proyecto gráfico que requiere control tipográfico preciso.
          </p>
          <p>
            Para esos trabajos, una fuente real dentro de un programa de diseño suele ser la opción adecuada.
          </p>
        </section>

        {/* Section 9: ¿Qué pasa con las letras españolas como ñ y las vocales con tilde? */}
        <section className="prose-card">
          <h2>¿Qué pasa con las letras españolas como ñ y las vocales con tilde?</h2>
          <p>
            Los alfabetos matemáticos estilizados de Unicode no proporcionan necesariamente una sustitución independiente para cada carácter acentuado que utilizamos en español.
          </p>
          <p>Por eso palabras como:</p>
          <ul>
            <li><code>España</code></li>
            <li><code>corazón</code></li>
            <li><code>música</code></li>
          </ul>
          <p>
            pueden contener una mezcla de caracteres transformados y caracteres conservados, dependiendo de cómo funcione cada estilo.
          </p>
          <p>
            Un buen conversor no debería eliminar una <code>ñ</code>, una tilde o una diéresis solo para hacer que toda la palabra parezca estilizada.
          </p>
          <p>
            Conservar el texto correcto es más importante que forzar una transformación incorrecta.
          </p>
        </section>

        {/* Section 10: ¿Por qué algunas letras góticas se ven diferentes al pegarlas? */}
        <section className="prose-card">
          <h2>¿Por qué algunas letras góticas se ven diferentes al pegarlas?</h2>
          <p>
            El resultado que copias son caracteres de texto, pero la forma exacta en que aparecen depende de las fuentes y del soporte disponible en el sistema donde los visualizas.
          </p>
          <p>
            Por eso conviene comprobar el resultado final después de pegarlo.
          </p>
          <p>
            Si ves un cuadro vacío, un símbolo inesperado o una letra que no se representa correctamente, prueba otra variante del generador o conserva esa parte del texto con caracteres normales.
          </p>
        </section>

        {/* Section 11: Consejos para elegir un estilo gótico */}
        <section className="prose-card">
          <h2>Consejos para elegir un estilo gótico</h2>

          <h3>Prioriza palabras cortas</h3>
          <p>
            Los trazos ornamentales pueden dificultar la lectura cuando transformas demasiado texto.
          </p>

          <h3>Compara la clásica y la negrita</h3>
          <p>
            <code>𝔊𝔬𝔱𝔦𝔠</code> y <code>𝕲𝖔𝖙𝖎𝖈</code> transmiten una sensación parecida, pero tienen diferente peso visual.
          </p>

          <h3>No abuses de los símbolos</h3>
          <p>
            Una decoración como <code>☾ 𝔏𝔲𝔫𝔞 ☽</code> puede ser suficiente.
          </p>
          <p>
            Añadir muchos marcos, estrellas y caracteres alrededor del nombre puede reducir la claridad.
          </p>

          <h3>Comprueba antes de publicar</h3>
          <p>
            Especialmente si el texto se utilizará en un perfil, nick o campo con restricciones.
          </p>
        </section>

        {/* Section 12: Preguntas frecuentes sobre letras góticas */}
        <section className="prose-card">
          <h2>Preguntas frecuentes sobre letras góticas</h2>

          <h3>¿Cómo hacer letras góticas para copiar y pegar?</h3>
          <p>
            Escribe tu texto en el generador, revisa las variantes góticas y pulsa <strong>Copiar</strong> en la que prefieras. Después pega el resultado en el campo de texto donde quieras probarlo.
          </p>

          <h3>¿Qué significa Fraktur?</h3>
          <p>
            Fraktur es un término asociado con una forma de blackletter. Unicode también utiliza el nombre Fraktur para determinados caracteres de sus alfabetos matemáticos estilizados.
          </p>

          <h3>¿Puedo convertir mi nombre en letras góticas?</h3>
          <p>
            Sí. Los nombres y nicks cortos son especialmente adecuados para comparar estilos porque puedes ver rápidamente cómo cambia cada letra.
          </p>

          <h3>¿Cuál es la diferencia entre Fraktur y Fraktur negrita?</h3>
          <p>
            Visualmente, la variante negrita tiene mayor peso. Unicode contiene conjuntos denominados Mathematical Fraktur y Mathematical Bold Fraktur.
          </p>

          <h3>¿Puedo escribir una frase completa?</h3>
          <p>
            Puedes hacerlo si el generador lo permite, pero un estilo muy ornamental puede reducir la legibilidad. Para textos largos suele ser mejor estilizar solo una palabra, nombre o encabezado.
          </p>

          <h3>¿Las letras góticas funcionan en todas partes?</h3>
          <p>
            No se debe asumir compatibilidad universal. La representación depende del soporte de caracteres y de las fuentes disponibles en el dispositivo, navegador o aplicación de destino.
          </p>

          <h3>¿Necesito descargar una fuente?</h3>
          <p>
            No para utilizar los resultados de este generador. El objetivo de la herramienta es ofrecer caracteres que puedas copiar como texto. Si necesitas diseñar un logotipo, imprimir material o controlar la tipografía con precisión, una fuente real puede ser más apropiada.
          </p>
        </section>

        {/* Section 13: Crea tus letras góticas */}
        <section className="prose-card">
          <h2>Crea tus letras góticas</h2>
          <p>
            Las letras góticas pueden dar más personalidad a un nombre, nick o frase corta sin obligarte a instalar una tipografía. Escribe tu texto en el generador, compara las variantes disponibles y copia la que mantenga el equilibrio entre estilo y legibilidad.
          </p>
          <p>
            Si vas a utilizar el resultado en un perfil o aplicación concreta, comprueba cómo se muestra después de pegarlo. Una versión sencilla y legible suele ser más útil que añadir decoración innecesaria.
          </p>
        </section>

        {/* ── Related Hubs Section ── */}
        <section className="prose-card">
          <h2>Explora otros estilos populares</h2>
          <p>
            Combina tus letras góticas con otras tipografías para crear perfiles y textos únicos:
          </p>
          <div className="family-cards-grid">
            <div className="family-card">
              <h3>Letras Cursivas</h3>
              <p>Tipografías caligráficas y manuscritas elegantes para nombres y bios.</p>
              <Link href="/letras-cursivas/" className="btn btn--secondary">Ver Cursivas</Link>
            </div>
            <div className="family-card">
              <h3>Letras Aesthetic</h3>
              <p>Fuentes minimalistas, espaciadas y con destellos aesthetic.</p>
              <Link href="/letras-aesthetic/" className="btn btn--secondary">Ver Aesthetic</Link>
            </div>
            <div className="family-card">
              <h3>Letras Burbuja</h3>
              <p>Texto encerrado en burbujas circulares divertidas y llamativas.</p>
              <Link href="/letras-burbuja/" className="btn btn--secondary">Ver Burbuja</Link>
            </div>
            <div className="family-card">
              <h3>Letras Negritas</h3>
              <p>Convierte tu texto en negrita fuerte para WhatsApp y redes sociales.</p>
              <Link href="/letras-negritas/" className="btn btn--secondary">Ver Negritas</Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
