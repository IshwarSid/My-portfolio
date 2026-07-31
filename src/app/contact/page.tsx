"use client";

import Contact from "@/components/sections/Contact";
import Balatro from "@/components/ui/backgrounds/Balatro/Balatro";

export default function ContactPage() {
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
          opacity: 0.3
        }}
      >
        <Balatro 
          spinRotation={-1.5}
          spinSpeed={2.5}
          color1="#7C5CFF"
          color2="#36C2FF"
          color3="#08090A"
          contrast={2.8}
          lighting={0.3}
          spinAmount={0.2}
          mouseInteraction={true}
        />
      </div>

      <main style={{ paddingTop: "100px", minHeight: "100vh" }}>
        <Contact />
      </main>
    </>
  );
}
