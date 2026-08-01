"use client";

import { Reveal } from "@/components/ui/Animations";
import { siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section" style={{ position: "relative" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>
        <Reveal>
          <span className="section-label">About</span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="section-title">
            Curiosity is my <span className="gradient-text">compass</span>.
          </h2>
        </Reveal>

        <div className="about-content-grid" style={{ marginTop: "32px" }}>
          {/* Left Column: Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Reveal delay={0.2}>
              <p
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 500,
                  color: "var(--text)",
                  lineHeight: 1.85,
                }}
              >
                I&apos;m an AI & Data Science student at{" "}
                <span style={{ color: "var(--primary)", fontWeight: 700 }}>{siteConfig.college}</span>,
                and I spend most of my time wondering, &ldquo;What if we could make this smarter?&rdquo;
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 500,
                  color: "var(--text)",
                  lineHeight: 1.85,
                }}
              >
                I&apos;m not the kind of person who waits for a curriculum to tell me what to learn.
                When AI agents started becoming mainstream, I was already tinkering with{" "}
                <span style={{ color: "var(--primary-light)", fontWeight: 700 }}>MCP</span>,{" "}
                <span style={{ color: "var(--primary-light)", fontWeight: 700 }}>n8n</span>, and{" "}
                <span style={{ color: "var(--primary-light)", fontWeight: 700 }}>multi-model workflows</span>
                — connecting tools, automating processes, and trying to build things that
                genuinely save time.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 500,
                  color: "var(--text)",
                  lineHeight: 1.85,
                }}
              >
                I believe the best way to learn is to build. Whether it&apos;s a carbon credit
                platform, an AI story generator, or automation workflows — every project
                teaches me something textbooks can&apos;t. I&apos;m especially drawn to the
                intersection of{" "}
                <span style={{ color: "var(--primary-light)", fontWeight: 700 }}>AI and developer tooling</span> —
                where intelligent systems meet practical utility.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <p
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 500,
                  color: "var(--text)",
                  lineHeight: 1.85,
                }}
              >
                Right now, I&apos;m preparing for the{" "}
                <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                  Smart India Hackathon
                </span>
                , contributing to open source, and actively looking for environments where
                I can learn fast and contribute meaningfully.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Video Avatar */}
          <div className="about-avatar-container">
            <Reveal delay={0.3}>
              <div className="avatar-wrapper">
                <video
                  src="/avatar.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="avatar-video"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Fun facts row */}
        <Reveal delay={0.6}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              marginTop: "56px",
            }}
          >
            {[
              { label: "Focus Area", value: "AI & Automation" },
              { label: "Current Goal", value: "SIH 2025" },
              { label: "Approach", value: "Build to Learn" },
              { label: "Mindset", value: "Always Exploring" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card"
                style={{
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-dim)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "6px",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--text)",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style jsx global>{`
        .about-content-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }
        .about-avatar-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .avatar-wrapper {
          position: relative;
          width: 100%;
          max-width: 440px;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--glass-border);
          box-shadow: var(--shadow-md);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          background: var(--glass);
        }
        .avatar-wrapper::before {
          content: "";
          position: absolute;
          inset: 0px;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          z-index: -1;
          opacity: 0.3;
          transition: opacity 0.5s ease;
          padding: 2px;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        .avatar-wrapper:hover {
          transform: scale(1.03) translateY(-4px);
          box-shadow: var(--shadow-glow);
          border-color: transparent;
        }
        .avatar-wrapper:hover::before {
          opacity: 1;
        }
        .avatar-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: calc(var(--radius-lg) - 2px);
          background: #000;
        }
        @media (max-width: 868px) {
          .about-content-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .about-avatar-container {
            order: -1;
            margin-bottom: 12px;
          }
          .avatar-wrapper {
            max-width: 360px;
          }
        }
      `}</style>
    </section>
  );
}
