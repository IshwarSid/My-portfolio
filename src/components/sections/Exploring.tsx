"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { currentlyExploring } from "@/lib/data";

export default function Exploring() {
  return (
    <section id="exploring" className="section">
      <div className="container">
        <Reveal>
          <span className="section-label">Currently Exploring</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            What I&apos;m <span className="gradient-text">diving into</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="section-subtitle">
            Instead of listing experience I don&apos;t have, here&apos;s what genuinely excites me right now.
          </p>
        </Reveal>

        <StaggerContainer stagger={0.08} delay={0.3} className="exploring-grid">
          {currentlyExploring.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="glass-card exploring-card"
                style={{ background: item.gradient }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="exploring-icon">{item.icon}</span>
                <h3 className="exploring-title">{item.title}</h3>
                <p className="exploring-desc">{item.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <style jsx global>{`
        .exploring-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
          margin-top: 48px;
        }
        .exploring-card {
          padding: 28px;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .exploring-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124, 92, 255, 0.3), transparent);
        }
        .exploring-icon {
          font-size: 28px;
          display: block;
          margin-bottom: 16px;
        }
        .exploring-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 10px;
        }
        .exploring-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        @media (max-width: 640px) {
          .exploring-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
