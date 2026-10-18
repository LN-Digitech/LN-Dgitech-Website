"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { getServicesSorted } from "@/data/services";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/**
 * Site header with primary navigation, an accessible Services dropdown and a
 * mobile menu.
 *
 * Accessibility notes:
 *  - Dropdown opens on click and keyboard (Enter/Space), closes on Escape,
 *    outside click, or when focus leaves the group.
 *  - Mobile menu traps nothing but returns focus to the toggle on close.
 *  - All interactive elements are native buttons/links with real targets.
 */
export function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const servicesToggleRef = useRef<HTMLButtonElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  const services = getServicesSorted();

  /* Track scroll for the sticky visual state. */
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close menus when the route changes (render-time adjustment pattern). */
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (servicesOpen) setServicesOpen(false);
    if (mobileOpen) setMobileOpen(false);
  }

  /* Close dropdown on outside click. */
  useEffect(() => {
    if (!servicesOpen) return;
    function onPointerDown(event: PointerEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [servicesOpen]);

  /* Escape closes dropdown and returns focus to its toggle. */
  useEffect(() => {
    if (!servicesOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        servicesToggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [servicesOpen]);

  /* Prevent body scroll while the mobile menu is open. */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeMobileMenu() {
    setMobileOpen(false);
    mobileToggleRef.current?.focus();
  }

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    if (href === "/services") return pathname.startsWith("/services");
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const servicesActive = pathname.startsWith("/services");

  return (
    <div
      className={cn(styles.wrapper, scrolled && styles.scrolled)}
      data-mobile-open={mobileOpen || undefined}
    >
      <Container wide className={styles.container}>
        <Link href="/" className={styles.logo} aria-label={`${siteConfig.name} — home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={200}
            height={45}
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(styles.navLink, isActive(link.href) && styles.navLinkActive)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li ref={dropdownRef} className={styles.dropdownRoot}>
              <button
                type="button"
                ref={servicesToggleRef}
                className={cn(
                  styles.navLink,
                  styles.dropdownToggle,
                  servicesActive && styles.navLinkActive,
                )}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((open) => !open)}
              >
                Services
                <ChevronDown
                  size={15}
                  aria-hidden="true"
                  className={cn(styles.chevron, servicesOpen && styles.chevronOpen)}
                />
              </button>
              {servicesOpen ? (
                <div className={styles.dropdown} role="group" aria-label="Services">
                  <ul className={styles.dropdownList}>
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className={cn(
                              styles.dropdownLink,
                              pathname === `/services/${service.slug}` &&
                                styles.dropdownLinkActive,
                            )}
                            aria-current={
                              pathname === `/services/${service.slug}` ? "page" : undefined
                            }
                          >
                            <Icon size={16} aria-hidden="true" className={styles.dropdownIcon} />
                            <span className={styles.dropdownText}>
                              <span className={styles.dropdownTitle}>{service.shortName}</span>
                              <span className={styles.dropdownCategory}>{service.category}</span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                    <li>
                      <Link href="/services" className={styles.dropdownAllLink}>
                        View all services
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : null}
            </li>
            {navLinks.slice(2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(styles.navLink, isActive(link.href) && styles.navLinkActive)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href="/contact" size="sm" className={styles.ctaButton}>
            Let&apos;s Talk
          </Button>
          <button
            type="button"
            ref={mobileToggleRef}
            className={styles.menuToggle}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => (mobileOpen ? closeMobileMenu() : setMobileOpen(true))}
          >
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {/* Mobile navigation */}
      <div
        id="mobile-menu"
        className={styles.mobilePanel}
        hidden={!mobileOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <nav aria-label="Mobile" className={styles.mobileNav}>
          <ul className={styles.mobileList}>
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(styles.mobileLink, isActive(link.href) && styles.mobileLinkActive)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className={styles.mobileGroup}>
              <span className={styles.mobileGroupLabel}>Services</span>
              <ul className={styles.mobileSubList}>
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className={cn(
                        styles.mobileSubLink,
                        pathname === `/services/${service.slug}` && styles.mobileLinkActive,
                      )}
                      onClick={closeMobileMenu}
                    >
                      {service.shortName}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className={styles.mobileSubLinkAll}
                    onClick={closeMobileMenu}
                  >
                    All services
                  </Link>
                </li>
              </ul>
            </li>
            {navLinks.slice(2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(styles.mobileLink, isActive(link.href) && styles.mobileLinkActive)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" fullWidth size="md" className={styles.mobileCta}>
            Let&apos;s Talk
          </Button>
        </nav>
      </div>
    </div>
  );
}
