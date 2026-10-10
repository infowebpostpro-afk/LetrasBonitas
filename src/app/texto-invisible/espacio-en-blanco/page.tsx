import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { EspacioEnBlancoTool } from "@/components/font-generator/EspacioEnBlancoTool";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Espacio en Blanco para Copiar y Pegar | LetrasBonitas",
  description:
    "Copia espacios en blanco en un clic. Elige caracteres Unicode, genera la cantidad que necesitas y comprueba el resultado fácilmente.",
  alternates: {
    canonical: `${SITE_URL}/texto-invisible/espacio-en-blanco/`,
  },
  openGraph: {
    title: "Espacio en Blanco para Copiar y Pegar | LetrasBonitas",
    description:
      "Copia espacios en blanco en un clic. Elige caracteres Unicode, genera la cantidad que necesitas y comprueba el resultado fácilmente.",
    url: `${SITE_URL}/texto-invisible/espacio-en-blanco/`,
    siteName: "LetrasBonitas",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Espacio en Blanco para Copiar y Pegar | LetrasBonitas",
    description:
      "Herramienta interactiva para copiar espacios en blanco, elegir ancho tipográfico y generar secuencias invisibles.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EspacioEnBlancoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/texto-invisible/espacio-en-blanco/#webpage`,
        url: `${SITE_URL}/texto-invisible/espacio-en-blanco/`,
        name: "Espacio en Blanco para Copiar y Pegar",
        description:
          "Copia espacios en blanco en un clic. Elige caracteres Unicode, genera la cantidad que necesitas y comprueba el resultado fácilmente.",
        isPartOf: {
          "@type": "WebSite",
          name: "LetrasBonitas",
          url: `${SITE_URL}/`,
        },
        inLanguage: "es-ES",
      },
      {
        "@type": "WebApplication",
        "@id": `${SITE_URL}/texto-invisible/espacio-en-blanco/#tool`,
        name: "Herramienta de Espacio en Blanco de LetrasBonitas",
        url: `${SITE_URL}/texto-invisible/espacio-en-blanco/`,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        browserRequirements:
          "Requiere JavaScript para la copia interactiva al portapapeles y la vista previa de espaciado",
        description:
          "Utilidad para copiar espacios en blanco, generar secuencias con caracteres Unicode y verificar la anchura visual entre palabras.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/texto-invisible/espacio-en-blanco/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Texto Invisible",
            item: `${SITE_URL}/texto-invisible/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Espacio en Blanco",
            item: `${SITE_URL}/texto-invisible/espacio-en-blanco/`,
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

      <main className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Texto Invisible", href: "/texto-invisible/" },
              { label: "Espacio en Blanco" },
            ]}
          />

          {/* Above-the-fold Hero */}
          <header className="text-center mt-6 mb-4 max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/80">
              Utilidad de Espaciado Unicode
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Espacio en Blanco para Copiar y Pegar
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Copia un espacio en blanco en un clic. Elige el tipo de carácter, ajusta la cantidad y comprueba el resultado.
            </p>
          </header>

          {/* Primary Interactive SaaS Tool */}
          <EspacioEnBlancoTool />

          {/* Supporting Article Section */}
          <article className="mt-16 max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 lg:p-12 space-y-12">
            {/* PAS Introduction */}
            <section className="p-6 bg-gradient-to-br from-teal-50/70 via-white to-slate-50 rounded-2xl border border-teal-100/80 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                El problema de los espacios que desaparecen al pegar
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Intentar colocar un espacio en blanco en una red social, en el apodo de un videojuego o en un formulario web suele terminar en frustración. Al pulsar la barra espaciadora del teclado varias veces seguidas o al intentar dejar un campo vacío con espacios ordinarios, la mayoría de plataformas ejecutan filtros automáticos que eliminan los espacios sobrantes o rechazan el envío por considerarlo un texto en blanco sin contenido.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Esta situación ocurre porque el espacio convencional del teclado (ASCII 32 o U+0020) está programado para ser colapsado y limpiado por algoritmos estándar de recorte. En LetrasBonitas hemos desarrollado esta herramienta especializada para que puedas copiar glifos Unicode alternativos, como el Relleno Hangul (U+3164) o el Patrón Braille (U+2800), generar la cantidad exacta que necesitas y comprobar de forma visual cómo separan tus palabras antes de pegarlos en tu destino final.
              </p>
            </section>

            {/* Section 1: Qué es un espacio en blanco para copiar y pegar */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                ¿Qué es un espacio en blanco para copiar y pegar?
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Un espacio en blanco para copiar y pegar es un carácter tipográfico o símbolo estandarizado dentro del consorcio Unicode que ocupa una posición en la memoria digital pero carece de trazo de tinta visible. A diferencia de una casilla completamente vacía (una cadena de texto de longitud cero), este tipo de carácter posee un punto de código hexadecimal asignado, ocupa bytes reales en memoria y es interpretado por el ordenador como un dato presente.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                La distinción fundamental entre un campo verdaderamente vacío y un espacio en blanco reside en la validación técnica:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                <li>
                  <strong className="text-slate-900">Campo vacío (longitud 0):</strong> No contiene ningún byte de información. Si un formulario requiere obligatoriamente un nombre o un mensaje, devolverá un error de campo requerido.
                </li>
                <li>
                  <strong className="text-slate-900">Espacio ordinario (U+0020):</strong> Contiene información, pero la gran mayoría de lenguajes de programación aplican la función de recorte (trim) al inicio y al final de las cadenas, borrándolo antes de guardarlo en la base de datos.
                </li>
                <li>
                  <strong className="text-slate-900">Espacio en blanco especial (U+3164 o U+2800):</strong> Es un carácter formalmente catalogado como letra o símbolo. Al no compartir la propiedad de espacio en blanco ordinario, muchas aplicaciones no lo reconocen como algo a eliminar y permiten guardar el perfil o publicar el mensaje con apariencia limpia.
                </li>
              </ul>
            </section>

            {/* Section 2: Cómo copiar y pegar un espacio en blanco */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Cómo copiar y pegar un espacio en blanco
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Nuestra aplicación interactiva superior te proporciona tres métodos directos para obtener exactamente el resultado que buscas, adaptándose tanto a ordenadores de escritorio como a teléfonos móviles Android o iPhone.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-600 text-white font-bold flex items-center justify-center text-sm">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Copiar un solo espacio en un clic
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Dirígete a la pestaña <em>Copiar Rápido</em> y pulsa el botón principal <em>Copiar espacio en blanco</em>. El carácter predeterminado (U+3164) se transferirá de inmediato al portapapeles de tu dispositivo con confirmación visual en pantalla.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Generar múltiples espacios personalizados
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Si necesitas una separación más extensa, accede a la pestaña <em>Generador</em>. Elige entre los botones rápidos (1, 5, 10, 20, 50 o 100) o teclea una cantidad entre 1 y 500 para generar una cadena uniforme y copiarla al instante.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-600 text-white font-bold flex items-center justify-center text-sm">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Visualizar y comprobar el resultado
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Utiliza la pestaña <em>Vista Previa</em> para comprobar cómo separa dos palabras reales (como Hola y Mundo) o acude a la pestaña <em>Comprobador</em> para pegar tu contenido y verificar el recuento exacto de puntos de código.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Tipos de espacios en blanco y caracteres Unicode */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Tipos de espacios en blanco y caracteres Unicode
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                El estándar Unicode clasifica los caracteres según sus propiedades semánticas y de renderizado. En la siguiente tabla técnica puedes consultar las particularidades de cada opción integrada en nuestra herramienta:
              </p>

              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100/80 font-bold text-slate-800">
                    <tr>
                      <th className="py-3.5 px-4">Carácter</th>
                      <th className="py-3.5 px-4 font-mono">Unicode</th>
                      <th className="py-3.5 px-4">Ancho Visual</th>
                      <th className="py-3.5 px-4">Uso Recomendado</th>
                      <th className="py-3.5 px-4">Limitación Conocida</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">Relleno Hangul</td>
                      <td className="py-3 px-4 font-mono font-bold text-teal-700">U+3164</td>
                      <td className="py-3 px-4">Ancho completo de glifo</td>
                      <td className="py-3 px-4">Nicks en Free Fire, apodos en juegos y nombres en blanco</td>
                      <td className="py-3 px-4 text-xs text-slate-500">Algunas fuentes antiguas muestran una casilla vacía cuadrada</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">Patrón Braille vacío</td>
                      <td className="py-3 px-4 font-mono font-bold text-teal-700">U+2800</td>
                      <td className="py-3 px-4">Ancho de celda Braille</td>
                      <td className="py-3 px-4">Mensajes vacíos en WhatsApp, biografías de Instagram</td>
                      <td className="py-3 px-4 text-xs text-slate-500">Es un símbolo tipográfico, no un separador de palabras</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">Espacio em (ancho)</td>
                      <td className="py-3 px-4 font-mono font-bold text-teal-700">U+2003</td>
                      <td className="py-3 px-4">1 em (ancho de la M)</td>
                      <td className="py-3 px-4">Sangrías en biografías, separación estética amplia</td>
                      <td className="py-3 px-4 text-xs text-slate-500">Suele ser filtrado por validadores de texto estrictos</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">Espacio indivisible</td>
                      <td className="py-3 px-4 font-mono font-bold text-teal-700">U+00A0</td>
                      <td className="py-3 px-4">Igual al espacio normal</td>
                      <td className="py-3 px-4">Cifras con unidades, fechas que no deben partirse</td>
                      <td className="py-3 px-4 text-xs text-slate-500">Se comporta como espacio en formularios que aplican trim()</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">Espacio fino</td>
                      <td className="py-3 px-4 font-mono font-bold text-teal-700">U+2009</td>
                      <td className="py-3 px-4">Aprox. 1/5 de em</td>
                      <td className="py-3 px-4">Microseparación entre símbolos y puntuación</td>
                      <td className="py-3 px-4 text-xs text-slate-500">Apenas perceptible en pantallas de baja resolución</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">Espacio normal</td>
                      <td className="py-3 px-4 font-mono font-bold text-teal-700">U+0020</td>
                      <td className="py-3 px-4">Estándar teclado</td>
                      <td className="py-3 px-4">Redacción ordinaria entre palabras</td>
                      <td className="py-3 px-4 text-xs text-slate-500">Eliminado automáticamente en inicios y finales de texto</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">Espacio de ancho cero</td>
                      <td className="py-3 px-4 font-mono font-bold text-teal-700">U+200B</td>
                      <td className="py-3 px-4">0 píxeles (sin ancho)</td>
                      <td className="py-3 px-4">Puntos de corte permisible sin separación visible</td>
                      <td className="py-3 px-4 text-xs text-slate-500">No añade ninguna separación visible entre palabras</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Diferencia entre espacio normal, espacio invisible y ancho cero */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Diferencia entre espacio normal, espacio invisible y ancho cero
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Comprender la diferencia técnica entre estas tres categorías evita cometer errores al personalizar perfiles o formatear textos:
              </p>
              <div className="space-y-4 pt-1">
                <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-teal-500 space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">
                    1. Espacio normal (U+0020 y variantes tipográficas)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Tiene asignada la propiedad oficial White_Space=Yes en Unicode. Está diseñado específicamente para separar palabras en la lectura humana. Cuando un formulario web procesa una entrada, revisa este atributo y borra cualquier repetición innecesaria.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-indigo-500 space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">
                    2. Espacio invisible o visualmente en blanco (U+3164 y U+2800)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Tiene asignada la propiedad White_Space=No. Pertenece formalmente a categorías de letras o símbolos. Por tanto, para un servidor web no es un espacio en blanco, sino un carácter con valor propio. Visualmente, el motor gráfico no dibuja ninguna línea de tinta, produciendo la apariencia de un espacio perfecto.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-amber-500 space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">
                    3. Carácter de ancho cero (U+200B)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    No posee anchura visual alguna (0 píxeles). Aunque copies 100 caracteres de este tipo y los coloques entre dos palabras, ambas palabras seguirán viéndose completamente unidas. Su utilidad radica en marcar lugares donde el texto puede dividirse si llega al borde de la pantalla.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Cómo generar espacios en blanco largos */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Cómo generar espacios en blanco largos
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Para conseguir una separación amplia en una biografía, en un estado o en un documento, existen dos estrategias técnicas distintas: aumentar la cantidad de caracteres repetidos o elegir un carácter de mayor anchura individual.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Si utilizas el <strong className="text-slate-900">Espacio em (U+2003)</strong>, un solo carácter equivale al ancho de dos o tres espacios convencionales. Por otra parte, si necesitas una distancia aún mayor, nuestro generador te permite multiplicar el <strong className="text-slate-900">Relleno Hangul (U+3164)</strong> por 10, 20 o 50 repeticiones.
              </p>
              <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-200/80 text-xs sm:text-sm text-teal-950">
                <span className="font-bold block mb-1">Dato sobre recuento de bytes:</span>
                Ten presente que cada carácter Unicode ocupa entre 1 y 3 bytes en memoria (U+3164 ocupa 3 bytes por unidad). Si una plataforma tiene un límite máximo de 16 caracteres para tu nombre, generar 10 caracteres en blanco consumirá 10 posiciones de ese límite.
              </div>
            </section>

            {/* Section 6: Cómo separar palabras, nombres y símbolos */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Cómo separar palabras, nombres y símbolos
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Al diseñar firmas estéticas, apodos competitivos o composiciones para redes sociales, el espaciado adecuado marca la diferencia entre un texto apelmazado y un diseño equilibrado:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                <li>
                  <strong className="text-slate-900">Microespaciado entre símbolos:</strong> Si utilizas caracteres decorativos como estrellas (✦, ★) o cruces, insertar un <em>Espacio fino (U+2009)</em> entre el símbolo y tu nombre crea una separación armónica sin generar un vacío excesivo.
                </li>
                <li>
                  <strong className="text-slate-900">Separación en nombres de clanes:</strong> Para separar el prefijo de tu clan de tu nombre principal sin usar barras o guiones, el <em>Relleno Hangul (U+3164)</em> genera un espacio limpio que la mayoría de motores de videojuegos admiten sin conflicto.
                </li>
                <li>
                  <strong className="text-slate-900">Comprobación visual previa:</strong> Antes de gastar diamantes o tarjetas de cambio de nombre, aprovecha la sección de <em>Vista Previa</em> de nuestra herramienta para escribir tu prefijo a la izquierda y tu apodo a la derecha, confirmando exactamente cómo lucirá la separación.
                </li>
              </ul>
            </section>

            {/* Section 7: Espacios en blanco para WhatsApp e Instagram */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Espacios en blanco para WhatsApp e Instagram
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Tanto WhatsApp como Instagram cuentan con mecanismos para impedir el envío de mensajes o publicaciones totalmente vacías:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    Uso en WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Si intentas enviar un mensaje pulsando la barra espaciadora ordinaria, el botón de enviar permanece deshabilitado. Si copias un <em>Relleno Hangul (U+3164)</em> o un <em>Patrón Braille vacío (U+2800)</em> y lo pegas en el campo de texto, WhatsApp detectará un carácter válido y activará el botón verde de envío, permitiéndote enviar un mensaje completamente en blanco o colocar saltos de línea limpios en tu estado.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    Uso en Instagram
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    En la biografía o en los pies de foto de Instagram, los saltos de línea normales suelen colapsar y juntar los párrafos. Pegar un espacio invisible al inicio de una línea vacía impide dicho colapso y preserva el salto de línea estilizado que planificaste para tu perfil.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Espacio en blanco para Free Fire y otros juegos */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Espacio en blanco para Free Fire y otros juegos
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                En videojuegos competitivos como Free Fire, PUBG Mobile, Roblox o Call of Duty Mobile, los jugadores buscan con frecuencia utilizar nombres invisibles o separar letras sin que el juego lo rechace con el mensaje de nombre no válido.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                El carácter más contrastado y utilizado históricamente para este propósito es el <strong className="text-slate-900">Relleno Hangul (U+3164)</strong>. Como pertenece a la categoría de letras, el validador del juego lo procesa habitualmente como si fuera una letra alfabética convencional.
              </p>
              <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200/80 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold block">Aviso de responsabilidad en videojuegos:</span>
                Los desarrolladores de videojuegos actualizan con regularidad sus filtros de nombres para combatir cuentas anónimas. Aunque U+3164 suele funcionar ampliamente, ningún carácter garantiza compatibilidad perpetua si la desarrolladora decide filtrar de forma estricta los bloques Hangul o Braille en sus servidores.
              </div>
            </section>

            {/* Section 9: Por qué desaparecen algunos espacios al pegar */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Por qué desaparecen algunos espacios al pegar
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Cuando copias un espacio y desaparece al pegarlo en otra aplicación, no se debe a un error de tu portapapeles, sino a procesos automatizados del software receptor:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                <li>
                  <strong className="text-slate-900">Recorte o función trim():</strong> Prácticamente todos los sistemas de autenticación y bases de datos aplican funciones que eliminan cualquier carácter de espacio situado al principio o al final de un texto introducido por el usuario.
                </li>
                <li>
                  <strong className="text-slate-900">Normalización Unicode:</strong> Muchos sistemas convierten el texto entrante a formas normalizadas (NFC o NFKC). Bajo estas reglas, caracteres tipográficos especiales como el espacio indivisible (U+00A0) pueden ser transformados automáticamente en un espacio ordinario (U+0020) y luego recortados.
                </li>
                <li>
                  <strong className="text-slate-900">Filtros de expresiones regulares:</strong> Algunas aplicaciones restringen los campos únicamente a letras básicas y números (caracteres alfanuméricos ASCII), eliminando cualquier carácter que no pertenezca a ese rango específico.
                </li>
              </ul>
            </section>

            {/* Section 10: Cómo comprobar si un texto contiene espacios invisibles */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Cómo comprobar si un texto contiene espacios invisibles
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Como los espacios en blanco no tienen trazo visual, resulta imposible distinguir a simple vista si un hueco en tu pantalla está compuesto por un espacio normal, tres espacios finos o un relleno Hangul.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Para resolver este problema, hemos incluido en nuestra herramienta la pestaña <strong className="text-slate-900">Comprobador</strong>. Solo tienes que pegar cualquier texto en su área interactiva. El algoritmo desglosará de forma inmediata:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                <li>El número exacto de puntos de código Unicode individuales que componen el texto.</li>
                <li>El volumen en bytes codificados en formato UTF-8.</li>
                <li>La identificación precisa de cada carácter especial o espacio en blanco detectado, con su nombre en español y su código hexadecimal.</li>
              </ul>
            </section>

            {/* Section 11: Qué espacio en blanco elegir según lo que necesitas */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Qué espacio en blanco elegir según lo que necesitas
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Utiliza la siguiente guía rápida de decisión para seleccionar el carácter más adecuado según tu objetivo:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-teal-700 uppercase">Objetivo</span>
                  <h3 className="font-bold text-slate-900 text-sm">Nombre o apodo invisible en juegos</h3>
                  <p className="text-xs text-slate-600">
                    <strong>Elección:</strong> Relleno Hangul (U+3164). Al estar tipificado como letra, evade la función trim() en la gran mayoría de títulos multijugador.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-teal-700 uppercase">Objetivo</span>
                  <h3 className="font-bold text-slate-900 text-sm">Mensaje vacío o estado en WhatsApp</h3>
                  <p className="text-xs text-slate-600">
                    <strong>Elección:</strong> Patrón Braille vacío (U+2800) o Relleno Hangul (U+3164). Ambos habilitan el botón de envío sin mostrar caracteres en el globo de chat.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-teal-700 uppercase">Objetivo</span>
                  <h3 className="font-bold text-slate-900 text-sm">Separación amplia o sangría en biografías</h3>
                  <p className="text-xs text-slate-600">
                    <strong>Elección:</strong> Espacio em (U+2003). Proporciona un ancho amplio equivalente a un cuadratín tipográfico para alinear texto con estilo.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-teal-700 uppercase">Objetivo</span>
                  <h3 className="font-bold text-slate-900 text-sm">Separar símbolos estéticos sin hueco exagerado</h3>
                  <p className="text-xs text-slate-600">
                    <strong>Elección:</strong> Espacio fino (U+2009). Aporta una microdistancia tipográfica refinada entre emojis, símbolos y letras.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-teal-700 uppercase">Objetivo</span>
                  <h3 className="font-bold text-slate-900 text-sm">Evitar que una cifra y su unidad se dividan</h3>
                  <p className="text-xs text-slate-600">
                    <strong>Elección:</strong> Espacio indivisible (U+00A0). Mantiene unidos términos como 100 km o 50 € en una sola línea de texto.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-teal-700 uppercase">Objetivo</span>
                  <h3 className="font-bold text-slate-900 text-sm">Puntos de corte invisibles en palabras largas</h3>
                  <p className="text-xs text-slate-600">
                    <strong>Elección:</strong> Espacio de ancho cero (U+200B). No añade anchura visual alguna pero permite saltos de línea suaves si es necesario.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12: Errores frecuentes y cómo solucionarlos */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Errores frecuentes y cómo solucionarlos
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">
                    1. El botón de copiar no transfiere el espacio al pulsar
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    En algunos navegadores móviles con permisos estrictos de portapapeles, la función automática puede quedar bloqueada. Pulsa el botón de <em>Selección manual</em> en la herramienta para marcar el campo y copiarlo con el menú de tu sistema operativo.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">
                    2. La plataforma de destino elimina el espacio al guardar
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Si utilizaste el espacio normal o indivisible, es muy probable que la función trim() lo haya borrado. Cambia a la opción <em>Relleno Hangul (U+3164)</em> o <em>Patrón Braille (U+2800)</em> e inténtalo nuevamente.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">
                    3. El videojuego dice que el nombre contiene caracteres no permitidos
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Ciertos juegos bloquean el bloque Braille. Si U+2800 falla, prueba con U+3164. Si ambos son rechazados, el juego puede requerir al menos una letra visible en el apodo.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">
                    4. El carácter copiado aparece como un cuadrado con interrogante
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Este síntoma (conocido como tofu) se produce cuando la fuente tipográfica instalada en tu dispositivo no incluye soporte para el bloque Hangul o Braille. En la gran mayoría de dispositivos modernos se visualiza correctamente como un espacio limpio.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">
                    5. El texto parece no cambiar al pegar el espacio de ancho cero
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    El carácter U+200B posee 0 píxeles de anchura por definición. No añade separación visible. Si necesitas que tus palabras se separen visualmente, utiliza el espacio em, el espacio normal o el relleno Hangul.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">
                    6. La cantidad de espacios generada no coincide con el ancho en pantalla
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Las fuentes proporcionales renderizan los espacios con anchuras distintas según el tamaño de letra configurado en cada pantalla. Recuerda que cantidad de caracteres y ancho en píxeles son conceptos independientes.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">
                    7. Se genera un salto de línea imprevisto en dispositivos móviles
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Si concatenas muchos caracteres de espacio en una pantalla estrecha, el navegador forzará un salto de línea. Utiliza el <em>Espacio indivisible (U+00A0)</em> para impedir particiones indeseadas.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 13: Preguntas frecuentes */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Preguntas frecuentes sobre el espacio en blanco
              </h2>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Cómo copiar un espacio en blanco desde el teléfono móvil?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Abre esta página en el navegador de tu móvil Android o iPhone, pulsa el botón verde <em>Copiar espacio en blanco</em> y verás la confirmación inmediata. Luego abre tu aplicación de destino, mantén el dedo pulsado sobre el campo de texto y selecciona <em>Pegar</em>.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Cuál es la diferencia entre espacio en blanco y texto invisible?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    El texto invisible abarca toda la gama de caracteres Unicode sin glifo visual (incluyendo caracteres de control, marcas de dirección y de ancho cero). Por su parte, el espacio en blanco se enfoca concretamente en crear separaciones de anchura definida entre palabras, sangrías o rellenos de longitud cuantificable.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Cómo copiar varios espacios en blanco seguidos?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Accede a la pestaña <em>Generador</em> en la parte superior, elige uno de los botones preestablecidos (como 5, 10 o 50 espacios) o escribe el número exacto que deseas y pulsa en copiar. Obtendrás una secuencia continua sin tener que pegar repetidamente.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Por qué no puedo pegar un espacio normal en mi nombre de usuario?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Los nombres de usuario en bases de datos suelen estar restringidos por reglas estrictas que prohíben la barra espaciadora ordinaria (U+0020). Utilizar un carácter como el Relleno Hangul (U+3164) suele funcionar porque el sistema lo interpreta como un carácter de texto y no como un separador prohibido.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Qué es exactamente un espacio de ancho cero?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Es el carácter Unicode U+200B. Ocupa un punto de código en la cadena de texto pero los motores gráficos le asignan un ancho visual de cero píxeles. Su función primordial es ofrecer puntos de ruptura para que las palabras muy largas puedan dividirse en varias líneas sin alterar la apariencia del texto continuo.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿El espacio en blanco funciona en Free Fire?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sí, miles de jugadores utilizan el Relleno Hangul (U+3164) para separar partes de su nick o colocar apodos en blanco en Free Fire. No obstante, te recomendamos comprobar siempre tu nombre en una tarjeta de prueba antes de gastar recursos definitivos, ya que las políticas del juego se actualizan periódicamente.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Cómo puedo saber si un texto copiado contiene caracteres invisibles?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pega el contenido en la sección <em>Comprobador</em> de esta misma página. Nuestro analizador inspeccionará cada punto de código individual y te mostrará el conteo detallado de caracteres visibles y caracteres especiales ocultos.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿El uso de espacios invisibles es seguro y gratuito?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Completamente seguro y gratuito. Todos los caracteres facilitados forman parte del estándar universal Unicode implementado en los sistemas operativos de todo el mundo. Nuestra herramienta se ejecuta íntegramente en tu navegador sin enviar tus textos a servidores externos.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 14: Enlaces internos y herramientas relacionadas */}
            <section className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Herramientas relacionadas en LetrasBonitas
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Complementa tu edición de texto con el resto de nuestras utilidades tipográficas gratuitas:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                <Link
                  href="/texto-invisible/"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-teal-500 hover:shadow-2xs transition-all group"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-teal-700 block">
                    Texto Invisible
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Generador y detector completo de caracteres invisibles.
                  </span>
                </Link>

                <Link
                  href="/texto-invisible/caracter-invisible/"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-teal-500 hover:shadow-2xs transition-all group"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-teal-700 block">
                    Carácter Invisible
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Catálogo de caracteres Unicode e inspector de texto oculto.
                  </span>
                </Link>

                <Link
                  href="/conversor-de-letras/"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-teal-500 hover:shadow-2xs transition-all group"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-teal-700 block">
                    Conversor de Letras
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Transforma tu texto con más de 100 estilos bonitos.
                  </span>
                </Link>

                <Link
                  href="/nombres-para-free-fire/"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-teal-500 hover:shadow-2xs transition-all group"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-teal-700 block">
                    Nombres para Free Fire
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Apodos insanos, símbolos para clanes y nicks para juegos.
                  </span>
                </Link>

                <Link
                  href="/simbolos/"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-teal-500 hover:shadow-2xs transition-all group"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-teal-700 block">
                    Símbolos y Decoraciones
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Colección de símbolos bonitos, aesthetic y especiales.
                  </span>
                </Link>

                <Link
                  href="/letras-para-instagram/"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-teal-500 hover:shadow-2xs transition-all group"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-teal-700 block">
                    Letras para Instagram
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Tipografías y formatos para tu biografía y publicaciones.
                  </span>
                </Link>

                <Link
                  href="/letras-para-whatsapp/"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-teal-500 hover:shadow-2xs transition-all group"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-teal-700 block">
                    Letras para WhatsApp
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Formatos, estilos y mensajes destacados para chats.
                  </span>
                </Link>
              </div>
            </section>

            {/* Conclusion */}
            <footer className="pt-6 border-t border-slate-100 text-slate-600 text-xs sm:text-sm space-y-3 leading-relaxed">
              <p>
                Disponer del carácter de espaciado correcto marca una diferencia notable a la hora de estructurar textos limpios y profesionales en cualquier entorno digital. Ya sea para separar elementos en tu apodo de juego favorito, crear sangrías personalizadas en redes sociales o evitar el recorte no deseado de tus mensajes, nuestra herramienta interactiva te permite resolverlo en pocos segundos.
              </p>
              <p>
                Sube al inicio de la página para copiar el espacio predeterminado o experimentar con la cantidad y el tipo de anchura que mejor se adapte a tu proyecto.
              </p>
            </footer>
          </article>
        </div>
      </main>
    </>
  );
}
