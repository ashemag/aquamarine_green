"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import Script from "next/script";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track page views on route change
function AnalyticsTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!GA_TRACKING_ID) return;

        const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

        // Send page view to Google Analytics
        window.gtag?.("config", GA_TRACKING_ID, {
            page_path: url,
        });
    }, [pathname, searchParams]);

    return null;
}

export default function GoogleAnalytics() {
    if (!GA_TRACKING_ID) {
        return null;
    }

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');
                `}
            </Script>
            <Suspense fallback={null}>
                <AnalyticsTracker />
            </Suspense>
        </>
    );
}

// Type declaration for gtag
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

