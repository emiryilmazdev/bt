import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection-tabs'; // TABS Tasarım!

import MobileMenu from '@/components/MobileMenu';
import OffcanvasMenu from '@/components/OffcanvasMenu';
import { Book3DSkeleton, MapSkeleton, FooterSkeleton } from '@/components/Skeletons';

// Heavy components - Lazy loaded
const CatalogSectionClient = dynamic(() => import('@/components/CatalogSectionClient'), {
  loading: () => <Book3DSkeleton />,
});

const GlobalMapSection = dynamic(() => import('@/components/GlobalMapSection'), {
  loading: () => <MapSkeleton />,
});

const FooterSection = dynamic(() => import('@/components/FooterSection'), {
  loading: () => <FooterSkeleton />,
});

export default function Home() {
  return (
    <>
      <OffcanvasMenu />
      <MobileMenu />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="site-main" id="primary">
            <div className="space-for-header"></div>

            {/* Critical content - loads immediately */}
            <HeroSection />
            <AboutSection />
            <SolutionsSection />

            {/* Heavy 3D content - lazy loaded with skeleton */}
            <Suspense fallback={<Book3DSkeleton />}>
              <CatalogSectionClient />
            </Suspense>

            {/* Global Impact: Stats + Map + Clients - lazy loaded */}
            <Suspense fallback={<MapSkeleton />}>
              <GlobalMapSection />
            </Suspense>
          </main>

          {/* Footer - lazy loaded */}
          <Suspense fallback={<FooterSkeleton />}>
            <FooterSection />
          </Suspense>
        </div>
      </div>
    </>
  );
}
