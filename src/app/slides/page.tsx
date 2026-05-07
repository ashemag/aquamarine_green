import Link from "next/link";

const presentations = [
  {
    title: "Kenilworth Social Club",
    subtitle: "Bal Harbour, FL",
    href: "/slides/kenilworth-social-club",
    date: "2026",
  },
];

export default function SlidesIndexPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        <div className="flex justify-center mb-6">
          <div className="w-3 h-3 bg-seafoam rotate-45" />
        </div>

        <h1 className="font-display text-3xl md:text-4xl text-charcoal mb-2">
          Presentations
        </h1>
        <p className="font-body text-charcoal/40 text-xs tracking-[0.2em] uppercase mb-12">
          Private Access
        </p>

        <div className="space-y-3">
          {presentations.map((pres) => (
            <Link
              key={pres.href}
              href={pres.href}
              className="group block border border-charcoal/10 hover:border-charcoal/20 transition-colors"
            >
              <div className="flex items-center justify-between px-6 py-5">
                <div className="text-left">
                  <h2 className="font-display text-lg text-charcoal group-hover:text-seafoam transition-colors">
                    {pres.title}
                  </h2>
                  <p className="font-body text-charcoal/40 text-xs tracking-wide mt-1">
                    {pres.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-body text-charcoal/20 text-xs">
                    {pres.date}
                  </span>
                  <svg
                    className="w-4 h-4 text-charcoal/20 group-hover:text-seafoam transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 h-px bg-charcoal/5" />
        <p className="mt-4 font-body text-charcoal/20 text-[10px] tracking-[0.15em] uppercase">
          Aquamarine Green
        </p>
      </div>
    </div>
  );
}
