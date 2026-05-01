"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandMark } from "@/components/brand-mark";
import { primaryNav } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/">
          <BrandMark compact />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                className={`nav-link${active ? " active" : ""}`}
                href={item.href}
              >
                <span>{item.label}</span>
                {(item.label === "Services" || item.label === "Resources") && (
                  <span className="nav-link__caret" aria-hidden="true">
                    ▾
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
        <Link className="button button--gold site-header__cta" href="/contact">
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}
