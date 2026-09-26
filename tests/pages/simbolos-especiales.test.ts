import { describe, expect, it } from 'vitest';
import { metadata } from '@/app/simbolos/especiales/page';
import {
  ESPECIAL_SYMBOLS,
  ESPECIAL_CATEGORIES,
  CONFUSABLE_PAIRS,
  searchEspecialesSymbols,
  normalizeSpanishSearch,
} from '@/lib/unicode/especialesSymbolsData';

describe('Símbolos Especiales Page (/simbolos/especiales/)', () => {
  it('defines accurate SEO title, description, and canonical URL matching specifications', () => {
    expect(metadata.title).toBe('Símbolos Especiales para Copiar y Pegar | LetrasBonitas');
    expect(metadata.description).toBe(
      'Encuentra símbolos especiales para copiar y pegar: matemáticos, flechas, monedas, marcas, formas y más. Busca un carácter y cópialo al instante.'
    );
    expect(metadata.alternates?.canonical).toBe(
      'https://letrasbonits.com/simbolos/especiales/'
    );
  });

  it('defines OpenGraph and Twitter social metadata', () => {
    expect(metadata.openGraph?.title).toBe(
      'Símbolos Especiales para Copiar y Pegar | LetrasBonitas'
    );
    expect(metadata.openGraph?.url).toBe(
      'https://letrasbonits.com/simbolos/especiales/'
    );
    expect(metadata.openGraph?.locale).toBe('es_ES');
    expect((metadata.twitter as { card?: string })?.card).toBe('summary_large_image');
  });

  it('contains comprehensive symbols dataset with all 14 specified categories', () => {
    expect(ESPECIAL_SYMBOLS.length).toBeGreaterThanOrEqual(80);
    expect(ESPECIAL_CATEGORIES.length).toBe(14);

    const categories = new Set(ESPECIAL_CATEGORIES.map(c => c.id));
    expect(categories.has('todos')).toBe(true);
    expect(categories.has('matematicas')).toBe(true);
    expect(categories.has('flechas')).toBe(true);
    expect(categories.has('monedas')).toBe(true);
    expect(categories.has('marcas')).toBe(true);
    expect(categories.has('puntuacion')).toBe(true);
    expect(categories.has('formas')).toBe(true);
    expect(categories.has('tecnicos')).toBe(true);
    expect(categories.has('griegos')).toBe(true);
    expect(categories.has('superindices')).toBe(true);
    expect(categories.has('subindices')).toBe(true);
    expect(categories.has('musica')).toBe(true);
    expect(categories.has('juegos')).toBe(true);
    expect(categories.has('otros')).toBe(true);
  });

  it('every symbol has valid Unicode codePoint formatted as U+HEX and Spanish name', () => {
    for (const item of ESPECIAL_SYMBOLS) {
      expect(item.codePoint).toMatch(/^U\+[0-9A-F]{4,5}$/);
      expect(item.nameEs.length).toBeGreaterThan(0);
      expect(item.nameUnicode.length).toBeGreaterThan(0);
      expect(item.categories.length).toBeGreaterThan(0);
    }
  });

  it('supports semantic Spanish search with aliases and normalization', () => {
    // "infinito" should return ∞
    const infResults = searchEspecialesSymbols('infinito', 'todos');
    expect(infResults.some(s => s.symbol === '∞')).toBe(true);

    // "copyright" and "derechos de autor" should return ©
    const cprResults = searchEspecialesSymbols('derechos de autor', 'todos');
    expect(cprResults.some(s => s.symbol === '©')).toBe(true);

    // "marca registrada" should return ®
    const regResults = searchEspecialesSymbols('marca registrada', 'todos');
    expect(regResults.some(s => s.symbol === '®')).toBe(true);

    // "euro" should return €
    const eurResults = searchEspecialesSymbols('euro', 'todos');
    expect(eurResults.some(s => s.symbol === '€')).toBe(true);

    // "diferente" or "no igual" should return ≠
    const neqResults = searchEspecialesSymbols('no igual', 'todos');
    expect(neqResults.some(s => s.symbol === '≠')).toBe(true);

    // "raíz" and "raiz" should return √
    const sqrtResults = searchEspecialesSymbols('raíz', 'todos');
    expect(sqrtResults.some(s => s.symbol === '√')).toBe(true);
    expect(normalizeSpanishSearch('raíz')).toBe('raiz');

    // "flecha derecha" should return →
    const arrResults = searchEspecialesSymbols('flecha derecha', 'todos');
    expect(arrResults.some(s => s.symbol === '→')).toBe(true);

    // "seccion" should return §
    const secResults = searchEspecialesSymbols('sección', 'todos');
    expect(secResults.some(s => s.symbol === '§')).toBe(true);

    // "grado" should return °
    const degResults = searchEspecialesSymbols('grado', 'todos');
    expect(degResults.some(s => s.symbol === '°')).toBe(true);
  });

  it('supports search by exact symbol character and by Unicode code point', () => {
    // Exact symbol
    const charResults = searchEspecialesSymbols('∞', 'todos');
    expect(charResults.some(s => s.symbol === '∞')).toBe(true);

    // Exact code point U+2260
    const codeResults = searchEspecialesSymbols('U+2260', 'todos');
    expect(codeResults.some(s => s.symbol === '≠')).toBe(true);

    // Code point without U+ prefix (case-insensitive)
    const hexResults = searchEspecialesSymbols('2260', 'todos');
    expect(hexResults.some(s => s.symbol === '≠')).toBe(true);
  });

  it('filters cleanly across distinct functional categories', () => {
    const matematicas = searchEspecialesSymbols('', 'matematicas');
    expect(matematicas.length).toBeGreaterThan(0);
    expect(matematicas.some(s => s.symbol === '≠')).toBe(true);
    expect(matematicas.some(s => s.symbol === '∑')).toBe(true);

    const flechas = searchEspecialesSymbols('', 'flechas');
    expect(flechas.length).toBeGreaterThan(0);
    expect(flechas.some(s => s.symbol === '→')).toBe(true);

    const monedas = searchEspecialesSymbols('', 'monedas');
    expect(monedas.length).toBeGreaterThan(0);
    expect(monedas.some(s => s.symbol === '€')).toBe(true);
    expect(monedas.some(s => s.symbol === '$')).toBe(true);
    expect(monedas.some(s => s.symbol === '₿')).toBe(true);

    const marcas = searchEspecialesSymbols('', 'marcas');
    expect(marcas.length).toBeGreaterThan(0);
    expect(marcas.some(s => s.symbol === '©')).toBe(true);
    expect(marcas.some(s => s.symbol === '®')).toBe(true);
    expect(marcas.some(s => s.symbol === '™')).toBe(true);
  });

  it('includes high-value confusable character pairs for information gain', () => {
    expect(CONFUSABLE_PAIRS.length).toBeGreaterThanOrEqual(5);
    const timesVsX = CONFUSABLE_PAIRS.find(p => p.charA === '×' && p.charB === 'x');
    expect(timesVsX).toBeDefined();
    expect(timesVsX?.codeA).toBe('U+00D7');
    expect(timesVsX?.codeB).toBe('U+0078');

    const emdashVsHyphen = CONFUSABLE_PAIRS.find(p => p.charA === '—' && p.charB === '-');
    expect(emdashVsHyphen).toBeDefined();
  });
});
