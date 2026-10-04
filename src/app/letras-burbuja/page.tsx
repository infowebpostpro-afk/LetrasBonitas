import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HubFontGenerator } from "@/components/font-generator/HubFontGenerator";

export function generateMetadata(): Metadata {
  return {
    title: "Letras Burbuja para Copiar y Pegar - Estilo Bubble",
    description:
      "Letras estilo burbuja redondas y divertidas para copiar y pegar: perfectas para nicks y bios.",
    alternates: {
      canonical: "/letras-burbuja/",
    },
    openGraph: {
      title: "Letras Burbuja para Copiar y Pegar - Estilo Bubble",
      description:
        "Letras estilo burbuja redondas y divertidas para copiar y pegar: perfectas para nicks y bios.",
      locale: "es",
      type: "website",
      url: "/letras-burbuja/",
    },
    twitter: {
      card: "summary",
      title: "Letras Burbuja para Copiar y Pegar - Estilo Bubble",
      description:
        "Letras estilo burbuja redondas y divertidas para copiar y pegar: perfectas para nicks y bios.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LetrasBurbujaPage() {
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
        "@id": "https://letrasbonits.com/letras-burbuja/#webpage",
        url: "https://letrasbonits.com/letras-burbuja/",
        name: "Letras Burbuja para Copiar y Pegar - Estilo Bubble",
        description:
          "Letras estilo burbuja redondas y divertidas para copiar y pegar: perfectas para nicks y bios.",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/letras-burbuja/#breadcrumb",
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
            name: "Letras Burbuja",
            item: "https://letrasbonits.com/letras-burbuja/",
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": "https://letrasbonits.com/letras-burbuja/#app",
        name: "Generador de Letras Burbuja",
        url: "https://letrasbonits.com/letras-burbuja/",
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
        "@id": "https://letrasbonits.com/letras-burbuja/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo hacer letras burbuja para copiar y pegar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Escribe tu nombre o palabra en el generador, compara las variantes de círculos claros u oscuros y haz clic en el botón Copiar. Luego pega el texto directamente en tu perfil, juego o red social.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo poner mi nombre en letras burbuja?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Los nombres y apodos cortos lucen especialmente bien en estilo circular porque cada letra queda enmarcada de manera limpia y simétrica.",
            },
          },
          {
            "@type": "Question",
            name: "¿Las letras burbuja son una fuente descargable?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. En las herramientas online para copiar y pegar, las letras burbuja son caracteres del estándar Unicode pertenecientes al bloque de alfanuméricos encerrados, no un archivo tipográfico TTF o OTF.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo convertir números a estilo burbuja?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Los dígitos del 0 al 9 cuentan con equivalentes en círculos transparentes y en círculos negros rellenos dentro del estándar Unicode.",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué la letra ñ o las vocales con tilde no aparecen dentro de un círculo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Unicode no diseñó caracteres encerrados en círculos para letras acentuadas ni para la ñ del abecedario español. Nuestro generador conserva la letra original para mantener la ortografía correcta de tu palabra.",
            },
          },
          {
            "@type": "Question",
            name: "¿Funcionan las letras circulares en todas las aplicaciones móviles?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, en la gran mayoría de dispositivos y aplicaciones modernas como Instagram, TikTok, WhatsApp, Roblox o Discord, ya que los caracteres circulares forman parte de Unicode desde hace décadas.",
            },
          },
          {
            "@type": "Question",
            name: "¿Necesito instalar alguna aplicación o programa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. El generador funciona directamente desde tu navegador móvil o de escritorio, permitiéndote copiar y pegar al instante sin descargas ni registros.",
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

      {/* ── Playful Bubble Typography Hero ── */}
      <header className="hero-saas hero-saas--compact hero-saas--burbuja">
        <div className="hero-saas__watermark-left" aria-hidden="true">
          Ⓑ Ⓤ Ⓑ
        </div>
        <div className="hero-saas__watermark-right" aria-hidden="true">
          ⓑ ⓤ ⓑ ⓑ ⓛ ⓔ
        </div>
        <div className="hero-saas__content">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Letras Burbuja" },
            ]}
          />
          <span className="hero-saas__badge hero-saas__badge--burbuja">
            ○ BUBBLE · CÍRCULOS · TEXTO
          </span>
          <h1 className="hero-saas__title">
            Letras <span className="gradient-text-bubble">Burbuja</span> para Copiar y Pegar
          </h1>
          <p className="hero-saas__lead">
            Transforma cualquier nombre, apodo o frase en caracteres redondos, simpáticos y llamativos. Elige entre burbujas transparentes, círculos oscuros rellenos o marcos esféricos listos para copiar con un solo toque.
          </p>

          {/* Visual comparison showcase with real transformations of Luna */}
          <div className="hero-bubble-showcase" aria-label="Muestras de letras burbuja para la palabra Luna">
            <div className="hero-bubble-pill">
              <span className="hero-bubble-pill__label">Normal:</span>
              <strong>Luna</strong>
            </div>
            <div className="hero-bubble-pill">
              <span className="hero-bubble-pill__label">Burbujas:</span>
              <strong>Ⓛⓤⓝⓐ</strong>
            </div>
            <div className="hero-bubble-pill">
              <span className="hero-bubble-pill__label">Negras:</span>
              <strong>🅛🅤🅝🅐</strong>
            </div>
            <div className="hero-bubble-pill">
              <span className="hero-bubble-pill__label">Paréntesis:</span>
              <strong>⒧⒰⒩⒜</strong>
            </div>
            <div className="hero-bubble-pill">
              <span className="hero-bubble-pill__label">Estrellas:</span>
              <strong>☆ Ⓛⓤⓝⓐ ☆</strong>
            </div>
          </div>

          <div className="hero-bubble-cue" aria-hidden="true">
            <span>Escribe tu texto</span>
            <span>↓</span>
          </div>
        </div>
      </header>

      {/* ── Interactive Hub Font Generator ── */}
      <HubFontGenerator
        storagePrefix="burbuja"
        defaultCategory="bubble"
        defaultExample="Luna"
        searchPlaceholder="Buscar estilo burbuja (círculos blancos, negros, bubble)..."
        quickExamples={[
          "Luna",
          "Sofía",
          "Alex",
          "Mi nombre",
          "Bubble",
          "Cute",
          "Hola",
        ]}
        useCases={[
          { id: "nick", label: "Nick Gamer", icon: "🎮", text: "Ⓖⓐⓜⓔⓡ" },
          { id: "bio", label: "Bio Redes", icon: "🫧", text: "🅑🅘🅔🅝🅥🅔🅝🅘🅓🅞🅢" },
          { id: "destacado", label: "Destacado", icon: "✨", text: "Ⓝⓤⓔⓥⓞ" },
          { id: "lista", label: "Listas", icon: "🔢", text: "① Ⓟⓐⓢⓞ ⓤⓝⓞ" },
          { id: "nombres", label: "Nombres", icon: "👤", text: "Ⓢⓞⓕíⓐ" },
        ]}
      />

      {/* ── Comprehensive Editorial Guide ── */}
      <article className="prose-section" aria-label="Guía completa sobre letras burbuja para copiar y pegar">
        
        {/* Section 1: ¿Qué son las letras burbuja? */}
        <section className="prose-card">
          <h2>¿Qué son las letras burbuja?</h2>
          <p>
            Las <strong>letras burbuja para copiar y pegar</strong> (denominadas también texto en círculos o <em>bubble letters</em>) son caracteres especiales pertenecientes al estándar internacional Unicode en los que cada letra del alfabeto se encuentra encerrada dentro de una figura geométrica circular.
          </p>
          <p>
            A diferencia de un texto común, donde las letras reposan sobre la línea base sin adornos externos, las letras burbuja convierten cada signo en un pequeño sello esférico:
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Texto normal:</span> <strong>Luna</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Burbujas transparentes:</span> <strong>Ⓛⓤⓝⓐ</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Burbujas negras sólidas:</span> <strong>🅛🅤🅝🅐</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Entre paréntesis:</span> <strong>⒧⒰⒩⒜</strong>
            </div>
          </div>
          <p className="mt-3">
            El resultado no es una imagen ni una calcomanía gráfica, sino caracteres de texto editables que puedes copiar al portapapeles y pegar en cualquier campo digital que admita texto Unicode.
          </p>
        </section>

        {/* Section 2: Cómo hacer letras burbuja */}
        <section className="prose-card">
          <h2>Cómo hacer letras burbuja para copiar y pegar</h2>
          <p>
            Transformar cualquier palabra con nuestro generador es un proceso instantáneo de cinco pasos:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-700">
            <li>
              <strong>Escribe tu texto:</strong> Introduce en la caja superior la palabra, nombre o número que quieras transformar.
            </li>
            <li>
              <strong>Compara las opciones disponibles:</strong> Revisa las versiones en círculos claros, círculos oscuros, marcos con estrellas o estilos entre paréntesis.
            </li>
            <li>
              <strong>Elige la variante más adecuada:</strong> Las burbujas blancas aportan un tono alegre y abierto, mientras que las burbujas negras proporcionan un impacto visual mayor.
            </li>
            <li>
              <strong>Pulsa el botón Copiar:</strong> El texto estilizado se guardará de inmediato en el portapapeles de tu dispositivo.
            </li>
            <li>
              <strong>Pega y comprueba:</strong> Dirígete a WhatsApp, Instagram, TikTok o tu juego preferido, pega el resultado y verifica cómo luce en tu pantalla.
            </li>
          </ol>
          <p className="mt-3">
            No necesitas instalar teclados adicionales ni aplicaciones que consuman batería o memoria en tu teléfono.
          </p>
        </section>

        {/* Section 3: Tipos de letras burbuja que puedes probar */}
        <section className="prose-card">
          <h2>Tipos de letras burbuja que puedes probar</h2>
          <p>
            El catálogo de caracteres circulares de Unicode ofrece diferentes familias que se adaptan a distintas necesidades de comunicación:
          </p>

          <h3>Letras en círculos blancos o transparentes</h3>
          <p>
            Es el diseño clásico de burbuja. Cada carácter latino se presenta dentro de un contorno circular fino. Las letras mayúsculas (<code>Ⓐ, Ⓑ, Ⓒ</code>) y las minúsculas (<code>ⓐ, ⓑ, ⓒ</code>) mantienen un aspecto ligero, jovial y limpio.
          </p>
          <p>
            Ejemplo: <code>Ⓑⓤⓑⓑⓛⓔ</code>
          </p>

          <h3>Letras en círculos negros o rellenos</h3>
          <p>
            Conocidas formalmente como caracteres circulares invertidos (<em>negative circled</em>). La letra aparece en blanco sobre un círculo oscuro relleno (<code>🅐, 🅑, 🅒</code>). Este contraste las convierte en la opción predilecta para destacar títulos breves o nicks en listas densas.
          </p>
          <p>
            Ejemplo: <code>🅑🅤🅑🅑🅛🅔</code>
          </p>

          <h3>Letras entre paréntesis y marcos redondeados</h3>
          <p>
            Unicode también incluye caracteres encerrados entre paréntesis individuales (<code>⒜, ⒝, ⒞</code>), así como combinaciones ornamentadas que enmarcan la palabra con estrellas (<code>☆ Ⓛⓤⓝⓐ ☆</code>) o corchetes decorativos (<code>【🅛🅤🅝🅐】</code>).
          </p>

          <h3>Diferencia entre letras burbuja y letras cuadradas</h3>
          <p>
            Conviene no confundir las letras burbuja con las letras cuadradas (<code>🄰, 🄱, 🄲</code> o <code>🅰, 🅱, 🅲</code>). Aunque ambas pertenecen a la familia de caracteres encerrados, las cuadradas ofrecen una sensación arquitectónica y de botón de teclado, mientras que las letras burbuja son esféricas, dinámicas y festivas.
          </p>
        </section>

        {/* Section 4: Ejemplos de letras burbuja para copiar y pegar */}
        <section className="prose-card">
          <h2>Ejemplos de letras burbuja para copiar y pegar</h2>
          <p>
            Aquí tienes una lista de palabras habituales, nombres y frases cortas transformadas con nuestro motor interactivo:
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Luna:</span> <strong>Ⓛⓤⓝⓐ</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Alex:</span> <strong>Ⓐⓛⓔⓧ</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Sofía:</span> <strong>Ⓢⓞⓕíⓐ</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Amor:</span> <strong>🅐🅜🅞🅡</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Hola:</span> <strong>Ⓗⓞⓛⓐ</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Dream:</span> <strong>🅓🅡🅔🅐🅜</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Bubble:</span> <strong>Ⓑⓤⓑⓑⓛⓔ</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Año 2026:</span> <strong>②⓪②⑥</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Mi nick:</span> <strong>🅜🅘 🅝🅘🅒🅚</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>España:</span> <strong>Ⓔⓢⓟⓐñⓐ</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Gamer Pro:</span> <strong>Ⓖⓐⓜⓔⓡ Ⓟⓡⓞ</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Sonríe:</span> <strong>Ⓢⓞⓝⓡⓘⓔ</strong>
            </div>
          </div>
          <p className="mt-3">
            Para personalizar tu propio texto, introduce cualquier término en el cuadro superior y selecciona tu variante preferida.
          </p>
        </section>

        {/* Section 5: Letras burbuja para nombres */}
        <section className="prose-card">
          <h2>Letras burbuja para nombres</h2>
          <p>
            Los nombres propios constituyen uno de los usos más atractivos de las letras burbuja. Al tratarse de términos de longitud moderada, la forma circular individualiza cada letra y le da presencia:
          </p>
          <ul>
            <li><strong>Mateo:</strong> <code>Ⓜⓐⓣⓔⓞ</code> o <code>🅜🅐🅣🅔🅞</code></li>
            <li><strong>Elena:</strong> <code>Ⓔⓛⓔⓝⓐ</code> o <code>🅔🅛🅔🅝🅐</code></li>
            <li><strong>Lucas:</strong> <code>Ⓛⓤⓒⓐⓢ</code> o <code>🅛🅤🅒🅐🅢</code></li>
            <li><strong>Camila:</strong> <code>Ⓒⓐⓜⓘⓛⓐ</code> o <code>🅒🅐🅜🅘🅛🅐</code></li>
          </ul>
          <p className="mt-3">
            Tanto en perfiles sociales como en notas personales de Notion o diarios digitales, escribir un nombre en burbuja aporta simpatía sin perjudicar la claridad.
          </p>
        </section>

        {/* Section 6: Letras burbuja para nicks y videojuegos */}
        <section className="prose-card">
          <h2>Letras burbuja para nicks y videojuegos</h2>
          <p>
            En plataformas de juegos multijugador como Free Fire, Roblox, Minecraft o Brawl Stars, destacar visualmente en las tablas de clasificación y en los chats de equipo es esencial.
          </p>
          <p>
            Ventajas de las letras burbuja en videojuegos:
          </p>
          <ul>
            <li>
              <strong>Excelente legibilidad en pantallas compactas:</strong> A diferencia de los estilos góticos o caligráficos muy densos, los círculos conservan la silueta clara de cada letra en pantallas de smartphones.
            </li>
            <li>
              <strong>Distinción para clanes y rangos:</strong> Puedes utilizar números en burbuja para indicar niveles o generaciones (ejemplo: <code>Ⓖⓐⓜⓔⓡ ①</code> o <code>🅒🅛🅐🅝 ❷</code>).
            </li>
            <li>
              <strong>Compatibilidad con filtros de nombres:</strong> La mayoría de títulos admiten el bloque de alfanuméricos encerrados sin marcarlos como caracteres prohibidos.
            </li>
          </ul>
        </section>

        {/* Section 7: Letras burbuja para bios y redes sociales */}
        <section className="prose-card">
          <h2>Letras burbuja para bios de Instagram, TikTok y WhatsApp</h2>
          <p>
            El espacio en las biografías de redes sociales es limitado y valioso. Las letras burbuja permiten estructurar la información con dinamismo:
          </p>
          <ul>
            <li>
              <strong>Encabezados de bienvenida:</strong> Colocar <code>🅑🅘🅔🅝🅥🅔🅝🅘🅓🅞🅢</code> en la primera línea capta la atención del visitante inmediatamente.
            </li>
            <li>
              <strong>Puntos destacados y secciones:</strong> Utiliza letras circulares como viñetas o títulos de apartados en lugar de emojis convencionales.
            </li>
            <li>
              <strong>Estados de WhatsApp:</strong> Palabras motivacionales cortas como <code>Ⓟⓐⓩ</code> o <code>Ⓕⓔⓛⓘⓩ</code> transmiten frescura y originalidad.
            </li>
          </ul>
        </section>

        {/* Section 8: Letras burbuja con números y fechas */}
        <section className="prose-card">
          <h2>Letras burbuja con números y fechas</h2>
          <p>
            Una de las grandes fortalezas del conjunto de caracteres circulares es que incluye soporte nativo completo para los dígitos numéricos del 0 al 9:
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Dígitos claros:</span> <strong>⓪ ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Dígitos oscuros:</span> <strong>⓿ ❶ ❷ ❸ ❹ ❺ ❻ ❼ ❽ ❾</strong>
            </div>
          </div>
          <p className="mt-3">
            Esto resulta ideal para fechas destacadas, aniversarios o clasificaciones:
          </p>
          <ul>
            <li>Año 2026: <code>②⓪②⑥</code> o <code>❷⓿❷❻</code></li>
            <li>Listas de pasos: <code>① Inicio</code>, <code>② Proceso</code>, <code>③ Resultado</code></li>
            <li>Fechas especiales: <code>①⑤ · ⓪⑧ · ②⓪②⑥</code></li>
          </ul>
        </section>

        {/* Section 9: Letras burbuja y caracteres españoles */}
        <section className="prose-card">
          <h2>Letras burbuja y caracteres especiales en español</h2>
          <p>
            Al utilizar letras burbuja en español surge una duda común: ¿por qué la letra <code>ñ</code> o las vocales con acento ortográfico (<code>á, é, í, ó, ú</code>) no aparecen encerradas dentro de un círculo?
          </p>
          <p>
            La explicación radica en la arquitectura histórica de Unicode:
          </p>
          <ul>
            <li>
              <strong>Origen de los caracteres circulares:</strong> El bloque Enclosed Alphanumerics fue creado originalmente para satisfacer requerimientos editoriales, índices y catálogos en el alfabeto latino básico (letras de la A a la Z sin diacríticos) y el sistema numérico.
            </li>
            <li>
              <strong>Inexistencia de glifos acentuados en círculos:</strong> El consorcio Unicode no codificó caracteres circulares independientes para combinaciones como <code>á</code> o <code>ñ</code>.
            </li>
            <li>
              <strong>Preservación fiel en nuestro conversor:</strong> Ante una palabra como <code>Sofía</code> o <code>España</code>, nuestra herramienta transforma las letras que disponen de equivalente circular y conserva las letras acentuadas en su forma original (<code>Ⓢⓞⓕíⓐ</code> y <code>Ⓔⓢⓟⓐñⓐ</code>). De este modo se evita eliminar letras o sustituirlas por signos erróneos.
            </li>
          </ul>
        </section>

        {/* Section 10: Letras burbuja Unicode vs una fuente bubble real */}
        <section className="prose-card">
          <h2>Letras burbuja Unicode frente a una fuente bubble real</h2>
          <p>
            Es conveniente diferenciar entre el texto copiable generado con Unicode y una fuente tipográfica instalable de diseño gráfico:
          </p>
          <div className="prose-table-container">
            <table className="prose-table">
              <thead>
                <tr>
                  <th>Característica</th>
                  <th>Texto Burbuja Unicode</th>
                  <th>Fuente Gráfica Instalable (TTF/OTF)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Formato</strong></td>
                  <td>Texto copiable y editable</td>
                  <td>Archivo de software tipográfico</td>
                </tr>
                <tr>
                  <td><strong>Instalación</strong></td>
                  <td>No requiere descargas ni permisos</td>
                  <td>Debe instalarse en el sistema</td>
                </tr>
                <tr>
                  <td><strong>Dónde funciona</strong></td>
                  <td>WhatsApp, Instagram, bios, nicks, comentarios</td>
                  <td>Photoshop, Illustrator, Word, Canva</td>
                </tr>
                <tr>
                  <td><strong>Visualización por terceros</strong></td>
                  <td>Cualquiera puede verlo en su móvil</td>
                  <td>Solo quien tenga la fuente instalada</td>
                </tr>
                <tr>
                  <td><strong>Soporte de caracteres españoles</strong></td>
                  <td>Letras latinas básicas y dígitos</td>
                  <td>Abecedario completo con tildes y diéresis</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Para personalizar tus redes sociales o apodos gamer, las letras burbuja Unicode son la solución ideal. Para diseñar un logotipo corporativo o imprimir folletos, una fuente vectorial instalable es la alternativa indicada.
          </p>
        </section>

        {/* Section 11: ¿Por qué algunas letras no cambian? */}
        <section className="prose-card">
          <h2>¿Por qué algunas letras no cambian?</h2>
          <p>
            Si introduces un texto y notas que determinados símbolos o caracteres conservan su formato habitual, se debe a que no forman parte del alfabeto alfanumérico estandarizado para este estilo.
          </p>
          <p>
            Signos de puntuación como signos de interrogación, admiración o símbolos monetarios se mantienen sin alteración para que el mensaje no pierda su significado ni su coherencia sintáctica.
          </p>
        </section>

        {/* Section 12: ¿Por qué el resultado puede verse diferente al pegarlo? */}
        <section className="prose-card">
          <h2>¿Por qué el resultado puede verse diferente al pegarlo?</h2>
          <p>
            Aunque el código Unicode copiado es idéntico en cualquier dispositivo, la representación gráfica concreta depende de la fuente tipográfica instalada en el sistema receptor:
          </p>
          <dl className="faq-list">
            <dt>Diferencias entre iOS y Android</dt>
            <dd>
              Apple utiliza tipografías del sistema donde los círculos negros pueden tener bordes ligeramente más redondeados que en ciertas capas de personalización de Android.
            </dd>
            <dt>Políticas de nombres en juegos específicos</dt>
            <dd>
              Determinados títulos limitan la longitud de los nicks o filtran rangos de caracteres suplementarios. Te recomendamos probar tu nombre en una partida de prueba antes de confirmar cambios definitivos.
            </dd>
            <dt>Representación en navegadores antiguos</dt>
            <dd>
              Equipos con sistemas operativos obsoletos pueden mostrar un cuadro de sustitución en caracteres suplementarios. En teléfonos modernos lanzados en la última década, la compatibilidad supera el 99%.
            </dd>
          </dl>
        </section>

        {/* Section 13: Consejos para usar texto burbuja sin perder legibilidad */}
        <section className="prose-card">
          <h2>Consejos para usar texto burbuja sin perder legibilidad</h2>
          <p>
            Para que tus publicaciones luzcan atractivas y no resulten pesadas para quienes las leen, considera estas recomendaciones prácticas de experiencia de usuario:
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <span className="step-card__number">1</span>
              <h3>Limítate a palabras clave o títulos</h3>
              <p>
                El texto en círculos funciona de forma sobresaliente en palabras individuales, nombres o llamados a la acción breves. Evita redactar párrafos completos en este formato.
              </p>
            </div>
            <div className="step-card">
              <span className="step-card__number">2</span>
              <h3>Alterna círculos blancos y oscuros con cuidado</h3>
              <p>
                Mezclar estilos en una sola palabra puede restar armonía. Mantén consistencia en cada bloque de texto para proyectar un perfil ordenado.
              </p>
            </div>
            <div className="step-card">
              <span className="step-card__number">3</span>
              <h3>Comprueba la visualización en modo oscuro</h3>
              <p>
                Las burbujas negras resaltan con fuerza sobre fondos claros, mientras que las burbujas transparentes suelen integrarse con gran naturalidad en temas oscuros.
              </p>
            </div>
          </div>
        </section>

        {/* Section 14: Preguntas frecuentes */}
        <section className="prose-card">
          <h2>Preguntas frecuentes sobre letras burbuja</h2>
          <dl className="faq-list">
            <dt>¿Cómo hacer letras burbuja para copiar y pegar?</dt>
            <dd>
              Escribe tu nombre o palabra en el generador, compara las variantes de círculos claros u oscuros y haz clic en el botón Copiar. Luego pega el texto directamente en tu perfil, juego o red social.
            </dd>

            <dt>¿Puedo poner mi nombre en letras burbuja?</dt>
            <dd>
              Sí. Los nombres y apodos cortos lucen especialmente bien en estilo circular porque cada letra queda enmarcada de manera limpia y simétrica.
            </dd>

            <dt>¿Las letras burbuja son una fuente descargable?</dt>
            <dd>
              No. En las herramientas online para copiar y pegar, las letras burbuja son caracteres del estándar Unicode pertenecientes al bloque de alfanuméricos encerrados, no un archivo tipográfico TTF o OTF.
            </dd>

            <dt>¿Puedo convertir números a estilo burbuja?</dt>
            <dd>
              Sí. Los dígitos del 0 al 9 cuentan con equivalentes en círculos transparentes y en círculos negros rellenos dentro del estándar Unicode.
            </dd>

            <dt>¿Por qué la letra ñ o las vocales con tilde no aparecen dentro de un círculo?</dt>
            <dd>
              Unicode no diseñó caracteres encerrados en círculos para letras acentuadas ni para la ñ del abecedario español. Nuestro generador conserva la letra original para mantener la ortografía correcta de tu palabra.
            </dd>

            <dt>¿Funcionan las letras circulares en todas las aplicaciones móviles?</dt>
            <dd>
              Sí, en la gran mayoría de dispositivos y aplicaciones modernas como Instagram, TikTok, WhatsApp, Roblox o Discord, ya que los caracteres circulares forman parte de Unicode desde hace décadas.
            </dd>

            <dt>¿Necesito instalar alguna aplicación o programa?</dt>
            <dd>
              No. El generador funciona directamente desde tu navegador móvil o de escritorio, permitiéndote copiar y pegar al instante sin descargas ni registros.
            </dd>
          </dl>
        </section>

        {/* Section 15: Crea tus propias letras burbuja */}
        <section className="prose-card highlight-card">
          <h2>Crea tus propias letras burbuja</h2>
          <p>
            Las letras circulares añaden frescura, simetría y alegría a tus textos en cualquier rincón de internet. Explora las distintas combinaciones en la herramienta interactiva, compara los resultados y dale una personalidad única a tus nicks y biografías.
          </p>
          <p className="cta-motto">
            <strong>Escribe tu texto en el recuadro superior y copia tus letras burbuja preferidas al instante.</strong>
          </p>
        </section>

        {/* Section 16: Explora más estilos tipográficos */}
        <section className="prose-card">
          <h2>Descubre otras tipografías especiales</h2>
          <p>
            Complementa tus diseños con otras colecciones y generadores disponibles en LetrasBonitas:
          </p>
          <div className="family-cards-grid">
            <div className="family-card">
              <h3>Conversor de Letras</h3>
              <p>Colección global con cientos de estilos tipográficos listos para copiar.</p>
              <Link href="/conversor-de-letras/" className="btn btn--secondary">Ir al Conversor</Link>
            </div>
            <div className="family-card">
              <h3>Letras Negritas</h3>
              <p>Texto con trazo reforzado para enfatizar mensajes en WhatsApp y redes sociales.</p>
              <Link href="/letras-negritas/" className="btn btn--secondary">Ver Negritas</Link>
            </div>
            <div className="family-card">
              <h3>Letras Aesthetic</h3>
              <p>Fuentes minimalistas, suaves y con destellos delicados.</p>
              <Link href="/letras-aesthetic/" className="btn btn--secondary">Ver Aesthetic</Link>
            </div>
            <div className="family-card">
              <h3>Letras Cursivas</h3>
              <p>Estilos caligráficos y manuscritos fluidos para firmas y biografías.</p>
              <Link href="/letras-cursivas/" className="btn btn--secondary">Ver Cursivas</Link>
            </div>
            <div className="family-card">
              <h3>Letras Góticas</h3>
              <p>Estilo medieval Fraktur y blackletter con presencia oscura e impactante.</p>
              <Link href="/letras-goticas/" className="btn btn--secondary">Ver Góticas</Link>
            </div>
            <div className="family-card">
              <h3>Símbolos Aesthetic</h3>
              <p>Colección de lunas, estrellas, corazones y destellos para complementar tus textos.</p>
              <Link href="/simbolos/aesthetic/" className="btn btn--secondary">Ver Símbolos</Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
