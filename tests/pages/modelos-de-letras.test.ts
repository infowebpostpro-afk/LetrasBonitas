import { describe, expect, it } from "vitest";
import { generateMetadata } from "@/app/tipos-de-letras/modelos-de-letras/page";
import {
  CURATED_MODELOS,
  ALPHABET_MODEL_EXAMPLES,
} from "@/lib/unicode/modelosLetrasData";
import sitemap from "@/app/sitemap";
import fs from "fs";
import path from "path";

describe("Modelos de Letras Page & Tool Suite", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    const meta = generateMetadata();
    expect(meta.title).toBe("Modelos de Letras Bonitas para Copiar y Pegar | LetrasBonitas");
    expect(meta.description).toBe(
      "Explora modelos de letras bonitas, cursivas, góticas y decoradas. Escribe tu nombre, compara estilos y copia tu diseño favorito."
    );
    expect(meta.alternates?.canonical).toBe("/tipos-de-letras/modelos-de-letras/");
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    const meta = generateMetadata();
    expect(meta.openGraph?.title).toBe("Modelos de Letras Bonitas para Copiar y Pegar | LetrasBonitas");
    expect(meta.openGraph?.url).toBe("/tipos-de-letras/modelos-de-letras/");
    expect(meta.openGraph?.locale).toBe("es");
    expect((meta.twitter as { card?: string })?.card).toBe("summary");
  });

  it("ensures page source contains no em dash (—) or en dash (–) in Spanish content", () => {
    const pagePath = path.resolve(
      __dirname,
      "../../src/app/tipos-de-letras/modelos-de-letras/page.tsx"
    );
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("ensures ModelosLetrasExplorer component contains no em dashes or en dashes", () => {
    const compPath = path.resolve(
      __dirname,
      "../../src/components/font-generator/ModelosLetrasExplorer.tsx"
    );
    const content = fs.readFileSync(compPath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("ensures modelosLetrasData file contains no em dashes or en dashes", () => {
    const dataPath = path.resolve(
      __dirname,
      "../../src/lib/unicode/modelosLetrasData.ts"
    );
    const content = fs.readFileSync(dataPath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("verifies structured data, single H1, and all essential article headings exist in page source", () => {
    const pagePath = path.resolve(
      __dirname,
      "../../src/app/tipos-de-letras/modelos-de-letras/page.tsx"
    );
    const content = fs.readFileSync(pagePath, "utf-8");

    // Single H1
    expect(content).toContain("Modelos de Letras Bonitas para Copiar y Pegar");
    expect((content.match(/<h1/g) || []).length).toBe(1);

    // H2 Headings from supplied article
    expect(content).toContain("¿Qué son los modelos de letras?");
    expect(content).toContain("Explora diferentes modelos de letras bonitas");
    expect(content).toContain("Cómo utilizar el generador de modelos de letras");
    expect(content).toContain("Modelos de letras del abecedario");
    expect(content).toContain("Modelos de letras para nombres");
    expect(content).toContain("Modelos de letras para Instagram, TikTok y WhatsApp");
    expect(content).toContain("Modelos de letras para títulos y frases");
    expect(content).toContain("Cómo elegir el mejor modelo de letra");
    expect(content).toContain("Diferencia entre modelos de letras, fuentes y tipografías");
    expect(content).toContain("Modelos de letras para dibujar y escribir a mano");
    expect(content).toContain("¿Qué pasa con la ñ y las letras con tilde?");
    expect(content).toContain("¿Por qué algunos modelos no se ven correctamente?");
    expect(content).toContain("Consejos para crear tus propios diseños de letras");
    expect(content).toContain("Preguntas frecuentes sobre modelos de letras");
    expect(content).toContain("Conclusión");

    // Schemas
    expect(content).toContain("WebApplication");
    expect(content).toContain("BreadcrumbList");
    expect(content).toContain("FAQPage");
  });

  it("verifies curated models library meets specifications (30+ models, 4 categories)", () => {
    expect(CURATED_MODELOS.length).toBeGreaterThanOrEqual(30);

    const categories = new Set(CURATED_MODELOS.map((m) => m.category));
    expect(categories.has("sencillos")).toBe(true);
    expect(categories.has("elegantes")).toBe(true);
    expect(categories.has("aesthetic")).toBe(true);
    expect(categories.has("decorados")).toBe(true);
  });

  it("verifies text formatting and Spanish character handling", () => {
    const boldModel = CURATED_MODELOS.find((m) => m.id === "negrita-serif");
    expect(boldModel).toBeDefined();

    if (boldModel) {
      const output = boldModel.transform("Luna");
      expect(output).toBe("𝐋𝐮𝐧𝐚");
    }

    // Accented / Spanish word
    const decorativeModel = CURATED_MODELOS.find((m) => m.id === "destellos-suaves");
    expect(decorativeModel).toBeDefined();
    if (decorativeModel) {
      const output = decorativeModel.transform("Sofía");
      expect(output).toContain("Sofía");
      expect(output).toBe("✧ Sofía ✧");
    }
  });

  it("verifies alphabet reference models are populated", () => {
    expect(ALPHABET_MODEL_EXAMPLES.length).toBeGreaterThanOrEqual(4);
    const boldAbc = ALPHABET_MODEL_EXAMPLES.find((a) => a.id === "negrita");
    expect(boldAbc).toBeDefined();
    expect(boldAbc?.uppercase).toContain("𝐀 𝐁 𝐂");
    expect(boldAbc?.lowercase).toContain("𝐚 𝐛 𝐜");
  });

  it("verifies sitemap includes /tipos-de-letras/modelos-de-letras/ with priority 0.8", () => {
    const siteMapEntries = sitemap();
    const entry = siteMapEntries.find((e) =>
      e.url.endsWith("/tipos-de-letras/modelos-de-letras/")
    );
    expect(entry).toBeDefined();
    expect(entry?.priority).toBe(0.8);
  });
});
