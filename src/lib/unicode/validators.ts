import { fontStyles } from "./fontStyles";
import { TOOL_CONFIG, type FontStyle } from "./types";

export type RegistryReport = {
  total: number;
  byCategory: Record<string, number>;
  byCompatibility: Record<string, number>;
  withNumbers: number;
  withAccents: number;
  combining: number;
  decorative: number;
  duplicateIds: string[];
  duplicateNames: string[];
  identicalOutputs: Array<{ a: string; b: string }>;
  meetsMinimum: boolean;
};

const SAMPLE_INPUTS = [
  "Letras Bonitas",
  "Hola",
  "abc123",
  "ÁÉÍÓÚÜÑ",
];

export function validateRegistry(styles: FontStyle[] = fontStyles): RegistryReport {
  const byCategory: Record<string, number> = {};
  const byCompatibility: Record<string, number> = {};
  const idMap = new Map<string, number>();
  const nameMap = new Map<string, number>();

  for (const s of styles) {
    byCategory[s.category] = (byCategory[s.category] ?? 0) + 1;
    byCompatibility[s.compatibility] = (byCompatibility[s.compatibility] ?? 0) + 1;
    idMap.set(s.id, (idMap.get(s.id) ?? 0) + 1);
    nameMap.set(s.name, (nameMap.get(s.name) ?? 0) + 1);
  }

  const duplicateIds = [...idMap.entries()].filter(([, n]) => n > 1).map(([id]) => id);
  const duplicateNames = [...nameMap.entries()].filter(([, n]) => n > 1).map(([n]) => n);

  const fingerprints = new Map<string, string>();
  const identicalOutputs: Array<{ a: string; b: string }> = [];

  for (const s of styles) {
    const fp = SAMPLE_INPUTS.map((input) => {
      try {
        return s.transform(input);
      } catch {
        return "__ERROR__";
      }
    }).join("||");

    const existing = fingerprints.get(fp);
    if (existing) {
      identicalOutputs.push({ a: existing, b: s.id });
    } else {
      fingerprints.set(fp, s.id);
    }
  }

  return {
    total: styles.length,
    byCategory,
    byCompatibility,
    withNumbers: styles.filter((s) => s.supportsNumbers).length,
    withAccents: styles.filter((s) => s.supportsAccents).length,
    combining: styles.filter((s) => s.combining).length,
    decorative: styles.filter((s) => s.decorative).length,
    duplicateIds,
    duplicateNames,
    identicalOutputs,
    meetsMinimum: styles.length >= TOOL_CONFIG.minStylesRequired,
  };
}

export function assertRegistryHealthy(styles: FontStyle[] = fontStyles): void {
  const report = validateRegistry(styles);
  if (!report.meetsMinimum) {
    throw new Error(
      `Style registry has ${report.total} styles; need >= ${TOOL_CONFIG.minStylesRequired}`,
    );
  }
  if (report.duplicateIds.length) {
    throw new Error(`Duplicate style IDs: ${report.duplicateIds.join(", ")}`);
  }
}
