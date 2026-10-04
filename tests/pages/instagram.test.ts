import { describe, expect, it } from "vitest";
import { metadata } from "@/app/letras-para-instagram/page";
import { fontStyles } from "@/lib/unicode";

describe("Letras para Instagram Page", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    expect(metadata.title).toBe(
      "Letras para Instagram: Bio, Nombres y Símbolos para Copiar"
    );
    expect(metadata.description).toBe(
      "Las mejores letras para Instagram: bios, nombres y símbolos listos para copiar y pegar. Dale un estilo único a tu perfil gratis."
    );
    expect(metadata.alternates?.canonical).toBe("/letras-para-instagram/");
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe(
      "Letras para Instagram: Bio, Nombres y Símbolos para Copiar"
    );
    expect(metadata.openGraph?.url).toBe("/letras-para-instagram/");
    expect(metadata.openGraph?.locale).toBe("es");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary");
  });

  it("has access to 300+ centralized Unicode font styles", () => {
    expect(fontStyles.length).toBeGreaterThanOrEqual(300);
  });

  it("preserves Spanish accents, Ñ/ñ, numbers, punctuation, and emojis across all font styles", () => {
    const spanishSample = "¡Hola, cómo estás? Ñandú ❤️ 123";
    for (const style of fontStyles) {
      const output = style.transform(spanishSample);
      expect(typeof output).toBe("string");
      expect(output).not.toContain("undefined");
      expect(output).not.toContain("NaN");
      expect(output).toMatch(/[ñÑ]/);
      expect(output).toContain("❤️");
      expect(output).toContain("¡");
    }
  });

  it("produces valid real Unicode transformations for Instagram sample text", () => {
    const sample = "Mi Bio de Instagram";
    const boldStyle = fontStyles.find((s) => s.id === "sans-bold");
    expect(boldStyle).toBeTruthy();
    const result = boldStyle!.transform(sample);
    expect(result).not.toBe(sample);
    expect(result.length).toBeGreaterThan(0);
  });
});
