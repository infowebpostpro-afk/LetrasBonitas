import { describe, expect, it } from "vitest";
import { metadata } from "@/app/conversor-de-letras/page";
import { FONT_CATEGORIES, fontStyles, validateRegistry } from "@/lib/unicode";

describe("Conversor de Letras Pillar Page", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    expect(metadata.title).toBe(
      "Conversor de Letras Online | Letras Bonitas para Copiar y Pegar"
    );
    expect(metadata.description).toBe(
      "Usa nuestro conversor de letras para crear texto bonito, cursivo, elegante y aesthetic. Escribe, elige un estilo y copia tus letras para redes sociales."
    );
    expect(metadata.alternates?.canonical).toBe("/conversor-de-letras/");
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe(
      "Conversor de Letras Online | Letras Bonitas para Copiar y Pegar"
    );
    expect(metadata.openGraph?.url).toBe("/conversor-de-letras/");
    expect(metadata.openGraph?.locale).toBe("es");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary");
  });

  it("exposes minimum 300+ broad font styles", () => {
    expect(fontStyles.length).toBeGreaterThanOrEqual(300);
    const report = validateRegistry(fontStyles);
    expect(report.meetsMinimum).toBe(true);
    expect(report.duplicateIds).toEqual([]);
  });

  it("contains categories for broad font conversion", () => {
    const categoryIds = FONT_CATEGORIES.map((c) => c.id);
    expect(categoryIds).toContain("all");
    expect(categoryIds).toContain("popular");
    expect(categoryIds).toContain("favorites");
    expect(categoryIds).toContain("cursive");
    expect(categoryIds).toContain("elegant");
    expect(categoryIds).toContain("bold");
    expect(categoryIds).toContain("gothic");
    expect(categoryIds).toContain("aesthetic");
    expect(categoryIds).toContain("bubble");
    expect(categoryIds).toContain("small");
    expect(categoryIds).toContain("decorative");
    expect(categoryIds).toContain("symbols");
    expect(categoryIds).toContain("gaming");
    expect(categoryIds).toContain("kawaii");
  });

  it("preserves Spanish accents, ñ, numbers, and emojis without throwing errors", () => {
    const sample = "María José Ñandú Cigüeña 123 ¡Hola! 👋";
    for (const style of fontStyles) {
      const output = style.transform(sample);
      expect(typeof output).toBe("string");
      expect(output).not.toContain("undefined");
      expect(output).not.toContain("NaN");
    }
  });
});
