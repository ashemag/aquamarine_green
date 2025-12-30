'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const projectImages = [
    { src: '/projects/kenilworth-1/image-25.jpg', alt: 'Open-plan living and dining with curated art collection' },
    { src: '/projects/kenilworth-1/image-15.jpg', alt: 'Living room with custom entertainment center and linear fireplace' },
    { src: '/projects/kenilworth-1/image-01.jpg', alt: 'Gallery hallway with oversized portrait artwork' },
    { src: '/projects/kenilworth-1/image-20.jpg', alt: 'Art gallery corridor with color field paintings' },
    { src: '/projects/kenilworth-1/image-10.jpg', alt: 'Sunroom with panoramic Intracoastal views' },
    { src: '/projects/kenilworth-1/image-40.jpg', alt: 'Private balcony with Atlantic Ocean views' },
    { src: '/projects/kenilworth-1/image-30.jpg', alt: 'Primary bedroom suite with contemporary art' },
    { src: '/projects/kenilworth-1/image-05.jpg', alt: 'Custom walk-in closet with designer finishes' },
    { src: '/projects/kenilworth-1/image-35.jpg', alt: 'Spa-inspired primary bathroom with soaking tub' },
    { src: '/projects/kenilworth-1/image-02.jpg', alt: 'Architectural details featuring clean lines and premium materials in Kenilworth residence' },
    { src: '/projects/kenilworth-1/image-08.jpg', alt: 'Bespoke millwork and built-in cabinetry with designer hardware' },
    { src: '/projects/kenilworth-1/image-12.jpg', alt: 'Open-concept living space with floor-to-ceiling windows overlooking the Atlantic' },
    { src: '/projects/kenilworth-1/image-18.jpg', alt: 'Gourmet kitchen with Miele appliances and waterfall countertop island' },
    { src: '/projects/kenilworth-1/image-28.jpg', alt: 'Guest suite with custom furnishings and ocean-inspired color palette' },
    { src: '/projects/kenilworth-1/image-38.jpg', alt: 'Spa bathroom featuring rainfall shower and freestanding soaking tub' },
];

const projectDetails = [
    { label: 'Location', value: 'Bal Harbour, FL' },
    { label: 'Building', value: 'The Kenilworth' },
    { label: 'Project Type', value: 'Design Build' },
    { label: 'Scope', value: 'Two-Unit Combination & Complete Gut Renovation' },
    { label: 'Year', value: '2024' },
];

const highlights = [
    'Complete gut renovation combining two adjacent apartments',
    'Custom millwork and built-ins throughout',
    'Gallery-quality art display lighting system',
    'Spa-inspired primary bathroom with rain shower',
    'Chef\'s kitchen with premium Miele appliances',
    'Smart home automation and climate control',
    'Floor-to-ceiling windows with ocean and Intracoastal views',
    'Custom walk-in closets with designer organization',
];

