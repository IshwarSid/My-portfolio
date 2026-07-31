"use client";

import TechStack from "@/components/sections/TechStack";
import Skills from "@/components/sections/Skills";
import Particles from "@/components/ui/backgrounds/Particles/Particles";

export default function SkillsPage() {
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
          opacity: 0.4
        }}
      >
        <Particles 
          particleCount={250}
          particleSpread={11}
          speed={0.12}
          particleColors={["#7C5CFF", "#36C2FF", "#9333EA"]}
          moveParticlesOnHover={true}
          particleHoverFactor={0.8}
          alphaParticles={true}
          particleBaseSize={80}
        />
      </div>

      <main style={{ paddingTop: "120px", minHeight: "100vh", display: "flex", flexDirection: "column", gap: "60px" }}>
        <TechStack />
        <Skills />
      </main>
    </>
  );
}
