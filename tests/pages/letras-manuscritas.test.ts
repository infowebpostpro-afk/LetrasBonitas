import { describe, expect, it } from "vitest";
import { generateMetadata } from "@/app/letras-manuscritas/page";
import {
  MANUSCRITA_STYLES,
  MANUSCRITA_ALPHABETS,
} from "@/lib/unicode/manuscritasData";
import sitemap from "@/app/sitemap";
import fs from "fs";
import path from "path";

describe("Letras Manuscritas Page & Tool Suite", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    const meta = generateMetadata();
    expect(meta.title).toBe(
      "Letras Manuscritas Bonitas para Copiar y Pegar | LetrasBonitas"
    );
    expect(meta.description).toBe(
      "Crea letras manuscritas bonitas para nombres y frases. Explora estilos caligráficos, consulta el abecedario y copia tu favorito."
    );
    expect(meta.alternates?.canonical).toBe("/letras-manuscritas/");
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    const meta = generateMetadata();
    expect(meta.openGraph?.title).toBe(
      "Letras Manuscritas Bonitas para Copiar y Pegar | LetrasBonitas"
    );
    expect(meta.openGraph?.url).toBe("/letras-manuscritas/");
    expect(meta.openGraph?.locale).toBe("es");
    expect((meta.twitter as { card?: string })?.card).toBe("summary");
  });

  it("ensures page source contains no em dash (—) or en dash (–) in Spanish content", () => {
    const pagePath = path.resolve(
      __dirname,
      "../../src/app/letras-manuscritas/page.tsx"
    );
    const content = fs.readFileSync(pagePath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("ensures ManuscritasGenerator component contains no em dashes or en dashes", () => {
    const compPath = path.resolve(
      __dirname,
      "../../src/components/font-generator/ManuscritasGenerator.tsx"
    );
    const content = fs.readFileSync(compPath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("ensures manuscritasData file contains no em dashes or en dashes", () => {
    const dataPath = path.resolve(
      __dirname,
      "../../src/lib/unicode/manuscritasData.ts"
    );
    const content = fs.readFileSync(dataPath, "utf-8");

    expect(content.includes("\u2014")).toBe(false);
    expect(content.includes("—")).toBe(false);
    expect(content.includes("\u2013")).toBe(false);
    expect(content.includes("–")).toBe(false);
  });

  it("verifies structured data, single H1, and essential article headings exist in page source", () => {
    const pagePath = path.resolve(
      __dirname,
      "../../src/app/letras-manuscritas/page.tsx"
    );
    const content = fs.readFileSync(pagePath, "utf-8");

    // Single H1
    expect(content).toContain("Letras Manuscritas Bonitas para Copiar y Pegar");
    expect((content.match(/<h1/g) || []).length).toBe(1);

    // H2 Headings from article
    expect(content).toContain("Generador de letras manuscritas para copiar y pegar");
    expect(content).toContain("Cómo utilizar el generador");
    expect(content).toContain("¿Qué son las letras manuscritas?");
    expect(content).toContain("Tipos de letras manuscritas bonitas");
    expect(content).toContain("Abecedario de letras manuscritas");
    expect(content).toContain("¿Cómo se escriben la ñ y las letras con tilde?");
    expect(content).toContain("Letras manuscritas para nombres");
    expect(content).toContain("Letras manuscritas para Instagram, TikTok y WhatsApp");
    expect(content).toContain("Letras manuscritas para invitaciones y dedicatorias");
    expect(content).toContain("Letras manuscritas para dibujar");
    expect(content).toContain("Diferencias entre escritura manuscrita, caligrafía y lettering");
    expect(content).toContain("¿Las letras manuscritas son fuentes reales?");
    expect(content).toContain("¿Por qué algunas letras manuscritas no funcionan?");
    expect(content).toContain("Cómo elegir el mejor estilo manuscrito");
    expect(content).toContain("Preguntas frecuentes sobre letras manuscritas");
    expect(content).toContain("Conclusión");

    // Schemas
    expect(content).toContain("WebApplication");
    expect(content).toContain("BreadcrumbList");
    expect(content).toContain("FAQPage");
  });

  it("verifies curated manuscript styles library meets specifications", () => {
    expect(MANUSCRITA_STYLES.length).toBeGreaterThanOrEqual(15);

    const categories = new Set(MANUSCRITA_STYLES.map((m) => m.category));
    expect(categories.has("caligraficos")).toBe(true);
    expect(categories.has("inclinados")).toBe(true);
    expect(categories.has("decorados")).toBe(true);
  });

  it("verifies text transformations and fallback handling", () => {
    const scriptStyle = MANUSCRITA_STYLES.find((m) => m.id === "manuscrita-elegante");
    expect(scriptStyle).toBeDefined();

    if (scriptStyle) {
      const output = scriptStyle.transform("Luna");
      expect(output).toBe("ℒ𝓊𝓃𝒶");
    }

    const decoratedStyle = MANUSCRITA_STYLES.find((m) => m.id === "manuscrita-corazon");
    expect(decoratedStyle).toBeDefined();
    if (decoratedStyle) {
      const output = decoratedStyle.transform("Luna");
      expect(output).toContain("ℒ𝓊𝓃𝒶");
      expect(output).toBe("♡ ℒ𝓊𝓃𝒶 ♡");
    }
  });

  it("verifies alphabet reference models are populated", () => {
    expect(MANUSCRITA_ALPHABETS.length).toBeGreaterThanOrEqual(3);
    const scriptAbc = MANUSCRITA_ALPHABETS.find((a) => a.id === "elegante");
    expect(scriptAbc).toBeDefined();
    expect(scriptAbc?.uppercase).toContain("𝒜 ℬ 𝒞");
    expect(scriptAbc?.lowercase).toContain("𝒶 𝒷 𝒸");
  });

  it("verifies sitemap includes /letras-manuscritas/", () => {
    const siteMapEntries = sitemap();
    const entry = siteMapEntries.find((e) =>
      e.url.endsWith("/letras-manuscritas/")
    );
    expect(entry).toBeDefined();
    expect(entry?.priority).toBe(0.9);
  });
});
