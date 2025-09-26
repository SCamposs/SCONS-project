"use client";

import AuroraShader from "../lightswind/aurora-shader";

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AuroraShader
        colorStops={["#000000", "#1f1f1f", "#2d2d2d"]}
        amplitude={0.3}
        blend={0.4}
        speed={0.2}
      />
    </div>
  );
}
