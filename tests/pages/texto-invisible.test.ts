import { describe, expect, it } from "vitest";
import { metadata } from "@/app/texto-invisible/page";
import fs from "fs";
import path from "path";

describe("Texto Invisible Page Suite", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    expect(metadata.title).toBe("Texto Invisible para Copiar y Pegar | LetrasBonitas");
    expect(metadata.description).toBe(
      "Copia texto invisible y espacios en blanco al instante. Elige caracteres Unicode (U+3164, U+2800, U+200B), genera la cantidad que necesitas y comprueba tu texto."
    );
    expect(metadata.alternates?.canonical).toContain("/texto-invisible/");
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe("Texto Invisible para Copiar y Pegar | LetrasBonitas");
    expect(metadata.openGraph?.url).toContain("/texto-invisible/");
    expect(metadata.openGraph?.locale).toBe("es_ES");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary_large_image");
  });

  it("ensures page source contains no em dash (—) or en dash (–) in Spanish content", () => {
    const pagePath = path.resolve(__dirname, "../../src/app/texto-invisible/page.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    // Check for em dash (U+2014) and en dash (U+2013)
    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
  });

  it("verifies structured data and key headings exist in page source", () => {
    const pagePath = path.resolve(__dirname, "../../src/app/texto-invisible/page.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content).toContain("Texto Invisible para <span className=\"gradient-text-cyan\">Copiar y Pegar</span>");
    expect(content).toContain("¿Qué es el texto invisible?");
    expect(content).toContain("Cómo copiar y pegar texto invisible paso a paso");
    expect(content).toContain("Tipos de caracteres invisibles y biblioteca Unicode");
    expect(content).toContain("Texto invisible para WhatsApp");
    expect(content).toContain("Texto invisible para Instagram");
    expect(content).toContain("Texto invisible para Free Fire y otros videojuegos");
    expect(content).toContain("Preguntas frecuentes sobre texto invisible");
    expect(content).toContain("WebApplication");
    expect(content).toContain("BreadcrumbList");
  });
});
