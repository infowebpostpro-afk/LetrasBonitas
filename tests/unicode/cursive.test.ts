import { describe, expect, it } from "vitest";
import {
  cursiveStyles,
  validateCursiveRegistry,
  CURSIVE_TOOL_CONFIG,
} from "@/lib/unicode";

const SAMPLES = [
  "Letras Bonitas",
  "Hola Mundo",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "ÁÉÍÓÚÜÑ",
  "áéíóúüñ",
  "1234567890",
  "Hola 123",
  "Hola, ¿cómo estás?",
  "¡Hola! ❤️✨🔥",
  "😀😍",
  "",
];

describe("cursive style registry", () => {
  it(`has at least ${CURSIVE_TOOL_CONFIG.minStylesRequired} styles`, () => {
    expect(cursiveStyles.length).toBeGreaterThanOrEqual(
      CURSIVE_TOOL_CONFIG.minStylesRequired,
    );
  });

  it("has unique ids and no identical outputs", () => {
    const report = validateCursiveRegistry(cursiveStyles);
    expect(report.duplicateIds).toEqual([]);
    expect(report.identicalOutputs).toEqual([]);
    expect(report.meetsMinimum).toBe(true);
  });

  it("every style returns a string safely", () => {
    for (const style of cursiveStyles) {
      for (const sample of SAMPLES) {
        const result = style.transform(sample);
        expect(typeof result).toBe("string");
        expect(result).not.toMatch(/undefined|NaN/);
      }
    }
  });

  it("preserves Spanish ñ and emoji", () => {
    const style = cursiveStyles.find((s) => s.id === "cursive-mathematical-script");
    expect(style).toBeTruthy();
    expect(style!.transform("niño")).toContain("ñ");
    expect(style!.transform("Hola 🔥")).toContain("🔥");
  });
});
