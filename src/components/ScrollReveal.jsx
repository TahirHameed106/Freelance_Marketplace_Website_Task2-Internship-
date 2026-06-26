'use client';

import { useEffect, useRef } from 'react';

/**
 * ScrollReveal Component
 *
 * Wrap any element to animate it when it enters the viewport.
 *
 * Example:
 *
 * <ScrollReveal>
 *   <Hero />
 * </ScrollReveal>
 *
 * <ScrollReveal animation="reveal-left">
 *   <Section />
 * </ScrollReveal>
 *
 * Props:
 * - animation:
 *      reveal
 *      reveal-left
 *      reveal-right
 *      reveal-scale
 *
 * - threshold:
 *      Percentage of element visible before animation starts.
 *
 * - className:
 *      Extra Tailwind/CSS classes.
 *
 * - as:
 *      HTML element (div, section, article, etc.)
 */

export default function ScrollReveal({
  children,
  animation = 'reveal',
  className = '',
  threshold = 0.15,
  as: Tag = 'div',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // Accessibility:
    // If the user prefers reduced motion,
    // reveal content immediately.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      element.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        element.classList.add('visible');

        // Animate only once
        observer.unobserve(element);
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`${animation} ${className}`}
    >
      {children}
    </Tag>
  );
}