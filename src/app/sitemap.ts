import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://letrasbonitas.com/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://letrasbonitas.com/conversor-de-letras/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://letrasbonitas.com/conversor-de-letras/letras-para-copiar-y-pegar/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://letrasbonitas.com/conversor-de-letras/como-cambiar-las-letras/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://letrasbonitas.com/conversor-de-letras/texto-con-estilos/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://letrasbonitas.com/letras-cursivas/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://letrasbonitas.com/letras-cursivas/abecedario-cursivo/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://letrasbonitas.com/letras-cursivas/letras-cursivas-para-copiar-y-pegar/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://letrasbonitas.com/letras-cursivas/letras-cursivas-elegantes/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://letrasbonitas.com/letras-para-instagram/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://letrasbonitas.com/letras-para-instagram/letras-para-bio/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://letrasbonitas.com/letras-para-instagram/letras-para-nombres/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://letrasbonitas.com/letras-para-instagram/simbolos-para-instagram/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://letrasbonitas.com/letras-para-instagram/letras-cursivas-para-instagram/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

