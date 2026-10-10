import { describe, expect, it } from "vitest";
import { metadata } from "@/app/texto-invisible/espacio-en-blanco/page";
import {
  BLANK_SPACE_CHARACTERS,
  DEFAULT_BLANK_SPACE,
  generateBlankSpaceSequence,
  inspectBlankSpaceText,
} from "@/lib/unicode/blankSpaceCharactersData";
import fs from "fs";
import path from "path";

describe("Espacio en Blanco Child Page Suite", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    expect(metadata.title).toBe("Espacio en Blanco para Copiar y Pegar | LetrasBonitas");
    expect(metadata.description).toBe(
      "Copia espacios en blanco en un clic. Elige caracteres Unicode, genera la cantidad que necesitas y comprueba el resultado fácilmente."
    );
    expect(metadata.alternates?.canonical).toContain("/texto-invisible/espacio-en-blanco/");
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe("Espacio en Blanco para Copiar y Pegar | LetrasBonitas");
    expect(metadata.openGraph?.url).toContain("/texto-invisible/espacio-en-blanco/");
    expect(metadata.openGraph?.locale).toBe("es_ES");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary_large_image");
  });

  it("ensures page source contains no em dash (—) or en dash (–) in Spanish content", () => {
    const pagePath = path.resolve(__dirname, "../../src/app/texto-invisible/espacio-en-blanco/page.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("ensures tool component contains no em dash (—) or en dash (–)", () => {
    const toolPath = path.resolve(__dirname, "../../src/components/font-generator/EspacioEnBlancoTool.tsx");
    const content = fs.readFileSync(toolPath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("verifies structured data and key headings exist in page source", () => {
    const pagePath = path.resolve(__dirname, "../../src/app/texto-invisible/espacio-en-blanco/page.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content).toContain("Espacio en Blanco para Copiar y Pegar");
    expect(content).toContain("¿Qué es un espacio en blanco para copiar y pegar?");
    expect(content).toContain("Cómo copiar y pegar un espacio en blanco");
    expect(content).toContain("Tipos de espacios en blanco y caracteres Unicode");
    expect(content).toContain("Diferencia entre espacio normal, espacio invisible y ancho cero");
    expect(content).toContain("Cómo generar espacios en blanco largos");
    expect(content).toContain("Cómo separar palabras, nombres y símbolos");
    expect(content).toContain("Espacios en blanco para WhatsApp e Instagram");
    expect(content).toContain("Espacio en blanco para Free Fire y otros juegos");
    expect(content).toContain("Por qué desaparecen algunos espacios al pegar");
    expect(content).toContain("Cómo comprobar si un texto contiene espacios invisibles");
    expect(content).toContain("Qué espacio en blanco elegir según lo que necesitas");
    expect(content).toContain("Errores frecuentes y cómo solucionarlos");
    expect(content).toContain("Preguntas frecuentes sobre el espacio en blanco");
    expect(content).toContain("WebApplication");
    expect(content).toContain("BreadcrumbList");
    expect(content).toContain("Inicio");
    expect(content).toContain("Texto Invisible");
    expect(content).toContain("Espacio en Blanco");
  });

  it("verifies all 7 blank space characters are present and accurately configured", () => {
    expect(BLANK_SPACE_CHARACTERS).toHaveLength(7);
    const codePoints = BLANK_SPACE_CHARACTERS.map((c) => c.codePoint);
    expect(codePoints).toContain("U+3164"); // Hangul Filler
    expect(codePoints).toContain("U+2800"); // Braille Blank
    expect(codePoints).toContain("U+2003"); // Em Space
    expect(codePoints).toContain("U+00A0"); // No-Break Space
    expect(codePoints).toContain("U+2009"); // Thin Space
    expect(codePoints).toContain("U+0020"); // Normal Space
    expect(codePoints).toContain("U+200B"); // Zero Width Space

    expect(DEFAULT_BLANK_SPACE.codePoint).toBe("U+3164");
  });

  it("verifies generator logic with single and multiline options", () => {
    const single = generateBlankSpaceSequence("\u3164", 5);
    expect(single.codePointCount).toBe(5);
    expect(single.lineCount).toBe(1);
    expect(single.text).toBe("\u3164\u3164\u3164\u3164\u3164");

    const multiline = generateBlankSpaceSequence("\u3164", 10, true, 5);
    expect(multiline.lineCount).toBe(2);
    expect(multiline.text).toBe("\u3164\u3164\u3164\u3164\u3164\n\u3164\u3164\u3164\u3164\u3164");
    expect(multiline.codePointCount).toBe(11); // 10 chars + 1 newline
  });

  it("verifies inspection utility identifies blank characters accurately", () => {
    const sample = "Hola\u3164Mundo\u2800";
    const result = inspectBlankSpaceText(sample);
    expect(result.totalCodePoints).toBe(11); // Hola (4) + U+3164 (1) + Mundo (5) + U+2800 (1)
    expect(result.totalBlankChars).toBe(2);
    expect(result.totalVisibleChars).toBe(9);
    expect(result.blankOccurrences).toHaveLength(2);
  });
});
