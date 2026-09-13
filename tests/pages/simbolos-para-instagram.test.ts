import { describe, expect, it } from "vitest";
import { metadata } from "@/app/letras-para-instagram/simbolos-para-instagram/page";
import {
  INSTAGRAM_SYMBOLS,
  filterSymbolsByCategory,
  searchSymbols,
} from "@/lib/unicode/symbolsData";

describe("Símbolos para Instagram Page", () => {
  it("defines accurate metadata title, description, and canonical URL", () => {
    expect(metadata.title).toBe("Símbolos para Instagram: Copiar y Pegar");
    expect(metadata.description).toBe(
      "Encuentra símbolos para Instagram, corazones, estrellas, flores, flechas y separadores. Copia tus favoritos y pégalos en tu bio, captions y perfil."
    );
    expect(metadata.alternates?.canonical).toBe(
      "/letras-para-instagram/simbolos-para-instagram/"
    );
  });

  it("defines OpenGraph and Twitter social metadata", () => {
    expect(metadata.openGraph?.title).toBe(
      "Símbolos para Instagram: Copiar y Pegar"
    );
    expect(metadata.openGraph?.url).toBe(
      "/letras-para-instagram/simbolos-para-instagram/"
    );
    expect(metadata.openGraph?.locale).toBe("es");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary");
  });

  it("contains curated symbols dataset with multiple categories", () => {
    expect(INSTAGRAM_SYMBOLS.length).toBeGreaterThanOrEqual(50);
    const categories = new Set(INSTAGRAM_SYMBOLS.map((s) => s.category));
    expect(categories.has("corazones")).toBe(true);
    expect(categories.has("estrellas")).toBe(true);
    expect(categories.has("flechas")).toBe(true);
    expect(categories.has("flores")).toBe(true);
    expect(categories.has("aesthetic")).toBe(true);
  });

  it("filters symbols correctly by category", () => {
    const corazones = filterSymbolsByCategory(INSTAGRAM_SYMBOLS, "corazones", new Set());
    expect(corazones.length).toBeGreaterThan(0);
    expect(corazones.every((s) => s.category === "corazones")).toBe(true);
  });

  it("searches symbols by query cleanly", () => {
    const results = searchSymbols(INSTAGRAM_SYMBOLS, "corazon");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((s) => s.symbol === "♥" || s.symbol === "♡")).toBe(true);
  });

  it("handles multi-codepoint symbols and emojis without string corruption", () => {
    for (const sym of INSTAGRAM_SYMBOLS) {
      expect(typeof sym.symbol).toBe("string");
      expect(sym.symbol.length).toBeGreaterThan(0);
      expect(sym.symbol).not.toContain("undefined");
    }
  });
});
