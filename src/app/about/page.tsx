import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About | Aquamarine Green',
    description: 'Soho meets South Beach. For over a decade, Aquamarine Green has brought New York\'s modern, minimal elegance to Miami through design-build, interiors, and renovation.',
    openGraph: {
        title: 'About | Aquamarine Green',
        description: 'Soho meets South Beach. For over a decade, Aquamarine Green has brought New York\'s modern, minimal elegance to Miami.',
    },
};

const team = [
    {
        name: 'Lily Schwabe',
        role: 'Founder',
        email: 'lily@aquamarinegreen.com',
        image: '/team/lily-schwabe.png',
    },
    {
        name: 'Ben Peress',
        role: 'Build Design Associate & Realtor',
        email: 'ben@aquamarinegreen.com',
        image: '/team/ben-peress.jpg',
    },
];

const values = [
    {
        title: 'Philosophy',
        description: 'Soho meets South Beach—bringing New York\'s modern, minimal elegance to Miami\'s coastal lifestyle.',
        number: '01',
    },
    {
        title: 'Precision',
        description: 'Every detail is executed with meticulous care, from concept to completion.',
        number: '02',
    },
    {
        title: 'Simplicity',
        description: 'Clean lines, refined materials, and spaces that breathe sophistication.',
        number: '03',
    },
    {
        title: 'Collaboration',
        description: 'Your vision drives our process from first sketch to final reveal.',
        number: '04',
    },
];

