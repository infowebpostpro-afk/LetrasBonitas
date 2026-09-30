import { describe, it, expect } from 'vitest';
import {
  BONITO_CATEGORIES,
  BONITO_EMOJIS,
  COMBOS_BONITOS,
  searchBonitos,
} from '@/lib/unicode/bonitosEmojiData';
import { metadata } from '@/app/emojis/bonitos/page';

describe('Emojis Bonitos (/emojis/bonitos/)', () => {
  it('should have all 12 categories defined', () => {
    expect(BONITO_CATEGORIES.length).toBe(12);
    const ids = BONITO_CATEGORIES.map(c => c.id);
    expect(ids).toContain('amor');
    expect(ids).toContain('flores');
    expect(ids).toContain('brillos');
    expect(ids).toContain('cute');
    expect(ids).toContain('naturaleza');
    expect(ids).toContain('luna');
    expect(ids).toContain('animales');
    expect(ids).toContain('comida');
    expect(ids).toContain('playa');
    expect(ids).toContain('celebracion');
    expect(ids).toContain('soft');
  });

  it('should have curated emojis dataset', () => {
    expect(BONITO_EMOJIS.length).toBeGreaterThan(30);
  });

  it('should search with accent insensitivity (corazon, mariposa, rosa)', () => {
    const corazonRes = searchBonitos('corazon');
    expect(corazonRes.length).toBeGreaterThan(0);
    expect(corazonRes.some(e => e.char === '🩷' || e.char === '❤️')).toBe(true);

    const mariposaRes = searchBonitos('mariposa');
    expect(mariposaRes.some(e => e.char === '🦋')).toBe(true);

    const rosaRes = searchBonitos('rosa');
    expect(rosaRes.some(e => e.char === '🌹' || e.char === '🩷')).toBe(true);

    const cuteRes = searchBonitos('cute');
    expect(cuteRes.some(e => e.char === '🎀' || e.char === '🧸')).toBe(true);
  });

  it('should filter by category', () => {
    const floresRes = searchBonitos('', 'flores');
    expect(floresRes.length).toBeGreaterThan(0);
    expect(floresRes.every(e => e.categories.includes('flores'))).toBe(true);
  });

  it('should have small ready-made combinations (Combos Bonitos)', () => {
    expect(COMBOS_BONITOS.length).toBeGreaterThan(10);
    expect(COMBOS_BONITOS.some(c => c.combo.includes('🎀'))).toBe(true);
  });

  it('should have correct SEO metadata', () => {
    expect(metadata.title).toBe('Emojis Bonitos para Copiar y Pegar | LetrasBonitas');
    expect(metadata.description).toContain('Encuentra emojis bonitos y lindos por tema');
    expect(metadata.alternates?.canonical).toBe('https://letrasbonits.com/emojis/bonitos/');
    expect(metadata.openGraph?.title).toBe('Emojis Bonitos y Lindos para Copiar | LetrasBonitas');
    expect(metadata.openGraph?.url).toBe('https://letrasbonits.com/emojis/bonitos/');
  });
});
