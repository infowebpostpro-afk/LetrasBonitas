import { describe, it, expect } from 'vitest';
import { searchEmojis, getRelatedEmojis, applySkinTone, EMOJIS, EMOJI_CATEGORIES } from '@/lib/unicode/emojiData';

describe('Emoji Data', () => {
  it('should have emojis dataset', () => {
    expect(EMOJIS.length).toBeGreaterThan(0);
  });

  it('should have categories defined', () => {
    expect(EMOJI_CATEGORIES.length).toBeGreaterThan(0);
  });

  it('should search emojis by Spanish name', () => {
    const results = searchEmojis('amor');
    expect(results.length).toBeGreaterThan(0);
    expect(results.some(e => e.nameEs.includes('amor') || e.aliases.includes('amor'))).toBe(true);
  });

  it('should search emojis by emotion', () => {
    const results = searchEmojis('feliz');
    expect(results.length).toBeGreaterThan(0);
  });

  it('should search emojis by category', () => {
    const results = searchEmojis('', 'caras-emociones');
    expect(results.length).toBeGreaterThan(0);
    expect(results.every(e => e.category === 'caras-emociones')).toBe(true);
  });

  it('should return all emojis when no query and category is todos', () => {
    const results = searchEmojis('', 'todos');
    expect(results.length).toBe(EMOJIS.length);
  });

  it('should handle accented characters in search', () => {
    const results1 = searchEmojis('corazon');
    const results2 = searchEmojis('corazón');
    expect(results1.length).toBeGreaterThan(0);
    expect(results2.length).toBeGreaterThan(0);
  });

  it('should get related emojis', () => {
    const emoji = EMOJIS[0];
    const related = getRelatedEmojis(emoji, 5);
    expect(related.length).toBeLessThanOrEqual(5);
    expect(related.every(r => r.id !== emoji.id)).toBe(true);
  });

  it('should apply skin tone to supported emojis', () => {
    const emoji = EMOJIS.find(e => e.skinToneSupport);
    if (emoji) {
      const withTone = applySkinTone(emoji, '🏻');
      expect(withTone).not.toBe(emoji.char);
    }
  });

  it('should not apply skin tone to unsupported emojis', () => {
    const emoji = EMOJIS.find(e => !e.skinToneSupport);
    if (emoji) {
      const withTone = applySkinTone(emoji, '🏻');
      expect(withTone).toBe(emoji.char);
    }
  });

  it('should handle empty search results', () => {
    const results = searchEmojis('xyzxyzxyz');
    expect(results.length).toBe(0);
  });

  it('should return relevant emojis for semantic queries (amor, triste, fiesta, dinero, estudiar, gracias)', () => {
    const amorResults = searchEmojis('amor').map(e => e.char);
    ['❤️', '🥰', '😍', '💕', '💘', '💖', '😘'].forEach(char => {
      expect(amorResults).toContain(char);
    });

    const tristeResults = searchEmojis('triste').map(e => e.char);
    ['😢', '😭', '😔', '😞', '🥺', '💔'].forEach(char => {
      expect(tristeResults).toContain(char);
    });

    const fiestaResults = searchEmojis('fiesta').map(e => e.char);
    ['🥳', '🎉', '🎊', '🍾', '🪩', '🎂'].forEach(char => {
      expect(fiestaResults).toContain(char);
    });

    const dineroResults = searchEmojis('dinero').map(e => e.char);
    ['💰', '💵', '💸', '🤑', '🪙', '💳'].forEach(char => {
      expect(dineroResults).toContain(char);
    });

    const estudiarResults = searchEmojis('estudiar').map(e => e.char);
    ['📚', '✏️', '📝', '🎓', '💻', '🧠'].forEach(char => {
      expect(estudiarResults).toContain(char);
    });

    const graciasResults = searchEmojis('gracias').map(e => e.char);
    ['🙏', '🫶', '❤️', '😊'].forEach(char => {
      expect(graciasResults).toContain(char);
    });
  });
});
