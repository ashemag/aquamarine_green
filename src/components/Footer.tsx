import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white relative">
            {/* Top line */}
            <div className="h-px bg-white/10" />

            <div className="w-full px-4 sm:px-8 lg:px-12 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="relative w-8 h-8">
                                <div className="absolute inset-0 border border-seafoam rotate-45" />
                                <div className="absolute inset-1.5 bg-seafoam rotate-45" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display text-lg font-medium text-white tracking-wider">
                                    AQUAMARINE
                                </span>
                                <span className="text-[9px] tracking-[0.25em] text-seafoam font-body uppercase -mt-0.5">
                                    Green
                                </span>
                            </div>
                        </div>
                        <p className="text-white/40 font-body leading-relaxed max-w-sm text-sm">
                            Blending modern elegance with sustainable design to create
                            extraordinary spaces that stand the test of time.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white/30 mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {['Projects', 'About', 'News', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="font-body text-sm text-white/50 hover:text-white transition-colors duration-300"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white/30 mb-6">Contact</h4>
                        <address className="not-italic space-y-4 text-white/50 font-body text-sm">
                            <p>1200 Ocean Drive</p>
                            <p>Miami Beach, FL 33139</p>
                            <p className="pt-2">
                                <a href="tel:+13055551234" className="hover:text-white transition-colors">
                                    (305) 555-1234
                                </a>
                            </p>
                            <p>
                                <a href="mailto:hello@aquamarinegreen.com" className="hover:text-white transition-colors">
                                    hello@aquamarinegreen.com
                                </a>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/30 text-xs font-body">
                            © {new Date().getFullYear()} Aquamarine Green
                        </p>
                        <div className="flex items-center gap-8">
                            {['Instagram', 'Pinterest', 'LinkedIn'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="text-white/30 hover:text-white text-xs font-body tracking-wide transition-colors duration-300"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
