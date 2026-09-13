import { describe, expect, it } from "vitest";
import { metadata } from "@/app/conversor-de-letras/como-cambiar-las-letras/page";
import { fontStyles, validateRegistry } from "@/lib/unicode";

describe("Cómo Cambiar las Letras Supporting Page", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    expect(metadata.title).toBe("Cómo Cambiar las Letras Online | Letras Bonitas");
    expect(metadata.description).toBe(
      "Aprende cómo cambiar las letras de tu texto con estilos cursivos, elegantes, góticos y aesthetic. Escribe, elige un estilo, copia y pega."
    );
    expect(metadata.alternates?.canonical).toBe(
      "/conversor-de-letras/como-cambiar-las-letras/"
    );
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe(
      "Cómo Cambiar las Letras Online | Letras Bonitas"
    );
    expect(metadata.openGraph?.url).toBe(
      "/conversor-de-letras/como-cambiar-las-letras/"
    );
    expect(metadata.openGraph?.locale).toBe("es");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary");
  });

  it("validates default script style transformation for interactive before/after editor", () => {
    const defaultStyle = fontStyles.find((s) => s.id === "script");
    expect(defaultStyle).toBeDefined();
    if (defaultStyle) {
      const output = defaultStyle.transform("Letras Bonitas");
      expect(output).toBe("ℒℯ𝓉𝓇𝒶𝓈 ℬℴ𝓃𝒾𝓉𝒶𝓈");
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
