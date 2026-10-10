import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { GraffitiTool } from "@/components/font-generator/GraffitiTool";
import { GraffitiSymbolsBar } from "@/components/font-generator/GraffitiSymbolsBar";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Letras Graffiti para Copiar y Pegar | LetrasBonitas",
  description:
    "Crea letras graffiti con tu nombre, explora estilos urbanos y copia tus favoritos. Diseña grafitis online y descarga imágenes PNG gratis.",
  alternates: {
    canonical: `${SITE_URL}/letras-graffiti/`,
  },
  openGraph: {
    title: "Letras Graffiti para Copiar y Pegar | LetrasBonitas",
    description:
      "Crea letras graffiti con tu nombre, explora estilos urbanos y copia tus favoritos. Diseña grafitis online y descarga imágenes PNG gratis.",
    url: `${SITE_URL}/letras-graffiti/`,
    siteName: "LetrasBonitas",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Letras Graffiti para Copiar y Pegar | LetrasBonitas",
    description:
      "Generador de letras graffiti online: copia texto urbano en Unicode o diseña tu nombre en graffiti descargable en PNG.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LetrasGraffitiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/letras-graffiti/#webpage`,
        url: `${SITE_URL}/letras-graffiti/`,
        name: "Letras Graffiti para Copiar y Pegar",
        description:
          "Crea letras graffiti con tu nombre, explora estilos urbanos y copia tus favoritos. Diseña grafitis online y descarga imágenes PNG gratis.",
        isPartOf: {
          "@type": "WebSite",
          name: "LetrasBonitas",
          url: `${SITE_URL}/`,
        },
        inLanguage: "es-ES",
      },
      {
        "@type": "WebApplication",
        "@id": `${SITE_URL}/letras-graffiti/#tool`,
        name: "Generador y Estudio de Letras Graffiti de LetrasBonitas",
        url: `${SITE_URL}/letras-graffiti/`,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        browserRequirements:
          "Requiere JavaScript para la copia interactiva al portapapeles y la generacion de imagenes PNG",
        description:
          "Herramienta dual para convertir texto en estilos graffiti Unicode para copiar y pegar, o diseñar grafitis graficos personalizados en formato PNG.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/letras-graffiti/#breadcrumb`,
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
            name: "Letras Graffiti",
            item: `${SITE_URL}/letras-graffiti/`,
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

      <main className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-pink-100 selection:text-pink-900 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Letras Graffiti" },
            ]}
          />

          {/* Above-the-fold Hero */}
          <header className="text-center mt-6 mb-8 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-slate-900 text-cyan-400 border border-slate-700 shadow-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Estudio de Arte Urbano y Texto Callejero</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Letras Graffiti para Copiar y Pegar
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Escribe tu nombre, apodo o crew. Transforma tus palabras en fuentes urbanas Unicode listas para copiar en redes sociales o diseña grafitis personalizados en alta definicion con descarga en PNG transparente.
            </p>

            {/* Feature Value Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-bold text-slate-700">
              <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <span className="text-emerald-500">✓</span> Copia en 1 Clic
              </span>
              <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <span className="text-pink-500">🎨</span> Descarga PNG Transparente
              </span>
              <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <span className="text-amber-500">🔥</span> Nicks para Free Fire y Redes
              </span>
              <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <span className="text-indigo-500">📖</span> Abecedario Completo (A-Z y Ñ)
              </span>
            </div>
          </header>

          {/* Primary Interactive Graffiti Tool */}
          <GraffitiTool />

          {/* Interactive Tag & Street Symbols Bar */}
          <div className="my-10">
            <GraffitiSymbolsBar />
          </div>

          {/* Supporting Article Section */}
          <article className="mt-12 max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 lg:p-12 space-y-14">
            {/* PAS Introduction */}
            <section className="p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-pink-500/20 text-pink-400 border border-pink-500/40">
                  Cultura Urbana Digital
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                La dificultad de llevar el estilo graffiti a internet
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                El graffiti es una de las expresiones tipograficas mas impactantes del arte contemporaneo. Sus formas infladas, trazos goticos afilados y efectos tridimensionales capturan una energia rebelde y creativa unica. Sin embargo, trasladar esa estetica a las redes sociales, perfiles de videojuegos o chats suele ser complicado: los teclados estandar no ofrecen fuentes urbanas y muchas herramientas online prometen resultados que luego no se pueden copiar o que requieren programas complejos de edicion grafica.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                En LetrasBonitas hemos resuelto este problema combinando dos herramientas en un solo lugar: un conversor de texto Unicode para copiar y pegar variantes urbanas al instante en Instagram, WhatsApp o Free Fire, y un diseñador grafico en lienzo para crear piezas de graffiti con color, contorno y sombra 3D listas para descargar en imagen PNG transparente.
              </p>
            </section>

            {/* Section 1: Qué son las letras graffiti */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                <span className="text-xs font-black uppercase tracking-wider text-cyan-700">
                  Definicion y Conceptos
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                ¿Qué son las letras graffiti?
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Las letras graffiti son formas tipograficas artisticas nacidas de la cultura urbana y el movimiento del arte callejero (street art). Se caracterizan por alterar deliberadamente las proporciones clasicas del alfabeto, expandiendo los grosores, curvando las esquinas en formas infladas o afilando los remates con cortes angulares agresivos.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                En el entorno digital, conviven dos maneras de disfrutar del estilo graffiti:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-cyan-50/60 border border-cyan-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🔤</span>
                    <h3 className="font-black text-slate-900 text-sm">
                      Letras graffiti en texto Unicode
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Caracteres tipograficos reales (como negritas sin serifa, letras goticas Fraktur, caracteres encerrados en circulos o bloques) que cualquier telefono u ordenador puede interpretar como texto plano para copiar y pegar.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-pink-50/60 border border-pink-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🎨</span>
                    <h3 className="font-black text-slate-900 text-sm">
                      Letras graffiti en diseño grafico
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ilustraciones vectoriales o imagenes digitales donde intervienen degradados de aerosol, brillos brillantes, sombras tridimensionales proyectadas y salpicaduras de pintura que van mas alla de lo que permite el texto digital ordinario.
                  </p>
                </div>
              </div>
            </section>

            {/* Diccionario de Terminos Callejeros */}
            <section className="space-y-4 p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-200">
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Glosario de Street Art
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Diccionario Callejero: Terminos Clave del Graffiti
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Conoce el vocabulario que utilizan los escritores de graffiti en todo el mundo:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 text-xs font-black block">Tag (Firma)</strong>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    La firma personal del escritor realizada con rotulador grueso o boquilla fina.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 text-xs font-black block">Throw-Up</strong>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Pieza rapida de letras tipo pompa (burbuja) con dos colores: contorno y relleno.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 text-xs font-black block">Piece (Pieza)</strong>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Mural elaborado con degradados, 3D, personajes y multiples capas de color.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 text-xs font-black block">Burner</strong>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Una pieza magistral con letras tan potentes y brillantes que eclipsa todo el muro.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 text-xs font-black block">Wildstyle</strong>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Estructuras complejas entrelazadas con flechas, picos y conexiones dinamicas.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 text-xs font-black block">Blackbook</strong>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Cuaderno de dibujo donde los artistas practican y guardan sus bocetos a mano.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 text-xs font-black block">Cap / Fat Cap</strong>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Boquilla intercambiable del bote de spray que define el ancho del trazo de pintura.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 text-xs font-black block">Crew</strong>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Grupo o colectivo de escritores que pintan juntos bajo una misma sigla comun.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Cómo crear letras graffiti online paso a paso */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                <span className="text-xs font-black uppercase tracking-wider text-teal-700">
                  Guia Rapida
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Cómo crear letras graffiti online paso a paso
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Nuestra plataforma te permite obtener tus letras en pocos segundos a traves de un proceso agil y transparente:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-teal-400 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-teal-600 text-white font-black flex items-center justify-center text-sm shadow-md shadow-teal-200">
                    1
                  </div>
                  <h3 className="font-black text-slate-900 text-sm">Escribe tu nombre</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escribe tu palabra, apodo o frase en la casilla de texto superior. La herramienta actualiza todos los resultados en tiempo real mientras tecleas.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-pink-400 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-pink-600 text-white font-black flex items-center justify-center text-sm shadow-md shadow-pink-200">
                    2
                  </div>
                  <h3 className="font-black text-slate-900 text-sm">Elige el modo</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Selecciona <em>Texto para Copiar</em> si buscas texto para redes sociales, o <em>Diseñar Graffiti</em> si deseas una imagen grafica con efectos de pintura.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-indigo-400 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center text-sm shadow-md shadow-indigo-200">
                    3
                  </div>
                  <h3 className="font-black text-slate-900 text-sm">Ajusta los detalles</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Filtra por categorias urbanas (bloque, burbuja, gotica, tags) o modula el color de relleno, el grosor de borde y la profundidad 3D en el lienzo.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-amber-400 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-amber-600 text-white font-black flex items-center justify-center text-sm shadow-md shadow-amber-200">
                    4
                  </div>
                  <h3 className="font-black text-slate-900 text-sm">Copia o descarga</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pulsa en <em>Copiar</em> para llevar el texto al portapapeles o presiona <em>Descargar PNG</em> para guardar tu diseño con fondo transparente en tu galeria.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Tipos de letras graffiti y estilos urbanos */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                <span className="text-xs font-black uppercase tracking-wider text-pink-700">
                  Corrientes Artisticas
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Tipos de letras graffiti y estilos urbanos
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                El graffiti abarca diversas corrientes nacidas en las calles de Nueva York, Filadelfia y las grandes capitales europeas. Conoce los estilos mas influyentes:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-pink-300 transition-all">
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-slate-900 text-base">Letras Bubble (Estilo Pompa)</h3>
                    <span className="text-xs font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-md">
                      Throw-Up
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Caracterizadas por formas hinchadas, bordes redondeados y ausencia total de esquinas rectas. Es el estilo clasico de los <em>throw-ups</em> o piezas rapidas, diseñado originalmente para cubrir la mayor superficie de muro en el menor tiempo posible con botes de spray.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-indigo-300 transition-all">
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-slate-900 text-base">Block Letters (Letras de Bloque)</h3>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                      3D Solido
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Letras cuadradas, monumentales y legibles a gran distancia. Destacan por sus lineas rectas paralelas, esquinas afiladas y proyecciones isometricas en 3D que simulan bloques macizos de hormigon.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-amber-300 transition-all">
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-slate-900 text-base">Tags y Firmas Caligraficas</h3>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                      Original
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    El tag es la raiz fundamental del graffiti: la firma personal del escritor trazada con soltura mediante rotulador grueso o boquilla de aerosol. Suele incorporar simbolos como coronas, estrellas o subrayados estilizados.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-purple-300 transition-all">
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-slate-900 text-base">Wildstyle (Estilo Salvaje)</h3>
                    <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                      Complejo
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    La cuspide tecnica del lettering urbano: letras entrelazadas de manera compleja con flechas dinamicas, picos cortados y conexiones ocultas. Solo los miembros de la comunidad suelen descifrar su mensaje con facilidad.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-rose-300 transition-all">
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-slate-900 text-base">Góticas Callejeras y Chicano</h3>
                    <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md">
                      Blackletter
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Inspiradas en la caligrafia Fraktur y el tatuaje chicano de la costa oeste estadounidense. Combina la rigidez medieval de las astas gruesas con florituras fluidas que denotan respeto y veteranía.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-cyan-300 transition-all">
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-slate-900 text-base">Stencil (Plantilla Urbana)</h3>
                    <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-md">
                      Street Art
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Popularizado a escala mundial por artistas como Banksy y Blek le Rat. Requiere cortar puentes dentro de las letras cerradas (como la O, P o D) para que el interior no se desprenda al aplicar la pintura.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Letras graffiti para nombres y apodos */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-xs font-black uppercase tracking-wider text-amber-700">
                  Ejemplos Reales
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Letras graffiti para nombres y apodos
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Personalizar tu propio nombre con aire callejero es una de las busquedas mas habituales. A continuacion puedes ver ejemplos directos de como transformar nombres populares con los estilos de nuestra herramienta:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5 hover:border-cyan-300 transition-all">
                  <span className="text-slate-500 font-sans font-bold text-xs">Alex (Street Bold)</span>
                  <div className="text-slate-900 text-lg font-black tracking-wider">𝗔𝗟𝗘𝗫</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5 hover:border-cyan-300 transition-all">
                  <span className="text-slate-500 font-sans font-bold text-xs">Sofía (Wild Fraktur)</span>
                  <div className="text-slate-900 text-lg font-black tracking-wider">𝕾𝖔𝖋í𝖆</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5 hover:border-cyan-300 transition-all">
                  <span className="text-slate-500 font-sans font-bold text-xs">Diego (Block Sólido)</span>
                  <div className="text-slate-900 text-lg font-black tracking-wider">🅳🅸🅴🅶🅾</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5 hover:border-cyan-300 transition-all">
                  <span className="text-slate-500 font-sans font-bold text-xs">Luna (Crown Tag)</span>
                  <div className="text-slate-900 text-lg font-black tracking-wider">👑 𝕷𝖚𝖓𝖆 👑</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5 hover:border-cyan-300 transition-all">
                  <span className="text-slate-500 font-sans font-bold text-xs">Mateo (Outline Doble)</span>
                  <div className="text-slate-900 text-lg font-black tracking-wider">𝕄𝕒𝕥𝕖𝕠</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5 hover:border-cyan-300 transition-all">
                  <span className="text-slate-500 font-sans font-bold text-xs">Carlos (Burner Tag)</span>
                  <div className="text-slate-900 text-lg font-black tracking-wider">🔥 𝕮𝖆𝖗𝖑𝖔𝖘 🔥</div>
                </div>
              </div>
            </section>

            {/* Section 5: Copiar y pegar vs Diseñar grafiti */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                <span className="text-xs font-black uppercase tracking-wider text-indigo-700">
                  Comparativa Tecnica
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Letras graffiti para copiar y pegar frente a graffiti visual diseñado
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Para evitar falsas expectativas, es fundamental comprender la diferencia tecnica entre ambos formatos:
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl pt-1 shadow-2xs">
                <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 font-black text-slate-900">
                    <tr>
                      <th className="py-3.5 px-4">Caracteristica</th>
                      <th className="py-3.5 px-4">Texto para Copiar (Unicode)</th>
                      <th className="py-3.5 px-4">Graffiti Diseñado (Imagen PNG)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Formato de salida</td>
                      <td className="py-3.5 px-4">Texto plano universal</td>
                      <td className="py-3.5 px-4">Archivo de imagen (.png)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Dónde usarlo</td>
                      <td className="py-3.5 px-4">Bios de Instagram, TikTok, WhatsApp, nombres de juegos</td>
                      <td className="py-3.5 px-4">Avatares de perfil, miniaturas de YouTube, stickers, camisetas</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Colores y sombras</td>
                      <td className="py-3.5 px-4">Monocromo (depende de la app de destino)</td>
                      <td className="py-3.5 px-4">Degradados vivos, sombras 3D y bordes gruesos</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Edición posterior</td>
                      <td className="py-3.5 px-4">Se puede pegar y borrar como cualquier palabra</td>
                      <td className="py-3.5 px-4">Es una imagen estatica con fondo opcional</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Abecedario de letras graffiti */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-violet-500" />
                <span className="text-xs font-black uppercase tracking-wider text-violet-700">
                  Anatomia Tipografica
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Abecedario de letras graffiti de la A a la Z
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Dominar el alfabeto completo es la base de cualquier aficionado a la caligrafia urbana. Cada letra posee claves morfologicas que determinan su personalidad:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                <li>
                  <strong className="text-slate-900">Letras con ojos cerrados (A, B, D, O, P, Q, R):</strong> En estilos bubble se dibujan con pequeños circulos internos que admiten destellos de luz o puntos negros de contraste.
                </li>
                <li>
                  <strong className="text-slate-900">Letras angulares (E, F, K, L, T, Z):</strong> Son ideales para proyectar sombras 3D marcadas hacia abajo o hacia los lados sin que los trazos se superpongan de forma confusa.
                </li>
                <li>
                  <strong className="text-slate-900">Letras onduladas (C, G, S):</strong> La letra S es considerada tradicionalmente la prueba de fuego del escritor de graffiti debido a la precision requerida para equilibrar su curva superior e inferior.
                </li>
                <li>
                  <strong className="text-slate-900">Inclusion de la letra Ñ:</strong> En alfabetos Unicode internacionales la Ñ no cuenta con equivalentes matematicos completos en todos los bloques. En nuestro diseñador grafico, sin embargo, la Ñ se renderiza con absoluta naturalidad junto al resto del abecedario en español.
                </li>
              </ul>
            </section>

            {/* Section 7: Letras graffiti fáciles para dibujar */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-black uppercase tracking-wider text-emerald-700">
                  Tutorial Blackbook
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Letras graffiti fáciles para dibujar a mano
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Si deseas aprender a dibujar tus propios bocetos en papel o libreta de dibujo (blackbook), sigue esta sencilla guia para principiantes:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-sm sm:text-base text-slate-700">
                <li>
                  <strong className="text-slate-900">Esqueleto con lapiz suave:</strong> Escribe tu nombre en mayusculas normales con un trazo fino y espaciado generoso entre letras.
                </li>
                <li>
                  <strong className="text-slate-900">Engrosamiento o inflado:</strong> Dibuja un contorno redondeado alrededor de cada linea a modo de nube para conseguir el efecto bubble, o traza rectangulos paralelos para estilo block.
                </li>
                <li>
                  <strong className="text-slate-900">Superposicion de letras:</strong> Haz que unas letras monten ligeramente sobre las siguientes para dar sensacion de unidad y profundidad a la palabra.
                </li>
                <li>
                  <strong className="text-slate-900">Delineado con tinta:</strong> Repasa el contorno exterior definitivo con un rotulador negro grueso y borra el boceto de lapiz inicial.
                </li>
                <li>
                  <strong className="text-slate-900">Sombra 3D y brillos:</strong> Elige un punto de fuga (por ejemplo, abajo a la derecha) y proyecta lineas oscuras de igual grosor en todas las esquinas. Agrega pequeños ovalos blancos en la parte superior izquierda de cada letra para simular reflejos de luz.
                </li>
              </ol>
            </section>

            {/* Section 8: Dónde usar letras graffiti */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="text-xs font-black uppercase tracking-wider text-rose-700">
                  Casos de Uso
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Dónde usar letras graffiti en internet
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                La estetica urbana encaja con multitud de plataformas y proyectos personales:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-rose-300 transition-all">
                  <div className="text-2xl">📱</div>
                  <h3 className="font-black text-slate-900 text-sm">Redes Sociales</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Personaliza biografias de Instagram, estados de WhatsApp, pies de foto en TikTok y descripciones de perfil con letras urbanas que capturen miradas de inmediato.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-amber-300 transition-all">
                  <div className="text-2xl">🎮</div>
                  <h3 className="font-black text-slate-900 text-sm">Comunidades de Videojuegos</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nicks de Free Fire, servidores de Discord, canales de Twitch y apodos de clanes en Roblox que busquen una imagen callejera, fuerte y competitiva.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-pink-300 transition-all">
                  <div className="text-2xl">👕</div>
                  <h3 className="font-black text-slate-900 text-sm">Diseño y Merchandising</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Descarga tu nombre en PNG transparente para crear pegatinas caseras, logotipos personales, portadas de cuadernos o estampados personalizados.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Consejos para firmas y tags originales */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                <span className="text-xs font-black uppercase tracking-wider text-cyan-700">
                  Tips de Expertos
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Consejos para crear firmas y tags originales
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Para que tu firma o apodo destaque con autenticidad, ten en cuenta las siguientes recomendaciones:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                <li>
                  <strong className="text-slate-900">Equilibrio antes que exceso:</strong> No sobrecargues tu nombre con demasiados simbolos extraños a la vez. Una o dos coronas o estrellas bien colocadas generan un impacto mucho mayor que una cadena repleta de signos inconexos.
                </li>
                <li>
                  <strong className="text-slate-900">Longitud adecuada:</strong> Los mejores tags suelen tener entre 4 y 7 letras. Las palabras breves se leen con mayor fuerza y permiten que el estilo tipografico resalte sin apelmazar el espacio.
                </li>
                <li>
                  <strong className="text-slate-900">Coherencia de estilo:</strong> Si comienzas tu nombre con letras goticas pesadas, procura que los remates o adornos complementen esa misma energia en lugar de mezclar estilos incompatibles.
                </li>
              </ul>
            </section>

            {/* Section 10: Problemas frecuentes al copiar letras graffiti */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-xs font-black uppercase tracking-wider text-amber-700">
                  Soporte y Soluciones
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Problemas frecuentes al copiar letras graffiti y cómo solucionarlos
              </h2>
              <div className="space-y-3">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">
                    1. La aplicacion muestra rectangulos vacios en lugar de las letras
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ocurre en sistemas o aplicaciones antiguas que no incorporan tipografias con soporte para simbolos matematicos especiales. Elige estilos de alta compatibilidad como <em>Street Bold</em> o <em>Classic Roller Serif</em> que son reconocidos por practicamente cualquier dispositivo.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">
                    2. Las tildes o la letra Ñ no cambian de estilo
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    El estandar Unicode codifico los alfabetos matematicos prioritariamente sobre el alfabeto latino basico (A a la Z). Si tu nombre lleva tilde o Ñ, nuestra herramienta conserva el caracter legible sin borrarlo. Como alternativa ideal, utiliza nuestro <em>Diseñador Grafico</em>, que renderiza vocales acentuadas y la letra Ñ a la perfeccion.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">
                    3. El videojuego dice que el nombre excede el limite de caracteres
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Muchos caracteres Unicode ocupan entre 2 y 4 bytes en memoria frente a 1 byte del texto ordinario. Si un juego tiene un limite estricto de bytes, acorta tu apodo o prueba con estilos que usen menos decoraciones añadidas.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11: Qué estilo de graffiti elegir */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                <span className="text-xs font-black uppercase tracking-wider text-pink-700">
                  Recomendaciones
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Qué estilo de graffiti elegir según tu proyecto
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-pink-300 transition-all">
                  <span className="text-xs font-black text-pink-700 uppercase tracking-wide">Objetivo</span>
                  <h3 className="font-bold text-slate-900 text-sm">Nombre para juegos (Free Fire, Roblox)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Recomendacion:</strong> Wild Fraktur o Tag Corona King. Aportan autoridad visual y destacan en tablas de puntuacion.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-pink-300 transition-all">
                  <span className="text-xs font-black text-pink-700 uppercase tracking-wide">Objetivo</span>
                  <h3 className="font-bold text-slate-900 text-sm">Biografias de Instagram y TikTok</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Recomendacion:</strong> Small Caps Tag o Outline Doble Trazo. Maxima legibilidad sin recargar el perfil.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-pink-300 transition-all">
                  <span className="text-xs font-black text-pink-700 uppercase tracking-wide">Objetivo</span>
                  <h3 className="font-bold text-slate-900 text-sm">Stickers, avatares o camisetas</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Recomendacion:</strong> Diseñador Grafico en estilo Bubble o Block 3D con descarga en PNG transparente.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-pink-300 transition-all">
                  <span className="text-xs font-black text-pink-700 uppercase tracking-wide">Objetivo</span>
                  <h3 className="font-bold text-slate-900 text-sm">Firmas urbanas minimalistas</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Recomendacion:</strong> Street Bold Urbano o Inclinado Dinamico Flow. Trazo limpio y moderno.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12: Preguntas frecuentes */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                <span className="text-xs font-black uppercase tracking-wider text-cyan-700">
                  Dudas Resueltas
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Preguntas frecuentes sobre letras graffiti
              </h2>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Cómo copiar letras graffiti en el teléfono móvil?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Escribe tu nombre en la casilla superior, toca el boton de copiar sobre el estilo que mas te guste y veras la confirmacion inmediata. Luego ve a tu red social o juego, manten el dedo presionado en el campo de texto y pulsa Pegar.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Es gratis usar este generador de graffiti?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Si, 100% gratuito. Tanto la copia de textos en Unicode como la descarga de imagenes en formato PNG son funciones libres y sin limite de uso. No requieres registrarte ni instalar extensiones.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Las letras graffiti copiadas funcionan en Instagram y WhatsApp?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Si, los estilos de la seccion <em>Texto para Copiar</em> utilizan caracteres del estandar internacional Unicode, por lo que son admitidos en biografias, nombres, descripciones y conversaciones de WhatsApp, Instagram, TikTok y Facebook.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Cómo descargar mi nombre en imagen PNG con fondo transparente?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Entra a la pestaña <em>Diseñar Graffiti</em>, escribe tu nombre, elige el estilo visual y los colores que prefieras, asegurate de mantener marcada la casilla <em>Fondo transparente</em> y pulsa el boton <em>Descargar Graffiti en PNG</em>.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Cuál es la diferencia entre estilo bubble y estilo block?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    El estilo bubble (burbuja) utiliza letras infladas y redondeadas sin aristas rectas, mientras que el estilo block se fundamenta en bloques rectangulares macizos, lineas rigidas y proyecciones tridimensionales.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Puedo usar las letras graffiti en apodos de Free Fire?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Si, miles de jugadores combinan estilos goticos (Fraktur) y tags con coronas o cruces para crear nombres competitivos e insanos en Free Fire y otros titulos multijugador.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Por qué algunos caracteres no se transforman en graffiti?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    En el modo de texto copiable, ciertos signos especiales o letras con tilde no disponen de replica exacta en los alfabetos matematicos de Unicode. El sistema conserva esos caracteres originales para que la palabra continue siendo legible.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    ¿Puedo aprender a dibujar graffiti con el abecedario de esta página?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Si, nuestra seccion <em>Abecedario A-Z</em> detalla la estructura, las variantes visuales y consejos practicos de dibujo para cada letra del alfabeto, sirviendo como guia de referencia para tus propios bocetos a mano.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 13: Enlaces internos y herramientas relacionadas */}
            <section className="p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Otras herramientas de letras en LetrasBonitas
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Continua personalizando tus textos con nuestras herramientas gratuitas:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                <Link
                  href="/conversor-de-letras/"
                  className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-pink-500 hover:shadow-md transition-all group"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-pink-700 block">
                    Conversor de Letras
                  </span>
                  <span className="text-xs text-slate-500 block mt-1">
                    Mas de 300 estilos Unicode variados para copiar y pegar.
                  </span>
                </Link>

                <Link
                  href="/letras-burbuja/"
                  className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-pink-500 hover:shadow-md transition-all group"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-pink-700 block">
                    Letras Burbuja
                  </span>
                  <span className="text-xs text-slate-500 block mt-1">
                    Estilos circulares y letras redondas infladas tipo bubble.
                  </span>
                </Link>

                <Link
                  href="/letras-goticas/"
                  className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-pink-500 hover:shadow-md transition-all group"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-pink-700 block">
                    Letras Góticas
                  </span>
                  <span className="text-xs text-slate-500 block mt-1">
                    Tipografias medievales Fraktur y caligrafia clasica.
                  </span>
                </Link>

                <Link
                  href="/nombres-para-free-fire/"
                  className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-pink-500 hover:shadow-md transition-all group"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-pink-700 block">
                    Nombres para Free Fire
                  </span>
                  <span className="text-xs text-slate-500 block mt-1">
                    Apodos insanos, simbolos para clanes y firmas urbanas.
                  </span>
                </Link>

                <Link
                  href="/simbolos/"
                  className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-pink-500 hover:shadow-md transition-all group"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-pink-700 block">
                    Símbolos y Decoraciones
                  </span>
                  <span className="text-xs text-slate-500 block mt-1">
                    Coronas, estrellas, flechas y simbolos especiales.
                  </span>
                </Link>

                <Link
                  href="/letras-para-instagram/"
                  className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-pink-500 hover:shadow-md transition-all group"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-pink-700 block">
                    Letras para Instagram
                  </span>
                  <span className="text-xs text-slate-500 block mt-1">
                    Fuentes y estilos destacados para tu biografia y publicaciones.
                  </span>
                </Link>
              </div>
            </section>

            {/* Conclusion */}
            <footer className="pt-6 border-t border-slate-100 text-slate-600 text-xs sm:text-sm space-y-3 leading-relaxed">
              <p>
                Las letras graffiti aportan una fuerza visual inconfundible a cualquier mensaje digital. Ya sea que busques una firma urbana en texto plano para copiar en tus redes sociales o una pieza grafica personalizada con sombras y colores vivos para descargar en imagen, nuestro estudio reúne todo lo necesario en una sola pagina.
              </p>
              <p>
                Sube a la herramienta interactiva, escribe tu nombre o apodo y experimenta con los distintos estilos urbanos disponibles.
              </p>
            </footer>
          </article>
        </div>
      </main>
    </>
  );
}
