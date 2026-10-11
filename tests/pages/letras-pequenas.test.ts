import { describe, expect, it } from "vitest";
import { generateMetadata } from "@/app/letras-pequenas/page";
import fs from "fs";
import path from "path";

describe("Letras Pequeñas Page Suite", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    const meta = generateMetadata();
    expect(meta.title).toBe("Letras Pequeñas para Copiar y Pegar | LetrasBonitas");
    expect(meta.description).toBe(
      "Convierte texto en letras pequeñas, versalitas, superíndices y subíndices. Copia letras chiquitas y números pequeños para nombres y biografías."
    );
    expect(meta.alternates?.canonical).toBe("/letras-pequenas/");
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    const meta = generateMetadata();
    expect(meta.openGraph?.title).toBe("Letras Pequeñas para Copiar y Pegar | LetrasBonitas");
    expect(meta.openGraph?.url).toBe("/letras-pequenas/");
    expect(meta.openGraph?.locale).toBe("es");
  });

  it("ensures page source contains no em dash (—) or en dash (–) in Spanish content", () => {
    const pagePath = path.resolve(__dirname, "../../src/app/letras-pequenas/page.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("ensures generator component also has no em dashes", () => {
    const genPath = path.resolve(__dirname, "../../src/components/font-generator/SmallLettersGenerator.tsx");
    const content = fs.readFileSync(genPath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
  });

  it("verifies structured data and key headings exist in page source", () => {
    const pagePath = path.resolve(__dirname, "../../src/app/letras-pequenas/page.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content).toContain("Letras Pequeñas para Copiar y Pegar");
    expect(content).toContain("¿Qué son las letras pequeñas?");
    expect(content).toContain("Cómo crear letras pequeñas online paso a paso");
    expect(content).toContain("Tipos de letras pequeñas disponibles en el generador");
    expect(content).toContain("Letras pequeñas para copiar y pegar: guía de uso práctico");
    expect(content).toContain("Abecedario de letras pequeñas de la A a la Z");
    expect(content).toContain("Letras pequeñas arriba para nombres y nicks");
    expect(content).toContain("Letras pequeñas para Free Fire");
    expect(content).toContain("Letras pequeñas para Instagram y TikTok");
    expect(content).toContain("Letras pequeñas para WhatsApp y Discord");
    expect(content).toContain("Números pequeños para copiar (Superíndice y Subíndice)");
    expect(content).toContain("Diferencia entre letras pequeñas, minúsculas y fuentes tipográficas");
    expect(content).toContain("Por qué algunas letras no se convierten y qué hacer");
    expect(content).toContain("Cómo elegir el mejor estilo de letra pequeña");
    expect(content).toContain("Problemas frecuentes al copiar letras pequeñas y soluciones");
    expect(content).toContain("Preguntas Frecuentes sobre las Letras Pequeñas");
    expect(content).toContain("WebApplication");
    expect(content).toContain("BreadcrumbList");
    expect(content).toContain("FAQPage");
  });

  it("verifies internal links to existing pages are present", () => {
    const pagePath = path.resolve(__dirname, "../../src/app/letras-pequenas/page.tsx");
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content).toContain('href="/conversor-de-letras/"');
    expect(content).toContain('href="/conversor-de-letras/letras-para-copiar-y-pegar/"');
    expect(content).toContain('href="/letras-aesthetic/"');
    expect(content).toContain('href="/letras-negritas/"');
    expect(content).toContain('href="/letras-cursivas/"');
    expect(content).toContain('href="/nombres-para-juegos/"');
    expect(content).toContain('href="/texto-invisible/"');
    expect(content).toContain('href="/nombres-para-free-fire/"');
    expect(content).toContain('href="/simbolos/"');
    expect(content).toContain('href="/letras-para-instagram/"');
  });
});
