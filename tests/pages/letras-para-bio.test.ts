import { describe, expect, it } from "vitest";
import { metadata } from "@/app/letras-para-instagram/letras-para-bio/page";
import { fontStyles } from "@/lib/unicode";

describe("Letras para Bio Page", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    expect(metadata.title).toBe(
      "Letras para Bio de Instagram para Copiar y Pegar"
    );
    expect(metadata.description).toBe(
      "Crea letras para bio de Instagram con estilos cursivos, aesthetic, elegantes y más. Escribe tu texto, elige un estilo, copia y pega."
    );
    expect(metadata.alternates?.canonical).toBe(
      "/letras-para-instagram/letras-para-bio/"
    );
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe(
      "Letras para Bio de Instagram para Copiar y Pegar"
    );
    expect(metadata.openGraph?.url).toBe(
      "/letras-para-instagram/letras-para-bio/"
    );
    expect(metadata.openGraph?.locale).toBe("es");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary");
  });

  it("has access to 300+ centralized Unicode font styles", () => {
    expect(fontStyles.length).toBeGreaterThanOrEqual(300);
  });

  it("preserves line breaks, Spanish accents, Ñ/ñ, numbers, punctuation, and emojis in multiline bios", () => {
    const multilineBio = "✨ Creador Digital Ñandú\n📍 México\n📩 Contacto: info@ejemplo.com ❤️ 123";
    for (const style of fontStyles) {
      const output = style.transform(multilineBio);
      expect(typeof output).toBe("string");
      expect(output).not.toContain("undefined");
      expect(output).not.toContain("NaN");
    }

    const scriptStyle = fontStyles.find((s) => s.id === "script");
    expect(scriptStyle).toBeTruthy();
    const scriptOutput = scriptStyle!.transform(multilineBio);
    expect(scriptOutput).toContain("\n");
    expect(scriptOutput).toMatch(/[ñÑ]/);
    expect(scriptOutput).toContain("❤️");
    expect(scriptOutput).toContain("✨");
  });

  it("produces valid real Unicode transformations for Instagram bio text", () => {
    const sampleBio = "Creador Digital";
    const cursiveStyle = fontStyles.find((s) => s.id === "script");
    expect(cursiveStyle).toBeTruthy();
    const result = cursiveStyle!.transform(sampleBio);
    expect(result).not.toBe(sampleBio);
    expect(result.length).toBeGreaterThan(0);
  });
});
