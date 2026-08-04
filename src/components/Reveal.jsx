import React from 'react';
import { motion } from 'framer-motion';

/**
 * Scroll-reveal wrapper. Fades + slides children into view once.
 * Respects prefers-reduced-motion via CSS (transitions collapse to ~0ms).
 *
 * props: as (element/component), delay, y, once, className, ...rest
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 24,
  once = true,
  amount = 0.2,
  className = '',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
