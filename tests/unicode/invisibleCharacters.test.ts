import { describe, expect, it } from "vitest";
import {
  INVISIBLE_CHARACTERS,
  DEFAULT_INVISIBLE_CHARACTER,
  inspectText,
  generateInvisibleSequence,
} from "@/lib/unicode/invisibleCharactersData";

describe("Invisible Characters Data and Utility Suite", () => {
  it("contains all standard invisible Unicode characters with verified attributes", () => {
    expect(INVISIBLE_CHARACTERS.length).toBeGreaterThanOrEqual(8);

    const hangul = INVISIBLE_CHARACTERS.find((c) => c.codePoint === "U+3164");
    expect(hangul).toBeDefined();
    expect(hangul?.name).toBe("HANGUL FILLER");
    expect(hangul?.hasWidth).toBe(true);
    expect(hangul?.whiteSpaceProperty).toBe(false);

    const braille = INVISIBLE_CHARACTERS.find((c) => c.codePoint === "U+2800");
    expect(braille).toBeDefined();
    expect(braille?.name).toBe("BRAILLE PATTERN BLANK");
    expect(braille?.hasWidth).toBe(true);

    const zwsp = INVISIBLE_CHARACTERS.find((c) => c.codePoint === "U+200B");
    expect(zwsp).toBeDefined();
    expect(zwsp?.name).toBe("ZERO WIDTH SPACE");
    expect(zwsp?.hasWidth).toBe(false);

    const nbsp = INVISIBLE_CHARACTERS.find((c) => c.codePoint === "U+00A0");
    expect(nbsp).toBeDefined();
    expect(nbsp?.name).toBe("NO-BREAK SPACE");
    expect(nbsp?.whiteSpaceProperty).toBe(true);
  });

  it("sets U+3164 as the default character", () => {
    expect(DEFAULT_INVISIBLE_CHARACTER.codePoint).toBe("U+3164");
  });

  it("accurately generates invisible sequences with exact repetition count", () => {
    const hangulChar = "\u3164";
    expect(generateInvisibleSequence(hangulChar, 1)).toBe("\u3164");
    expect(generateInvisibleSequence(hangulChar, 10).length).toBe(10);
    expect(generateInvisibleSequence(hangulChar, 50).length).toBe(50);
    expect(generateInvisibleSequence(hangulChar, 0)).toBe("");
    expect(generateInvisibleSequence(hangulChar, -5)).toBe("");
  });

  it("accurately calculates UTF-8 bytes and code points for invisible characters", () => {
    // U+3164 in UTF-8 is 3 bytes (0xE3 0x85 0xA4)
    const singleHangul = "\u3164";
    const res1 = inspectText(singleHangul);
    expect(res1.totalCodePoints).toBe(1);
    expect(res1.totalUtf8Bytes).toBe(3);
    expect(res1.totalInvisibleChars).toBe(1);
    expect(res1.totalVisibleChars).toBe(0);
    expect(res1.invisibleOccurrences.length).toBe(1);
    expect(res1.invisibleOccurrences[0].character.codePoint).toBe("U+3164");
    expect(res1.invisibleOccurrences[0].count).toBe(1);

    // U+200B in UTF-8 is 3 bytes (0xE2 0x80 0x8B)
    const singleZwsp = "\u200B";
    const res2 = inspectText(singleZwsp);
    expect(res2.totalCodePoints).toBe(1);
    expect(res2.totalUtf8Bytes).toBe(3);
    expect(res2.totalInvisibleChars).toBe(1);
    expect(res2.totalVisibleChars).toBe(0);

    // 10 hangul characters = 10 code points, 30 UTF-8 bytes
    const tenHangul = "\u3164".repeat(10);
    const res3 = inspectText(tenHangul);
    expect(res3.totalCodePoints).toBe(10);
    expect(res3.totalUtf8Bytes).toBe(30);
    expect(res3.totalInvisibleChars).toBe(10);
  });

  it("accurately inspects mixed text with visible Spanish characters, emojis, and invisible spaces", () => {
    const mixed = "Hola\u3164Mundo\u200B! \u2800🎮";
    const result = inspectText(mixed);

    expect(result.totalInvisibleChars).toBe(3); // U+3164, U+200B, U+2800
    expect(result.invisibleOccurrences.length).toBe(3);

    const foundHangul = result.invisibleOccurrences.find((o) => o.character.codePoint === "U+3164");
    expect(foundHangul?.count).toBe(1);

    const foundZwsp = result.invisibleOccurrences.find((o) => o.character.codePoint === "U+200B");
    expect(foundZwsp?.count).toBe(1);

    const foundBraille = result.invisibleOccurrences.find((o) => o.character.codePoint === "U+2800");
    expect(foundBraille?.count).toBe(1);

    // Tokens reflect both visible and invisible segments
    expect(result.tokens.filter((t) => t.isInvisible).length).toBe(3);
    expect(result.tokens.filter((t) => !t.isInvisible).length).toBe(result.totalVisibleChars);
  });

  it("handles empty strings and strings without invisible characters cleanly", () => {
    const emptyResult = inspectText("");
    expect(emptyResult.totalCodePoints).toBe(0);
    expect(emptyResult.totalUtf8Bytes).toBe(0);
    expect(emptyResult.totalInvisibleChars).toBe(0);
    expect(emptyResult.totalVisibleChars).toBe(0);
    expect(emptyResult.invisibleOccurrences.length).toBe(0);

    const normalResult = inspectText("Texto regular sin espacios raros");
    expect(normalResult.totalInvisibleChars).toBe(0);
    expect(normalResult.totalVisibleChars).toBe(Array.from("Texto regular sin espacios raros").length);
  });
});
