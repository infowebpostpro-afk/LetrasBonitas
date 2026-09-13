import { describe, expect, it } from "vitest";
import { metadata } from "@/app/letras-cursivas/letras-cursivas-elegantes/page";
import { cursiveStyles, validateCursiveRegistry } from "@/lib/unicode/cursiveStyles";
import { ELEGANT_CATEGORIES } from "@/components/font-generator/ElegantCursivaTool";

describe("Letras Cursivas Elegantes Page", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    expect(metadata.title).toBe("Letras Cursivas Elegantes para Copiar y Pegar");
    expect(metadata.description).toBe(
      "Crea letras cursivas elegantes para copiar y pegar. Descubre estilos finos, caligráficos y decorativos para nombres, bios, frases y redes sociales."
    );
    expect(metadata.alternates?.canonical).toBe(
      "/letras-cursivas/letras-cursivas-elegantes/"
    );
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe(
      "Letras Cursivas Elegantes para Copiar y Pegar"
    );
    expect(metadata.openGraph?.url).toBe(
      "/letras-cursivas/letras-cursivas-elegantes/"
    );
    expect(metadata.openGraph?.locale).toBe("es");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary");
  });

  it("has minimum 100+ meaningful cursive styles (preferred 120-150)", () => {
    expect(cursiveStyles.length).toBeGreaterThanOrEqual(100);
    const report = validateCursiveRegistry(cursiveStyles);
    expect(report.meetsMinimum).toBe(true);
    expect(report.duplicateIds).toEqual([]);
    expect(report.identicalOutputs).toEqual([]);
  });

  it("contains categories for elegant cursive filtering", () => {
    const categoryIds = ELEGANT_CATEGORIES.map((c) => c.id);
    expect(categoryIds).toContain("all");
    expect(categoryIds).toContain("popular");
    expect(categoryIds).toContain("favorites");
    expect(categoryIds).toContain("elegant");
    expect(categoryIds).toContain("script");
    expect(categoryIds).toContain("calligraphy");
    expect(categoryIds).toContain("handwritten");
    expect(categoryIds).toContain("aesthetic");
    expect(categoryIds).toContain("delicate");
    expect(categoryIds).toContain("signature");
    expect(categoryIds).toContain("decorative");
    expect(categoryIds).toContain("symbols");
    expect(categoryIds).toContain("underlined");
    expect(categoryIds).toContain("spaced");
  });

  it("preserves Spanish accents and ñ across all styles without producing undefined or NaN", () => {
    const spanishSample = "María José Ñandú Cigüeña 123 ✨";
    for (const style of cursiveStyles) {
      const output = style.transform(spanishSample);
      expect(typeof output).toBe("string");
      expect(output).not.toContain("undefined");
      expect(output).not.toContain("NaN");
      expect(output).not.toContain("?");
      // Verify ñ or original accented char is retained safely
      expect(output).toMatch(/[ñÑ]/);
    }
  });

  it("produces valid real Unicode transformations", () => {
    const sample = "Letras Elegantes";
    const elegantStyle = cursiveStyles.find((s) => s.id === "cursive-mathematical-script");
    expect(elegantStyle).toBeTruthy();
    const result = elegantStyle!.transform(sample);
    expect(result).not.toBe(sample);
    expect(result.length).toBeGreaterThan(0);
  });
});
