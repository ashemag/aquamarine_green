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
        }, 800);

        // Start revealing video
        const timer2 = setTimeout(() => {
            setShowVideo(true);
        }, 1200);

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
        }, 1400);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <section className="relative h-[calc(100vh-5rem)] overflow-hidden bg-white">
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

            {/* White intro screen with text */}
            <div
                className={`absolute inset-0 z-20 bg-white flex items-center justify-center transition-opacity duration-1000 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
            >
                <div className="text-center px-6">
                    <p className="font-display text-sm md:text-base lg:text-lg text-charcoal/80 tracking-wide leading-tight font-normal">
                        Blending modern elegance with sustainable design
                    </p>
                    <p className="font-display text-lg md:text-base text-charcoal/50 mt-2 italic font-normal">
                        Miami, FL
                    </p>
                </div>
            </div>

            {/* Bottom bar - tagline left, CTAs right */}
            <div
                className={`absolute bottom-0 left-0 right-0 z-30 w-full px-4 sm:px-8 lg:px-12 py-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 bg-gradient-to-t from-black/30 to-transparent transition-all duration-1000 ${showVideo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
            >
                <p className="font-body text-sm md:text-base text-white tracking-wide">
                    Blending modern elegance with sustainable design · <span className="italic">Miami, FL</span>
                </p>

                <div className="flex flex-row gap-3">
                    <Link
                        href="/projects"
                        className="group px-6 md:px-8 py-3 bg-white text-charcoal font-body tracking-[0.15em] md:tracking-[0.2em] uppercase text-[10px] md:text-[11px] transition-all duration-300 hover:bg-seafoam"
                    >
                        View Our Work
                    </Link>
                    <Link
                        href="/contact"
                        className="group px-6 md:px-8 py-3 border border-white/50 text-white font-body tracking-[0.15em] md:tracking-[0.2em] uppercase text-[10px] md:text-[11px] transition-all duration-300 hover:bg-white hover:text-charcoal hover:border-white"
                    >
                        Start Your Project
                    </Link>
                </div>
            </div>
        </section>
    );
}

