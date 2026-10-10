import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CaracterInvisibleTool } from "@/components/font-generator/CaracterInvisibleTool";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Carácter Invisible para Copiar y Pegar | LetrasBonitas",
  description:
    "Copia caracteres invisibles, explora sus códigos Unicode y detecta símbolos ocultos en cualquier texto con nuestra herramienta gratuita.",
  alternates: {
    canonical: `${SITE_URL}/texto-invisible/caracter-invisible/`,
  },
  openGraph: {
    title: "Carácter Invisible para Copiar y Pegar | LetrasBonitas",
    description:
      "Copia caracteres invisibles, explora sus códigos Unicode y detecta símbolos ocultos en cualquier texto con nuestra herramienta gratuita.",
    url: `${SITE_URL}/texto-invisible/caracter-invisible/`,
    siteName: "LetrasBonitas",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carácter Invisible para Copiar y Pegar | LetrasBonitas",
    description:
      "Herramienta para copiar caracteres invisibles individuales, explorar códigos Unicode y detectar caracteres ocultos en cualquier texto.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CaracterInvisiblePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/texto-invisible/caracter-invisible/#webpage`,
        url: `${SITE_URL}/texto-invisible/caracter-invisible/`,
        name: "Carácter Invisible para Copiar y Pegar",
        description:
          "Copia caracteres invisibles, explora sus códigos Unicode y detecta símbolos ocultos en cualquier texto con nuestra herramienta gratuita.",
        isPartOf: {
          "@type": "WebSite",
          name: "LetrasBonitas",
          url: `${SITE_URL}/`,
        },
        inLanguage: "es-ES",
      },
      {
        "@type": "WebApplication",
        "@id": `${SITE_URL}/texto-invisible/caracter-invisible/#tool`,
        name: "Explorador y Detector de Caracteres Invisibles de LetrasBonitas",
        url: `${SITE_URL}/texto-invisible/caracter-invisible/`,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        browserRequirements:
          "Requiere JavaScript para la copia interactiva al portapapeles y el análisis de caracteres",
        description:
          "Utilidad especializada para copiar caracteres invisibles individuales, inspeccionar puntos de código Unicode y detectar caracteres ocultos en textos pegados.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/texto-invisible/caracter-invisible/#breadcrumb`,
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
            name: "Carácter Invisible",
            item: `${SITE_URL}/texto-invisible/caracter-invisible/`,
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
              { label: "Carácter Invisible" },
            ]}
          />

          {/* Above-the-fold Hero */}
          <header className="text-center mt-6 mb-4 max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/80">
              Explorador y Detector Unicode
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Carácter Invisible para Copiar y Pegar
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Copia un carácter invisible en un clic, descubre su código Unicode y comprueba los caracteres ocultos en cualquier texto.
            </p>
          </header>

          {/* Primary Interactive Tool */}
          <CaracterInvisibleTool />

          {/* Supporting Article Section */}
          <article className="mt-16 max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 lg:p-12 space-y-12">
            {/* PAS Introduction */}
            <section className="p-6 bg-gradient-to-br from-teal-50/70 via-white to-slate-50 rounded-2xl border border-teal-100/80 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                La dificultad de identificar y manejar caracteres invisibles
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Los caracteres invisibles son elementos fascinantes pero con frecuencia desconcertantes del estándar digital. Al no poseer un trazo gráfico en pantalla, resulta sumamente difícil saber si un fragmento de texto copiado de internet contiene caracteres de ancho cero, símbolos de relleno o caracteres de control que provocan fallos de validación en formularios, errores de sintaxis en programación o comportamientos inesperados en aplicaciones móviles.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                En LetrasBonitas hemos diseñado este explorador y detector técnico para brindarte el control total sobre cada carácter individual. Aquí puedes seleccionar y copiar el carácter exacto que necesitas (como el Relleno Hangul U+3164 o el Espacio de ancho cero U+200B), comprender su propósito técnico y pegar cualquier texto para analizarlo token por token, revelando de forma inmediata cualquier carácter oculto.
              </p>
            </section>

            {/* Section 1: Qué es un carácter invisible */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                ¿Qué es un carácter invisible?
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Un carácter invisible es una entidad codificada dentro del estándar internacional Unicode que posee un punto de código hexadecimal asignado, consume bytes en la memoria del ordenador, pero carece deliberadamente de glifo visible o tinta en pantalla.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                A nivel informático, existe una diferencia capital entre un carácter invisible y una cadena vacía:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                <li>
                  <strong className="text-slate-900">Cadena vacía (&quot;&quot;):</strong> Posee una longitud de 0 caracteres y 0 bytes. Si un sistema exige rellenar un campo obligatorio, una cadena vacía siempre devolverá un error de validación.
                </li>
                <li>
                  <strong className="text-slate-900">Carácter invisible:</strong> Posee longitud igual o mayor a 1 punto de código y consume entre 1 y 4 bytes en memoria UTF-8. Para el software es un dato real y existente, aunque el ojo humano perciba la zona como un espacio vacío o no note ningún hueco.
                </li>
              </ul>
            </section>

            {/* Section 2: Cómo copiar y pegar un carácter invisible */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Cómo copiar y pegar un carácter invisible
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Nuestra aplicación interactiva superior te ofrece un flujo de trabajo optimizado para que obtengas el carácter adecuado sin fricciones ni registros:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-600 text-white font-bold flex items-center justify-center text-sm">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Copiar con un clic
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    En la pestaña <em>Copiar Rápido</em>, pulsa el botón principal <em>Copiar carácter invisible</em>. El carácter activo por defecto (U+3164) pasará a tu portapapeles con confirmación visual en pantalla.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Copiar manualmente
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Si tu navegador o dispositivo móvil restringe el acceso al portapapeles por políticas de privacidad, pulsa <em>Selección manual</em> para resaltar el carácter dentro de un campo de texto y copiarlo con el menú de tu sistema.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Comprobar el carácter copiado
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pega el carácter en la pestaña <em>Inspector y Detector</em>. El sistema desglosará de inmediato cuántos bytes ocupa, su posición numérica y su ficha técnica oficial de Unicode.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Tipos de caracteres invisibles Unicode */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Tipos de caracteres invisibles Unicode
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                No todos los caracteres invisibles funcionan igual ni persiguen el mismo objetivo. Se dividen en cuatro familias principales:
              </p>

              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100/80 font-bold text-slate-800">
                    <tr>
                      <th className="py-3.5 px-4">Carácter</th>
                      <th className="py-3.5 px-4 font-mono">Punto Unicode</th>
                      <th className="py-3.5 px-4">Familia</th>
                      <th className="py-3.5 px-4">Anchura Visual</th>
                      <th className="py-3.5 px-4">Uso Principal</th>
                      <th className="py-3.5 px-4">Limitación</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">Espacio de ancho cero</td>
                      <td className="py-3 px-4 font-mono font-bold text-teal-700">U+200B</td>
                      <td className="py-3 px-4">Ancho cero</td>
                      <td className="py-3 px-4">0 píxeles</td>
                      <td className="py-3 px-4">Puntos de corte permisible sin separación</td>
                      <td className="py-3 px-4 text-xs text-slate-500">No añade ninguna separación perceptible a simple vista</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">No-unidor de ancho cero (ZWNJ)</td>
                      <td className="py-3 px-4 font-mono font-bold text-teal-700">U+200C</td>
                      <td className="py-3 px-4">Ancho cero</td>
                      <td className="py-3 px-4">0 píxeles</td>
                      <td className="py-3 px-4">Inhibir ligaduras en alfabetos complejos</td>
                      <td className="py-3 px-4 text-xs text-slate-500">En texto latino no altera la apariencia visual</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">Unidor de ancho cero (ZWJ)</td>
                      <td className="py-3 px-4 font-mono font-bold text-teal-700">U+200D</td>
                      <td className="py-3 px-4">Ancho cero</td>
                      <td className="py-3 px-4">0 píxeles</td>
                      <td className="py-3 px-4">Combinar emojis y ligaduras tipográficas</td>
                      <td className="py-3 px-4 text-xs text-slate-500">Puede mostrar glifos sueltos si el sistema no soporta la unión</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">Unidor de palabras (WJ)</td>
                      <td className="py-3 px-4 font-mono font-bold text-teal-700">U+2060</td>
                      <td className="py-3 px-4">Ancho cero</td>
                      <td className="py-3 px-4">0 píxeles</td>
                      <td className="py-3 px-4">Impedir saltos de línea de forma estricta</td>
                      <td className="py-3 px-4 text-xs text-slate-500">Completamente invisible; requiere detector</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">Relleno Hangul</td>
                      <td className="py-3 px-4 font-mono font-bold text-teal-700">U+3164</td>
                      <td className="py-3 px-4">Visualmente vacío</td>
                      <td className="py-3 px-4">Ancho de letra completa</td>
                      <td className="py-3 px-4">Nombres en Free Fire y juegos, apodos en blanco</td>
                      <td className="py-3 px-4 text-xs text-slate-500">Sistemas muy antiguos sin fuentes coreanas pueden mostrar tofu</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">Patrón Braille vacío</td>
                      <td className="py-3 px-4 font-mono font-bold text-teal-700">U+2800</td>
                      <td className="py-3 px-4">Visualmente vacío</td>
                      <td className="py-3 px-4">Ancho de celda Braille</td>
                      <td className="py-3 px-4">Mensajes vacíos en WhatsApp, biografías de Instagram</td>
                      <td className="py-3 px-4 text-xs text-slate-500">Lectores de pantalla pueden anunciarlo como patrón Braille</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">Guion discrecional (SHY)</td>
                      <td className="py-3 px-4 font-mono font-bold text-teal-700">U+00AD</td>
                      <td className="py-3 px-4">Formato y control</td>
                      <td className="py-3 px-4">Invisible (visible si quiebra)</td>
                      <td className="py-3 px-4">Separación silábica editorial en textos web</td>
                      <td className="py-3 px-4 text-xs text-slate-500">Dibuja un guion (-) si la palabra se quiebra al final de línea</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3 px-4 font-semibold text-slate-900">Espacio indivisible (NBSP)</td>
                      <td className="py-3 px-4 font-mono font-bold text-teal-700">U+00A0</td>
                      <td className="py-3 px-4">Espacio tipográfico</td>
                      <td className="py-3 px-4">Espacio normal</td>
                      <td className="py-3 px-4">Evitar saltos entre cifras y unidades</td>
                      <td className="py-3 px-4 text-xs text-slate-500">Es un espacio oficial; susceptible a recorte por trim()</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Diferencia entre carácter invisible, espacio en blanco y texto invisible */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Diferencia entre carácter invisible, espacio en blanco y texto invisible
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Para navegar con precisión en LetrasBonitas, conviene distinguir claramente los tres conceptos y sus páginas especializadas:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    Carácter Invisible (Esta página)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Se enfoca en la unidad atómica: inspeccionar, identificar, copiar y diagnosticar puntos de código Unicode concretos (U+200B, U+3164, U+2800, etc.) o detectar caracteres ocultos dentro de textos pegados.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    <Link href="/texto-invisible/espacio-en-blanco/" className="text-teal-700 hover:underline">
                      Espacio en Blanco
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Se enfoca en la anchura y la separación de palabras: elegir entre anchos tipográficos (fino, normal, em), previsualizar la separación real entre términos y generar cantidades repetidas de espacios.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    <Link href="/texto-invisible/" className="text-indigo-700 hover:underline">
                      Texto Invisible
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Es el tema paraguas global: abarca la generación de cadenas invisibles completas para mensajería, esteganografía digital, nombres en juegos y la explicación conceptual del texto no visible.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Cómo detectar caracteres invisibles en un texto */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Cómo detectar caracteres invisibles en un texto
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Cuando copias un texto de un documento PDF, una página web externa o un chat de mensajería, es frecuente que vengan incrustados caracteres de control o espacios de ancho cero. Como no se ven en tu editor de texto, pueden provocar fallos inexplicables.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Para resolverlo, utiliza el <strong className="text-slate-900">Inspector y Detector</strong> de nuestra herramienta superior:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                <li>
                  <strong className="text-slate-900">Pega el texto sospechoso:</strong> El analizador procesará en tiempo real la cadena sin transmitirla a ningún servidor externo, garantizando la privacidad absoluta de tus datos.
                </li>
                <li>
                  <strong className="text-slate-900">Revisa el mapa visual de tokens:</strong> Cada carácter visible se mostrará en una etiqueta gris, mientras que los caracteres invisibles u ocultos aparecerán resaltados con insignias moradas indicando su punto de código (por ejemplo, [U+200B] o [U+3164]) y su posición exacta en la cadena.
                </li>
                <li>
                  <strong className="text-slate-900">Copia la versión limpia:</strong> Si deseas eliminar todos los caracteres ocultos y conservar únicamente el texto legítimo y los espacios normales, pulsa el botón <em>Copiar texto limpio</em>.
                </li>
              </ul>
            </section>

            {/* Section 6: Cómo identificar el código Unicode de un carácter oculto */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Cómo identificar el código Unicode de un carácter oculto
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Identificar un punto de código es fundamental para diagnosticar qué función desempeña cada carácter. Veamos un ejemplo práctico:
              </p>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 font-mono text-xs sm:text-sm space-y-2">
                <div className="text-slate-500">Ejemplo: texto que aparenta decir &quot;HolaMundo&quot; sin espacios:</div>
                <div className="text-slate-900 font-bold bg-white p-3 rounded-xl border border-slate-200">
                  Hola&#8203;Mundo
                </div>
                <div className="text-slate-600 text-xs pt-1">
                  Al inspeccionarlo con nuestra herramienta, el analizador revela 10 puntos de código individuales:
                  <ul className="list-disc pl-5 mt-1 space-y-0.5 text-slate-700">
                    <li>H (U+0048), o (U+006F), l (U+006C), a (U+0061): 4 letras visibles.</li>
                    <li><strong className="text-purple-700">U+200B (ZERO WIDTH SPACE):</strong> 1 carácter invisible oculto en la posición 5.</li>
                    <li>M (U+004D), u (U+0075), n (U+006E), d (U+0064), o (U+006F): 5 letras visibles.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7: Para qué sirven los caracteres invisibles */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Para qué sirven los caracteres invisibles
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Aunque a menudo se les asocia con trucos en redes sociales, los caracteres invisibles cumplen propósitos técnicos legítimos en la informática mundial:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                <li>
                  <strong className="text-slate-900">Control de saltos de línea (U+200B y U+2060):</strong> Permiten que palabras técnicas extraordinariamente largas (como URLs o secuencias químicas) puedan partirse en renglones más cortos sin romper la estética de una página web.
                </li>
                <li>
                  <strong className="text-slate-900">Composición tipográfica multilingüe (U+200C y U+200D):</strong> Son imprescindibles para que idiomas con grafías conectadas (árabe, persa, sánscrito) adopten la forma gráfica correcta de cada letra.
                </li>
                <li>
                  <strong className="text-slate-900">Personalización de perfiles y nombres:</strong> Usuarios de videojuegos y redes sociales los emplean para separar elementos de un nick donde los espacios comunes están bloqueados.
                </li>
              </ul>
            </section>

            {/* Section 8: Caracteres invisibles en WhatsApp, Instagram y Discord */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Caracteres invisibles en WhatsApp, Instagram y Discord
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                En plataformas sociales, las restricciones de campos vacíos son frecuentes. Conoce qué carácter funciona mejor en cada caso:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">WhatsApp</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Copiar el <em>Patrón Braille vacío (U+2800)</em> habilita el botón de enviar sin escribir ninguna letra visible, permitiendo enviar globos de mensaje completamente en blanco o estados limpios.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Instagram</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Insertar un <em>Relleno Hangul (U+3164)</em> o <em>Patrón Braille (U+2800)</em> en líneas intermedias de tu biografía o pie de foto evita que Instagram colapse los saltos de párrafo al publicar.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Discord</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Utilizar <em>U+3164</em> en apodos de servidor permite crear nombres limpios o estructurar canales de texto con separadores minimalistas en comunidades temáticas.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Caracteres invisibles para Free Fire y otros juegos */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Caracteres invisibles para Free Fire y otros juegos
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                En títulos multijugador como Free Fire, Roblox o PUBG Mobile, los nombres de usuario suelen rechazar la barra espaciadora del teclado por considerarla un carácter de puntuación no válido.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                La solución ampliamente adoptada es el <strong className="text-slate-900">Relleno Hangul (U+3164)</strong>. Al clasificarse técnicamente en Unicode bajo la categoría Lo (Letter, Other), el motor del juego lo interpreta como si fuera una letra alfabética estándar, permitiendo apodos invisibles o separaciones limpias entre las iniciales de tu clan y tu nombre.
              </p>
            </section>

            {/* Section 10: Por qué algunos caracteres invisibles no funcionan */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Por qué algunos caracteres invisibles no funcionan
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Si un carácter invisible no produce el efecto deseado al pegarlo en una aplicación, obedece a uno de estos tres factores técnicos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                <li>
                  <strong className="text-slate-900">Filtrado estricto por lista blanca:</strong> Ciertos sistemas solo admiten caracteres que pertenezcan expresamente a los alfabetos básicos (A-Z, a-z, 0-9), descartando cualquier glifo fuera de esa norma.
                </li>
                <li>
                  <strong className="text-slate-900">Normalización de texto (NFC/NFKC):</strong> Los servidores pueden convertir automáticamente caracteres compuestos o especiales en sus equivalentes canónicos ordinarios, eliminándolos con funciones trim().
                </li>
                <li>
                  <strong className="text-slate-900">Carencia de fuente compatible:</strong> Si un dispositivo muy antiguo no tiene instalada una tipografía con soporte para el bloque Hangul o Braille, puede dibujar un cuadro con interrogación en lugar de un espacio limpio.
                </li>
              </ul>
            </section>

            {/* Section 11: Cómo eliminar caracteres invisibles no deseados */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Cómo eliminar caracteres invisibles no deseados
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                La presencia accidental de caracteres invisibles en archivos de programación (como JavaScript, Python o JSON) genera errores de compilación críticos que no se aprecian a simple vista.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Para sanear tu texto de manera segura:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                <li>Accede a la pestaña <em>Inspector y Detector</em> de nuestra herramienta.</li>
                <li>Pega el bloque de texto o código conflictivo en el área de texto.</li>
                <li>Verifica qué caracteres han sido localizados en el resumen inferior.</li>
                <li>Pulsa el botón <em>Copiar texto limpio</em> para transferir a tu portapapeles el texto original con todos los caracteres invisibles purgados, preservando intactos los espacios comunes y los saltos de línea normales.</li>
              </ol>
            </section>

            {/* Section 12: Riesgos y limitaciones de los caracteres invisibles */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Riesgos y limitaciones de los caracteres invisibles
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Es importante hacer un uso responsable y consciente de estos caracteres:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                <li>
                  <strong className="text-slate-900">Accesibilidad web y lectores de pantalla:</strong> Los lectores para personas con discapacidad visual interpretan los caracteres según su designación técnica. Emplear decenas de caracteres Braille o Hangul en un texto informativo puede hacer que el sintetizador de voz pronuncie descripciones confusas.
                </li>
                <li>
                  <strong className="text-slate-900">Seguridad informática y ataques homográficos:</strong> En ciberseguridad, la inserción de caracteres invisibles en enlaces o credenciales se considera una mala práctica. No uses caracteres ocultos para enmascarar información sensible.
                </li>
                <li>
                  <strong className="text-slate-900">Indexación en motores de búsqueda:</strong> Google colapsa e ignora los caracteres de espacio y formato oculto. Ocultar texto invisible para posicionar palabras clave incumple las directrices de calidad para webmasters.
                </li>
              </ul>
            </section>

            {/* Section 13: Qué carácter invisible elegir */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Qué carácter invisible elegir según tu objetivo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-teal-700 uppercase">Caso de Uso</span>
                  <h3 className="font-bold text-slate-900 text-sm">Nombre o apodo invisible en Free Fire</h3>
                  <p className="text-xs text-slate-600">
                    <strong>Recomendación:</strong> Relleno Hangul (U+3164). Máxima tolerancia en motores de juegos móviles.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-teal-700 uppercase">Caso de Uso</span>
                  <h3 className="font-bold text-slate-900 text-sm">Enviar mensaje vacío en WhatsApp</h3>
                  <p className="text-xs text-slate-600">
                    <strong>Recomendación:</strong> Patrón Braille vacío (U+2800). Activa el botón de envío de forma confiable.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-teal-700 uppercase">Caso de Uso</span>
                  <h3 className="font-bold text-slate-900 text-sm">Permitir saltos de línea suaves sin espacio</h3>
                  <p className="text-xs text-slate-600">
                    <strong>Recomendación:</strong> Espacio de ancho cero (U+200B). Divide palabras largas cuando llegan al margen.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-teal-700 uppercase">Caso de Uso</span>
                  <h3 className="font-bold text-slate-900 text-sm">Impedir que dos palabras se separen en renglones</h3>
                  <p className="text-xs text-slate-600">
                    <strong>Recomendación:</strong> Unidor de palabras (U+2060) o Espacio indivisible (U+00A0).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 14: Preguntas frecuentes */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Preguntas frecuentes sobre caracteres invisibles
              </h2>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Cómo copiar un carácter invisible desde el teléfono móvil?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Entra a esta página desde el navegador de tu móvil (Chrome, Safari u otro), presiona el botón verde <em>Copiar carácter invisible</em> y verás la notificación en pantalla. Luego dirígete a tu juego o red social, mantén el dedo pulsado sobre el campo de texto y pulsa <em>Pegar</em>.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Cuál es el carácter invisible más utilizado en internet?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Para nombres de usuario y juegos, el más popular es el Relleno Hangul (U+3164). Para desarrollo web y diseño digital, el más utilizado es el Espacio de ancho cero (U+200B).
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Un carácter invisible es lo mismo que un espacio normal?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    No. El espacio normal (U+0020) posee la propiedad oficial White_Space=Yes y es eliminado automáticamente por las funciones trim() al inicio y final de los campos. Los caracteres invisibles pertenecen a categorías de letras, símbolos o formato, por lo que el sistema los procesa como contenido con valor propio.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Cómo saber si un texto contiene caracteres ocultos?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pega el texto en la pestaña <em>Inspector y Detector</em> de esta página. El analizador desglosará todos los puntos de código Unicode en milisegundos y señalará en color morado la ubicación exacta de cada carácter invisible.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Por qué un carácter invisible aparece como un cuadro en mi pantalla?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ese cuadro (llamado tofu tipográfico) ocurre cuando el sistema operativo o la aplicación carecen de una fuente tipográfica instalada que cubra ese bloque específico de Unicode. En prácticamente todos los teléfonos y ordenadores actuales con sistemas actualizados se renderiza de forma limpia y transparente.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Funcionan los caracteres invisibles en Free Fire?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sí, el Relleno Hangul (U+3164) es el carácter estándar empleado por la comunidad de Free Fire para crear nombres transparentes o separar las iniciales de clanes.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Qué diferencia hay entre U+3164 y U+200B?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    U+3164 (Relleno Hangul) ocupa el ancho visual completo de una letra pero no tiene tinta visible. En contraste, U+200B (Espacio de ancho cero) tiene una anchura visual de exactamente 0 píxeles, por lo que las letras adyacentes permanecen juntas en pantalla.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Cómo copiar varios caracteres invisibles seguidos?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Dirígete a la pestaña <em>Generador</em> de la herramienta, pulsa en cualquiera de los botones de cantidad predefinida (como 5, 10 o 50) o escribe una cifra personalizada hasta 500 y presiona <em>Copiar</em>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 15: Enlaces internos y herramientas relacionadas */}
            <section className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Herramientas relacionadas en LetrasBonitas
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Descubre otras soluciones tipográficas y generadores de texto gratuitos en nuestra plataforma:
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
                    Generador principal de texto invisible y cadenas en blanco.
                  </span>
                </Link>

                <Link
                  href="/texto-invisible/espacio-en-blanco/"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-teal-500 hover:shadow-2xs transition-all group"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-teal-700 block">
                    Espacio en Blanco
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Utilidad de anchos tipográficos y vista previa de espaciado.
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
                    Transforma tu texto con fuentes bonitas y estilos cursivos.
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
              </div>
            </section>

            {/* Conclusion */}
            <footer className="pt-6 border-t border-slate-100 text-slate-600 text-xs sm:text-sm space-y-3 leading-relaxed">
              <p>
                Los caracteres invisibles representan una herramienta versátil y potente para personalizar perfiles, estructurar maquetaciones tipográficas complejas o resolver inconsistencias de formato en textos digitales. Contar con un catálogo transparente y un detector exacto te garantiza obtener siempre el resultado técnico adecuado sin sorpresas.
              </p>
              <p>
                Sube al inicio de la página para copiar el carácter predeterminado o utiliza el inspector para comprobar cualquier texto en pocos segundos.
              </p>
            </footer>
          </article>
        </div>
      </main>
    </>
  );
}
