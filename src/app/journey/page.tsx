"use client";

import Journey from "@/components/sections/Journey";
import Hyperspeed from "@/components/ui/backgrounds/Hyperspeed/Hyperspeed";

export default function JourneyPage() {
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
          opacity: 0.25
        }}
      >
        <Hyperspeed 
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 9,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 120,
            speedUp: 1.5,
            carLightsFade: 0.4,
            totalSideLightSticks: 12,
            lightPairsPerRoadWay: 20,
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x08090a,
              shoulderLines: 0x7c5cff,
              brokenLines: 0x36c2ff,
              leftCars: [0x7c5cff, 0x8b5cf6, 0x6366f1],
              rightCars: [0x36c2ff, 0x0ea5e9, 0x06b6d4],
              sticks: 0x7c5cff
            }
          }}
        />
      </div>

      <main style={{ paddingTop: "100px", minHeight: "100vh" }}>
        <Journey />
      </main>
    </>
  );
}
