'use client';

import React, { Suspense, useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with prefetch
const Book3D = dynamic(() => import('./Book3D').then(mod => ({ default: mod.Book3D })), {
  ssr: false,
  loading: () => (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
      <div className="book3d-loading">
        <div className="loading-spinner"></div>
        <span className="loading-text">Yükleniyor...</span>
      </div>
    </div>
  )
});

// Preload Three.js modules
if (typeof window !== 'undefined') {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'script';
  link.href = '/_next/static/chunks/three.js';
  document.head.appendChild(link);
}

const CatalogSection: React.FC = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Prefetch Book3D component on hover or after page load
    const prefetchBook3D = () => {
      import('./Book3D');
    };

    // Prefetch after 2 seconds if user is still on page
    const prefetchTimer = setTimeout(prefetchBook3D, 2000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clearTimeout(prefetchTimer);
            // requestIdleCallback kullan - tarayıcı boştayken yükle
            if ('requestIdleCallback' in window) {
              requestIdleCallback(() => {
                setShouldRender(true);
                observer.disconnect();
              }, { timeout: 2000 });
            } else {
              setTimeout(() => {
                setShouldRender(true);
                observer.disconnect();
              }, 100);
            }
          }
        });
      },
      {
        rootMargin: '200px', // Biraz daha erken başlat
        threshold: 0.05, // Daha düşük threshold
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(prefetchTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .catalog-compact-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
        }
        
        .catalog-compact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: center;
        }
        
        @media (max-width: 991px) {
          .catalog-compact-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .catalog-compact-content {
          padding: 60px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        @media (max-width: 1199px) {
          .catalog-compact-content {
            padding: 50px;
          }
        }
        
        @media (max-width: 991px) {
          .catalog-compact-content {
            padding: 40px;
          }
        }
        
        @media (max-width: 767px) {
          .catalog-compact-content {
            padding: 32px 24px;
          }
        }
        
        .catalog-compact-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #1a1a1a;
          background: rgba(255, 255, 255, 0.9);
          padding: 8px 16px;
          border-radius: 50px;
          width: fit-content;
          border: 1px solid rgba(0, 0, 0, 0.08);
          letter-spacing: 0.5px;
        }
        
        .catalog-compact-badge::before {
          content: '📚';
          font-size: 16px;
        }
        
        .catalog-compact-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin: 0;
        }
        
        .catalog-compact-desc {
          font-size: 16px;
          color: #666;
          line-height: 1.7;
          margin: 0;
          max-width: 480px;
        }
        
        .catalog-compact-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 8px 0;
        }
        
        .catalog-feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #444;
        }
        
        .catalog-feature-icon {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 12px;
          flex-shrink: 0;
        }
        
        .catalog-compact-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #1a1a1a;
          color: #fff;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          width: fit-content;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }
        
        .catalog-compact-btn:hover {
          background: #000;
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
        }
        
        .catalog-compact-btn i {
          font-size: 18px;
          transition: transform 0.3s ease;
        }
        
        .catalog-compact-btn:hover i {
          transform: translateX(4px);
        }
        
        .catalog-compact-3d {
          position: relative;
          padding: 40px;
          background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
        }
        
        @media (max-width: 1199px) {
          .catalog-compact-3d {
            min-height: 450px;
            padding: 40px 30px;
          }
        }
        
        @media (max-width: 991px) {
          .catalog-compact-3d {
            min-height: 400px;
            padding: 40px;
          }
        }
        
        @media (max-width: 767px) {
          .catalog-compact-3d {
            min-height: 350px;
            padding: 30px 20px;
          }
        }
        
        .catalog-3d-container {
          position: relative;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .book3d-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          min-height: 400px;
        }
        
        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 4px solid #f0f0f0;
          border-top-color: #1a1a1a;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .loading-text {
          font-size: 14px;
          color: #999;
          font-weight: 500;
        }
      `}</style>
      
      <section ref={sectionRef} id="catalog" className="catalog-compact-section section-gap section-gap-x">
        <div className="container" style={{ maxWidth: '100%', padding: '0' }}>
          <div className="catalog-compact-grid">
            {/* Sol - İçerik */}
            <div className="catalog-compact-content">
              <span className="catalog-compact-badge">Katalog</span>
              
              <h2 className="catalog-compact-title">
                Dijital Katalogumuz
              </h2>
              
              <p className="catalog-compact-desc">
                Tüm ürün ve hizmetlerimizi, teknik detayları ve çözümlerimizi 
                interaktif 3D katalogumuzda keşfedin.
              </p>
              
              <div className="catalog-compact-features">
                <div className="catalog-feature-item">
                  <span className="catalog-feature-icon">✓</span>
                  <span>Detaylı teknik özellikler</span>
                </div>
                <div className="catalog-feature-item">
                  <span className="catalog-feature-icon">✓</span>
                  <span>Güncel ürün bilgileri</span>
                </div>
                <div className="catalog-feature-item">
                  <span className="catalog-feature-icon">✓</span>
                  <span>PDF formatında indirilebilir</span>
                </div>
              </div>
              
              <a className="catalog-compact-btn" href="/catalog.pdf" download>
                <span>Kataloğu İndir</span>
                <i className="tji-arrow-right-long"></i>
              </a>
            </div>

            {/* Sağ - 3D Katalog */}
            <div className="catalog-compact-3d">
              <div className="catalog-3d-container">
                <div style={{ 
                  opacity: shouldRender ? 1 : 0.5,
                  transition: 'opacity 0.5s ease',
                  minHeight: '400px'
                }}>
                  {shouldRender ? (
                    <Suspense fallback={
                      <div className="book3d-loading">
                        <div className="loading-spinner"></div>
                        <span className="loading-text">Yükleniyor...</span>
                      </div>
                    }>
                      <Book3D />
                    </Suspense>
                  ) : (
                    <div className="book3d-loading">
                      <div className="loading-spinner"></div>
                      <span className="loading-text">Hazırlanıyor...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CatalogSection;
