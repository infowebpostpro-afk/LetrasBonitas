import { describe, expect, it } from "vitest";
import { metadata as privacyMeta } from "@/app/politica-de-privacidad/page";
import { metadata as cookiesMeta } from "@/app/politica-de-cookies/page";
import { metadata as termsMeta } from "@/app/terminos-y-condiciones/page";
import { metadata as disclaimerMeta } from "@/app/descargo-de-responsabilidad/page";
import { metadata as aboutMeta } from "@/app/sobre-nosotros/page";
import { metadata as howItWorksMeta } from "@/app/como-funcionan-nuestras-herramientas/page";
import { metadata as contactMeta } from "@/app/contacto/page";
import { metadata as accessibilityMeta } from "@/app/accesibilidad/page";
import { metadata as adInfoMeta } from "@/app/publicidad/page";
import { metadata as copyrightMeta } from "@/app/derechos-de-autor/page";

describe("Legal and Trust Pages Metadata", () => {
  const pages = [
    { name: "Política de Privacidad", meta: privacyMeta, canonical: "/politica-de-privacidad/" },
    { name: "Política de Cookies", meta: cookiesMeta, canonical: "/politica-de-cookies/" },
    { name: "Términos y Condiciones", meta: termsMeta, canonical: "/terminos-y-condiciones/" },
    { name: "Descargo de Responsabilidad", meta: disclaimerMeta, canonical: "/descargo-de-responsabilidad/" },
    { name: "Sobre Nosotros", meta: aboutMeta, canonical: "/sobre-nosotros/" },
    { name: "Cómo Funcionan Nuestras Herramientas", meta: howItWorksMeta, canonical: "/como-funcionan-nuestras-herramientas/" },
    { name: "Contacto", meta: contactMeta, canonical: "/contacto/" },
    { name: "Accesibilidad", meta: accessibilityMeta, canonical: "/accesibilidad/" },
    { name: "Información Publicitaria", meta: adInfoMeta, canonical: "/publicidad/" },
    { name: "Derechos de Autor", meta: copyrightMeta, canonical: "/derechos-de-autor/" },
  ];

  it.each(pages)("$name defines valid title, description, and canonical URL", ({ meta, canonical }) => {
    expect(meta.title).toBeDefined();
    expect(typeof meta.title).toBe("string");
    expect((meta.title as string).length).toBeGreaterThan(5);

    expect(meta.description).toBeDefined();
    expect(typeof meta.description).toBe("string");
    expect((meta.description as string).length).toBeGreaterThan(20);

    expect(meta.alternates?.canonical).toBe(canonical);
    expect(meta.openGraph?.url).toBe(canonical);
    expect(meta.openGraph?.locale).toBe("es");
  });
});
