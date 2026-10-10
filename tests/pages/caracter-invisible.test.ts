import { describe, expect, it } from "vitest";
import { metadata } from "@/app/texto-invisible/caracter-invisible/page";
import {
  UNICODE_INVISIBLE_LIBRARY,
  DEFAULT_CARACTER_INVISIBLE,
  inspectTextDetailed,
  generateCharacterSequence,
} from "@/lib/unicode/caracterInvisibleData";
import fs from "fs";
import path from "path";

describe("Carácter Invisible Child Page Suite", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    expect(metadata.title).toBe("Carácter Invisible para Copiar y Pegar | LetrasBonitas");
    expect(metadata.description).toBe(
      "Copia caracteres invisibles, explora sus códigos Unicode y detecta símbolos ocultos en cualquier texto con nuestra herramienta gratuita."
    );
    expect(metadata.alternates?.canonical).toContain("/texto-invisible/caracter-invisible/");
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe("Carácter Invisible para Copiar y Pegar | LetrasBonitas");
    expect(metadata.openGraph?.url).toContain("/texto-invisible/caracter-invisible/");
    expect(metadata.openGraph?.locale).toBe("es_ES");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary_large_image");
  });

  it("ensures page source contains no em dash (—) or en dash (–) in Spanish content", () => {
    const pagePath = path.resolve(__dirname, "../../src/app/texto-invisible/caracter-invisible/page.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("ensures tool component contains no em dash (—) or en dash (–)", () => {
    const toolPath = path.resolve(__dirname, "../../src/components/font-generator/CaracterInvisibleTool.tsx");
    const content = fs.readFileSync(toolPath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("verifies structured data and key headings exist in page source", () => {
    const pagePath = path.resolve(__dirname, "../../src/app/texto-invisible/caracter-invisible/page.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content).toContain("Carácter Invisible para Copiar y Pegar");
    expect(content).toContain("¿Qué es un carácter invisible?");
    expect(content).toContain("Cómo copiar y pegar un carácter invisible");
    expect(content).toContain("Tipos de caracteres invisibles Unicode");
    expect(content).toContain("Diferencia entre carácter invisible, espacio en blanco y texto invisible");
    expect(content).toContain("Cómo detectar caracteres invisibles en un texto");
    expect(content).toContain("Cómo identificar el código Unicode de un carácter oculto");
    expect(content).toContain("Para qué sirven los caracteres invisibles");
    expect(content).toContain("Caracteres invisibles en WhatsApp, Instagram y Discord");
    expect(content).toContain("Caracteres invisibles para Free Fire y otros juegos");
    expect(content).toContain("Por qué algunos caracteres invisibles no funcionan");
    expect(content).toContain("Cómo eliminar caracteres invisibles no deseados");
    expect(content).toContain("Riesgos y limitaciones de los caracteres invisibles");
    expect(content).toContain("Qué carácter invisible elegir según tu objetivo");
    expect(content).toContain("Preguntas frecuentes sobre caracteres invisibles");
    expect(content).toContain("WebApplication");
    expect(content).toContain("BreadcrumbList");
    expect(content).toContain("Inicio");
    expect(content).toContain("Texto Invisible");
    expect(content).toContain("Carácter Invisible");
  });

  it("verifies the Unicode library entries and categories", () => {
    expect(UNICODE_INVISIBLE_LIBRARY.length).toBeGreaterThanOrEqual(10);
    const codePoints = UNICODE_INVISIBLE_LIBRARY.map((c) => c.codePoint);
    expect(codePoints).toContain("U+200B"); // Zero Width Space
    expect(codePoints).toContain("U+200C"); // ZWNJ
    expect(codePoints).toContain("U+200D"); // ZWJ
    expect(codePoints).toContain("U+2060"); // Word Joiner
    expect(codePoints).toContain("U+3164"); // Hangul Filler
    expect(codePoints).toContain("U+2800"); // Braille Blank
    expect(codePoints).toContain("U+00AD"); // Soft Hyphen
    expect(codePoints).toContain("U+00A0"); // No-Break Space

    expect(DEFAULT_CARACTER_INVISIBLE.codePoint).toBe("U+3164");
  });

  it("verifies detailed inspection logic with positions and clean text generation", () => {
    const sample = "Hola\u200BMundo \u3164";
    const result = inspectTextDetailed(sample);

    // Code points: H(1), o(2), l(3), a(4), U+200B(5), M(6), u(7), n(8), d(9), o(10), space(11), U+3164(12)
    expect(result.totalCodePoints).toBe(12);
    expect(result.totalInvisibleChars).toBe(2);
    expect(result.totalNormalSpaces).toBe(1);
    expect(result.totalVisibleChars).toBe(9);

    expect(result.detectedCharacters).toHaveLength(2);
    expect(result.detectedCharacters[0].codePoint).toBe("U+200B");
    expect(result.detectedCharacters[0].zeroBasedIndex).toBe(4);
    expect(result.detectedCharacters[0].oneBasedIndex).toBe(5);

    expect(result.detectedCharacters[1].codePoint).toBe("U+3164");
    expect(result.detectedCharacters[1].zeroBasedIndex).toBe(11);
    expect(result.detectedCharacters[1].oneBasedIndex).toBe(12);

    // Cleaned text strips U+200B and U+3164, preserves "HolaMundo "
    expect(result.cleanedText).toBe("HolaMundo ");
  });

  it("verifies sequence generator logic", () => {
    const seq = generateCharacterSequence("\u200B", 5);
    expect(Array.from(seq)).toHaveLength(5);
    expect(seq).toBe("\u200B\u200B\u200B\u200B\u200B");

    expect(generateCharacterSequence("\u3164", 0)).toBe("");
    expect(generateCharacterSequence("\u3164", -1)).toBe("");
  });
});
