import { describe, expect, it } from "vitest";
import { metadata } from "@/app/letras-graffiti/page";
import {
  GRAFFITI_STYLES,
  GRAFFITI_CATEGORIES,
  GRAFFITI_ALPHABET,
  GRAFFITI_PRESETS,
  transformGraffitiText,
} from "@/lib/unicode/graffitiData";
import fs from "fs";
import path from "path";

describe("Letras Graffiti Page & Tool Suite", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    expect(metadata.title).toBe("Letras Graffiti para Copiar y Pegar | LetrasBonitas");
    expect(metadata.description).toBe(
      "Crea letras graffiti con tu nombre, explora estilos urbanos y copia tus favoritos. Diseña grafitis online y descarga imágenes PNG gratis."
    );
    expect(metadata.alternates?.canonical).toBe("https://letrasbonits.com/letras-graffiti/");
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe("Letras Graffiti para Copiar y Pegar | LetrasBonitas");
    expect(metadata.openGraph?.url).toBe("https://letrasbonits.com/letras-graffiti/");
    expect(metadata.openGraph?.locale).toBe("es_ES");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary_large_image");
  });

  it("ensures page source contains no em dash (—) or en dash (–) in Spanish content", () => {
    const pagePath = path.resolve(__dirname, "../../src/app/letras-graffiti/page.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("ensures tool component contains no em dash (—) or en dash (–)", () => {
    const toolPath = path.resolve(__dirname, "../../src/components/font-generator/GraffitiTool.tsx");
    const content = fs.readFileSync(toolPath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("ensures graffiti data file contains no em dash (—) or en dash (–)", () => {
    const dataPath = path.resolve(__dirname, "../../src/lib/unicode/graffitiData.ts");
    const content = fs.readFileSync(dataPath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("verifies structured data and key headings exist in page source", () => {
    const pagePath = path.resolve(__dirname, "../../src/app/letras-graffiti/page.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content).toContain("Letras Graffiti para Copiar y Pegar");
    expect(content).toContain("¿Qué son las letras graffiti?");
    expect(content).toContain("Cómo crear letras graffiti online paso a paso");
    expect(content).toContain("Tipos de letras graffiti y estilos urbanos");
    expect(content).toContain("Letras graffiti para nombres y apodos");
    expect(content).toContain("Letras graffiti para copiar y pegar frente a graffiti visual diseñado");
    expect(content).toContain("Abecedario de letras graffiti de la A a la Z");
    expect(content).toContain("Letras graffiti fáciles para dibujar a mano");
    expect(content).toContain("Dónde usar letras graffiti en internet");
    expect(content).toContain("Problemas frecuentes al copiar letras graffiti y cómo solucionarlos");
    expect(content).toContain("Qué estilo de graffiti elegir según tu proyecto");
    expect(content).toContain("Preguntas frecuentes sobre letras graffiti");
  });

  it("verifies sitemap includes /letras-graffiti/", () => {
    const sitemapPath = path.resolve(__dirname, "../../src/app/sitemap.ts");
    const content = fs.readFileSync(sitemapPath, "utf-8");

    expect(content).toContain('"/letras-graffiti/"');
  });

  it("contains curated styles in GRAFFITI_STYLES with valid categories", () => {
    expect(GRAFFITI_STYLES.length).toBeGreaterThanOrEqual(15);
    const validCats = new Set(GRAFFITI_CATEGORIES.map((c) => c.id));
    for (const style of GRAFFITI_STYLES) {
      expect(validCats.has(style.category)).toBe(true);
      expect(typeof style.transform).toBe("function");
      const transformed = style.transform("TEST");
      expect(transformed.length).toBeGreaterThan(0);
    }
  });

  it("contains complete alphabet A-Z plus Ñ in GRAFFITI_ALPHABET", () => {
    expect(GRAFFITI_ALPHABET.length).toBe(27);
    const letters = GRAFFITI_ALPHABET.map((item) => item.letter);
    expect(letters).toContain("A");
    expect(letters).toContain("Z");
    expect(letters).toContain("Ñ");
  });

  it("contains preset names in GRAFFITI_PRESETS", () => {
    expect(GRAFFITI_PRESETS.length).toBeGreaterThanOrEqual(6);
    expect(GRAFFITI_PRESETS).toContain("Alex");
    expect(GRAFFITI_PRESETS).toContain("Diego");
    expect(GRAFFITI_PRESETS).toContain("Luna");
  });

  it("transforms text with fallback and preserves case where appropriate", () => {
    const res = transformGraffitiText("GRAFFITI", "graffiti-heavy-bold");
    expect(res).toBe("𝗚𝗥𝗔𝗙𝗙𝗜𝗧𝗜");

    const circleRes = transformGraffitiText("abc", "graffiti-bubble-circle");
    expect(circleRes).toBe("ⓐⓑⓒ");

    const taggedRes = transformGraffitiText("FLOW", "graffiti-crown-tag");
    expect(taggedRes).toContain("𝕱𝕷𝕺𝖂");
    expect(taggedRes).toContain("👑");
  });
});
