"use client";

import AuroraShader from "../lightswind/aurora-shader";

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AuroraShader
        colorStops={["#1e293b", "#312e81", "#164e63"]}
        amplitude={0.6}
        blend={0.8}
        speed={0.4}
      />
    </div>
  );
}
