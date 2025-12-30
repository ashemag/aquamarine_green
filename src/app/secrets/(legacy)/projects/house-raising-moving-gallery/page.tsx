"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const galleryImages = [
    { src: "/secrets-images/house-raising-moving/01-0541.jpg" },
    { src: "/secrets-images/house-raising-moving/02-1671.jpg" },
    { src: "/secrets-images/house-raising-moving/03-1841.jpg" },
    { src: "/secrets-images/house-raising-moving/04-4961.jpg" },
    { src: "/secrets-images/house-raising-moving/05-6861.jpg" },
    { src: "/secrets-images/house-raising-moving/06-7051.jpg" },
    { src: "/secrets-images/house-raising-moving/07-bob-aqua-pictures-19631.jpg" },
    { src: "/secrets-images/house-raising-moving/08-DSC003411.jpg" },
];

export default function HouseRaisingMovingGalleryPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <div>
            <h1 className="text-3xl font-bold text-[#2d6a8a] mb-4">House Raising/Moving Gallery</h1>

            <nav className="text-sm text-gray-500 mb-6">
                <Link href="/secrets" className="hover:text-[#2d6a8a]">Home</Link>
                {" » "}
                <Link href="/secrets/projects" className="hover:text-[#2d6a8a]">Projects</Link>
                {" » "}
                <span className="text-gray-700">House Raising/Moving Gallery</span>
            </nav>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group"
                    >
                        <Image
                            src={image.src}
                            alt={`House Raising/Moving ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </button>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={(e) => { e.stopPropagation(); setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#7bb8d8] p-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={galleryImages[selectedImage].src}
                            alt={`House Raising/Moving ${selectedImage + 1}`}
                            width={1200}
                            height={800}
                            className="max-h-[80vh] w-auto object-contain"
                        />
                    </div>

                    <button
                        onClick={(e) => { e.stopPropagation(); setSelectedImage((selectedImage + 1) % galleryImages.length); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#7bb8d8] p-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white hover:text-[#7bb8d8]"
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

            <div className="mt-8">
                <Link
                    href="/secrets/projects"
                    className="inline-flex items-center text-[#3a7ca5] hover:text-[#2d6a8a]"
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

