import { Metadata } from "next";
import Link from "next/link";
import { FreeFireClanesTool } from "@/components/font-generator/FreeFireClanesTool";

export const metadata: Metadata = {
  title: "Nombres para Clanes de Free Fire: Generador y TAGs | LetrasBonitas",
  description:
    "Crea nombres para clanes de Free Fire con estilos, TAGs y elementos decorativos. Personaliza la identidad de tu equipo y copia combinaciones para toda la escuadra.",
  alternates: {
    canonical: "https://letrasbonits.com/nombres-para-free-fire/clanes/",
  },
  openGraph: {
    title: "Nombres para Clanes de Free Fire: Generador y TAGs | LetrasBonitas",
    description:
      "Crea nombres para clanes de Free Fire con estilos, TAGs y elementos decorativos. Personaliza la identidad de tu equipo y copia combinaciones para toda la escuadra.",
    url: "https://letrasbonits.com/nombres-para-free-fire/clanes/",
    siteName: "LetrasBonitas",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nombres para Clanes de Free Fire: Generador y TAGs",
    description:
      "Crea nombres para clanes de Free Fire con estilos, TAGs y elementos decorativos. Personaliza la identidad de tu equipo y copia combinaciones para toda la escuadra.",
  },
};

export default function ClanesFreeFirePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://letrasbonits.com/nombres-para-free-fire/clanes/#webpage",
        url: "https://letrasbonits.com/nombres-para-free-fire/clanes/",
        name: "Nombres para Clanes de Free Fire: Generador y TAGs",
        description:
          "Crea nombres para clanes de Free Fire con estilos, TAGs y elementos decorativos. Personaliza la identidad de tu equipo y copia combinaciones para toda la escuadra.",
        inLanguage: "es-ES",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/nombres-para-free-fire/clanes/#breadcrumb",
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
            name: "Nombres para Free Fire",
            item: "https://letrasbonits.com/nombres-para-free-fire/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Nombres para Clanes",
            item: "https://letrasbonits.com/nombres-para-free-fire/clanes/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://letrasbonits.com/nombres-para-free-fire/clanes/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Qué nombre puedo ponerle a mi clan de Free Fire?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Puedes elegir un nombre corto, competitivo, épico, divertido o intimidante. Lo más importante es que represente al grupo y sea fácil de recordar.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo usar símbolos en el nombre?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Puedes probar caracteres especiales, pero su representación puede variar. Si un símbolo aparece como un cuadro o hace que el nombre sea difícil de leer, utiliza una alternativa más sencilla.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo hago nombres coordinados para todo el equipo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El método más sencillo es compartir un elemento visual, como un prefijo, TAG, sufijo o símbolo, y dejar que cada jugador conserve su propio nombre.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué hago si un símbolo no se muestra correctamente?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Prueba otro carácter o una versión más sencilla del nombre. Antes de confirmar, comprueba el resultado directamente en el juego.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo sé si un nombre ya está ocupado?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La forma fiable de comprobar disponibilidad es hacerlo dentro del propio juego. Una lista de nombres no puede garantizar que una opción siga disponible.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50/60 pb-16">
        {/* Breadcrumb Navigation */}
        <div className="w-full bg-white border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
            <nav className="flex items-center gap-2 text-xs font-medium text-slate-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-teal-600 transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/nombres-para-free-fire/" className="hover:text-teal-600 transition-colors">
                Nombres para Free Fire
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold">Clanes</span>
            </nav>
          </div>
        </div>

        {/* Main Interactive Tool */}
        <section className="py-4">
          <FreeFireClanesTool />
        </section>

        {/* Supporting Content Article */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-6">
          <article className="prose-card">
            <h2 className="section-heading">Nombres para Clanes de Free Fire</h2>

            <p className="section-subheading">
              Crea nombres para clanes de Free Fire, personaliza la identidad de tu equipo y genera TAGs para toda la escuadra.
            </p>

            <p>
              Elegir un nombre para un clan de Free Fire puede parecer fácil hasta que intentas encontrar uno que le guste a todo el equipo. Un nombre demasiado común no destaca, mientras que uno lleno de símbolos puede resultar difícil de leer o copiar entre las diferentes páginas de{" "}
              <Link href="/nombres-para-free-fire/" className="text-teal-700 underline font-semibold hover:text-teal-800">
                nombres para Free Fire
              </Link>.
            </p>

            <p>
              En LetrasBonitas puedes partir de una palabra, probar diferentes estilos y crear una identidad que funcione para todo el equipo. La idea no es usar más adornos porque sí, sino encontrar una combinación que se vea bien, sea fácil de reconocer y represente a tu clan.
            </p>

            <h2 className="section-heading">Generador de Nombres para Clanes de Free Fire</h2>
            <p>
              Empieza con una palabra, nombre o temática que represente a tu equipo. Después prueba diferentes estilos y combinaciones hasta encontrar una opción que encaje con vuestra identidad.
            </p>

            <p>
              Si sois varios jugadores, piensa en el nombre como un sistema y no solamente como una palabra. Un mismo prefijo, TAG o estructura visual puede ayudar a que los nombres de los integrantes se reconozcan como parte del mismo equipo.
            </p>

            <h3 className="text-slate-900 font-bold text-lg mt-6 mb-2">Crea un nombre a partir de una palabra o temática</h3>
            <p>Puedes empezar con una idea sencilla:</p>
            <ul className="styled-list">
              <li>Lobos</li>
              <li>Furia</li>
              <li>Nova</li>
              <li>Titanes</li>
              <li>Eclipse</li>
              <li>Dragones</li>
              <li>Elite</li>
              <li>Sombra</li>
              <li>Legión</li>
              <li>Vortex</li>
            </ul>

            <p>
              La palabra inicial no tiene que ser el nombre definitivo. Puede servir como punto de partida para crear diferentes variantes.
            </p>

            <h3 className="text-slate-900 font-bold text-lg mt-6 mb-2">Añade un estilo y un TAG</h3>
            <p>
              Una vez que tengas una palabra base, prueba una versión sencilla y otra decorada.
            </p>
            <div className="code-block">
              Versión limpia: NOVA
              {"\n"}Decorado Pro: 亗NOVA亗
              {"\n"}Con estrellas: ★NOVA★
              {"\n"}Enmarcado: 『NOVA』
            </div>

            <p>
              El TAG puede utilizarse como elemento visual compartido entre los nombres de los integrantes. Lo importante es que no convierta el nombre en algo difícil de leer.
            </p>

            <h3 className="text-slate-900 font-bold text-lg mt-6 mb-2">Genera nombres coordinados para tu equipo</h3>
            <p>
              Una identidad de clan funciona mejor cuando cada jugador mantiene su propio nombre, pero comparte un elemento visual.
            </p>

            <div className="symbol-preview-box">
              <code>NX • Alex</code>
              <br />
              <code>NX • Ryu</code>
              <br />
              <code>NX • Kiro</code>
              <br />
              <code>NX • Drax</code>
            </div>

            <p className="mt-3">
              La palabra individual cambia, pero el elemento común ayuda a identificar al grupo.
            </p>

            <h2 className="section-heading">Nombres para Clanes de Free Fire para Copiar y Pegar</h2>
            <p>
              Aquí tienes algunas ideas originales para usar como punto de partida. Si una opción ya está ocupada o no representa a tu equipo, puedes modificarla y crear una variante propia.
            </p>

            <h3 className="text-slate-900 font-bold text-lg mt-6 mb-2">Nombres cortos</h3>
            <div className="symbol-preview-grid">
              <div className="symbol-preview-box"><code>Nexo</code></div>
              <div className="symbol-preview-box"><code>Nova</code></div>
              <div className="symbol-preview-box"><code>Furia</code></div>
              <div className="symbol-preview-box"><code>Titanes</code></div>
              <div className="symbol-preview-box"><code>Eclipse</code></div>
              <div className="symbol-preview-box"><code>Vortex</code></div>
              <div className="symbol-preview-box"><code>Legión</code></div>
              <div className="symbol-preview-box"><code>Dominio</code></div>
              <div className="symbol-preview-box"><code>Impacto</code></div>
              <div className="symbol-preview-box"><code>Cumbre</code></div>
              <div className="symbol-preview-box"><code>Renacer</code></div>
              <div className="symbol-preview-box"><code>Imperio</code></div>
            </div>

            <p className="mt-3 text-sm text-slate-600">
              Los nombres cortos suelen ser fáciles de recordar y funcionan bien cuando quieres construir una identidad visual sencilla para tu perfil o tus{" "}
              <Link href="/nombres-para-free-fire/apodos/" className="text-teal-700 underline font-semibold hover:text-teal-800">
                apodos para Free Fire
              </Link>.
            </p>

            <h3 className="text-slate-900 font-bold text-lg mt-6 mb-2">Nombres chidos y originales</h3>
            <div className="symbol-preview-grid">
              <div className="symbol-preview-box"><code>Nexo Zero</code></div>
              <div className="symbol-preview-box"><code>Furia Nova</code></div>
              <div className="symbol-preview-box"><code>Clan Zenith</code></div>
              <div className="symbol-preview-box"><code>Nova Crew</code></div>
              <div className="symbol-preview-box"><code>Titan Core</code></div>
              <div className="symbol-preview-box"><code>Eclipse Team</code></div>
              <div className="symbol-preview-box"><code>Vortex Unit</code></div>
              <div className="symbol-preview-box"><code>Sombra Elite</code></div>
              <div className="symbol-preview-box"><code>Legión Nova</code></div>
              <div className="symbol-preview-box"><code>Dominio X</code></div>
              <div className="symbol-preview-box"><code>Fénix Core</code></div>
              <div className="symbol-preview-box"><code>Fuerza Nexo</code></div>
            </div>

            <p className="mt-3 text-sm text-slate-600">
              Una combinación de dos palabras puede ayudarte a crear una identidad más específica sin depender de muchos símbolos.
            </p>

            <h3 className="text-slate-900 font-bold text-lg mt-6 mb-2">Nombres épicos</h3>
            <div className="symbol-preview-grid">
              <div className="symbol-preview-box"><code>Guardianes</code></div>
              <div className="symbol-preview-box"><code>Imperio Alfa</code></div>
              <div className="symbol-preview-box"><code>Legión Dorada</code></div>
              <div className="symbol-preview-box"><code>Reyes del Fuego</code></div>
              <div className="symbol-preview-box"><code>Hijos del Trueno</code></div>
              <div className="symbol-preview-box"><code>Orden Élite</code></div>
              <div className="symbol-preview-box"><code>Titanes del Norte</code></div>
              <div className="symbol-preview-box"><code>Reino Oscuro</code></div>
              <div className="symbol-preview-box"><code>Guardianes Nova</code></div>
              <div className="symbol-preview-box"><code>Dinastía</code></div>
              <div className="symbol-preview-box"><code>Fuerza Fénix</code></div>
              <div className="symbol-preview-box"><code>Última Legión</code></div>
            </div>

            <h3 className="text-slate-900 font-bold text-lg mt-6 mb-2">Nombres competitivos</h3>
            <div className="symbol-preview-grid">
              <div className="symbol-preview-box"><code>Apex Unit</code></div>
              <div className="symbol-preview-box"><code>Nova Rush</code></div>
              <div className="symbol-preview-box"><code>Elite Force</code></div>
              <div className="symbol-preview-box"><code>Vortex Core</code></div>
              <div className="symbol-preview-box"><code>Prime Squad</code></div>
              <div className="symbol-preview-box"><code>Zero Limit</code></div>
              <div className="symbol-preview-box"><code>Final Rush</code></div>
              <div className="symbol-preview-box"><code>Rank Core</code></div>
              <div className="symbol-preview-box"><code>Shadow Unit</code></div>
              <div className="symbol-preview-box"><code>Victory Team</code></div>
              <div className="symbol-preview-box"><code>Alpha Force</code></div>
              <div className="symbol-preview-box"><code>Clutch Clan</code></div>
            </div>

            <p className="mt-3 text-sm text-slate-600">
              Para un equipo competitivo, una palabra corta suele ser más fácil de reconocer que un nombre excesivamente decorado.
            </p>

            <h3 className="text-slate-900 font-bold text-lg mt-6 mb-2">Nombres que dan miedo</h3>
            <div className="symbol-preview-grid">
              <div className="symbol-preview-box"><code>Sombra Letal</code></div>
              <div className="symbol-preview-box"><code>Reino del Caos</code></div>
              <div className="symbol-preview-box"><code>Cero Piedad</code></div>
              <div className="symbol-preview-box"><code>Furia Oscura</code></div>
              <div className="symbol-preview-box"><code>Legión Mortal</code></div>
              <div className="symbol-preview-box"><code>Noche Eterna</code></div>
              <div className="symbol-preview-box"><code>Cazadores</code></div>
              <div className="symbol-preview-box"><code>Alma Negra</code></div>
              <div className="symbol-preview-box"><code>Dominio Oscuro</code></div>
              <div className="symbol-preview-box"><code>Tormenta Negra</code></div>
              <div className="symbol-preview-box"><code>Último Aliento</code></div>
              <div className="symbol-preview-box"><code>Señores del Caos</code></div>
            </div>

            <p className="mt-3 text-sm text-slate-600">
              Si buscas una estética intimidante, la combinación de una palabra fuerte y un símbolo discreto suele ser suficiente. Explora también nuestras alternativas de{" "}
              <Link href="/nombres-para-free-fire/nombres-insanos/" className="text-teal-700 underline font-semibold hover:text-teal-800">
                nombres insanos para Free Fire
              </Link>.
            </p>

            <h3 className="text-slate-900 font-bold text-lg mt-6 mb-2">Nombres con símbolos</h3>
            <p>Algunos formatos que puedes probar:</p>
            <div className="symbol-preview-grid">
              <div className="symbol-preview-box"><code>亗NOVA亗</code></div>
              <div className="symbol-preview-box"><code>★FURIA★</code></div>
              <div className="symbol-preview-box"><code>『TITAN』</code></div>
              <div className="symbol-preview-box"><code>꧁LEGION꧂</code></div>
              <div className="symbol-preview-box"><code>⚡VORTEX⚡</code></div>
              <div className="symbol-preview-box"><code>✦ECLIPSE✦</code></div>
              <div className="symbol-preview-box"><code>「NEXO」</code></div>
            </div>

            <p className="mt-3 text-sm text-slate-600">
              No todos los caracteres se representan igual en todos los dispositivos. Si quieres buscar elementos gráficos específicos, visita nuestra colección de{" "}
              <Link href="/nombres-para-free-fire/simbolos/" className="text-teal-700 underline font-semibold hover:text-teal-800">
                símbolos para Free Fire
              </Link>.
            </p>

            <h2 className="section-heading">Crea una identidad para todo tu clan</h2>
            <p>
              Un clan no necesita que todos los jugadores tengan exactamente el mismo nombre. De hecho, es más práctico mantener un elemento común y dejar que cada integrante tenga su propia identidad.
            </p>

            <p>Por ejemplo:</p>
            <div className="symbol-preview-box">
              <code>NX • Alex</code>
              <br />
              <code>NX • Ryu</code>
              <br />
              <code>NX • Kiro</code>
              <br />
              <code>NX • Nova</code>
              <br />
              <code>NX • Drax</code>
            </div>

            <p className="mt-3">También puedes utilizar un mismo símbolo:</p>
            <div className="symbol-preview-box">
              <code>亗Alex</code>
              <br />
              <code>亗Ryu</code>
              <br />
              <code>亗Kiro</code>
              <br />
              <code>亗Nova</code>
              <br />
              <code>亗Drax</code>
            </div>

            <p className="mt-3">
              La clave está en mantener una estructura reconocible sin hacer que todos los nombres sean idénticos.
            </p>

            <h3 className="text-slate-900 font-bold text-lg mt-4">Comparte un prefijo o TAG</h3>
            <p>
              Un prefijo corto puede funcionar como elemento visual del equipo. Antes de elegirlo, comprueba cómo se ve junto al nombre completo de cada jugador. Un TAG que parece excelente por separado puede resultar demasiado largo cuando se combina con un nick.
            </p>

            <h3 className="text-slate-900 font-bold text-lg mt-4">Mantén una estructura común</h3>
            <p>Puedes compartir:</p>
            <ul className="styled-list">
              <li>Un prefijo.</li>
              <li>Un sufijo.</li>
              <li>Un símbolo.</li>
              <li>Una combinación de dos caracteres.</li>
              <li>Una estructura visual.</li>
            </ul>
            <p>No necesitas utilizar todos al mismo tiempo.</p>

            <h3 className="text-slate-900 font-bold text-lg mt-4">Deja que cada jugador conserve su propio nombre</h3>
            <p>
              La identidad colectiva no significa que todos deban llamarse igual. Es mejor que cada miembro tenga un nombre reconocible y que el equipo comparta solamente el elemento que los identifica.
            </p>

            <h2 className="section-heading">Cómo elegir un buen nombre para tu clan</h2>
            <p>Antes de copiar una opción, haz una prueba rápida.</p>

            <h3 className="text-slate-900 font-bold text-lg mt-4">Define el estilo del equipo</h3>
            <p>
              Piensa primero en qué representa a vuestro grupo. Un clan competitivo puede preferir un nombre directo. Un grupo de amigos puede buscar algo divertido. Un equipo que quiere una imagen más intensa puede elegir palabras relacionadas con fuerza, sombra, fuego o dominio.
            </p>

            <h3 className="text-slate-900 font-bold text-lg mt-4">Prioriza la legibilidad</h3>
            <p>Mira el nombre durante unos segundos y pregúntate:</p>
            <ul className="styled-list">
              <li>¿Se entiende rápidamente?</li>
              <li>¿Es fácil de pronunciar?</li>
              <li>¿Se recuerda después de verlo?</li>
              <li>¿Se distingue de otros nombres?</li>
              <li>¿Se sigue leyendo bien en una pantalla pequeña?</li>
            </ul>
            <p>Si la respuesta es sí, tienes una buena base.</p>

            <h3 className="text-slate-900 font-bold text-lg mt-4">Prueba primero una versión sencilla</h3>
            <p>
              Antes de añadir símbolos, crea la versión limpia (por ejemplo, <code>NOVA</code>) y después prueba la versión decorada (<code>亗NOVA亗</code>). Así puedes comprobar si los adornos realmente mejoran el resultado o simplemente añaden ruido visual.
            </p>

            <h3 className="text-slate-900 font-bold text-lg mt-4">Añade símbolos con moderación</h3>
            <p>
              Los símbolos pueden darle personalidad al nombre, pero demasiados elementos pueden dificultar su lectura. Una estructura sencilla como <code>★NOVA★</code> puede resultar más fácil de reconocer que una versión rodeada de muchos caracteres diferentes.
            </p>

            <h2 className="section-heading">Cómo crear un nombre de clan a partir de una palabra</h2>
            <p>
              Si ya tienes una palabra favorita, puedes convertirla en una identidad de equipo siguiendo este proceso:
            </p>
            <ol className="styled-list">
              <li>Escribe la palabra base.</li>
              <li>Prueba una versión limpia.</li>
              <li>Combina la palabra con otra idea relacionada.</li>
              <li>Prueba uno o dos símbolos.</li>
              <li>Crea un TAG corto si quieres una identidad compartida.</li>
              <li>Genera variantes para los integrantes.</li>
              <li>Compara las opciones.</li>
              <li>Copia la versión que mejor represente al equipo.</li>
            </ol>

            <p>
              Por ejemplo, si la palabra inicial es "Lobo", puedes explorar: <code>Lobo</code> → <code>Lobo Nova</code> → <code>亗Lobo亗</code> → <code>Lobo Core</code> → <code>★Lobo★</code>.
            </p>

            <h2 className="section-heading">Qué hacer si un símbolo aparece como un cuadro</h2>
            <p>
              Un carácter especial puede verse diferente según el dispositivo, la fuente disponible o el contexto donde se utilice.
            </p>

            <p>Si aparece un cuadro vacío:</p>
            <ol className="styled-list">
              <li>Prueba otro símbolo.</li>
              <li>Reduce la cantidad de caracteres decorativos.</li>
              <li>Prueba una versión sin letras estilizadas.</li>
              <li>Comprueba el resultado directamente en el juego antes de utilizarlo definitivamente.</li>
              <li>Si el equipo utiliza dispositivos diferentes, prioriza caracteres sencillos.</li>
            </ol>

            <h2 className="section-heading">Un nombre original no significa un nombre disponible</h2>
            <p>
              Una idea puede ser original para tu equipo y aun así estar ocupada por otro jugador o clan. Por eso no conviene prometer que un nombre está disponible solamente porque no aparece en una lista.
            </p>
            <p>
              Utiliza las ideas como punto de partida. Si el nombre que te gusta ya está ocupado, cambia una palabra, una combinación o el estilo visual. La mejor estrategia es crear varias alternativas antes de tomar la decisión final.
            </p>

            <h2 className="section-heading">Qué revisar antes de usar el nombre</h2>
            <p>Haz esta comprobación rápida:</p>
            <ul className="styled-list">
              <li>¿Representa al equipo?</li>
              <li>¿Todos los miembros están de acuerdo?</li>
              <li>¿Se entiende fácilmente?</li>
              <li>¿Es fácil de recordar?</li>
              <li>¿Los símbolos son realmente necesarios?</li>
              <li>¿Se ve bien en móvil?</li>
              <li>¿Funciona con los nombres de los integrantes?</li>
              <li>¿Has comprobado el resultado directamente en Free Fire?</li>
              <li>¿Tienes una segunda opción por si la primera no está disponible?</li>
            </ul>

            <h2 className="section-heading">Cómo crear o gestionar un gremio en Free Fire</h2>
            <p>
              Garena utiliza el término "gremio" para el sistema que reúne a jugadores que deciden jugar juntos. Desde el menú de gremios puedes buscar uno existente o iniciar el proceso para crear uno. La documentación oficial también explica que el creador selecciona el nombre, el eslogan y el método de aprobación de miembros.
            </p>
            <p>
              Los detalles del juego pueden cambiar con las actualizaciones, así que conviene comprobar la información directamente en el menú actual de Free Fire antes de confirmar cualquier cambio.
            </p>

            <h2 className="section-heading">Preguntas frecuentes</h2>

            <div className="space-y-6 my-6">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">¿Qué nombre puedo ponerle a mi clan de Free Fire?</h3>
                <p className="text-slate-700 text-sm mt-1">
                  Puedes elegir un nombre corto, competitivo, épico, divertido o intimidante. Lo más importante es que represente al grupo y sea fácil de recordar.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-lg">¿Puedo usar símbolos en el nombre?</h3>
                <p className="text-slate-700 text-sm mt-1">
                  Puedes probar caracteres especiales, pero su representación puede variar. Si un símbolo aparece como un cuadro o hace que el nombre sea difícil de leer, utiliza una alternativa más sencilla.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-lg">¿Cómo hago nombres coordinados para todo el equipo?</h3>
                <p className="text-slate-700 text-sm mt-1">
                  El método más sencillo es compartir un elemento visual, como un prefijo, TAG, sufijo o símbolo, y dejar que cada jugador conserve su propio nombre.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-lg">¿Qué hago si un símbolo no se muestra correctamente?</h3>
                <p className="text-slate-700 text-sm mt-1">
                  Prueba otro carácter o una versión más sencilla del nombre. Antes de confirmar, comprueba el resultado directamente en el juego.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-lg">¿Cómo sé si un nombre ya está ocupado?</h3>
                <p className="text-slate-700 text-sm mt-1">
                  La forma fiable de comprobar disponibilidad es hacerlo dentro del propio juego. Una lista de nombres no puede garantizar que una opción siga disponible.
                </p>
              </div>
            </div>

            <h2 className="section-heading">Crea el nombre de tu próximo clan</h2>
            <p>
              No necesitas empezar con un nombre perfecto. Empieza con una palabra que represente a vuestro equipo, genera varias opciones y compara cómo se ven juntas.
            </p>
            <p>
              Un buen nombre de clan no depende de tener la mayor cantidad de símbolos. Lo importante es que el equipo pueda reconocerlo, recordarlo y sentirse identificado con él. Usa el generador de LetrasBonitas para probar diferentes combinaciones y elige la versión que mejor encaje con vuestra identidad.
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

