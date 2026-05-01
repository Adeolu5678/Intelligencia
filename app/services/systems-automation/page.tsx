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
    title: "Process mapping",
    text: "Identify operational gaps, clarify handoffs, and document where work currently breaks down.",
    bullets: ["Current-state mapping", "Friction analysis", "Role and workflow visibility"],
  },
  {
    title: "Workflow automation",
    text: "Reduce repetitive manual coordination by designing workflow logic across the systems teams already use.",
    bullets: ["Automation opportunities", "Approval routing", "Internal efficiency improvements"],
  },
  {
    title: "System integration",
    text: "Connect fragmented tools and align information flow so reporting and action become more reliable.",
    bullets: ["Platform alignment", "Data handoff logic", "Cross-tool consistency"],
  },
  {
    title: "Operational architecture",
    text: "Move from ad hoc fixes to a cleaner systems model that leadership can understand and manage.",
    bullets: ["System design logic", "Governance thinking", "Scalable workflow structure"],
  },
];

const faqs = [
  {
    question: "Is this only about software automation?",
    answer: "No. The service includes process design, operational architecture, and tool alignment, not just automation for its own sake.",
  },
  {
    question: "What kinds of clients benefit most?",
    answer: "Teams experiencing manual bottlenecks, disconnected tools, unclear ownership, or poor operational visibility usually benefit most.",
  },
  {
    question: "Does this replace internal operations teams?",
    answer: "No. The role is to improve the operating system around the team so execution becomes clearer and more efficient.",
  },
  {
    question: "How should proof be shown here?",
    answer: "Use before-and-after workflow examples, transformation summaries, and practical operational outcomes instead of abstract technical descriptions.",
  },
];

const proof = [
  {
    tag: "Workflow redesign",
    title: "Manual coordination reduced through clearer process architecture",
    text: "A fragmented operating flow was remapped into a more structured system with defined checkpoints and fewer repeated tasks.",
    bullets: ["Improved handoffs", "Less operational ambiguity", "Cleaner execution flow"],
  },
  {
    tag: "System integration",
    title: "Disconnected tools reorganized around one operational logic",
    text: "The engagement focused on alignment between teams, workflows, and platforms so information moved more predictably.",
    bullets: ["Better visibility", "Stronger process control", "More useful system decisions"],
  },
];

export default function SystemsAutomationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Systems & Automation"
        title="Make operations more reliable by redesigning the systems behind the work."
        description="This page is structured to sell practical operational clarity, not technical buzzwords."
        image={{
          src: "/images/services/systems-automation/systems-automation-hero-visual.png",
          alt: "Workflow operations and systems automation visual for Intelligencia.",
        }}
        primaryCta={{ href: "/contact", label: "Book a Consultation" }}
        secondaryCta={{ href: "/services", label: "Back to Services" }}
        variant="backgroundCard"
      />
      <DetailGridSection
        eyebrow="Capabilities"
        title="Frame the service around business movement and control."
        description="Visitors should quickly understand how this work reduces friction and supports scale."
        items={capabilities}
      />
      <CaseStudySection
        eyebrow="Transformation Examples"
        title="Use proof that demonstrates practical change."
        description="The strongest future case studies here will show before-and-after operational states, not just technical implementation lists."
        items={proof}
      />
      <FAQSection
        eyebrow="FAQ"
        title="Clarify what automation work actually includes."
        description="This page should answer scope questions while keeping the language executive-friendly."
        items={faqs}
      />
      <CalloutSection
        eyebrow="Inquiry"
        title="Turn process pain into a scoped engagement."
        description="The CTA should make it easy for teams with messy internal systems to begin the conversation without overexplaining too early."
        points={["Lead with current bottlenecks", "Describe tools involved", "Clarify desired operational outcome"]}
        cta={{ href: "/contact", label: "Start an Operations Conversation" }}
      />
    </PageShell>
  );
}
