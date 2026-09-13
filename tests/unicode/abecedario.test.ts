import { describe, expect, it } from "vitest";
import {
  cursiveStyles,
  validateCursiveRegistry,
} from "@/lib/unicode";

const ALPHABET_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALPHABET_LOWER = "abcdefghijklmnopqrstuvwxyz";

const TEST_INPUTS = [
  "Hola",
  "Hola Mundo",
  "Letras Bonitas",
  "España",
  "ÁÉÍÓÚ Ü Ñ",
  "áéíóú ü ñ",
  "1234567890",
  "Hola 123!",
  "@LetrasBonitas",
  "❤️",
  "Hello World",
  "",
  "a".repeat(300),
  "Café résumé naïve",
  "¿Cómo estás? ¡Bien!",
];

describe("abecedario cursivo — alphabet transforms", () => {
  it("transforms all 26 uppercase letters without error", () => {
    for (const style of cursiveStyles) {
      const result = style.transform(ALPHABET_UPPER);
      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(0);
    }
  });

  it("transforms all 26 lowercase letters without error", () => {
    for (const style of cursiveStyles) {
      const result = style.transform(ALPHABET_LOWER);
      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(0);
    }
  });

  it("transforms individual letters safely", () => {
    const letters = (ALPHABET_UPPER + ALPHABET_LOWER).split("");
    for (const style of cursiveStyles.slice(0, 10)) {
      for (const letter of letters) {
        const result = style.transform(letter);
        expect(typeof result).toBe("string");
        expect(result).not.toBe("");
      }
    }
  });
});

describe("abecedario cursivo — Spanish characters", () => {
  const spanishChars = ["á", "é", "í", "ó", "ú", "ü", "ñ", "Á", "É", "Í", "Ó", "Ú", "Ü", "Ñ"];

  it("preserves ñ/Ñ in transforms", () => {
    const baseStyle = cursiveStyles.find((s) => s.id === "cursive-mathematical-script");
    expect(baseStyle).toBeTruthy();
    const result = baseStyle!.transform("niño");
    expect(result).toContain("ñ");
    const resultUpper = baseStyle!.transform("NIÑO");
    expect(resultUpper).toContain("Ñ");
  });

  it("handles accented characters without corruption", () => {
    for (const style of cursiveStyles.slice(0, 20)) {
      for (const ch of spanishChars) {
        const result = style.transform(ch);
        expect(typeof result).toBe("string");
        expect(result).not.toMatch(/undefined|NaN/);
        expect(result.length).toBeGreaterThan(0);
      }
    }
  });

  it("handles 'España' safely across all styles", () => {
    for (const style of cursiveStyles) {
      const result = style.transform("España");
      expect(typeof result).toBe("string");
      expect(result).not.toMatch(/undefined|NaN/);
    }
  });
});

describe("abecedario cursivo — numbers and punctuation", () => {
  it("handles digits", () => {
    for (const style of cursiveStyles.slice(0, 20)) {
      const result = style.transform("0123456789");
      expect(typeof result).toBe("string");
      expect(result).not.toMatch(/undefined|NaN/);
    }
  });

  it("handles punctuation", () => {
    const punct = ".,;:!?()[]{}\"'-/\\@#$%&*";
    for (const style of cursiveStyles.slice(0, 20)) {
      const result = style.transform(punct);
      expect(typeof result).toBe("string");
    }
  });
});

describe("abecedario cursivo — comprehensive input safety", () => {
  it("handles all test inputs without crash or bad output", () => {
    for (const style of cursiveStyles) {
      for (const input of TEST_INPUTS) {
        const result = style.transform(input);
        expect(typeof result).toBe("string");
        expect(result).not.toMatch(/undefined|NaN/);
      }
    }
  });

  it("handles emoji without crash", () => {
    for (const style of cursiveStyles.slice(0, 20)) {
      const result = style.transform("Hola 😀🔥✨❤️");
      expect(typeof result).toBe("string");
    }
  });
});

describe("abecedario cursivo — registry health", () => {
  it("has at least 100 unique cursive styles", () => {
    expect(cursiveStyles.length).toBeGreaterThanOrEqual(100);
  });

  it("has no duplicate IDs or identical outputs", () => {
    const report = validateCursiveRegistry(cursiveStyles);
    expect(report.duplicateIds).toEqual([]);
    expect(report.identicalOutputs).toEqual([]);
    expect(report.meetsMinimum).toBe(true);
  });

  it("reports accurate total count", () => {
    const report = validateCursiveRegistry(cursiveStyles);
    expect(report.total).toBe(cursiveStyles.length);
    expect(report.total).toBeGreaterThanOrEqual(100);
  });
});
