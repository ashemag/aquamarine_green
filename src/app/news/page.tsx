const newsArticles = [
    {
        id: 1,
        title: 'Deco Build Co Wins AIA Miami Design Excellence Award',
        excerpt: 'Our Azure Tower project has been recognized for its innovative approach to sustainable commercial architecture in the heart of Brickell.',
        date: 'December 15, 2024',
        category: 'Awards',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        featured: true,
    },
    {
        id: 2,
        title: 'The Future of Art Deco: A Conversation with Elena Vasquez',
        excerpt: 'Our Principal Architect discusses how Miami\'s iconic architectural style continues to influence contemporary design.',
        date: 'November 28, 2024',
        category: 'Interview',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        featured: false,
    },
    {
        id: 3,
        title: 'Sustainable Luxury: Our Approach to Eco-Conscious Design',
        excerpt: 'Learn how we\'re integrating cutting-edge sustainability practices into our luxury residential and commercial projects.',
        date: 'November 10, 2024',
        category: 'Insights',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
        featured: false,
    },
    {
        id: 4,
        title: 'The Meridian: A Behind-the-Scenes Look',
        excerpt: 'Take an exclusive tour of our latest completed residential project, a stunning oceanfront home in South Beach.',
        date: 'October 22, 2024',
        category: 'Projects',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        featured: false,
    },
    {
        id: 5,
        title: 'Miami Design Week 2024: Our Highlights',
        excerpt: 'A recap of the most inspiring moments from this year\'s Design Miami and Art Basel exhibitions.',
        date: 'October 5, 2024',
        category: 'Events',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        featured: false,
    },
    {
        id: 6,
        title: 'Historic Preservation in Modern Miami',
        excerpt: 'How we balance authentic restoration with contemporary functionality in our heritage renovation projects.',
        date: 'September 18, 2024',
        category: 'Insights',
        image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
        featured: false,
    },
];

export default function NewsPage() {
    const featuredArticle = newsArticles.find(article => article.featured);
    const regularArticles = newsArticles.filter(article => !article.featured);

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-16 md:py-32 bg-charcoal overflow-hidden">
                <div className="absolute inset-0 art-deco-pattern opacity-50" />

                <div className="relative w-full px-4 sm:px-8 lg:px-12">
                    <span className="text-white/30 font-body text-xs tracking-[0.2em] uppercase">Latest Updates</span>

                    <h1 className="font-display text-4xl md:text-6xl text-white mt-4 mb-6">
                        News
                    </h1>

                    <p className="font-body text-white/50 text-base max-w-xl">
                        Stay informed about our latest projects, industry insights, awards,
                        and the stories behind Miami&apos;s most distinctive spaces.
                    </p>
                </div>
            </section>

            {/* Featured Article */}
            {featuredArticle && (
                <section className="py-12 md:py-20 bg-white">
                    <div className="w-full px-4 sm:px-8 lg:px-12">
                        <div className="flex items-center gap-4 mb-12">
                            <span className="text-charcoal/30 font-body text-xs tracking-[0.2em] uppercase">Featured</span>
                            <div className="flex-1 h-px bg-charcoal/10" />
                        </div>

                        <article className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                            <div className="relative overflow-hidden">
                                <img
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Minimal frame */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-charcoal/20" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-charcoal/20" />
                            </div>

                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="px-3 py-1 bg-charcoal text-white font-body text-[10px] tracking-[0.15em] uppercase">
                                        {featuredArticle.category}
                                    </span>
                                    <span className="text-charcoal/40 font-body text-sm">
                                        {featuredArticle.date}
                                    </span>
                                </div>

                                <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-6 group-hover:text-charcoal/70 transition-colors cursor-pointer">
                                    {featuredArticle.title}
                                </h2>

                                <p className="font-body text-charcoal/60 leading-relaxed mb-8">
                                    {featuredArticle.excerpt}
                                </p>

                                <button className="flex items-center gap-3 text-charcoal font-body text-xs tracking-[0.15em] uppercase hover:text-charcoal/60 transition-colors group/btn">
                                    Read Full Article
                                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                                </button>
                            </div>
                        </article>
                    </div>
                </section>
            )}

            {/* Articles Grid */}
            <section className="py-12 md:py-20 bg-off-white">
                <div className="w-full px-4 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularArticles.map((article) => (
                            <article
                                key={article.id}
                                className="group bg-white overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500" />

                                    <span className="absolute top-4 left-4 px-3 py-1 bg-white text-charcoal font-body text-[10px] tracking-[0.15em] uppercase">
                                        {article.category}
                                    </span>
                                </div>

                                <div className="p-6">
                                    <span className="text-charcoal/40 font-body text-xs">
                                        {article.date}
                                    </span>

                                    <h3 className="font-display text-lg text-charcoal mt-2 mb-3 group-hover:text-charcoal/70 transition-colors cursor-pointer line-clamp-2">
                                        {article.title}
                                    </h3>

                                    <p className="font-body text-charcoal/50 text-sm leading-relaxed line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-16">
                        <button className="px-8 py-4 border border-charcoal/20 text-charcoal font-body tracking-[0.15em] uppercase text-xs hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 md:py-32 bg-charcoal relative overflow-hidden">
                <div className="absolute inset-0 chevron-pattern opacity-50" />

                <div className="relative max-w-xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
                    <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
                        Stay Inspired
                    </h2>

                    <p className="font-body text-white/50 mb-10 text-sm">
                        Subscribe to receive our latest news, design insights, and project announcements.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-5 py-4 bg-white/5 border border-white/10 text-white placeholder:text-white/30 font-body text-sm focus:outline-none focus:border-white/30 transition-colors"
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-white text-charcoal font-body tracking-[0.15em] uppercase text-xs hover:bg-white/90 transition-colors duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
