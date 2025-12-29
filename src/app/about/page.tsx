const team = [
    {
        name: 'Elena Vasquez',
        role: 'Principal Architect',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    },
    {
        name: 'Marcus Chen',
        role: 'Design Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    },
    {
        name: 'Sofia Rodriguez',
        role: 'Interior Design Lead',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    },
    {
        name: 'James Mitchell',
        role: 'Construction Director',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
];

const values = [
    {
        title: 'Heritage',
        description: 'We honor Miami\'s rich architectural history, weaving Art Deco elegance into every design.',
        number: '01',
    },
    {
        title: 'Innovation',
        description: 'Cutting-edge sustainable technology meets timeless aesthetics.',
        number: '02',
    },
    {
        title: 'Craftsmanship',
        description: 'Every detail is executed with precision and care by master artisans.',
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
            {/* Hero Section */}
            <section className="relative py-16 md:py-32 bg-white overflow-hidden">
                <div className="absolute inset-0 chevron-pattern" />

                <div className="relative w-full px-4 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-charcoal/30 font-body text-xs tracking-[0.2em] uppercase">Our Story</span>

                            <h1 className="font-display text-4xl md:text-5xl text-charcoal mt-4 mb-8">
                                Building Miami&apos;s
                                <span className="block text-charcoal/40">Future</span>
                            </h1>

                            <p className="font-body text-charcoal/60 leading-relaxed mb-6">
                                For over two decades, Aquamarine Green has been at the forefront of
                                Miami&apos;s architectural renaissance. Founded with a passion for
                                preserving the city&apos;s Art Deco heritage while pushing the boundaries
                                of modern design, we&apos;ve become synonymous with excellence in South Florida.
                            </p>

                            <p className="font-body text-charcoal/60 leading-relaxed">
                                Our integrated design-build approach ensures that every project—from
                                intimate residential renovations to landmark commercial developments—receives
                                the same dedication to quality, innovation, and timeless beauty.
                            </p>
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                                alt="Deco Build Co team"
                                className="w-full aspect-[4/5] object-cover"
                            />
                            <div className="absolute -bottom-4 -right-4 w-full h-full border border-charcoal/10 -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-32 bg-charcoal relative overflow-hidden">
                <div className="absolute inset-0 art-deco-pattern opacity-50" />

                <div className="relative w-full px-4 sm:px-8 lg:px-12">
                    <div className="text-center mb-20">
                        <span className="text-white/30 font-body text-xs tracking-[0.2em] uppercase">What Drives Us</span>
                        <h2 className="font-display text-3xl md:text-4xl text-white mt-3">
                            Our Values
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="group bg-charcoal p-10 transition-all duration-500 hover:bg-charcoal-light"
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

            {/* Timeline Section */}
            <section className="py-16 md:py-32 bg-off-white relative">
                <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
                    <div className="text-center mb-12 md:mb-20">
                        <span className="text-charcoal/30 font-body text-xs tracking-[0.2em] uppercase">Our Journey</span>
                        <h2 className="font-display text-3xl md:text-4xl text-charcoal mt-3">
                            Milestones
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Center line - hidden on mobile, shown on md+ */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-charcoal/10 -translate-x-1/2" />
                        {/* Left line for mobile */}
                        <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-charcoal/10" />

                        {timeline.map((item, index) => (
                            <div
                                key={item.year}
                                className={`relative flex items-start md:items-center gap-6 md:gap-12 mb-10 md:mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Mobile: dot on left, content on right */}
                                <div className="md:hidden relative z-10 w-3 h-3 bg-charcoal rotate-45 flex-shrink-0 mt-1" />

                                {/* Mobile content */}
                                <div className="md:hidden text-left">
                                    <span className="font-display text-xl text-charcoal">{item.year}</span>
                                    <p className="font-body text-charcoal/50 mt-1 text-sm">{item.event}</p>
                                </div>

                                {/* Desktop: alternating layout */}
                                <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <span className="font-display text-2xl text-charcoal">{item.year}</span>
                                    <p className="font-body text-charcoal/50 mt-2 text-sm">{item.event}</p>
                                </div>

                                {/* Center dot - desktop only */}
                                <div className="hidden md:block relative z-10 w-3 h-3 bg-charcoal rotate-45 flex-shrink-0" />

                                <div className="hidden md:block flex-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 md:py-32 bg-white">
                <div className="w-full px-4 sm:px-8 lg:px-12">
                    <div className="text-center mb-20">
                        <span className="text-charcoal/30 font-body text-xs tracking-[0.2em] uppercase">The Team</span>
                        <h2 className="font-display text-3xl md:text-4xl text-charcoal mt-3">
                            Leadership
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="group"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden bg-light-gray">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500" />

                                    {/* Minimal corners */}
                                    <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="mt-6">
                                    <h3 className="font-display text-lg text-charcoal">
                                        {member.name}
                                    </h3>
                                    <p className="font-body text-charcoal/40 text-xs tracking-[0.15em] uppercase mt-1">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-16 md:py-32 bg-off-white relative">
                <div className="relative w-full px-4 sm:px-8 lg:px-12 text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-8">
                        Our Design-Build Approach
                    </h2>

                    <p className="font-body text-charcoal/60 leading-relaxed">
                        By uniting architecture, interior design, and construction under one roof,
                        we deliver projects with unparalleled cohesion, efficiency, and attention to detail.
                        From your first consultation to your final walkthrough, one dedicated team
                        guides your vision to reality.
                    </p>

                    <div className="mt-10 md:mt-16 grid grid-cols-3 gap-4 md:gap-8">
                        {['Design', 'Develop', 'Deliver'].map((phase, index) => (
                            <div key={phase} className="flex flex-col items-center">
                                <span className="font-display text-3xl md:text-5xl text-charcoal/10">{index + 1}</span>
                                <span className="font-display text-base md:text-xl text-charcoal -mt-2 md:-mt-3">{phase}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
