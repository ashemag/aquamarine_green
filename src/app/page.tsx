import Link from 'next/link';
import Image from 'next/image';
import HeroVideo from '@/components/HeroVideo';
import NewsletterSignup from '@/components/NewsletterSignup';

const featuredProjects = [
  {
    id: 'kenilworth-1',
    title: 'Kenilworth-1',
    category: 'Design Build',
    image: '/projects/kenilworth-1/cover.jpg',
    year: '2024',
    href: '/projects/kenilworth-1',
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featuredProjects.map((project, index) => (
              <Link
                href={project.href}
                key={project.id}
                className="group relative bg-light-gray overflow-hidden block"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500" />
                  <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-charcoal/40 text-[10px] tracking-[0.2em] uppercase font-body">
                    {project.category} · {project.year}
                  </span>
                  <h3 className="font-display text-xl text-charcoal mt-2 group-hover:text-charcoal/70 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}

            {/* More Coming Soon */}
            <div className="relative bg-light-gray overflow-hidden flex items-center justify-center aspect-[4/3] sm:aspect-[4/5]">
              <div className="text-center p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 border border-charcoal/10 flex items-center justify-center">
                  <span className="text-charcoal/20 text-xl md:text-2xl">+</span>
                </div>
                <p className="font-body text-charcoal/30 text-[10px] md:text-xs tracking-[0.15em] uppercase">
                  More Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-32 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern opacity-50" />

        <div className="relative w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
            {/* Image Side */}
            <div className="relative">
              <Image
                src="/projects/kenilworth-1/image-12.jpg"
                alt="Art gallery hallway in Kenilworth-1 project"
                width={800}
                height={600}
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Minimal frame - hidden on mobile */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/10 -z-10 hidden md:block" />
            </div>

            {/* Content Side */}
            <div>
              <span className="text-white/30 font-body text-xs tracking-[0.2em] uppercase">About Us</span>

              <h2 className="font-display text-3xl md:text-4xl mt-4 mb-8">
                Where Elegance Meets
                <span className="text-seafoam"> Sustainability</span>
              </h2>

              <p className="font-body text-white/60 leading-relaxed mb-6">
                For over two decades, Aquamarine Green has been a leading design-build
                firm across the Miami and Tri-State Areas, crafting individualized spaces that honor both the client's vision and the environment.
              </p>

              <p className="font-body text-white/60 leading-relaxed mb-10">
                We seamlessly blend modern elegance with eco-conscious innovation—proving that
                sustainable design never compromises on style.
              </p>

              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10 py-8 border-y border-white/10">
                {[
                  { number: '150+', label: 'Projects' },
                  { number: '23', label: 'Years' },
                  // { number: '40+', label: 'Awards' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="font-display text-2xl text-white">{stat.number}</span>
                    <p className="text-white/30 text-xs tracking-[0.15em] uppercase mt-1 font-body">{stat.label}</p>
                  </div>
                ))}
              </div> */}

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal/10">
            {[
              {
                title: 'Build Design',
                description: 'From concept to completion, we design and construct visionary spaces that blend architectural excellence with sustainable innovation.',
                number: '01',
              },
              {
                title: 'Interior Design',
                description: 'Curated interiors that reflect your unique style and elevate everyday living through thoughtful material selection and spatial harmony.',
                number: '02',
              },
              {
                title: 'Renovation',
                description: 'Thoughtful transformation of existing spaces—breathing new life into homes and commercial properties while preserving their character.',
                number: '03',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group bg-white p-6 md:p-10 transition-all duration-500 hover:bg-charcoal"
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

      {/* Newsletter CTA Section */}
      <section className="py-20 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern opacity-30" />
        
        <div className="relative w-full px-4 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-seafoam font-body text-xs tracking-[0.2em] uppercase">Stay Connected</span>
            <h2 className="font-display text-3xl md:text-5xl text-white mt-4 mb-6">
              Design Insights &<br />
              <span className="text-white/60">New Projects</span>
            </h2>
            <p className="font-body text-white/50 mb-10 leading-relaxed max-w-lg mx-auto">
              Join our newsletter for exclusive looks at new projects, design inspiration, 
              and insights into modern sustainable living.
            </p>
            
            <div className="max-w-md mx-auto">
              <NewsletterSignup theme="dark" tags={["website", "home-cta"]} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-charcoal/5" />

        <div className="relative w-full px-4 sm:px-8 lg:px-12 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
            Ready to Build Your Vision?
          </h2>
          <p className="font-body text-charcoal/50 mb-8 leading-relaxed text-sm">
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
