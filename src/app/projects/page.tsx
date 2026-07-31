"use client";

import Projects from "@/components/sections/Projects";
import LiquidEther from "@/components/sections/LiquidEther";

export default function ProjectsPage() {
  return (
    <>
      <div 
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          width: "100vw",
          height: "100vh",
          opacity: 0.55
        }}
      >
        <LiquidEther colors={["#7C5CFF", "#36C2FF"]} resolution={0.45} />
      </div>

      <main style={{ paddingTop: "100px", minHeight: "100vh" }}>
        <Projects />
      </main>
    </>
  );
}
