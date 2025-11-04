'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const CatalogSectionModern: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .catalog-modern {
          background: #1a1a1a;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          padding: 80px 60px;
        }
        
        @media (max-width: 991px) {
          .catalog-modern {
            padding: 60px 40px;
          }
        }
        
        @media (max-width: 767px) {
          .catalog-modern {
            padding: 50px 24px;
          }
        }
        
        .catalog-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        
        @media (max-width: 991px) {
          .catalog-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
        }
        
        .catalog-content {
          color: #fff;
        }
        
        .catalog-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding-bottom: 12px;
          border-bottom: 2px solid #fff;
          margin-bottom: 24px;
        }
        
        .catalog-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        
        .catalog-desc {
          font-size: 17px;
          color: rgba(255,255,255,0.8);
          line-height: 1.7;
          margin-bottom: 40px;
        }
        
        .catalog-features {
          list-style: none;
          padding: 0;
          margin: 0 0 40px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .catalog-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: rgba(255,255,255,0.9);
        }
        
        .catalog-feature-icon {
          width: 20px;
          height: 20px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .catalog-feature-icon::after {
          content: '✓';
          font-size: 12px;
          color: #1a1a1a;
          font-weight: 700;
        }
        
        .catalog-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        
        .catalog-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: #fff;
          color: #1a1a1a;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .catalog-btn-primary:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
        }
        
        .catalog-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .catalog-btn-secondary:hover {
          border-color: #fff;
          background: rgba(255,255,255,0.1);
        }
        
        .catalog-image-area {
          position: relative;
          height: 500px;
          border-radius: 12px;
          overflow: hidden;
          background: #2a2a2a;
        }
        
        @media (max-width: 767px) {
          .catalog-image-area {
            height: 350px;
          }
        }
        
        .catalog-image-area img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .catalog-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%);
        }
      `}</style>

      <section id="catalog" className="catalog-modern section-gap section-gap-x">
        <div className="container" style={{ maxWidth: '100%', padding: '0' }}>
          <div className="catalog-grid">
            <AnimatedSection delay={0.2}>
              <div className="catalog-content">
                <span className="catalog-badge">Katalog</span>
                <h2 className="catalog-title">
                  Ürün ve Hizmet<br/>
                  Kataloğumuz
                </h2>
                <p className="catalog-desc">
                  Galvanorm'un sunduğu tüm hizmetler, teknik özellikler ve çözümler hakkında 
                  detaylı bilgilere katalogumuzdan ulaşabilirsiniz.
                </p>
                <ul className="catalog-features">
                  <li className="catalog-feature">
                    <span className="catalog-feature-icon"></span>
                    Tüm ürün ve hizmetler
                  </li>
                  <li className="catalog-feature">
                    <span className="catalog-feature-icon"></span>
                    Teknik özellikler ve detaylar
                  </li>
                  <li className="catalog-feature">
                    <span className="catalog-feature-icon"></span>
                    Referans projeler
                  </li>
                </ul>
                <div className="catalog-buttons">
                  <a href="/catalog.pdf" className="catalog-btn-primary" download>
                    Kataloğu İndir
                  </a>
                  <a href="/contact" className="catalog-btn-secondary">
                    İletişime Geç
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="catalog-image-area">
                <Image
                  src="/images/catalog-preview.jpg"
                  alt="Galvanorm Katalog"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="catalog-overlay"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default CatalogSectionModern;
