"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  SILO_NAVIGATION,
  isActiveRoute,
  isSiloActive,
} from "@/lib/navigationData";

function MenuIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseMenuIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDownIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname() || "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedAccordions, setExpandedAccordions] = useState<Record<string, boolean>>({
    "letras-cursivas": true,
    "conversor-de-letras": false,
    "letras-para-instagram": false,
  });

  const navRef = useRef<HTMLDivElement>(null);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape key to close menus
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleDropdown = useCallback((siloId: string) => {
    setActiveDropdown((prev) => (prev === siloId ? null : siloId));
  }, []);

  const toggleAccordion = useCallback((siloId: string) => {
    setExpandedAccordions((prev) => ({
      ...prev,
      [siloId]: !prev[siloId],
    }));
  }, []);

  return (
    <header className="site-header" ref={navRef}>
      <div className="site-header__container">
        {/* Logo / Brand */}
        <Link href="/" className="site-header__brand" aria-label="LetrasBonitas Inicio">
          <Image
            src="/logo.webp"
            alt="LetrasBonitas Logo"
            width={34}
            height={34}
            className="site-header__logo"
          />
          <span>Letras<span className="site-header__brand-accent">Bonitas</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="site-header__desktop-nav" aria-label="Navegación principal">
          <Link
            href="/"
            className={`site-header__nav-link ${isActiveRoute(pathname, "/") ? "is-active" : ""}`}
          >
            Inicio
          </Link>

          {SILO_NAVIGATION.map((silo) => {
            const isGroupActive = isSiloActive(pathname, silo.href);
            const isOpen = activeDropdown === silo.id;

            return (
              <div
                key={silo.id}
                className={`site-header__dropdown-group ${isOpen ? "is-open" : ""}`}
                onMouseEnter={() => setActiveDropdown(silo.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="site-header__dropdown-trigger-row">
                  <Link
                    href={silo.href}
                    className={`site-header__nav-link ${isGroupActive ? "is-active" : ""}`}
                  >
                    {silo.title}
                  </Link>

                  <button
                    type="button"
                    className="site-header__dropdown-caret-btn"
                    aria-expanded={isOpen}
                    aria-label={`Opciones de ${silo.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(silo.id);
                    }}
                  >
                    <ChevronDownIcon />
                  </button>
                </div>

                {/* Submenu Dropdown Card */}
                <div
                  className={`site-header__dropdown-menu ${isOpen ? "is-visible" : ""}`}
                  role="region"
                  aria-label={`Submenú ${silo.title}`}
                >
                  <div className="site-header__dropdown-menu-header">
                    <span className="site-header__dropdown-menu-title">{silo.title}</span>
                  </div>
                  <ul className="site-header__dropdown-list">
                    {silo.children.map((child) => {
                      const isItemActive = isActiveRoute(pathname, child.href);
                      return (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`site-header__dropdown-item ${isItemActive ? "is-active" : ""}`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="site-header__dropdown-bullet">•</span>
                            <span>{child.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="site-header__mobile-toggle"
          aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <CloseMenuIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="site-header__mobile-drawer"
          role="dialog"
          aria-label="Menú de navegación móvil"
        >
          <div className="site-header__mobile-drawer-inner">
            <Link
              href="/"
              className={`site-header__mobile-link ${isActiveRoute(pathname, "/") ? "is-active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              🚀 Inicio
            </Link>

            <hr className="site-header__mobile-divider" />

            <div className="site-header__mobile-silos">
              {SILO_NAVIGATION.map((silo) => {
                const isGroupActive = isSiloActive(pathname, silo.href);
                const isExpanded = !!expandedAccordions[silo.id];

                return (
                  <div key={silo.id} className="mobile-accordion">
                    <div className="mobile-accordion__header">
                      <Link
                        href={silo.href}
                        className={`mobile-accordion__silo-link ${isGroupActive ? "is-active" : ""}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {silo.title}
                      </Link>

                      <button
                        type="button"
                        className="mobile-accordion__toggle-btn"
                        aria-expanded={isExpanded}
                        aria-label={`Desplegar páginas de ${silo.title}`}
                        onClick={() => toggleAccordion(silo.id)}
                      >
                        {isExpanded ? "−" : "+"}
                      </button>
                    </div>

                    {isExpanded && (
                      <ul className="mobile-accordion__list">
                        {silo.children.map((child) => {
                          const isItemActive = isActiveRoute(pathname, child.href);
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={`mobile-accordion__item ${isItemActive ? "is-active" : ""}`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <span className="mobile-accordion__arrow">→</span>
                                <span>{child.title}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const pathname = usePathname() || "/";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        {/* Top Header / Tagline */}
        <div className="site-footer__brand-block">
          <Link href="/" className="site-footer__brand">
            <Image
              src="/logo.webp"
              alt="LetrasBonitas Logo"
              width={34}
              height={34}
              className="site-footer__logo"
            />
            <span>Letras<span className="site-footer__brand-accent">Bonitas</span></span>
          </Link>
          <p className="site-footer__tagline">
            Letras bonitas, letras cursivas y texto para copiar y pegar.
          </p>
        </div>

        {/* 4 Navigation Columns */}
        <div className="site-footer__nav-grid">
          {/* Column 1: EXPLORAR */}
          <div className="site-footer__col">
            <span className="site-footer__col-heading">EXPLORAR</span>
            <ul className="site-footer__link-list">
              <li>
                <Link
                  href="/"
                  className={isActiveRoute(pathname, "/") ? "is-active" : ""}
                >
                  Inicio
                </Link>
              </li>
              {SILO_NAVIGATION.map((silo) => (
                <li key={`explore-${silo.id}`}>
                  <Link
                    href={silo.href}
                    className={isSiloActive(pathname, silo.href) ? "is-active" : ""}
                  >
                    {silo.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columns 2, 3, 4: SILOS */}
          {SILO_NAVIGATION.map((silo) => (
            <div key={`col-${silo.id}`} className="site-footer__col">
              <span className="site-footer__col-heading">
                {silo.title.toUpperCase()}
              </span>
              <ul className="site-footer__link-list">
                {silo.children.map((child) => (
                  <li key={`footer-${child.href}`}>
                    <Link
                      href={child.href}
                      className={isActiveRoute(pathname, child.href) ? "is-active" : ""}
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="site-footer__divider" />

        {/* Bottom Bar */}
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {currentYear} LetrasBonitas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
