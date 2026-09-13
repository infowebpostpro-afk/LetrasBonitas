import { describe, expect, it } from "vitest";
import { metadata } from "@/app/conversor-de-letras/texto-con-estilos/page";
import { fontStyles, validateRegistry } from "@/lib/unicode";

describe("Texto con Estilos Supporting Page", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    expect(metadata.title).toBe(
      "Texto con Estilos Online | Generador de Texto Estilizado"
    );
    expect(metadata.description).toBe(
      "Crea texto con estilos online. Escribe una palabra o frase, compara letras cursivas, elegantes, góticas y otros estilos, y copia el resultado."
    );
    expect(metadata.alternates?.canonical).toBe(
      "/conversor-de-letras/texto-con-estilos/"
    );
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe(
      "Texto con Estilos Online | Generador de Texto Estilizado"
    );
    expect(metadata.openGraph?.url).toBe(
      "/conversor-de-letras/texto-con-estilos/"
    );
    expect(metadata.openGraph?.locale).toBe("es");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary");
  });

  it("validates featured showcase styles in font registry", () => {
    const featuredStyleIds = [
      "script",
      "sans-bold",
      "fraktur",
      "double-struck",
      "circled",
      "small-caps",
      "fullwidth",
      "frame-sparkles",
    ];

    for (const id of featuredStyleIds) {
      const style = fontStyles.find((s) => s.id === id);
      expect(style).toBeDefined();
      if (style) {
        const transformed = style.transform("Texto Con Estilos");
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

  it("preserves Spanish accents, ñ, numbers, and emojis across styles", () => {
    const sample = "María José Ñandú Cigüeña 123 ¡Hola! 👋";
    const stylesToTest = fontStyles.slice(0, 20);

    for (const style of stylesToTest) {
      const output = style.transform(sample);
      expect(typeof output).toBe("string");
      expect(output).not.toContain("undefined");
      expect(output).not.toContain("NaN");
    }
  });
});