const timeline = [
    { year: '2001', event: 'Founded by Elena Vasquez in South Beach' },
    { year: '2005', event: 'First AIA Miami Award for The Fontana Residence' },
    { year: '2010', event: 'Expanded to full design-build services' },
    { year: '2015', event: 'Opened Coral Gables design studio' },
    { year: '2018', event: 'Named "Top 10 Design-Build Firms in Florida"' },
    { year: '2023', event: 'Celebrated 150th completed project' },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section - Two Column */}
            <section className="relative min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] flex items-center bg-white overflow-hidden">
                <div className="absolute inset-0 chevron-pattern" />

                <div className="relative w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-8 flex items-center">
                    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Text Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <span className="text-charcoal/30 font-body text-xs tracking-[0.2em] uppercase">Our Story</span>

                            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal mt-4 mb-5 lg:mb-6">
                                Soho Meets
                                <span className="block text-charcoal/40">South Beach</span>
                            </h1>

                            <p className="font-body text-charcoal/60 leading-relaxed max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
                                For over a decade, Aquamarine Green has brought a distinctive New York sensibility to Miami—infusing
                                the area with the modern, minimal elegance of Soho. Across design-build, interiors,
                                and renovation, we deliver spaces that blend sophistication with coastal living,
                                crafted with precision and refined simplicity.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-auto lg:h-[65vh] lg:max-h-[550px] overflow-hidden group order-1 lg:order-2">
                            <Image
                                src="/projects/kenilworth-1/image-30.jpg"
                                alt="Elegant primary bedroom suite showcasing Aquamarine Green's signature blend of modern minimalism and coastal luxury"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Subtle overlay on hover */}
                            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-500" />
                            {/* Corner accents */}
                            <div className="absolute top-4 left-4 lg:top-6 lg:left-6 w-6 h-6 lg:w-8 lg:h-8 border-t-2 border-l-2 border-white/60" />
                            <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 w-6 h-6 lg:w-8 lg:h-8 border-b-2 border-r-2 border-white/60" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-32 bg-charcoal relative overflow-hidden">
                <div className="absolute inset-0 art-deco-pattern opacity-50" />

                <div className="relative w-full px-4 sm:px-8 lg:px-12">
                    <div className="text-center mb-10 md:mb-20">
                        <span className="text-white/30 font-body text-xs tracking-[0.2em] uppercase">What Drives Us</span>
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white mt-3">
                            Our Values
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="group bg-charcoal p-6 md:p-10 transition-all duration-500 hover:bg-charcoal-light"
                            >
                                <span className="text-white/10 font-display text-5xl group-hover:text-white/20 transition-colors">
                                    {value.number}
                                </span>
                                <h3 className="font-display text-xl text-white mt-4 mb-4">
                                    {value.title}
                                </h3>
                                <p className="font-body text-white/50 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section - Commented out for now */}
            {/* <section className="py-16 md:py-32 bg-off-white relative">
                <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
                    <div className="text-center mb-12 md:mb-20">
                        <span className="text-charcoal/30 font-body text-xs tracking-[0.2em] uppercase">Our Journey</span>
                        <h2 className="font-display text-3xl md:text-4xl text-charcoal mt-3">
                            Milestones
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Center line - hidden on mobile, shown on md+ */}
            {/* <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-charcoal/10 -translate-x-1/2" /> */}
            {/* Left line for mobile */}
            {/* <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-charcoal/10" />

                        {timeline.map((item, index) => (
                            <div
                                key={item.year}
                                className={`relative flex items-start md:items-center gap-6 md:gap-12 mb-10 md:mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Mobile: dot on left, content on right */}
            {/* <div className="md:hidden relative z-10 w-3 h-3 bg-charcoal rotate-45 flex-shrink-0 mt-1" /> */}

            {/* Mobile content */}
            {/* <div className="md:hidden text-left">
                                    <span className="font-display text-xl text-charcoal">{item.year}</span>
                                    <p className="font-body text-charcoal/50 mt-1 text-sm">{item.event}</p>
                                </div> */}

            {/* Desktop: alternating layout */}
            {/* <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <span className="font-display text-2xl text-charcoal">{item.year}</span>
                                    <p className="font-body text-charcoal/50 mt-2 text-sm">{item.event}</p>
                                </div> */}

            {/* Center dot - desktop only */}
            {/* <div className="hidden md:block relative z-10 w-3 h-3 bg-charcoal rotate-45 flex-shrink-0" />

                                <div className="hidden md:block flex-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Team Section */}
            <section className="py-16 md:py-32 bg-white">
                <div className="w-full px-4 sm:px-8 lg:px-12">
                    <div className="text-center mb-10 md:mb-20">
                        <span className="text-charcoal/30 font-body text-xs tracking-[0.2em] uppercase">The Team</span>
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-charcoal mt-3">
                            Leadership
                        </h2>
                    </div>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 max-w-2xl">
                            {team.map((member) => (
                                <div
                                    key={member.name}
                                    className="group"
                                >
                                    <div className="relative aspect-[3/4] overflow-hidden bg-light-gray max-w-[280px] mx-auto">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="mt-6 text-center">
                                        <h3 className="font-display text-lg text-charcoal">
                                            {member.name}
                                        </h3>
                                        <p className="font-body text-charcoal/40 text-xs tracking-[0.15em] uppercase mt-1">
                                            {member.role}
                                        </p>
                                        <div className="mt-3 pt-3 border-t border-charcoal/10">
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="font-body text-charcoal/50 text-xs tracking-wide hover:text-seafoam transition-colors duration-300"
                                            >
                                                {member.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-16 md:py-32 bg-off-white relative">
                <div className="relative w-full px-4 sm:px-8 lg:px-12 text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-charcoal mb-6 md:mb-8">
                        Our Approach
                    </h2>

                    <p className="font-body text-charcoal/60 leading-relaxed text-sm sm:text-base">
                        Whether it&apos;s new residential construction, a commercial renovation, or a complete
                        interior transformation, we bring the same refined sensibility to every project.
                        Our integrated approach unites design-build, interiors, and renovation under one roof—delivering
                        that Soho-meets-South Beach elegance with precision from first consultation to final walkthrough.
                    </p>

                    <div className="mt-8 md:mt-16 grid grid-cols-3 gap-2 sm:gap-4 md:gap-8">
                        {['Design', 'Build', 'Refine'].map((phase, index) => (
                            <div key={phase} className="flex flex-col items-center">
                                <span className="font-display text-2xl sm:text-3xl md:text-5xl text-charcoal/10">{index + 1}</span>
                                <span className="font-display text-sm sm:text-base md:text-xl text-charcoal -mt-1 sm:-mt-2 md:-mt-3">{phase}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