export default function KenilworthProjectPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
                <Image
                    src="/projects/kenilworth-1/cover.jpg"
                    alt="Kenilworth-1 Project - Luxury Apartment Combination"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                {/* Back Navigation */}
                <Link
                    href="/projects"
                    className="absolute top-4 left-4 md:top-8 md:left-8 z-10 flex items-center gap-2 text-white/80 hover:text-white transition-colors font-body text-xs md:text-sm tracking-wide bg-charcoal/30 backdrop-blur-sm px-3 py-2 md:bg-transparent md:backdrop-blur-none md:px-0 md:py-0"
                >
                    <span>←</span>
                    <span>All Projects</span>
                </Link>

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 pb-6 md:p-16">
                    <div className="max-w-4xl">
                        <span className="inline-block font-body text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.25em] uppercase text-white/60 mb-2 md:mb-4">
                            Design Build · Bal Harbour
                        </span>
                        <h1 className="font-display text-3xl md:text-6xl lg:text-7xl text-white mb-2 md:mb-4">
                            Kenilworth-1
                        </h1>
                        <p className="font-body text-white/70 text-base md:text-xl max-w-2xl leading-relaxed">
                            A complete transformation combining two apartments into one expansive oceanfront residence, featuring gallery-quality finishes and curated art displays.
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                        {/* Description */}
                        <div>
                            <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-6">
                                The Vision
                            </h2>
                            <div className="space-y-4 font-body text-charcoal/70 leading-relaxed">
                                <p>
                                    This ambitious design-build project involved the complete gut renovation and combination of two adjacent apartments in the prestigious Kenilworth building on Collins Avenue in Bal Harbour.
                                </p>
                                <p>
                                    The client envisioned a residence that could serve as both a comfortable family home and a gallery for their impressive contemporary art collection. Every design decision was made to create a seamless flow between living spaces while providing museum-quality display conditions for their curated pieces.
                                </p>
                                <p>
                                    Working closely with the building management and our team of skilled craftsmen, we demolished walls, reconfigured the floor plan, and installed new electrical, plumbing, and HVAC systems to create this stunning oceanfront residence.
                                </p>
                            </div>
                        </div>

                        {/* Details */}
                        <div>
                            <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-6">
                                Project Details
                            </h2>
                            <div className="space-y-4">
                                {projectDetails.map((detail) => (
                                    <div key={detail.label} className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-charcoal/10 gap-1 sm:gap-4">
                                        <span className="font-body text-charcoal/50 text-xs sm:text-sm tracking-wide uppercase flex-shrink-0">
                                            {detail.label}
                                        </span>
                                        <span className="font-body text-charcoal text-sm sm:text-right">
                                            {detail.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-12 md:py-24 bg-light-gray">
                <div className="max-w-7xl mx-auto px-4 md:px-12">
                    <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-8 md:mb-12 text-center">
                        Project Highlights
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-8 h-8 bg-charcoal/5 flex items-center justify-center mb-4">
                                    <span className="font-display text-charcoal/30 text-sm">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <p className="font-body text-charcoal/80 text-sm leading-relaxed">
                                    {highlight}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-12">
                    <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-8 md:mb-12 text-center">
                        Gallery
                    </h2>

                    {/* Masonry-style Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                        {projectImages.map((image, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden cursor-pointer group ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                                    }`}
                                onClick={() => setSelectedImage(index)}
                            >
                                <div className={`relative ${index === 0 ? 'aspect-[4/3]' : 'aspect-[4/3] sm:aspect-[3/2]'}`}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-4 right-4 md:top-6 md:right-6 text-white/60 hover:text-white transition-colors z-10 p-2"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Previous button */}
                    <button
                        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 p-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(selectedImage > 0 ? selectedImage - 1 : projectImages.length - 1);
                        }}
                    >
                        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Next button */}
                    <button
                        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 p-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(selectedImage < projectImages.length - 1 ? selectedImage + 1 : 0);
                        }}
                    >
                        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Image container */}
                    <div
                        className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4 md:mx-12 my-16 md:my-20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={projectImages[selectedImage].src}
                            alt={projectImages[selectedImage].alt}
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Image counter */}
                    <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-body text-xs md:text-sm">
                        {selectedImage + 1} / {projectImages.length}
                    </div>
                </div>
            )}

            {/* CTA */}
            <section className="py-12 md:py-24 bg-charcoal">
                <div className="max-w-4xl mx-auto px-4 md:px-12 text-center">
                    <h2 className="font-display text-2xl md:text-4xl text-white mb-4 md:mb-6">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="font-body text-white/60 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
                        Whether you&apos;re envisioning a complete renovation or a thoughtful refresh, our team brings the expertise and artistry to make it happen.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-charcoal font-body text-xs md:text-sm tracking-[0.15em] uppercase px-6 md:px-8 py-3 md:py-4 hover:bg-white/90 transition-colors"
                    >
                        Start Your Project
                    </Link>
                </div>
            </section>
        </>
    );
}

