import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InstagramBioGenerator } from "@/components/font-generator/InstagramBioGenerator";

export const metadata: Metadata = {
  title: "Letras para Bio de Instagram para Copiar y Pegar",
  description:
    "Crea letras para bio de Instagram con estilos cursivos, aesthetic, elegantes y más. Escribe tu texto, elige un estilo, copia y pega.",
  alternates: {
    canonical: "/letras-para-instagram/letras-para-bio/",
  },
  openGraph: {
    title: "Letras para Bio de Instagram para Copiar y Pegar",
    description:
      "Crea letras para bio de Instagram con estilos cursivos, aesthetic, elegantes y más. Escribe tu texto, elige un estilo, copia y pega.",
    locale: "es",
    type: "website",
    url: "/letras-para-instagram/letras-para-bio/",
  },
  twitter: {
    card: "summary",
    title: "Letras para Bio de Instagram para Copiar y Pegar",
    description:
      "Crea letras para bio de Instagram con estilos cursivos, aesthetic, elegantes y más. Escribe tu texto, elige un estilo, copia y pega.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LetrasParaBioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://letrasbonitas.net/#website",
        url: "https://letrasbonitas.net/",
        name: "LetrasBonitas",
        description:
          "Generador de letras bonitas y recursos tipográficos en español.",
        inLanguage: "es",
      },
      {
        "@type": "WebPage",
        "@id": "https://letrasbonitas.net/letras-para-instagram/letras-para-bio/#webpage",
        url: "https://letrasbonitas.net/letras-para-instagram/letras-para-bio/",
        name: "Letras para Bio de Instagram para Copiar y Pegar",
        description:
          "Crea letras para bio de Instagram con estilos cursivos, aesthetic, elegantes y más. Escribe tu texto, elige un estilo, copia y pega.",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonitas.net/letras-para-instagram/letras-para-bio/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://letrasbonitas.net/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Letras para Instagram",
            item: "https://letrasbonitas.net/letras-para-instagram/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Letras para Bio",
            item: "https://letrasbonitas.net/letras-para-instagram/letras-para-bio/",
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": "https://letrasbonitas.net/letras-para-instagram/letras-para-bio/#app",
        name: "Generador de Letras para Bio de Instagram",
        url: "https://letrasbonitas.net/letras-para-instagram/letras-para-bio/",
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
                label: "Letras para Bio",
                href: "/letras-para-instagram/letras-para-bio/",
              },
            ]}
          />
          <div className="hero-saas__badge">
            <span className="hero-saas__badge-dot" />
            <span className="hero-saas__badge-text">BIOGRAFÍA DE INSTAGRAM</span>
          </div>
          <h1 className="hero-saas__title">
            Letras para <span className="gradient-text-pink">Bio</span>
          </h1>
          <p className="hero-saas__description">
            Escribe el texto de tu bio y conviértelo en letras bonitas para copiar y pegar. Prueba estilos cursivos, elegantes, aesthetic, negritas, góticos y decorativos hasta encontrar uno que combine con tu perfil.
          </p>
          <div className="hero-saas__sublead" style={{ color: "var(--slate-300)", marginTop: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
            Escribe → elige un estilo → copia → pega en tu bio
          </div>
        </div>
      </section>

      {/* Functionality comes first */}
      <InstagramBioGenerator />

      <article className="prose-section" aria-label="Guía completa sobre letras para bio de Instagram">
        {/* Section 1 */}
        <section className="prose-card">
          <h2>Letras bonitas para tu bio de Instagram</h2>
          <p>
            Tu bio es pequeña, así que cada línea cuenta. No hace falta transformar todo el texto para conseguir un resultado diferente.
          </p>
          <p>Puedes utilizar letras especiales para destacar:</p>
          <ul>
            <li>Tu nombre</li>
            <li>Una profesión</li>
            <li>Una frase corta</li>
            <li>Una afición</li>
            <li>Una palabra importante</li>
            <li>Un título dentro de la bio</li>
          </ul>
          <p>Por ejemplo:</p>
          <p><strong>Normal:</strong> <code>Sofía | Fotografía y viajes</code></p>
          <p><strong>Cursiva:</strong> <code>𝓢𝓸𝓯í𝓪 | 𝓕𝓸𝓽𝓸𝓰𝓻𝓪𝓯í𝓪 𝔂 𝓿𝓲𝓪𝓳𝓮𝓼</code></p>
          <p><strong>Negrita:</strong> <code>𝐒𝐨𝐟í𝐚 | 𝐅𝐨𝐭𝐨𝐠𝐫𝐚𝐟í𝐚 𝐲 𝐯𝐢𝐚𝐣𝐞𝐬</code></p>
          <p><strong>Sans serif:</strong> <code>𝗦𝗼𝗳í𝗮 | 𝗙𝗼𝘁𝗼𝗴𝗿𝗮𝗳í𝗮 𝘆 𝘃𝗶𝗮𝗷𝗲𝘀</code></p>
          <p><strong>Gótica:</strong> <code>𝔖𝔬𝔣í𝔞 | 𝔉𝔬𝔱𝔬𝔤𝔯𝔞𝔣í𝔞 𝔶 𝔳𝔦𝔞𝔧𝔢𝔰</code></p>
          <p>
            Si una letra con tilde no tiene una transformación equivalente dentro del estilo utilizado, es preferible conservar el carácter original antes que eliminar el acento.
          </p>
        </section>

        {/* Section 2 */}
        <section className="prose-card">
          <h2>Cómo poner letras diferentes en tu bio</h2>
          <p>El proceso es rápido:</p>
          <ol className="list-decimal pl-6 space-y-1 text-slate-700">
            <li>1. Escribe tu nombre, frase o bio en el generador.</li>
            <li>2. Mira los estilos disponibles.</li>
            <li>3. Elige una versión que siga siendo fácil de leer.</li>
            <li>4. Pulsa <strong>Copiar</strong>.</li>
            <li>5. Abre Instagram y entra en la edición de tu perfil.</li>
            <li>6. Pega el resultado en tu biografía.</li>
            <li>7. Revisa cómo se ve antes de guardar los cambios.</li>
          </ol>
          <p>
            No necesitas copiar las letras una por una. El botón de copia guarda el resultado completo en el portapapeles.
          </p>
        </section>

        {/* Section 3: Table */}
        <section className="prose-card">
          <h2>Estilos de letras para bio</h2>
          <p>
            No existe un único estilo adecuado para todos los perfiles. La elección depende de lo que quieras transmitir.
          </p>

          <div className="prose-table-container">
            <table className="prose-table">
              <thead>
                <tr>
                  <th>Estilo</th>
                  <th>Ejemplo</th>
                  <th>Puede encajar en</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cursiva</td>
                  <td><strong>𝓒𝓻𝓮𝓪𝓽𝓲𝓿𝓪</strong></td>
                  <td>Perfiles personales y creativos</td>
                </tr>
                <tr>
                  <td>Script</td>
                  <td><em>𝒟𝓇𝑒𝒶𝓂</em></td>
                  <td>Nombres y frases cortas</td>
                </tr>
                <tr>
                  <td>Negrita</td>
                  <td><strong>𝐂𝐫𝐞𝐚𝐝𝐨𝐫</strong></td>
                  <td>Palabras que quieres destacar</td>
                </tr>
                <tr>
                  <td>Sans negrita</td>
                  <td><strong>𝗖𝗿𝗲𝗮𝗱𝗼𝗿</strong></td>
                  <td>Perfiles modernos</td>
                </tr>
                <tr>
                  <td>Cursiva negrita</td>
                  <td><strong><em>𝑪𝒓𝒆𝒂𝒕𝒊𝒗𝒂</em></strong></td>
                  <td>Frases destacadas</td>
                </tr>
                <tr>
                  <td>Monoespaciada</td>
                  <td><code>𝙲𝚛𝚎𝚊𝚝𝚒𝚟𝚊</code></td>
                  <td>Tecnología y gaming</td>
                </tr>
                <tr>
                  <td>Doble trazo</td>
                  <td><strong>ℂ𝕣𝕖𝕒𝕥𝕚𝕧𝕒</strong></td>
                  <td>Palabras cortas</td>
                </tr>
                <tr>
                  <td>Gótica</td>
                  <td><strong>𝔇𝔞𝔯𝔨</strong></td>
                  <td>Gaming y estilos oscuros</td>
                </tr>
                <tr>
                  <td>Versalitas</td>
                  <td>ᴄʀᴇᴀᴛɪᴠᴀ</td>
                  <td>Bios minimalistas</td>
                </tr>
                <tr>
                  <td>Decorativa</td>
                  <td>✦ Creativa ✦</td>
                  <td>Títulos y separadores</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            El generador puede mostrar más variantes siempre que produzcan resultados diferentes y útiles. No es necesario llenar la herramienta de estilos duplicados únicamente para aumentar el número total.
          </p>
        </section>

        {/* Section 4 */}
        <section className="prose-card">
          <h2>Ideas de letras para bio</h2>
          <p>¿No sabes qué escribir? Puedes empezar con una estructura sencilla y personalizarla.</p>

          <h3>Bio personal</h3>
          <p>
            <code>𝓢𝓸𝓯í𝓪 ♡</code><br />
            <code>📷 Fotografía y viajes</code><br />
            <code>☕ café · música · libros</code><br />
            <code>📍 Madrid</code>
          </p>

          <h3>Bio minimalista</h3>
          <p>
            <code>ᴄʀᴇᴀᴛɪᴠᴀ</code><br />
            <code>design · photography</code><br />
            <code>Madrid, España</code>
          </p>

          <h3>Bio para creador</h3>
          <p>
            <code>𝗖𝗿𝗲𝗮𝗱𝗼𝗿 𝗱𝗶𝗴𝗶𝘁𝗮𝗹</code><br />
            <code>🎥 Vídeos y fotografía</code><br />
            <code>✦ Nuevas ideas cada semana</code>
          </p>

          <h3>Bio aesthetic</h3>
          <p>
            <code>୨୧ 𝓭𝓻𝓮𝓪𝓶𝓮𝓻 ୨୧</code><br />
            <code>☁️ música · café · arte</code><br />
            <code>♡ pequeños momentos</code>
          </p>

          <h3>Bio gaming</h3>
          <p>
            <code>𝕲𝖆𝖒𝖊𝖗</code><br />
            <code>🎮 play · compete · repeat</code><br />
            <code>⚡ online</code>
          </p>

          <p>
            Los ejemplos sirven como punto de partida. Cambia las palabras, los símbolos y el estilo para que el resultado represente realmente tu perfil.
          </p>
        </section>

        {/* Section 5 */}
        <section className="prose-card">
          <h2>Letras cursivas para bio</h2>
          <p>
            Las variantes cursivas y script funcionan especialmente bien para nombres y frases cortas.
          </p>
          <p>Por ejemplo:</p>
          <p><code>𝓛𝓾𝓬í𝓪</code></p>
          <p><code>𝓒𝓻𝓮𝓪𝓷𝓭𝓸 𝓶𝓲 𝓹𝓻𝓸𝓹𝓲𝓸 𝓬𝓪𝓶𝓲𝓷𝓸</code></p>
          <p><code>𝒟𝓇𝑒𝒶𝓂 · 𝒞𝓇𝑒𝒶𝓉𝑒 · 𝐿𝒾𝓋𝑒</code></p>
          <p>
            Para explorar este estilo con más profundidad, la sección <Link href="/letras-cursivas/">Letras Cursivas</Link> reúne variantes centradas específicamente en escritura cursiva y script.
          </p>
        </section>

        {/* Section 6 */}
        <section className="prose-card">
          <h2>Letras aesthetic para bio</h2>
          <p>
            Un diseño aesthetic no depende solamente de transformar las letras. También puedes combinar texto legible con pequeños símbolos.
          </p>
          <p>Por ejemplo:</p>
          <p><code>✦ 𝓒𝓻𝓮𝓪𝓽𝓲𝓿𝓪 ✦</code></p>
          <p><code>♡ ᴅʀᴇᴀᴍ · ᴄʀᴇᴀᴛᴇ ♡</code></p>
          <p><code>୨୧ música · arte · café ୨୧</code></p>
          <p><code>☾ 𝓷𝓲𝓰𝓱𝓽 𝓿𝓲𝓫𝓮𝓼 ☽</code></p>
          <p>
            Los adornos funcionan mejor cuando tienen una función visual clara. Puedes usar <Link href="/simbolos/">Símbolos</Link> para encontrar separadores y caracteres decorativos sin llenar toda la bio de elementos difíciles de leer.
          </p>
        </section>

        {/* Section 7 */}
        <section className="prose-card">
          <h2>Combina diferentes estilos sin perder legibilidad</h2>
          <p>No es necesario escribir toda la bio con el mismo tipo de letra.</p>
          <p>Una estructura más clara puede ser:</p>
          <p>
            <code>𝓢𝓸𝓯í𝓪</code><br />
            <code>FOTOGRAFÍA · VIAJES</code><br />
            <code>📍 Madrid</code><br />
            <code>✦ nuevos lugares, nuevas historias</code>
          </p>
          <p>
            Aquí el nombre recibe mayor énfasis, mientras que la información práctica permanece sencilla.
          </p>
          <p>Otra opción:</p>
          <p>
            <code>𝗗𝗶𝘀𝗲ñ𝗮𝗱𝗼𝗿𝗮</code><br />
            <code>branding · web · ideas</code><br />
            <code>♡ creando cosas bonitas</code>
          </p>
          <p>
            Antes de añadir otro estilo, pregúntate si facilita la organización visual o solamente añade ruido.
          </p>
        </section>

        {/* Section 8 */}
        <section className="prose-card">
          <h2>¿Estas letras son fuentes de Instagram?</h2>
          <p>
            Técnicamente, muchos de estos resultados no son fuentes instaladas.
          </p>
          <p>
            Un generador puede sustituir letras latinas normales por otros caracteres Unicode visualmente similares. Algunos estilos conocidos utilizan caracteres de conjuntos Unicode como las variantes matemáticas en negrita, cursiva, script, Fraktur, doble trazo, sans serif y monoespaciadas.
          </p>
          <p>Por eso puedes copiar el resultado como texto.</p>
          <p>
            Esto también explica por qué cambiar la fuente del navegador o instalar una tipografía no es lo mismo que utilizar un conversor de letras.
          </p>
        </section>

        {/* Section 9 */}
        <section className="prose-card">
          <h2>¿Por qué algunas letras con tilde no cambian?</h2>
          <p>Este problema es especialmente importante al escribir en español.</p>
          <p>Prueba una frase como:</p>
          <p><code>Árbol, canción, música, pingüino, España</code></p>
          <p>Incluye caracteres como:</p>
          <p><code>á é í ó ú ü ñ Á É Í Ó Ú Ü Ñ</code></p>
          <p>
            No todas las transformaciones estilizadas disponen de una sustitución directa para cada carácter español.
          </p>
          <p>
            Por eso, si el generador puede transformar <code>n</code> pero no encuentra una representación adecuada para <code>ñ</code>, no debería convertir automáticamente <code>ñ</code> en <code>n</code>. Hacerlo cambiaría el texto.
          </p>
          <p>
            Una solución más segura es mantener el carácter original cuando una transformación determinada no dispone de una alternativa adecuada.
          </p>
        </section>

        {/* Section 10 */}
        <section className="prose-card">
          <h2>¿Por qué una letra aparece como un cuadro?</h2>
          <p>
            La apariencia final de un carácter Unicode depende también de las fuentes y del software disponibles para mostrarlo.
          </p>
          <p>Por eso puedes encontrar situaciones en las que:</p>
          <ul>
            <li>Un carácter se vea ligeramente diferente.</li>
            <li>Una letra decorativa no combine exactamente con las demás.</li>
            <li>Un símbolo no aparezca correctamente.</li>
            <li>Un carácter aparezca como un cuadro o marcador de sustitución.</li>
          </ul>
          <p>
            Si encuentras un problema, prueba un estilo más sencillo y revisa siempre el resultado en el dispositivo donde piensas utilizarlo.
          </p>
        </section>

        {/* Section 11 */}
        <section className="prose-card">
          <h2>Qué estilo elegir para una bio</h2>
          <p>Piensa primero en la función de la cuenta.</p>
          <ul>
            <li><strong>Perfil personal:</strong> cursiva, script o estilos sencillos.</li>
            <li><strong>Fotografía y arte:</strong> cursiva, aesthetic o pequeños símbolos.</li>
            <li><strong>Marca personal:</strong> negrita, sans serif o una combinación sencilla.</li>
            <li><strong>Gaming:</strong> gótica, monoespaciada o estilos decorativos legibles.</li>
            <li><strong>Perfil minimalista:</strong> texto normal, versalitas y pocos símbolos.</li>
            <li><strong>Nombre destacado:</strong> un estilo decorativo solo para el nombre y texto normal para el resto.</li>
          </ul>
          <p>La legibilidad debería tener prioridad sobre la cantidad de adornos.</p>
        </section>

        {/* Section 12 */}
        <section className="prose-card">
          <h2>Antes de guardar tu bio</h2>
          <p>Haz una última comprobación:</p>
          <ul>
            <li>¿Se entiende tu nombre?</li>
            <li>¿La información importante se lee rápidamente?</li>
            <li>¿Los acentos y la ñ siguen siendo correctos?</li>
            <li>¿Hay algún símbolo que aparezca como un cuadro?</li>
            <li>¿Has utilizado demasiados estilos?</li>
            <li>¿El resultado se ve bien en una pantalla pequeña?</li>
          </ul>
          <p>Si una letra bonita hace que una palabra sea difícil de entender, prueba otra variante.</p>
        </section>

        {/* Section 13: FAQs */}
        <section className="prose-card" aria-label="Preguntas frecuentes sobre letras para bio de Instagram">
          <h2>Preguntas frecuentes</h2>
          <dl className="faq-list">
            <div>
              <dt>¿Cómo hacer letras bonitas para mi bio?</dt>
              <dd>
                Escribe tu texto en el generador, revisa los estilos disponibles y copia el que prefieras. Después puedes pegar el resultado en tu biografía y comprobar cómo se visualiza.
              </dd>
            </div>
            <div>
              <dt>¿Puedo copiar y pegar las letras?</dt>
              <dd>
                Sí. Los resultados generados como caracteres de texto pueden copiarse al portapapeles. No son una imagen.
              </dd>
            </div>
            <div>
              <dt>¿Tengo que instalar una fuente?</dt>
              <dd>
                No para utilizar los estilos Unicode generados por esta herramienta. El resultado se copia como texto.
              </dd>
            </div>
            <div>
              <dt>¿Por qué la ñ o una vocal con tilde permanece normal?</dt>
              <dd>
                Algunos conjuntos de caracteres estilizados no proporcionan una alternativa directa para todas las letras españolas. Mantener el carácter original evita eliminar la tilde o cambiar la palabra.
              </dd>
            </div>
            <div>
              <dt>¿Por qué algunas letras se ven diferentes en otro móvil?</dt>
              <dd>
                La representación de un carácter puede variar según las fuentes disponibles, el sistema operativo, el navegador y la aplicación. Por eso conviene comprobar el resultado después de pegarlo.
              </dd>
            </div>
            <div>
              <dt>¿Puedo añadir símbolos a mi bio?</dt>
              <dd>
                Sí. Puedes combinar letras estilizadas con corazones, estrellas, separadores y otros símbolos Unicode. Utiliza pocos elementos para mantener la bio clara y fácil de leer.
              </dd>
            </div>
          </dl>
        </section>

        {/* Section 14: Navigation and explore */}
        <section className="prose-card highlight-card">
          <h2>Encuentra más estilos de letras</h2>
          <p>Si quieres explorar otros usos del texto estilizado, puedes continuar con:</p>
          <ul>
            <li><Link href="/letras-para-instagram/">Letras para Instagram</Link></li>
            <li><Link href="/letras-cursivas/">Letras Cursivas</Link></li>
            <li><Link href="/simbolos/">Símbolos</Link></li>
            <li><Link href="/tipos-de-letras/">Tipos de Letras</Link></li>
            <li><Link href="/letras-goticas/">Letras Góticas</Link></li>
            <li><Link href="/letras-graffiti/">Letras Graffiti</Link></li>
          </ul>
        </section>
      </article>
    </main>
  );
}


