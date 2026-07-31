"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: "48px 0",
        borderTop: "1px solid var(--border)",
        position: "relative",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "var(--text)",
            textDecoration: "none",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.05 }}
        >
          {siteConfig.shortName}
          <span style={{ color: "var(--primary)" }}>.</span>
        </motion.a>

        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--text-dim)",
            textAlign: "center",
          }}
        >
          Made with ❤️ by {siteConfig.name}
        </p>

        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--text-dim)",
          }}
        >
          © {year} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
