import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kenilworth-1 | Bal Harbour Design-Build | Aquamarine Green',
    description: 'A complete transformation combining two apartments into one expansive oceanfront residence in the prestigious Kenilworth building, Bal Harbour. Gallery-quality finishes and curated art displays.',
    openGraph: {
        title: 'Kenilworth-1 | Bal Harbour Design-Build | Aquamarine Green',
        description: 'Luxury apartment combination in The Kenilworth, Bal Harbour. Complete gut renovation with gallery-quality finishes.',
        images: ['/projects/kenilworth-1/cover.jpg'],
    },
    keywords: ['Kenilworth Bal Harbour', 'luxury renovation Miami', 'apartment combination', 'design-build Bal Harbour', 'oceanfront residence', 'Collins Avenue'],
};

export default function KenilworthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

