import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presentations | Aquamarine Green",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    notranslate: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
    },
  },
  referrer: "no-referrer",
};

export default function SlidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="slides-layout">
      <style>{`
        body:has(.slides-layout) nav,
        body:has(.slides-layout) footer {
          display: none !important;
        }
        body:has(.slides-layout) main {
          padding-top: 0 !important;
          min-height: 0 !important;
        }
      `}</style>
      {children}
    </div>
  );
}
