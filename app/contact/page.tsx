import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { ContactConsultationSection } from "@/components/sections";

const consultationSignals = [
  {
    title: "Best fit",
    text: "Organizations with a real business problem to solve across websites, systems, automation, or ongoing technology direction.",
  },
  {
    title: "What to bring",
    text: "A concise description of the friction, the tools involved, and the outcome that matters most right now.",
  },
  {
    title: "Next step",
    text: "After review, the next step is a focused conversation about fit, urgency, and the right starting scope.",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Start the conversation with clarity."
        description="If you are navigating a website, systems, or technology challenge, this is the place to begin a focused discussion about what is needed and what comes next."
        image={{
          assetId: "contact-hero-panel",
          src: "/images/contact/contact-hero-consultation-visual.png",
          alt: "Executive consultation visual for Intelligencia contact page.",
        }}
        primaryCta={{ href: "#inquiry", label: "Book a Consultation" }}
        secondaryCta={{ href: "/services", label: "Explore Our Services" }}
        variant="backgroundCard"
      />
      <div className="contact-viewport">
        <ContactConsultationSection
          eyebrow="Consultation"
          title="Start a serious project conversation."
          description="Use the form to outline the problem, the operating context, and the outcome you need. The page is intentionally brief so qualified inquiries can move forward without friction."
          items={consultationSignals}
        />
      </div>
    </PageShell>
  );
}
