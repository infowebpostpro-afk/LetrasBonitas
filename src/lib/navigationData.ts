export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}

export interface SiloNavGroup {
  id: string;
  title: string;
  href: string;
  children: NavItem[];
}

export const SILO_NAVIGATION: SiloNavGroup[] = [
  {
    id: "letras-cursivas",
    title: "Letras Cursivas",
    href: "/letras-cursivas/",
    children: [
      {
        title: "Letras Cursivas",
        href: "/letras-cursivas/",
      },
      {
        title: "Abecedario Cursivo",
        href: "/letras-cursivas/abecedario-cursivo/",
      },
      {
        title: "Letras Cursivas para Copiar y Pegar",
        href: "/letras-cursivas/letras-cursivas-para-copiar-y-pegar/",
      },
      {
        title: "Letras Cursivas Elegantes",
        href: "/letras-cursivas/letras-cursivas-elegantes/",
      },
    ],
  },
  {
    id: "conversor-de-letras",
    title: "Conversor de Letras",
    href: "/conversor-de-letras/",
    children: [
      {
        title: "Conversor de Letras",
        href: "/conversor-de-letras/",
      },
      {
        title: "Letras para Copiar y Pegar",
        href: "/conversor-de-letras/letras-para-copiar-y-pegar/",
      },
      {
        title: "Cómo Cambiar las Letras",
        href: "/conversor-de-letras/como-cambiar-las-letras/",
      },
      {
        title: "Texto con Estilos",
        href: "/conversor-de-letras/texto-con-estilos/",
      },
    ],
  },
  {
    id: "letras-para-instagram",
    title: "Letras para Instagram",
    href: "/letras-para-instagram/",
    children: [
      {
        title: "Letras para Instagram",
        href: "/letras-para-instagram/",
      },
      {
        title: "Letras para Bio",
        href: "/letras-para-instagram/letras-para-bio/",
      },
      {
        title: "Letras para Nombres",
        href: "/letras-para-instagram/letras-para-nombres/",
      },
      {
        title: "Símbolos para Instagram",
        href: "/letras-para-instagram/simbolos-para-instagram/",
      },
      {
        title: "Letras Cursivas para Instagram",
        href: "/letras-para-instagram/letras-cursivas-para-instagram/",
      },
    ],
  },
];

export function isActiveRoute(currentPathname: string, href: string): boolean {
  if (href === "/") {
    return currentPathname === "/";
  }
  const cleanCurrent = currentPathname.replace(/\/$/, "");
  const cleanHref = href.replace(/\/$/, "");
  return cleanCurrent === cleanHref;
}

export function isSiloActive(currentPathname: string, siloHref: string): boolean {
  const cleanCurrent = currentPathname.replace(/\/$/, "");
  const cleanSilo = siloHref.replace(/\/$/, "");
  return cleanCurrent === cleanSilo || cleanCurrent.startsWith(`${cleanSilo}/`);
}
