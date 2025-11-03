import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

// CSS imports - Modern Next.js approach
import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/bexon-icons.css";
import "../styles/nice-select.css";
import "../styles/swiper.css";
import "../styles/venobox.css";
import "../styles/odometer.css";
import "../styles/meanmenu.css";
import "../styles/theme.min.css";
import "../styles/custom.css";

export const metadata: Metadata = {
  title: "Galvanorm - Otomatik Kaplama Tesisleri",
  description: "Yüksek kalite galvaniz çözümlerimizle çeliği koruyor, endüstriye uzun ömürlü ve güvenilir ürünler kazandırıyoruz.",
  keywords: ["galvaniz", "kaplama", "yüzey işlem", "endüstriyel çözümler", "otomatik kaplama tesisleri"],
  icons: {
    icon: "/images/favicon.svg",
    shortcut: "/images/favicon.svg",
    apple: "/images/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="no-js">
      <head>
        {/* Font Awesome - CDN (external dependencies) */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/fontawesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/brands.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/thin.min.css" />
      </head>
      <body suppressHydrationWarning>
        <div className="body-overlay"></div>
        {children}
        
        {/* JS scripts in original order from index.html */}
        <Script src="/js/smooth-scroll.js" strategy="afterInteractive" />
        <Script src="/js/menu-smooth-scroll.js" strategy="afterInteractive" />
        <Script src="/js/jquery.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/scroll-smoother.min.js" strategy="afterInteractive" />
        <Script src="/js/scroll-to-plugin.min.js" strategy="afterInteractive" />
        <Script src="/js/scroll-trigger.min.js" strategy="afterInteractive" />
        <Script src="/js/gsap-splittext.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/js/odometer.min.js" strategy="afterInteractive" />
        <Script src="/js/venobox.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.appear.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.meanmenu.min.js" strategy="afterInteractive" />
        <Script src="/js/theme-main.js" strategy="afterInteractive" />
        <Script src="/js/counter-animation.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
