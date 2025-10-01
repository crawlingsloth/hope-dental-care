import type { Variants } from 'framer-motion';

// Common animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  }
};

// Common transition configurations
export const smoothTransition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94]
};

export const springTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 20
};

// Scroll-triggered animation with viewport settings
export const scrollAnimation = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-50px' },
  transition: smoothTransition
};