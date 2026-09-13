import { describe, expect, it } from "vitest";
import { metadata } from "@/app/letras-cursivas/letras-cursivas-para-copiar-y-pegar/page";
import { cursiveStyles } from "@/lib/unicode/cursiveStyles";

describe("Letras Cursivas para Copiar y Pegar Page", () => {
  it("defines correct title, description, and canonical URL", () => {
    expect(metadata.title).toBe("Letras Cursivas para Copiar y Pegar | Generador Gratis");
    expect(metadata.description).toBe(
      "Letras cursivas para copiar y pegar. Convierte palabras y frases, compara estilos y copia tu texto cursivo para usarlo en redes sociales, bios y nombres."
    );
    expect(metadata.alternates?.canonical).toBe(
      "/letras-cursivas/letras-cursivas-para-copiar-y-pegar/"
    );
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe(
      "Letras Cursivas para Copiar y Pegar | Generador Gratis"
    );
    expect(metadata.openGraph?.url).toBe(
      "/letras-cursivas/letras-cursivas-para-copiar-y-pegar/"
    );
    expect(metadata.openGraph?.locale).toBe("es");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary");
  });

  it("safely handles Spanish accents and ñ across all cursive styles", () => {
    const spanishSample = "El texto en español con tildes (á, é, í, ó, ú, ü) y la letra ñ.";
    for (const style of cursiveStyles) {
      const output = style.transform(spanishSample);
      expect(typeof output).toBe("string");
      expect(output).not.toContain("undefined");
      expect(output).not.toContain("NaN");
      expect(output.length).toBeGreaterThan(0);
      expect(output).toMatch(/[ñÑ]/);
    }
  });
});
