'use client';

import PasswordGate from '@/components/PasswordGate';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

type Slide =
  | {
      type: 'intro';
      eyebrow: string;
      title: string;
      body: React.ReactNode;
    }
  | {
      type: 'split';
      eyebrow: string;
      title: string;
      subtitle: string;
      body: React.ReactNode;
      image: string;
      imageAlt: string;
    };

const slides: Slide[] = [
  {
    type: 'intro',
    eyebrow: 'Kenilworth Social Club',
    title: 'Vision Renderings',
    body: (
      <>
        These renderings showcase an{' '}
        <span className="text-charcoal">immersive audiovisual setup</span>, a
        redesigned bar, an updated kitchen, and a multifunctional ballroom —
        all crafted to elevate The Kenilworth&apos;s experience to new heights.
      </>
    ),
  },
  {
    type: 'split',
    eyebrow: '01 — Goals',
    title: 'Social Room Goals',
    subtitle: 'Creating a Versatile Space for Community and Elegance',
    body: (
      <>
        The Kenilworth&apos;s social room will be a{' '}
        <span className="text-charcoal">multi-functional space</span>, perfect
        for hosting everything from casual gatherings to formal events.
        Equipped with{' '}
        <span className="text-charcoal">state-of-the-art technology</span>, an
        updated kitchen, and a welcoming bar atmosphere — this elegant design
        captures the essence of luxury while fostering a strong sense of
        community among residents.
      </>
    ),
    image: '/projects/kenilworth-social-club/social-room-skyline.jpg',
    imageAlt: 'Social room rendering with floor-to-ceiling city skyline projection',
  },
];

export default function KenilworthSocialClubSlides() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const total = slides.length;

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= total || index === current) return;
      setDirection(index > current ? 'next' : 'prev');
      setCurrent(index);
    },
    [current, total],
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goNext();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const slide = slides[current];
  const animClass =
    direction === 'next' ? 'animate-slide-enter' : 'animate-slide-enter-reverse';

  return (
    <PasswordGate title="Kenilworth Social Club" subtitle="Design Presentation">
      <div className="relative h-screen overflow-hidden bg-off-white">
        <div key={current} className={`h-full ${animClass}`}>
          {slide.type === 'intro' && <IntroSlide slide={slide} />}
          {slide.type === 'split' && <SplitSlide slide={slide} />}
        </div>

        {/* Navigation overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <div className="flex items-center justify-between px-6 md:px-12 pb-6 md:pb-10">
            <button
              onClick={goPrev}
              disabled={current === 0}
              aria-label="Previous slide"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-charcoal/10 bg-white/80 backdrop-blur-sm text-charcoal/50 hover:text-charcoal hover:border-charcoal/30 disabled:opacity-0 transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-[2px] transition-all duration-500 ${
                    i === current
                      ? 'w-10 bg-charcoal'
                      : 'w-6 bg-charcoal/15 hover:bg-charcoal/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={current === total - 1}
              aria-label="Next slide"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-charcoal/10 bg-white/80 backdrop-blur-sm text-charcoal/50 hover:text-charcoal hover:border-charcoal/30 disabled:opacity-0 transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="absolute bottom-6 md:bottom-10 right-6 md:right-12">
            <span className="font-body text-charcoal/30 text-[10px] tracking-[0.25em]">
              {String(current + 1).padStart(2, '0')} /{' '}
              {String(total).padStart(2, '0')}
            </span>
          </div>

          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-12">
            <span className="font-body text-charcoal/30 text-[10px] tracking-[0.25em] uppercase">
              Aquamarine Green
            </span>
          </div>
        </div>
      </div>
    </PasswordGate>
  );
}

function IntroSlide({ slide }: { slide: Extract<Slide, { type: 'intro' }> }) {
  return (
    <div className="relative h-full flex items-center justify-center bg-off-white overflow-hidden">
      <div className="absolute inset-0 art-deco-pattern opacity-40" />

      <div className="relative w-full max-w-4xl px-8 md:px-16 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-2 h-2 bg-seafoam rotate-45" />
        </div>

        <span className="inline-block font-body text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-charcoal/40 mb-10">
          {slide.eyebrow}
        </span>

        <h1 className="font-display italic text-5xl md:text-7xl lg:text-8xl text-charcoal leading-[1.05] mb-10">
          {slide.title}
        </h1>

        <div className="flex justify-center mb-10">
          <div className="w-16 h-px bg-charcoal/20" />
        </div>

        <p className="font-body text-charcoal/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {slide.body}
        </p>
      </div>
    </div>
  );
}

function SplitSlide({ slide }: { slide: Extract<Slide, { type: 'split' }> }) {
  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-12 bg-off-white">
      {/* Text column */}
      <div className="lg:col-span-5 flex items-center px-8 md:px-16 lg:px-20 py-12 lg:py-0 order-2 lg:order-1">
        <div className="max-w-md">
          <span className="inline-block font-body text-[10px] tracking-[0.3em] uppercase text-charcoal/40 mb-8">
            {slide.eyebrow}
          </span>

          <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05] mb-6">
            {slide.title}
          </h2>

          <div className="w-10 h-px bg-seafoam mb-8" />

          <p className="font-display text-charcoal/80 text-lg md:text-xl leading-snug mb-6">
            {slide.subtitle}
          </p>

          <p className="font-body text-charcoal/55 text-sm md:text-[15px] leading-relaxed">
            {slide.body}
          </p>
        </div>
      </div>

      {/* Image column */}
      <div className="lg:col-span-7 relative min-h-[45vh] lg:min-h-0 order-1 lg:order-2 bg-charcoal">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
        {/* Subtle gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/10 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
