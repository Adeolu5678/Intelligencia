import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import {
  CalloutSection,
  CaseStudySection,
  DetailGridSection,
  FAQSection,
} from "@/components/sections";

const capabilities = [
  {
    title: "Positioning-led structure",
    text: "The page hierarchy is built around trust, offer clarity, and consultation flow rather than generic page decoration.",
    bullets: ["Sitemap planning", "Section-level content hierarchy", "Messaging-informed architecture"],
  },
  {
    title: "Custom development",
    text: "Websites are built as clean, maintainable systems with reusable sections and clear routing.",
    bullets: ["Multi-page builds", "Reusable content modules", "Responsive baseline implementation"],
  },
  {
    title: "Brand alignment",
    text: "Visual direction, messaging, and page pacing are aligned so the site feels credible and coherent as a business asset.",
    bullets: ["Brand-aware page shell", "Content-first design logic", "Easy media replacement later"],
  },
  {
    title: "Future refinement readiness",
    text: "The first build creates the scaffolding for a later premium redesign and image-generation phase.",
    bullets: ["Placeholder asset zones", "Expandable case study modules", "Structured CTA placement"],
  },
];

const faqs = [
  {
    question: "Is this only for marketing sites?",
    answer: "No. The website service is positioned for corporate presence, service communication, lead qualification, and trust-building across B2B contexts.",
  },
  {
    question: "Can brand identity be part of the website project?",
    answer: "Yes. Brand identity work can sit inside Digital Foundations when the business needs a more coherent visual and verbal system.",
  },
  {
    question: "Will placeholder imagery remain?",
    answer: "Only in this phase. The baseline build uses simple visual placeholders so the later asset-map and image workflow can replace them precisely.",
  },
  {
    question: "What matters most in this first build?",
    answer: "Page structure, section hierarchy, navigation logic, and content architecture matter more than final polish at this stage.",
  },
];

const proof = [
  {
    tag: "Corporate website",
    title: "Consulting site structured around trust and service clarity",
    text: "A company-facing digital experience rebuilt to make the offer easier to understand and the inquiry path more direct.",
    bullets: ["Cleaner service hierarchy", "Strong CTA logic", "More premium content pacing"],
  },
  {
    tag: "Brand + web",
    title: "Identity and web system aligned under one business narrative",
    text: "Brand direction and website structure were integrated so the digital presence felt more consistent and executive-ready.",
    bullets: ["Unified message", "Sharpened perception", "Higher-quality conversion context"],
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Website Development"
        title="Build a website that strengthens trust, clarity, and commercial credibility."
        description="This service is framed as a strategic digital foundation for firms that need more than a generic design pass."
        image={{
          assetId: "website-development-hero-panel",
          src: "/images/services/website-development/website-development-hero-visual.png",
          alt: "Premium website development workspace visual for Intelligencia.",
        }}
        primaryCta={{ href: "/contact", label: "Book a Consultation" }}
        secondaryCta={{ href: "/services", label: "Back to Services" }}
        variant="backgroundCard"
      />
      <DetailGridSection
        eyebrow="Capabilities"
        title="What this service should communicate."
        description="The page structure below focuses on what the website does for the business and how the work is organized."
        items={capabilities}
      />
      <CaseStudySection
        eyebrow="Relevant Proof"
        title="Keep proof close to the service claim."
        description="Service pages should include relevant examples, even if they begin as concise placeholders."
        items={proof}
      />
      <FAQSection
        eyebrow="FAQ"
        title="Reduce friction around scope and process."
        description="These questions help qualify visitors who are deciding whether they need a strategic website partner or a commodity build."
        items={faqs}
      />
      <CalloutSection
        eyebrow="Inquiry"
        title="Route serious interest into consultation."
        description="Keep the conversion path clean and focused, especially on service pages."
        points={["Service-specific CTA language", "Relevant proof before the ask", "Structured handoff to the contact page"]}
        cta={{ href: "/contact", label: "Book a Website Consultation" }}
      />
    </PageShell>
  );
}
