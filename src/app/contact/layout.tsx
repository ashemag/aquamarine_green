import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | Aquamarine Green',
    description: 'Start your project with Aquamarine Green. Contact us for design-build, interior design, and renovation services in Miami, Bal Harbour, and the Palm Beach Areas.',
    openGraph: {
        title: 'Contact | Aquamarine Green',
        description: 'Start your project with Aquamarine Green. Design-build, interior design, and renovation in Miami.',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

