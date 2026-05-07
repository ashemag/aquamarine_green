import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white relative">
            {/* Top line */}
            <div className="h-px bg-white/10" />

            <div className="w-full px-4 sm:px-8 lg:px-12 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
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
                            Blending modern elegance with intelligent design to create
                            extraordinary spaces in Miami, Bal Harbour, and the Palm Beach Areas.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white/30 mb-4">Explore</h4>
                        <ul className="space-y-3">
                            {['Projects', 'About', 'Contact'].map((item) => (
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
                        <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white/30 mb-4">Contact</h4>
                        <address className="not-italic space-y-3 text-white/50 font-body text-sm">
                            <p>
                                <a href="tel:+13058493639" className="hover:text-white transition-colors">
                                    (305) 849-3639
                                </a>
                            </p>
                            <p>
                                <a href="mailto:lily@aquamarinegreen.com" className="hover:text-white transition-colors">
                                    lily@aquamarinegreen.com
                                </a>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-white/10">
                    <p className="text-white/30 text-xs font-body text-center">
                        © {new Date().getFullYear()} Aquamarine Green
                    </p>
                </div>
            </div>
        </footer>
    );
}
