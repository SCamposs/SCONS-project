// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Feature interface for FeaturesSection
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

// Application preview interface for ApplicationPreviewsSection
export interface ApplicationPreview {
  title: string;
  description: string;
  category: string;
  placeholder: string;
  color: string;
}

// Footer link interface
export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkSection {
  [key: string]: FooterLink[];
}

// Animation variants
export interface AnimationVariants {
  initial: object;
  animate: object;
  exit?: object;
  transition?: object;
}
