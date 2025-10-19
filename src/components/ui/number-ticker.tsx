'use client';

import { useInView, useMotionValue, useSpring } from 'motion/react';
import { ComponentPropsWithoutRef, useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

interface NumberTickerProps extends ComponentPropsWithoutRef<'span'> {
  value: number | string;
  startValue?: number;
  direction?: 'up' | 'down';
  delay?: number;
  decimalPlaces?: number;
}

export function NumberTicker({
  value,
  startValue = 0,
  direction = 'up',
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const stringValue = typeof value === 'string' ? value : value.toString();
  const numberMatch = stringValue.match(/[\d.,]+/);
  const numericPart = numberMatch ? parseFloat(numberMatch[0].replace(/,/g, '')) : 0;

  const prefix = stringValue.split(numberMatch?.[0] ?? '')[0] ?? '';
  const suffix = stringValue.split(numberMatch?.[0] ?? '')[1] ?? '';

  const motionValue = useMotionValue(direction === 'down' ? numericPart : startValue);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === 'down' ? startValue : numericPart);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [motionValue, isInView, delay, numericPart, direction, startValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        const formatted = Intl.NumberFormat('en-US', {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(Number(latest.toFixed(decimalPlaces)));

        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [springValue, decimalPlaces, prefix, suffix]);

  return (
    <span
      ref={ref}
      className={cn(
        'inline-block tracking-wider text-black tabular-nums dark:text-white',
        className,
      )}
      {...props}
    >
      {startValue}
    </span>
  );
}
