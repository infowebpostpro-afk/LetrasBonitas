import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InstagramSymbolsExplorer } from "@/components/font-generator/InstagramSymbolsExplorer";

export const metadata: Metadata = {
  title: "Símbolos para Instagram: Copiar y Pegar",
  description:
    "Encuentra símbolos para Instagram, corazones, estrellas, flores, flechas y separadores. Copia tus favoritos y pégalos en tu bio, captions y perfil.",
  alternates: {
    canonical: "/letras-para-instagram/simbolos-para-instagram/",
  },
  openGraph: {
    title: "Símbolos para Instagram: Copiar y Pegar",
    description:
      "Encuentra símbolos para Instagram, corazones, estrellas, flores, flechas y separadores. Copia tus favoritos y pégalos en tu bio, captions y perfil.",
    locale: "es",
    type: "website",
    url: "/letras-para-instagram/simbolos-para-instagram/",
  },
  twitter: {
    card: "summary",
    title: "Símbolos para Instagram: Copiar y Pegar",
    description:
      "Encuentra símbolos para Instagram, corazones, estrellas, flores, flechas y separadores. Copia tus favoritos y pégalos en tu bio, captions y perfil.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SimbolosParaInstagramPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://letrasbonitas.com/#website",
        url: "https://letrasbonitas.com/",
        name: "LetrasBonitas",
        description:
          "Generador de letras bonitas y recursos tipográficos en español.",
        inLanguage: "es",
      },
      {
        "@type": "WebPage",
        "@id": "https://letrasbonitas.com/letras-para-instagram/simbolos-para-instagram/#webpage",
        url: "https://letrasbonitas.com/letras-para-instagram/simbolos-para-instagram/",
        name: "Símbolos para Instagram: Copiar y Pegar",
        description:
          "Encuentra símbolos para Instagram, corazones, estrellas, flores, flechas y separadores. Copia tus favoritos y pégalos en tu bio, captions y perfil.",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonitas.com/letras-para-instagram/simbolos-para-instagram/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://letrasbonitas.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Letras para Instagram",
            item: "https://letrasbonitas.com/letras-para-instagram/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Símbolos para Instagram",
            item: "https://letrasbonitas.com/letras-para-instagram/simbolos-para-instagram/",
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": "https://letrasbonitas.com/letras-para-instagram/simbolos-para-instagram/#app",
        name: "Símbolos para Instagram",
        url: "https://letrasbonitas.com/letras-para-instagram/simbolos-para-instagram/",
        applicationCategory: "UtilityApplication",
        operatingSystem: "All",
        browserRequirements: "Requires HTML5 and JavaScript",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
  };

  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero-saas hero-saas--compact hero-saas--instagram">
        <div className="hero-saas__container">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Letras para Instagram", href: "/letras-para-instagram/" },
              {
                label: "Símbolos para Instagram",
                href: "/letras-para-instagram/simbolos-para-instagram/",
              },
            ]}
          />
          <div className="hero-saas__badge">
            <span className="hero-saas__badge-dot" />
            <span className="hero-saas__badge-text">SÍMBOLOS DE INSTAGRAM</span>
          </div>
          <h1 className="hero-saas__title">
            Símbolos para <span className="gradient-text-pink">Instagram</span>
          </h1>
          <p className="hero-saas__description">
            Encuentra símbolos para Instagram y cópialos con un toque. Explora
            corazones, estrellas, flores, flechas, separadores, símbolos
            aesthetic, símbolos minimalistas y otros caracteres para personalizar
            tu perfil, bio, publicaciones y textos.
          </p>
          <div className="hero-saas__sublead" style={{ color: "var(--slate-300)", marginTop: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
            Elige un símbolo → toca Copiar → pégalo en Instagram
          </div>
        </div>
      </section>

      {/* ───── HERRAMIENTA INTERACTIVA ───── */}
      <InstagramSymbolsExplorer />

      {/* ───── CONTENIDO EDUCATIVO Y GUÍA SEO COMPLETA ───── */}
      <article className="prose-card" style={{ marginTop: "3.5rem" }}>
        <section aria-labelledby="sec-copiar-pegar">
          <h2 id="sec-copiar-pegar" className="section-heading">
            Símbolos para copiar y pegar
          </h2>
          <p>
            Aquí puedes encontrar símbolos listos para copiar y utilizar en tus
            textos.
          </p>

          <div className="symbol-preview-grid">
            <div className="symbol-preview-box">
              <h3>Corazones</h3>
              <code>♡ ♥ ❤ ❥ ❣ ღ</code>
            </div>

            <div className="symbol-preview-box">
              <h3>Estrellas y destellos</h3>
              <code>★ ☆ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰</code>
            </div>

            <div className="symbol-preview-box">
              <h3>Flores</h3>
              <code>✿ ❀ ❁ ❃ ❋ ❊ ❉</code>
            </div>

            <div className="symbol-preview-box">
              <h3>Flechas</h3>
              <code>→ ← ↑ ↓ ↗ ↘ ↙ ↖ ➜ ➤ ➳ ➵</code>
            </div>

            <div className="symbol-preview-box">
              <h3>Separadores</h3>
              <code>• · │ ┃ ❘ ❙ ┆ ┊</code>
            </div>

            <div className="symbol-preview-box">
              <h3>Lunas y cielo</h3>
              <code>☾ ☽ ☼ ☀ ☁ ☄ ✧</code>
            </div>

            <div className="symbol-preview-box">
              <h3>Cruces y símbolos decorativos</h3>
              <code>† ‡ ✝ ✞ ✟ ✠ ✦ ✧</code>
            </div>
          </div>

          <p style={{ marginTop: "1rem" }}>
            Toca o selecciona el símbolo que quieras y cópialo para utilizarlo
            donde lo necesites.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-bio">
          <h2 id="sec-bio" className="section-heading">
            Símbolos para la bio de Instagram
          </h2>
          <p>
            Los símbolos pueden ayudarte a separar información dentro de una
            bio.
          </p>
          <p>Por ejemplo:</p>
          <pre className="code-block">
            {`♡ Fotografía
✦ Viajes
☾ Música
⌁ Madrid`}
          </pre>
          <p>También puedes utilizarlos como separadores:</p>
          <pre className="code-block">{`Fotografía • Viajes • Música`}</pre>
          <p>o:</p>
          <pre className="code-block">{`Fotografía │ Viajes │ Música`}</pre>
          <p>Otra opción es colocar un símbolo al principio de cada línea:</p>
          <pre className="code-block">
            {`✦ Creador de contenido
✦ Fotografía
✦ Viajes
✦ Contacto`}
          </pre>
          <p>
            No necesitas llenar toda la bio de caracteres decorativos. Uno o dos
            símbolos bien colocados pueden organizar mejor el texto.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-aesthetic">
          <h2 id="sec-aesthetic" className="section-heading">
            Símbolos aesthetic para Instagram
          </h2>
          <p>
            Los símbolos aesthetic suelen utilizarse para crear una apariencia
            más decorativa o minimalista.
          </p>
          <p>Algunos ejemplos:</p>
          <pre className="code-block">
            {`୨୧
♡
✦
✧
˚
⊹
⋆
☾
⌇
ꕤ`}
          </pre>
          <p>Puedes combinarlos con texto:</p>
          <pre className="code-block">{`୨୧ 𝓭𝓻𝓮𝓪𝓶𝓮𝓻 ୨୧`}</pre>
          <pre className="code-block">{`☾ 𝓷𝓲𝓰𝓱𝓽 𝓿𝓲𝓫𝓮𝓼 ☽`}</pre>
          <pre className="code-block">{`✦ ᴄʀᴇᴀᴛᴇ · ᴅʀᴇᴀᴍ · ʟɪᴠᴇ ✦`}</pre>
          <p>
            La combinación depende del estilo que quieras conseguir. Para un
            diseño limpio, utiliza pocos elementos.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-corazones">
          <h2 id="sec-corazones" className="section-heading">
            Corazones para Instagram
          </h2>
          <p>
            Los corazones son útiles para bios, nombres visibles, captions y
            mensajes.
          </p>
          <p>Puedes copiar:</p>
          <pre className="code-block">
            {`♡
♥
❤
❥
❣
ღ`}
          </pre>
          <p>También puedes crear pequeñas combinaciones:</p>
          <pre className="code-block">{`♡ 𝓛𝓸𝓿𝓮 ♡`}</pre>
          <pre className="code-block">{`♥ 𝓕𝓪𝓶𝓲𝓵𝔂 ♥`}</pre>
          <pre className="code-block">{`ღ 𝓜𝓾𝓼𝓲𝓬 ღ`}</pre>
          <p>
            Los caracteres no tienen necesariamente la misma apariencia en
            todos los dispositivos. Comprueba el resultado después de pegarlo.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-estrellas">
          <h2 id="sec-estrellas" className="section-heading">
            Estrellas para Instagram
          </h2>
          <p>
            Las estrellas y destellos funcionan bien como elementos
            decorativos.
          </p>
          <pre className="code-block">
            {`★ ☆
✦ ✧
✩ ✪
✫ ✬
✭ ✮
✯ ✰`}
          </pre>
          <p>Puedes utilizar una estrella para destacar una palabra:</p>
          <pre className="code-block">{`✦ Creativa ✦`}</pre>
          <p>o como separador:</p>
          <pre className="code-block">{`Viajes ✦ Música ✦ Fotografía`}</pre>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-separar">
          <h2 id="sec-separar" className="section-heading">
            Símbolos para separar texto
          </h2>
          <p>
            Los separadores pueden ser más útiles que los símbolos decorativos
            cuando tienes varias categorías en una misma línea.
          </p>
          <p>Prueba:</p>
          <pre className="code-block">
            {`•
·
│
┃
❘
❙
┆
┊`}
          </pre>
          <p>Ejemplos:</p>
          <pre className="code-block">{`Diseño · Música · Viajes`}</pre>
          <pre className="code-block">{`Diseño │ Música │ Viajes`}</pre>
          <pre className="code-block">{`Madrid • España • 2026`}</pre>
          <p>
            Un separador sencillo suele ser más fácil de leer que una cadena
            larga de caracteres.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-flechas">
          <h2 id="sec-flechas" className="section-heading">
            Flechas para Instagram
          </h2>
          <p>
            Las flechas pueden servir para dirigir la atención hacia una palabra,
            enlace o llamada a la acción.
          </p>
          <pre className="code-block">
            {`→
←
↑
↓
↗
↘
➜
➤
➳
➵`}
          </pre>
          <p>Ejemplos:</p>
          <pre className="code-block">{`👇 Mira mi último proyecto`}</pre>
          <pre className="code-block">{`Nuevas fotos → aquí`}</pre>
          <pre className="code-block">{`Más información ↓`}</pre>
          <p>Utiliza la flecha para reforzar el mensaje, no para reemplazarlo.</p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-flores">
          <h2 id="sec-flores" className="section-heading">
            Símbolos de flores y naturaleza
          </h2>
          <p>
            Si buscas una estética más suave, puedes utilizar símbolos
            relacionados con flores y naturaleza.
          </p>
          <pre className="code-block">
            {`✿
❀
❁
❃
❋
❊
❉
☘
♧`}
          </pre>
          <p>Ejemplos:</p>
          <pre className="code-block">{`✿ 𝓒𝓻𝓮𝓪𝓽𝓲𝓿𝓪 ✿`}</pre>
          <pre className="code-block">{`❀ Viajes y fotografía ❀`}</pre>
          <p>
            También puedes combinarlos con texto normal para mantener una
            apariencia sencilla.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-minimalistas">
          <h2 id="sec-minimalistas" className="section-heading">
            Símbolos minimalistas
          </h2>
          <p>No todos los símbolos tienen que ser llamativos.</p>
          <p>Para un perfil minimalista puedes utilizar:</p>
          <pre className="code-block">
            {`·
•
│
|
⌇
+
°
*`}
          </pre>
          <p>Ejemplo:</p>
          <pre className="code-block">{`Diseño · Fotografía · Madrid`}</pre>
          <p>o:</p>
          <pre className="code-block">{`23° · Madrid`}</pre>
          <p>
            Los caracteres simples suelen ser una buena opción cuando quieres
            separar información sin llamar demasiado la atención.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-marcos">
          <h2 id="sec-marcos" className="section-heading">
            Marcos y decoraciones para nombres
          </h2>
          <p>
            Puedes combinar símbolos para crear pequeños marcos alrededor de
            una palabra.
          </p>
          <p>Ejemplos:</p>
          <pre className="code-block">{`♡ Camila ♡`}</pre>
          <pre className="code-block">{`✦ Camila ✦`}</pre>
          <pre className="code-block">{`୨୧ Camila ୨୧`}</pre>
          <pre className="code-block">{`꧁ Camila ꧂`}</pre>
          <p>También puedes combinarlos con letras estilizadas:</p>
          <pre className="code-block">{`꧁ 𝓒𝓪𝓶𝓲𝓵𝓪 ꧂`}</pre>
          <p>
            No todos los marcos utilizan un único carácter. Algunas
            decoraciones pueden ser combinaciones de varios caracteres Unicode.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-captions">
          <h2 id="sec-captions" className="section-heading">
            Símbolos para captions
          </h2>
          <p>
            Los símbolos también pueden utilizarse para organizar una
            descripción.
          </p>
          <p>Por ejemplo:</p>
          <pre className="code-block">
            {`✦ Nuevo proyecto

📸 Fotografía
✈ Viajes
☕ Café

👇 Más información`}
          </pre>
          <p>También puedes separar conceptos:</p>
          <pre className="code-block">{`Fotografía ✦ Viajes ✦ Lifestyle`}</pre>
          <p>
            La función principal debería ser mejorar la lectura, no añadir
            caracteres por todas partes.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-nombres">
          <h2 id="sec-nombres" className="section-heading">
            Símbolos para nombres
          </h2>
          <p>Un símbolo puede acompañar a un nombre sin modificar las letras.</p>
          <p>Por ejemplo:</p>
          <pre className="code-block">{`♡ Luna`}</pre>
          <pre className="code-block">{`✦ Alex`}</pre>
          <pre className="code-block">{`☾ Daniel`}</pre>
          <pre className="code-block">{`꧁ Carlos ꧂`}</pre>
          <p>También puedes combinar símbolos con letras estilizadas:</p>
          <pre className="code-block">{`✦ 𝓛𝓾𝓷𝓪 ✦`}</pre>
          <p>
            Si estás buscando transformar las letras del nombre, puedes
            utilizar el{" "}
            <Link href="/conversor-de-letras/">Conversor de Letras</Link>{" "}
            además de los símbolos.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-stories">
          <h2 id="sec-stories" className="section-heading">
            Símbolos para Instagram Stories
          </h2>
          <p>
            Los caracteres pueden utilizarse como elementos de texto dentro de
            una composición.
          </p>
          <p>Puedes probar:</p>
          <pre className="code-block">
            {`✦
♡
☾
☆
→
↓
•
·`}
          </pre>
          <p>Por ejemplo:</p>
          <pre className="code-block">{`☆ VIBES ☆`}</pre>
          <p>o:</p>
          <pre className="code-block">{`☾ night`}</pre>
          <p>
            La apariencia final puede depender de cómo Instagram y el
            dispositivo representen el carácter.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-como-copiar">
          <h2 id="sec-como-copiar" className="section-heading">
            Cómo copiar símbolos para Instagram
          </h2>
          <p>El proceso es sencillo:</p>
          <ol className="styled-list">
            <li>Encuentra el símbolo que quieres.</li>
            <li>Tócalo o pulsa <strong>Copiar</strong>.</li>
            <li>Abre Instagram.</li>
            <li>Ve al campo donde quieres utilizarlo.</li>
            <li>Mantén pulsado el campo de texto.</li>
            <li>Selecciona <strong>Pegar</strong>.</li>
            <li>Comprueba el resultado antes de publicar o guardar.</li>
          </ol>
          <p>
            En una herramienta optimizada para móvil, el botón de copia debe
            estar disponible directamente junto al símbolo.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-buscar-rapido">
          <h2 id="sec-buscar-rapido" className="section-heading">
            Busca un símbolo rápidamente
          </h2>
          <p>
            Cuando una biblioteca contiene muchos caracteres, desplazarte
            manualmente puede ser lento.
          </p>
          <p>
            Por eso el generador debería permitir buscar por categorías o
            palabras como:
          </p>
          <ul className="styled-list">
            <li>Corazón</li>
            <li>Estrella</li>
            <li>Flor</li>
            <li>Flecha</li>
            <li>Luna</li>
            <li>Separador</li>
            <li>Aesthetic</li>
            <li>Decorativo</li>
            <li>Minimalista</li>
            <li>Gaming</li>
          </ul>
          <p>También es útil filtrar los resultados por categoría.</p>
          <p>
            De esta forma puedes encontrar un carácter concreto sin revisar toda
            la colección.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-categorias">
          <h2 id="sec-categorias" className="section-heading">
            Categorías de símbolos
          </h2>
          <p>
            Para organizar una biblioteca grande, estas categorías son
            especialmente útiles:
          </p>

          <div className="table-wrapper" style={{ overflowX: "auto" }}>
            <table className="prose-table">
              <thead>
                <tr>
                  <th>Categoría</th>
                  <th>Ejemplos de uso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Corazones</td>
                  <td>Bio, nombres, captions</td>
                </tr>
                <tr>
                  <td>Estrellas</td>
                  <td>Destacar palabras</td>
                </tr>
                <tr>
                  <td>Flores</td>
                  <td>Estilo aesthetic</td>
                </tr>
                <tr>
                  <td>Flechas</td>
                  <td>Llamadas a la acción</td>
                </tr>
                <tr>
                  <td>Separadores</td>
                  <td>Organizar texto</td>
                </tr>
                <tr>
                  <td>Lunas</td>
                  <td>Perfiles aesthetic</td>
                </tr>
                <tr>
                  <td>Naturaleza</td>
                  <td>Bios y nombres</td>
                </tr>
                <tr>
                  <td>Cruces</td>
                  <td>Diseños decorativos</td>
                </tr>
                <tr>
                  <td>Geométricos</td>
                  <td>Estilos minimalistas</td>
                </tr>
                <tr>
                  <td>Paréntesis</td>
                  <td>Marcos y decoraciones</td>
                </tr>
                <tr>
                  <td>Puntuación</td>
                  <td>Separar contenido</td>
                </tr>
                <tr>
                  <td>Gaming</td>
                  <td>Nombres y perfiles</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "1rem" }}>
            La herramienta muestra estas categorías como filtros para que
            encontrar un símbolo sea rápido, especialmente en móvil.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-unicode-emoji">
          <h2 id="sec-unicode-emoji" className="section-heading">
            Símbolos Unicode y emoji
          </h2>
          <p>
            No todo lo que visualmente parece un icono pertenece a la misma
            categoría técnica.
          </p>
          <p>
            Unicode contiene caracteres de texto, símbolos y emoji. Algunos
            emoji son caracteres individuales y otros son secuencias
            compuestas por varios puntos de código. Unicode mantiene tablas
            específicas para los caracteres y secuencias emoji.
          </p>
          <p>
            Por eso, en una biblioteca de símbolos es útil diferenciar entre:
          </p>
          <ul className="styled-list">
            <li>Símbolos Unicode</li>
            <li>Caracteres decorativos</li>
            <li>Pictogramas</li>
            <li>Emoji</li>
            <li>Secuencias de emoji</li>
            <li>Combinaciones decorativas</li>
          </ul>
          <p>
            No es necesario conocer esta diferencia para copiar un carácter,
            pero sí ayuda a explicar por qué algunos elementos pueden comportarse
            de manera diferente al copiarlos o mostrarlos.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-apariencia">
          <h2 id="sec-apariencia" className="section-heading">
            ¿Por qué algunos símbolos se ven diferentes?
          </h2>
          <p>Un carácter Unicode no es una imagen fija.</p>
          <p>
            La apariencia que ves puede depender del sistema, la aplicación y la
            fuente utilizada para representar ese carácter. Unicode define los
            caracteres, pero no obliga a que cada plataforma los dibuje
            exactamente con la misma apariencia.
          </p>
          <p>Por eso un símbolo puede:</p>
          <ul className="styled-list">
            <li>Verse ligeramente diferente.</li>
            <li>Tener otro diseño visual.</li>
            <li>Aparecer en blanco y negro.</li>
            <li>Mostrarse como emoji en algunos contextos.</li>
            <li>
              No representarse correctamente si el sistema no dispone de una
              fuente adecuada.
            </li>
          </ul>
          <p>Si un símbolo no se ve como esperabas, prueba otra variante.</p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-cuadro">
          <h2 id="sec-cuadro" className="section-heading">
            ¿Por qué algunos símbolos aparecen como un cuadro?
          </h2>
          <p>
            Un cuadro de sustitución normalmente indica que el sistema o la
            aplicación no pudo representar correctamente determinado carácter.
          </p>
          <p>Si ocurre:</p>
          <ol className="styled-list">
            <li>Prueba otro símbolo.</li>
            <li>Utiliza una variante más común.</li>
            <li>Comprueba el resultado en el dispositivo de destino.</li>
            <li>
              Evita utilizar caracteres que no puedas verificar visualmente.
            </li>
          </ol>
          <p>
            No conviene asumir que un carácter que funciona en tu navegador
            funcionará exactamente igual en cualquier aplicación.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-cantidad">
          <h2 id="sec-cantidad" className="section-heading">
            ¿Cuántos símbolos tiene la herramienta?
          </h2>
          <p>
            La cantidad debe depender de la colección real disponible.
          </p>
          <p>
            Una biblioteca útil puede contener cientos de caracteres y
            categorías, pero no tiene sentido anunciar un número elevado si gran
            parte de los elementos son duplicados, variaciones sin utilidad o
            combinaciones repetidas.
          </p>
          <p>
            LetrasBonitas muestra un contador basado en los símbolos realmente
            disponibles.
          </p>
          <p>
            La calidad de la colección es más importante que un número inflado.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-sobrecargar">
          <h2 id="sec-sobrecargar" className="section-heading">
            Cómo combinar símbolos sin sobrecargar tu perfil
          </h2>
          <p>Un error frecuente es utilizar demasiados símbolos.</p>
          <p>Por ejemplo, esto puede resultar difícil de leer:</p>
          <pre className="code-block">{`♡☆✦✧❀☾♡☆✦✧❀☾`}</pre>
          <p>Una alternativa más clara sería:</p>
          <pre className="code-block">{`✦ Fotografía · Viajes · Música ✦`}</pre>
          <p>El objetivo de un símbolo es complementar el texto.</p>
          <p>
            Si cada palabra tiene varios adornos, la información principal puede
            perderse.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-ideas">
          <h2 id="sec-ideas" className="section-heading">
            Ideas rápidas para usar símbolos
          </h2>
          <p>Puedes probar estas combinaciones:</p>

          <div className="ideas-grid" style={{ display: "grid", gap: "1rem" }}>
            <div className="idea-card">
              <h3>Bio</h3>
              <pre className="code-block">
                {`✦ Creador digital
📸 Fotografía
📍 Madrid`}
              </pre>
            </div>

            <div className="idea-card">
              <h3>Separador</h3>
              <pre className="code-block">{`Fotografía • Viajes • Música`}</pre>
            </div>

            <div className="idea-card">
              <h3>Nombre</h3>
              <pre className="code-block">{`♡ 𝓛𝓸𝓿𝓮 ♡`}</pre>
            </div>

            <div className="idea-card">
              <h3>Llamada a la acción</h3>
              <pre className="code-block">{`👇 Mira mi nuevo proyecto`}</pre>
            </div>

            <div className="idea-card">
              <h3>Estilo aesthetic</h3>
              <pre className="code-block">{`☾ 𝓷𝓲𝓰𝓱𝓽 𝓿𝓲𝓫𝓮𝓼 ☽`}</pre>
            </div>

            <div className="idea-card">
              <h3>Minimalista</h3>
              <pre className="code-block">{`Diseño · Foto · Viajes`}</pre>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-movil">
          <h2 id="sec-movil" className="section-heading">
            Símbolos para copiar desde el móvil
          </h2>
          <p>La herramienta está pensada para pantallas pequeñas.</p>
          <p>Una buena experiencia móvil permite:</p>
          <ul className="styled-list">
            <li>Ver varios símbolos sin desplazamientos horizontales.</li>
            <li>Tocar un símbolo para copiarlo.</li>
            <li>Ver claramente el estado de copia.</li>
            <li>Filtrar categorías.</li>
            <li>Buscar caracteres.</li>
            <li>Acceder a favoritos.</li>
            <li>Copiar sin abrir otra página.</li>
          </ul>
          <p>
            Después de copiar, un mensaje breve como <strong>✓ Copiado</strong>{" "}
            confirma que la acción se realizó correctamente.
          </p>
          <p>
            No es necesario mostrar ventanas emergentes grandes ni interrumpir el
            flujo.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-favoritos">
          <h2 id="sec-favoritos" className="section-heading">
            Guarda tus símbolos favoritos
          </h2>
          <p>
            Si utilizas algunos símbolos con frecuencia, puedes guardarlos como
            favoritos.
          </p>
          <p>Por ejemplo:</p>
          <pre className="code-block">
            {`♡
✦
☾
☆
→
•`}
          </pre>
          <p>
            Los favoritos se almacenan localmente en tu navegador, sin necesidad
            de crear una cuenta.
          </p>
          <p>
            Esto permite volver rápidamente a los caracteres que utilizas con
            frecuencia.
          </p>
        </section>

        <hr className="divider" />

        <section aria-labelledby="sec-explora">
          <h2 id="sec-explora" className="section-heading">
            Explora más opciones
          </h2>
          <p>
            Si buscas algo más que símbolos, puedes combinar esta herramienta
            con otras páginas de LetrasBonitas:
          </p>
          <ul className="styled-list">
            <li>
              <Link href="/letras-para-instagram/">Letras para Instagram</Link>
            </li>
            <li>
              <Link href="/conversor-de-letras/">Conversor de Letras</Link>
            </li>
            <li>
              <Link href="/letras-cursivas/">Letras Cursivas</Link>
            </li>
            <li>
              <Link href="/tipos-de-letras/">Tipos de Letras</Link>
            </li>
            <li>
              <Link href="/letras-goticas/">Letras Góticas</Link>
            </li>
          </ul>
          <p>
            Cada herramienta tiene una función diferente. Los símbolos sirven
            para decorar y organizar, mientras que un conversor puede transformar
            las letras de tu propio texto.
          </p>
        </section>

        <hr className="divider" />

        {/* ───── PREGUNTAS FRECUENTES COMPLETAS ───── */}
        <section aria-labelledby="sec-faqs" style={{ marginTop: "2rem" }}>
          <h2 id="sec-faqs" className="section-heading text-center">
            Preguntas frecuentes
          </h2>
          <dl className="faq-list">
            <div>
              <dt>¿Cómo copiar símbolos para Instagram?</dt>
              <dd>
                Busca el símbolo que quieras, pulsa <strong>Copiar</strong> y
                después pégalo en el campo de Instagram donde quieras
                utilizarlo.
              </dd>
            </div>
            <div>
              <dt>¿Qué símbolos puedo usar en Instagram?</dt>
              <dd>
                Puedes encontrar corazones, estrellas, flores, flechas,
                separadores, símbolos geométricos, caracteres decorativos y
                muchos otros caracteres Unicode.
              </dd>
            </div>
            <div>
              <dt>¿Puedo usar símbolos en mi bio?</dt>
              <dd>
                Sí, puedes utilizar caracteres de texto y símbolos para
                organizar o decorar una bio. Comprueba siempre el resultado
                final porque la representación puede variar según el dispositivo y
                la aplicación.
              </dd>
            </div>
            <div>
              <dt>¿Puedo usar símbolos en captions?</dt>
              <dd>
                Puedes probar símbolos Unicode y otros caracteres de texto en
                captions. Utilízalos para separar o destacar información sin
                hacer que el texto sea difícil de leer.
              </dd>
            </div>
            <div>
              <dt>¿Puedo usar símbolos en comentarios?</dt>
              <dd>
                Puedes intentar copiar y pegar caracteres Unicode en
                comentarios cuando el campo de texto los admita. La apariencia
                puede variar según el dispositivo y la aplicación.
              </dd>
            </div>
            <div>
              <dt>¿Los símbolos son lo mismo que los emoji?</dt>
              <dd>
                No siempre. Unicode incluye símbolos, pictogramas y emoji como
                categorías relacionadas pero distintas. Además, algunos emoji
                están formados por secuencias de varios caracteres.
              </dd>
            </div>
            <div>
              <dt>¿Por qué un símbolo aparece como un cuadrado?</dt>
              <dd>
                Puede ocurrir cuando el dispositivo o la aplicación no puede
                representar correctamente el carácter. Prueba una variante
                diferente o un símbolo más común.
              </dd>
            </div>
            <div>
              <dt>
                ¿Por qué el mismo símbolo se ve diferente en otro teléfono?
              </dt>
              <dd>
                La apariencia puede depender de la fuente, el sistema operativo
                y la aplicación utilizada para mostrar el carácter. Unicode no
                define una única apariencia gráfica para todos los caracteres.
              </dd>
            </div>
            <div>
              <dt>¿Puedo combinar símbolos con letras bonitas?</dt>
              <dd>
                Sí. Puedes combinar un símbolo con texto normal o con letras
                Unicode estilizadas. Por ejemplo: <code>✦ 𝓒𝓪𝓶𝓲𝓵𝓪 ✦</code>
              </dd>
            </div>
            <div>
              <dt>¿Cuántos símbolos debería usar en una bio?</dt>
              <dd>
                No existe una cantidad universalmente correcta. Utiliza los
                necesarios para organizar o destacar el contenido y evita
                llenar la bio de caracteres que dificulten la lectura.
              </dd>
            </div>
          </dl>
        </section>
      </article>
    </main>
  );
}
