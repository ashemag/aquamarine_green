import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presentations | Aquamarine Green",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SlidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="slides-layout -mt-20">
      <style>{`
        .slides-layout ~ footer,
        body:has(.slides-layout) nav {
          display: none !important;
        }
        body:has(.slides-layout) main {
          padding-top: 0 !important;
        }
      `}</style>
      {children}
    </div>
  );
}
