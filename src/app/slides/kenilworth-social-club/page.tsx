'use client';

import PasswordGate from '@/components/PasswordGate';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

type Slide =
  | { type: 'cover'; eyebrow: string; title: string; subtitle: string; image: string }
  | { type: 'split'; eyebrow: string; title: string; body: string; image: string; bg: 'white' | 'light' }
  | { type: 'full-image'; eyebrow: string; title: string; caption: string; image: string }
  | { type: 'text-center'; eyebrow: string; title: string; body: string; bg: 'charcoal' | 'white' }
  | { type: 'closing'; title: string; body: string; cta: string; ctaHref: string };

const slides: Slide[] = [
  {
    type: 'cover',
    eyebrow: 'Design Presentation',
    title: 'Kenilworth Social Club',
    subtitle: 'Bal Harbour, FL',
    image: '/projects/kenilworth-1/cover.jpg',
  },
  {
    type: 'split',
    eyebrow: '01 — Vision',
    title: 'Project Overview',
    body: 'A curated social club experience at the Kenilworth, blending timeless elegance with contemporary design sensibility. Every detail is considered — from material selection to spatial flow — creating an environment that feels both refined and inviting.',
    image: '/projects/kenilworth-1/image-25.jpg',
    bg: 'white',
  },
  {
    type: 'full-image',
    eyebrow: '02 — Inspiration',
    title: 'Design Direction',
    caption: 'Drawing from the rich architectural heritage of Bal Harbour — warm materiality balanced with clean geometry.',
    image: '/projects/kenilworth-1/image-15.jpg',
  },
  {
    type: 'text-center',
    eyebrow: '03 — Philosophy',
    title: 'Less, But Better',
    body: 'The design language favors restraint over excess. A carefully edited palette of honed marble, blackened steel, oiled walnut, and bouclé upholstery creates layers of tactile sophistication. Lighting is atmospheric — architectural cove lighting paired with sculptural pendants and intimate table lamps.',
    bg: 'charcoal',
  },
  {
    type: 'split',
    eyebrow: '04 — Spaces',
    title: 'Key Areas',
    body: 'The program encompasses lounge areas, a curated bar, intimate dining alcoves, and flexible gathering spaces — each with its own character while maintaining a cohesive narrative throughout the club experience.',
    image: '/projects/kenilworth-1/image-10.jpg',
    bg: 'light',
  },
  {
    type: 'closing',
    title: 'Next Steps',
    body: 'We look forward to refining this vision together. The next phase will include detailed material sampling, furniture selections, and construction documentation.',
    cta: 'Get in Touch',
    ctaHref: '/contact',
  },
];

export default function KenilworthSocialClubSlides() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const total = slides.length;

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= total || index === current) return;
    setDirection(index > current ? 'next' : 'prev');
    setCurrent(index);
  }, [current, total]);

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const slide = slides[current];
  const animClass = direction === 'next' ? 'animate-slide-enter' : 'animate-slide-enter-reverse';

  return (
    <PasswordGate title="Kenilworth Social Club" subtitle="Design Presentation">
      <div className="relative h-screen overflow-hidden bg-charcoal">
        {/* Slide content */}
        <div key={current} className={`h-full ${animClass}`}>
          {slide.type === 'cover' && <CoverSlide slide={slide} />}
          {slide.type === 'split' && <SplitSlide slide={slide} />}
          {slide.type === 'full-image' && <FullImageSlide slide={slide} />}
          {slide.type === 'text-center' && <TextCenterSlide slide={slide} />}
          {slide.type === 'closing' && <ClosingSlide slide={slide} />}
        </div>

        {/* Navigation overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <div className="flex items-center justify-between px-6 md:px-12 pb-6 md:pb-10">
            {/* Prev */}
            <button
              onClick={goPrev}
              disabled={current === 0}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white/60 hover:bg-white/20 hover:text-white disabled:opacity-0 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 flex-shrink-0 ${
                    i === current
                      ? 'bg-seafoam'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={goNext}
              disabled={current === total - 1}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white/60 hover:bg-white/20 hover:text-white disabled:opacity-0 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide counter */}
          <div className="absolute bottom-6 md:bottom-10 right-6 md:right-12 translate-x-0">
            <span className="font-body text-white/20 text-[10px] tracking-[0.2em]">
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </PasswordGate>
  );
}

