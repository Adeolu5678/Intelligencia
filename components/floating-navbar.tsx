"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

import { BrandMark } from "@/components/brand-mark";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function setNavVariables(nav: HTMLElement, progress: number) {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  if (isMobile) {
    const sideInset = 8 + 10 * progress;

    nav.style.setProperty("--nav-top", `${12 - 6 * progress}px`);
    nav.style.setProperty("--nav-height", `${62 - 16 * progress}px`);
    nav.style.setProperty("--nav-width", `calc(100% - ${sideInset * 2}px)`);
    nav.style.setProperty("--nav-max-width", `${720 - 180 * progress}px`);
    nav.style.setProperty("--nav-radius", `${18 - 4 * progress}px`);
    nav.style.setProperty("--nav-padding-x", `${14 - 6 * progress}px`);
    nav.style.setProperty("--nav-logo-height", `${24 - 5 * progress}px`);
    nav.style.setProperty("--nav-menu-size", `${44 - 8 * progress}px`);
    nav.style.setProperty("--nav-shadow-alpha", `${0.14 + 0.12 * progress}`);
    nav.style.setProperty("--nav-shadow-blur", `${36 - 10 * progress}px`);
    return;
  }

  const desktopFit = Math.min(Math.max((window.innerWidth - 1280) / 160, 0), 1);
  const openPadding = 24 + 40 * desktopFit;
  const openEdgeGap = 28 + 68 * desktopFit;
  const openLinkPadding = 16 + 8 * desktopFit;
  const openLinkGap = 8 + 6 * desktopFit;

  nav.style.setProperty("--nav-top", `${16 - 8 * progress}px`);
  nav.style.setProperty("--nav-height", `${66 - 20 * progress}px`);
  nav.style.setProperty("--nav-width", "max-content");
  nav.style.setProperty("--nav-max-width", `${1320 - 460 * progress}px`);
  nav.style.setProperty("--nav-radius", "999px");
  nav.style.setProperty("--nav-padding-x", `${openPadding + (14 - openPadding) * progress}px`);
  nav.style.setProperty("--nav-logo-height", `${42 - 15 * progress}px`);
  nav.style.setProperty("--nav-link-padding-x", `${openLinkPadding + (13 - openLinkPadding) * progress}px`);
  nav.style.setProperty("--nav-link-padding-y", `${8 - 2 * progress}px`);
  nav.style.setProperty("--nav-link-gap", `${openLinkGap + (6 - openLinkGap) * progress}px`);
  nav.style.setProperty("--nav-edge-gap", `${openEdgeGap + (6 - openEdgeGap) * progress}px`);
  nav.style.setProperty("--nav-shadow-alpha", `${0.14 + 0.12 * progress}`);
  nav.style.setProperty("--nav-shadow-blur", `${36 - 10 * progress}px`);
}

function getNavScrollProgress(initialMarkerTop: { current: number | null }) {
  const heroCard = document.querySelector<HTMLElement>(".hero-copy");

  if (heroCard) {
    const markerTop = heroCard.getBoundingClientRect().top;

    if (initialMarkerTop.current === null || markerTop > initialMarkerTop.current) {
      initialMarkerTop.current = markerTop;
    }

    return Math.min(Math.max((initialMarkerTop.current - markerTop) / 180, 0), 1);
  }

  const scrollTop = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop);

  return Math.min(Math.max(scrollTop / 180, 0), 1);
}

export function FloatingNavbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const frameRef = useRef<number | null>(null);
  const initialMarkerTop = useRef<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      const tickReducedMotionNav = () => {
        if (navRef.current) {
          setNavVariables(navRef.current, getNavScrollProgress(initialMarkerTop));
        }

        frameRef.current = window.requestAnimationFrame(tickReducedMotionNav);
      };

      const handleReducedScroll = () => {
        if (navRef.current) {
          setNavVariables(navRef.current, getNavScrollProgress(initialMarkerTop));
        }
      };

      frameRef.current = window.requestAnimationFrame(tickReducedMotionNav);
      window.addEventListener("scroll", handleReducedScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleReducedScroll);

        if (frameRef.current !== null) {
          window.cancelAnimationFrame(frameRef.current);
        }
      };
    }

    const updateTarget = () => {
      targetProgress.current = getNavScrollProgress(initialMarkerTop);
    };

    const tick = () => {
      updateTarget();
      const next = currentProgress.current + (targetProgress.current - currentProgress.current) * 0.14;
      currentProgress.current = Math.abs(targetProgress.current - next) < 0.001 ? targetProgress.current : next;

      if (navRef.current) {
        setNavVariables(navRef.current, currentProgress.current);
      }

      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);
    window.addEventListener("scroll", updateTarget, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateTarget);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav ref={navRef} className="floating-nav" aria-label="Primary">
        <div className="floating-nav__inner">
          <Link className="floating-nav__brand" href="/" aria-label="Intelligencia home">
            <BrandMark compact className="floating-nav__brand-mark" />
          </Link>

          <div className="floating-nav__desktop-links">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  className="floating-nav__link"
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="floating-nav__actions">
            <button
              className="floating-nav__menu-button"
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Primary navigation menu"
      >
        <div className="mobile-menu__top">
          <Link className="mobile-menu__brand" href="/" aria-label="Intelligencia home" onClick={() => setMenuOpen(false)}>
            <BrandMark compact className="floating-nav__brand-mark" />
          </Link>

          <button
            className="mobile-menu__close"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          >
            <X aria-hidden="true" size={20} strokeWidth={1.8} />
          </button>
        </div>

        <div className="mobile-menu__links">
          {navItems.map((item, index) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                className="mobile-menu__link"
                href={item.href}
                aria-current={active ? "page" : undefined}
                style={{ "--menu-link-index": index } as CSSProperties & Record<string, number>}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
