"use client";

import Contact from "@/components/sections/Contact";
import Threads from "@/components/ui/backgrounds/Threads/Threads";

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
          opacity: 0.35
        }}
      >
        <Threads 
          color={[0.48, 0.36, 1.0]} 
          amplitude={1.0} 
          distance={0.4} 
          enableMouseInteraction={true} 
        />
      </div>

      <main style={{ paddingTop: "100px", minHeight: "100vh" }}>
        <Contact />
      </main>
    </>
  );
}
