"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Beach Haven West gallery - 53 photos from Houzz
const galleryImages: { src: string; caption?: string }[] = [
    // Living Areas
    { src: "/secrets-images/beach-haven-west/01-contemporary-living-room.jpg", caption: "Contemporary Living Room" },
    { src: "/secrets-images/beach-haven-west/02-contemporary-family-room.jpg", caption: "Contemporary Family Room" },
    { src: "/secrets-images/beach-haven-west/03-beach-style-living-room-1.jpg", caption: "Beach Style Living Room" },
    { src: "/secrets-images/beach-haven-west/04-beach-style-living-room-2.jpg", caption: "Beach Style Living Room" },
    { src: "/secrets-images/beach-haven-west/05-beach-style-living-room-3.jpg", caption: "Beach Style Living Room" },
    // Dining Room
    { src: "/secrets-images/beach-haven-west/06-beach-style-dining-room-1.jpg", caption: "Beach Style Dining Room" },
    { src: "/secrets-images/beach-haven-west/07-beach-style-dining-room-2.jpg", caption: "Beach Style Dining Room" },
    { src: "/secrets-images/beach-haven-west/08-beach-style-dining-room-3.jpg", caption: "Beach Style Dining Room" },
    // Kitchen
    { src: "/secrets-images/beach-haven-west/09-beach-style-kitchen-1.jpg", caption: "Beach Style Kitchen" },
    { src: "/secrets-images/beach-haven-west/10-beach-style-kitchen-2.jpg", caption: "Beach Style Kitchen" },
    { src: "/secrets-images/beach-haven-west/11-beach-style-kitchen-3.jpg", caption: "Beach Style Kitchen" },
    { src: "/secrets-images/beach-haven-west/12-beach-style-kitchen-4.jpg", caption: "Beach Style Kitchen" },
    // Bathrooms
    { src: "/secrets-images/beach-haven-west/13-beach-style-bathroom-1.jpg", caption: "Beach Style Bathroom" },
    { src: "/secrets-images/beach-haven-west/14-beach-style-bathroom-2.jpg", caption: "Beach Style Bathroom" },
    { src: "/secrets-images/beach-haven-west/15-beach-style-bathroom-3.jpg", caption: "Beach Style Bathroom" },
    { src: "/secrets-images/beach-haven-west/16-beach-style-bathroom-4.jpg", caption: "Beach Style Bathroom" },
    { src: "/secrets-images/beach-haven-west/17-beach-style-bathroom-5.jpg", caption: "Beach Style Bathroom" },
    { src: "/secrets-images/beach-haven-west/18-beach-style-bathroom-6.jpg", caption: "Beach Style Bathroom" },
    { src: "/secrets-images/beach-haven-west/19-beach-style-bathroom-7.jpg", caption: "Beach Style Bathroom" },
    { src: "/secrets-images/beach-haven-west/20-beach-style-bathroom-8.jpg", caption: "Beach Style Bathroom" },
    { src: "/secrets-images/beach-haven-west/21-beach-style-bathroom-9.jpg", caption: "Beach Style Bathroom" },
    // Bedrooms
    { src: "/secrets-images/beach-haven-west/22-beach-style-bedroom-1.jpg", caption: "Beach Style Bedroom" },
    { src: "/secrets-images/beach-haven-west/23-beach-style-bedroom-2.jpg", caption: "Beach Style Bedroom" },
    { src: "/secrets-images/beach-haven-west/24-beach-style-bedroom-3.jpg", caption: "Beach Style Bedroom" },
    { src: "/secrets-images/beach-haven-west/25-beach-style-bedroom-4.jpg", caption: "Beach Style Bedroom" },
    { src: "/secrets-images/beach-haven-west/26-beach-style-bedroom-5.jpg", caption: "Beach Style Bedroom" },
    { src: "/secrets-images/beach-haven-west/27-beach-style-bedroom-6.jpg", caption: "Beach Style Bedroom" },
    { src: "/secrets-images/beach-haven-west/28-beach-style-bedroom-7.jpg", caption: "Beach Style Bedroom" },
    { src: "/secrets-images/beach-haven-west/29-beach-style-bedroom-8.jpg", caption: "Beach Style Bedroom" },
    { src: "/secrets-images/beach-haven-west/30-beach-style-bedroom-9.jpg", caption: "Beach Style Bedroom" },
    { src: "/secrets-images/beach-haven-west/31-beach-style-bedroom-10.jpg", caption: "Beach Style Bedroom" },
    { src: "/secrets-images/beach-haven-west/32-beach-style-bedroom-11.jpg", caption: "Beach Style Bedroom" },
    { src: "/secrets-images/beach-haven-west/33-beach-style-master-bedroom.jpg", caption: "Master Bedroom" },
    { src: "/secrets-images/beach-haven-west/34-beach-style-bedroom-12.jpg", caption: "Beach Style Bedroom" },
    { src: "/secrets-images/beach-haven-west/35-beach-style-bedroom-13.jpg", caption: "Beach Style Bedroom" },
    // Staircase & Entry
    { src: "/secrets-images/beach-haven-west/36-beach-style-staircase-1.jpg", caption: "Beach Style Staircase" },
    { src: "/secrets-images/beach-haven-west/37-beach-style-staircase-2.jpg", caption: "Beach Style Staircase" },
    { src: "/secrets-images/beach-haven-west/38-beach-style-staircase-3.jpg", caption: "Beach Style Staircase" },
    { src: "/secrets-images/beach-haven-west/39-beach-style-staircase-4.jpg", caption: "Beach Style Staircase" },
    { src: "/secrets-images/beach-haven-west/40-beach-style-entry.jpg", caption: "Beach Style Entry" },
    // Outdoor - Deck
    { src: "/secrets-images/beach-haven-west/41-beach-style-deck-1.jpg", caption: "Beach Style Deck" },
    { src: "/secrets-images/beach-haven-west/42-beach-style-deck-2.jpg", caption: "Beach Style Deck" },
    { src: "/secrets-images/beach-haven-west/43-beach-style-deck-3.jpg", caption: "Beach Style Deck" },
    { src: "/secrets-images/beach-haven-west/44-beach-style-deck-4.jpg", caption: "Beach Style Deck" },
    { src: "/secrets-images/beach-haven-west/45-beach-style-deck-5.jpg", caption: "Beach Style Deck" },
    { src: "/secrets-images/beach-haven-west/46-beach-style-deck-6.jpg", caption: "Beach Style Deck" },
    { src: "/secrets-images/beach-haven-west/47-beach-style-patio.jpg", caption: "Beach Style Patio" },
    // Exterior
    { src: "/secrets-images/beach-haven-west/48-contemporary-exterior-1.jpg", caption: "Contemporary Exterior" },
    { src: "/secrets-images/beach-haven-west/49-contemporary-exterior-2.jpg", caption: "Contemporary Exterior" },
    { src: "/secrets-images/beach-haven-west/50-beach-style-exterior-1.jpg", caption: "Beach Style Exterior" },
    { src: "/secrets-images/beach-haven-west/51-beach-style-exterior-2.jpg", caption: "Beach Style Exterior" },
    { src: "/secrets-images/beach-haven-west/52-beach-style-exterior-3.jpg", caption: "Beach Style Exterior" },
    { src: "/secrets-images/beach-haven-west/53-beach-style-exterior-4.jpg", caption: "Beach Style Exterior" },
];

