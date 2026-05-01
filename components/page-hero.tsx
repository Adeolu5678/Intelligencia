import Image from "next/image";

import { AnimatedLayerButtonLink } from "@/components/ui/button";
import { GetStartedButton } from "@/components/ui/get-started-button";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  highlights?: string[];
  asideTitle?: string;
  asideText?: string;
  variant?: "split" | "backgroundCard";
  image: {
    src: string;
    alt: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  highlights,
  asideTitle,
  asideText,
  variant = "split",
  image,
}: HeroProps) {
  if (variant === "backgroundCard") {
    return (
      <section className="card hero hero--background-card">
        <div className="hero-content">
          <div className="hero-copy">
            <Image
              alt={image.alt}
              className="hero-copy__background"
              fill
              priority
              quality={100}
              sizes="(max-width: 820px) calc(100vw - 36px), (max-width: 1180px) 100vw, min(53.25vw, 890px)"
              src={image.src}
              unoptimized
            />
            <div className="hero-copy__panel">
              <h1>{title}</h1>
              <p>{description}</p>
              {(primaryCta || secondaryCta) && (
                <div className="hero-actions">
                  {primaryCta ? (
                    <AnimatedLayerButtonLink
                      className="animated-layer-button--hero"
                      href={primaryCta.href}
                    >
                      {primaryCta.label}
                    </AnimatedLayerButtonLink>
                  ) : null}
                  {secondaryCta ? (
                    <GetStartedButton
                      className="get-started-button--hero"
                      href={secondaryCta.href}
                    >
                      {secondaryCta.label}
                    </GetStartedButton>
                  ) : null}
                </div>
              )}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true" />
        </div>
      </section>
    );
  }

  return (
    <section className="card hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="kicker">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className="actions">
              {primaryCta ? (
                <AnimatedLayerButtonLink
                  className="animated-layer-button--page"
                  href={primaryCta.href}
                >
                  {primaryCta.label}
                </AnimatedLayerButtonLink>
              ) : null}
              {secondaryCta ? (
                <GetStartedButton
                  className="get-started-button--page"
                  href={secondaryCta.href}
                >
                  {secondaryCta.label}
                </GetStartedButton>
              ) : null}
            </div>
          )}
        </div>
        <div className="hero-visual">
          <Image
            alt={image.alt}
            className="hero-visual__image"
            fill
            sizes="(max-width: 980px) 100vw, 33vw"
            src={image.src}
          />
          {asideTitle && asideText ? (
            <div className="hero-visual__overlay">
              <h3>{asideTitle}</h3>
              <p>{asideText}</p>
            </div>
          ) : null}
        </div>
      </div>
      {highlights && highlights.length > 0 ? (
        <div className="pill-grid">
          {highlights.map((item) => (
            <div key={item} className="panel">
              <p className="kicker">{item}</p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
