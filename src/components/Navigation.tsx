'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md">
            {/* Subtle accent line at top */}
            <div className="h-px bg-gradient-to-r from-transparent via-seafoam/50 to-transparent" />

            <div className="w-full px-4 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="group flex items-center gap-3"
                    >
                        {/* Minimal geometric logo mark */}
                        <div className="relative w-8 h-8">
                            <div className="absolute inset-0 border border-seafoam rotate-45" />
                            <div className="absolute inset-1.5 bg-seafoam rotate-45" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display text-lg font-medium text-charcoal tracking-wider transition-colors duration-500 group-hover:text-seafoam">
                                AQUAMARINE
                            </span>
                            <span className="text-[9px] tracking-[0.25em] text-seafoam font-body uppercase -mt-0.5">
                                Green
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative py-2 font-body text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${pathname === item.href
                                    ? 'text-charcoal'
                                    : 'text-charcoal/50 hover:text-seafoam'
                                    }`}
                            >
                                {item.name}
                                {/* Minimal active indicator */}
                                <span className={`absolute -bottom-1 left-0 h-px bg-charcoal transition-all duration-300 ${pathname === item.href ? 'w-full' : 'w-0'
                                    }`} />
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-5 h-px bg-charcoal transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                                }`}
                        />
                        <span
                            className={`w-5 h-px bg-charcoal transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`w-5 h-px bg-charcoal transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-charcoal/10 overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-8 py-8 space-y-1">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block py-3 font-body text-sm tracking-[0.15em] uppercase transition-all duration-300 ${pathname === item.href
                                ? 'text-charcoal'
                                : 'text-charcoal/40 hover:text-seafoam'
                                }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
