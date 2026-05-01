import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { footerLinks } from "@/data/site";

const footerSolutions = [
  { label: "Process Design", href: "/services" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "Systems & Workflows", href: "/services/systems-automation" },
  { label: "Technology Management", href: "/services/technology-management" },
  { label: "Consulting", href: "/contact" },
];

const footerResources = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/case-studies" },
  { label: "Guides", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="footer site-footer" id="resources">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand brand-footer" href="/">
            <BrandMark compact />
          </Link>
          <p>
            We help ambitious organizations turn complexity into clarity and strategy into results.
          </p>
          <div className="socials" aria-label="Social links">
            <span>in</span>
            <span>x</span>
            <span>o</span>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>SOLUTIONS</h3>
            {footerSolutions.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <h3>COMPANY</h3>
            <Link href="/about">About Us</Link>
            <Link href="/about">Our Approach</Link>
            <Link href="/about">Careers</Link>
          </div>

          <div>
            <h3>RESOURCES</h3>
            {footerResources.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <h3>CONTACT</h3>
            {footerLinks.map((link) => (
              <span key={link} className="footer-contact">
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-meta">
        <span>© 2026 Intelligencia. All rights reserved.</span>
        <div>
          <Link href="/contact">Privacy Policy</Link>
          <Link href="/contact">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
