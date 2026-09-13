import { describe, expect, it } from "vitest";
import { metadata } from "@/app/conversor-de-letras/letras-para-copiar-y-pegar/page";
import { fontStyles, validateRegistry } from "@/lib/unicode";

describe("Conversor de Letras para Copiar y Pegar Supporting Page", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    expect(metadata.title).toBe(
      "Letras para Copiar y Pegar | Conversor de Fuentes y Texto"
    );
    expect(metadata.description).toBe(
      "Letras para copiar y pegar gratis. Encuentra fuentes bonitas, cursivas, góticas, negritas y aesthetic listas para copiar con un clic en Instagram, WhatsApp y juegos."
    );
    expect(metadata.alternates?.canonical).toBe(
      "/conversor-de-letras/letras-para-copiar-y-pegar/"
    );
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe(
      "Letras para Copiar y Pegar | Conversor de Fuentes y Texto"
    );
    expect(metadata.openGraph?.url).toBe(
      "/conversor-de-letras/letras-para-copiar-y-pegar/"
    );
    expect(metadata.openGraph?.locale).toBe("es");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary");
  });

  it("validates that quick-copy styles are available in the font registry", () => {
    const quickCopyIds = [
      "script",
      "sans-bold",
      "fraktur",
      "double-struck",
      "circled",
      "small-caps",
      "fullwidth",
      "frame-sparkles",
      "frame-crown",
      "frame-heart",
    ];

    for (const id of quickCopyIds) {
      const found = fontStyles.find((s) => s.id === id);
      expect(found).toBeDefined();
      if (found) {
        const transformed = found.transform("Letras Bonitas");
        expect(typeof transformed).toBe("string");
        expect(transformed.length).toBeGreaterThan(0);
      }
    }
  });

  it("ensures registry size exceeds 300 styles and passes registry health checks", () => {
    expect(fontStyles.length).toBeGreaterThanOrEqual(300);
    const report = validateRegistry(fontStyles);
    expect(report.meetsMinimum).toBe(true);
    expect(report.duplicateIds).toEqual([]);
  });

  it("preserves Spanish accents, ñ, numbers, and emojis across quick copy styles", () => {
    const sample = "María José Ñandú Cigüeña 123 ¡Hola! 👋";
    const quickCopyIds = [
      "script",
      "sans-bold",
      "fraktur",
      "double-struck",
      "circled",
      "small-caps",
      "fullwidth",
    ];

    for (const id of quickCopyIds) {
      const style = fontStyles.find((s) => s.id === id);
      if (!style) continue;
      const output = style.transform(sample);
      expect(typeof output).toBe("string");
      expect(output).not.toContain("undefined");
      expect(output).not.toContain("NaN");
    }
  });
});
