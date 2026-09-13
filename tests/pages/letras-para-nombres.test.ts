import { describe, expect, it } from "vitest";
import { metadata } from "@/app/letras-para-instagram/letras-para-nombres/page";
import { fontStyles } from "@/lib/unicode";

describe("Letras para Nombres Page", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    expect(metadata.title).toBe(
      "Letras para Nombres: Bonitas para Copiar y Pegar"
    );
    expect(metadata.description).toBe(
      "Crea letras para nombres bonitas y originales. Prueba estilos cursivos, góticos, aesthetic, negrita y más. Escribe, compara y copia tu nombre."
    );
    expect(metadata.alternates?.canonical).toBe(
      "/letras-para-instagram/letras-para-nombres/"
    );
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe(
      "Letras para Nombres: Bonitas para Copiar y Pegar"
    );
    expect(metadata.openGraph?.url).toBe(
      "/letras-para-instagram/letras-para-nombres/"
    );
    expect(metadata.openGraph?.locale).toBe("es");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary");
  });

  it("has access to 300+ centralized Unicode font styles", () => {
    expect(fontStyles.length).toBeGreaterThanOrEqual(300);
  });

  it("preserves Spanish accents, Ñ/ñ, numbers, punctuation, and emojis in names", () => {
    const spanishName = "María José Ñandú ✨ 123";
    for (const style of fontStyles) {
      const output = style.transform(spanishName);
      expect(typeof output).toBe("string");
      expect(output).not.toContain("undefined");
      expect(output).not.toContain("NaN");
    }

    const scriptStyle = fontStyles.find((s) => s.id === "script");
    expect(scriptStyle).toBeTruthy();
    const scriptOutput = scriptStyle!.transform(spanishName);
    expect(scriptOutput).toMatch(/[ñÑ]/);
    expect(scriptOutput).toContain("✨");
  });

  it("produces valid real Unicode transformations for Instagram name text", () => {
    const sampleName = "Sara López";
    const boldStyle = fontStyles.find((s) => s.id === "sans-bold");
    expect(boldStyle).toBeTruthy();
    const result = boldStyle!.transform(sampleName);
    expect(result).not.toBe(sampleName);
    expect(result.length).toBeGreaterThan(0);
  });
});
