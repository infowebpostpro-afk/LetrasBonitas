import { describe, expect, it } from "vitest";
import { metadata } from "@/app/letras-para-instagram/letras-cursivas-para-instagram/page";
import { fontStyles } from "@/lib/unicode";

describe("Letras Cursivas para Instagram Page", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    expect(metadata.title).toBe("Letras Cursivas para Instagram: Copiar y Pegar");
    expect(metadata.description).toBe(
      "Genera letras cursivas para Instagram, escribe tu texto, compara estilos y copia el resultado para tu bio, nombre, publicaciones o comentarios."
    );
    expect(metadata.alternates?.canonical).toBe(
      "/letras-para-instagram/letras-cursivas-para-instagram/"
    );
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe(
      "Letras Cursivas para Instagram: Copiar y Pegar"
    );
    expect(metadata.openGraph?.url).toBe(
      "/letras-para-instagram/letras-cursivas-para-instagram/"
    );
    expect(metadata.openGraph?.locale).toBe("es");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary");
  });

  it("has access to centralized Unicode font styles registry", () => {
    expect(fontStyles.length).toBeGreaterThanOrEqual(300);
  });

  it("preserves line breaks, Spanish accents, Ñ/ñ, numbers, punctuation, and emojis in cursive bios/captions", () => {
    const multilineBio = "✨ Digital Creator Ñandú\n📍 México\n📩 Contacto: info@ejemplo.com ❤️ 123";
    const scriptStyle = fontStyles.find((s) => s.id === "script");
    expect(scriptStyle).toBeTruthy();

    const output = scriptStyle!.transform(multilineBio);
    expect(typeof output).toBe("string");
    expect(output).not.toContain("undefined");
    expect(output).not.toContain("NaN");
    expect(output).toContain("\n");
    expect(output).toMatch(/[ñÑ]/);
    expect(output).toContain("❤️");
    expect(output).toContain("✨");
  });

  it("produces valid real Unicode cursive transformations for Instagram text", () => {
    const sample = "Mi estilo para Instagram";
    const scriptStyle = fontStyles.find((s) => s.id === "script");
    expect(scriptStyle).toBeTruthy();
    const result = scriptStyle!.transform(sample);
    expect(result).not.toBe(sample);
    expect(result.length).toBeGreaterThan(0);
  });
});
