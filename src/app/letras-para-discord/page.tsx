import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HubFontGenerator } from "@/components/font-generator/HubFontGenerator";

export function generateMetadata(): Metadata {
  return {
    title: "Letras para Discord: Nicks y Mensajes Estilizados",
    description:
      "Nicks y mensajes para Discord con letras estilizadas para copiar y pegar. Destaca en tu servidor.",
    alternates: {
      canonical: "/letras-para-discord/",
    },
    openGraph: {
      title: "Letras para Discord: Nicks y Mensajes Estilizados",
      description:
        "Nicks y mensajes para Discord con letras estilizadas para copiar y pegar. Destaca en tu servidor.",
      locale: "es",
      type: "website",
      url: "/letras-para-discord/",
    },
    twitter: {
      card: "summary",
      title: "Letras para Discord: Nicks y Mensajes Estilizados",
      description:
        "Nicks y mensajes para Discord con letras estilizadas para copiar y pegar. Destaca en tu servidor.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LetrasParaDiscordPage() {
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
        "@id": "https://letrasbonits.com/letras-para-discord/#webpage",
        url: "https://letrasbonits.com/letras-para-discord/",
        name: "Letras para Discord: Nicks y Mensajes Estilizados",
        description:
          "Nicks y mensajes para Discord con letras estilizadas para copiar y pegar. Destaca en tu servidor.",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/letras-para-discord/#breadcrumb",
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
            name: "Letras para Discord",
            item: "https://letrasbonits.com/letras-para-discord/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://letrasbonits.com/letras-para-discord/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo cambiar la letra de mi nombre o apodo en Discord?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Escribe tu nombre en el generador, copia el estilo que más te guste, haz clic derecho sobre tu nombre en el servidor de Discord, selecciona 'Editar apodo del servidor' y pega tu nuevo nick.",
            },
          },
          {
            "@type": "Question",
            name: "¿Se pueden usar letras bonitas en nombres de canales de Discord?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Los administradores suelen usar estilos como small caps (versalitas) o combinaciones de símbolos para organizar canales de texto y voz de forma profesional.",
            },
          },
          {
            "@type": "Question",
            name: "¿Afectan estas letras la mención con @ en Discord?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Discord reconoce tu cuenta mediante tu nombre de usuario base (@usuario) o tu ID numérica. Cambiar el apodo del servidor por uno estilizado no impide que tus amigos puedan etiquetarte.",
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
          𝕯 𝖎 𝖘 𝖈
        </div>
        <div className="hero-saas__content">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Letras para Discord" },
            ]}
          />
          <span className="hero-saas__badge">🎮 SERVIDORES & NICKS GAMING</span>
          <h1 className="hero-saas__title">
            Letras para <span className="gradient-text-cyan">Discord</span>
          </h1>
          <p className="hero-saas__lead">
            Crea <strong>letras para Discord</strong> listas para copiar y pegar: personaliza nicks de servidor, nombres de canales, roles y tu perfil.
          </p>
        </div>
      </header>

      {/* ── Interactive Generator Tool ── */}
      <HubFontGenerator
        storagePrefix="discord"
        defaultCategory="popular"
        defaultExample="Nick de Discord"
        searchPlaceholder="Buscar estilo para Discord (gótico, gaming, small caps, negrita)..."
        quickExamples={[
          "👑 𝕶𝖎𝖓𝖌 𝖔𝖋 𝕾𝖊𝖗𝖛𝖊𝖗",
          "🎮 ɢᴀᴍᴇ ᴏᴠᴇʀ",
          "⚡ 𝓓𝓲𝓼𝓬𝓸𝓻𝓭 𝓜𝓸𝓭 ⚡",
          "✦ 𝒱𝐼𝒫 𝑀𝑒𝓂𝒷𝑒𝓇 ✦",
        ]}
        useCases={[
          { id: "nick", label: "Apodo Servidor", icon: "👤", text: "𝕯𝖆𝖗𝖐 𝕷𝖔𝖗𝖉" },
          { id: "canal", label: "Nombre Canal", icon: "📁", text: "💬・ᴄʜᴀᴛ-ɢᴇɴᴇʀᴀʟ" },
          { id: "rol", label: "Rol / Rango", icon: "🛡️", text: "👑 𝑶𝒘𝒏𝒆𝒓" },
          { id: "bio", label: "Acerca de Mí", icon: "✨", text: "ɢᴀᴍᴇʀ & ᴅᴇᴠ" },
        ]}
      />

      {/* ── Editorial Guide Content (300-500 words) ── */}
      <article className="prose-section" aria-label="Guía sobre letras para Discord">
        <section className="prose-card">
          <h2>¿Cómo funcionan las letras para Discord?</h2>
          <p>
            Discord es una de las plataformas favoritas para comunidades de videojuegos, streamers y creadores. Aunque Discord soporta formato Markdown básico en el chat (negrita, cursiva y bloques de código), este no se aplica a los <strong>apodos de servidor (server nicknames)</strong>, los <strong>nombres de canales</strong> ni la descripción <strong>&quot;Acerca de mí&quot;</strong> del perfil de usuario.
          </p>
          <p>
            Utilizando nuestro generador de <strong>letras para Discord</strong>, puedes convertir cualquier texto normal en caracteres Unicode estilizados: fuentes góticas, versalitas (small caps), letras en círculos o negritas medievales que se leen en cualquier dispositivo sin requerir bots ni extensiones.
          </p>
        </section>

        <section className="prose-card">
          <h2>Dónde aplicar tipografías estilizadas en Discord</h2>
          <p>
            Mejora la apariencia de tu cuenta y de tu servidor en estas secciones clave:
          </p>
          <ul>
            <li><strong>Apodo del servidor (Server Nickname):</strong> Personaliza tu nombre individualmente en cada comunidad para reflejar tu rango, clan o temática de juego sin cambiar tu usuario global.</li>
            <li><strong>Nombres de canales de texto y voz:</strong> Diseña una barra lateral estética combinando versalitas (small caps) y separadores elegantes (como <code>💬・ᴄʜᴀᴛ-ɢᴇɴᴇʀᴀʟ</code> o <code>🔊・ᴠᴏᴢ-ᴘʀɪɴᴄɪᴘᴀʟ</code>).</li>
            <li><strong>Nombres de roles y rangos:</strong> Otorga a tus moderadores, miembros VIP o suscriptores roles llamativos que destaquen en la lista de usuarios.</li>
            <li><strong>Biografía &quot;Acerca de mí&quot;:</strong> Presenta tus gustos, enlaces de Twitch y horarios de transmisión con tipografía cuidada.</li>
          </ul>
        </section>

        <section className="prose-card">
          <h2>Ejemplos de letras para Discord para copiar y pegar</h2>
          <p>
            Aquí tienes combinaciones populares listas para llevar directamente a tu cliente de Discord:
          </p>
          <div className="preview-samples-grid" role="list">
            <div className="sample-pill" role="listitem">
              <span>Apodo gótico medieval:</span> <strong>👑 𝕶𝖎𝖓𝖌 𝖔𝖋 𝕾𝖊𝖗𝖛𝖊𝖗</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Canal en versalitas:</span> <strong>📢・ᴀɴᴜɴᴄɪᴏs-ᴏғɪᴄɪᴀʟᴇs</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Rol VIP elegante:</span> <strong>✦ 𝒱𝐼𝒫 𝑀𝑒𝓂𝒷𝑒𝓇 ✦</strong>
            </div>
            <div className="sample-pill" role="listitem">
              <span>Estilo gamer limpio:</span> <strong>🎮 ɢᴀᴍɪɴɢ ʟᴇɢᴇɴᴅ</strong>
            </div>
          </div>
          <p className="mt-3">
            Introduce tu apodo o palabra en el generador superior, explora las múltiples opciones y copia tu resultado en segundos.
          </p>
        </section>

        {/* ── Related Hubs Section ── */}
        <section className="prose-card">
          <h2>Explora más herramientas para gaming y redes</h2>
          <p>
            Descubre más recursos para tus perfiles en juegos y plataformas sociales:
          </p>
          <div className="family-cards-grid">
            <div className="family-card">
              <h3>Nombres para Juegos</h3>
              <p>Generador de nicks, apodos y clanes para todos tus videojuegos.</p>
              <Link href="/nombres-para-juegos/" className="btn btn--secondary">Ver Juegos</Link>
            </div>
            <div className="family-card">
              <h3>Letras Góticas</h3>
              <p>Estilos medievales oscuros y Fraktur ideales para servidores de rol.</p>
              <Link href="/letras-goticas/" className="btn btn--secondary">Ver Góticas</Link>
            </div>
            <div className="family-card">
              <h3>Letras para TikTok</h3>
              <p>Fuentes y tipografías para nombres y bios virales en TikTok.</p>
              <Link href="/letras-para-tiktok/" className="btn btn--secondary">Ver TikTok</Link>
            </div>
            <div className="family-card">
              <h3>Nombres para Free Fire</h3>
              <p>Crea nombres con símbolos insanos y estilos para Free Fire.</p>
              <Link href="/nombres-para-free-fire/" className="btn btn--secondary">Ver Free Fire</Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
