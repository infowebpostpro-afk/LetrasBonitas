import { describe, expect, it } from 'vitest';
import { metadata } from '@/app/simbolos/bonitos/page';
import {
  BONITO_SYMBOLS,
  BONITO_CATEGORIES,
  BONITO_READY_COMBOS,
  searchBonitosSymbols,
  normalizeSpanishSearch,
} from '@/lib/unicode/bonitosSymbolsData';

describe('Símbolos Bonitos Page (/simbolos/bonitos/)', () => {
  it('defines accurate SEO title, description, and canonical URL matching specifications', () => {
    expect(metadata.title).toBe('Símbolos Bonitos para Copiar y Pegar | LetrasBonitas');
    expect(metadata.description).toBe(
      'Encuentra símbolos bonitos para copiar y pegar: corazones, estrellas, flores, flechas, coronas y más. Busca, combina y copia tus favoritos.'
    );
    expect(metadata.alternates?.canonical).toBe(
      'https://letrasbonits.com/simbolos/bonitos/'
    );
  });

  it('defines OpenGraph and Twitter social metadata', () => {
    expect(metadata.openGraph?.title).toBe(
      'Símbolos Bonitos para Copiar y Pegar | LetrasBonitas'
    );
    expect(metadata.openGraph?.url).toBe(
      'https://letrasbonits.com/simbolos/bonitos/'
    );
    expect(metadata.openGraph?.locale).toBe('es_ES');
    expect((metadata.twitter as { card?: string })?.card).toBe('summary_large_image');
  });

  it('contains comprehensive symbols dataset with all 13 specified categories', () => {
    expect(BONITO_SYMBOLS.length).toBeGreaterThanOrEqual(100);
    expect(BONITO_CATEGORIES.length).toBe(13);

    const categories = new Set(BONITO_CATEGORIES.map(c => c.id));
    expect(categories.has('todos')).toBe(true);
    expect(categories.has('corazones')).toBe(true);
    expect(categories.has('estrellas')).toBe(true);
    expect(categories.has('flores')).toBe(true);
    expect(categories.has('lunas')).toBe(true);
    expect(categories.has('flechas')).toBe(true);
    expect(categories.has('coronas')).toBe(true);
    expect(categories.has('musica')).toBe(true);
    expect(categories.has('separadores')).toBe(true);
    expect(categories.has('marcos')).toBe(true);
    expect(categories.has('utiles')).toBe(true);
    expect(categories.has('especiales')).toBe(true);
    expect(categories.has('numeros')).toBe(true);
  });

  it('supports semantic Spanish search with aliases and normalization', () => {
    // "corazon" or "amor" should return heart symbols
    const corazonResults = searchBonitosSymbols('corazón', 'todos');
    expect(corazonResults.some(s => s.symbol === '♡' || s.symbol === '♥')).toBe(true);

    const amorResults = searchBonitosSymbols('amor', 'todos');
    expect(amorResults.some(s => s.symbol === '♡' || s.symbol === '♥')).toBe(true);

    // "estrella" should return stars
    const estrellaResults = searchBonitosSymbols('estrella', 'todos');
    expect(estrellaResults.some(s => s.symbol === '★' || s.symbol === '☆')).toBe(true);

    // "flor" should return flowers
    const florResults = searchBonitosSymbols('flor', 'todos');
    expect(florResults.some(s => s.symbol === '✿' || s.symbol === '❀')).toBe(true);

    // "musica" should return musical notes
    const musicaResults = searchBonitosSymbols('musica', 'todos');
    expect(musicaResults.some(s => s.symbol === '♪' || s.symbol === '♫')).toBe(true);

    // "flecha" should return arrows
    const flechaResults = searchBonitosSymbols('flecha', 'todos');
    expect(flechaResults.some(s => s.symbol === '→' || s.symbol === '➜')).toBe(true);

    // Accented and unaccented queries produce identical results
    expect(normalizeSpanishSearch('música')).toBe('musica');
    const musicaAccented = searchBonitosSymbols('música', 'todos');
    const musicaUnaccented = searchBonitosSymbols('musica', 'todos');
    expect(musicaAccented.length).toEqual(musicaUnaccented.length);
  });

  it('filters symbols cleanly across all categories', () => {
    const coronas = searchBonitosSymbols('', 'coronas');
    expect(coronas.length).toBeGreaterThan(0);
    expect(coronas.every(s => s.categories.includes('coronas'))).toBe(true);
    expect(coronas.some(s => s.symbol === '♔')).toBe(true);

    const numeros = searchBonitosSymbols('', 'numeros');
    expect(numeros.length).toBeGreaterThan(0);
    expect(numeros.every(s => s.categories.includes('numeros'))).toBe(true);
    expect(numeros.some(s => s.symbol === '①')).toBe(true);

    const utiles = searchBonitosSymbols('', 'utiles');
    expect(utiles.length).toBeGreaterThan(0);
    expect(utiles.every(s => s.categories.includes('utiles'))).toBe(true);
    expect(utiles.some(s => s.symbol === '✓')).toBe(true);
  });

  it('includes ready-made combinations covering nombres, bios, and separadores', () => {
    expect(BONITO_READY_COMBOS.length).toBeGreaterThanOrEqual(15);
    const useCases = new Set(BONITO_READY_COMBOS.map(c => c.useCase));
    expect(useCases.has('nombres')).toBe(true);
    expect(useCases.has('bios')).toBe(true);
    expect(useCases.has('separadores')).toBe(true);
  });

  it('preserves complete Unicode characters without corruption', () => {
    for (const sym of BONITO_SYMBOLS) {
      expect(typeof sym.symbol).toBe('string');
      expect(sym.symbol.length).toBeGreaterThan(0);
      expect(sym.symbol).not.toContain('undefined');
    }
  });
});
