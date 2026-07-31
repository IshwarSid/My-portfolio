"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Animations";
import { siteConfig } from "@/lib/data";
import { Send, Mail, Download, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback since there's no backend
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`);
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section id="contact" className="section" style={{ position: "relative" }}>
      {/* Subtle aurora for visual interest */}
      <div className="aurora" style={{ opacity: 0.5 }}>
        <div className="aurora-blob" />
        <div className="aurora-blob" />
      </div>

      <div className="container" style={{ maxWidth: "700px", position: "relative", zIndex: 2 }}>
        <Reveal>
          <span className="section-label">Contact</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">connect</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="section-subtitle">
            Got an opportunity, a question, or just want to say hi? I&apos;d love to hear from you.
          </p>
        </Reveal>

        {/* Contact Form */}
        <Reveal delay={0.3}>
          <form
            onSubmit={handleSubmit}
            className="glass-card"
            style={{ padding: "32px", marginTop: "36px" }}
          >
            <div className="contact-form-grid">
              <div className="contact-field">
                <label className="contact-label" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  className="contact-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  aria-label="Your name"
                />
              </div>
              <div className="contact-field">
                <label className="contact-label" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  className="contact-input"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  aria-label="Your email"
                />
              </div>
            </div>
            <div className="contact-field" style={{ marginTop: 16 }}>
              <label className="contact-label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                className="contact-input contact-textarea"
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                aria-label="Your message"
              />
            </div>

            <motion.button
              type="submit"
              className="btn-primary"
              style={{ marginTop: 24, width: "100%", justifyContent: "center" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {isSent ? (
                  <>
                    <CheckCircle size={16} />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </span>
            </motion.button>
          </form>
        </Reveal>

        {/* Social Links */}
        <Reveal delay={0.4}>
          <div className="contact-links">
            <motion.a
              href={`mailto:${siteConfig.email}`}
              className="contact-link-card glass-card"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Mail size={20} style={{ color: "var(--primary-light)" }} />
              <span>Email</span>
            </motion.a>

            <motion.a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card glass-card"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <LinkedinIcon size={20} style={{ color: "var(--primary-light)" }} />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card glass-card"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GithubIcon size={20} style={{ color: "var(--primary-light)" }} />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href={siteConfig.resumeUrl}
              className="contact-link-card glass-card"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Download size={20} style={{ color: "var(--primary-light)" }} />
              <span>Resume</span>
            </motion.a>
          </div>
        </Reveal>
      </div>

      <style jsx global>{`
        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .contact-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-muted);
        }
        .contact-input {
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s ease;
        }
        .contact-input::placeholder {
          color: var(--text-dim);
        }
        .contact-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(124, 92, 255, 0.1);
        }
        .contact-textarea {
          resize: vertical;
          min-height: 120px;
        }
        .contact-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 24px;
        }
        .contact-link-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px;
          text-decoration: none;
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .contact-link-card:hover {
          color: var(--text);
        }
        @media (max-width: 640px) {
          .contact-form-grid { grid-template-columns: 1fr; }
          .contact-links { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}
