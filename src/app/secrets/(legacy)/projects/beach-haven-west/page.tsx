"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Beach Haven West gallery images - add images to /public/secrets-images/beach-haven-west/
const galleryImages: { src: string; caption?: string }[] = [
    { src: "/secrets-images/beach-haven-west/bedroom.jpg", caption: "Bedroom" },
    { src: "/secrets-images/beach-haven-west/bedroom-2.jpg", caption: "Bedroom" },
    { src: "/secrets-images/beach-haven-west/bedroom-3.jpg", caption: "Bedroom" },
    { src: "/secrets-images/beach-haven-west/bedroom-4.jpg", caption: "Bedroom" },
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
        <div>
            <h1 className="text-3xl font-bold text-[#2d6a8a] mb-2">Beach Haven West</h1>
            <p className="text-[#3a7ca5] font-medium mb-6">Beach Style Deck, New York</p>

            <nav className="text-sm text-gray-500 mb-6">
                <Link href="/secrets" className="hover:text-[#2d6a8a]">Home</Link>
                {" » "}
                <Link href="/secrets/projects" className="hover:text-[#2d6a8a]">Projects</Link>
                {" » "}
                <span>Beach Haven West</span>
            </nav>

            <div className="mb-8 p-4 bg-[#e8ebe4] rounded-lg">
                <p className="text-gray-700">
                    A mid-sized coastal backyard deck project showcasing beach-style design.
                    This project was featured on{" "}
                    <a
                        href="https://www.houzz.com/photos/beach-haven-west-beach-style-deck-new-york-phvw-vp~14805762"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3a7ca5] hover:text-[#2d6a8a] underline"
                    >
                        Houzz
                    </a>.
                </p>
            </div>

            {galleryImages.length > 0 ? (
                <>
                    {/* Gallery Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => openLightbox(index)}
                                className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.caption || `Beach Haven West photo ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {image.caption && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                        <span className="text-white text-sm">{image.caption}</span>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Lightbox */}
                    {selectedImage !== null && (
                        <div
                            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                            onClick={closeLightbox}
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#7bb8d8] transition-colors p-2"
                                aria-label="Previous image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
                                <Image
                                    src={galleryImages[selectedImage].src}
                                    alt={galleryImages[selectedImage].caption || "Beach Haven West"}
                                    width={1200}
                                    height={800}
                                    className="max-h-[80vh] w-auto object-contain"
                                />
                                {galleryImages[selectedImage].caption && (
                                    <p className="text-white text-center mt-4">
                                        {galleryImages[selectedImage].caption}
                                    </p>
                                )}
                            </div>

                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#7bb8d8] transition-colors p-2"
                                aria-label="Next image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 text-white hover:text-[#7bb8d8] transition-colors"
                                aria-label="Close lightbox"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                                {selectedImage + 1} / {galleryImages.length}
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500 text-lg mb-2">Gallery Coming Soon</p>
                    <p className="text-gray-400 text-sm">Photos will be added shortly</p>
                </div>
            )}

            <div className="mt-8 text-center">
                <Link
                    href="/secrets/projects"
                    className="inline-flex items-center text-[#3a7ca5] hover:text-[#2d6a8a] transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Projects
                </Link>
            </div>
        </div>
    );
}

