"use client";

import { memo } from "react";

function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/30 to-gray-100/50 dark:from-black/20 dark:via-gray-900/10 dark:to-gray-800/20" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-white/5 to-gray-300/10 dark:from-white/5 dark:to-gray-300/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-gray-400/8 to-white/8 dark:from-gray-400/8 dark:to-white/8 rounded-full blur-3xl opacity-30" />
    </div>
  );
}

export default memo(BackgroundAnimation);
