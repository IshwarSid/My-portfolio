"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { timeline } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container" style={{ maxWidth: "800px" }}>
        <Reveal>
          <span className="section-label">Journey</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            How I got <span className="gradient-text">here</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="section-subtitle">
            A timeline of curiosity, experimentation, and growth.
          </p>
        </Reveal>

        {/* Timeline */}
        <StaggerContainer
          stagger={0.12}
          delay={0.3}
          className="timeline-container"
        >
          {timeline.map((item, i) => (
            <StaggerItem key={i}>
              <div className="timeline-item">
                {/* Line connector */}
                <div className="timeline-line">
                  <motion.div
                    className="timeline-dot"
                    whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(124, 92, 255, 0.5)" }}
                  >
                    <span style={{ fontSize: "14px" }}>{item.icon}</span>
                  </motion.div>
                  {i < timeline.length - 1 && <div className="timeline-connector" />}
                </div>

                {/* Content */}
                <motion.div
                  className="glass-card timeline-content"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.description}</p>
                </motion.div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <style jsx global>{`
        .timeline-container {
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .timeline-item {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .timeline-line {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          width: 40px;
        }
        .timeline-dot {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--surface);
          border: 1.5px solid rgba(124, 92, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: default;
          transition: all 0.3s ease;
        }
        .timeline-connector {
          width: 1.5px;
          flex: 1;
          min-height: 24px;
          background: linear-gradient(180deg, rgba(124, 92, 255, 0.3) 0%, rgba(124, 92, 255, 0.05) 100%);
        }
        .timeline-content {
          padding: 20px 24px;
          flex: 1;
          margin-bottom: 16px;
        }
        .timeline-year {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary-light);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .timeline-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text);
          margin: 4px 0 8px;
          font-family: 'Space Grotesk', sans-serif;
        }
        .timeline-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        @media (max-width: 640px) {
          .timeline-item { gap: 16px; }
          .timeline-line { width: 32px; }
          .timeline-dot { width: 32px; height: 32px; }
          .timeline-dot span { font-size: 12px !important; }
          .timeline-content { padding: 16px; }
        }
      `}</style>
    </section>
  );
}
