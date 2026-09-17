import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/conversor-de-letras/",
    "/conversor-de-letras/letras-para-copiar-y-pegar/",
    "/conversor-de-letras/como-cambiar-las-letras/",
    "/conversor-de-letras/texto-con-estilos/",
    "/letras-cursivas/",
    "/letras-cursivas/abecedario-cursivo/",
    "/letras-cursivas/letras-cursivas-para-copiar-y-pegar/",
    "/letras-cursivas/letras-cursivas-elegantes/",
    "/letras-para-instagram/",
    "/letras-para-instagram/letras-para-bio/",
    "/letras-para-instagram/letras-para-nombres/",
    "/letras-para-instagram/simbolos-para-instagram/",
    "/letras-para-instagram/letras-cursivas-para-instagram/",
    "/sobre-nosotros/",
    "/como-funcionan-nuestras-herramientas/",
    "/contacto/",
    "/accesibilidad/",
    "/politica-de-privacidad/",
    "/politica-de-cookies/",
    "/terminos-y-condiciones/",
    "/descargo-de-responsabilidad/",
    "/publicidad/",
    "/derechos-de-autor/",
  ];

  return routes.map((route) => {
    let priority = 0.4;
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "weekly";
    } else if (
      route === "/conversor-de-letras/" ||
      route === "/letras-cursivas/" ||
      route === "/letras-para-instagram/"
    ) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (route.startsWith("/conversor-de-letras/") || route.startsWith("/letras-cursivas/") || route.startsWith("/letras-para-instagram/")) {
      priority = 0.8;
      changeFrequency = "monthly";
    } else if (route === "/sobre-nosotros/" || route === "/como-funcionan-nuestras-herramientas/" || route === "/contacto/") {
      priority = 0.5;
      changeFrequency = "monthly";
    }

    return {
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}
