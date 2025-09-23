// SCONS Project Constants
export const SCONS_CONFIG = {
  name: "SCONS",
  fullName: "Soares Campos Optimized Navigation System",
  description: "Sistema de navegação otimizada para aplicações corporativas",
  version: "1.0.0",
  author: "Soares Campos",
  contact: {
    email: "contato@soarescampos.com",
    website: "https://soarescampos.com",
  },
} as const;

export const ANIMATION_SETTINGS = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.8,
    verySlow: 1.2,
  },
  ease: {
    default: "easeInOut",
    bounce: "easeOut",
    smooth: "easeInOut",
  },
} as const;

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const COLORS = {
  primary: {
    blue: "#2563eb",
    purple: "#7c3aed",
  },
  neutral: {
    50: "#f9fafb",
    100: "#f3f4f6",
    800: "#1f2937",
    900: "#111827",
  },
} as const;
