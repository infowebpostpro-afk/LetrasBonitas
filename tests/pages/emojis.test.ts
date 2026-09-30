import { describe, it, expect } from 'vitest';
import { metadata } from '@/app/emojis/page';

describe('Emojis Page (/emojis/)', () => {
  it('should have correct SEO metadata', () => {
    expect(metadata.title).toBe('Emojis para Copiar y Pegar | LetrasBonitas');
    expect(metadata.description).toContain('Busca emojis por nombre, emoción o categoría');
    expect(metadata.alternates?.canonical).toBe('https://letrasbonits.com/emojis/');
  });

  it('should have OpenGraph metadata matching specifications', () => {
    expect(metadata.openGraph?.title).toBe('Emojis para Copiar y Pegar | LetrasBonitas');
    expect(metadata.openGraph?.url).toBe('https://letrasbonits.com/emojis/');
    expect(metadata.openGraph?.siteName).toBe('LetrasBonitas');
  });
});
