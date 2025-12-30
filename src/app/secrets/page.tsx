import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aqua Marine Green Archive",
    robots: {
        index: false,
        follow: false,
    },
};

export default function SecretsHomePage() {
    const options = [
        {
            title: "Legacy Website",
            subtitle: "aquamarine-green.net",
            image: "/secrets-images/aqua-logo.png",
            href: "/secrets/background",
            isLogo: true,
            description: "Browse the archived Aqua Marine Green website",
        },
        {
            title: "Beach Haven West",
            subtitle: "Photo Gallery",
            image: "/secrets-images/Aqua_Gallery_Pics_1.jpg",
            href: "/secrets/beach-haven-west",
            isLogo: false,
            description: "View the Beach Haven West project gallery",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
            <div className="text-center max-w-3xl">
                <h1 className="text-4xl font-light text-slate-700 mb-2 tracking-tight">
                    Aqua Marine Green
                </h1>
                <p className="text-slate-400 mb-12 text-sm uppercase tracking-widest">
                    Archive
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {options.map((option, index) => (
                        <Link
                            key={index}
                            href={option.href}
                            className="group block"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                                <div className="aspect-[4/3] relative bg-gradient-to-br from-[#3a7ca5] to-[#2d6a8a] flex items-center justify-center">
                                    <Image
                                        src={option.image}
                                        alt={option.title}
                                        width={300}
                                        height={225}
                                        className={`object-cover group-hover:scale-105 transition-transform duration-500 ${option.isLogo ? "w-2/3 h-auto drop-shadow-lg" : "w-full h-full absolute inset-0"
                                            }`}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-semibold text-lg text-slate-800 group-hover:text-[#2d6a8a] transition-colors">
                                        {option.title}
                                    </h3>
                                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mt-1">
                                        {option.subtitle}
                                    </p>
                                    <p className="text-sm text-slate-500 mt-3">
                                        {option.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

