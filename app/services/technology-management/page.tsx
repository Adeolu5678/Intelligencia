import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import {
  CalloutSection,
  DetailGridSection,
  FAQSection,
  TestimonialSection,
} from "@/components/sections";

const capabilities = [
  {
    title: "Technology advisory",
    text: "Help leadership make clearer decisions about platforms, priorities, and what should happen next.",
    bullets: ["Decision support", "Roadmap guidance", "Strategic technical direction"],
  },
  {
    title: "Vendor and platform oversight",
    text: "Create better control over external providers, software sprawl, and implementation quality.",
    bullets: ["Vendor alignment", "Platform review", "Delivery oversight"],
  },
  {
    title: "Operational continuity",
    text: "Provide ongoing visibility and management logic where a company is not ready to build a full internal technology leadership function.",
    bullets: ["Ongoing support model", "Governance cadence", "Clearer accountability"],
  },
  {
    title: "Optimization and scale readiness",
    text: "Maintain a more disciplined technology environment as the business grows and complexity increases.",
    bullets: ["Process review", "System maturity", "Continuous improvement"],
  },
];

const faqs = [
  {
    question: "Is this managed IT support?",
    answer: "No. The positioning is closer to external technology leadership and oversight than commodity support services.",
  },
  {
    question: "Who is this ideal for?",
    answer: "Organizations with growing digital complexity, multiple platforms or vendors, and no clear senior owner of the technology layer.",
  },
  {
    question: "Can this sit alongside internal teams?",
    answer: "Yes. The model can support internal staff, leadership, and external providers by creating more clarity across priorities and execution.",
  },
  {
    question: "What should this page emphasize most?",
    answer: "Authority, continuity, and business-level oversight. It should feel like an executive service, not a technical help desk.",
  },
];

const testimonials = [
  {
    quote: "The value was having someone own the direction and discipline of the technology layer, not just individual tasks.",
    name: "Chief Operations Officer",
    role: "Scaling corporate services firm",
  },
  {
    quote: "We gained a clearer roadmap and far better visibility across tools, vendors, and execution priorities.",
    name: "Executive Director",
    role: "International organization",
  },
];

export default function TechnologyManagementPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Technology Management"
        title="Add strategic oversight to the technology layer of the business."
        description="This service page positions Intelligencia as an external partner for continuity, governance, and senior-level technical direction."
        image={{
          src: "/images/services/technology-management/technology-management-hero-visual.png",
          alt: "Executive technology oversight visual for Intelligencia.",
        }}
        primaryCta={{ href: "/contact", label: "Book a Consultation" }}
        secondaryCta={{ href: "/services", label: "Back to Services" }}
        variant="backgroundCard"
      />
      <DetailGridSection
        eyebrow="Capabilities"
        title="Describe the service as leadership support, not one-off technical labor."
        description="The page is structured to attract organizations that need continuity, judgment, and reliable oversight."
        items={capabilities}
      />
      <TestimonialSection
        eyebrow="Trust Signals"
        title="Support the executive positioning with credibility."
        description="This section works best with concise statements focused on leadership confidence and clarity."
        items={testimonials}
      />
      <FAQSection
        eyebrow="FAQ"
        title="Clarify what the management layer includes."
        description="These answers help distinguish the offer from typical outsourced support or isolated consulting."
        items={faqs}
      />
      <CalloutSection
        eyebrow="Inquiry"
        title="Qualify higher-value management conversations."
        description="This page should route organizations with ongoing needs into a consultation that can define cadence, oversight scope, and operating model."
        points={["Clarify current technology complexity", "List platforms or vendors involved", "Describe where oversight is missing today"]}
        cta={{ href: "/contact", label: "Book a Management Consultation" }}
      />
    </PageShell>
  );
}