export default function BeachHavenWestPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedImage(index);
    const closeLightbox = () => setSelectedImage(null);
    const nextImage = () => {
        if (selectedImage !== null && galleryImages.length > 0) {
            setSelectedImage((selectedImage + 1) % galleryImages.length);
        }
    };
    const prevImage = () => {
        if (selectedImage !== null && galleryImages.length > 0) {
            setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Header */}
            <div className="bg-white border-b border-neutral-200">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <Link
                        href="/secrets"
                        className="inline-flex items-center text-neutral-500 hover:text-neutral-800 transition-colors text-sm mb-4"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </Link>
                    <h1 className="text-3xl font-light text-neutral-800">Beach Haven West</h1>
                    <p className="text-neutral-500 mt-1">53 Photos • Aqua Marine Green</p>
                </div>
            </div>

            {/* Gallery */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {galleryImages.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => openLightbox(index)}
                            className="relative aspect-square overflow-hidden rounded-lg bg-neutral-200 hover:opacity-90 transition-opacity group"
                        >
                            <Image
                                src={image.src}
                                alt={image.caption || `Photo ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 bg-black z-50 flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Previous */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
                        aria-label="Previous"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Image */}
                    <div className="max-w-5xl max-h-[85vh] relative px-16" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={galleryImages[selectedImage].src}
                            alt={galleryImages[selectedImage].caption || "Beach Haven West"}
                            width={1400}
                            height={1000}
                            className="max-h-[85vh] w-auto object-contain"
                        />
                    </div>

                    {/* Next */}
                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
                        aria-label="Next"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Caption & Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                        {galleryImages[selectedImage].caption && (
                            <p className="text-white text-sm mb-1">{galleryImages[selectedImage].caption}</p>
                        )}
                        <p className="text-white/50 text-xs">
                            {selectedImage + 1} / {galleryImages.length}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
