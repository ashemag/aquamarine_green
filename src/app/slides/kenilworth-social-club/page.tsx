'use client';

import PasswordGate from '@/components/PasswordGate';
import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';

const IMG_BASE = '/slides/kenilworth-social-club';

type Slide =
  | {
      type: 'cover';
      eyebrow: string;
      title: string;
      subtitle?: string;
    }
  | {
      type: 'quote';
      eyebrow: string;
      body: string;
      attribution: React.ReactNode;
    }
  | {
      type: 'intro';
      eyebrow: string;
      title: string;
      body: React.ReactNode;
    }
  | {
      type: 'split';
      eyebrow: string;
      title: string;
      subtitle?: string;
      body: React.ReactNode;
      image: string;
      imageAlt: string;
      imagePosition?: 'left' | 'right';
    }
  | {
      type: 'before';
      eyebrow: string;
      title: string;
      subtitle: string;
      body: React.ReactNode;
      images: { src: string; alt: string }[];
    }
  | {
      type: 'image-feature';
      eyebrow: string;
      title?: string;
      caption: string;
      captionSubtitle?: string;
      image: string;
      imageAlt: string;
    }
  | {
      type: 'comparison';
      eyebrow: string;
      title?: string;
      caption?: string;
      images: { src: string; alt: string; label?: string }[];
    }
  | {
      type: 'scope-list';
      eyebrow: string;
      title: string;
      sectionLabel?: string;
      sections: { heading: string; items: string[] }[];
      image?: string;
      imageAlt?: string;
      note?: string;
    }
  | {
      type: 'timeline';
      eyebrow: string;
      title: string;
      milestones: { date: string; year: string; label: string }[];
    }
  | {
      type: 'contract';
      eyebrow: string;
      title: string;
      sectionHeading: string;
      rows: { label: string; description?: string; amount: string }[];
      footnote?: React.ReactNode;
      image?: string;
      imageAlt?: string;
    }
  | {
      type: 'total';
      eyebrow: string;
      title: string;
      amount: string;
      note?: string;
      image: string;
      imageAlt: string;
    }
  | {
      type: 'closing';
      eyebrow: string;
      title: string;
      subtitle: string;
      body: React.ReactNode;
      image: string;
      imageAlt: string;
    };

