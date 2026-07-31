"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { siteConfig } from "@/lib/data";
import { GitFork, Star, GitPullRequest } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function OpenSource() {
  return (
    <section id="open-source" className="section">
      <div className="container" style={{ maxWidth: "900px" }}>
        <Reveal>
          <span className="section-label">Open Source</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            Building in the <span className="gradient-text">open</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="section-subtitle">
            I believe in the power of open source — where collaboration drives innovation and
            everyone can contribute to something bigger.
          </p>
        </Reveal>

        {/* GitHub CTA Card */}
        <Reveal delay={0.3}>
          <motion.a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "24px 28px",
              marginTop: "36px",
              textDecoration: "none",
              cursor: "pointer",
            }}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "rgba(124, 92, 255, 0.1)",
                  border: "1px solid rgba(124, 92, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GithubIcon size={22} style={{ color: "var(--text)" }} />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: "var(--text)", fontFamily: "'Space Grotesk', sans-serif" }}>
                  @eswarprasad
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  View my GitHub profile →
                </div>
              </div>
            </div>
          </motion.a>
        </Reveal>

        {/* Goals / Activities */}
        <StaggerContainer stagger={0.08} delay={0.4} className="os-goals-grid">
          {[
            {
              icon: <Star size={20} />,
              title: "Contributing to Projects",
              desc: "Looking for meaningful open source projects where I can learn and add value — particularly in AI tooling and developer experience.",
            },
            {
              icon: <GitFork size={20} />,
              title: "Building Dev Tools",
              desc: "Creating utilities and automation tools that solve real problems for developers — sharing them openly for the community.",
            },
            {
              icon: <GitPullRequest size={20} />,
              title: "Learning in Public",
              desc: "Documenting my learning journey, sharing experiments, and building a portfolio of genuine contributions over time.",
            },
          ].map((goal) => (
            <StaggerItem key={goal.title}>
              <motion.div
                className="glass-card"
                style={{ padding: "24px" }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "var(--radius-md)",
                    background: "rgba(124, 92, 255, 0.1)",
                    border: "1px solid rgba(124, 92, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary-light)",
                    marginBottom: 16,
                  }}
                >
                  {goal.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: 8,
                }}>
                  {goal.title}
                </h3>
                <p style={{
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                }}>
                  {goal.desc}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <style jsx global>{`
        .os-goals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }
        @media (max-width: 640px) {
          .os-goals-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
