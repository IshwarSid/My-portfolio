"use client";

import { Reveal } from "@/components/ui/Animations";
import { siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-split-container">
        {/* Left Column: Text Content */}
        <div className="about-text-column">
          <Reveal>
            <span className="section-label">About</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="section-title">
              Curiosity is my <span className="gradient-text">compass</span>.
            </h2>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "32px" }}>
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

        {/* Right Column: Full-height Video Column */}
        <div className="about-video-column">
          <video
            src="/avatar.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="about-full-video"
          />
        </div>
      </div>

      <style jsx global>{`
        .about-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
        }
        .about-split-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          min-height: 100vh;
          width: 100vw;
          margin: 0;
          padding: 0;
        }
        .about-text-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 140px 80px 80px 8%;
          min-height: 100vh;
        }
        .about-video-column {
          position: relative;
          height: 100vh;
          width: 100%;
          background: #000000;
          overflow: hidden;
          border-left: 1px solid var(--border-light);
        }
        [data-theme="light"] .about-video-column {
          border-left: 1px solid rgba(0, 0, 0, 0.1);
        }
        .about-full-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        @media (max-width: 1200px) {
          .about-split-container {
            grid-template-columns: 1.1fr 0.9fr;
          }
          .about-text-column {
            padding: 140px 48px 80px 6%;
          }
        }
        @media (max-width: 868px) {
          .about-split-container {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .about-text-column {
            min-height: auto;
            padding: 120px 24px 60px 24px;
          }
          .about-video-column {
            height: 50vh;
            width: 100vw;
            order: -1;
            border-left: none;
            border-bottom: 1px solid var(--border-light);
          }
          [data-theme="light"] .about-video-column {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>
    </section>
  );
}