const slides: Slide[] = [
  {
    type: 'cover',
    eyebrow: 'Aquamarine Green',
    title: 'Kenilworth Social Club Renovation',
    subtitle: 'A vision for community, craft, and elegance',
  },
  {
    type: 'quote',
    eyebrow: 'A Moveable Feast',
    body: '“If you are lucky enough to have lived in The Kenilworth as a young man, then wherever you go for the rest of your life, it stays with you, for The Kenilworth is a moveable feast.”',
    attribution: (
      <>
        — A loose adaptation of <em>A Moveable Feast</em>
        <br />
        by Ernest Hemingway
      </>
    ),
  },
  {
    type: 'before',
    eyebrow: 'Before',
    title: 'Current Social Room',
    subtitle: 'Discover the state of the Kenilworth Social Room today',
    body: (
      <>
        The current condition of the Kenilworth Social Room and Bar lacks the{' '}
        <span className="text-charcoal">vibrancy and functionality</span> needed
        for a modern social space, limiting its potential for community
        engagement.
      </>
    ),
    images: [
      {
        src: `${IMG_BASE}/8de1f413-71b9-4a33-adeb-082bc6ec356b.png`,
        alt: 'Existing social room with wicker chairs and chandelier',
      },
      {
        src: `${IMG_BASE}/51dce614-8c3f-44f3-a84d-ac3a188cd436.png`,
        alt: 'Existing bar and lounge area',
      },
    ],
  },
  {
    type: 'intro',
    eyebrow: 'Vision Renderings',
    title: 'Vision Renderings',
    body: (
      <>
        These renderings showcase an{' '}
        <span className="text-charcoal">immersive audiovisual setup</span>, a
        redesigned bar, an updated kitchen, and a multifunctional ballroom — all
        crafted to elevate The Kenilworth&apos;s experience to new heights.
      </>
    ),
  },
  {
    type: 'split',
    eyebrow: '01 — Goals',
    title: 'Social Room Goals',
    subtitle: 'Creating a Versatile Space for Community and Elegance',
    body: (
      <>
        The Kenilworth&apos;s social room will be a{' '}
        <span className="text-charcoal">multi-functional space</span>, perfect
        for hosting everything from casual gatherings to formal events. Equipped
        with <span className="text-charcoal">state-of-the-art technology</span>,
        an updated kitchen, and a welcoming bar atmosphere — this elegant design
        captures the essence of luxury while fostering a strong sense of
        community among residents.
      </>
    ),
    image: `${IMG_BASE}/562bd604-873f-4bd1-85b6-55fc3ab270ba.png`,
    imageAlt:
      'Social room rendering with floor-to-ceiling city skyline projections',
  },
  {
    type: 'image-feature',
    eyebrow: '02 — Transforming Experiences',
    title: 'Transforming Experiences',
    caption: 'Beach',
    captionSubtitle: 'Relaxing atmosphere for daytime gatherings and events',
    image: `${IMG_BASE}/9d52157c-cb77-4fcf-bad4-daa5e926f8dd.png`,
    imageAlt: 'Ballroom with floor-to-ceiling beach projection',
  },
  {
    type: 'image-feature',
    eyebrow: '03 — Versatile Uses',
    caption: 'Versatile Uses',
    captionSubtitle:
      'From beachside lounge to board meeting — one room, infinite atmospheres',
    image: `${IMG_BASE}/a168178f-fe5f-4b76-b153-d0f547ea5047.png`,
    imageAlt:
      'Versatile room layout with beach projections and Kenilworth COA budget presentation screen',
  },
  {
    type: 'comparison',
    eyebrow: '04 — City Skyline',
    caption: 'Skyline at Dusk — warm amber and cool indigo lighting moods',
    images: [
      {
        src: `${IMG_BASE}/df3e4d3e-0ebc-40e7-a6ce-76761ef23d4f.png`,
        alt: 'Skyline projections in warm and cool color temperatures',
        label: 'Day & Night',
      },
    ],
  },
  {
    type: 'image-feature',
    eyebrow: '05 — Sunset & Tropics',
    caption: 'Sunset & Tropical Nights',
    captionSubtitle:
      'Coastal warmth in the evening, abstract art for elevated moods',
    image: `${IMG_BASE}/e63c676f-2c56-4aff-a716-725a59e3e5f9.png`,
    imageAlt:
      'Sunset beach and abstract art projections paired with palm tree silhouettes',
  },
  {
    type: 'image-feature',
    eyebrow: '06 — Concert Energy',
    caption: 'Concert & Live Event Mode',
    captionSubtitle:
      'Transform the room into a private concert hall on demand',
    image: `${IMG_BASE}/0b484353-4695-4f52-a339-87dc3fa01c30.png`,
    imageAlt: 'Concert crowd scene projected on social room walls',
  },
  {
    type: 'image-feature',
    eyebrow: '07 — Gallery Mode',
    caption: 'Abstract Gallery',
    captionSubtitle:
      'Curated artwork installations for refined evenings and openings',
    image: `${IMG_BASE}/6f68f075-1bae-46fc-810f-767533d6020d.png`,
    imageAlt: 'Abstract art murals displayed across the ballroom walls',
  },
  {
    type: 'intro',
    eyebrow: 'Interlude',
    title: 'A Canvas for Every Occasion',
    body: (
      <>
        One room.{' '}
        <span className="text-charcoal">A thousand moods.</span> The Kenilworth
        social club is built to flex with every gathering, from quiet morning
        coffees to lively black-tie evenings.
      </>
    ),
  },
  {
    type: 'image-feature',
    eyebrow: '08 — The Empty Stage',
    caption: 'The Empty Stage',
    captionSubtitle:
      'Warm golden columns and recessed lighting set the foundation',
    image: `${IMG_BASE}/437e99de-cea4-4281-becb-9b71e2bcd1f5.png`,
    imageAlt:
      'Empty ballroom rendering with golden columns and recessed cove lighting',
  },
  {
    type: 'image-feature',
    eyebrow: '09 — The Bar — Day',
    caption: 'The Bar — Daytime',
    captionSubtitle:
      'Light, airy, and inviting — pendant lights, palms, and quartz countertops',
    image: `${IMG_BASE}/6d46aa95-1643-45af-85bb-9d208b11ed3e.png`,
    imageAlt:
      'Daytime view of the new bar with golden stools, palms, and pendant lighting',
  },
  {
    type: 'image-feature',
    eyebrow: '10 — The Bar — Night',
    caption: 'The Bar — Evening',
    captionSubtitle:
      'Warm under-bar glow, intimate seating, and sculptural focal points',
    image: `${IMG_BASE}/0462e5f2-640b-4e41-9653-1ab283cba586.png`,
    imageAlt: 'Evening view of the new bar in warm, intimate lighting',
  },
  {
    type: 'split',
    eyebrow: '11 — Collaboration',
    title: 'ADU Contractors',
    subtitle: 'Collaboration with a trusted South Florida partner',
    body: (
      <>
        Aquamarine Green is proud to announce its collaboration with{' '}
        <span className="text-charcoal">ADU Contractors</span>, who have been
        servicing the South Florida area for{' '}
        <span className="text-charcoal">over 15 years</span>, with additional
        presence across multiple states.
      </>
    ),
    image: `${IMG_BASE}/17e1040f-d36e-43ba-a3a6-3dda1fa37f7d.png`,
    imageAlt: 'ADU contractors reviewing blueprints on site',
  },
  {
    type: 'split',
    eyebrow: '12 — Premier Construction',
    title: 'ADU Contractors',
    subtitle: 'Over 15 Years of Premier Construction Experience in South Florida',
    body: (
      <>
        ADU Contractors has built a reputation for excellence, demonstrating{' '}
        <span className="text-charcoal">commitment to quality</span> on numerous
        notable projects. With over 15 years of experience, their portfolio
        includes the{' '}
        <span className="text-charcoal">Hilton Fort Lauderdale</span> and{' '}
        <span className="text-charcoal">Venetian Gardens Miami</span>. They
        pride themselves on delivering superior craftsmanship, ensuring client
        satisfaction, and transforming spaces into luxurious environments.
      </>
    ),
    image: `${IMG_BASE}/4625834e-a8a0-42d6-8f00-1eddb7998be2.png`,
    imageAlt: 'Premier outdoor lounge and patio area by ADU Contractors',
  },
  {
    type: 'scope-list',
    eyebrow: '13 — Scope of Project',
    title: 'Scope of Project',
    sectionLabel: 'Demolition',
    sections: [
      {
        heading: 'Demolition',
        items: [
          'Remove all carpet',
          'Remove tile floor in bar and kitchen areas',
          'Remove kitchen cabinets',
          'Remove kitchen countertop',
          'Remove ALL wallpaper in all rooms',
          'Remove the chandelier',
          'Remove existing decorative lighting',
          'Remove crown molding around the inset chandelier area',
          'Remove the mirrors on the back wall',
          'Remove existing bar countertops',
        ],
      },
    ],
    image: `${IMG_BASE}/9bf751c3-8c2b-4c71-8575-6109c2f8a14b.jpg`,
    imageAlt: 'Demolition scene with rubble and exposed framing',
  },
  {
    type: 'scope-list',
    eyebrow: '14 — Scope of Project',
    title: 'Scope of Project',
    sectionLabel: 'Rebuild',
    sections: [
      {
        heading: 'Columns',
        items: [
          'Perimeter columns',
          'No demo',
          'Refinish, repair or replace wood and trim',
          'Center columns — remove wallpaper but keep wood trim',
          'Refinish wood trim',
          'Add herringbone wood pattern to match other columns',
          'Repair drywall',
          'Paint',
        ],
      },
      {
        heading: 'Flooring',
        items: [
          'Install 48" × 48" large format tile',
          '1/16" grout lines',
          '2,200 sf',
          'Will require subfloor prep and leveling',
        ],
      },
      {
        heading: 'Walls',
        items: [
          'Drywall repair',
          'Drywall skim coat to smooth surface',
          'Paint only',
        ],
      },
      {
        heading: 'Trim',
        items: ['Install floating AV baseboards', 'Paint'],
      },
    ],
    image: `${IMG_BASE}/bdf6bec5-93dd-4230-8109-402cdeff87fd.jpg`,
    imageAlt:
      'Construction crew rebuilding interior space with brick walls and exposed ceiling',
  },
  {
    type: 'scope-list',
    eyebrow: '15 — Scope of Project',
    title: 'Scope of Project',
    sectionLabel: 'Rebuild',
    sections: [
      {
        heading: 'Ceiling',
        items: ['Repair blemishes where necessary', 'Paint'],
      },
      {
        heading: 'Bar',
        items: [
          'Bar footprint to remain',
          'Bar entry gates to remain',
          'Bar cabinetry to remain',
          'Paint bar face surface white — 20\u2032 × 4\u2032',
          'Install translucent stone (Onyx) on face of bar — 20\u2032 × 4\u2032',
          'Install color-changing lighting under bar countertop at base of Onyx',
          'Integrate bar lighting with AV / Smart lighting system',
          'Install translucent stone (Onyx) on bar countertop',
          'Bar countertop — 12\u2032 × 16 lf; raised countertop — 2\u2032 × 16 lf; waterfall Onyx right side of bar',
          'Cabinets behind bar: cabinets remain; Onyx on back bar countertop — 2\u2032 × 6 lf; 4 new pendant lights over bar',
          'Install new 16 lf buffet cabinets along back wall in bar area; 4 new pendant lights over buffet; quartz countertop',
        ],
      },
    ],
    image: `${IMG_BASE}/6d46aa95-1643-45af-85bb-9d208b11ed3e.png`,
    imageAlt: 'Bar rendering during the day',
  },
  {
    type: 'scope-list',
    eyebrow: '16 — Scope of Project',
    title: 'Scope of Project',
    sectionLabel: 'Rebuild',
    sections: [
      {
        heading: 'Kitchen',
        items: [
          'Install new ceiling — drop down or drywall — TBD by building',
          'Install new kitchen cabinets',
          '8 lf upper cabinets — Shaker White',
          '12 lf base cabinets — Shaker White',
          'Install new quartz countertop — 12 lf × 2 lf w/ 4" backsplash — 12 lf × 4" h',
          'Install new appliances',
          'SubZero Refrigerator',
          '(2) Microwave / convection / air fryer',
        ],
      },
      {
        heading: 'Paint',
        items: [
          'Walls — 1,656 sf',
          'Ceiling — 2,200 sf',
          'Trim',
          'Columns — 96 sf ea.',
          'Perimeter — (10) — 960 sf',
          'Center — (3) — 288 sf',
        ],
      },
    ],
    image: `${IMG_BASE}/0462e5f2-640b-4e41-9653-1ab283cba586.png`,
    imageAlt: 'Bar rendering at night',
    note: 'Paint colors TBD',
  },
  {
    type: 'scope-list',
    eyebrow: '17 — Scope of Project',
    title: 'Audio & Visual Lighting Integration',
    sectionLabel: 'AV Integration',
    sections: [
      {
        heading: 'System',
        items: [
          'Install fully integrated AV system',
          '6 Projectors',
          'Computer and software',
          'Matrix & controller',
          'Audio (DSP + speakers + mics + amp)',
          'Cable & mounts',
          'Tuning & commissioning',
          'Electrical and wiring support',
        ],
      },
      {
        heading: 'Lighting',
        items: [
          'Install new recessed LED flush-mount ceiling lights on dimmers',
          'Install 2 rows of integrated LED color-changing linear lights around the perimeter of the ceiling recessed tray area (chandelier area)',
          'Install floating baseboard lighting between existing columns at floor level',
          'Install accent lighting in each of the artwork display areas',
          'Create and build AV closet to accommodate the AV equipment',
        ],
      },
    ],
    image: `${IMG_BASE}/60f84d4e-ca65-44d9-ac39-a49602088cd0.png`,
    imageAlt:
      'Eiffel Tower at dusk projected across the ballroom walls',
  },
  {
    type: 'scope-list',
    eyebrow: '18 — Content Loops',
    title: 'Custom Content Loops',
    sectionLabel: 'Programming',
    sections: [
      {
        heading: 'Create & provide 3 customized content loops',
        items: [
          'Surrounding area',
          '360° ocean scene',
          'New York City nightclub',
          'Miami skyline',
          'Moon — Ocean — Bal Harbour walk',
          'Others TBD',
        ],
      },
    ],
    image: `${IMG_BASE}/60f84d4e-ca65-44d9-ac39-a49602088cd0.png`,
    imageAlt:
      'Custom Paris content loop projected across the ballroom walls',
  },
  {
    type: 'split',
    eyebrow: '19 — Decision Points',
    title: 'Decision Points',
    subtitle: 'To be addressed prior to placing material orders',
    body: (
      <>
        The following decision points will need to be addressed prior to placing
        the material orders:
        <ul className="mt-4 space-y-1.5 list-disc pl-5">
          <li>Select specific floor tile</li>
          <li>Select background finishes within the artwork displays</li>
          <li>Select baseboard style and size</li>
          <li>Paint color — center columns</li>
          <li>Bar pendant lights — selection &amp; number</li>
          <li>Buffet pendant lights — selection &amp; number</li>
          <li>Select specific quartz countertops</li>
          <li>Select specific Onyx material for bar</li>
        </ul>
      </>
    ),
    image: `${IMG_BASE}/f30fc5f3-de45-4b7b-924b-dcd4c97dfec3.png`,
    imageAlt:
      'Artwork display walls with Aquamarine Green branded panels under warm light',
  },
  {
    type: 'split',
    eyebrow: '20 — Client Approval',
    title: 'Client Approval Process',
    subtitle: 'Ensuring Transparency and Control Throughout the Renovation Journey',
    body: (
      <>
        At Aquamarine Green, we prioritize{' '}
        <span className="text-charcoal">client satisfaction</span> by ensuring
        that all change orders require your approval prior to implementation.
        This commitment emphasizes{' '}
        <span className="text-charcoal">transparency</span> in our processes. By
        maintaining clear communication and control, you can feel confident
        that your vision is respected at every step of the renovation.
      </>
    ),
    image: `${IMG_BASE}/aa97ca84-0098-458d-b6ca-a8735a2af64c.png`,
    imageAlt: 'Modern conference room with floor-to-ceiling window and greenery',
  },
  {
    type: 'timeline',
    eyebrow: '21 — Project Timeline',
    title: 'Project Timeline',
    milestones: [
      { date: 'March', year: '2026', label: 'Contract signing and kickoff' },
      { date: 'April', year: '2026', label: 'Design finalization and approvals' },
      { date: 'May', year: '2026', label: 'Construction and installation phases' },
      { date: 'September', year: '2026', label: 'Final completion' },
    ],
  },
  {
    type: 'split',
    eyebrow: '22 — Timeline Detail',
    title: 'Project Timeline',
    subtitle: 'Key milestones from design to final touches in 5 months',
    body: (
      <>
        The proposed timeline for the renovation is designed to ensure a{' '}
        <span className="text-charcoal">smooth process</span> and timely
        completion. Starting with design finalization, we will transition into
        construction and audiovisual installation, followed by finishing
        touches. Each stage involves careful planning and execution to create
        an{' '}
        <span className="text-charcoal">immersive luxury experience</span>.
      </>
    ),
    image: `${IMG_BASE}/0b5f9326-b61a-48d6-85c9-e3f4528dd785.png`,
    imageAlt:
      'Construction crew at work in a modern multi-level building site',
  },
  {
    type: 'contract',
    eyebrow: '23 — Contract Overview',
    title: 'Contract Overview',
    sectionHeading: 'ADU Remodeling — All-Inclusive Pricing',
    rows: [
      { label: 'Lump Sum Price', amount: '$645,000.00' },
      {
        label: 'Initial Deposit',
        description: 'Material Purchase & Labor Deposits',
        amount: '$322,500.00',
      },
      {
        label: 'Due Upon',
        description: 'Flooring Installation Begins',
        amount: '$125,000.00',
      },
      {
        label: 'Due Upon',
        description: 'Quartz / Onyx Installation Begins',
        amount: '$125,000.00',
      },
      {
        label: 'Due Upon Substantial Completion',
        amount: '$72,500.00',
      },
    ],
    footnote: (
      <>
        Comprehensive contract pricing ensures transparency for clients. This
        is an all-inclusive contract — unless the client delineates from the
        initial contract, all price points are included. Any changes will be
        done with a Change Order signed by the client prior to work.
      </>
    ),
    image: `${IMG_BASE}/8f631920-6d45-420f-92bd-5207b72c1968.png`,
    imageAlt: 'Modern glass-walled conference room with prepared table',
  },
  {
    type: 'contract',
    eyebrow: '24 — Contract Overview',
    title: 'Contract Overview',
    sectionHeading: 'Aquamarine Green — Design Fee',
    rows: [
      { label: '10% of Contractor Fee', amount: '$64,500.00' },
      { label: 'Initial Deposit', amount: '$20,000.00' },
      { label: 'Two Months into Project', amount: '$20,000.00' },
      {
        label: 'Substantial Completion of Contractor Work',
        amount: '$20,000.00',
      },
      { label: 'Final Delivery of Furnishings', amount: '$4,500.00' },
    ],
    image: `${IMG_BASE}/aa97ca84-0098-458d-b6ca-a8735a2af64c.png`,
    imageAlt: 'Modern conference room overlooking lush greenery',
  },
  {
    type: 'total',
    eyebrow: '25 — Total Investment',
    title: 'Total Investment',
    amount: '$709,500.00',
    note: '*This does not include furnishings.',
    image: `${IMG_BASE}/e79973dd-1d30-4860-8dbf-5e046d793391.png`,
    imageAlt: 'Art deco golden geometric murals on ballroom walls',
  },
  {
    type: 'image-feature',
    eyebrow: '26 — Art Deco Vision',
    caption: 'Art Deco Vision',
    captionSubtitle: 'Where craftsmanship meets old-world glamour',
    image: `${IMG_BASE}/e79973dd-1d30-4860-8dbf-5e046d793391.png`,
    imageAlt:
      'Art deco golden geometric pattern walls glowing in warm light',
  },
  {
    type: 'closing',
    eyebrow: '27 — Reliable Collaboration',
    title: 'Reliable Collaboration',
    subtitle: 'Quality Assurance and Transparency for Your Renovation Journey',
    body: (
      <>
        At Aquamarine Green, we pride ourselves on our{' '}
        <span className="text-charcoal">expertise and dedication</span> to
        delivering exceptional results. With a transparent contract and a{' '}
        <span className="text-charcoal">realistic timeline</span>, we ensure
        that every step of the renovation process is smooth and efficient.
        Together, let&apos;s transform The Kenilworth into a stunning social
        hub that embodies luxury and community spirit.
      </>
    ),
    image: `${IMG_BASE}/562bd604-873f-4bd1-85b6-55fc3ab270ba.png`,
    imageAlt: 'Skyline projections in the new social club at twilight',
  },
];

