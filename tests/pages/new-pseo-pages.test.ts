import { describe, expect, it } from "vitest";
import { generateMetadata as getGoticasMetadata } from "@/app/letras-goticas/page";
import { generateMetadata as getAestheticMetadata } from "@/app/letras-aesthetic/page";
import { generateMetadata as getBurbujaMetadata } from "@/app/letras-burbuja/page";
import { generateMetadata as getNegritasMetadata } from "@/app/letras-negritas/page";
import { generateMetadata as getTikTokMetadata } from "@/app/letras-para-tiktok/page";
import { generateMetadata as getWhatsAppMetadata } from "@/app/letras-para-whatsapp/page";
import { generateMetadata as getFacebookMetadata } from "@/app/letras-para-facebook/page";
import { generateMetadata as getDiscordMetadata } from "@/app/letras-para-discord/page";
import sitemap from "@/app/sitemap";
import { fontStyles } from "@/lib/unicode";

describe("New Programmatic SEO Pages", () => {
  const pages = [
    {
      name: "Letras Góticas",
      route: "/letras-goticas/",
      getMetadata: getGoticasMetadata,
      expectedTitle: "Letras Góticas para Copiar y Pegar — Generador Gratis",
      expectedDescription:
        "Generador de letras góticas para copiar y pegar. Convierte texto normal a estilo Fraktur, gótica negrita y letras decoradas para nicks, bios y redes sociales.",
    },
    {
      name: "Letras Aesthetic",
      route: "/letras-aesthetic/",
      getMetadata: getAestheticMetadata,
      expectedTitle: "Letras Aesthetic para Copiar y Pegar - Estilos Lindos",
      expectedDescription:
        "Los estilos aesthetic más lindos para tus textos: letras suaves y minimalistas para copiar y pegar gratis.",
    },
    {
      name: "Letras Burbuja",
      route: "/letras-burbuja/",
      getMetadata: getBurbujaMetadata,
      expectedTitle: "Letras Burbuja para Copiar y Pegar - Estilo Bubble",
      expectedDescription:
        "Letras estilo burbuja redondas y divertidas para copiar y pegar: perfectas para nicks y bios.",
    },
    {
      name: "Letras Negritas",
      route: "/letras-negritas/",
      getMetadata: getNegritasMetadata,
      expectedTitle: "Letras Negritas para Copiar y Pegar - Texto en Negrita",
      expectedDescription:
        "Convierte tu texto en negritas Unicode para copiar y pegar en WhatsApp, Instagram y Facebook. Gratis.",
    },
    {
      name: "Letras para TikTok",
      route: "/letras-para-tiktok/",
      getMetadata: getTikTokMetadata,
      expectedTitle: "Letras para TikTok: Nombres y Bios con Estilo",
      expectedDescription:
        "Crea letras para TikTok y copia estilos para nombres, bios y textos cortos. Prueba opciones aesthetic, cursivas, negritas y más.",
    },
    {
      name: "Letras para WhatsApp",
      route: "/letras-para-whatsapp/",
      getMetadata: getWhatsAppMetadata,
      expectedTitle: "Letras para WhatsApp: Estados y Mensajes con Estilo",
      expectedDescription:
        "Dale estilo a tus estados y mensajes de WhatsApp con letras bonitas para copiar y pegar. Gratis.",
    },
    {
      name: "Letras para Facebook",
      route: "/letras-para-facebook/",
      getMetadata: getFacebookMetadata,
      expectedTitle: "Letras para Facebook: Publicaciones y Nombres con Estilo",
      expectedDescription:
        "Crea letras para Facebook y copia estilos para publicaciones, comentarios y textos de perfil. Prueba opciones bonitas, cursivas, negritas y más.",
    },
    {
      name: "Letras para Discord",
      route: "/letras-para-discord/",
      getMetadata: getDiscordMetadata,
      expectedTitle: "Letras para Discord: Nicks y Mensajes Estilizados",
      expectedDescription:
        "Nicks y mensajes para Discord con letras estilizadas para copiar y pegar. Destaca en tu servidor.",
    },
  ];

  for (const page of pages) {
    describe(page.name, () => {
      it("defines compliant metadata, canonical URL, and character limits", () => {
        const meta = page.getMetadata();
        expect(meta.title).toBe(page.expectedTitle);
        expect(meta.description).toBe(page.expectedDescription);
        expect(meta.alternates?.canonical).toBe(page.route);

        // SEO character length limits
        expect((meta.title as string).length).toBeLessThanOrEqual(60);
        expect((meta.description as string).length).toBeLessThanOrEqual(160);
      });

      it("defines matching OpenGraph and Twitter card metadata", () => {
        const meta = page.getMetadata();
        expect(meta.openGraph?.title).toBe(page.expectedTitle);
        expect(meta.openGraph?.description).toBe(page.expectedDescription);
        expect(meta.openGraph?.url).toBe(page.route);
        expect(meta.openGraph?.locale).toBe("es");
        expect((meta.twitter as { card?: string })?.card).toBe("summary");
      });
    });
  }

  it("registers all 8 routes in the sitemap with priority 0.9 and weekly frequency", () => {
    const siteMapEntries = sitemap();
    for (const page of pages) {
      const match = siteMapEntries.find((entry) => entry.url.endsWith(page.route));
      expect(match, `Route ${page.route} should be present in sitemap`).toBeDefined();
      expect(match?.priority).toBe(0.9);
      expect(match?.changeFrequency).toBe("weekly");
    }
  });

  it("executes Unicode font transformations for Spanish text without errors", () => {
    const testText = "¡Texto de prueba con acentos: áéíóú, ñ y símbolos! ⭐";
    for (const style of fontStyles) {
      const result = style.transform(testText);
      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(0);
      expect(result).not.toContain("undefined");
      expect(result).not.toContain("NaN");
    }
  });
});
