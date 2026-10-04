import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HubFontGenerator } from "@/components/font-generator/HubFontGenerator";

export function generateMetadata(): Metadata {
  return {
    title: "Letras para WhatsApp: Estados y Mensajes con Estilo",
    description:
      "Dale estilo a tus estados y mensajes de WhatsApp con letras bonitas para copiar y pegar. Gratis.",
    alternates: {
      canonical: "/letras-para-whatsapp/",
    },
    openGraph: {
      title: "Letras para WhatsApp: Estados y Mensajes con Estilo",
      description:
        "Dale estilo a tus estados y mensajes de WhatsApp con letras bonitas para copiar y pegar. Gratis.",
      locale: "es",
      type: "website",
      url: "/letras-para-whatsapp/",
    },
    twitter: {
      card: "summary",
      title: "Letras para WhatsApp: Estados y Mensajes con Estilo",
      description:
        "Dale estilo a tus estados y mensajes de WhatsApp con letras bonitas para copiar y pegar. Gratis.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LetrasParaWhatsAppPage() {
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
        "@id": "https://letrasbonits.com/letras-para-whatsapp/#webpage",
        url: "https://letrasbonits.com/letras-para-whatsapp/",
        name: "Letras para WhatsApp: Estados y Mensajes con Estilo",
        description:
          "Dale estilo a tus estados y mensajes de WhatsApp con letras bonitas para copiar y pegar. Gratis.",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/letras-para-whatsapp/#breadcrumb",
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
            name: "Letras para WhatsApp",
            item: "https://letrasbonits.com/letras-para-whatsapp/",
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": "https://letrasbonits.com/letras-para-whatsapp/#app",
        name: "Generador de Letras para WhatsApp",
        url: "https://letrasbonits.com/letras-para-whatsapp/",
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
        "@id": "https://letrasbonits.com/letras-para-whatsapp/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo cambiar el tipo de letra en WhatsApp?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Para cambiar la tipografía visual de tus palabras, escribe tu mensaje o nombre en nuestro generador, selecciona el estilo deseado (cursiva, negrita, aesthetic o gótica), pulsa Copiar, abre WhatsApp y pega el texto en el chat, en tu estado o en tu perfil.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuál es la diferencia entre los asteriscos de WhatsApp y estas letras Unicode?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Los códigos nativos de WhatsApp como asteriscos (*palabra*) o guiones bajos (_palabra_) solo funcionan dentro de las conversaciones de chat. En cambio, las letras Unicode generadas por nuestra herramienta modifican el carácter en sí, permitiendo lucir fuentes especiales en tu nombre de perfil visible y en tu estado Info.",
            },
          },
          {
            "@type": "Question",
            name: "¿Pueden ver estas letras mis contactos de iPhone y Android?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Los caracteres generados forman parte de la especificación internacional Unicode estándar y se renderizan correctamente en dispositivos modernos con Android, iOS, así como en WhatsApp Web y la aplicación de escritorio.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo poner letras bonitas en mi nombre de WhatsApp?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Abre WhatsApp, ve a Ajustes > Perfil, toca en el icono de lápiz junto a tu Nombre, borra el texto anterior, pega el resultado generado y guarda los cambios. El límite oficial para este campo es de 25 caracteres.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo usar letras diferentes en mis estados de WhatsApp?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Puedes pegar letras estilizadas tanto en las actualizaciones efímeras de estado (historias de 24 horas) como en la frase fija de tu perfil conocida como estado Info.",
            },
          },
          {
            "@type": "Question",
            name: "¿Es necesario descargar alguna app externa o teclado?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Todo el proceso se realiza desde tu navegador web sin instalar aplicaciones adicionales, sin permisos invasivos y de forma totalmente gratuita.",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué algunas letras con tilde o la eñe no cambian de estilo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El estándar Unicode no dispone de variantes estilizadas precompuestas para todas las vocales acentuadas ni para la ñ en cada alfabeto. Para no corromper tu ortografía, nuestro conversor preserva el carácter original en español.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué estilos son más recomendados para que los mensajes sean fáciles de leer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Las negritas sans-serif, las mayúsculas pequeñas (Small Caps) y las cursivas suaves ofrecen una lectura nítida en pantallas móviles sin cansar la vista del destinatario.",
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

      {/* ── Messaging & Status Preview Hero ── */}
      <header className="hero-saas hero-saas--compact hero-saas--whatsapp">
        <div className="hero-saas__watermark-right" aria-hidden="true">
          𝒲 𝒽 𝒶 𝓉 𝓈
        </div>
        <div className="hero-saas__content">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Letras para WhatsApp" },
            ]}
          />
          <span className="hero-saas__badge hero-saas__badge--whatsapp">
            MENSAJES · ESTADOS · ESTILOS
          </span>
          <h1 className="hero-saas__title">
            Letras para <span className="gradient-text-emerald">WhatsApp</span>: Estados y Mensajes con Estilo
          </h1>
          <p className="hero-saas__lead">
            Transforma tus textos en fuentes llamativas para copiar y pegar: dale un toque personal a tus mensajes, destaca tu nombre de perfil y comparte estados memorables con tus contactos.
          </p>

          {/* Clean Messaging Conversation Preview Card */}
          <div className="chat-preview-card" aria-label="Vista previa de conversación y estado en WhatsApp">
            <div className="chat-preview-header">
              <div className="chat-preview-user">
                <div className="chat-preview-avatar" aria-hidden="true">
                  💬
                </div>
                <div className="chat-preview-meta">
                  <span className="chat-preview-name">𝓥𝓪𝓵𝓮𝓷𝓽𝓲𝓷𝓪 ✨</span>
                  <span className="chat-preview-status-line">en línea</span>
                </div>
              </div>
              <span className="chat-preview-badge-status">Vista previa</span>
            </div>

            <div className="chat-bubble chat-bubble--in">
              <span>Hola 👋 ¿cómo estás?</span>
              <span className="chat-bubble-time">10:42</span>
            </div>

            <div className="chat-bubble chat-bubble--out">
              <span>¡𝓗𝓸𝓵𝓪! 𝐒í, 𝐭𝐨𝐝𝐨 𝐥𝐢𝐬𝐭𝐨 🚀</span>
              <span className="chat-bubble-time">10:43</span>
            </div>

            <div className="chat-bubble chat-bubble--status">
              <span>📌 Estado Info: ☾ 𝐠𝐨𝐨𝐝 𝐯𝐢𝐛𝐞𝐬 ✦</span>
            </div>
          </div>

          <div className="hero-whatsapp-pills" role="list" aria-label="Estilos populares para WhatsApp">
            <span className="hero-whatsapp-pill" role="listitem">
              <span className="hero-whatsapp-pill__type">Mensaje:</span> 𝒯𝑒 𝓆𝓊𝒾𝑒𝓇𝑜
            </span>
            <span className="hero-whatsapp-pill" role="listitem">
              <span className="hero-whatsapp-pill__type">Estado:</span> ☾ 𝐠𝐨𝐨𝐝 𝐯𝐢𝐛𝐞𝐬 ✦
            </span>
            <span className="hero-whatsapp-pill" role="listitem">
              <span className="hero-whatsapp-pill__type">Grupo:</span> 📢 𝗔𝘃𝗶𝘀𝗼𝘀
            </span>
            <span className="hero-whatsapp-pill" role="listitem">
              <span className="hero-whatsapp-pill__type">Negrita:</span> 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭𝐞
            </span>
          </div>

          <span className="hero-whatsapp-cue">
            Escribe tu mensaje ↓
          </span>
        </div>
      </header>

      {/* ── Interactive Generator Tool ── */}
      <HubFontGenerator
        storagePrefix="whatsapp"
        defaultCategory="popular"
        defaultExample="Hola, ¿cómo estás?"
        searchPlaceholder="Buscar estilo para WhatsApp (cursiva, negrita, aesthetic)..."
        quickExamples={[
          "Hola, ¿cómo estás?",
          "Buenos días ❤️",
          "Te quiero mucho",
          "Disponible",
          "Good vibes ✦",
          "Feliz cumpleaños",
          "Gracias",
          "Nos vemos luego",
          "Sofía",
        ]}
        useCases={[
          { id: "mensaje", label: "Mensaje Bonito", icon: "💬", text: "𝒯𝑒 𝓆𝓊𝒾𝑒𝓇𝑜 𝓂𝓊𝒸𝒽𝑜 ❤️" },
          { id: "estado", label: "Estado / Info", icon: "📌", text: "☾ 𝐠𝐨𝐨𝐝 𝐯𝐢𝐛𝐞𝐬 ✦" },
          { id: "nombre", label: "Nombre Visible", icon: "👤", text: "𝓥𝓪𝓵𝓮𝓷𝓽𝓲𝓷𝓪 ✨" },
          { id: "negrita", label: "Titular / Grupo", icon: "🔥", text: "📢 𝗔𝘃𝗶𝘀𝗼 𝗜𝗺𝗽𝗼𝗿𝘁𝗮𝗻𝘁𝗲" },
          { id: "saludo", label: "Buenos Días", icon: "☀️", text: "🌸 𝒯𝑒 𝒹𝑒𝓈𝑒𝑜 𝓊𝓃 𝓁𝒾𝓃𝒹𝑜 𝒹í𝒶 🌸" },
        ]}
      />

      {/* ── Comprehensive Editorial Article ── */}
      <article className="prose-section" aria-label="Guía completa de letras para WhatsApp">
        {/* Section 1: Step by Step Guide */}
        <section className="prose-card">
          <h2>Cómo crear letras para WhatsApp paso a paso</h2>
          <p>
            Personalizar el texto que envías a diario en WhatsApp te permite transmitir cercanía, alegría y distinción. Ya sea para felicitar a un amigo en su cumpleaños, diseñar un estado motivador o darle un toque profesional al nombre de un grupo de trabajo, contar con tipografías especiales marca una diferencia inmediata.
          </p>
          <p>
            El procedimiento para generar y utilizar estas letras es muy sencillo:
          </p>
          <ol className="step-list">
            <li>
              <strong>Escribe tu texto:</strong> Ingresa la frase, saludo o nombre que deseas transformar en el cuadro superior de la herramienta.
            </li>
            <li>
              <strong>Compara los estilos en tiempo real:</strong> Nuestro generador mostrará tu mensaje adaptado a decenas de variantes tipográficas: cursivas caligráficas, negritas de imprenta, alfabetos aesthetic o mayúsculas pequeñas.
            </li>
            <li>
              <strong>Copia el resultado:</strong> Haz clic o toca en el botón <em>Copiar</em> del estilo que más te guste. El texto se guardará al instante en tu portapapeles.
            </li>
            <li>
              <strong>Abre WhatsApp:</strong> Dirígete a la conversación, al creador de estados o a la sección de edición de perfil.
            </li>
            <li>
              <strong>Pega y verifica:</strong> Mantén presionado el campo de texto, selecciona <em>Pegar</em> y comprueba la visualización antes de enviar o guardar.
            </li>
          </ol>
        </section>

        {/* Section 2: CRITICAL DISTINCTION - Native Formatting vs Unicode */}
        <section className="prose-card">
          <h2>Formato nativo de WhatsApp frente a letras Unicode: la diferencia clave</h2>
          <p>
            Para aprovechar al máximo las posibilidades tipográficas de WhatsApp, resulta indispensable comprender la diferencia entre dos tecnologías completamente distintas: el <strong>formato nativo de la aplicación</strong> y las <strong>letras estilizadas mediante Unicode</strong>.
          </p>

          <dl className="faq-list">
            <dt>1. Formato nativo de WhatsApp (atajos de teclado)</dt>
            <dd>
              WhatsApp incorpora internamente un sistema básico de marcado para dar formato a los mensajes en las conversaciones. Puedes escribir entre caracteres especiales o seleccionarlo en el menú emergente:
              <ul className="mt-2">
                <li><code>*negrita*</code> genera texto con trazo grueso estándar.</li>
                <li><code>_cursiva_</code> inclina las letras de la fuente del sistema.</li>
                <li><code>~tachado~</code> traza una línea horizontal sobre las palabras.</li>
                <li><code>```monoespaciado```</code> aplica una fuente de ancho fijo para código.</li>
                <li>Listas y citas usando guiones (<code>- </code>), números (<code>1. </code>) o corchetes angulares (<code>&gt; </code>).</li>
              </ul>
              <p className="mt-2 text-sm text-muted">
                <strong>Limitación principal:</strong> Este formato nativo funciona <em>exclusivamente dentro de los chats de conversación</em>. Si colocas asteriscos en tu nombre de perfil visible o en tu estado &quot;Info&quot;, WhatsApp mostrará los asteriscos literales como texto plano sin aplicar ningún cambio visual.
              </p>
            </dd>

            <dt className="mt-4">2. Letras estilizadas Unicode (nuestro conversor)</dt>
            <dd>
              Nuestro generador no aplica etiquetas ni estilos gráficos temporales, sino que sustituye cada carácter por su equivalente tipográfico dentro del estándar internacional <strong>Unicode</strong> (como los bloques de caracteres matemáticos alfanuméricos).
              <p className="mt-2">
                Dado que se trata de caracteres independientes reconocidos por los sistemas operativos de Apple, Google y Microsoft, estas letras <strong>se mantienen visibles en tu nombre de perfil, en tu estado Info y en tus estados efímeros</strong>, además de en los propios chats.
              </p>
            </dd>
          </dl>

          <div className="table-responsive my-4">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Característica</th>
                  <th scope="col">Formato nativo de WhatsApp (*, _, ~)</th>
                  <th scope="col">Letras Unicode (LetrasBonitas)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Mecanismo técnico</strong></td>
                  <td>Etiquetado interno de la aplicación.</td>
                  <td>Caracteres alfanuméricos especiales Unicode.</td>
                </tr>
                <tr>
                  <td><strong>Dónde funciona</strong></td>
                  <td>Solo en chats individuales, grupales y canales.</td>
                  <td>Nombre visible, estado Info, estados de 24h y chats.</td>
                </tr>
                <tr>
                  <td><strong>Variedad de estilos</strong></td>
                  <td>Limitada (solo negrita, cursiva, tachado y monoespacio).</td>
                  <td>Alta (cursivas caligráficas, góticas, aesthetic, círculos, etc.).</td>
                </tr>
                <tr>
                  <td><strong>Requiere atajos</strong></td>
                  <td>Sí (recordar símbolos como * o _).</td>
                  <td>No (escribir, copiar con un clic y pegar).</td>
                </tr>
                <tr>
                  <td><strong>Accesibilidad</strong></td>
                  <td>Excelente (el lector de pantalla lee el texto normal).</td>
                  <td>Buena para frases breves; no recomendada para párrafos muy largos.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: When to Use Each */}
        <section className="prose-card">
          <h2>Cuándo usar formato nativo y cuándo letras Unicode</h2>
          <p>
            Ambos métodos cumplen funciones complementarias y ninguno reemplaza por completo al otro. Te recomendamos seguir estas pautas prácticas:
          </p>
          <ul>
            <li>
              <strong>Usa el formato nativo de WhatsApp cuando:</strong> redactes mensajes largos de trabajo, organices listas de tareas, necesites enfatizar una palabra suelta en medio de una frase o quieras garantizar que cualquier lector de pantalla para personas con discapacidad visual pronuncie el texto sin pausas.
            </li>
            <li>
              <strong>Usa letras Unicode de nuestro generador cuando:</strong> quieras personalizar tu nombre visible de contacto (donde los asteriscos no funcionan), diseñar tu estado descriptivo de perfil (&quot;Info&quot;), publicar frases estéticas en tus estados efímeros de 24 horas o enviar felicitaciones especiales con fuentes caligráficas que WhatsApp no ofrece de forma predeterminada.
            </li>
          </ul>
        </section>

        {/* Section 4: Styles Breakdown */}
        <section className="prose-card">
          <h2>Tipos de letras para WhatsApp que puedes probar</h2>
          <p>
            Nuestro conversor reúne diferentes familias tipográficas preparadas para transmitir emociones concretas en tus conversaciones:
          </p>

          <h3>Letras cursivas y manuscritas (Script)</h3>
          <p>
            Aportan una caligrafía suave, fluida y elegante. Son perfectas para dedicatorias afectuosas, declaraciones de cariño y nombres de perfil con estilo refinado.
          </p>
          <div className="sample-pill my-2">
            <span>Ejemplo de cursiva:</span> <strong>𝒯𝑒 𝓆𝓊𝒾𝑒𝓇𝑜 𝓂𝓊𝒸𝒽𝑜</strong> o <strong>𝓥𝓪𝓵𝓮𝓷𝓽𝓲𝓷𝓪</strong>
          </div>
          <p className="text-sm text-muted">
            Para ver más alfabetos caligráficos, explora nuestra sección dedicada a <Link href="/letras-cursivas/" className="text-brand font-semibold underline">letras cursivas</Link>.
          </p>

          <h3 className="mt-4">Letras en negrita (Bold)</h3>
          <p>
            Ofrecen trazos sólidos y pesados que destacan de inmediato en la pantalla. Puedes elegir entre negritas clásicas con serifa o negritas sans-serif modernas para anuncios o avisos comunitarios.
          </p>
          <div className="sample-pill my-2">
            <span>Ejemplo en negrita:</span> <strong>𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭𝐞</strong> o <strong>📢 𝗔𝘃𝗶𝘀𝗼 𝗨𝗿𝗴𝗲𝗻𝘁𝗲</strong>
          </div>
          <p className="text-sm text-muted">
            Profundiza en las diferencias técnicas en nuestro artículo de <Link href="/letras-negritas/" className="text-brand font-semibold underline">letras negritas</Link>.
          </p>

          <h3 className="mt-4">Letras aesthetic y minimalistas</h3>
          <p>
            Combinan separaciones amplias, destellos y símbolos sutiles que generan una atmósfera relajada y moderna.
          </p>
          <div className="sample-pill my-2">
            <span>Ejemplo aesthetic:</span> <strong>☾ 𝐠𝐨𝐨𝐝 𝐯𝐢𝐛𝐞𝐬 ✦</strong> o <strong>【 𝑀𝒾 𝑒𝓈𝓅𝒶𝒸𝒾𝑜 】</strong>
          </div>
          <p className="text-sm text-muted">
            Descubre combinaciones armoniosas en nuestra guía de <Link href="/letras-aesthetic/" className="text-brand font-semibold underline">letras aesthetic</Link>.
          </p>

          <h3 className="mt-4">Mayúsculas pequeñas (Small Caps)</h3>
          <p>
            Presentan letras mayúsculas en tamaño reducido. Son especialmente recomendadas para el estado Info de WhatsApp por su orden y máxima legibilidad en pantallas compactas.
          </p>
          <div className="sample-pill my-2">
            <span>Ejemplo Small Caps:</span> <strong>ᴅɪsᴘᴏɴɪʙʟᴇ | sᴏʟᴏ ᴜʀɢᴇɴᴄɪᴀs</strong>
          </div>

          <h3 className="mt-4">Letras góticas (Fraktur)</h3>
          <p>
            Con trazos angulosos y ornamentos medievales, este estilo es muy utilizado en nombres de grupos familiares, comunidades de videojuegos o firmas con fuerte personalidad.
          </p>
          <div className="sample-pill my-2">
            <span>Ejemplo gótico:</span> <strong>𝕱𝖆𝖒𝖎𝖑𝖎𝖆 𝖀𝖓𝖎𝖉𝖆</strong> o <strong>𝕲𝖆𝖒𝖊𝖗𝖘</strong>
          </div>
        </section>

        {/* Section 5: Messages Examples */}
        <section className="prose-card">
          <h2>Letras para mensajes de WhatsApp</h2>
          <p>
            Sorprender a un contacto con una felicitación especial o un saludo cariñoso resulta mucho más memorable cuando el mensaje incorpora un toque de diseño tipográfico:
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Buenos días:</span> <strong>☕ 𝗕𝘂𝗲𝗻𝗼𝘀 𝗱í𝗮𝘀, ¿𝗰ó𝗺𝗼 𝗲𝘀𝘁á𝘀?</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Felicitación cariñosa:</span> <strong>🌸 𝒯𝑒 𝒹𝑒𝓈𝑒𝑜 𝓊𝓃 𝓁𝒾𝓃𝒹𝑜 𝒹í𝒶 🌸</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Cumpleaños festivo:</span> <strong>🎂 ¡𝐅𝐞𝐥𝐢𝐳 𝐜𝐮𝐦𝐩𝐥𝐞𝐚ñ𝐨𝐬! 🎉</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Mensaje afectuoso:</span> <strong>❤️ 𝒯𝑒 𝓆𝓊𝒾𝑒𝓇𝑜 𝓂𝓊𝒸𝒽𝑜 ❤️</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Agradecimiento:</span> <strong>✨ 𝗠𝘂𝗰𝗵𝗮𝘀 𝗴𝗿𝗮𝗰𝗶𝗮𝘀 𝗽𝗼𝗿 𝘁𝗼𝗱𝗼 ✨</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Despedida afectiva:</span> <strong>🌙 𝐻𝒶𝓈𝓉𝒶 𝓂𝒶ñ𝒶𝓃𝒶, 𝒹𝑒𝓈𝒸𝒶𝓃𝓈𝒶</strong>
            </div>
          </div>
          <p className="mt-3">
            Para personalizar tu propio mensaje, escribe en la caja interactiva superior y pulsa <em>Copiar</em>.
          </p>
        </section>

        {/* Section 6: Status & Info Examples */}
        <section className="prose-card">
          <h2>Letras para estados de WhatsApp (historias e Info de perfil)</h2>
          <p>
            WhatsApp ofrece dos espacios fundamentales para compartir estados, y cada uno cuenta con características propias:
          </p>

          <dl className="faq-list">
            <dt>Estado &quot;Info&quot; (descripción fija en tu perfil)</dt>
            <dd>
              Es la frase permanente que tus contactos leen cuando abren tu perfil o deslizan sobre tu contacto. Sustituir el genérico &quot;Disponible&quot; por un diseño limpio ayuda a comunicar tu disponibilidad real o un lema personal:
              <ul className="mt-2">
                <li><code>⚡ 𝐃𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞 ⚡</code></li>
                <li><code>🚀 𝐄𝐧𝐟𝐨𝐜𝐚𝐝𝐨 𝐞𝐧 𝐦𝐢𝐬 𝐦𝐞𝐭𝐚𝐬</code></li>
                <li><code>📴 𝕺𝖋𝖋𝖑𝖎𝖓𝖊 / 𝕾𝖔𝖑𝖔 𝖚𝖗𝖌𝖊𝖓𝖈𝖎𝖆𝖘</code></li>
                <li><code>☕ 𝓂ú𝓈𝒾𝒸𝒶 &amp; 𝒸𝒶𝒻é ♡</code></li>
                <li><code>ᴅᴏ ᴡʜᴀᴛ ʏᴏᴜ ʟᴏᴠᴇ ✨</code></li>
              </ul>
            </dd>

            <dt className="mt-4">Estados efímeros (historias de 24 horas)</dt>
            <dd>
              Las publicaciones temporales admiten hasta 700 caracteres de texto. Si bien WhatsApp permite cambiar el color de fondo y alternar fuentes básicas en el editor visual, copiar texto con alfabetos Unicode te permite incluir cursivas estilizadas o negritas combinadas con símbolos que la aplicación no incluye en su selector interno.
            </dd>
          </dl>
        </section>

        {/* Section 7: Profile Name Examples */}
        <section className="prose-card">
          <h2>Letras para nombres en WhatsApp</h2>
          <p>
            Tu nombre de perfil visible es el que ven los miembros de un grupo antes de tenerte agregado en su agenda de contactos. Personalizar este campo añade distinción y profesionalismo.
          </p>
          <p>
            Ten en cuenta que WhatsApp establece un límite de <strong>25 caracteres</strong> para este campo. Te recomendamos utilizar estilos compactos que mantengan tu nombre legible de un vistazo:
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Sofía cursiva:</span> <strong>𝓢𝓸𝓯í𝓪 ☾</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Valentina negrita:</span> <strong>𝗩𝗮𝗹𝗲𝗻𝘁𝗶𝗻𝗮 ✨</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Carlos elegante:</span> <strong>𝐂𝐚𝐫𝐥𝐨𝐬 ✦</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Daniel caligráfico:</span> <strong>𝒟𝒶𝓃𝒾𝑒𝓁</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Alex moderno:</span> <strong>ᴀʟᴇx</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>María delicada:</span> <strong>𝑀𝒶𝓇í𝒶 ♡</strong>
            </div>
          </div>
          <p className="mt-3">
            Para cambiarlo, entra en WhatsApp &gt; Ajustes &gt; toca sobre tu foto de perfil &gt; pulsa el icono de lápiz junto a tu Nombre, borra el contenido anterior y pega el resultado copiado.
          </p>
        </section>

        {/* Section 8: Symbols Integration */}
        <section className="prose-card">
          <h2>Cómo combinar letras y símbolos en WhatsApp</h2>
          <p>
            Acompañar tus palabras con pequeños símbolos ornamentales aporta armonía y balance visual. La moderación es esencial: añadir uno o dos detalles enmarca el mensaje sin saturar la conversación:
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Corazones clásicos:</span> <strong>♡ 𝒯𝑒 𝓆𝓊𝒾𝑒𝓇𝑜 ♡</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Destellos de brillo:</span> <strong>✦ 𝐁𝐮𝐞𝐧 𝐝í𝐚 ✦</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Símbolos de calma:</span> <strong>☾ ɢᴏᴏᴅ ᴠɪʙᴇs ☽</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Marcos orientales:</span> <strong>【 𝒜𝓋𝒾𝓈𝓸 】</strong>
            </div>
          </div>
          <p className="mt-3">
            Encuentra cientos de iconos compatibles en nuestro repertorio de <Link href="/simbolos/" className="text-brand font-semibold underline">símbolos para copiar y pegar</Link>.
          </p>
        </section>

        {/* Section 9: Spanish Characters Handling */}
        <section className="prose-card">
          <h2>¿Qué pasa con la ñ y las vocales con tilde en español?</h2>
          <p>
            El idioma español cuenta con acentos ortográficos (<code>á</code>, <code>é</code>, <code>í</code>, <code>ó</code>, <code>ú</code>), diéresis (<code>ü</code>), signos de apertura interrogativos (<code>¿</code>) y la letra <code>ñ</code>.
          </p>
          <p>
            El consorcio internacional Unicode definió los alfabetos matemáticos especiales para fórmulas científicas basadas en el alfabeto inglés tradicional. Por ese motivo histórico, muchas fuentes matemáticas carecen de variantes precompuestas con tildes para todas las letras.
          </p>
          <p>
            En LetrasBonitas cuidamos la lengua española mediante una <strong>estrategia de preservación inteligente</strong>: si un estilo seleccionado no dispone de una variante matemática para un carácter acentuado, nuestro motor conserva la letra original intacta (por ejemplo: <code>𝐒𝐨𝐟í𝐚</code>, <code>𝐄𝐬𝐩𝐚ñ𝐚</code>, <code>𝐜𝐨𝐫𝐚𝐳ó𝐧</code>, <code>¿𝐂ó𝐦𝐨 𝐞𝐬𝐭á𝐬?</code> o <code>𝐩𝐢𝐧𝐠ü𝐢𝐧𝐨</code>). De esta manera, tus mensajes y estados en WhatsApp jamás se corromperán con símbolos rotos o signos de interrogación imprevistos.
          </p>
        </section>

        {/* Section 10: Readability Advice */}
        <section className="prose-card">
          <h2>Consejos para mantener legibles tus mensajes</h2>
          <p>
            Para que la comunicación con tus contactos siga siendo fluida y agradable, te sugerimos poner en práctica estas recomendaciones:
          </p>
          <ul>
            <li>
              <strong>Estiliza con propósito:</strong> Transforma palabras clave, saludos o nombres propios en lugar de párrafos enteros de texto. Los mensajes demasiado recargados pueden dificultar la lectura veloz en teléfonos pequeños.
            </li>
            <li>
              <strong>Atención a los lectores de pantalla:</strong> Las personas con discapacidad visual que usan lectores de accesibilidad (como VoiceOver o TalkBack) escuchan los caracteres matemáticos de manera detallada (por ejemplo, &quot;letra matemática negrita sans-serif H mayúscula&quot;). Reservar los estilos especiales para firmas o nombres ayuda a no entorpecer la escucha de información urgente.
            </li>
            <li>
              <strong>Verifica la compatibilidad:</strong> Aunque prácticamente todos los teléfonos inteligentes actuales soportan caracteres Unicode modernos, algunos modelos muy antiguos podrían mostrar recuadros en estilos muy complejos. Probar previamente con un mensaje corto garantiza una experiencia óptima.
            </li>
          </ul>
        </section>

        {/* Section 11: FAQs */}
        <section className="prose-card">
          <h2>Preguntas frecuentes sobre letras para WhatsApp</h2>
          <dl className="faq-list">
            <dt>¿Cómo cambiar el tipo de letra en WhatsApp?</dt>
            <dd>
              Para cambiar la tipografía visual de tus palabras, escribe tu mensaje o nombre en nuestro generador, selecciona el estilo deseado (cursiva, negrita, aesthetic o gótica), pulsa Copiar, abre WhatsApp y pega el texto en el chat, en tu estado o en tu perfil.
            </dd>

            <dt>¿Cuál es la diferencia entre los asteriscos de WhatsApp y estas letras Unicode?</dt>
            <dd>
              Los códigos nativos de WhatsApp como asteriscos (*palabra*) o guiones bajos (_palabra_) solo funcionan dentro de las conversaciones de chat. En cambio, las letras Unicode generadas por nuestra herramienta modifican el carácter en sí, permitiendo lucir fuentes especiales en tu nombre de perfil visible y en tu estado Info.
            </dd>

            <dt>¿Pueden ver estas letras mis contactos de iPhone y Android?</dt>
            <dd>
              Sí. Los caracteres generados forman parte de la especificación internacional Unicode estándar y se renderizan correctamente en dispositivos modernos con Android, iOS, así como en WhatsApp Web y la aplicación de escritorio.
            </dd>

            <dt>¿Puedo poner letras bonitas en mi nombre de WhatsApp?</dt>
            <dd>
              Sí. Abre WhatsApp, ve a Ajustes &gt; Perfil, toca en el icono de lápiz junto a tu Nombre, borra el texto anterior, pega el resultado generado y guarda los cambios. El límite oficial para este campo es de 25 caracteres.
            </dd>

            <dt>¿Puedo usar letras diferentes en mis estados de WhatsApp?</dt>
            <dd>
              Sí. Puedes pegar letras estilizadas tanto en las actualizaciones efímeras de estado (historias de 24 horas) como en la frase fija de tu perfil conocida como estado Info.
            </dd>

            <dt>¿Es necesario descargar alguna app externa o teclado?</dt>
            <dd>
              No. Todo el proceso se realiza desde tu navegador web sin instalar aplicaciones adicionales, sin permisos invasivos y de forma totalmente gratuita.
            </dd>

            <dt>¿Por qué algunas letras con tilde o la eñe no cambian de estilo?</dt>
            <dd>
              El estándar Unicode no dispone de variantes estilizadas precompuestas para todas las vocales acentuadas ni para la ñ en cada alfabeto. Para no corromper tu ortografía, nuestro conversor preserva el carácter original en español.
            </dd>

            <dt>¿Qué estilos son más recomendados para que los mensajes sean fáciles de leer?</dt>
            <dd>
              Las negritas sans-serif, las mayúsculas pequeñas (Small Caps) y las cursivas suaves ofrecen una lectura nítida en pantallas móviles sin cansar la vista del destinatario.
            </dd>
          </dl>
        </section>

        {/* Section 12: Related Sibling Hubs */}
        <section className="prose-card">
          <h2>Explora otros estilos para tus aplicaciones</h2>
          <p>
            Descubre más herramientas tipográficas diseñadas para destacar en tus redes y plataformas preferidas:
          </p>
          <div className="family-cards-grid">
            <div className="family-card">
              <h3>Letras Negritas</h3>
              <p>El grosor tipográfico definitivo para destacar títulos sin asteriscos.</p>
              <Link href="/letras-negritas/" className="btn btn--secondary">Ver Negritas</Link>
            </div>
            <div className="family-card">
              <h3>Letras Cursivas</h3>
              <p>Trazos caligráficos elegantes para dedicatorias, firmas y saludos.</p>
              <Link href="/letras-cursivas/" className="btn btn--secondary">Ver Cursivas</Link>
            </div>
            <div className="family-card">
              <h3>Letras para Instagram</h3>
              <p>Diseña biografías y descripciones visualmente perfectas para Instagram.</p>
              <Link href="/letras-para-instagram/" className="btn btn--secondary">Ver Instagram</Link>
            </div>
            <div className="family-card">
              <h3>Conversor de Letras</h3>
              <p>Más de 80 variantes tipográficas universales listas para copiar.</p>
              <Link href="/conversor-de-letras/" className="btn btn--secondary">Ver Conversor</Link>
            </div>
          </div>
        </section>

        {/* Section 13: Final CTA */}
        <section className="prose-card text-center">
          <h2>Crea tus letras para WhatsApp ahora</h2>
          <p>
            Escribe tu mensaje, nombre o estado en el generador interactivo superior, elige tu estilo preferido y compártelo al instante con tus contactos.
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
