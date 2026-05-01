import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { AnimatedLayerButtonLink } from "@/components/ui/button";

const standardsGroups = [
  {
    title: "Business context and operating reality come first",
    text: "Before recommending a website, workflow, platform, or vendor path, the work starts by understanding how the organization actually operates, where technology is creating drag, and how the digital layer connects to the real business behind it.",
  },
  {
    title: "Practical judgment should stay useful after launch",
    text: "Recommendations are shaped by the client’s goals, constraints, maturity, and budget, with enough structure, documentation, and manageability for the business to keep moving without unnecessary dependency or rework.",
  },
];

const operatingModel = [
  {
    title: "Diagnose the real constraint",
    text: "We begin by mapping the business need, current tools, customer journey, internal workflow, and decision context so the work starts from the right problem.",
  },
  {
    title: "Define a focused path forward",
    text: "The engagement is shaped around the highest-value intervention first, whether that is a stronger website, a cleaner operational workflow, or senior-level technology direction.",
  },
  {
    title: "Build with enough structure to scale",
    text: "Implementation favors clear architecture, reusable patterns, documented decisions, and continuity where ongoing oversight is needed.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="A firm built around structure, coherence, and technology judgment."
        description="The About page exists to deepen trust and explain why Intelligencia is organized differently from a typical web studio or disconnected technical vendor."
        image={{
          src: "/images/about/about-hero-brand-philosophy-visual.png",
          alt: "Brand philosophy and disciplined modernity visual for Intelligencia.",
        }}
        primaryCta={{ href: "/contact", label: "Book a Consultation" }}
        secondaryCta={{ href: "/services", label: "Explore Our Services" }}
        variant="backgroundCard"
      />
      <section className="about-viewport" aria-label="About Intelligencia">
        <section className="about-zone about-zone--statement">
          <div className="about-zone__header">
            <p className="about-lower__eyebrow">How We Think</p>
            <h2>
              Technology should make the
              <br />
              business clearer, not louder.
            </h2>
            <p>
              Intelligencia combines website development, systems improvement,
              and technology advisory so leaders can make better decisions about
              the digital layer of the business.
            </p>
          </div>
        </section>

        <section className="about-zone about-zone--method">
          <div className="about-zone__header">
            <p className="about-lower__eyebrow">How We Work</p>
            <h2>
              <span className="about-heading-line">
                The work moves from diagnosis
              </span>
              <span className="about-heading-line">
                to execution to continuity.
              </span>
            </h2>
            <p>
              Every engagement is shaped around the business problem first, then
              translated into practical technology decisions and implementation
              steps.
            </p>
          </div>

          <div className="about-method__list">
            {operatingModel.map((step) => (
              <article className="about-method__step" key={step.title}>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-zone about-zone--standards">
          <div className="about-zone__header">
            <p className="about-lower__eyebrow">Working Standards</p>
            <h2>
              Four operating principles
              <br />
              keep the work disciplined.
            </h2>
          </div>

          <div className="about-standards__grid">
            {standardsGroups.map((standard) => (
              <article className="about-standards__card" key={standard.title}>
                <h3>{standard.title}</h3>
                <p>{standard.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-zone about-zone--cta">
          <div className="about-cta__copy">
            <p className="about-lower__eyebrow">Next Step</p>
            <h2>Bring the problem into a serious conversation.</h2>
            <p>
              If the challenge is tied to clarity, workflow, systems, or
              technology direction, the next step is a focused discussion about
              what needs to improve and where the work should begin.
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