function CoverSlide({ slide }: { slide: Extract<Slide, { type: 'cover' }> }) {
  return (
    <div className="relative h-full">
      <Image src={slide.image} alt={slide.title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/20" />
      <div className="relative h-full flex flex-col justify-end p-8 md:p-16 pb-24 md:pb-28">
        <div className="max-w-3xl">
          <div className="w-8 h-px bg-seafoam mb-6" />
          <span className="inline-block font-body text-[10px] tracking-[0.25em] uppercase text-white/40 mb-4">
            {slide.eyebrow}
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-3">
            {slide.title}
          </h1>
          <p className="font-body text-white/50 text-lg md:text-xl">
            {slide.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

function SplitSlide({ slide }: { slide: Extract<Slide, { type: 'split' }> }) {
  const isLight = slide.bg === 'light';
  return (
    <div className={`h-full grid grid-cols-1 lg:grid-cols-2 ${isLight ? 'bg-light-gray' : 'bg-white'}`}>
      <div className="flex items-center px-8 md:px-16 py-12 md:py-0">
        <div className="max-w-lg">
          <span className="inline-block font-body text-[10px] tracking-[0.2em] uppercase text-charcoal/25 mb-6">
            {slide.eyebrow}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-5">
            {slide.title}
          </h2>
          <div className="w-10 h-px bg-seafoam mb-6" />
          <p className="font-body text-charcoal/55 text-sm md:text-base leading-relaxed">
            {slide.body}
          </p>
        </div>
      </div>
      <div className="relative min-h-[40vh] lg:min-h-0">
        <Image src={slide.image} alt={slide.title} fill className="object-cover" />
      </div>
    </div>
  );
}

function FullImageSlide({ slide }: { slide: Extract<Slide, { type: 'full-image' }> }) {
  return (
    <div className="relative h-full">
      <Image src={slide.image} alt={slide.title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/20" />
      <div className="relative h-full flex flex-col justify-between p-8 md:p-16 pb-24 md:pb-28">
        <div>
          <span className="inline-block font-body text-[10px] tracking-[0.25em] uppercase text-white/40">
            {slide.eyebrow}
          </span>
        </div>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4">
            {slide.title}
          </h2>
          <p className="font-body text-white/50 text-sm md:text-base leading-relaxed max-w-xl">
            {slide.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

function TextCenterSlide({ slide }: { slide: Extract<Slide, { type: 'text-center' }> }) {
  const isDark = slide.bg === 'charcoal';
  return (
    <div className={`h-full flex items-center justify-center relative overflow-hidden ${isDark ? 'bg-charcoal' : 'bg-white'}`}>
      {isDark && <div className="absolute inset-0 art-deco-pattern opacity-50" />}
      <div className="relative text-center px-8 md:px-16 max-w-3xl">
        <span className={`inline-block font-body text-[10px] tracking-[0.25em] uppercase mb-6 ${isDark ? 'text-white/25' : 'text-charcoal/25'}`}>
          {slide.eyebrow}
        </span>
        <h2 className={`font-display text-3xl md:text-5xl lg:text-6xl mb-6 ${isDark ? 'text-white' : 'text-charcoal'}`}>
          {slide.title}
        </h2>
        <div className="w-10 h-px bg-seafoam mx-auto mb-8" />
        <p className={`font-body text-sm md:text-base leading-relaxed ${isDark ? 'text-white/45' : 'text-charcoal/55'}`}>
          {slide.body}
        </p>
      </div>
    </div>
  );
}

function ClosingSlide({ slide }: { slide: Extract<Slide, { type: 'closing' }> }) {
  return (
    <div className="h-full flex items-center justify-center bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 chevron-pattern opacity-30" />
      <div className="relative text-center px-8 md:px-16 max-w-2xl">
        <div className="flex justify-center mb-8">
          <div className="w-3 h-3 bg-seafoam rotate-45" />
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-white mb-5">
          {slide.title}
        </h2>
        <p className="font-body text-white/40 text-sm md:text-base leading-relaxed mb-10">
          {slide.body}
        </p>
        <a
          href={slide.ctaHref}
          className="inline-block bg-white text-charcoal font-body text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-seafoam transition-colors"
        >
          {slide.cta}
        </a>
        <div className="mt-16 h-px bg-white/10 max-w-xs mx-auto" />
        <p className="mt-4 font-body text-white/10 text-[10px] tracking-[0.15em] uppercase">
          Aquamarine Green
        </p>
      </div>
    </div>
  );
}
