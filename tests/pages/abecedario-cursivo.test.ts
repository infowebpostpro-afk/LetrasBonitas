import { describe, expect, it } from "vitest";
import { metadata } from "@/app/letras-cursivas/abecedario-cursivo/page";
import { cursiveStyles } from "@/lib/unicode/cursiveStyles";

describe("Abecedario Cursivo Page", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    expect(metadata.title).toBe("Abecedario Cursivo: Letras de la A a la Z para Copiar");
    expect(metadata.description).toBe(
      "Abecedario cursivo completo de la A a la Z. Copia letras cursivas mayúsculas y minúsculas, consulta ejemplos y descubre cómo usarlas en tus textos."
    );
    expect(metadata.alternates?.canonical).toBe("/letras-cursivas/abecedario-cursivo/");
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe("Abecedario Cursivo: Letras de la A a la Z para Copiar");
    expect(metadata.openGraph?.url).toBe("/letras-cursivas/abecedario-cursivo/");
    expect(metadata.openGraph?.locale).toBe("es");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary");
  });

  it("safely handles Spanish characters across all cursive styles", () => {
    const spanishText = "El abecedario en español incluye ñ, á, é, í, ó, ú y ü.";
    for (const style of cursiveStyles) {
      const transformed = style.transform(spanishText);
      expect(typeof transformed).toBe("string");
      expect(transformed).not.toContain("undefined");
      expect(transformed).not.toContain("NaN");
      expect(transformed.length).toBeGreaterThan(0);
      // Ensure ñ or original special chars are preserved safely
      expect(transformed).toMatch(/[ñÑ]/);
    }
  });
});
