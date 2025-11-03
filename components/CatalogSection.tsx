'use client';

import React, { Suspense, useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamic import to prevent SSR issues with Three.js
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

const CatalogSection: React.FC = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldRender(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="catalog" className="tj-service-section service-2 section-gap section-gap-x" style={{ marginTop: '80px' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-wrapper-2">
              
              {/* Katalog Kartı */}
              <div className="service-item-wrapper">
                <div className="service-item style-2 catalog-card">
                  
                  <div className="row align-items-center">
                    {/* Sol - Başlık ve Açıklama */}
                    <div className="col-lg-5">
                      <div className="title-area">
                        <div className="service-icon">
                          <i className="tji-box"></i>
                        </div>
                        <h4 className="title">
                          <a href="#">Ürün ve Hizmet Kataloğumuz</a>
                        </h4>
                      </div>
                      <div className="service-content">
                        <p className="desc">
                          Galvanorm&apos;un sunduğu tüm hizmetler, teknik özellikler ve çözümler hakkında 
                          detaylı bilgilere 3D katalogumuzdan ulaşabilirsiniz.
                        </p>
                        <div className="catalog-btn-wrap">
                          <a className="tj-primary-btn" href="#">
                            <span className="btn-text"><span>Kataloğu İndir</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Sağ - 3D Katalog */}
                    <div className="col-lg-7">
                      <div className="catalog-3d-area">
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
                          <div className="book3d-loading" style={{ minHeight: '500px' }}>
                            <div className="loading-spinner"></div>
                            <span className="loading-text">Hazırlanıyor...</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-1">
        <Image 
          src="/images/pattern-2.svg" 
          alt="" 
          width={200}
          height={200}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="bg-shape-2">
        <Image 
          src="/images/pattern-3.svg" 
          alt="" 
          width={200}
          height={200}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="bg-shape-3">
        <Image 
          src="/images/shape-blur.svg" 
          alt="" 
          width={300}
          height={300}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
};

export default CatalogSection;
