import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';

const featuredProjects = [
  {
    id: 1,
    title: 'The Meridian',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    year: '2024',
  },
  {
    id: 2,
    title: 'Azure Tower',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    year: '2024',
  },
  {
    id: 3,
    title: 'Palm Court Estate',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    year: '2023',
  },
];

export default function Home() {
  return (
    <>
      <HeroVideo />

      {/* Featured Projects Section */}
      <section className="py-16 md:py-32 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-charcoal/5" />

        <div className="w-full px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div>
              <span className="text-charcoal/30 font-body text-xs tracking-[0.2em] uppercase">Portfolio</span>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal mt-3">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="mt-6 md:mt-0 group flex items-center gap-3 text-charcoal/50 font-body text-xs tracking-[0.15em] uppercase hover:text-charcoal transition-colors"
            >
              View All
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <article
                key={project.id}
                className="group relative bg-light-gray overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500" />

                  {/* Minimal corner accents on hover */}
                  <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-charcoal/40 text-[10px] tracking-[0.2em] uppercase font-body">
                    {project.category} · {project.year}
                  </span>
                  <h3 className="font-display text-xl text-charcoal mt-2 group-hover:text-charcoal/70 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-32 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern opacity-50" />

        <div className="relative w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image Side */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Luxury Miami home"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Minimal frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/10 -z-10" />
            </div>

            {/* Content Side */}
            <div>
              <span className="text-white/30 font-body text-xs tracking-[0.2em] uppercase">About Us</span>

              <h2 className="font-display text-3xl md:text-4xl mt-4 mb-8">
                Where Elegance Meets
                <span className="text-seafoam"> Sustainability</span>
              </h2>

              <p className="font-body text-white/60 leading-relaxed mb-6">
                For over two decades, Aquamarine Green has been the premier design-build
                firm in Miami, creating spaces that are as kind to the planet as they are beautiful.
              </p>

              <p className="font-body text-white/60 leading-relaxed mb-10">
                We seamlessly blend modern elegance with eco-conscious innovation—proving that
                sustainable design never compromises on style.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10 py-8 border-y border-white/10">
                {[
                  { number: '150+', label: 'Projects' },
                  { number: '23', label: 'Years' },
                  { number: '40+', label: 'Awards' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="font-display text-2xl text-white">{stat.number}</span>
                    <p className="text-white/30 text-xs tracking-[0.15em] uppercase mt-1 font-body">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-white/50 font-body text-xs tracking-[0.15em] uppercase hover:text-white transition-colors group"
              >
                Learn Our Story
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-32 bg-off-white relative">
        <div className="absolute inset-0 chevron-pattern" />

        <div className="relative w-full px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-charcoal/30 font-body text-xs tracking-[0.2em] uppercase">What We Do</span>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mt-3">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10">
            {[
              {
                title: 'Architecture',
                description: 'Visionary designs that honor tradition while embracing modernity.',
                number: '01',
              },
              {
                title: 'Interior Design',
                description: 'Curated spaces that reflect your unique style and lifestyle.',
                number: '02',
              },
              {
                title: 'Construction',
                description: 'Meticulous craftsmanship with the finest materials.',
                number: '03',
              },
              {
                title: 'Renovation',
                description: 'Thoughtful restoration of historic and contemporary properties.',
                number: '04',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group bg-white p-10 transition-all duration-500 hover:bg-charcoal"
              >
                <span className="text-charcoal/10 font-display text-5xl group-hover:text-white/10 transition-colors">
                  {service.number}
                </span>
                <h3 className="font-display text-xl text-charcoal mt-4 mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-charcoal/50 text-sm leading-relaxed group-hover:text-white/50 transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-charcoal/5" />

        <div className="relative w-full px-4 sm:px-8 lg:px-12 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-6">
            Ready to Build Your Vision?
          </h2>
          <p className="font-body text-charcoal/50 mb-12 leading-relaxed">
            Let&apos;s create spaces that blend modern elegance with sustainable innovation.
            From concept to completion, we bring your vision to life—beautifully and responsibly.
          </p>
          <Link
            href="/contact"
            scroll={false}
            className="inline-block px-10 py-4 bg-charcoal text-white font-body tracking-[0.15em] uppercase text-xs hover:bg-seafoam hover:text-charcoal transition-colors duration-300"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
