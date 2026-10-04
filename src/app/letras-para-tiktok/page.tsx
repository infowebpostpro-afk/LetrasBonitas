import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HubFontGenerator } from "@/components/font-generator/HubFontGenerator";

export function generateMetadata(): Metadata {
  return {
    title: "Letras para TikTok: Nombres y Bios con Estilo",
    description:
      "Crea letras para TikTok y copia estilos para nombres, bios y textos cortos. Prueba opciones aesthetic, cursivas, negritas y más.",
    alternates: {
      canonical: "/letras-para-tiktok/",
    },
    openGraph: {
      title: "Letras para TikTok: Nombres y Bios con Estilo",
      description:
        "Crea letras para TikTok y copia estilos para nombres, bios y textos cortos. Prueba opciones aesthetic, cursivas, negritas y más.",
      locale: "es",
      type: "website",
      url: "/letras-para-tiktok/",
    },
    twitter: {
      card: "summary",
      title: "Letras para TikTok: Nombres y Bios con Estilo",
      description:
        "Crea letras para TikTok y copia estilos para nombres, bios y textos cortos. Prueba opciones aesthetic, cursivas, negritas y más.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LetrasParaTikTokPage() {
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
        "@id": "https://letrasbonits.com/letras-para-tiktok/#webpage",
        url: "https://letrasbonits.com/letras-para-tiktok/",
        name: "Letras para TikTok: Nombres y Bios con Estilo",
        description:
          "Crea letras para TikTok y copia estilos para nombres, bios y textos cortos. Prueba opciones aesthetic, cursivas, negritas y más.",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/letras-para-tiktok/#breadcrumb",
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
            name: "Letras para TikTok",
            item: "https://letrasbonits.com/letras-para-tiktok/",
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": "https://letrasbonits.com/letras-para-tiktok/#app",
        name: "Generador de Letras para TikTok",
        url: "https://letrasbonits.com/letras-para-tiktok/",
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
        "@id": "https://letrasbonits.com/letras-para-tiktok/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo poner letras bonitas en TikTok?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Escribe tu texto en el generador superior, compara las opciones tipográficas, pulsa el botón Copiar en el estilo que prefieras, abre la aplicación de TikTok, entra a Editar perfil y pega el resultado en el campo Nombre o Descripción corta (Bio).",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo usar letras especiales en mi nombre de TikTok?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, en tu nombre para mostrar (el nombre visible que aparece en grande en tu perfil). Este campo permite hasta 30 caracteres y admite la gran mayoría de letras y símbolos Unicode. Solo recuerda que puedes cambiarlo una vez cada 7 días.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo usar estas letras en mi nombre de usuario (@usuario)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Las normas oficiales de TikTok restringen el nombre de usuario único (@handle) únicamente a letras latinas básicas (a-z), números (0-9), guiones bajos y puntos. TikTok no permite alfabetos matemáticos ni símbolos decorativos en este campo.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuántos caracteres caben en la biografía de TikTok?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La biografía oficial de TikTok cuenta con un límite estándar de 80 caracteres. Los caracteres especiales y marcos decorativos consumen espacio rápidamente, por lo que recomendamos frases breves y directas.",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué algunas letras con tilde o la ñ no cambian de estilo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El estándar Unicode no dispone de variantes matemáticas precompuestas para todos los caracteres acentuados del español ni para la ñ en todas las fuentes. Nuestro sistema conserva la letra original intacta para no alterar la ortografía de tus palabras.",
            },
          },
          {
            "@type": "Question",
            name: "¿Es necesario instalar alguna aplicación o teclado especial?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. El conversor funciona directamente desde tu navegador en el móvil o en el ordenador. Al copiar el texto se guardan caracteres Unicode reconocidos por el sistema de TikTok sin requerir ninguna app extra.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué estilo tipográfico es más recomendable para una bio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Los estilos limpios como las mayúsculas pequeñas (Small Caps), la negrita sans-serif suave o las cursivas minimalistas ofrecen la mejor legibilidad en pantallas de teléfonos móviles.",
            },
          },
          {
            "@type": "Question",
            name: "¿Funcionan estas letras en los comentarios y descripciones de videos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Puedes pegar letras estilizadas en la primera línea de tus descripciones de video (captions) para generar ganchos visuales y en comentarios fijados para resaltar mensajes a tu comunidad.",
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

      {/* ── Creator Identity Preview Hero ── */}
      <header className="hero-saas hero-saas--compact hero-saas--tiktok">
        <div className="hero-saas__watermark-right" aria-hidden="true">
          𝒯 𝒾 𝓀
        </div>
        <div className="hero-saas__content">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Letras para TikTok" },
            ]}
          />
          <span className="hero-saas__badge hero-saas__badge--tiktok">
            NOMBRES · BIOS · ESTILOS
          </span>
          <h1 className="hero-saas__title">
            Letras para <span className="gradient-text-tiktok">TikTok</span>: Nombres y Bios con Estilo
          </h1>
          <p className="hero-saas__lead">
            Personaliza tu identidad en TikTok con estilos tipográficos listos para copiar y pegar: destaca tu nombre visible, organiza tu biografía y capta miradas en tus descripciones y comentarios.
          </p>

          {/* Original Creator Profile Preview Card */}
          <div className="creator-preview-card" aria-label="Vista previa de perfil creador">
            <div className="creator-preview-header">
              <span className="creator-preview-tag">
                <span aria-hidden="true">●</span> Vista previa de perfil
              </span>
              <span className="creator-preview-status">TikTok Ready</span>
            </div>

            <div className="creator-preview-avatar" aria-hidden="true">
              ✨
            </div>

            <div className="creator-preview-name" aria-label="Nombre visible con estilo">
              𝓛𝓾𝓷𝓪 ✦
            </div>

            <div className="creator-preview-handle" aria-label="Nombre de usuario estándar">
              @luna_creator
            </div>

            <div className="creator-preview-stats" aria-label="Métricas de perfil ilustrativas">
              <div className="creator-preview-stat-item">
                <span className="creator-preview-stat-num">142</span>
                <span className="creator-preview-stat-label">Siguiendo</span>
              </div>
              <div className="creator-preview-stat-item">
                <span className="creator-preview-stat-num">58.4K</span>
                <span className="creator-preview-stat-label">Seguidores</span>
              </div>
              <div className="creator-preview-stat-item">
                <span className="creator-preview-stat-num">1.2M</span>
                <span className="creator-preview-stat-label">Me gusta</span>
              </div>
            </div>

            <div className="creator-preview-bio">
              música · viajes · café ♡
            </div>

            <span className="creator-preview-notice">
              Nombre y Bio con caracteres estilizados | @usuario en texto estándar
            </span>
          </div>

          <div className="hero-tiktok-pills" role="list" aria-label="Variantes destacadas">
            <span className="hero-tiktok-pill" role="listitem">
              <span className="hero-tiktok-pill__type">Nombre:</span> 𝓛𝓾𝓷𝓪
            </span>
            <span className="hero-tiktok-pill" role="listitem">
              <span className="hero-tiktok-pill__type">Bio:</span> ☁️ 𝓈𝑜𝒻𝓉 𝓋𝒾𝒷𝑒𝓈 ☁️
            </span>
            <span className="hero-tiktok-pill" role="listitem">
              <span className="hero-tiktok-pill__type">Gamer:</span> ⚡ ᴠɪʀᴀʟ ɢᴀᴍᴇʀ ⚡
            </span>
            <span className="hero-tiktok-pill" role="listitem">
              <span className="hero-tiktok-pill__type">Gancho:</span> 𝗖𝗿𝗲𝗮𝘁𝗼𝗿
            </span>
          </div>

          <span className="hero-tiktok-cue">
            Crea tu estilo ↓
          </span>
        </div>
      </header>

      {/* ── Interactive Generator Tool ── */}
      <HubFontGenerator
        storagePrefix="tiktok"
        defaultCategory="popular"
        defaultExample="Luna"
        searchPlaceholder="Buscar estilo para TikTok (aesthetic, cursiva, negrita, gótica)..."
        quickExamples={[
          "Luna",
          "Sofía",
          "Creator",
          "Good vibes",
          "Música",
          "Gaming",
          "Lifestyle",
          "Beauty",
          "Viajes",
        ]}
        useCases={[
          { id: "nombre", label: "Nombre Visible", icon: "👤", text: "𝓛𝓾𝓷𝓪 ✦" },
          { id: "bio", label: "Bio Corta", icon: "✨", text: "música · viajes · café ♡" },
          { id: "aesthetic", label: "Estilo Aesthetic", icon: "☁️", text: "𝓈𝑜𝒻𝓉 𝓋𝒾𝒷𝑒𝓈 & 𝒸𝒶𝒻𝑒" },
          { id: "bold", label: "Negrita / Gancho", icon: "🔥", text: "𝗧𝗢𝗣 𝗖𝗥𝗘𝗔𝗧𝗢𝗥" },
          { id: "gamer", label: "Nick Gamer", icon: "⚡", text: "⚡ ᴠɪʀᴀʟ ɢᴀᴍᴇʀ ⚡" },
        ]}
      />

      {/* ── Comprehensive Editorial Article ── */}
      <article className="prose-section" aria-label="Guía completa de letras para TikTok">
        {/* Section 1: Intro PAS & How to use */}
        <section className="prose-card">
          <h2>Cómo crear letras para TikTok paso a paso</h2>
          <p>
            Construir un perfil magnético en TikTok requiere cuidar cada detalle visual. Millones de cuentas compiten a diario por captar la atención de la audiencia en la pestaña &quot;Para ti&quot;. Personalizar la tipografía de tu nombre visible y de tu biografía permite comunicar tu estilo personal o de marca desde el primer segundo.
          </p>
          <p>
            El procedimiento para generar y pegar tus letras estilizadas es directo e inmediato:
          </p>
          <ol className="step-list">
            <li>
              <strong>Escribe tu texto:</strong> Introduce tu nombre, apodo o frase en la caja interactiva superior.
            </li>
            <li>
              <strong>Compara los estilos:</strong> Explora las distintas opciones visuales: cursivas elegantes, negritas rotundas, letras aesthetic con destellos o mayúsculas pequeñas minimalistas.
            </li>
            <li>
              <strong>Copia con un clic:</strong> Pulsa el botón <em>Copiar</em> situado junto al diseño que mejor represente tu temática.
            </li>
            <li>
              <strong>Abre TikTok y edita tu perfil:</strong> Dirígete a tu perfil dentro de la app oficial, toca en <em>Editar perfil</em> y selecciona el campo correspondiente: <em>Nombre</em> o <em>Descripción corta</em>.
            </li>
            <li>
              <strong>Pega y verifica:</strong> Pega el texto copiado, guarda los cambios y comprueba cómo luce en tu pantalla.
            </li>
          </ol>
        </section>

        {/* Section 2: CRITICAL Username vs Display Name Distinction */}
        <section className="prose-card">
          <h2>Nombre visible frente a nombre de usuario: una diferencia fundamental en TikTok</h2>
          <p>
            Uno de los errores más frecuentes que cometen los usuarios en TikTok proviene de confundir el <strong>nombre para mostrar (Display Name)</strong> con el <strong>nombre de usuario (@handle)</strong>. Cada uno responde a reglas técnicas y restricciones muy diferentes dentro de la plataforma:
          </p>

          <div className="table-responsive my-4">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Característica</th>
                  <th scope="col">Nombre visible (Display Name)</th>
                  <th scope="col">Nombre de usuario (@handle)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Propósito principal</strong></td>
                  <td>Tu apodo o nombre artístico visible en la cabecera del perfil y comentarios.</td>
                  <td>Tu identificador único y enlace web público (tiktok.com/@usuario).</td>
                </tr>
                <tr>
                  <td><strong>Límite de longitud</strong></td>
                  <td>Hasta 30 caracteres.</td>
                  <td>De 2 a 24 caracteres.</td>
                </tr>
                <tr>
                  <td><strong>Caracteres permitidos</strong></td>
                  <td>Casi cualquier carácter Unicode: cursivas, negritas, símbolos, emojis y espacios.</td>
                  <td>Exclusivamente letras latinas básicas (a-z), números (0-9), guion bajo (_) y punto (.).</td>
                </tr>
                <tr>
                  <td><strong>Frecuencia de cambio</strong></td>
                  <td>Se puede modificar una vez cada 7 días.</td>
                  <td>Solo se puede cambiar una vez cada 30 días.</td>
                </tr>
                <tr>
                  <td><strong>Compatibilidad con el conversor</strong></td>
                  <td><span className="text-emerald-500 font-semibold">Totalmente compatible</span>: admite letras estilizadas.</td>
                  <td><span className="text-amber-500 font-semibold">No compatible</span>: TikTok bloquea caracteres decorativos.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Por este motivo, las letras especiales que creas con nuestra herramienta están pensadas para tu <strong>nombre visible</strong>, tu <strong>biografía</strong> y tus <strong>descripciones de video</strong>. Te recomendamos mantener tu nombre de usuario oficial (@usuario) en texto estándar y limpio para facilitar que otros creadores te etiqueten y te busquen sin complicaciones.
          </p>
        </section>

        {/* Section 3: Styles Breakdown */}
        <section className="prose-card">
          <h2>Estilos de letras para TikTok más populares y cómo utilizarlos</h2>
          <p>
            Cada temática en TikTok posee una atmósfera estética propia. Adaptar la tipografía al nicho de tus contenidos ayuda a conectar más rápido con tu comunidad objetivo:
          </p>

          <h3>Letras cursivas y caligráficas (Script)</h3>
          <p>
            Las tipografías cursivas transmiten delicadeza, cercanía y sofisticación. Son el recurso favorito de cuentas enfocadas en moda, belleza, rutinas de cuidado personal, lectura (BookTok) y reflexiones diarias.
          </p>
          <div className="sample-pill my-2">
            <span>Ejemplo para perfil lifestyle:</span> <strong>𝓛𝓾𝓷𝓪 ✦</strong> o <strong>𝓈𝑜𝒻𝓉 𝓋𝒾𝒷𝑒𝓈</strong>
          </div>
          <p className="text-sm text-muted">
            Si deseas profundizar en este estilo caligráfico, consulta nuestra sección de <Link href="/letras-cursivas/" className="text-brand font-semibold underline">letras cursivas</Link>.
          </p>

          <h3 className="mt-4">Letras aesthetic y con destellos</h3>
          <p>
            La corriente visual aesthetic combina trazos anchos tipo vaporwave, símbolos celestiales y corazones etéreos. Resulta ideal para creadores de arte digital, playlists musicales y estética retro.
          </p>
          <div className="sample-pill my-2">
            <span>Ejemplo aesthetic:</span> <strong>☁️ ꜱᴏꜰᴛ ɢɪʀʟ ☁️</strong> o <strong>【 𝑀𝒾 𝑀𝓊𝓃𝒹𝑜 】</strong>
          </div>
          <p className="text-sm text-muted">
            Para colecciones visuales completas, visita nuestro catálogo de <Link href="/letras-aesthetic/" className="text-brand font-semibold underline">letras aesthetic</Link>.
          </p>

          <h3 className="mt-4">Letras en negrita (Bold) para ganchos e impacto</h3>
          <p>
            El grosor reforzado de la negrita es la herramienta más eficaz para detener el scroll veloz. Empléala en la primera palabra de tu nombre visible o en el inicio de la descripción de tus videos para que tu mensaje destaque de inmediato.
          </p>
          <div className="sample-pill my-2">
            <span>Ejemplo de alto contraste:</span> <strong>𝗖𝗿𝗲𝗮𝘁𝗼𝗿 𝗣𝗿𝗼</strong> o <strong>𝐓𝐎𝐏 𝐓𝐑𝐄𝐍𝐃</strong>
          </div>
          <p className="text-sm text-muted">
            Conoce todas las variantes con y sin serifa en nuestra guía de <Link href="/letras-negritas/" className="text-brand font-semibold underline">letras negritas</Link>.
          </p>

          <h3 className="mt-4">Letras góticas (Fraktur) para gaming y estilo alternativo</h3>
          <p>
            Los trazos medievales angulosos aportan fuerza, misterio y personalidad competitiva. Son muy valorados por jugadores de esports, streamers y entusiastas de anime o cultura urbana.
          </p>
          <div className="sample-pill my-2">
            <span>Ejemplo para gaming:</span> <strong>𝕲𝖆𝖒𝖊𝖗 𝕻𝖗𝖔</strong> o <strong>𝔏𝔲𝔫𝔞</strong>
          </div>
          <p className="text-sm text-muted">
            Explora alfabetos medievales en nuestro apartado de <Link href="/letras-goticas/" className="text-brand font-semibold underline">letras góticas</Link>.
          </p>

          <h3 className="mt-4">Letras pequeñas (Small Caps) para biografías limpias</h3>
          <p>
            Las mayúsculas en tamaño reducido ofrecen una apariencia ordenada, elegante y sumamente fácil de leer en pantallas móviles pequeñas. Permiten destacar títulos y roles profesionales sin saturar la vista.
          </p>
          <div className="sample-pill my-2">
            <span>Ejemplo en mayúsculas pequeñas:</span> <strong>ᴄʀᴇᴀᴛᴏʀ · ᴅɪsᴇñᴏ · ᴠɪᴀᴊᴇs</strong>
          </div>
        </section>

        {/* Section 4: Tested Name Examples */}
        <section className="prose-card">
          <h2>Ejemplos de letras para nombres de TikTok listos para copiar</h2>
          <p>
            Tu nombre para mostrar es la primera carta de presentación ante quienes descubren tus videos. Aquí tienes combinaciones reales comprobadas con nuestro conversor que puedes adaptar a tu cuenta:
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Luna cursiva:</span> <strong>𝓛𝓾𝓷𝓪 ✦</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Luna negrita:</span> <strong>𝗟𝘂𝗻𝗮</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Luna gótica:</span> <strong>𝔏𝔲𝔫𝔞</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Luna minimalista:</span> <strong>ʟᴜɴᴀ</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Sofía con serifa:</span> <strong>𝐒𝐨𝐟í𝐚 ☾</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Sofía cursiva:</span> <strong>𝓈𝑜𝒻𝒾𝒶 ♡</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Alex en negrita:</span> <strong>𝗔𝗹𝗲𝘅 🔥</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Daniel caligráfico:</span> <strong>𝒟𝒶𝓃𝒾𝑒𝓁</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Gamer competitivo:</span> <strong>⚡ ᴠɪʀᴀʟ ɢᴀᴍᴇʀ ⚡</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Creador de música:</span> <strong>🎵 𝓜ú𝓼𝓲𝓬𝓪 🎵</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Enfoque lifestyle:</span> <strong>☁️ 𝓈𝑜𝒻𝓉 𝓋𝒾𝒷𝑒𝓈 ☁️</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Canal de cocina:</span> <strong>🍰 𝐑𝐞𝐜𝐞𝐭𝐚𝐬 𝐅á𝐜𝐢𝐥𝐞𝐬</strong>
            </div>
          </div>
          <p className="mt-3">
            Para crear una variante con tu propio nombre, solo escríbelo en el generador de la parte superior y pulsa <em>Copiar</em>.
          </p>
        </section>

        {/* Section 5: Bio Compositions */}
        <section className="prose-card">
          <h2>Ideas y composiciones de letras para la bio de TikTok</h2>
          <p>
            La biografía oficial de TikTok cuenta con un límite estándar de <strong>80 caracteres</strong>. En un espacio tan conciso, cada carácter cuenta. La clave radica en aplicar estilo únicamente a palabras estratégicas para comunicar tu propuesta de valor sin agotar el contador:
          </p>

          <dl className="faq-list">
            <dt>Composición minimalista para creadores</dt>
            <dd>
              <code>🎬 ᴄʀᴇᴀᴅᴏʀ ᴅᴇ ᴄᴏɴᴛᴇɴɪᴅᴏ | 📍 🇲🇽</code><br />
              <code>videos nuevos cada semana 👇</code>
            </dd>

            <dt>Composición aesthetic y de estilo de vida</dt>
            <dd>
              <code>☁️ 𝓈𝑜𝒻𝓉 𝓋𝒾𝒷𝑒𝓈 & 𝒸𝒶𝒻𝑒 ♡</code><br />
              <code>beauty · moda · viajes ✨</code>
            </dd>

            <dt>Composición para streaming y gaming</dt>
            <dd>
              <code>⚡ ɢᴀᴍɪɴɢ & ᴄʟɪᴘs ⚡</code><br />
              <code>directos todos los días a las 8pm 🎮</code>
            </dd>

            <dt>Composición para marcas y proyectos</dt>
            <dd>
              <code>✨ 𝗧𝗶𝗲𝗻𝗱𝗮 𝗢𝗻𝗹𝗶𝗻𝗲 ✨</code><br />
              <code>envíos a todo el país | link abajo 📦</code>
            </dd>
          </dl>

          <p className="mt-3">
            Recuerda que si utilizas marcos o símbolos con muchos espacios, el contador de 80 caracteres se alcanzará más rápido. Recomendamos redactar tu borrador primero en el generador y confirmar que se ajuste holgadamente al espacio disponible.
          </p>
        </section>

        {/* Section 6: Captions & Comments */}
        <section className="prose-card">
          <h2>Letras para descripciones de videos y comentarios fijados</h2>
          <p>
            Además de tu perfil estático, el texto de tus publicaciones diarias puede beneficiarse de detalles tipográficos específicos:
          </p>
          <ul>
            <li>
              <strong>Ganchos en la primera línea de la descripción:</strong> Cuando un usuario ve tu video, TikTok solo muestra la primera línea del caption antes del botón &quot;más&quot;. Emplear negrita (por ejemplo: <code>✨ 𝗡𝗨𝗘𝗩𝗢 𝗧𝗨𝗧𝗢𝗥𝗜𝗔𝗟 ✨</code>) aumenta notablemente la tasa de lectura.
            </li>
            <li>
              <strong>Comentarios fijados del creador:</strong> Si deseas realizar una pregunta a tu audiencia o aclarar un punto importante del video, redactar las primeras palabras en mayúsculas pequeñas o negrita asegura que el comentario no pase desapercibido.
            </li>
            <li>
              <strong>Llamadas a la acción (CTA):</strong> Mensajes directos como <code>👇 𝗖𝗼𝗺𝗲𝗻𝘁𝗮 𝘁𝘂 𝗼𝗽𝗶𝗻𝗶ó𝗻</code> invitan a la participación activa en la comunidad.
            </li>
          </ul>
        </section>

        {/* Section 7: Combining Letters & Symbols */}
        <section className="prose-card">
          <h2>Cómo combinar letras bonitas y símbolos en TikTok</h2>
          <p>
            Agregar pequeños iconos y destellos alrededor de tu texto enmarca tu nombre y refuerza su impacto. La regla de oro en diseño es la moderación: uno o dos símbolos equilibran el texto; una fila entera de adornos vuelve el nombre confuso y difícil de recordar.
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Marco de destellos:</span> <strong>✦ 𝐋𝐮𝐧𝐚 ✦</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Corazones suaves:</span> <strong>♡ 𝓛𝓾𝓷𝓪 ♡</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Símbolos lunares:</span> <strong>☾ ʟᴜɴᴀ ☽</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Brillo aesthetic:</span> <strong>✨ 𝓈𝑜𝒻𝒾𝒶 ✨</strong>
            </div>
          </div>
          <p className="mt-3">
            Si deseas encontrar una colección completa de corazones, estrellas, flechas y destellos compatibles, visita nuestro catálogo de <Link href="/simbolos/" className="text-brand font-semibold underline">símbolos</Link> y <Link href="/simbolos/aesthetic/" className="text-brand font-semibold underline">símbolos aesthetic</Link>.
          </p>
        </section>

        {/* Section 8: Spanish Diacritics Handling */}
        <section className="prose-card">
          <h2>¿Qué pasa con la ñ y las vocales con tilde en español?</h2>
          <p>
            En el idioma español contamos con caracteres fundamentales como la <code>ñ</code>, las vocales con acento ortográfico (<code>á</code>, <code>é</code>, <code>í</code>, <code>ó</code>, <code>ú</code>) y la diéresis (<code>ü</code>).
          </p>
          <p>
            El consorcio internacional Unicode diseñó los alfabetos matemáticos y tipográficos especiales con el propósito original de escribir notaciones científicas y fórmulas en inglés. Por esa razón, no existen caracteres matemáticos precompuestos equivalentes para cada vocal acentuada o para la letra eñe en todas las familias tipográficas.
          </p>
          <p>
            A diferencia de otros conversores que eliminan la tilde silenciosamente o producen errores visuales con signos de interrogación, en LetrasBonitas implementamos una estrategia de <strong>preservación segura</strong>: cuando un estilo concreto no dispone de un glifo específico para un acento, mantiene la letra original con su ortografía intacta (por ejemplo: <code>𝐒𝐨𝐟í𝐚</code>, <code>𝐄𝐬𝐩𝐚ñ𝐚</code>, <code>𝐜𝐨𝐫𝐚𝐳ó𝐧</code> o <code>𝐩𝐢𝐧𝐠ü𝐢𝐧𝐨</code>). De este modo, tu identidad en TikTok se conserva profesional y gramaticalmente correcta.
          </p>
        </section>

        {/* Section 9: Unicode vs Real Fonts */}
        <section className="prose-card">
          <h2>Letras Unicode frente a fuentes reales instaladas</h2>
          <p>
            Un mito habitual consiste en creer que estas herramientas instalan archivos de fuentes (como tipografías .ttf u .otf) dentro de la aplicación de TikTok. En realidad, ningún sitio web externo tiene autorización para modificar los archivos internos ni el código fuente de TikTok.
          </p>
          <p>
            Lo que hace nuestro generador es traducir cada letra del teclado a su carácter equivalente dentro del sistema universal <strong>Unicode</strong>. Dado que TikTok cuenta con soporte para codificación UTF-8 en sus servidores y aplicaciones móviles, el sistema reconoce estos caracteres como texto estándar enriquecido y los muestra con su trazado especial sin requerir descargas ni configuraciones complejas.
          </p>
        </section>

        {/* Section 10: Accessibility & Readability */}
        <section className="prose-card">
          <h2>Consejos de accesibilidad y legibilidad para creadores</h2>
          <p>
            Para que tu perfil crezca de manera sostenible, debe resultar accesible y legible para todo tipo de usuarios:
          </p>
          <ul>
            <li>
              <strong>Compatibilidad con lectores de pantalla:</strong> Las personas con discapacidad visual emplean tecnologías de asistencia como TalkBack (en Android) o VoiceOver (en iOS). Los lectores de pantalla pueden interpretar caracteres matemáticos de forma literal (por ejemplo, diciendo &quot;letra matemática sans-serif negrita L mayúscula&quot;). Por ello, es aconsejable estilizar solo palabras clave o nombres, y mantener los datos esenciales en texto estándar.
            </li>
            <li>
              <strong>Facilidad de búsqueda:</strong> Los algoritmos de búsqueda interna de TikTok reconocen mejor el texto estándar. Para palabras clave importantes de tu nicho (por ejemplo: &quot;fotografía&quot;, &quot;marketing&quot; o &quot;recetas&quot;), considera incluirlas también en texto plano en alguna línea de tu biografía.
            </li>
            <li>
              <strong>Comprobación entre dispositivos:</strong> Antes de dar por finalizado tu perfil, pide a un amigo que lo visualice desde un modelo de teléfono diferente para asegurarte de que todos los caracteres se muestren con nitidez.
            </li>
          </ul>
        </section>

        {/* Section 11: FAQs */}
        <section className="prose-card">
          <h2>Preguntas frecuentes sobre letras para TikTok</h2>
          <dl className="faq-list">
            <dt>¿Cómo poner letras bonitas en TikTok?</dt>
            <dd>
              Escribe tu texto en el generador superior, compara las opciones tipográficas, pulsa el botón Copiar en el estilo que prefieras, abre la aplicación de TikTok, entra a Editar perfil y pega el resultado en el campo Nombre o Descripción corta (Bio).
            </dd>

            <dt>¿Puedo usar letras especiales en mi nombre de TikTok?</dt>
            <dd>
              Sí, en tu nombre para mostrar (el nombre visible que aparece en grande en tu perfil). Este campo permite hasta 30 caracteres y admite la gran mayoría de letras y símbolos Unicode. Solo recuerda que puedes cambiarlo una vez cada 7 días.
            </dd>

            <dt>¿Puedo usar estas letras en mi nombre de usuario (@usuario)?</dt>
            <dd>
              No. Las normas oficiales de TikTok restringen el nombre de usuario único (@handle) únicamente a letras latinas básicas (a-z), números (0-9), guiones bajos y puntos. TikTok no permite alfabetos matemáticos ni símbolos decorativos en este campo.
            </dd>

            <dt>¿Cuántos caracteres caben en la biografía de TikTok?</dt>
            <dd>
              La biografía oficial de TikTok cuenta con un límite estándar de 80 caracteres. Los caracteres especiales y marcos decorativos consumen espacio rápidamente, por lo que recomendamos frases breves y directas.
            </dd>

            <dt>¿Por qué algunas letras con tilde o la ñ no cambian de estilo?</dt>
            <dd>
              El estándar Unicode no dispone de variantes matemáticas precompuestas para todos los caracteres acentuados del español ni para la ñ en todas las fuentes. Nuestro sistema conserva la letra original intacta para no alterar la ortografía de tus palabras.
            </dd>

            <dt>¿Es necesario instalar alguna aplicación o teclado especial?</dt>
            <dd>
              No. El conversor funciona directamente desde tu navegador en el móvil o en el ordenador. Al copiar el texto se guardan caracteres Unicode reconocidos por el sistema de TikTok sin requerir ninguna app extra.
            </dd>

            <dt>¿Qué estilo tipográfico es más recomendable para una bio?</dt>
            <dd>
              Los estilos limpios como las mayúsculas pequeñas (Small Caps), la negrita sans-serif suave o las cursivas minimalistas ofrecen la mejor legibilidad en pantallas de teléfonos móviles.
            </dd>

            <dt>¿Funcionan estas letras en los comentarios y descripciones de videos?</dt>
            <dd>
              Sí. Puedes pegar letras estilizadas en la primera línea de tus descripciones de video (captions) para generar ganchos visuales y en comentarios fijados para resaltar mensajes a tu comunidad.
            </dd>
          </dl>
        </section>

        {/* Section 12: Related Sibling Hubs */}
        <section className="prose-card">
          <h2>Explora otros conversores y estilos para tus redes</h2>
          <p>
            Complementa la imagen de tu contenido en diferentes plataformas con nuestras herramientas dedicadas:
          </p>
          <div className="family-cards-grid">
            <div className="family-card">
              <h3>Letras para Instagram</h3>
              <p>Perfiles, biografías y fuentes optimizadas para la estética de Instagram.</p>
              <Link href="/letras-para-instagram/" className="btn btn--secondary">Ver Instagram</Link>
            </div>
            <div className="family-card">
              <h3>Letras Aesthetic</h3>
              <p>Estilos suaves, vaporwave y destellos para dar un aire relajado a tus frases.</p>
              <Link href="/letras-aesthetic/" className="btn btn--secondary">Ver Aesthetic</Link>
            </div>
            <div className="family-card">
              <h3>Letras Negritas</h3>
              <p>Máximo grosor visual para ganchos publicitarios, nombres y llamadas a la acción.</p>
              <Link href="/letras-negritas/" className="btn btn--secondary">Ver Negritas</Link>
            </div>
            <div className="family-card">
              <h3>Conversor de Letras</h3>
              <p>Explora más de 80 variaciones tipográficas completas en un solo lugar.</p>
              <Link href="/conversor-de-letras/" className="btn btn--secondary">Ver Conversor</Link>
            </div>
          </div>
        </section>

        {/* Section 13: Final CTA */}
        <section className="prose-card text-center">
          <h2>Crea tu estilo para TikTok ahora</h2>
          <p>
            Escribe tu nombre o frase en el conversor interactivo, elige la tipografía que mejor te defina y dale un toque único a tu presencia en TikTok en unos pocos segundos.
          </p>
          <div className="mt-4">
            <a href="#top" className="btn btn--primary">
              Subir al generador ↑
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
