import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects | Aquamarine Green',
    description: 'Explore our portfolio of design-build, interior design, and renovation projects across Miami, Bal Harbour, and the Palm Beach Areas. Soho elegance meets South Beach style.',
    openGraph: {
        title: 'Projects | Aquamarine Green',
        description: 'Explore our portfolio of design-build, interior design, and renovation projects in Miami.',
        images: ['/projects/kenilworth-1/cover.jpg'],
    },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

