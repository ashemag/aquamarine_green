'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroVideo() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [pixelSize, setPixelSize] = useState(40);

    useEffect(() => {
        // Start the transition after a brief delay
        const timer1 = setTimeout(() => {
            setIsLoaded(true);
        }, 1600);

        // Start revealing video
        const timer2 = setTimeout(() => {
            setShowVideo(true);
        }, 2000);

        // Animate pixelation reduction
        const timer3 = setTimeout(() => {
            const pixelInterval = setInterval(() => {
                setPixelSize((prev) => {
                    if (prev <= 1) {
                        clearInterval(pixelInterval);
                        return 1;
                    }
                    return prev - 4;
                });
            }, 50);
            return () => clearInterval(pixelInterval);
        }, 2200);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <section className="relative h-[calc(100svh-5rem)] min-h-[400px] overflow-hidden bg-white">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${showVideo ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{
                    filter: pixelSize > 1 ? `blur(${pixelSize / 4}px)` : 'none',
                    transform: pixelSize > 1 ? `scale(${1 + pixelSize / 100})` : 'scale(1)',
                    transition: 'filter 0.1s ease-out, transform 0.1s ease-out',
                }}
            >
                <source src="/videos/banner.mp4" type="video/mp4" />
            </video>

            {/* Pixelation overlay effect */}
            {showVideo && pixelSize > 1 && (
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
                        backgroundSize: `${pixelSize}px ${pixelSize}px`,
                        opacity: pixelSize / 40,
                    }}
                />
            )}

            {/* Bottom dark gradient overlay */}
            <div
                className={`absolute inset-x-0 bottom-0 h-2/3 z-10 pointer-events-none bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-1000 ${showVideo ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* White intro screen with text */}
            <div
                className={`absolute inset-0 z-20 bg-white flex items-center justify-center transition-opacity duration-1000 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
            >
                <div className="text-center px-6 max-w-md lg:max-w-none mx-auto">
                    {/* Small diamond logo matching text */}
                    <div className="relative w-4 h-4 md:w-5 md:h-5 mx-auto mb-4">
                        <div className="absolute inset-0 border border-charcoal/30 rotate-45" />
                        <div className="absolute inset-0.5 md:inset-1 bg-charcoal/30 rotate-45" />
                    </div>
                    <p className="font-display text-sm md:text-base text-charcoal/80 tracking-wide leading-relaxed font-normal lg:whitespace-nowrap">
                        Blending modern elegance with intelligent design to create extraordinary spaces
                    </p>
                    <p className="font-display text-xs md:text-base text-charcoal/50 mt-2 italic font-normal">
                        Miami, Bal Harbour, and the Palm Beach Areas
                    </p>
                </div>
            </div>

            {/* Bottom bar - tagline left, CTAs right */}
            <div
                className={`absolute bottom-0 left-0 right-0 z-30 w-full px-4 sm:px-8 lg:px-12 py-4 pb-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 transition-all duration-1000 ${showVideo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
            >
                <p className="hidden md:block font-body text-sm md:text-base text-white tracking-wide">
                    Blending modern elegance with intelligent design to create extraordinary spaces · <span className="italic">Miami, Bal Harbour, and the Palm Beach Areas</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <Link
                        href="/projects"
                        className="group flex-1 md:flex-none text-center px-6 md:px-8 py-3.5 md:py-3 bg-white text-charcoal font-body tracking-[0.15em] md:tracking-[0.2em] uppercase text-[11px] md:text-[11px] transition-all duration-300 hover:bg-seafoam"
                    >
                        View Our Work
                    </Link>
                    <Link
                        href="/contact"
                        className="group flex-1 md:flex-none text-center px-6 md:px-8 py-3.5 md:py-3 border border-white/50 text-white font-body tracking-[0.15em] md:tracking-[0.2em] uppercase text-[11px] md:text-[11px] transition-all duration-300 hover:bg-white hover:text-charcoal hover:border-white"
                    >
                        Start Your Project
                    </Link>
                </div>
            </div>
        </section>
    );
}

