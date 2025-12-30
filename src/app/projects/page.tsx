import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects | Aquamarine Green',
    description: 'Explore our portfolio of design-build, interior design, and renovation projects across Miami, Bal Harbour, and the Palm Beach Areas.',
    openGraph: {
        title: 'Projects | Aquamarine Green',
        description: 'Explore our portfolio of design-build, interior design, and renovation projects in Miami.',
    },
};

/* PROJECTS DATA - COMMENTED OUT FOR NOW
const projects = [
    {
        id: 1,
        title: 'The Meridian',
        category: 'Residential',
        location: 'South Beach',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        description: 'A stunning oceanfront residence blending Art Deco heritage with modern luxury.',
    },
    {
        id: 2,
        title: 'Azure Tower',
        category: 'Commercial',
        location: 'Brickell',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        description: 'A 45-story office tower with distinctive geometric facades.',
    },
    {
        id: 3,
        title: 'Palm Court Estate',
        category: 'Residential',
        location: 'Coral Gables',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
        description: 'Mediterranean revival meets contemporary in this private estate.',
    },
    {
        id: 4,
        title: 'The Carlyle Restoration',
        category: 'Historic Renovation',
        location: 'Ocean Drive',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
        description: 'Meticulous restoration of an iconic 1930s Art Deco hotel.',
    },
    {
        id: 5,
        title: 'Sunset Harbor Lofts',
        category: 'Mixed Use',
        location: 'Miami Beach',
        year: '2022',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
        description: 'Waterfront living with ground-floor retail and artistic flair.',
    },
    {
        id: 6,
        title: 'Villa Versailles',
        category: 'Residential',
        location: 'Star Island',
        year: '2022',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
        description: 'An opulent private residence inspired by French Art Deco.',
    },
    {
        id: 7,
        title: 'The Beacon',
        category: 'Hospitality',
        location: 'Collins Avenue',
        year: '2021',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
        description: 'Boutique hotel celebrating Miami\'s golden age of glamour.',
    },
    {
        id: 8,
        title: 'Wynwood Arts Complex',
        category: 'Commercial',
        location: 'Wynwood',
        year: '2021',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        description: 'Creative workspace honoring the neighborhood\'s artistic spirit.',
    },
];
*/

const categories = ['All', 'Interior Design', 'Commercial', 'Renovation'];

export default function ProjectsPage() {
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
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                className={`px-4 md:px-5 py-2 font-body text-[10px] tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap flex-shrink-0 ${index === 0
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

            {/* Coming Soon */}
            <section className="py-32 md:py-48 bg-white">
                <div className="w-full px-4 sm:px-8 lg:px-12 text-center">
                    <p className="font-display text-sm md:text-base text-charcoal/50 tracking-wide animate-pulse">
                        Coming Soon...
                    </p>
                </div>
            </section>

            {/* PROJECTS GRID - COMMENTED OUT FOR NOW
            <section className="py-4 md:py-6 bg-white border-b border-charcoal/5">
                <div className="w-full px-4 sm:px-8 lg:px-12">
                    <div className="flex gap-2 md:gap-3 justify-start md:justify-center overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                className={`px-4 md:px-5 py-2 font-body text-[10px] tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap flex-shrink-0 ${index === 0
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

            <section className="py-12 md:py-20 bg-white">
                <div className="w-full px-4 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {projects.map((project, index) => (
                            <article
                                key={project.id}
                                className={`group relative overflow-hidden bg-light-gray ${index % 3 === 0 ? 'md:col-span-2' : ''
                                    }`}
                            >
                                <div className={`relative overflow-hidden ${index % 3 === 0 ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'
                                    }`}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-500" />

                                    <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                    <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                    <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                    <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                    <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-body">
                                            {project.category} · {project.location} · {project.year}
                                        </span>

                                        <h2 className="font-display text-2xl md:text-3xl text-white mt-2">
                                            {project.title}
                                        </h2>

                                        <p className="font-body text-white/60 mt-3 max-w-md text-sm">
                                            {project.description}
                                        </p>

                                        <div className="mt-6 flex items-center gap-2 text-white font-body text-xs tracking-[0.15em] uppercase cursor-pointer hover:text-white/70">
                                            View Project
                                            <span>→</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
                                    <span className="text-charcoal/40 text-[10px] tracking-[0.2em] uppercase font-body">
                                        {project.category} · {project.year}
                                    </span>
                                    <h2 className="font-display text-xl text-charcoal mt-2">
                                        {project.title}
                                    </h2>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            */}
        </>
    );
}
