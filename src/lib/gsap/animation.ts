import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const staggerRotateIn = (elements: Element[], stagger = 0.1) => {
  return gsap.fromTo(
    elements,
    {
      y: '100%',
      opacity: 0,
      transformOrigin: 'top left',
      rotateZ: '5deg',
    },
    {
      y: 0,
      opacity: 1,
      rotateZ: '0deg',
      duration: 0.8,
      stagger,
      ease: 'power3.out',
    },
  );
};

export const staggerFadeIn = (elements: Element[], stagger = 0.1) => {
  return gsap.fromTo(
    elements,
    {
      y: '100%',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger,
      ease: 'power3.out',
    },
  );
};
