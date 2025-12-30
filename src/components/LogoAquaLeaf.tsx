// Alternative AQUA leaf logo - can be used instead of the geometric diamond logo
// To use: import LogoAquaLeaf from '@/components/LogoAquaLeaf' and replace the logo section

export default function LogoAquaLeaf({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
    const textColor = variant === 'light' ? 'text-white' : 'text-seafoam';

    return (
        <div className="flex flex-col">
            {/* AQUA with leaf in Q */}
            <div className="flex items-center">
                <span className={`font-display text-2xl md:text-3xl font-bold ${textColor} tracking-tight`}>
                    AQ
                </span>
                {/* Q with leaf */}
                <span className={`relative font-display text-2xl md:text-3xl font-bold ${textColor} tracking-tight -ml-[2px]`}>
                    <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 md:w-5 md:h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[1px]"
                        fill="none"
                    >
                        {/* Leaf shape */}
                        <path
                            d="M12 4C8 4 5 8 5 12C5 14 6 16 8 17C10 15 12 12 12 8C12 12 14 15 16 17C18 16 19 14 19 12C19 8 16 4 12 4Z"
                            fill="#4CAF50"
                        />
                        {/* Leaf stem */}
                        <path
                            d="M12 8V18"
                            stroke="#4CAF50"
                            strokeWidth="1.5"
                        />
                    </svg>
                </span>
                <span className={`font-display text-2xl md:text-3xl font-bold ${textColor} tracking-tight -ml-[2px]`}>
                    UA
                </span>
            </div>
            {/* MARINE GREEN */}
            <span className={`text-[8px] md:text-[10px] tracking-[0.3em] ${textColor} font-body uppercase -mt-1 ml-[1px]`}>
                MARINE GREEN
            </span>
        </div>
    );
}

