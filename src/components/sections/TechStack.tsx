"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="tech-stack" className="section">
      <div className="container">
        <Reveal>
          <span className="section-label">Tech Stack</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            Tools I <span className="gradient-text">work with</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="section-subtitle">
            The technologies powering my projects and experiments.
          </p>
        </Reveal>

        <StaggerContainer
          stagger={0.08}
          delay={0.3}
          className="tech-grid"
        >
          {techStack.map((category) => (
            <StaggerItem key={category.category}>
              <div className="glass-card tech-category-card">
                <h3 className="tech-category-title">{category.category}</h3>
                <div className="tech-items">
                  {category.items.map((item) => (
                    <motion.div
                      key={item.name}
                      className="tech-item"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <span className="tech-icon">{item.icon}</span>
                      <span className="tech-name">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <style jsx global>{`
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 48px;
        }
        .tech-category-card {
          padding: 28px;
        }
        .tech-category-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary-light);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 20px;
        }
        .tech-items {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .tech-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: rgba(124, 92, 255, 0.06);
          border: 1px solid rgba(124, 92, 255, 0.1);
          border-radius: var(--radius-full);
          cursor: default;
          transition: all 0.3s ease;
        }
        .tech-item:hover {
          background: rgba(124, 92, 255, 0.12);
          border-color: rgba(124, 92, 255, 0.25);
        }
        .tech-icon {
          font-size: 16px;
          line-height: 1;
        }
        .tech-name {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text);
        }
        @media (max-width: 640px) {
          .tech-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
