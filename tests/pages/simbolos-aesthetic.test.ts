import { describe, expect, it } from 'vitest';
import { metadata } from '@/app/simbolos/aesthetic/page';
import {
  AESTHETIC_SYMBOLS,
  AESTHETIC_READY_COMBOS,
  AESTHETIC_CATEGORIES,
  searchAestheticSymbols,
  normalizeSpanishSearch,
} from '@/lib/unicode/aestheticSymbolsData';

describe('Símbolos Aesthetic Page (/simbolos/aesthetic/)', () => {
  it('defines accurate SEO title, description, and canonical URL matching specifications', () => {
    expect(metadata.title).toBe('Símbolos Aesthetic para Copiar y Pegar | LetrasBonitas');
    expect(metadata.description).toBe(
      'Explora símbolos aesthetic para copiar y pegar: corazones, estrellas, brillos, flores, lazos y combos. Busca, combina y copia tus favoritos.'
    );
    expect(metadata.alternates?.canonical).toBe(
      'https://letrasbonits.com/simbolos/aesthetic/'
    );
  });

  it('defines OpenGraph and Twitter social metadata', () => {
    expect(metadata.openGraph?.title).toBe(
      'Símbolos Aesthetic para Copiar y Pegar | LetrasBonitas'
    );
    expect(metadata.openGraph?.url).toBe(
      'https://letrasbonits.com/simbolos/aesthetic/'
    );
    expect(metadata.openGraph?.locale).toBe('es_ES');
    expect((metadata.twitter as { card?: string })?.card).toBe('summary_large_image');
  });

  it('contains comprehensive aesthetic symbols dataset with required categories', () => {
    expect(AESTHETIC_SYMBOLS.length).toBeGreaterThanOrEqual(40);
    expect(AESTHETIC_CATEGORIES.length).toBeGreaterThanOrEqual(12);

    const categories = new Set(AESTHETIC_CATEGORIES.map(c => c.id));
    expect(categories.has('todos')).toBe(true);
    expect(categories.has('corazones')).toBe(true);
    expect(categories.has('estrellas')).toBe(true);
    expect(categories.has('brillos')).toBe(true);
    expect(categories.has('lunas')).toBe(true);
    expect(categories.has('flores')).toBe(true);
    expect(categories.has('lazos')).toBe(true);
    expect(categories.has('flechas')).toBe(true);
    expect(categories.has('separadores')).toBe(true);
    expect(categories.has('marcos')).toBe(true);
    expect(categories.has('musica')).toBe(true);
    expect(categories.has('naturaleza')).toBe(true);
    expect(categories.has('cute')).toBe(true);
    expect(categories.has('coquette')).toBe(true);
    expect(categories.has('minimalistas')).toBe(true);
  });

  it('supports semantic Spanish search with aliases and normalization', () => {
    // "amor" should find hearts
    const amorResults = searchAestheticSymbols('amor', 'todos');
    expect(amorResults.some(s => s.symbol === '♡' || s.symbol === '♥')).toBe(true);

    // "brillo" should find sparkles
    const brilloResults = searchAestheticSymbols('brillo', 'todos');
    expect(brilloResults.some(s => s.symbol === '✦' || s.symbol === '✧')).toBe(true);

    // "luna" should find moons
    const lunaResults = searchAestheticSymbols('luna', 'todos');
    expect(lunaResults.some(s => s.symbol === '☾' || s.symbol === '☽')).toBe(true);

    // "coquette" should find ribbons/bows
    const coquetteResults = searchAestheticSymbols('coquette', 'todos');
    expect(coquetteResults.some(s => s.symbol === '୨୧' || s.symbol === '𐙚')).toBe(true);

    // Accents should match transparently
    expect(normalizeSpanishSearch('corazón')).toBe('corazon');
    const corazonAccented = searchAestheticSymbols('corazón', 'todos');
    const corazonUnaccented = searchAestheticSymbols('corazon', 'todos');
    expect(corazonAccented.length).toEqual(corazonUnaccented.length);
  });

  it('filters symbols cleanly by category', () => {
    const lazos = searchAestheticSymbols('', 'lazos');
    expect(lazos.length).toBeGreaterThan(0);
    expect(lazos.every(s => s.categories.includes('lazos'))).toBe(true);
    expect(lazos.some(s => s.symbol === '୨୧')).toBe(true);

    const corazones = searchAestheticSymbols('', 'corazones');
    expect(corazones.length).toBeGreaterThan(0);
    expect(corazones.every(s => s.categories.includes('corazones'))).toBe(true);
  });

  it('includes ready-made combinations covering all required use cases', () => {
    expect(AESTHETIC_READY_COMBOS.length).toBeGreaterThanOrEqual(15);
    const useCases = new Set(AESTHETIC_READY_COMBOS.map(c => c.useCase));
    expect(useCases.has('nombres')).toBe(true);
    expect(useCases.has('bios')).toBe(true);
    expect(useCases.has('separadores')).toBe(true);
    expect(useCases.has('minimalistas-coquette')).toBe(true);
  });

  it('preserves complete Unicode characters without corruption', () => {
    for (const sym of AESTHETIC_SYMBOLS) {
      expect(typeof sym.symbol).toBe('string');
      expect(sym.symbol.length).toBeGreaterThan(0);
      expect(sym.symbol).not.toContain('undefined');
    }
  });
});
