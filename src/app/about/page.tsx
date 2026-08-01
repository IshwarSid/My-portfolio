"use client";

import About from "@/components/sections/About";
import Aurora from "@/components/ui/backgrounds/Aurora/Aurora";
import SplashCursor from "@/components/ui/components/SplashCursor/SplashCursor";

export default function AboutPage() {
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
          opacity: 0.35
        }}
      >
        <Aurora colorStops={["#7C5CFF", "#36C2FF", "#08090A"]} amplitude={1.2} blend={0.6} speed={0.4} />
      </div>
      
      {/* Dynamic colorful fluid splash trails */}
      <SplashCursor DENSITY_DISSIPATION={3.0} CURL={4} SPLAT_RADIUS={0.18} />

      <main style={{ minHeight: "100vh" }}>
        <About />
      </main>
    </>
  );
}
