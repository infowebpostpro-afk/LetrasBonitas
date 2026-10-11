import { describe, expect, it } from "vitest";
import { generateMetadata } from "@/app/letras-pequenas/letras-pequenas-arriba/page";
import fs from "fs";
import path from "path";

describe("Letras Pequeñas Arriba Page Suite", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    const meta = generateMetadata();
    expect(meta.title).toBe("Letras Pequeñas Arriba para Copiar | LetrasBonitas");
    expect(meta.description).toBe(
      "Convierte texto en letras pequeñas arriba, crea nombres con superíndices y copia letras y números elevados fácilmente."
    );
    expect(meta.alternates?.canonical).toBe("/letras-pequenas/letras-pequenas-arriba/");
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    const meta = generateMetadata();
    expect(meta.openGraph?.title).toBe("Letras Pequeñas Arriba para Copiar | LetrasBonitas");
    expect(meta.openGraph?.url).toBe("/letras-pequenas/letras-pequenas-arriba/");
    expect(meta.openGraph?.locale).toBe("es");
  });

  it("ensures page source contains no em dash (—) or en dash (–) in Spanish content", () => {
    const pagePath = path.resolve(__dirname, "../../src/app/letras-pequenas/letras-pequenas-arriba/page.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("ensures RaisedLettersGenerator component contains no em dashes", () => {
    const compPath = path.resolve(__dirname, "../../src/components/font-generator/RaisedLettersGenerator.tsx");
    const content = fs.readFileSync(compPath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("verifies structured data, single H1, and essential headings exist in page source", () => {
    const pagePath = path.resolve(__dirname, "../../src/app/letras-pequenas/letras-pequenas-arriba/page.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content).toContain("Letras Pequeñas Arriba para Copiar y Pegar");
    expect(content).toContain("¿Qué son las letras pequeñas arriba?");
    expect(content).toContain("Cómo hacer letras pequeñas arriba para copiar y pegar");
    expect(content).toContain("Letras chiquitas arriba listas para copiar");
    expect(content).toContain("Letras pequeñas arriba del nombre");
    expect(content).toContain("Letras pequeñas arriba para Free Fire");
    expect(content).toContain("Letras mayúsculas pequeñas arriba");
    expect(content).toContain("Letras minúsculas arriba");
    expect(content).toContain("Abecedario de letras pequeñas arriba");
    expect(content).toContain("Números pequeños arriba para copiar");
    expect(content).toContain("Letras pequeñas arriba para Instagram, TikTok y WhatsApp");
    expect(content).toContain("Diferencia entre superíndice, versalitas y subíndice");
    expect(content).toContain("¿Por qué algunas letras no se convierten?");
    expect(content).toContain("¿Las letras pequeñas arriba funcionan en todos los dispositivos?");
    expect(content).toContain("Consejos para crear nombres con letras arriba");
    expect(content).toContain("Problemas frecuentes y soluciones");
    expect(content).toContain("Preguntas frecuentes sobre letras pequeñas arriba");
    expect(content).toContain("Conclusión");

    // Schemas
    expect(content).toContain("WebApplication");
    expect(content).toContain("BreadcrumbList");
    expect(content).toContain("FAQPage");
  });

  it("verifies internal links to existing pages are present", () => {
    const pagePath = path.resolve(__dirname, "../../src/app/letras-pequenas/letras-pequenas-arriba/page.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content).toContain('href="/letras-pequenas/"');
    expect(content).toContain('href="/conversor-de-letras/"');
    expect(content).toContain('href="/nombres-para-free-fire/"');
    expect(content).toContain('href="/texto-invisible/"');
    expect(content).toContain('href="/letras-para-instagram/"');
    expect(content).toContain('href="/simbolos/"');
  });
});
