import { describe, it, expect } from "vitest";
import {
  toSmallCaps,
  toSuperscriptLower,
  toSuperscriptUpper,
  toSubscript,
  removeSpanishAccents,
  checkUnconvertedLetters,
  INDIVIDUAL_SMALL_CHARACTERS,
  SMALL_LETTER_STYLES,
} from "../../src/lib/unicode/smallLetterMappings";

describe("Small Letter Unicode Transformations", () => {
  it("converts hola to small caps correctly", () => {
    const res = toSmallCaps("hola");
    expect(res).toBe("ʜᴏʟᴀ");
  });

  it("converts uppercase and lowercase to small caps", () => {
    expect(toSmallCaps("HOLA")).toBe("ʜᴏʟᴀ");
    expect(toSmallCaps("abcdefghijklmnopqrstuvwxyz")).toBe("ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ");
  });

  it("converts hola to superscript lowercase", () => {
    expect(toSuperscriptLower("hola")).toBe("ʰᵒˡᵃ");
  });

  it("converts text to raised uppercase", () => {
    expect(toSuperscriptUpper("HOLA")).toBe("ᴴᴼᴸᴬ");
  });

  it("converts numbers to superscript and subscript", () => {
    expect(toSuperscriptLower("12345")).toBe("¹²³⁴⁵");
    expect(toSubscript("12345")).toBe("₁₂₃₄₅");
  });

  it("converts aero to subscript correctly", () => {
    expect(toSubscript("aero")).toBe("ₐₑᵣₒ");
  });

  it("preserves Spanish accents by default unless stripped", () => {
    expect(toSmallCaps("canción")).toBe("ᴄᴀɴᴄɪóɴ");
    expect(toSmallCaps("canción", true)).toBe("ᴄᴀɴᴄɪᴏɴ");
  });

  it("detects unconvertible characters accurately", () => {
    const unmapped = checkUnconvertedLetters("bqz", "subscript");
    expect(unmapped).toContain("b");
    expect(unmapped).toContain("q");
    expect(unmapped).toContain("z");
  });

  it("provides complete individual character library", () => {
    expect(INDIVIDUAL_SMALL_CHARACTERS.length).toBeGreaterThan(50);
    const versalitas = INDIVIDUAL_SMALL_CHARACTERS.filter((c) => c.category === "versalitas");
    expect(versalitas.length).toBe(26);
  });

  it("every style card generates valid text", () => {
    for (const style of SMALL_LETTER_STYLES) {
      const output = style.generate("Letras Bonitas", false);
      expect(typeof output).toBe("string");
      expect(output.length).toBeGreaterThan(0);
    }
  });
});
