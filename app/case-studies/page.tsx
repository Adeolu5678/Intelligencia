import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { AnimatedLayerButtonLink } from "@/components/ui/button";
import { featuredCases, homeTestimonials } from "@/data/site";

const deeperCases = [
  {
    tag: "Website Development",
    title: "Service business repositioned through a more disciplined multi-page website structure",
    text: "The site was reorganized so visitors could understand the offer faster, trust the brand sooner, and reach contact with less ambiguity.",
    bullets: ["Clearer navigation", "Improved service framing", "Better consultation pathway"],
  },
  {
    tag: "Systems & Automation",
    title: "Workflow environment simplified for better cross-team execution",
    text: "Process mapping and systems logic reduced friction between teams and improved the predictability of operational work.",
    bullets: ["Operational clarity", "Reduced manual coordination", "Stronger workflow structure"],
  },
  {
    tag: "Technology Management",
    title: "Technology oversight model created for a growing organization without internal senior technical leadership",
    text: "The engagement added direction across priorities, vendors, and technology decisions so the business could scale more intentionally.",
    bullets: ["Decision support", "Governance rhythm", "More reliable technical planning"],
  },
];

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Case Studies"
        title="Use proof to reduce risk for serious buyers."
        description="Selected engagements that show how Intelligencia improves positioning, operations, and technology direction with disciplined execution."
        image={{
          src: "/images/case-studies/case-studies-hero-proof-visual.png",
          alt: "Business transformation proof visual for Intelligencia case studies page.",
        }}
        primaryCta={{ href: "/contact", label: "Book a Consultation" }}
        secondaryCta={{ href: "/services", label: "Explore Our Services" }}
        variant="backgroundCard"
      />
      <section className="case-studies-viewport" aria-label="Case study proof">
        <section className="case-studies-panel case-studies-panel--spotlight">
          <Image
            alt="Futuristic website redesign case study visual for Intelligencia."
            className="case-studies-spotlight__image"
            fill
            priority={false}
            sizes="(max-width: 1180px) 100vw, 50vw"
            src="/images/case-studies/case-studies-featured-landscape-alt-generated.png"
          />
          <div className="case-studies-spotlight__intro">
            <p className="case-studies-lower__eyebrow">Featured Work</p>
          </div>
          <article className="case-studies-spotlight__content">
            {featuredCases[0].tag ? <span>{featuredCases[0].tag}</span> : null}
            <h3>{featuredCases[0].title}</h3>
            <p>{featuredCases[0].text}</p>
          </article>
        </section>

        <section className="case-studies-panel case-studies-panel--library" aria-label="Case study library">
          <div className="case-studies-library__heading">
            <p className="case-studies-lower__eyebrow">Proof Library</p>
            <h2>Three proof angles. One operating model.</h2>
            <p>
              The work is grouped by the business constraint it resolves:
              presence, workflow, and senior technology direction.
            </p>
          </div>
          <div className="case-studies-library__list">
            {[featuredCases[1], featuredCases[2], deeperCases[2]].map((item) => (
              <article className="case-studies-library-card" key={item.title}>
                {item.tag ? <span>{item.tag}</span> : null}
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="case-studies-panel case-studies-panel--signals" aria-label="Client signal">
          <div className="case-studies-signal__portrait">
            <Image
              alt=""
              fill
              sizes="(max-width: 820px) 280px, 320px"
              src="/concept-c/testimonial-portrait.png"
            />
          </div>
          <figure className="case-studies-signal">
            <p className="case-studies-lower__eyebrow">Client Signal</p>
            <blockquote>{homeTestimonials[0].quote}</blockquote>
            <div className="case-studies-signal__divider" aria-hidden="true" />
            <figcaption>
              <strong>{homeTestimonials[0].name}</strong>
              <span>{homeTestimonials[0].role}</span>
            </figcaption>
          </figure>
        </section>

        <section className="case-studies-panel case-studies-panel--conversion" aria-label="Case studies consultation">
          <div className="case-studies-conversion__copy">
            <h2>Move from proof to a serious project discussion.</h2>
            <p>
              If these situations resemble what your organization is trying to
              solve, the next step is a focused conversation about fit,
              constraints, and the highest-value place to begin.
            </p>
            <AnimatedLayerButtonLink
              className="animated-layer-button--page"
              href="/contact"
            >
              Book a Consultation
            </AnimatedLayerButtonLink>
          </div>
        </section>
      </section>
    </PageShell>
  );
}
