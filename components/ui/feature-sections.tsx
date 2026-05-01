import Link from "next/link";
import Image from "next/image";

export default function FeatureSections() {
  const sharedImage =
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop";

  return (
    <section className="feature-sections">
      <div className="feature-sections__intro">
        <h2>Why Leaders Choose Intelligencia</h2>
        <p>
          We combine strategic clarity, systems thinking, and practical
          implementation to help ambitious organizations operate better and grow
          with confidence.
        </p>
      </div>

      <div className="feature-sections__grid">
        <article className="feature-sections__card feature-sections__card--wide">
          <div className="feature-sections__media">
            <Image
              alt="Leadership team reviewing strategy notes in a modern office"
              fill
              sizes="(max-width: 1180px) 100vw, 42vw"
              src={sharedImage}
            />
          </div>
          <div className="feature-sections__content">
            <h3>Strategy that turns complexity into direction</h3>
            <p>
              We help organizations align digital priorities, operational
              workflows, and technical decisions so every next move is clearer
              and more deliberate.
            </p>
          </div>
        </article>

        <article className="feature-sections__card">
          <div className="feature-sections__metric-panel feature-sections__metric-panel--standalone">
            <div className="feature-sections__metric-card feature-sections__metric-card--standalone">
              <span className="feature-sections__metric-label">
                Client Retention
              </span>
              <strong>98%</strong>
              <span className="feature-sections__metric-subtitle">
                Long-term partnerships that keep compounding in value.
              </span>

              <div className="feature-sections__metric-row">
                <div>
                  <span>100+</span>
                  <small>Enterprise clients</small>
                </div>
                <div>
                  <span>15+</span>
                  <small>Industries served</small>
                </div>
                <div>
                  <span>10+</span>
                  <small>Years of impact</small>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
