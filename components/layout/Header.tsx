"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Site header with primary navigation and a mobile menu.
 *
 * Accessibility notes:
 *  - Mobile menu returns focus to the toggle on close.
 *  - All interactive elements are native buttons/links with real targets.
 */
export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  /* Track scroll for the sticky visual state. */
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close the menu when the route changes (render-time adjustment pattern). */
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (mobileOpen) setMobileOpen(false);
  }

  /* Prevent body scroll while the mobile menu is open. */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* Escape closes the mobile menu and returns focus to its toggle. */
  useEffect(() => {
    if (!mobileOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  function closeMobileMenu() {
    setMobileOpen(false);
    mobileToggleRef.current?.focus();
  }

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <div
      className={cn(styles.wrapper, scrolled && styles.scrolled)}
      data-mobile-open={mobileOpen || undefined}
    >
      <Container wide className={styles.container}>
        <Link href="/" className={styles.logo} aria-label={`${siteConfig.name} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
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
            Get in touch
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
            {navLinks.map((link) => (
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
            Get in touch
          </Button>
        </nav>
      </div>
    </div>
  );
}
