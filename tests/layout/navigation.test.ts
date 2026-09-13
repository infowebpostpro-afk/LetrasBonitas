import { describe, expect, it } from "vitest";
import {
  SILO_NAVIGATION,
  isActiveRoute,
  isSiloActive,
} from "@/lib/navigationData";

describe("Navigation Architecture & Centralized Data", () => {
  it("defines the 3 core approved silos", () => {
    expect(SILO_NAVIGATION.length).toBe(3);
    const siloIds = SILO_NAVIGATION.map((s) => s.id);
    expect(siloIds).toEqual([
      "letras-cursivas",
      "conversor-de-letras",
      "letras-para-instagram",
    ]);
  });

  it("contains exact parent and supporting page URLs without broken trailing slashes", () => {
    for (const silo of SILO_NAVIGATION) {
      expect(silo.href.endsWith("/")).toBe(true);
      expect(silo.children.length).toBeGreaterThan(0);
      for (const child of silo.children) {
        expect(child.href.endsWith("/")).toBe(true);
        expect(typeof child.title).toBe("string");
        expect(child.title.length).toBeGreaterThan(0);
      }
    }
  });

  it("identifies active routes accurately", () => {
    expect(isActiveRoute("/", "/")).toBe(true);
    expect(isActiveRoute("/letras-cursivas/", "/letras-cursivas/")).toBe(true);
    expect(
      isActiveRoute(
        "/letras-cursivas/abecedario-cursivo/",
        "/letras-cursivas/abecedario-cursivo/"
      )
    ).toBe(true);
    expect(
      isActiveRoute(
        "/letras-cursivas/abecedario-cursivo",
        "/letras-cursivas/abecedario-cursivo/"
      )
    ).toBe(true);
    expect(
      isActiveRoute(
        "/conversor-de-letras/texto-con-estilos/",
        "/letras-cursivas/"
      )
    ).toBe(false);
  });

  it("identifies active silo parent groups accurately", () => {
    expect(
      isSiloActive(
        "/letras-cursivas/abecedario-cursivo/",
        "/letras-cursivas/"
      )
    ).toBe(true);
    expect(
      isSiloActive(
        "/conversor-de-letras/texto-con-estilos/",
        "/conversor-de-letras/"
      )
    ).toBe(true);
    expect(
      isSiloActive(
        "/letras-para-instagram/letras-para-bio/",
        "/letras-para-instagram/"
      )
    ).toBe(true);
    expect(
      isSiloActive(
        "/letras-cursivas/abecedario-cursivo/",
        "/letras-para-instagram/"
      )
    ).toBe(false);
  });
});
