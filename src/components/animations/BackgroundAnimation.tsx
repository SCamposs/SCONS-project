"use client";

import AuroraShader from "../lightswind/aurora-shader";

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AuroraShader
        colorStops={["#000000", "#242424", "#363636"]}
        amplitude={0.6}
        blend={0.8}
        speed={0.3}
      />
    </div>
  );
}
