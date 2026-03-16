'use client';

import { animate, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  detail: string;
};

const stats: Stat[] = [
  {
    label: 'Customer journeys tracked',
    value: 12480,
    suffix: '+',
    detail: 'Cross-channel sessions stitched into one clean customer view.',
  },
  {
    label: 'Repeat conversion lift',
    value: 38,
    suffix: '%',
    detail: 'Average improvement seen after segmentation and message timing updates.',
  },
  {
    label: 'Revenue influenced',
    value: 8.6,
    prefix: '$',
    suffix: 'M',
    decimals: 1,
    detail: 'Attributed pipeline tracked from first touch through reactivation.',
  },
  {
    label: 'Median analytics latency',
    value: 94,
    suffix: 'ms',
    detail: 'Fast enough for near real-time dashboards and experimentation loops.',
  },
];

function formatValue(value: number, decimals = 0) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

function AnimatedStat({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(0, stat.value, {
      duration: 1.35,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        setDisplayValue(latest);
      },
    });

    return () => controls.stop();
  }, [index, isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/90 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur"
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70" />
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">{stat.label}</p>
      <p className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
        {stat.prefix}
        {formatValue(displayValue, stat.decimals)}
        {stat.suffix}
      </p>
      <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">{stat.detail}</p>
    </motion.div>
  );
}

export default function AnimatedAnalyticsSection() {
  return (
    <section className="border-y border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.14),_transparent_38%),linear-gradient(180deg,_#f8fbff_0%,_#eef5ff_100%)] py-18">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-700">Customer analytics snapshot</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            Numbers that move as fast as your campaigns do.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            A shared view of acquisition, retention, and performance metrics that every team can read at a glance.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedStat key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}