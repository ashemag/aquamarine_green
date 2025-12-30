'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const projects = [
    {
        id: 'kenilworth-1',
        title: 'Kenilworth-1',
        category: 'Design Build',
        location: 'Bal Harbour',
        year: '2024',
        image: '/projects/kenilworth-1/cover.jpg',
        description: 'A complete transformation combining two apartments into one expansive oceanfront residence in the prestigious Kenilworth building.',
        href: '/projects/kenilworth-1',
    },
];

const categories = ['All', 'Design Build', 'Interior Design', 'Renovation'];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <>
            {/* Elegant Title */}
            <section className="pt-12 md:pt-20 pb-8 md:pb-12 bg-white">
                <div className="w-full px-4 sm:px-8 lg:px-12">
                    <div className="flex items-center justify-center gap-6">
                        <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-transparent to-charcoal/10" />
                        <h1 className="font-display text-3xl md:text-5xl text-charcoal tracking-wide text-center">
                            Our Projects
                        </h1>
                        <div className="hidden md:block h-px flex-1 bg-gradient-to-l from-transparent to-charcoal/10" />
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-4 md:py-6 bg-white border-b border-charcoal/5">
                <div className="w-full px-4 sm:px-8 lg:px-12">
                    <div className="flex gap-2 md:gap-3 justify-start md:justify-center overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 md:px-5 py-2 font-body text-[10px] tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeCategory === category
                                    ? 'bg-charcoal text-white'
                                    : 'bg-transparent text-charcoal/40 border border-charcoal/10 hover:border-charcoal hover:text-charcoal'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-12 md:py-20 bg-white">
                <div className="w-full px-4 sm:px-8 lg:px-12">
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {filteredProjects.map((project, index) => (
                                <Link
                                    href={project.href}
                                    key={project.id}
                                    className={`group relative overflow-hidden bg-light-gray block ${index % 3 === 0 ? 'md:col-span-2' : ''
                                        }`}
                                >
                                    <div className={`relative overflow-hidden ${index % 3 === 0 ? 'aspect-[4/3] md:aspect-[21/9]' : 'aspect-[4/3]'
                                        }`}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-500" />

                                        {/* Corner decorations - hidden on mobile */}
                                        <div className="absolute top-4 left-4 md:top-6 md:left-6 w-6 h-6 md:w-8 md:h-8 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block" />
                                        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-6 h-6 md:w-8 md:h-8 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block" />
                                        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-6 h-6 md:w-8 md:h-8 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block" />
                                        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-6 h-6 md:w-8 md:h-8 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block" />

                                        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <span className="text-white/60 text-[9px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] uppercase font-body">
                                                {project.category} · {project.location} · {project.year}
                                            </span>

                                            <h2 className="font-display text-xl md:text-3xl text-white mt-1 md:mt-2">
                                                {project.title}
                                            </h2>

                                            <p className="font-body text-white/60 mt-2 md:mt-3 max-w-md text-xs md:text-sm line-clamp-2 md:line-clamp-none">
                                                {project.description}
                                            </p>

                                            <div className="mt-4 md:mt-6 flex items-center gap-2 text-white font-body text-[10px] md:text-xs tracking-[0.15em] uppercase cursor-pointer hover:text-white/70">
                                                View Project
                                                <span>→</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 md:p-6 group-hover:opacity-0 transition-opacity duration-300">
                                        <span className="text-charcoal/40 text-[9px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] uppercase font-body">
                                            {project.category} · {project.year}
                                        </span>
                                        <h2 className="font-display text-lg md:text-xl text-charcoal mt-1 md:mt-2">
                                            {project.title}
                                        </h2>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="font-body text-charcoal/40 text-sm tracking-[0.1em]">
                                No projects in this category yet.
                            </p>
                        </div>
                    )}

                    {/* More Coming Soon */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-4">
                            <div className="h-px w-12 bg-charcoal/10" />
                            <p className="font-body text-charcoal/40 text-sm tracking-[0.1em]">
                                More projects coming soon...
                            </p>
                            <div className="h-px w-12 bg-charcoal/10" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
