"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { projects } from "@/lib/data";
import { ExternalLink, Loader2, Clock } from "lucide-react";

function StatusBadge({ status }: { status: string }) {
  const config =
    status === "Completed"
      ? { color: "#22C55E", bg: "rgba(34, 197, 94, 0.1)", border: "rgba(34, 197, 94, 0.2)", icon: null }
      : status === "In Progress"
        ? { color: "#F59E0B", bg: "rgba(245, 158, 11, 0.1)", border: "rgba(245, 158, 11, 0.2)", icon: <Loader2 size={12} /> }
        : { color: "var(--text-dim)", bg: "rgba(161, 161, 170, 0.1)", border: "rgba(161, 161, 170, 0.2)", icon: <Clock size={12} /> };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "4px 12px",
        fontSize: "0.7rem",
        fontWeight: 600,
        color: config.color,
        background: config.bg,
        border: `1px solid ${config.border}`,
        borderRadius: "var(--radius-full)",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      {config.icon}
      {status}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <span className="section-label">Projects</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            Currently <span className="gradient-text">building</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="section-subtitle">
            Real projects, honest statuses. No fake demos or inflated claims.
          </p>
        </Reveal>

        <StaggerContainer stagger={0.1} delay={0.3} className="projects-grid">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                className="project-card"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Gradient top bar */}
                <div
                  style={{
                    height: 3,
                    background: project.gradient,
                    borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
                  }}
                />

                <div className="project-card-content">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <StatusBadge status={project.status} />
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: -10 }}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--text-dim)",
                        cursor: "pointer",
                        padding: 4,
                      }}
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div style={{ marginTop: 16 }}>
                    <div className="project-features-label">Planned Features</div>
                    <ul className="project-features">
                      {project.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech">
                    {project.technologies.map((t) => (
                      <span key={t} className="project-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <style jsx global>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }
        .project-card {
          background: var(--glass);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: default;
        }
        .project-card:hover {
          border-color: rgba(124, 92, 255, 0.2);
          box-shadow: var(--shadow-glow);
        }
        .project-card-content {
          padding: 24px;
        }
        .project-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 10px;
        }
        .project-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .project-features-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }
        .project-features {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .project-features li {
          font-size: 0.85rem;
          color: var(--text-muted);
          padding-left: 16px;
          position: relative;
        }
        .project-features li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-size: 0.75rem;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }
        .project-tech-tag {
          padding: 4px 10px;
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--text-dim);
          background: rgba(124, 92, 255, 0.06);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
