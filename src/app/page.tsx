import type { Metadata } from "next";
import Link from "next/link";
import { HomeFontGenerator } from "@/components/font-generator/HomeFontGenerator";
import { fontStyles } from "@/lib/unicode";

export const metadata: Metadata = {
  title: "Letras Bonitas — Generador de letras para copiar y pegar",
  description:
    "Generador de letras bonitas para copiar y pegar. Transforma tu texto al instante con más de 300 estilos de cursiva, gótica, negrita y aesthetic para Instagram, WhatsApp y juegos.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Letras Bonitas — Generador de letras para copiar y pegar",
    description:
      "Escribe tu texto y conviértelo al instante en letras bonitas, cursivas, elegantes, góticas, negritas y aesthetic con más de 300 estilos Unicode.",
    locale: "es",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Letras Bonitas — Generador de letras para copiar y pegar",
    description:
      "Escribe tu texto y conviértelo al instante en letras bonitas, cursivas, elegantes, góticas, negritas y aesthetic con más de 300 estilos Unicode.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  const styleCount = fontStyles.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://letrasbonitas.com/#website",
        url: "https://letrasbonitas.com/",
        name: "LetrasBonitas",
        description:
          "Generador de letras bonitas para copiar y pegar. Más de 300 estilos de cursiva, gótica, negrita y aesthetic.",
        inLanguage: "es",
      },
      {
        "@type": "WebPage",
        "@id": "https://letrasbonitas.com/#webpage",
        url: "https://letrasbonitas.com/",
        name: "Letras Bonitas — Generador de letras para copiar y pegar",
        description:
          "Generador de letras bonitas para copiar y pegar. Transforma tu texto al instante con más de 300 estilos Unicode.",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonitas.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
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

      <header className="hero-saas">
        <div className="hero-saas__watermark-left" aria-hidden="true">
          𝒜 𝓑 𝓒
        </div>
        <div className="hero-saas__watermark-right" aria-hidden="true">
          𝔸 𝕭 𝓧 𝒀
        </div>
        <div className="hero-saas__content">
          <span className="hero-saas__badge">✨ GENERADOR DE TEXTO UNICODE</span>
          <h1 className="hero-saas__title">
            Transforma tu texto en{"\n"}letras <span className="gradient-text-cyan">increíbles</span>
          </h1>
          <p className="hero-saas__lead">
            Escribe tu texto, descubre más de {styleCount} estilos de <strong>letras bonitas, cursivas, elegantes, góticas y aesthetic</strong>, y copia el resultado en un clic.
          </p>
          <div className="hero-saas__trust-row">
            <span className="hero-saas__trust-item"><span className="hero-saas__trust-check">✓</span> Sin registro</span>
            <span className="hero-saas__trust-item"><span className="hero-saas__trust-check">✓</span> 100% gratis</span>
            <span className="hero-saas__trust-item"><span className="hero-saas__trust-check">✓</span> {styleCount}+ estilos</span>
          </div>
        </div>
      </header>

      {/* ── Primary Interactive Generator Tool ── */}
      <HomeFontGenerator />

      {/* ── Complete Master Article & SEO Content ── */}
      <article className="prose-section" aria-label="Guía completa sobre letras bonitas">
        
        {/* Section 1: Intro */}
        <section className="prose-card">
          <h2>Generador de Letras Bonitas para Copiar y Pegar</h2>
          <p>
            Escribe una palabra, un nombre, una frase o cualquier otro texto en el generador. Los diferentes estilos aparecerán de forma instantánea para que puedas compararlos y elegir el que más te guste.
          </p>
          <p className="highlight-box">
            <strong>Escribe tu texto, elige un estilo y cópialo.</strong>
          </p>
          <p>
            No necesitas instalar una fuente, descargar un programa ni aprender ningún procedimiento complicado. El objetivo es sencillo: ayudarte a crear <strong>letras bonitas para copiar y pegar</strong> directamente desde tu navegador.
          </p>
          <p>
            Puedes utilizar los resultados para nombres, perfiles, biografías, publicaciones, mensajes, juegos y otros lugares donde se admita texto.
          </p>

          <div className="features-preview">
            <h3>Prueba diferentes estilos</h3>
            <div className="preview-samples-grid" role="list">
              <div className="sample-pill" role="listitem"><span>Letras normales:</span> <strong>Letras Bonitas</strong></div>
              <div className="sample-pill" role="listitem"><span>Cursiva:</span> <strong>𝓛𝓮𝓽𝓻𝓪𝓼 𝓑𝓸𝓷𝓲𝓽𝓪𝓼</strong></div>
              <div className="sample-pill" role="listitem"><span>Negrita:</span> <strong>𝐋𝐞𝐭𝐫𝐚𝐬 𝐁𝐨𝐧𝐢𝐭𝐚𝐬</strong></div>
              <div className="sample-pill" role="listitem"><span>Gótica:</span> <strong>𝕷𝖊𝖙𝖗𝖆𝖘 𝕭𝖔𝖓𝖎𝖙𝖆𝖘</strong></div>
              <div className="sample-pill" role="listitem"><span>Ancho completo:</span> <strong>Ｌｅｔｒａｓ Ｂｏｎｉｔａｓ</strong></div>
              <div className="sample-pill" role="listitem"><span>Letras pequeñas:</span> <strong>ʟᴇᴛʀᴀꜱ ʙᴏɴɪᴛᴀꜱ</strong></div>
            </div>
            <p>La apariencia de cada resultado depende de los caracteres utilizados y de cómo los representa la aplicación o dispositivo donde los pegues.</p>
          </div>
        </section>

        {/* Section 2: +300 Styles */}
        <section className="prose-card">
          <h2>Más de {styleCount} estilos de letras para explorar</h2>
          <p>
            LetrasBonitas está diseñado como una herramienta de exploración, no solamente como un conversor de una única fuente. Puedes probar una gran colección de estilos y encontrar una apariencia que encaje con tu nombre, frase, perfil o proyecto.
          </p>
          <p>Entre los estilos que puedes encontrar se incluyen diferentes tipos de:</p>
          <ul className="features-grid">
            <li>✨ Letras cursivas</li>
            <li>💎 Letras elegantes</li>
            <li>🖤 Letras góticas</li>
            <li>𝗕𝗼𝗹𝗱 Letras en negrita</li>
            <li>🌸 Letras aesthetic</li>
            <li><sub>ᵃᵇᶜ</sub> Letras pequeñas</li>
            <li>❀ Letras decorativas</li>
            <li>✦ Letras modernas</li>
            <li>✍ Letras manuscritas</li>
            <li>📸 Letras para redes sociales</li>
            <li>👤 Letras para nombres</li>
            <li>🎮 Letras para juegos</li>
            <li>💬 Texto estilizado</li>
            <li>★ Texto con símbolos</li>
            <li>𝔘 Variantes Unicode</li>
          </ul>
          <p>
            La cantidad de estilos no debería significar simplemente repetir el mismo diseño con pequeños cambios. Cada estilo debe aportar una apariencia diferente y tener un uso razonable. Por eso, además de la cantidad, es importante que puedas <strong>buscar, comparar y copiar</strong> rápidamente.
          </p>

          <h3>Encuentra un estilo sin perder tiempo</h3>
          <p>
            Cuando existen cientos de opciones, desplazarse por toda la página puede resultar incómodo. Por eso el generador debe ayudarte a encontrar rápidamente el tipo de letra que buscas. Puedes explorar por categorías, buscar estilos y comparar diferentes resultados con tu propio texto.
          </p>
          <p>Por ejemplo, si quieres una apariencia elegante, puedes concentrarte en estilos cursivos y refinados.</p>
          <p>Si quieres crear un nombre llamativo para un juego, puedes explorar estilos más fuertes, decorativos o combinados con símbolos.</p>
          <p>Si quieres personalizar una biografía, puedes probar estilos aesthetic, cursivos, pequeños o minimalistas.</p>
        </section>

        {/* Section 3: How to make */}
        <section className="prose-card">
          <h2>¿Cómo hacer letras bonitas?</h2>
          <p>Crear letras bonitas es muy sencillo.</p>
          
          <div className="steps-grid">
            <div className="step-card">
              <span className="step-card__number">1</span>
              <h3>Escribe tu texto</h3>
              <p>Introduce cualquier palabra, nombre o frase en el cuadro del generador. Por ejemplo: <em>Mi mundo</em>, <em>Carlos</em>, <em>Sueña en grande</em>, <em>Letras Bonitas</em>. También puedes escribir una frase más larga para comprobar cómo funciona un estilo con varias palabras.</p>
            </div>
            <div className="step-card">
              <span className="step-card__number">2</span>
              <h3>Explora los resultados</h3>
              <p>El generador transforma tu texto en diferentes estilos. No necesitas volver a escribir la misma palabra para cada resultado. Puedes comparar varias opciones utilizando exactamente el mismo texto.</p>
            </div>
            <div className="step-card">
              <span className="step-card__number">3</span>
              <h3>Elige tu estilo favorito</h3>
              <p>Mira las diferentes versiones y elige la que mejor se adapte a tu propósito. Un estilo puede ser perfecto para una biografía, mientras que otro puede funcionar mejor para un nombre de usuario.</p>
            </div>
            <div className="step-card">
              <span className="step-card__number">4</span>
              <h3>Copia el resultado</h3>
              <p>Cuando encuentres un estilo que te guste, utiliza el botón <strong>Copiar</strong>. El texto se guarda en el portapapeles de tu dispositivo.</p>
            </div>
            <div className="step-card">
              <span className="step-card__number">5</span>
              <h3>Pega donde quieras</h3>
              <p>Abre la aplicación o página donde quieras utilizar el texto y pulsa <strong>Pegar</strong>. Así de sencillo.</p>
            </div>
          </div>

          <p className="cta-motto text-center"><strong>Escribir → Explorar → Elegir → Copiar → Pegar</strong></p>
        </section>

        {/* Section 4: Copy and Paste */}
        <section className="prose-card">
          <h2>Letras bonitas para copiar y pegar</h2>
          <p>
            Una de las razones principales para utilizar un generador de letras es poder <strong>copiar y pegar el resultado directamente</strong>. En lugar de crear una imagen con texto, puedes utilizar caracteres de texto que puedan seleccionarse y copiarse.
          </p>
          <p>Por ejemplo, <strong>Hola</strong> puede convertirse en <strong>𝐇𝐨𝐥𝐚</strong>, <strong>𝓗𝓸𝓵𝓪</strong>, <strong>𝕳𝖔𝖑𝖆</strong>, <strong>Ｈｏｌａ</strong>, <strong>ʜᴏʟᴀ</strong>.</p>
          <p>Puedes copiar el resultado y probarlo en diferentes aplicaciones. Esto puede ser útil cuando quieres personalizar:</p>
          <ul>
            <li>Un nombre</li>
            <li>Una biografía</li>
            <li>Una frase</li>
            <li>Un estado</li>
            <li>Un comentario</li>
            <li>Un perfil</li>
            <li>Un nombre de juego</li>
            <li>Una descripción</li>
            <li>Un título</li>
            <li>Una publicación</li>
          </ul>
          <p>La compatibilidad depende de la plataforma y de los caracteres concretos utilizados, por lo que siempre conviene revisar el resultado después de pegarlo.</p>
        </section>

        {/* Section 5: Cursive */}
        <section className="prose-card">
          <h2>Letras cursivas</h2>
          <p>
            Las <strong>letras cursivas</strong> son uno de los estilos más buscados cuando las personas quieren crear texto elegante o con apariencia manuscrita. Las cursivas pueden funcionar especialmente bien para nombres, frases, biografías, firmas, perfiles, publicaciones y mensajes.
          </p>
          <p>
            Si quieres explorar una colección dedicada de estilos cursivos, puedes visitar <a href="/letras-cursivas/">Letras Cursivas</a>. Allí podrás encontrar una experiencia más específica para quienes buscan transformar texto en diferentes estilos cursivos.
          </p>
          <h3>¿Qué hace que una letra parezca cursiva?</h3>
          <p>
            Una letra cursiva suele tener formas inclinadas o conectadas que recuerdan a la escritura manual o caligráfica. Sin embargo, no todas las variantes visualmente parecidas representan exactamente una fuente manuscrita tradicional. En los generadores de texto Unicode, muchas transformaciones utilizan caracteres especiales que tienen una apariencia diferente. Por eso es más preciso hablar de <strong>texto estilizado</strong> cuando corresponde, en lugar de afirmar que se ha instalado una fuente nueva.
          </p>
        </section>

        {/* Section 6: Abecedario */}
        <section className="prose-card">
          <h2>Abecedario de letras bonitas</h2>
          <p>
            También puedes utilizar estilos de letras para trabajar con letras individuales. Esto resulta útil cuando buscas una letra concreta para un nombre, un logotipo conceptual, una inicial, un título, un perfil, una decoración o un proyecto creativo.
          </p>
          <p>
            Si quieres explorar las letras del alfabeto en diferentes estilos, puedes consultar el <a href="/letras-cursivas/abecedario-cursivo/">Abecedario Cursivo</a>. El alfabeto puede ayudarte a comprobar cómo se representa cada letra antes de utilizar un estilo para una palabra completa.
          </p>
        </section>

        {/* Section 7: Elegantes */}
        <section className="prose-card">
          <h2>Letras elegantes</h2>
          <p>
            Las letras elegantes suelen buscar una apariencia más refinada, limpia o decorativa. Puedes utilizarlas para crear nombres elegantes, frases, bios, firmas digitales, perfiles, títulos y publicaciones.
          </p>
          <p>
            No existe un único estilo que pueda considerarse elegante. Algunas personas prefieren una cursiva fina y discreta. Otras prefieren letras ornamentales con más decoración. Por eso lo mejor es probar varias opciones y elegir según el contexto.
          </p>
          <p>
            Si buscas una colección centrada específicamente en este estilo, puedes explorar <a href="/letras-cursivas/letras-cursivas-elegantes/">Letras Cursivas Elegantes</a>.
          </p>
        </section>

        {/* Section 8: Letras diferentes */}
        <section className="prose-card">
          <h2>Letras diferentes</h2>
          <p>
            A veces no buscas una categoría específica; simplemente quieres que tu texto se vea diferente. En ese caso puedes probar diferentes estilos hasta encontrar una variante que destaque. Una misma palabra puede tener una personalidad completamente distinta dependiendo de su representación.
          </p>
          <p>Por ejemplo, la palabra <strong>Música</strong> puede convertirse en diferentes estilos visuales y cada uno puede transmitir una sensación distinta:</p>
          <ul>
            <li>Un estilo limpio puede parecer moderno.</li>
            <li>Una cursiva puede parecer elegante.</li>
            <li>Una variante gótica puede parecer oscura o medieval.</li>
            <li>Una variante pequeña puede parecer minimalista.</li>
            <li>Un diseño decorativo puede llamar más la atención.</li>
          </ul>
          <p>Esta variedad es precisamente lo que hace útil un generador de letras.</p>
        </section>

        {/* Section 9: Conversor */}
        <section className="prose-card">
          <h2>Conversor de Letras</h2>
          <p>
            Si lo que quieres es transformar tu propio texto, puedes utilizar nuestro <a href="/conversor-de-letras/">Conversor de Letras</a>. El concepto es simple: introduces texto normal y obtienes diferentes versiones estilizadas que puedes copiar. No necesitas buscar una fuente individual cada vez. Puedes escribir <em>«Mi nombre es Ana»</em> y después comparar diferentes resultados antes de copiar.
          </p>
          <h3>¿Para qué sirve un conversor de letras?</h3>
          <p>Un conversor puede ser útil cuando quieres:</p>
          <ul>
            <li>Cambiar el aspecto de un nombre</li>
            <li>Crear una bio diferente</li>
            <li>Personalizar una frase</li>
            <li>Diseñar un nombre para un juego</li>
            <li>Crear un texto aesthetic</li>
            <li>Preparar una publicación</li>
            <li>Probar estilos para redes sociales</li>
            <li>Crear texto para copiar y pegar</li>
          </ul>
          <p>
            También puedes consultar <a href="/letras-cursivas/letras-cursivas-para-copiar-y-pegar/">Letras para Copiar y Pegar</a> si quieres encontrar diferentes opciones preparadas para copiar.
          </p>
        </section>

        {/* Section 10: Cómo cambiar las letras */}
        <section className="prose-card">
          <h2>Cómo cambiar las letras</h2>
          <p>
            Cuando alguien busca letras bonitas, muchas veces realmente está preguntando: <strong>¿Cómo puedo cambiar las letras de mi texto?</strong>
          </p>
          <p>
            La respuesta depende de lo que quieras conseguir. Si quieres cambiar la apariencia visual de un texto dentro de un documento, normalmente necesitas cambiar la fuente utilizada por el programa. Pero si quieres crear texto que puedas copiar y pegar en diferentes campos de una aplicación, puedes utilizar un generador basado en caracteres Unicode.
          </p>
          <p>
            En ese caso, no estás instalando una nueva fuente en la aplicación. Estás generando una representación diferente del texto que puede copiarse como caracteres.
          </p>
        </section>

        {/* Section 11: Texto con estilos */}
        <section className="prose-card">
          <h2>Texto con estilos</h2>
          <p>
            El texto estilizado puede utilizarse para diferentes objetivos. No todos los estilos tienen que ser elegantes; algunos pueden ser fuertes, divertidos, minimalistas, decorativos, oscuros, modernos, aesthetic, pequeños, llamativos o inspirados en videojuegos.
          </p>
          <p>La idea es encontrar el estilo adecuado para el contexto, no utilizar el diseño más llamativo en todos los casos.</p>
        </section>

        {/* Section 12: Instagram */}
        <section className="prose-card">
          <h2>Letras para Instagram</h2>
          <p>
            Las redes sociales son uno de los usos más populares de las letras estilizadas. Puedes utilizar diferentes estilos para personalizar nombres, biografías, publicaciones y otros textos.
          </p>
          <h3>Letras para una bio</h3>
          <p>
            Una biografía corta puede tener un aspecto diferente cuando utilizas una combinación de texto normal, letras estilizadas y símbolos. Por ejemplo, puedes destacar una palabra importante con un estilo diferente y mantener el resto de la bio fácil de leer. No es necesario convertir cada carácter de una biografía; en muchos casos, utilizar un estilo en una parte concreta produce un resultado más limpio.
          </p>
          <h3>Letras para nombres</h3>
          <p>
            También puedes probar diferentes estilos para nombres de perfil. La prioridad debe ser siempre que el resultado siga siendo reconocible y legible. Un diseño demasiado decorativo puede ser atractivo visualmente, pero también puede dificultar que otras personas entiendan el nombre.
          </p>
        </section>

        {/* Section 13: Free Fire */}
        <section className="prose-card">
          <h2>Nombres para Free Fire</h2>
          <p>
            Los nombres de juegos son otro uso habitual de las letras estilizadas. Un nombre puede combinar letras diferentes, mayúsculas, símbolos y otros caracteres compatibles. Puedes probar diferentes estilos antes de elegir el nombre definitivo.
          </p>
          <h3>Consejos para elegir un nombre</h3>
          <p>Un buen nombre para un juego no tiene que ser complicado. Puedes buscar un equilibrio entre:</p>
          <ul>
            <li>Legibilidad</li>
            <li>Originalidad</li>
            <li>Longitud</li>
            <li>Estilo</li>
            <li>Compatibilidad</li>
            <li>Facilidad para recordar</li>
          </ul>
          <p>Un nombre lleno de caracteres extraños puede parecer llamativo, pero también puede ser difícil de escribir o reconocer. Por eso es recomendable probar varias opciones.</p>
        </section>

        {/* Section 14: Símbolos */}
        <section className="prose-card">
          <h2>Símbolos para complementar tus letras</h2>
          <p>
            Las letras estilizadas no son la única forma de personalizar un texto. También puedes utilizar símbolos para añadir separación, decoración o personalidad. Por ejemplo, un nombre puede combinar texto con símbolos decorativos alrededor.
          </p>
          <p>Los símbolos pueden ser útiles para nombres, bios, títulos, separadores, perfiles, juegos y publicaciones. Sin embargo, igual que ocurre con las letras Unicode, algunos símbolos pueden no mostrarse de la misma manera en todos los dispositivos.</p>
        </section>

        {/* Section 15: Texto invisible */}
        <section className="prose-card">
          <h2>Texto invisible</h2>
          <p>
            Existen también caracteres que no tienen una apariencia visible normal. Estos caracteres se conocen habitualmente como <strong>texto invisible</strong> y pueden tener diferentes usos dependiendo de la plataforma.
          </p>
          <p>Es importante no asumir que un carácter invisible funcionará en cualquier aplicación. Cada plataforma puede procesar los espacios y caracteres especiales de una manera diferente.</p>
        </section>

        {/* Section 16: Tipos de letras */}
        <section className="prose-card">
          <h2>Tipos de letras</h2>
          <p>
            Cuando hablamos de «tipos de letras», podemos estar hablando de cosas diferentes. En diseño gráfico, una fuente tipográfica es un conjunto de formas utilizadas para representar caracteres. En los generadores de texto online, en cambio, la expresión «tipos de letras» suele utilizarse para describir diferentes resultados visuales que pueden copiarse y pegarse. Estos dos conceptos están relacionados visualmente, pero técnicamente no son idénticos.
          </p>
        </section>

        {/* Section 17: Góticas & Graffiti */}
        <section className="prose-card">
          <h2>Letras góticas y letras graffiti</h2>
          <p>
            Las <strong>letras góticas</strong> tienen una estética fácilmente reconocible asociada con estilos medievales, oscuros, antiguos o decorativos. Pueden utilizarse para nombres, perfiles, diseños, juegos, títulos y contenido aesthetic.
          </p>
          <p>
            Por su parte, las <strong>letras graffiti</strong> tienen una estética inspirada en el arte urbano, tags, diseños callejeros y letras decorativas creativas. La finalidad es encontrar una estética adecuada para tu proyecto, nombre o texto.
          </p>
        </section>

        {/* Section 18: What are letras bonitas? */}
        <section className="prose-card">
          <h2>¿Qué son realmente las letras bonitas?</h2>
          <p>
            El término <strong>letras bonitas</strong> se utiliza en Internet para describir diferentes formas visuales de presentar texto. No existe un único conjunto oficial llamado «letras bonitas»; el término puede incluir cursiva, negrita, gótica, aesthetic, decorativa, manuscrita, pequeña, ancho completo, símbolos y texto Unicode estilizado.
          </p>
          <p>Por eso un generador de letras puede ofrecer cientos de resultados diferentes. Lo importante es distinguir entre una fuente tipográfica tradicional y caracteres estilizados.</p>
        </section>

        {/* Section 19: How Unicode works */}
        <section className="prose-card">
          <h2>¿Cómo funcionan las letras Unicode?</h2>
          <p>
            Unicode es un estándar utilizado para representar texto de forma consistente en sistemas digitales. Algunos caracteres Unicode tienen formas visuales especiales que pueden utilizarse para producir determinados estilos de texto. Por ejemplo, existen caracteres alfanuméricos matemáticos con variantes visuales como negrita, cursiva, sans-serif, fraktur y doble trazo.
          </p>
          <p>
            Cuando un generador utiliza estos caracteres, el resultado puede copiarse como texto en lugar de convertirse en una imagen. Esto explica por qué puedes copiar un resultado desde un generador y pegarlo en otra aplicación.
          </p>
          <p>
            Pero existe una diferencia importante: <strong>Unicode no significa que absolutamente todos los dispositivos mostrarán todos los caracteres de la misma manera.</strong> La representación depende también de las fuentes disponibles y del software que utilice el dispositivo. Por eso es mejor hablar de compatibilidad en lugar de prometer que todos los estilos funcionarán en todas partes.
          </p>
        </section>

        {/* Section 20: Are they fonts? */}
        <section className="prose-card">
          <h2>¿Las letras bonitas son fuentes?</h2>
          <p>
            En el lenguaje cotidiano, muchas personas llaman «fuentes» a estos estilos. Técnicamente, eso no siempre es correcto. Una fuente tipográfica es un recurso utilizado para determinar cómo se representan los caracteres. Un generador de texto Unicode utiliza caracteres diferentes para conseguir una apariencia estilizada.
          </p>
          <p>
            Por ejemplo, cuando conviertes <strong>Hola</strong> en <strong>𝐇𝐨𝐥𝐚</strong>, el resultado no significa necesariamente que hayas instalado una nueva fuente. Has generado otra representación textual utilizando caracteres Unicode compatibles con ese estilo. Esta diferencia es especialmente importante cuando quieres copiar y pegar texto.
          </p>
        </section>

        {/* Section 21: Compatibility across devices */}
        <section className="prose-card">
          <h2>¿Funcionan las letras bonitas en todos los dispositivos?</h2>
          <p>
            No necesariamente. La mayoría de los caracteres comunes son ampliamente compatibles, pero algunos estilos especiales pueden presentar problemas. La apariencia puede cambiar dependiendo de:
          </p>
          <ul>
            <li>iPhone (iOS)</li>
            <li>Android</li>
            <li>Windows</li>
            <li>macOS</li>
            <li>Navegador web</li>
            <li>Aplicación</li>
            <li>Fuente de sistema instalada</li>
            <li>Campo de texto objetivo</li>
          </ul>
          <p>
            Por ejemplo, un carácter puede aparecer correctamente en un navegador moderno pero mostrarse como un cuadrado en una aplicación que no dispone de una fuente compatible. Por eso recomendamos comprobar siempre el resultado después de pegarlo. Si un estilo no funciona correctamente, simplemente prueba una alternativa más sencilla.
          </p>
        </section>

        {/* Section 22: Mobile usage */}
        <section className="prose-card">
          <h2>Letras bonitas para móviles</h2>
          <p>Puedes utilizar un generador de letras desde el móvil sin necesidad de instalar software adicional. El proceso normalmente es:</p>
          <ol>
            <li>Escribe tu texto.</li>
            <li>Busca un estilo.</li>
            <li>Pulsa Copiar.</li>
            <li>Abre la aplicación donde quieres utilizarlo.</li>
            <li>Mantén pulsado el campo de texto.</li>
            <li>Pulsa Pegar.</li>
          </ol>
          <p>Esto resulta especialmente práctico para usuarios que buscan letras para redes sociales, nombres o mensajes. La interfaz debe ser sencilla y los botones deben ser fáciles de tocar en pantallas pequeñas.</p>
        </section>

        {/* Section 23: Names & Phrases */}
        <section className="prose-card">
          <h2>Letras bonitas para nombres y frases</h2>
          <p>
            Un nombre o apodo puede ser una de las mejores formas de probar un estilo. Prueba el mismo nombre en varios estilos y después compara <strong>legibilidad + apariencia + compatibilidad</strong> en lugar de elegir únicamente el estilo más llamativo. Un buen estilo debe verse bien y seguir siendo reconocible.
          </p>
          <p>
            También puedes convertir frases completas (ej: <em>Nunca dejes de soñar</em>). Para frases largas, recomendamos probar primero estilos sencillos, ya que los diseños demasiado decorativos pueden ser difíciles de leer cuando contienen muchas palabras.
          </p>
        </section>

        {/* Section 24: Free online tool */}
        <section className="prose-card">
          <h2>Letras bonitas para copiar y pegar gratis</h2>
          <p>
            LetrasBonitas está pensado para ofrecer una experiencia sencilla directamente desde el navegador. No necesitas instalar una aplicación para probar los estilos; puedes escribir y copiar tus resultados directamente.
          </p>
          <p>El objetivo es que la herramienta sea fácil de usar, rápida, compatible con móviles, transparente y útil para diferentes tipos de usuarios.</p>
        </section>

        {/* Section 25: Why use a generator? */}
        <section className="prose-card">
          <h2>¿Por qué utilizar un generador de letras?</h2>
          <p>
            Buscar manualmente caracteres especiales puede resultar lento. Un generador reúne diferentes posibilidades en una sola interfaz. En lugar de buscar cada estilo individualmente, puedes escribir tu texto una vez y comparar diferentes resultados.
          </p>
          <p>Esto ahorra tiempo, permite experimentar y ayuda a encontrar estilos que quizá no conocías.</p>
        </section>

        {/* Section 26: How to choose */}
        <section className="prose-card">
          <h2>Cómo elegir la mejor letra bonita</h2>
          <p>No existe una letra que sea mejor para todo. La elección depende del objetivo:</p>
          <ul>
            <li><strong>Para una bio:</strong> Prioriza legibilidad y personalidad.</li>
            <li><strong>Para un nombre:</strong> Busca un estilo reconocible y fácil de recordar.</li>
            <li><strong>Para un juego:</strong> Puedes utilizar estilos más llamativos, siempre que sean compatibles con el juego.</li>
            <li><strong>Para una frase:</strong> Los estilos sencillos suelen ser más fáciles de leer.</li>
            <li><strong>Para un diseño:</strong> Puedes experimentar con estilos más decorativos.</li>
            <li><strong>Para un perfil profesional:</strong> Es mejor utilizar una variante limpia y discreta.</li>
          </ul>
          <p>El mejor estilo es el que combina <strong>apariencia, legibilidad y compatibilidad</strong>.</p>
        </section>

        {/* Section 27: Spanish Characters */}
        <section className="prose-card">
          <h2>Caracteres especiales del español (á, é, í, ó, ú, ü, ñ, Ñ)</h2>
          <p>
            Un buen generador para usuarios hispanohablantes debe considerar que el español utiliza caracteres que no aparecen en el alfabeto inglés básico:
            <strong> á, é, í, ó, ú, ü, ñ</strong> y sus versiones mayúsculas <strong>Á, É, Í, Ó, Ú, Ü, Ñ</strong>.
          </p>
          <p>
            No todos los estilos Unicode tienen equivalentes estilizados para cada uno de estos caracteres. Por eso un generador responsable no debería inventar transformaciones incorrectas. Si un carácter no tiene una representación compatible con determinado estilo, conservar el carácter original evita romper palabras como <em>España</em>, <em>corazón</em>, <em>niño</em> o <em>música</em>.
          </p>
        </section>

        {/* Section 28: Why some characters render differently */}
        <section className="prose-card">
          <h2>¿Por qué algunos caracteres aparecen diferentes?</h2>
          <p>
            Unicode define caracteres, pero no controla completamente cómo cada dispositivo los dibuja. La aplicación utiliza una fuente disponible para representar el carácter; si esa fuente no contiene el glifo necesario, puede aparecer un cuadrado, un símbolo sustituto o una apariencia distinta.
          </p>
          <p>Esto no significa necesariamente que el generador esté roto. Puede ser una limitación del dispositivo o de la aplicación. Por eso es recomendable probar el resultado en el lugar donde realmente quieres utilizarlo.</p>
        </section>

        {/* Section 29: Complete FAQ */}
        <section className="prose-card">
          <h2>Preguntas frecuentes sobre Letras Bonitas</h2>
          <dl className="faq-list">
            <dt>¿Qué son las letras bonitas?</dt>
            <dd>
              Las letras bonitas son diferentes estilos visuales de texto que pueden utilizarse para personalizar nombres, frases, bios, perfiles y publicaciones. Muchos generadores utilizan caracteres Unicode estilizados para producir estos resultados.
            </dd>

            <dt>¿Cómo puedo crear letras bonitas?</dt>
            <dd>
              Escribe tu texto en el generador de LetrasBonitas, explora los diferentes estilos, selecciona el resultado que te guste y pulsa <strong>Copiar</strong>. Después puedes pegarlo en una aplicación compatible.
            </dd>

            <dt>¿Puedo copiar y pegar las letras bonitas?</dt>
            <dd>
              Sí. Los estilos compatibles pueden copiarse como texto y pegarse en diferentes campos de texto.
            </dd>

            <dt>¿Las letras bonitas son gratis?</dt>
            <dd>
              El objetivo de LetrasBonitas es ofrecer la herramienta directamente desde el navegador sin que tengas que instalar una fuente para utilizar los estilos.
            </dd>

            <dt>¿Necesito descargar una fuente?</dt>
            <dd>
              No para los estilos de texto Unicode que puedes copiar y pegar. Estos caracteres forman parte del texto que copias.
            </dd>

            <dt>¿Puedo utilizar letras bonitas en Instagram?</dt>
            <dd>
              Puedes utilizar caracteres estilizados compatibles en diferentes partes de Instagram. La compatibilidad exacta depende del campo y del carácter utilizado.
            </dd>

            <dt>¿Puedo utilizar letras bonitas en TikTok?</dt>
            <dd>
              Algunos caracteres estilizados pueden utilizarse en campos de texto de TikTok. La compatibilidad puede variar, por lo que siempre debes comprobar el resultado.
            </dd>

            <dt>¿Puedo utilizar letras bonitas en WhatsApp?</dt>
            <dd>
              Puedes copiar texto estilizado y pegarlo en WhatsApp cuando el campo de texto admita esos caracteres. Algunos estilos pueden verse diferente dependiendo del dispositivo.
            </dd>

            <dt>¿Puedo utilizar letras bonitas en juegos?</dt>
            <dd>
              Algunos juegos aceptan determinados caracteres Unicode y otros restringen los caracteres disponibles. Si un nombre no funciona, prueba una versión más sencilla.
            </dd>

            <dt>¿Por qué algunas letras no funcionan?</dt>
            <dd>
              No todos los caracteres están disponibles en todas las fuentes y aplicaciones. Algunos dispositivos pueden no tener soporte para determinados caracteres Unicode.
            </dd>

            <dt>¿Las letras cursivas son fuentes reales?</dt>
            <dd>
              No necesariamente. En muchos casos, las letras cursivas de un generador son caracteres Unicode estilizados que tienen una apariencia cursiva.
            </dd>

            <dt>¿Puedo escribir la letra ñ con estilos bonitos?</dt>
            <dd>
              Depende del estilo. Algunos estilos tienen equivalentes compatibles y otros no. Cuando no existe una variante adecuada, conservar la ñ original evita crear texto incorrecto.
            </dd>

            <dt>¿Las letras bonitas funcionan en iPhone?</dt>
            <dd>
              Muchos caracteres Unicode funcionan en iPhone, pero no todos los estilos tienen la misma compatibilidad. La aplicación utilizada también puede influir en la visualización.
            </dd>

            <dt>¿Las letras bonitas funcionan en Android?</dt>
            <dd>
              Muchos caracteres son compatibles con Android, pero la visualización puede variar según la versión del sistema, la fuente y la aplicación.
            </dd>

            <dt>¿Puedo usar letras bonitas para nombres?</dt>
            <dd>
              Sí. Los nombres son uno de los usos habituales de los estilos de texto. Antes de elegir uno, comprueba que sea fácil de leer y compatible con la plataforma donde quieres utilizarlo.
            </dd>

            <dt>¿Cuál es la mejor letra bonita?</dt>
            <dd>
              No existe una única mejor letra. La mejor opción depende de si quieres un estilo cursivo, elegante, gótico, aesthetic, pequeño, llamativo o sencillo.
            </dd>
          </dl>
        </section>

        {/* Section 30: Category Links */}
        <nav className="internal-links" aria-label="Directorio principal de herramientas LetrasBonitas">
          <div className="internal-links__header">
            <span className="internal-links__eyebrow">✨ EXPLORA EL UNIVERSO</span>
            <h3>Herramientas y Estilos Relacionados</h3>
          </div>
          <div className="internal-links__grid">
            <Link href="/letras-cursivas/" className="internal-link-card">
              <div className="internal-link-card__icon">✍️</div>
              <div className="internal-link-card__body">
                <div className="internal-link-card__title-row">
                  <span className="internal-link-card__title">Letras Cursivas</span>
                  <span className="internal-link-card__arrow">→</span>
                </div>
                <p className="internal-link-card__desc">Encuentra estilos cursivos y caligráficos fluidos para copiar y pegar.</p>
              </div>
            </Link>
            <Link href="/letras-cursivas/abecedario-cursivo/" className="internal-link-card">
              <div className="internal-link-card__icon">🔤</div>
              <div className="internal-link-card__body">
                <div className="internal-link-card__title-row">
                  <span className="internal-link-card__title">Abecedario Cursivo</span>
                  <span className="internal-link-card__arrow">→</span>
                </div>
                <p className="internal-link-card__desc">Alfabeto cursivo completo de la A a la Z en mayúsculas y minúsculas.</p>
              </div>
            </Link>
            <Link href="/letras-cursivas/letras-cursivas-para-copiar-y-pegar/" className="internal-link-card">
              <div className="internal-link-card__icon">📋</div>
              <div className="internal-link-card__body">
                <div className="internal-link-card__title-row">
                  <span className="internal-link-card__title">Copiar y Pegar</span>
                  <span className="internal-link-card__arrow">→</span>
                </div>
                <p className="internal-link-card__desc">Utilidad de letras cursivas rápida lista para redes sociales y juegos.</p>
              </div>
            </Link>
            <Link href="/letras-cursivas/letras-cursivas-elegantes/" className="internal-link-card">
              <div className="internal-link-card__icon">💎</div>
              <div className="internal-link-card__body">
                <div className="internal-link-card__title-row">
                  <span className="internal-link-card__title">Cursivas Elegantes</span>
                  <span className="internal-link-card__arrow">→</span>
                </div>
                <p className="internal-link-card__desc">Estilos de escritura fina, caligrafía y letras decorativas de lujo.</p>
              </div>
            </Link>
          </div>
        </nav>

        {/* Section 31: Closing & Personalizing */}
        <section className="prose-card text-center highlight-card">
          <h2>Una forma sencilla de personalizar tu texto</h2>
          <p>
            No necesitas cambiar todo el texto para conseguir un resultado diferente. A veces una sola palabra estilizada en una bio es suficiente (ej: <strong>𝓐𝓶𝓸𝓻</strong>, <strong>𝐕𝐢𝐚𝐣𝐞𝐬</strong>, <strong>𝕸𝖚́𝖘𝖎𝖈𝖆</strong>) para crear contraste sin dificultar la lectura.
          </p>
          <p className="cta-motto"><strong>Escribe tu texto y descubre cómo puede verse.</strong></p>
        </section>

      </article>
    </main>
  );
}
