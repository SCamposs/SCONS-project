"use client";

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Simplified background animation using CSS gradients and animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-gray-900/10 to-gray-800/20 animate-pulse" />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-white/5 to-gray-300/10 rounded-full blur-3xl animate-bounce"
        style={{ animationDuration: "8s", animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-gray-400/8 to-white/8 rounded-full blur-3xl animate-bounce"
        style={{ animationDuration: "12s", animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-gray-300/6 to-black/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      />
    </div>
  );
}
