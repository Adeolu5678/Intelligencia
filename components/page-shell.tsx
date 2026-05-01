import { Children, isValidElement, type ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";

export function PageShell({ children }: { children: ReactNode }) {
  const items = Children.toArray(children);
  const [hero, ...sections] = items;
  const isFullBleedHero =
    isValidElement<{ variant?: string }>(hero) &&
    hero.props.variant === "backgroundCard";

  return (
    <div className="page-frame page-frame--full page-shell page-shell--static-bg page-shell--subpage">
      <div className="site-shell site-shell--full">
        {hero ? (
          <section
            className={`sticky-scene sticky-scene--hero page-shell__scene page-shell__scene--hero${
              isFullBleedHero ? " page-shell__scene--full-bleed" : ""
            }`}
          >
            <section
              className={`sticky-scene__content sticky-scene__content--hero page-shell__hero-content${
                isFullBleedHero ? " page-shell__hero-content--full-bleed" : ""
              }`}
            >
              {isFullBleedHero ? (
                hero
              ) : (
                <div className="container">
                  <div className="page-stack">{hero}</div>
                </div>
              )}
            </section>
          </section>
        ) : null}

        <section className="sticky-scene sticky-scene--operations page-shell__scene page-shell__scene--operations">
          <main className="sticky-scene__content sticky-scene__content--operations page-shell__body-content">
            {sections.length > 0 ? (
              <div className="container">
                <div className="page-stack">{sections}</div>
              </div>
            ) : null}
            <SiteFooter />
          </main>
        </section>
      </div>
    </div>
  );
}
