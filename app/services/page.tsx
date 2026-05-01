import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { AnimatedLayerButtonLink } from "@/components/ui/button";
import { AnimatedTestimonials } from "@/components/ui/testimonial";
import EngagementTestimonials from "@/components/ui/testimonials";

const coreServices = [
  {
    number: "01",
    tag: "Web presence",
    title: "Website Design & Development",
    summary:
      "Custom websites for companies that need a credible, fast, well-structured digital presence that supports sales conversations.",
    includes: [
      "Website strategy and page architecture",
      "UX-focused layouts and conversion paths",
      "Responsive development for desktop, tablet, and mobile",
      "Technical SEO foundations, performance, and analytics setup",
    ],
    href: "/services/website-development",
    image: {
      assetId: "services-core-website-development",
      src: "/images/services/website-development/website-development-hero-visual.png",
      alt: "Website development service visual for Intelligencia.",
    },
  },
  {
    number: "02",
    tag: "Operations",
    title: "Workflow Automation & Systems Integration",
    summary:
      "Process mapping, automation planning, and tool integration for teams that rely too heavily on manual work and disconnected systems.",
    includes: [
      "Current-state workflow review",
      "CRM, forms, spreadsheets, and operations tool integration",
      "Approval flows, intake routing, notifications, and reporting logic",
      "Automation documentation and handoff support",
    ],
    href: "/services/systems-automation",
    image: {
      assetId: "services-core-systems-automation",
      src: "/images/services/systems-automation/systems-automation-hero-visual.png",
      alt: "Workflow automation and systems integration visual for Intelligencia.",
    },
  },
  {
    number: "03",
    tag: "Technology leadership",
    title: "Technology Management & Advisory",
    summary:
      "Ongoing technology guidance for leadership teams that need clearer priorities, vendor oversight, and practical technical direction.",
    includes: [
      "Technology roadmap and budget planning",
      "Vendor, platform, and software decision support",
      "Risk, maintenance, and lifecycle planning",
      "Recurring advisory sessions and implementation oversight",
    ],
    href: "/services/technology-management",
    image: {
      assetId: "services-core-technology-management",
      src: "/images/services/technology-management/technology-management-hero-visual.png",
      alt: "Technology management and advisory visual for Intelligencia.",
    },
  },
];

const processSteps = [
  {
    step: "01",
    title: "Assess",
    text: "We review the current website, operational workflow, software stack, and business goals to identify the highest-value starting point.",
  },
  {
    step: "02",
    title: "Plan",
    text: "We define the service scope, required systems, milestones, dependencies, success measures, and implementation sequence.",
  },
  {
    step: "03",
    title: "Build",
    text: "We implement the website, automation, integration, reporting layer, or management structure needed to solve the agreed problem.",
  },
  {
    step: "04",
    title: "Manage",
    text: "We help maintain momentum with documentation, training, optimization, roadmap reviews, and ongoing technical guidance when needed.",
  },
];

const serviceFaqs = [
  {
    question: "Which service should we start with?",
    answer:
      "Start with the area causing the most business drag. If customers do not understand or trust the offer, start with the website. If internal work is slow or manual, start with automation and systems. If decisions feel scattered, start with technology management.",
  },
  {
    question: "Can Intelligencia handle both strategy and implementation?",
    answer:
      "Yes. The work can begin with an assessment or roadmap, then continue into website development, automation, integrations, reporting, or ongoing advisory support.",
  },
  {
    question: "Do we need to replace our current tools?",
    answer:
      "Not by default. The first step is usually to understand what is already in place, what is working, and where the gaps are. Replacement only makes sense when existing tools cannot support the required workflow or growth plan.",
  },
  {
    question: "What kind of businesses is this best suited for?",
    answer:
      "The service model fits professional service firms, operational teams, growing businesses, and organizations that need a stronger website, cleaner workflows, better software decisions, or consistent technical oversight.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Websites, automation, and technology management for growing businesses."
        description="Intelligencia helps organizations improve how they present themselves online, how work moves internally, and how technology decisions are managed over time."
        image={{
          assetId: "services-hero-panel",
          src: "/images/services/services-hero-service-model-visual.png",
          alt: "Integrated business technology services visual for Intelligencia services page.",
        }}
        primaryCta={{ href: "/contact", label: "Book a Consultation" }}
        secondaryCta={{ href: "/case-studies", label: "Case Studies" }}
        variant="backgroundCard"
      />

      <section className="services-viewport">
        <section className="services-quadrant services-quadrant--core">
          <div className="services-architecture__title">
            <h2>Core Services</h2>
          </div>

          <AnimatedTestimonials
            testimonials={coreServices.map((service) => ({
              alt: service.image.alt,
              assetId: service.image.assetId,
              includes: service.includes,
              name: service.title,
              quote: service.summary,
              src: service.image.src,
            }))}
          />
        </section>

        <section className="services-quadrant services-quadrant--engagements">
          <EngagementTestimonials
            title="A straightforward path from review to implementation."
            items={processSteps}
          />
        </section>

        <section className="services-quadrant services-quadrant--faq">
          <div className="services-faq__intro">
            <div className="section-header">
              <p className="eyebrow">FAQ</p>
              <h2>Questions clients usually need answered first.</h2>
            </div>
          </div>

          <div className="services-faq__list">
            {serviceFaqs.map((item, index) => (
              <article className="services-faq-card" key={item.question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-quadrant services-quadrant--cta services-callout">
          <div className="services-callout__copy cta-content">
            <h2>Tell us what needs to work better.</h2>
            <p>
              Share the website, workflow, system, or technology management
              problem you are trying to solve.
            </p>
            <AnimatedLayerButtonLink
              className="animated-layer-button--cta"
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
