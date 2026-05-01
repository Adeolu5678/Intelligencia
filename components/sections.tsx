import Link from "next/link";

import { AnimatedLayerButton, AnimatedLayerButtonLink } from "@/components/ui/button";

type IntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

type GridItem = {
  title: string;
  text: string;
  bullets?: string[];
  tag?: string;
  href?: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type FAQ = {
  question: string;
  answer: string;
};

export function SectionIntro({ eyebrow, title, description }: IntroProps) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export function MetricStrip({ items }: { items: GridItem[] }) {
  return (
    <section className="card section">
      <div className="metric-grid">
        {items.map((item) => (
          <div key={item.title} className="stack-panel">
            <span className="meta-label">{item.title}</span>
            <p className="kicker">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServiceGridSection({
  eyebrow,
  title,
  description,
  items,
}: IntroProps & { items: GridItem[] }) {
  return (
    <section className="card section page-stack">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />
      <div className="service-grid">
        {items.map((item) => (
          <article key={item.title} className="service-card">
            {item.tag ? <span className="service-tag">{item.tag}</span> : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.bullets ? (
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            {item.href ? (
              <Link className="button-ghost" href={item.href}>
                Learn More
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export function DetailGridSection({
  eyebrow,
  title,
  description,
  items,
}: IntroProps & { items: GridItem[] }) {
  return (
    <section className="card section page-stack">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />
      <div className="detail-grid">
        {items.map((item) => (
          <article key={item.title} className="stack-panel">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.bullets ? (
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export function TestimonialSection({
  eyebrow,
  title,
  description,
  items,
}: IntroProps & { items: Testimonial[] }) {
  return (
    <section className="card section page-stack">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />
      <div className="testimonial-grid">
        {items.map((item) => (
          <article key={item.name} className="testimonial-card">
            <p className="kicker">“{item.quote}”</p>
            <div>
              <h3>{item.name}</h3>
              <p>{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CaseStudySection({
  eyebrow,
  title,
  description,
  items,
}: IntroProps & { items: GridItem[] }) {
  return (
    <section className="card section page-stack">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />
      <div className="case-grid">
        {items.map((item) => (
          <article key={item.title} className="case-card">
            {item.tag ? <span className="service-tag">{item.tag}</span> : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.bullets ? (
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export function FAQSection({
  eyebrow,
  title,
  description,
  items,
}: IntroProps & { items: FAQ[] }) {
  return (
    <section className="card section page-stack">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />
      <div className="faq-grid">
        {items.map((item) => (
          <article key={item.question} className="faq-card">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CalloutSection({
  eyebrow,
  title,
  description,
  points,
  cta,
}: IntroProps & { points: string[]; cta: { href: string; label: string } }) {
  return (
    <section className="card section">
      <div className="split-callout">
        <div className="page-stack">
          <SectionIntro eyebrow={eyebrow} title={title} description={description} />
        </div>
        <div className="stack-panel">
          <ul>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <AnimatedLayerButtonLink
            className="animated-layer-button--page"
            href={cta.href}
          >
            {cta.label}
          </AnimatedLayerButtonLink>
        </div>
      </div>
    </section>
  );
}

export function ContactCards({
  eyebrow,
  title,
  description,
  items,
}: IntroProps & { items: GridItem[] }) {
  return (
    <section className="card section page-stack">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />
      <div className="contact-grid">
        {items.map((item) => (
          <article key={item.title} className="contact-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.bullets ? (
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export function ContactConsultationSection({
  eyebrow,
  title,
  description,
  items,
}: IntroProps & { items: GridItem[] }) {
  return (
    <section className="contact-consultation section" id="inquiry">
      <div className="contact-consultation__intro">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="contact-consultation__signals">
          {items.map((item) => (
            <article key={item.title} className="contact-consultation__signal">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="contact-consultation__form-shell">
        <InquiryForm compact />
      </div>
    </section>
  );
}

export function InquiryForm({ compact = false }: { compact?: boolean } = {}) {
  return (
    <section className={compact ? "contact-form contact-form--compact" : "card section page-stack contact-form"}>
      {compact ? (
        <div className="contact-form__intro">
          <h3>Describe the problem clearly.</h3>
          <p>The more concrete the operating context is, the easier it is to assess fit and next steps.</p>
        </div>
      ) : (
        <SectionIntro
          eyebrow="Consultation"
          title="Start a serious project conversation."
          description="This baseline form is structured for qualification and easy replacement with a live CRM or form backend later."
        />
      )}
      <form className="form-shell form-grid">
        <div className="field-grid">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Your full name" type="text" />
          </div>
          <div className="field">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" placeholder="Company or organization" type="text" />
          </div>
        </div>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="email">Work email</label>
            <input id="email" name="email" placeholder="name@company.com" type="email" />
          </div>
          <div className="field">
            <label htmlFor="focus">Primary need</label>
            <select id="focus" name="focus" defaultValue="">
              <option value="" disabled>
                Select a service focus
              </option>
              <option>Website Development</option>
              <option>Systems & Automation</option>
              <option>Technology Management</option>
              <option>Multi-service engagement</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="scope">Project scope</label>
          <textarea
            id="scope"
            name="scope"
            placeholder="Describe the current problem, the systems involved, and the outcome you need."
          />
        </div>
        <div className="actions">
          <AnimatedLayerButton className="animated-layer-button--page" type="submit">
            Submit Inquiry
          </AnimatedLayerButton>
          <span className="muted">This form currently acts as a structural placeholder for future CRM or backend integration.</span>
        </div>
      </form>
    </section>
  );
}
