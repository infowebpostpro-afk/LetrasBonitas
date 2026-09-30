import { describe, it, expect } from 'vitest';
import {
  AESTHETIC_VIBES,
  AESTHETIC_COLOR_PALETTES,
  generateAestheticCombo,
  searchAestheticContent,
  ALL_READY_COMBOS,
} from '@/lib/unicode/aestheticEmojiData';
import { metadata } from '@/app/emojis/aesthetic/page';

describe('Emojis Aesthetic (/emojis/aesthetic/)', () => {
  it('should have all 11 core aesthetic vibes defined', () => {
    expect(AESTHETIC_VIBES.length).toBe(11);
    const ids = AESTHETIC_VIBES.map(v => v.id);
    expect(ids).toContain('coquette');
    expect(ids).toContain('soft');
    expect(ids).toContain('celestial');
    expect(ids).toContain('dark-academia');
    expect(ids).toContain('cottagecore');
    expect(ids).toContain('y2k');
    expect(ids).toContain('dark');
    expect(ids).toContain('ocean');
    expect(ids).toContain('nature');
    expect(ids).toContain('romantic');
    expect(ids).toContain('minimal');
  });

  it('should generate combinations of specified lengths', () => {
    [2, 3, 4, 5].forEach(len => {
      const combo = generateAestheticCombo('coquette', len, 'solo-emojis');
      const items = combo.split(' ').filter(Boolean);
      expect(items.length).toBe(len);
    });
  });

  it('should generate combinations with symbols in emojis-simbolos mode', () => {
    const combo = generateAestheticCombo('celestial', 4, 'emojis-simbolos');
    const items = combo.split(' ').filter(Boolean);
    expect(items.length).toBeGreaterThanOrEqual(3);
  });

  it('should search by color palette correctly (rosa, luna, dark)', () => {
    const rosaSearch = searchAestheticContent('rosa');
    expect(rosaSearch.combos.length).toBeGreaterThan(0);
    expect(rosaSearch.emojis.length).toBeGreaterThan(0);

    const lunaSearch = searchAestheticContent('luna');
    expect(lunaSearch.combos.length).toBeGreaterThan(0);

    const darkSearch = searchAestheticContent('dark');
    expect(darkSearch.combos.length).toBeGreaterThan(0);
  });

  it('should have ready-made combinations', () => {
    expect(ALL_READY_COMBOS.length).toBeGreaterThan(40);
  });

  it('should have correct SEO metadata', () => {
    expect(metadata.title).toBe('Emojis Aesthetic para Copiar y Pegar | LetrasBonitas');
    expect(metadata.description).toContain('Crea combinaciones de emojis aesthetic');
    expect(metadata.alternates?.canonical).toBe('https://letrasbonits.com/emojis/aesthetic/');
    expect(metadata.openGraph?.title).toBe('Emojis Aesthetic y Combinaciones | LetrasBonitas');
    expect(metadata.openGraph?.url).toBe('https://letrasbonits.com/emojis/aesthetic/');
  });
});
