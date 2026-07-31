"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <span className="section-label">Skills</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            What I <span className="gradient-text">bring</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="section-subtitle">
            A growing toolkit shaped by curiosity and hands-on practice.
          </p>
        </Reveal>

        <StaggerContainer stagger={0.08} delay={0.3} className="skills-grid">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <motion.div
                className="glass-card skill-card"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="skill-card-header">
                  <span className="skill-icon">{category.icon}</span>
                  <h3 className="skill-category-title">{category.title}</h3>
                </div>
                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <style jsx global>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 48px;
        }
        .skill-card {
          padding: 28px;
          cursor: default;
        }
        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .skill-icon {
          font-size: 24px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(124, 92, 255, 0.08);
          border: 1px solid rgba(124, 92, 255, 0.15);
          border-radius: var(--radius-md);
        }
        .skill-category-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text);
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-tag {
          padding: 6px 14px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          transition: all 0.3s ease;
        }
        .skill-tag:hover {
          color: var(--text);
          border-color: rgba(124, 92, 255, 0.3);
          background: rgba(124, 92, 255, 0.08);
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