export default function KenilworthSocialClubSlides() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const total = slides.length;

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= total || index === current) return;
      setDirection(index > current ? 'next' : 'prev');
      setCurrent(index);
    },
    [current, total],
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goNext();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  // Touch swipe gestures for mobile
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  const slide = slides[current];
  const animClass =
    direction === 'next' ? 'animate-slide-enter' : 'animate-slide-enter-reverse';

  return (
    <PasswordGate title="Kenilworth Social Club" subtitle="Design Presentation">
      <div
        className="relative h-screen h-[100dvh] overflow-hidden bg-off-white"
        style={{ touchAction: 'pan-y' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div key={current} className={`h-full ${animClass}`}>
          {slide.type === 'cover' && <CoverSlide slide={slide} />}
          {slide.type === 'quote' && <QuoteSlide slide={slide} />}
          {slide.type === 'intro' && <IntroSlide slide={slide} />}
          {slide.type === 'split' && <SplitSlide slide={slide} />}
          {slide.type === 'before' && <BeforeSlide slide={slide} />}
          {slide.type === 'image-feature' && (
            <ImageFeatureSlide slide={slide} />
          )}
          {slide.type === 'comparison' && <ComparisonSlide slide={slide} />}
          {slide.type === 'scope-list' && <ScopeListSlide slide={slide} />}
          {slide.type === 'timeline' && <TimelineSlide slide={slide} />}
          {slide.type === 'contract' && <ContractSlide slide={slide} />}
          {slide.type === 'total' && <TotalSlide slide={slide} />}
          {slide.type === 'closing' && <ClosingSlide slide={slide} />}
        </div>

        {/* Side chevrons — vertically centered, hidden on mobile (use swipe instead) */}
        <button
          onClick={goPrev}
          disabled={current === 0}
          aria-label="Previous slide"
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full border border-charcoal/10 bg-white/80 backdrop-blur-sm text-charcoal/50 hover:text-charcoal hover:border-charcoal/30 hover:bg-white disabled:opacity-0 disabled:pointer-events-none transition-all"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goNext}
          disabled={current === total - 1}
          aria-label="Next slide"
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full border border-charcoal/10 bg-white/80 backdrop-blur-sm text-charcoal/50 hover:text-charcoal hover:border-charcoal/30 hover:bg-white disabled:opacity-0 disabled:pointer-events-none transition-all"
        >
          <svg
            className="w-5 h-5"
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
        </button>

        {/* Mobile-only: swipe hint shown on first slide */}
        {current === 0 && (
          <div className="md:hidden absolute top-4 right-4 z-30 pointer-events-none flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-charcoal/5 backdrop-blur-sm">
            <svg
              className="w-3 h-3 text-charcoal/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <span className="font-body text-[9px] tracking-[0.2em] uppercase text-charcoal/40">
              Swipe
            </span>
          </div>
        )}

        {/* Bottom chrome — dot indicators + branding + counter */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
          <div className="flex items-center justify-center px-6 md:px-12 pb-6 md:pb-8">
            <div className="flex items-center gap-[3px] max-w-[70vw] overflow-x-auto scrollbar-hide pointer-events-auto">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-[2px] flex-shrink-0 transition-all duration-500 ${
                    i === current
                      ? 'w-8 bg-charcoal'
                      : 'w-4 bg-charcoal/15 hover:bg-charcoal/30'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-6 md:bottom-8 right-4 md:right-12">
            <span className="font-body text-charcoal/30 text-[9px] md:text-[10px] tracking-[0.25em]">
              {String(current + 1).padStart(2, '0')} /{' '}
              {String(total).padStart(2, '0')}
            </span>
          </div>

          <div className="hidden md:block absolute bottom-6 md:bottom-8 left-12">
            <span className="font-body text-charcoal/30 text-[10px] tracking-[0.25em] uppercase">
              Aquamarine Green
            </span>
          </div>
        </div>
      </div>
    </PasswordGate>
  );
}

/* ──────────────────────────────────────────────
 *  Reusable slide chrome
 * ────────────────────────────────────────────── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-body text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-charcoal/40">
      {children}
    </span>
  );
}

function Rule({ className = '' }: { className?: string }) {
  return <div className={`h-px bg-seafoam ${className}`} />;
}

function ArtDecoBackdrop() {
  return <div className="absolute inset-0 art-deco-pattern opacity-40" />;
}

/* ──────────────────────────────────────────────
 *  Slide variants
 * ────────────────────────────────────────────── */

function CoverSlide({ slide }: { slide: Extract<Slide, { type: 'cover' }> }) {
  return (
    <div className="relative h-full flex items-center justify-center bg-off-white overflow-hidden">
      <ArtDecoBackdrop />

      <div className="relative w-full max-w-5xl px-6 md:px-16 text-center">
        <div className="flex flex-col items-center gap-3 mb-8 md:mb-12">
          <div className="w-3 h-3 bg-seafoam rotate-45" />
          <Eyebrow>{slide.eyebrow}</Eyebrow>
        </div>

        <h1 className="font-display italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.05] mb-6 md:mb-8">
          {slide.title}
        </h1>

        <Rule className="mx-auto w-24 mb-6 md:mb-8" />

        {slide.subtitle && (
          <p className="font-body text-charcoal/55 text-sm md:text-lg tracking-wide max-w-2xl mx-auto">
            {slide.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

function QuoteSlide({ slide }: { slide: Extract<Slide, { type: 'quote' }> }) {
  return (
    <div className="relative h-full flex items-center justify-center bg-off-white overflow-hidden">
      <ArtDecoBackdrop />

      <div className="relative w-full max-w-3xl px-6 md:px-16 text-center">
        <Eyebrow>{slide.eyebrow}</Eyebrow>
        <Rule className="mx-auto w-24 mt-4 mb-8 md:mt-6 md:mb-12" />

        <blockquote className="font-display italic text-charcoal text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.3] mb-6 md:mb-10">
          {slide.body}
        </blockquote>

        <p className="font-body text-charcoal/50 text-xs md:text-base leading-relaxed">
          {slide.attribution}
        </p>

        <Rule className="mx-auto w-24 mt-8 md:mt-12" />
      </div>
    </div>
  );
}

function IntroSlide({ slide }: { slide: Extract<Slide, { type: 'intro' }> }) {
  return (
    <div className="relative h-full flex items-center justify-center bg-off-white overflow-hidden">
      <ArtDecoBackdrop />

      <div className="relative w-full max-w-4xl px-6 md:px-16 text-center">
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="w-2 h-2 bg-seafoam rotate-45" />
        </div>

        <Eyebrow>{slide.eyebrow}</Eyebrow>

        <h1 className="mt-6 md:mt-10 font-display italic text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-charcoal leading-[1.05] mb-6 md:mb-10">
          {slide.title}
        </h1>

        <Rule className="mx-auto w-16 opacity-30 mb-6 md:mb-10" />

        <p className="font-body text-charcoal/60 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
          {slide.body}
        </p>
      </div>
    </div>
  );
}

function SplitSlide({ slide }: { slide: Extract<Slide, { type: 'split' }> }) {
  const imageLeft = slide.imagePosition === 'left';
  return (
    <div className="h-full grid grid-rows-[40vh_1fr] lg:grid-rows-none lg:grid-cols-12 bg-off-white">
      <div
        className={`row-start-2 lg:row-auto lg:col-span-5 flex items-center px-6 md:px-12 lg:px-20 py-8 md:py-12 lg:py-0 pb-20 lg:pb-0 overflow-y-auto ${
          imageLeft ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <div className="max-w-md">
          <Eyebrow>{slide.eyebrow}</Eyebrow>

          <h2 className="mt-4 md:mt-6 font-display italic text-3xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05] mb-4 md:mb-6">
            {slide.title}
          </h2>

          <Rule className="w-10 mb-6 md:mb-8" />

          {slide.subtitle && (
            <p className="font-display text-charcoal/80 text-base md:text-xl leading-snug mb-4 md:mb-6">
              {slide.subtitle}
            </p>
          )}

          <div className="font-body text-charcoal/55 text-[13px] md:text-[15px] leading-relaxed">
            {slide.body}
          </div>
        </div>
      </div>

      <div
        className={`row-start-1 lg:row-auto lg:col-span-7 relative ${
          imageLeft ? 'lg:order-1' : 'lg:order-2'
        } bg-charcoal`}
      >
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/10 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

function BeforeSlide({ slide }: { slide: Extract<Slide, { type: 'before' }> }) {
  return (
    <div className="h-full grid grid-rows-[40vh_1fr] lg:grid-rows-none lg:grid-cols-12 bg-off-white">
      <div className="row-start-2 lg:row-auto lg:col-span-5 flex items-center px-6 md:px-12 lg:px-20 py-8 md:py-12 lg:py-0 pb-20 lg:pb-0 overflow-y-auto lg:order-1">
        <div className="max-w-md">
          <Eyebrow>{slide.eyebrow}</Eyebrow>

          <h2 className="mt-4 md:mt-6 font-display italic text-3xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05] mb-4 md:mb-6">
            {slide.title}
          </h2>

          <Rule className="w-10 mb-6 md:mb-8" />

          <p className="font-display text-charcoal/80 text-base md:text-xl leading-snug mb-4 md:mb-6">
            {slide.subtitle}
          </p>

          <p className="font-body text-charcoal/55 text-[13px] md:text-[15px] leading-relaxed">
            {slide.body}
          </p>
        </div>
      </div>

      <div className="row-start-1 lg:row-auto lg:col-span-7 relative lg:order-2 grid grid-cols-2 lg:grid-cols-none lg:grid-rows-2 gap-1 bg-charcoal p-1">
        {slide.images.map((img, i) => (
          <div key={i} className="relative overflow-hidden bg-charcoal">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0}
              sizes="(max-width: 1024px) 50vw, 60vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageFeatureSlide({
  slide,
}: {
  slide: Extract<Slide, { type: 'image-feature' }>;
}) {
  return (
    <div className="relative h-full bg-charcoal overflow-hidden">
      <Image
        src={slide.image}
        alt={slide.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Bottom gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent pointer-events-none" />

      {/* Top eyebrow */}
      <div className="absolute top-6 md:top-12 left-6 md:left-16 z-10">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-seafoam rotate-45" />
          <span className="font-body text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-white/80">
            {slide.eyebrow}
          </span>
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-16 md:bottom-28 left-6 md:left-16 right-6 md:right-16 z-10 max-w-3xl">
        {slide.title && (
          <h2 className="font-display italic text-white text-2xl md:text-5xl lg:text-6xl leading-[1.05] mb-3 md:mb-4">
            {slide.title}
          </h2>
        )}
        <p className="font-display text-white text-lg md:text-3xl tracking-wide uppercase mb-2 md:mb-3 font-light">
          {slide.caption}
        </p>
        {slide.captionSubtitle && (
          <p className="font-body text-white/70 text-xs md:text-base leading-relaxed max-w-xl">
            {slide.captionSubtitle}
          </p>
        )}
      </div>
    </div>
  );
}

function ComparisonSlide({
  slide,
}: {
  slide: Extract<Slide, { type: 'comparison' }>;
}) {
  return (
    <div className="relative h-full bg-charcoal overflow-hidden">
      <div className="absolute inset-0">
        {slide.images.map((img, i) => (
          <div key={i} className="relative h-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

      <div className="absolute top-6 md:top-12 left-6 md:left-16 z-10">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-seafoam rotate-45" />
          <span className="font-body text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-white/80">
            {slide.eyebrow}
          </span>
        </div>
      </div>

      {slide.caption && (
        <div className="absolute bottom-20 md:bottom-32 left-6 md:left-16 right-6 md:right-16 z-10 max-w-3xl">
          <p className="font-display italic text-white text-lg md:text-4xl leading-tight">
            {slide.caption}
          </p>
        </div>
      )}
    </div>
  );
}

function ScopeListSlide({
  slide,
}: {
  slide: Extract<Slide, { type: 'scope-list' }>;
}) {
  const multi = slide.sections.length > 1;
  const totalItems = slide.sections.reduce((sum, s) => sum + s.items.length, 0);
  const dense = totalItems > 12;
  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-12 bg-off-white overflow-hidden">
      <div className="lg:col-span-7 px-8 md:px-12 lg:px-16 py-8 md:py-10 lg:py-12 pb-24 lg:pb-14 flex flex-col min-h-0">
        <div className="flex-shrink-0">
          <Eyebrow>{slide.eyebrow}</Eyebrow>

          <h2 className="mt-4 font-display italic text-2xl md:text-3xl lg:text-4xl text-charcoal leading-[1.05] mb-2">
            {slide.title}
          </h2>

          {slide.sectionLabel && (
            <p className="font-display text-seafoam/80 text-sm md:text-base tracking-wide uppercase mb-4">
              {slide.sectionLabel}
            </p>
          )}

          <Rule className="w-10 mb-5" />
        </div>

        <div className="flex-1 min-h-0">
          <div
            className={
              multi
                ? `grid grid-cols-1 sm:grid-cols-2 gap-x-8 ${dense ? 'gap-y-4' : 'gap-y-5'}`
                : 'space-y-5'
            }
          >
            {slide.sections.map((section, i) => (
              <div key={i} className="break-inside-avoid">
                <h3 className="font-display text-charcoal text-base md:text-lg mb-1.5">
                  {section.heading}
                </h3>
                <ul
                  className={`font-body text-charcoal/65 leading-snug ${
                    dense
                      ? 'space-y-1 text-[12px] md:text-[12.5px]'
                      : 'space-y-1.5 text-[12.5px] md:text-[13.5px]'
                  }`}
                >
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-seafoam/60 flex-shrink-0 mt-[5px]">
                        <svg
                          className="w-1.5 h-1.5"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                        >
                          <rect width="8" height="8" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {slide.note && (
            <p className="mt-6 font-body text-charcoal/45 text-xs italic">
              Note — {slide.note}
            </p>
          )}
        </div>
      </div>

      {slide.image && (
        <div className="hidden lg:block lg:col-span-5 relative bg-charcoal">
          <Image
            src={slide.image}
            alt={slide.imageAlt ?? ''}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-charcoal/10 via-transparent to-transparent pointer-events-none" />
        </div>
      )}
    </div>
  );
}

function TimelineSlide({
  slide,
}: {
  slide: Extract<Slide, { type: 'timeline' }>;
}) {
  return (
    <div className="relative h-full flex flex-col items-center justify-center bg-off-white overflow-hidden">
      <ArtDecoBackdrop />

      <div className="relative w-full max-w-6xl px-6 md:px-16 pb-16 md:pb-0">
        <div className="text-center mb-10 md:mb-16">
          <Eyebrow>{slide.eyebrow}</Eyebrow>
          <h2 className="mt-4 md:mt-6 font-display italic text-3xl md:text-6xl text-charcoal leading-[1.05]">
            {slide.title}
          </h2>
          <Rule className="mx-auto w-16 mt-4 md:mt-6" />
        </div>

        <div className="relative">
          {/* Connecting line — only on tablet+ where the row is horizontal */}
          <div className="hidden md:block absolute left-0 right-0 top-[34px] h-px bg-charcoal/10" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-12">
            {slide.milestones.map((m, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-12 h-12 md:w-[68px] md:h-[68px] rounded-full bg-off-white border border-charcoal/15 flex items-center justify-center mb-3 md:mb-6">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-seafoam rotate-45" />
                </div>
                <p className="font-display text-charcoal text-lg md:text-2xl mb-1">
                  {m.date}
                </p>
                <p className="font-body text-charcoal/40 text-[10px] md:text-[11px] tracking-[0.2em] uppercase mb-2 md:mb-4">
                  {m.year}
                </p>
                <p className="font-body text-charcoal/65 text-xs md:text-[15px] leading-relaxed max-w-[200px]">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContractSlide({
  slide,
}: {
  slide: Extract<Slide, { type: 'contract' }>;
}) {
  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-12 bg-off-white overflow-hidden">
      <div className="lg:col-span-7 px-6 md:px-12 lg:px-20 py-8 md:py-10 lg:py-16 pb-24 lg:pb-16 overflow-y-auto">
        <div className="max-w-2xl">
          <Eyebrow>{slide.eyebrow}</Eyebrow>

          <h2 className="mt-4 md:mt-6 font-display italic text-2xl md:text-4xl lg:text-5xl text-charcoal leading-[1.05] mb-2 md:mb-3">
            {slide.title}
          </h2>

          <p className="font-display text-seafoam/80 text-sm md:text-lg tracking-wide uppercase mb-4 md:mb-6">
            {slide.sectionHeading}
          </p>

          <Rule className="w-10 mb-6 md:mb-8" />

          <div className="space-y-3">
            {slide.rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-4 items-baseline border-b border-charcoal/8 pb-3"
              >
                <div className="col-span-12 sm:col-span-5">
                  <p className="font-display text-charcoal text-[15px] md:text-base font-medium">
                    {row.label}
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  {row.description && (
                    <p className="font-body text-charcoal/55 text-xs md:text-[13px]">
                      {row.description}
                    </p>
                  )}
                </div>
                <div className="col-span-12 sm:col-span-3 text-right">
                  <p className="font-display text-charcoal text-base md:text-lg">
                    {row.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {slide.footnote && (
            <div className="mt-8 font-body text-charcoal/55 text-xs md:text-sm leading-relaxed">
              {slide.footnote}
            </div>
          )}
        </div>
      </div>

      {slide.image && (
        <div className="hidden lg:block lg:col-span-5 relative bg-charcoal">
          <Image
            src={slide.image}
            alt={slide.imageAlt ?? ''}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-charcoal/20 via-transparent to-transparent pointer-events-none" />
        </div>
      )}
    </div>
  );
}

function TotalSlide({ slide }: { slide: Extract<Slide, { type: 'total' }> }) {
  return (
    <div className="relative h-full bg-charcoal overflow-hidden">
      <Image
        src={slide.image}
        alt={slide.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/95 via-charcoal/60 to-charcoal/30" />

      <div className="relative h-full flex items-center justify-center px-6 md:px-16">
        <div className="text-center max-w-3xl">
          <div className="flex flex-col items-center gap-3 md:gap-4 mb-8 md:mb-10">
            <div className="w-2 h-2 bg-seafoam rotate-45" />
            <span className="font-body text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-white/60">
              {slide.eyebrow}
            </span>
          </div>

          <h2 className="font-display italic text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 md:mb-10">
            {slide.title}
          </h2>

          <Rule className="mx-auto w-16 mb-6 md:mb-10" />

          <p className="font-display text-white text-[44px] sm:text-6xl md:text-8xl lg:text-9xl tracking-tight mb-4 md:mb-6">
            {slide.amount}
          </p>

          {slide.note && (
            <p className="font-body italic text-white/50 text-xs md:text-base">
              {slide.note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function ClosingSlide({
  slide,
}: {
  slide: Extract<Slide, { type: 'closing' }>;
}) {
  return (
    <div className="h-full grid grid-rows-[35vh_1fr] lg:grid-rows-none lg:grid-cols-12 bg-off-white">
      <div className="row-start-2 lg:row-auto lg:col-span-6 flex items-center px-6 md:px-12 lg:px-20 py-8 md:py-12 lg:py-0 pb-20 lg:pb-0 overflow-y-auto lg:order-1">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-5 md:mb-8">
            <div className="w-1.5 h-1.5 bg-seafoam rotate-45" />
            <Eyebrow>{slide.eyebrow}</Eyebrow>
          </div>

          <h2 className="font-display italic text-3xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05] mb-4 md:mb-6">
            {slide.title}
          </h2>

          <Rule className="w-10 mb-6 md:mb-8" />

          <p className="font-display text-charcoal/80 text-base md:text-xl leading-snug mb-4 md:mb-6">
            {slide.subtitle}
          </p>

          <div className="font-body text-charcoal/55 text-[13px] md:text-[15px] leading-relaxed mb-6 md:mb-10">
            {slide.body}
          </div>

          <div className="flex items-center gap-3">
            <span className="font-body text-charcoal/40 text-[10px] tracking-[0.3em] uppercase">
              Aquamarine Green
            </span>
            <span className="text-charcoal/20">·</span>
            <span className="font-body text-charcoal/40 text-[10px] tracking-[0.3em] uppercase">
              ADU Remodeling
            </span>
          </div>
        </div>
      </div>

      <div className="row-start-1 lg:row-auto lg:col-span-6 relative lg:order-2 bg-charcoal">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
