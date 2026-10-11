import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ModelosLetrasExplorer } from "@/components/font-generator/ModelosLetrasExplorer";

export function generateMetadata(): Metadata {
  return {
    title: "Modelos de Letras Bonitas para Copiar y Pegar | LetrasBonitas",
    description:
      "Explora modelos de letras bonitas, cursivas, góticas y decoradas. Escribe tu nombre, compara estilos y copia tu diseño favorito.",
    alternates: {
      canonical: "/tipos-de-letras/modelos-de-letras/",
    },
    openGraph: {
      title: "Modelos de Letras Bonitas para Copiar y Pegar | LetrasBonitas",
      description:
        "Explora modelos de letras bonitas, cursivas, góticas y decoradas. Escribe tu nombre, compara estilos y copia tu diseño favorito.",
      locale: "es",
      type: "website",
      url: "/tipos-de-letras/modelos-de-letras/",
    },
    twitter: {
      card: "summary",
      title: "Modelos de Letras Bonitas para Copiar y Pegar | LetrasBonitas",
      description:
        "Explora modelos de letras bonitas, cursivas, góticas y decoradas. Escribe tu nombre, compara estilos y copia tu diseño favorito.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ModelosDeLetrasPage() {
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
        "@id": "https://letrasbonits.com/tipos-de-letras/modelos-de-letras/#webpage",
        url: "https://letrasbonits.com/tipos-de-letras/modelos-de-letras/",
        name: "Modelos de Letras Bonitas para Copiar y Pegar",
        description:
          "Explora modelos de letras bonitas, cursivas, góticas y decoradas. Escribe tu nombre, compara estilos y copia tu diseño favorito.",
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://letrasbonits.com/tipos-de-letras/modelos-de-letras/#breadcrumb",
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
            name: "Tipos de Letras",
            item: "https://letrasbonits.com/tipos-de-letras/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Modelos de Letras",
            item: "https://letrasbonits.com/tipos-de-letras/modelos-de-letras/",
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": "https://letrasbonits.com/tipos-de-letras/modelos-de-letras/#app",
        name: "Explorador de Modelos de Letras",
        url: "https://letrasbonits.com/tipos-de-letras/modelos-de-letras/",
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
        "@id": "https://letrasbonits.com/tipos-de-letras/modelos-de-letras/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Dónde puedo encontrar modelos de letras bonitas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Puedes explorar la galería de LetrasBonitas, escribir tu nombre y comparar diferentes modelos de letras cursivas, góticas, modernas, aesthetic y decoradas.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo copiar un modelo de letra?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Escribe tu texto, selecciona el modelo que prefieras y pulsa Copiar. Después pégalo en el campo de texto compatible.",
            },
          },
          {
            "@type": "Question",
            name: "¿Los modelos de letras son gratis?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El generador de esta página está planteado como una herramienta gratuita, sin registro ni instalación.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo usar modelos de letras en mi nombre de Instagram?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Puedes probarlos en campos que admitan esos caracteres. El nombre visible y el identificador de usuario pueden tener restricciones diferentes.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuál es el mejor modelo de letra para un nombre?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Depende del resultado que busques. Las cursivas ofrecen una apariencia elegante, las negritas destacan y los modelos modernos suelen ser más discretos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Hay modelos de letras para copiar desde el celular?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Puedes utilizar el generador desde el navegador del móvil, elegir un modelo y copiar el resultado.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo encontrar modelos de letras para dibujar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Los ejemplos de la galería pueden servir como inspiración visual. Para practicar escritura manual o crear letras imprimibles, una plantilla de caligrafía o un editor de diseño ofrece herramientas más adecuadas.",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué algunos modelos no cambian la ñ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Porque no todos los alfabetos Unicode decorativos incluyen equivalentes directos para los caracteres españoles. Conservar la ñ puede ser más correcto que sustituirla por otra letra.",
            },
          },
          {
            "@type": "Question",
            name: "¿Todos los modelos funcionan en Free Fire?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No se puede garantizar. La aceptación de caracteres depende de las reglas del juego y del campo donde quieras utilizar el nombre.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuál es la diferencia entre tipos y modelos de letras?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Los tipos de letras permiten clasificar familias visuales, como cursivas o góticas. Los modelos son ejemplos concretos que puedes comparar, personalizar y elegir.",
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

      <div className="container py-8 max-w-5xl mx-auto px-4">
        {/* Breadcrumb: Notice parent /tipos-de-letras/ does not have href because it is not a published route */}
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Tipos de Letras" },
            { label: "Modelos de Letras" },
          ]}
        />

        {/* Header section with single H1 */}
        <header className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Modelos de Letras Bonitas para Copiar y Pegar
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            ¿Buscas modelos de letras para escribir tu nombre de una forma diferente,
            decorar una frase o encontrar un estilo que combine con tu personalidad?
            Entre tantas letras cursivas, góticas, modernas y decoradas, elegir un diseño
            puede resultar complicado. A veces encuentras un modelo bonito, pero no sabes
            cómo quedará con tu propio texto.
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mt-3">
            En LetrasBonitas puedes explorar diferentes modelos de letras, comparar sus
            estilos y personalizar las opciones que más te gusten. Escribe una palabra,
            revisa los resultados y copia el modelo que prefieras. También encontrarás
            ejemplos de alfabetos, ideas para nombres y consejos para elegir letras según el
            uso que quieras darles.
          </p>
        </header>

        {/* Interactive Tool Component */}
        <section className="mb-14" aria-label="Herramienta Explorador de Modelos de Letras">
          <ModelosLetrasExplorer />
        </section>

        {/* Complete Spanish SEO Article - 100% Server Rendered and Crawlable */}
        <article className="prose prose-slate max-w-none space-y-12 text-gray-800 leading-relaxed">
          {/* Section: ¿Qué son los modelos de letras? */}
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              ¿Qué son los modelos de letras?
            </h2>
            <p className="mb-4 text-gray-700">
              Los modelos de letras son ejemplos de distintas formas visuales de representar letras, palabras y alfabetos. Un mismo nombre puede aparecer con trazos elegantes, caracteres gruesos, formas góticas, letras redondeadas o detalles decorativos.
            </p>
            <p className="mb-4 text-gray-700 font-medium">
              Por ejemplo, la palabra Luna puede tener estas apariencias:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-gray-200 text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-3 px-4 font-semibold text-gray-800 border-r border-gray-200">Modelo</th>
                    <th className="py-3 px-4 font-semibold text-gray-800">Ejemplo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">Normal</td>
                    <td className="py-2.5 px-4 text-gray-800">Luna</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">Negrita</td>
                    <td className="py-2.5 px-4 text-gray-800 font-bold">𝐋𝐮𝐧𝐚</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">Cursiva</td>
                    <td className="py-2.5 px-4 text-gray-800">𝓛𝓾𝓷𝓪</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">Gótico</td>
                    <td className="py-2.5 px-4 text-gray-800">𝔏𝔲𝔫𝔞</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">Doble trazo</td>
                    <td className="py-2.5 px-4 text-gray-800">𝕃𝕦𝕟𝕒</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">Moderno</td>
                    <td className="py-2.5 px-4 text-gray-800">𝗟𝘂𝗻𝗮</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">Aesthetic</td>
                    <td className="py-2.5 px-4 text-gray-800">Ｌｕｎａ</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">En círculos</td>
                    <td className="py-2.5 px-4 text-gray-800">Ⓛⓤⓝⓐ</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">Decorado</td>
                    <td className="py-2.5 px-4 text-gray-800">✧ Luna ✧</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-4 text-gray-700">
              Cada modelo ofrece una apariencia diferente. Algunos destacan por su elegancia, otros por sus formas llamativas y otros por su sencillez.
            </p>
            <p className="text-gray-700">
              En esta página nos centramos principalmente en modelos que puedes personalizar mediante caracteres Unicode y copiar como texto. También explicamos cuándo conviene utilizar una fuente tipográfica tradicional o una imagen en lugar de un conversor.
            </p>
          </section>

          {/* Section: Explora diferentes modelos de letras bonitas */}
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Explora diferentes modelos de letras bonitas
            </h2>
            <p className="mb-6 text-gray-700">
              No existe un único modelo adecuado para todos los usos. La mejor elección depende de si quieres decorar un nombre, crear una biografía, preparar una dedicatoria o encontrar inspiración para un diseño.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modelos de letras cursivas</h3>
                <p className="text-gray-700 mb-2">
                  Las letras cursivas tienen una apariencia fluida, inspirada en la escritura inclinada o caligráfica.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 my-2 text-sm text-gray-800 font-mono flex flex-wrap gap-4">
                  <span>𝓐𝓶𝓸𝓻</span>
                  <span>𝓛𝓾𝓷𝓪</span>
                  <span>𝓢𝓸𝓯𝓲𝓪</span>
                  <span>𝓥𝓲𝓭𝓪</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Son una opción habitual para nombres, dedicatorias y frases cortas.
                </p>
                <p className="text-gray-700 mb-2">
                  Dentro de las cursivas hay modelos más finos y otros con trazos marcados. Los primeros suelen transmitir delicadeza, mientras que los segundos llaman más la atención.
                </p>
                <p className="text-gray-700">
                  Si tu texto contiene muchas palabras, conviene comprobar que las letras sigan siendo fáciles de distinguir.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modelos de letras elegantes</h3>
                <p className="text-gray-700 mb-2">
                  Los modelos elegantes buscan una apariencia cuidada sin añadir demasiados adornos.
                </p>
                <p className="text-gray-700 mb-2">
                  Puedes conseguir ese efecto mediante cursivas suaves, caracteres de doble trazo o combinaciones sencillas.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 my-2 text-sm text-gray-800 font-mono flex flex-wrap gap-4">
                  <span>𝒜𝓂ℴ𝓇</span>
                  <span>𝕃𝕦𝕟𝕒</span>
                  <span>𝐒𝐨𝐟𝐢𝐚</span>
                  <span>✧ Valeria ✧</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Para una presentación discreta, elige un solo estilo y evita rodear cada palabra con símbolos.
                </p>
                <p className="text-gray-700">
                  Un modelo elegante no necesita ser complicado. En muchos casos, una palabra clara y bien presentada funciona mejor que una decoración excesiva.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modelos de letras góticas</h3>
                <p className="text-gray-700 mb-2">
                  Las letras góticas se reconocen por sus trazos angulares y su apariencia tradicional.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 my-2 text-sm text-gray-800 font-mono flex flex-wrap gap-4">
                  <span>𝔏𝔲𝔫𝔞</span>
                  <span>𝔄𝔪𝔬𝔯</span>
                  <span>𝕷𝖚𝖓𝖆</span>
                  <span>𝕽𝖊𝖞</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Pueden resultar útiles para apodos, nombres artísticos y composiciones de estilo oscuro.
                </p>
                <p className="text-gray-700">
                  Algunas variantes son más fáciles de leer que otras. Si las vas a utilizar en un perfil, prueba primero con una palabra corta.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modelos de letras modernas</h3>
                <p className="text-gray-700 mb-2">
                  Los modelos modernos suelen tener líneas limpias, formas sencillas y un aspecto uniforme.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 my-2 text-sm text-gray-800 font-mono flex flex-wrap gap-4">
                  <span>𝗟𝘂𝗻𝗮</span>
                  <span>𝙇𝙪𝙣𝙖</span>
                  <span>𝙼𝚊𝚛𝚒𝚊</span>
                  <span>Ｌｕｎａ</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Son una buena alternativa cuando quieres destacar un nombre sin recurrir a muchos símbolos.
                </p>
                <p className="text-gray-700">
                  Las letras monoespaciadas pueden recordar a una máquina de escribir o a un entorno digital. Las letras de ancho completo producen una apariencia más espaciosa.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modelos de letras aesthetic</h3>
                <p className="text-gray-700 mb-2">
                  El estilo aesthetic no corresponde a un único alfabeto. Se utiliza para describir distintas composiciones visuales, muchas veces con espacios, símbolos discretos y caracteres decorativos.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 my-2 text-sm text-gray-800 font-mono flex flex-wrap gap-4">
                  <span>✧ Luna ✧</span>
                  <span>♡ 𝓐𝓶𝓸𝓻 ♡</span>
                  <span>ｌｕｎａ</span>
                  <span>⋆｡°✩ Sofia ✩°｡⋆</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Puedes combinar un modelo sencillo con uno o dos elementos decorativos.
                </p>
                <p className="text-gray-700">
                  La clave es que el nombre siga siendo reconocible. Si los símbolos ocupan más espacio que el texto, quizá convenga simplificar el diseño.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modelos de letras en negrita</h3>
                <p className="text-gray-700 mb-2">
                  Las letras en negrita tienen mayor peso visual.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 my-2 text-sm text-gray-800 font-mono flex flex-wrap gap-4">
                  <span>𝐋𝐮𝐧𝐚</span>
                  <span>𝗔𝗺𝗼𝗿</span>
                  <span>𝙎𝙤𝙛𝙞𝙖</span>
                  <span>𝑹𝒆𝒚</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Funcionan bien para palabras breves que quieres destacar.
                </p>
                <p className="text-gray-700">
                  No todas las aplicaciones admiten los mismos caracteres, por lo que es recomendable comprobar el resultado después de pegarlo.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modelos de letras redondas y de burbuja</h3>
                <p className="text-gray-700 mb-2">
                  Las letras dentro de círculos ofrecen un diseño reconocible.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 my-2 text-sm text-gray-800 font-mono flex flex-wrap gap-4">
                  <span>Ⓛⓤⓝⓐ</span>
                  <span>Ⓐⓜⓞⓡ</span>
                  <span>Ⓢⓞⓛ</span>
                  <span>Ⓜⓐⓡ</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Este tipo de modelo puede servir para títulos cortos, listas decorativas y nombres creativos.
                </p>
                <p className="text-gray-700">
                  Al utilizarlo, ten en cuenta que algunos caracteres circulares tienen variantes diferentes para mayúsculas y minúsculas.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modelos de letras decoradas</h3>
                <p className="text-gray-700 mb-2">
                  Los modelos decorados combinan texto con marcos, separadores o símbolos.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 my-2 text-sm text-gray-800 font-mono flex flex-wrap gap-4">
                  <span>꧁ Luna ꧂</span>
                  <span>✦ Amor ✦</span>
                  <span>『Sofia』</span>
                  <span>♡ Valeria ♡</span>
                  <span>★ Mateo ★</span>
                  <span>༺ Rey ༻</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Puedes usar un modelo decorado sin modificar todas las letras del nombre.
                </p>
                <p className="text-gray-700">
                  Esta opción es especialmente práctica cuando un estilo Unicode completo resulta difícil de leer o no funciona en la aplicación donde quieres pegarlo.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Cómo utilizar el generador de modelos de letras */}
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Cómo utilizar el generador de modelos de letras
            </h2>
            <p className="mb-6 text-gray-700">
              El generador permite ver una misma palabra en diferentes modelos sin escribirla varias veces.
            </p>

            <div className="space-y-5">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Paso 1. Escribe tu nombre o una frase</h3>
                <p className="text-gray-700 mb-2">Introduce el texto que quieras personalizar. Por ejemplo:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                  <li>Maria</li>
                  <li>Luna</li>
                  <li>Mi mejor amiga</li>
                  <li>Feliz cumpleaños</li>
                  <li>Gamer Pro</li>
                </ul>
                <p className="text-gray-700 text-sm">
                  También puedes escribir una frase corta para comprobar cómo se ve cada modelo con espacios y signos.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Paso 2. Explora las categorías</h3>
                <p className="text-gray-700 mb-2">
                  Revisa las familias disponibles: sencillas, elegantes, aesthetic y decoradas.
                </p>
                <p className="text-gray-700 text-sm">
                  Cada categoría agrupa modelos con características visuales similares. Si ya sabes qué apariencia buscas, utiliza los filtros para reducir las opciones.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Paso 3. Compara los modelos</h3>
                <p className="text-gray-700 mb-2">
                  No elijas únicamente por el primer resultado.
                </p>
                <p className="text-gray-700 text-sm">
                  Observa cómo se representan las letras de tu nombre, si los espacios se mantienen y si los caracteres especiales aparecen correctamente. Un modelo que queda bien con una palabra puede resultar menos claro con otra.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Paso 4. Copia el diseño elegido</h3>
                <p className="text-gray-700 mb-2">
                  Cuando encuentres un modelo que te guste, pulsa Copiar. Después pégalo en el campo donde quieras utilizarlo.
                </p>
                <p className="text-gray-700 text-sm">
                  Si el botón no funciona por una restricción del navegador, puedes seleccionar el resultado manualmente y copiarlo.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Paso 5. Comprueba el resultado</h3>
                <p className="text-gray-700 mb-2">
                  Antes de guardar un nombre o publicar un texto, revisa que todos los caracteres aparezcan como esperabas.
                </p>
                <p className="text-gray-700 text-sm">
                  Algunas aplicaciones limitan los símbolos o muestran determinados caracteres de manera diferente.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Modelos de letras del abecedario */}
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Modelos de letras del abecedario
            </h2>
            <p className="mb-6 text-gray-700">
              Comparar alfabetos completos ayuda a reconocer las diferencias entre modelos. Aquí tienes varios ejemplos representativos.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Abecedario en negrita</h3>
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Mayúsculas:</p>
                <p className="font-mono text-gray-900 tracking-wider mb-3 break-all">
                  𝐀 𝐁 𝐂 𝐃 𝐄 𝐅 𝐆 𝐇 𝐈 𝐉 𝐊 𝐋 𝐌 𝐍 𝐎 𝐏 𝐐 𝐑 𝐒 𝐓 𝐔 𝐕 𝐖 𝐗 𝐘 𝐙
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Minúsculas:</p>
                <p className="font-mono text-gray-900 tracking-wider break-all">
                  𝐚 𝐛 𝐜 𝐝 𝐞 𝐟 𝐠 𝐡 𝐢 𝐣 𝐤 𝐥 𝐦 𝐧 𝐨 𝐩 𝐪 𝐫 𝐬 𝐭 𝐮 𝐯 𝐰 𝐱 𝐲 𝐳
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Abecedario en cursiva decorativa</h3>
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Mayúsculas:</p>
                <p className="font-mono text-gray-900 tracking-wider mb-3 break-all">
                  𝓐 𝓑 𝓒 𝓓 𝓔 𝓕 𝓖 𝓗 𝓘 𝓙 𝓚 𝓛 𝓜 𝓝 𝓞 𝓟 𝓠 𝓡 𝓢 𝓣 𝓤 𝓥 𝓦 𝓧 𝓨 𝓩
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Minúsculas:</p>
                <p className="font-mono text-gray-900 tracking-wider break-all">
                  𝓪 𝓫 𝓬 𝓭 𝓮 𝓯 𝓰 𝓱 𝓲 𝓳 𝓴 𝓵 𝓶 𝓷 𝓸 𝓹 𝓺 𝓻 𝓼 𝓽 𝓾 𝓿 𝔀 𝔁 𝔂 𝔃
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Abecedario gótico</h3>
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Mayúsculas:</p>
                <p className="font-mono text-gray-900 tracking-wider mb-3 break-all">
                  𝕬 𝕭 𝕮 𝕯 𝕰 𝕱 𝕲 𝕳 𝕴 𝕵 𝕶 𝕷 𝕸 𝕹 𝕺 𝕻 𝕼 𝕽 𝕾 𝕿 𝖀 𝖁 𝖂 𝖃 𝖄 𝖅
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Minúsculas:</p>
                <p className="font-mono text-gray-900 tracking-wider break-all">
                  𝖆 𝖇 𝖈 𝖉 𝖊 𝖋 𝖌 𝖍 𝖎 𝖏 𝖐 𝖑 𝖒 𝖓 𝖔 𝖕 𝖖 𝖗 𝖘 𝖙 𝖚 𝖛 𝖜 𝖝 𝖞 𝖟
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Abecedario aesthetic</h3>
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Mayúsculas:</p>
                <p className="font-mono text-gray-900 tracking-wider mb-3 break-all">
                  Ａ Ｂ Ｃ Ｄ Ｅ Ｆ Ｇ Ｈ Ｉ Ｊ Ｋ Ｌ Ｍ Ｎ Ｏ Ｐ Ｑ Ｒ Ｓ Ｔ Ｕ Ｖ Ｗ Ｘ Ｙ Ｚ
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Minúsculas:</p>
                <p className="font-mono text-gray-900 tracking-wider break-all">
                  ａ ｂ ｃ ｄ ｅ ｆ ｇ ｈ ｉ ｊ ｋ ｌ ｍ ｎ ｏ ｐ ｑ ｒ ｓ ｔ ｕ ｖ ｗ ｘ ｙ ｚ
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-700 text-sm">
              Estos alfabetos son ejemplos de caracteres disponibles, no una representación completa de todas las letras del español. La ñ, las vocales acentuadas y otros signos pueden requerir un tratamiento diferente según el modelo.
            </p>
          </section>

          {/* Section: Modelos de letras para nombres */}
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Modelos de letras para nombres
            </h2>
            <p className="mb-6 text-gray-700">
              Una de las formas más sencillas de personalizar un nombre es escribirlo en diferentes modelos y comparar los resultados.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modelos para nombres de mujer</h3>
                <div className="bg-gray-50 rounded-lg p-3 my-2 text-sm text-gray-800 font-mono flex flex-wrap gap-4">
                  <span>𝓛𝓾𝓷𝓪</span>
                  <span>𝐒𝐨𝐟𝐢𝐚</span>
                  <span>♡ Valeria ♡</span>
                  <span>𝔐𝔞𝔯𝔦𝔞</span>
                  <span>✧ Camila ✧</span>
                  <span>Ｅｍｍａ</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Puedes elegir cursivas para una apariencia delicada, negritas para destacar o modelos aesthetic para un resultado decorativo.
                </p>
                <p className="text-gray-700">
                  No hay estilos exclusivos para un género. Estos ejemplos son simplemente ideas de presentación.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modelos para nombres de hombre</h3>
                <div className="bg-gray-50 rounded-lg p-3 my-2 text-sm text-gray-800 font-mono flex flex-wrap gap-4">
                  <span>𝐌𝐚𝐭𝐞𝐨</span>
                  <span>𝕷𝖊𝖔</span>
                  <span>𝗗𝗶𝗲𝗴𝗼</span>
                  <span>★ Alex ★</span>
                  <span>𝔄𝔡𝔯𝔦𝔞𝔫</span>
                  <span>『David』</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Las letras gruesas, góticas o con marcos pueden dar un aspecto más marcado, pero cualquier modelo puede adaptarse al nombre que prefieras.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modelos para nombres cortos</h3>
                <p className="text-gray-700 mb-2">
                  Los nombres cortos permiten probar diseños más llamativos sin perder tanta legibilidad. Por ejemplo:
                </p>
                <div className="bg-gray-50 rounded-lg p-3 my-2 text-sm text-gray-800 font-mono flex flex-wrap gap-4">
                  <span>𝓐𝓷𝓪</span>
                  <span>𝐋𝐞𝐨</span>
                  <span>Ⓜⓐⓧ</span>
                  <span>✦ Sol ✦</span>
                  <span>𝕹𝖔𝖆</span>
                </div>
                <p className="text-gray-700">
                  Si tu nombre tiene pocas letras, puedes comparar varios modelos en una sola pantalla y elegir el que mejor se vea.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Modelos de letras para Instagram, TikTok y WhatsApp */}
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Modelos de letras para Instagram, TikTok y WhatsApp
            </h2>
            <p className="mb-6 text-gray-700">
              Los modelos decorativos pueden servir para personalizar ciertos campos de texto en redes sociales y aplicaciones de mensajería. Sin embargo, no todos los campos tienen las mismas reglas.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Para una biografía de Instagram</h3>
                <p className="text-gray-700 mb-2">
                  Una biografía debe ser fácil de entender. Puedes utilizar un modelo especial en tu nombre, una palabra destacada o una línea corta, y mantener el resto en texto normal.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 my-2 border border-gray-200 font-mono text-sm text-gray-800">
                  <p className="font-semibold text-purple-700">✧ 𝓛𝓾𝓷𝓪 ✧</p>
                  <p className="text-gray-600">Arte · Música · Ideas</p>
                </div>
                <p className="text-gray-700">
                  Este formato permite añadir un detalle visual sin convertir toda la descripción en caracteres difíciles de leer.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Para TikTok</h3>
                <p className="text-gray-700">
                  Puedes probar modelos cortos en el nombre visible o en textos donde la aplicación admita esos caracteres. Evita asumir que un diseño aceptado en un campo también funcionará en el identificador de usuario.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Para WhatsApp</h3>
                <p className="text-gray-700 mb-2">
                  Los modelos Unicode se pueden copiar como texto, pero su apariencia puede variar entre dispositivos.
                </p>
                <p className="text-gray-700">
                  Para mensajes largos, suele ser más cómodo utilizar texto normal y reservar las letras decorativas para títulos, saludos o frases breves.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Para Discord y perfiles de juegos</h3>
                <p className="text-gray-700 mb-2">
                  Las letras góticas, en negrita y con marcos son opciones habituales para explorar.
                </p>
                <p className="text-gray-700">
                  Antes de guardar un nombre, comprueba que la plataforma permita los caracteres elegidos. Si algún símbolo no aparece correctamente, prueba una versión más sencilla.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Modelos de letras para títulos y frases */}
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Modelos de letras para títulos y frases
            </h2>
            <p className="mb-4 text-gray-700">
              No todos los usuarios buscan cambiar su nombre. También puedes utilizar estos modelos para destacar una frase corta o crear un título decorativo.
            </p>
            <div className="bg-gray-50 rounded-lg p-3 my-3 text-sm text-gray-800 font-mono flex flex-wrap gap-4">
              <span>𝐅𝐞𝐥𝐢𝐳 𝐂𝐮𝐦𝐩𝐥𝐞𝐚𝐧̃𝐨𝐬</span>
              <span>✧ Buenos días ✧</span>
              <span>𝓣𝓮 𝓺𝓾𝓲𝓮𝓻𝓸</span>
              <span>★ Mi equipo ★</span>
              <span>『Mis recuerdos』</span>
            </div>
            <p className="mb-4 text-gray-700">
              Para textos extensos, prioriza la claridad.
            </p>
            <p className="text-gray-700">
              Si vas a diseñar un cartel, una presentación o una invitación para imprimir, quizá te convenga utilizar una fuente tipográfica instalada. Los caracteres Unicode decorativos no ofrecen el mismo control de espaciado, tamaño y composición que un programa de diseño.
            </p>
          </section>

          {/* Section: Cómo elegir el mejor modelo de letra */}
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Cómo elegir el mejor modelo de letra
            </h2>
            <p className="mb-6 text-gray-700">
              La elección depende de tres factores: el propósito, la legibilidad y el lugar donde vas a utilizar el texto.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-gray-200 text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-3 px-4 font-semibold text-gray-800 border-r border-gray-200">Necesidad</th>
                    <th className="py-3 px-4 font-semibold text-gray-800 border-r border-gray-200">Modelo recomendado</th>
                    <th className="py-3 px-4 font-semibold text-gray-800">Motivo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">Nombre elegante</td>
                    <td className="py-2.5 px-4 text-gray-800 border-r border-gray-200">Cursiva suave</td>
                    <td className="py-2.5 px-4 text-gray-600">Apariencia delicada</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">Nick de juego</td>
                    <td className="py-2.5 px-4 text-gray-800 border-r border-gray-200">Gótico o negrita</td>
                    <td className="py-2.5 px-4 text-gray-600">Mayor presencia visual</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">Biografía minimalista</td>
                    <td className="py-2.5 px-4 text-gray-800 border-r border-gray-200">Moderno o aesthetic</td>
                    <td className="py-2.5 px-4 text-gray-600">Diseño limpio</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">Frase decorativa</td>
                    <td className="py-2.5 px-4 text-gray-800 border-r border-gray-200">Cursiva con pocos símbolos</td>
                    <td className="py-2.5 px-4 text-gray-600">Equilibrio visual</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">Título corto</td>
                    <td className="py-2.5 px-4 text-gray-800 border-r border-gray-200">Negrita</td>
                    <td className="py-2.5 px-4 text-gray-600">Fácil de destacar</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">Mensaje largo</td>
                    <td className="py-2.5 px-4 text-gray-800 border-r border-gray-200">Texto normal</td>
                    <td className="py-2.5 px-4 text-gray-600">Mejor lectura</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-medium text-gray-700 border-r border-gray-200">Cartel para imprimir</td>
                    <td className="py-2.5 px-4 text-gray-800 border-r border-gray-200">Fuente tipográfica</td>
                    <td className="py-2.5 px-4 text-gray-600">Mayor control del diseño</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4 mt-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Prioriza la legibilidad</h3>
                <p className="text-gray-700 text-sm">
                  Un modelo puede parecer muy atractivo en una palabra corta y resultar difícil de leer en una frase larga. Prueba el texto completo antes de elegirlo.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Ten en cuenta los acentos</h3>
                <p className="text-gray-700 text-sm">
                  Si escribes en español, utiliza ejemplos con ñ, á, é, í, ó y ú para comprobar el comportamiento del modelo. No aceptes una conversión que cambie una palabra importante sin avisarte.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Compara varias opciones</h3>
                <p className="text-gray-700 text-sm">
                  Cuando dos modelos te gusten, colócalos uno junto al otro. Observa el grosor, la separación, la altura y la claridad de las letras. La mejor elección no siempre es la más decorada.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Evita combinar demasiados estilos</h3>
                <p className="text-gray-700 text-sm">
                  Usar cursiva, gótica, símbolos y caracteres especiales en una sola palabra puede crear un resultado confuso. Para una composición equilibrada, empieza con un modelo principal y añade detalles solo cuando aporten algo.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Diferencia entre modelos de letras, fuentes y tipografías */}
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Diferencia entre modelos de letras, fuentes y tipografías
            </h2>
            <p className="mb-4 text-gray-700">
              Aunque estos términos se utilizan a veces como sinónimos, conviene distinguirlos.
            </p>
            <p className="mb-3 text-gray-700">
              Un modelo de letra puede ser un ejemplo visual de cómo escribir o presentar caracteres.
            </p>
            <p className="mb-3 text-gray-700">
              Una fuente tipográfica es un conjunto de diseños de caracteres utilizado por programas y sistemas para mostrar texto.
            </p>
            <p className="mb-4 text-gray-700">
              Una tipografía se relaciona con el diseño y la organización visual de las letras y el texto.
            </p>
            <p className="mb-4 text-gray-700">
              En los generadores de copiar y pegar, muchos resultados se crean mediante caracteres Unicode especiales. No estás instalando una fuente nueva.
            </p>
            <p className="mb-4 text-gray-700">
              Por ejemplo, 𝐀 y A son caracteres distintos, aunque visualmente representen una letra similar.
            </p>
            <p className="mb-4 text-gray-700">
              Esta diferencia explica por qué puedes copiar determinados estilos de una página web y pegarlos en otra aplicación sin instalar archivos tipográficos.
            </p>
            <p className="text-gray-700">
              También explica por qué algunos resultados pueden tener problemas de compatibilidad o accesibilidad.
            </p>
          </section>

          {/* Section: Modelos de letras para dibujar y escribir a mano */}
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Modelos de letras para dibujar y escribir a mano
            </h2>
            <p className="mb-6 text-gray-700">
              La expresión modelos de letras también puede referirse a ejemplos para practicar caligrafía, dibujar títulos o decorar cuadernos. En ese caso, la necesidad es diferente a copiar caracteres Unicode.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modelos para practicar caligrafía</h3>
                <p className="text-gray-700 mb-2">
                  Si quieres mejorar tu escritura manual, puedes observar la forma de las letras, su inclinación, altura y separación.
                </p>
                <p className="text-gray-700 mb-2">
                  Empieza con trazos sencillos y practica primero las letras que utilizas con más frecuencia.
                </p>
                <p className="text-gray-700">
                  Un alfabeto de referencia puede servir como inspiración, pero no sustituye una guía de práctica de escritura.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modelos para carteles</h3>
                <p className="text-gray-700 mb-2">
                  Para carteles hechos a mano, las letras gruesas y de contorno suelen ser fáciles de adaptar. Puedes dibujar una letra grande, añadir volumen o rellenarla con un patrón.
                </p>
                <p className="text-gray-700">
                  Si el cartel se va a imprimir, utiliza un editor que permita controlar el tamaño real y la distribución del texto.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modelos para decorar cuadernos</h3>
                <p className="text-gray-700 mb-2">
                  Las letras de burbuja, los títulos en negrita y los marcos sencillos pueden servir como ideas. Lo importante es que el resultado sea legible y se adapte al espacio disponible.
                </p>
                <p className="text-gray-700">
                  Los modelos de esta página ofrecen inspiración visual, pero el generador está pensado principalmente para texto digital que puedes copiar y pegar.
                </p>
              </div>
            </div>
          </section>

          {/* Section: ¿Qué pasa con la ñ y las letras con tilde? */}
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              ¿Qué pasa con la ñ y las letras con tilde?
            </h2>
            <p className="mb-4 text-gray-700">
              Los alfabetos decorativos de Unicode no siempre incluyen versiones estilizadas directas de todos los caracteres del español. Por ejemplo, una palabra como niño o corazón puede contener letras que necesitan un tratamiento especial.
            </p>
            <p className="mb-4 text-gray-700">
              Algunos conversores conservan la letra original. Otros utilizan una letra transformada acompañada de una marca de acento. Ambas soluciones pueden presentar diferencias visuales según el dispositivo.
            </p>
            <p className="mb-4 text-gray-700">
              Lo importante es que el generador no elimine silenciosamente la ñ o las tildes. Si una palabra no puede representarse de forma fiel, conviene mostrar una advertencia y ofrecer una alternativa.
            </p>
            <p className="text-gray-700">
              Para nombres propios, esta precaución es especialmente importante.
            </p>
          </section>

          {/* Section: ¿Por qué algunos modelos no se ven correctamente? */}
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué algunos modelos no se ven correctamente?
            </h2>
            <p className="mb-4 text-gray-700">
              La apariencia de un carácter depende de las fuentes disponibles y del sistema que lo representa. Aunque puedas copiar un símbolo, no significa que todos los dispositivos lo mostrarán exactamente igual.
            </p>
            <p className="mb-3 text-gray-700 font-medium">Los problemas más comunes son:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
              <li>Letras que aparecen como cuadros vacíos.</li>
              <li>Diferencias de altura entre caracteres.</li>
              <li>Espacios inesperados.</li>
              <li>Acentos que parecen desalineados.</li>
              <li>Campos de texto que rechazan ciertos símbolos.</li>
            </ul>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Qué hacer si aparece un cuadro vacío</h3>
                <p className="text-gray-700 text-sm">
                  Prueba un modelo más sencillo. Las letras en negrita o algunas variantes modernas pueden resultar más prácticas que diseños con símbolos poco comunes, aunque la compatibilidad debe comprobarse en cada caso.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Qué hacer si los acentos se ven extraños</h3>
                <p className="text-gray-700 text-sm">
                  Revisa el texto original y compara otro modelo. No elimines automáticamente los acentos si eso cambia la escritura de la palabra.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Qué hacer si no puedes pegar el texto</h3>
                <p className="text-gray-700 text-sm">
                  Comprueba que el campo de destino permita introducir esos caracteres. También puedes copiar una palabra más corta para identificar qué parte del diseño causa el problema.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Consejos para crear tus propios diseños de letras */}
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Consejos para crear tus propios diseños de letras
            </h2>
            <p className="mb-6 text-gray-700">
              Una vez que hayas encontrado un modelo, puedes personalizarlo con pequeños detalles.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Combina un modelo con un marco</h3>
                <div className="bg-gray-50 rounded-lg p-3 my-2 text-sm text-gray-800 font-mono flex flex-wrap gap-4">
                  <span>『𝐋𝐮𝐧𝐚』</span>
                  <span>꧁ 𝓐𝓶𝓸𝓻 ꧂</span>
                  <span>✦ 𝗠𝗮𝘁𝗲𝗼 ✦</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Utiliza separadores sencillos</h3>
                <p className="text-gray-700 mb-2">Los separadores ayudan a organizar nombres o frases.</p>
                <div className="bg-gray-50 rounded-lg p-3 my-2 text-sm text-gray-800 font-mono flex flex-wrap gap-4">
                  <span>Luna · Arte</span>
                  <span>Amor ✦ Vida</span>
                  <span>Sol ♡ Mar</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Crea versiones alternativas</h3>
                <p className="text-gray-700">
                  Guarda dos o tres modelos de tu nombre. Puedes utilizar uno para tu biografía, otro para una publicación y otro para un apodo. No necesitas usar el mismo diseño en todas partes.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mantén una versión normal</h3>
                <p className="text-gray-700">
                  Conserva siempre el texto original. Así podrás volver a escribirlo, buscarlo o compartirlo sin depender de caracteres decorativos.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Preguntas frecuentes sobre modelos de letras */}
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Preguntas frecuentes sobre modelos de letras
            </h2>
            <div className="space-y-6 divide-y divide-gray-100">
              <div className="pt-4 first:pt-0">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ¿Dónde puedo encontrar modelos de letras bonitas?
                </h3>
                <p className="text-gray-700">
                  Puedes explorar la galería de LetrasBonitas, escribir tu nombre y comparar diferentes modelos de letras cursivas, góticas, modernas, aesthetic y decoradas.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ¿Cómo copiar un modelo de letra?
                </h3>
                <p className="text-gray-700">
                  Escribe tu texto, selecciona el modelo que prefieras y pulsa Copiar. Después pégalo en el campo de texto compatible.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ¿Los modelos de letras son gratis?
                </h3>
                <p className="text-gray-700">
                  El generador de esta página está planteado como una herramienta gratuita, sin registro ni instalación.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ¿Puedo usar modelos de letras en mi nombre de Instagram?
                </h3>
                <p className="text-gray-700">
                  Puedes probarlos en campos que admitan esos caracteres. El nombre visible y el identificador de usuario pueden tener restricciones diferentes.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ¿Cuál es el mejor modelo de letra para un nombre?
                </h3>
                <p className="text-gray-700">
                  Depende del resultado que busques. Las cursivas ofrecen una apariencia elegante, las negritas destacan y los modelos modernos suelen ser más discretos.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ¿Hay modelos de letras para copiar desde el celular?
                </h3>
                <p className="text-gray-700">
                  Sí. Puedes utilizar el generador desde el navegador del móvil, elegir un modelo y copiar el resultado.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ¿Puedo encontrar modelos de letras para dibujar?
                </h3>
                <p className="text-gray-700">
                  Los ejemplos de la galería pueden servir como inspiración visual. Para practicar escritura manual o crear letras imprimibles, una plantilla de caligrafía o un editor de diseño ofrece herramientas más adecuadas.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ¿Por qué algunos modelos no cambian la ñ?
                </h3>
                <p className="text-gray-700">
                  Porque no todos los alfabetos Unicode decorativos incluyen equivalentes directos para los caracteres españoles. Conservar la ñ puede ser más correcto que sustituirla por otra letra.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ¿Todos los modelos funcionan en Free Fire?
                </h3>
                <p className="text-gray-700">
                  No se puede garantizar. La aceptación de caracteres depende de las reglas del juego y del campo donde quieras utilizar el nombre.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ¿Cuál es la diferencia entre tipos y modelos de letras?
                </h3>
                <p className="text-gray-700">
                  Los tipos de letras permiten clasificar familias visuales, como cursivas o góticas. Los modelos son ejemplos concretos que puedes comparar, personalizar y elegir.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Conclusión */}
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Conclusión
            </h2>
            <p className="mb-4 text-gray-700">
              Los modelos de letras te permiten explorar distintas formas de presentar un nombre, una frase o un título. Puedes elegir entre diseños elegantes, modernos, góticos, redondeados y decorados según el resultado que quieras conseguir.
            </p>
            <p className="text-gray-700">
              Prueba tu propio texto en el explorador de LetrasBonitas, compara los modelos y copia el que mejor se adapte a tu objetivo. Si lo vas a utilizar en una aplicación o un juego, comprueba primero que todos los caracteres se muestran correctamente.
            </p>
          </section>

          {/* Section: Páginas y recursos relacionados */}
          <section className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Recursos y generadores relacionados
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mb-6">
              Si deseas profundizar en estilos específicos o generar combinaciones para plataformas concretas, explora nuestras guías y herramientas dedicadas:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                href="/conversor-de-letras/"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all block group"
              >
                <span className="font-semibold text-gray-900 group-hover:text-purple-600 block mb-1">
                  Conversor de Letras
                </span>
                <span className="text-xs text-gray-500">
                  Transforma texto con cientos de estilos Unicode instantáneos.
                </span>
              </Link>
              <Link
                href="/letras-cursivas/"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all block group"
              >
                <span className="font-semibold text-gray-900 group-hover:text-purple-600 block mb-1">
                  Letras Cursivas
                </span>
                <span className="text-xs text-gray-500">
                  Modelos caligráficos fluidos para nombres y dedicatorias.
                </span>
              </Link>
              <Link
                href="/letras-negritas/"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all block group"
              >
                <span className="font-semibold text-gray-900 group-hover:text-purple-600 block mb-1">
                  Letras Negritas
                </span>
                <span className="text-xs text-gray-500">
                  Caracteres gruesos y sans-serif de alto impacto visual.
                </span>
              </Link>
              <Link
                href="/letras-goticas/"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all block group"
              >
                <span className="font-semibold text-gray-900 group-hover:text-purple-600 block mb-1">
                  Letras Góticas
                </span>
                <span className="text-xs text-gray-500">
                  Estilos medievales y Fraktur para nicks y títulos oscuros.
                </span>
              </Link>
              <Link
                href="/letras-aesthetic/"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all block group"
              >
                <span className="font-semibold text-gray-900 group-hover:text-purple-600 block mb-1">
                  Letras Aesthetic
                </span>
                <span className="text-xs text-gray-500">
                  Composiciones suaves con caracteres espaciados y símbolos.
                </span>
              </Link>
              <Link
                href="/letras-burbuja/"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all block group"
              >
                <span className="font-semibold text-gray-900 group-hover:text-purple-600 block mb-1">
                  Letras Burbuja
                </span>
                <span className="text-xs text-gray-500">
                  Caracteres circulares y redondeados para títulos destacados.
                </span>
              </Link>
              <Link
                href="/letras-para-instagram/"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all block group"
              >
                <span className="font-semibold text-gray-900 group-hover:text-purple-600 block mb-1">
                  Letras para Instagram
                </span>
                <span className="text-xs text-gray-500">
                  Diseños adaptados para biografías, estados e historias.
                </span>
              </Link>
              <Link
                href="/nombres-para-free-fire/"
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all block group"
              >
                <span className="font-semibold text-gray-900 group-hover:text-purple-600 block mb-1">
                  Nombres para Free Fire
                </span>
                <span className="text-xs text-gray-500">
                  Modelos decorados y símbolos compatibles con juegos.
                </span>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
