import { describe, expect, it } from "vitest";
import {
  fontStyles,
  TOOL_CONFIG,
  validateRegistry,
  assertRegistryHealthy,
  charCount,
  splitGraphemes,
} from "@/lib/unicode";
import { createMappingTransform, createReverseTransform, createUpsideDownTransform } from "@/lib/unicode/transforms";
import { upsideDown, boldSerif } from "@/lib/unicode/mappings/alphabets";

const SAMPLES = [
  "Hello",
  "Letras Bonitas",
  "Hola",
  "áéíóú",
  "ñ",
  "123",
  "😀",
  "❤️",
  "Hello 123!",
  "ÁÉÍÓÚÜÑ áéíóúüñ",
  "",
  "   ",
  "a".repeat(80),
];

describe("font style registry", () => {
  it(`has at least ${TOOL_CONFIG.minStylesRequired} styles`, () => {
    expect(fontStyles.length).toBeGreaterThanOrEqual(TOOL_CONFIG.minStylesRequired);
  });

  it("passes registry health checks", () => {
    expect(() => assertRegistryHealthy(fontStyles)).not.toThrow();
    const report = validateRegistry(fontStyles);
    expect(report.duplicateIds).toEqual([]);
  });

  it("every style returns a string and does not throw", () => {
    for (const style of fontStyles) {
      for (const sample of SAMPLES) {
        const result = style.transform(sample);
        expect(typeof result).toBe("string");
        expect(result).not.toMatch(/undefined|NaN/);
      }
    }
  });

  it("preserves emoji for mapping transforms", () => {
    const transform = createMappingTransform(boldSerif);
    expect(transform("Hola 😀")).toContain("😀");
    expect(transform("❤️")).toBe("❤️");
  });

  it("preserves Spanish accents when unmapped (preserve strategy)", () => {
    const transform = createMappingTransform(boldSerif);
    const out = transform("niño");
    expect(out).toContain("ñ");
  });
});

describe("unicode utils", () => {
  it("counts graphemes safely", () => {
    expect(charCount("hola")).toBe(4);
    expect(charCount("👨‍👩‍👧‍👦")).toBe(1);
  });

  it("splits without breaking surrogate pairs", () => {
    const parts = splitGraphemes("A🔥B");
    expect(parts).toContain("🔥");
    expect(parts.join("")).toBe("A🔥B");
  });
});

describe("special transforms", () => {
  it("reverses graphemes", () => {
    expect(createReverseTransform()("abc")).toBe("cba");
  });

  it("upside-down maps and reverses", () => {
    const out = createUpsideDownTransform(upsideDown)("ab");
    expect(typeof out).toBe("string");
    expect(out.length).toBeGreaterThan(0);
  });
});
