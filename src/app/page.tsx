"use client";

import Threads from "@/components/ui/backgrounds/Threads/Threads";
import BlobCursor from "@/components/ui/components/BlobCursor/BlobCursor";
import Hero from "@/components/sections/Hero";
import Exploring from "@/components/sections/Exploring";
import OpenSource from "@/components/sections/OpenSource";

export default function Home() {
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
        <Threads color={[0.48, 0.36, 1.0]} amplitude={1.2} distance={0.3} enableMouseInteraction={true} />
      </div>
      
      {/* Blob Cursor trailing effect */}
      <BlobCursor fillColor="var(--primary)" trailCount={5} sizes={[30, 24, 18, 12, 6]} innerSizes={[10, 8, 6, 4, 2]} />

      <main>
        <Hero />
        <Exploring />
        <OpenSource />
      </main>
    </>
  );
}
