import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Aqua Marine Green Archive | LBI Construction",
    description: "Archived content from Aqua Marine Green, LBI Construction, Long Beach Island, New Jersey Shore",
    robots: {
        index: false,
        follow: false,
        noarchive: true,
        nosnippet: true,
        noimageindex: true,
    },
};

const navLinks = [
    { href: "/secrets", label: "Home" },
    { href: "/secrets/background", label: "Background" },
    { href: "/secrets/green-aspects", label: "Green Aspects" },
    { href: "/secrets/services", label: "Services" },
    { href: "/secrets/projects", label: "Projects" },
    { href: "/secrets/modular-homes", label: "Modular Homes" },
    { href: "/secrets/customer-appreciation", label: "Customer Appreciation" },
    { href: "/secrets/in-the-news", label: "In The News" },
    { href: "/secrets/contact-us", label: "Contact Us" },
];

export default function SecretsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#e8ebe4]">
            {/* Header */}
            <header className="bg-gradient-to-b from-[#3a7ca5] to-[#2d6a8a] shadow-lg">
                <div className="max-w-[960px] mx-auto px-4 py-5">
                    <div className="flex items-center justify-between">
                        <Link href="/secrets">
                            <Image
                                src="/secrets-images/aqua-logo.png"
                                alt="Aqua Marine Green"
                                width={200}
                                height={60}
                                className="h-auto"
                            />
                        </Link>
                        <div className="text-white text-right text-sm hidden md:block">
                            <p className="font-semibold">LBI Construction</p>
                            <p>Long Beach Island, NJ</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="mt-4 bg-[#2a5d7a] rounded-md overflow-hidden">
                        <ul className="flex flex-wrap justify-center">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="block px-3 py-2 text-white text-sm hover:bg-[#1e4a63] transition-colors border-r border-[#3a7ca5] last:border-r-0"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-[960px] mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#2d4a5e] text-white py-6">
                <div className="max-w-[960px] mx-auto px-4">
                    <nav className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
                        {navLinks.slice(1).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="hover:text-[#7bb8d8] transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <p className="text-center text-xs text-gray-300">
                        All Rights Reserved © <strong>AQUA MARINE GREEN</strong> © 2013
                    </p>
                    <p className="text-center text-xs text-gray-400 mt-2">
                        This is an archived version of aquamarinegreen.net
                    </p>
                </div>
            </footer>
        </div>
    );
}

