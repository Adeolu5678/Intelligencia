import Image from "next/image";
import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { FloatingNavbar } from "@/components/floating-navbar";
import { AnimatedLayerButtonLink } from "@/components/ui/button";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import FeatureSections from "@/components/ui/feature-sections";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { TestimonialCarousel } from "@/components/ui/profile-card-testimonial-carousel";

export function HomePremium() {
  return (
    <div className="page-frame page-frame--full">
      <div className="site-shell site-shell--full">
        <FloatingNavbar />

        <section className="sticky-scene sticky-scene--hero">
          <section className="hero sticky-scene__content sticky-scene__content--hero">
            <div className="hero-content">
              <div className="hero-copy">
                <Image
                  alt=""
                  className="hero-copy__background"
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 820px) calc(100vw - 36px), (max-width: 1180px) 100vw, min(53.25vw, 890px)"
                  src="/images/home/home-hero-primary-visual.png"
                />
                <div className="hero-copy__panel">
                  <h1>
                    Solve complex challenges.
                    <span>Build lasting advantage.</span>
                  </h1>

                  <p>
                    We design processes, build websites, implement systems, and automate workflows so your organization can
                    operate at its best and scale with confidence.
                  </p>

                  <div className="hero-actions">
                    <AnimatedLayerButtonLink
                      className="animated-layer-button--hero"
                      href="/contact"
                    >
                      Book a Consultation
                    </AnimatedLayerButtonLink>
                    <GetStartedButton
                      className="get-started-button--hero"
                      href="/services"
                    >
                      Explore Our Services
                    </GetStartedButton>
                  </div>
                </div>
              </div>

              <div className="hero-visual" aria-hidden="true" />
            </div>
          </section>
        </section>

        <section className="sticky-scene sticky-scene--operations">
          <main className="sticky-scene__content sticky-scene__content--operations">
            <section className="operations-viewport">
              <section className="solutions section" id="services">
                <div className="section-label">OUR SOLUTIONS</div>
                <FeatureCarousel className="feature-carousel--home" />
              </section>

              <section className="numbers section">
                <div className="section-label">BY THE NUMBERS</div>
                <FeatureSections />
              </section>

              <section className="proof-viewport">
                <section className="testimonial-band" id="about">
                  <TestimonialCarousel className="testimonial-carousel--home" />
                </section>

                <section className="cta-banner" id="contact">
                  <div className="cta-content">
                    <h2>Ready to transform the way you operate?</h2>
                    <p>Let&apos;s build the systems that power your next stage of growth.</p>
                    <AnimatedLayerButtonLink
                      className="animated-layer-button--cta"
                      href="/contact"
                    >
                      Book a Consultation
                    </AnimatedLayerButtonLink>
                  </div>
                </section>
              </section>
            </section>

            <footer className="footer footer--transparent" id="resources">
              <div className="footer-main">
                <div className="footer-brand">
                  <Link className="brand brand-footer" href="/">
                    <BrandMark compact />
                  </Link>
                  <p>
                    We help ambitious organizations turn complexity into clarity and strategy into results.
                  </p>
                  <div className="socials">
                    <a href="#" aria-label="LinkedIn">
                      in
                    </a>
                    <a href="#" aria-label="X">
                      x
                    </a>
                    <a href="#" aria-label="YouTube">
                      o
                    </a>
                  </div>
                </div>

                <div className="footer-links">
                  <div>
                    <h3>SOLUTIONS</h3>
                    <a href="#services">Process Design</a>
                    <a href="#services">Website Development</a>
                    <a href="#services">Systems &amp; Workflows</a>
                    <a href="#services">Technology Management</a>
                    <a href="#services">Consulting</a>
                  </div>
                  <div>
                    <h3>COMPANY</h3>
                    <Link href="/about">About Us</Link>
                    <a href="#about">Our Approach</a>
                    <a href="#about">Careers</a>
                  </div>
                  <div>
                    <h3>RESOURCES</h3>
                    <Link href="/case-studies">Case Studies</Link>
                    <Link href="/case-studies">Insights</Link>
                    <a href="#resources">Guides</a>
                  </div>
                  <div>
                    <h3>CONTACT</h3>
                    <a href="mailto:hello@intelligencia.com">hello@intelligencia.com</a>
                    <a href="tel:+2349032778691">(234) 903 277 8691</a>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="footer-meta">
                <span>© 2026 Intelligencia. All rights reserved.</span>
                <div>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                </div>
              </div>
            </footer>
          </main>
        </section>
      </div>
    </div>
  );
}
