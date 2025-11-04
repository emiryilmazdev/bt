'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    id: 1,
    title: 'Katoforez Kaplama',
    desc: 'Metal yüzeylere maksimum korozyon direnci.',
    image: '/images/project/katoforez1.jpg',
    link: '/projects?tab=0'
  },
  {
    id: 2,
    title: 'Atık Su Arıtma',
    desc: 'Çevresel sorumluluk ve su geri dönüşümü.',
    image: '/images/project/atiksu.jpg',
    link: '/projects?tab=1'
  },
  {
    id: 3,
    title: 'Elektrik & Yazılım',
    desc: 'Otomasyon ve Endüstri 4.0 çözümleri.',
    image: '/images/project/elektrik.jpg',
    link: '/projects?tab=2'
  },
  {
    id: 4,
    title: 'Gaz Yıkama (SCRUBBER)',
    desc: 'Zararlı gazların filtrelenmesi ve temizliği.',
    image: '/images/project/kimsayalgazyikama.jpg',
    link: '/projects?tab=6'
  },
  {
    id: 5,
    title: 'Tambur Kaplama',
    desc: 'Küçük parçalar için otomatik kaplama.',
    image: '/images/project/tamotomatiktambur.jpg',
    link: '/projects?tab=4'
  },
  {
    id: 6,
    title: 'Eloksal Kaplama',
    desc: 'Alüminyum yüzeylere üstün koruma.',
    image: '/images/project/atiksu.jpg',
    link: '/projects?tab=5'
  }
];

const SolutionsSectionCompact: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .solutions-compact {
          background: #fff;
          position: relative;
        }
        
        .section-header-compact {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .section-subtitle-compact {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #E9562D;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        
        .section-title-compact {
          font-size: clamp(28px, 4vw, 40px);
          color: #1B1B1B;
          font-weight: 600;
          line-height: 1.2;
        }
        
        .solutions-grid-compact {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        @media (max-width: 991px) {
          .solutions-grid-compact {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 767px) {
          .solutions-grid-compact {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }
        
        .service-card-compact {
          background: #F5F5F5;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: block;
          position: relative;
        }
        
        .service-card-compact:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          background: #fff;
        }
        
        .service-image-compact {
          width: 100%;
          height: 180px;
          overflow: hidden;
          position: relative;
        }
        
        .service-image-compact img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .service-card-compact:hover .service-image-compact img {
          transform: scale(1.08);
        }
        
        .service-number-compact {
          position: absolute;
          top: 12px;
          left: 12px;
          width: 36px;
          height: 36px;
          background: rgba(233, 86, 45, 0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          z-index: 2;
        }
        
        .service-content-compact {
          padding: 20px;
        }
        
        .service-title-compact {
          font-size: 18px;
          font-weight: 600;
          color: #1B1B1B;
          margin-bottom: 8px;
          line-height: 1.3;
          transition: color 0.3s ease;
        }
        
        .service-card-compact:hover .service-title-compact {
          color: #E9562D;
        }
        
        .service-desc-compact {
          font-size: 14px;
          color: #737373;
          line-height: 1.5;
          margin: 0;
        }
        
        .service-cta-compact {
          margin-top: 50px;
          text-align: center;
          padding: 40px;
          background: #F5F5F5;
          border-radius: 8px;
        }
        
        .service-cta-compact p {
          font-size: 16px;
          color: #414141;
          margin-bottom: 20px;
        }
        
        .service-cta-compact a {
          color: #E9562D;
          font-weight: 600;
          text-decoration: underline;
        }
      `}</style>

      <section id="solutions" className="solutions-compact section-gap">
        <div className="container">
          <AnimatedSection delay={0.2}>
            <div className="section-header-compact">
              <div className="section-subtitle-compact">
                <i className="tji-box"></i>
                HİZMETLERİMİZ
              </div>
              <h2 className="section-title-compact">
                Endüstriyel Galvaniz Kaplama Teknolojileri
              </h2>
            </div>
          </AnimatedSection>

          <div className="solutions-grid-compact">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={0.05 * (index + 1)}>
                <a href={service.link} className="service-card-compact">
                  <div className="service-image-compact">
                    <div className="service-number-compact">
                      {String(service.id).padStart(2, '0')}
                    </div>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={180}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="service-content-compact">
                    <h3 className="service-title-compact">{service.title}</h3>
                    <p className="service-desc-compact">{service.desc}</p>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <div className="service-cta-compact">
              <p>
                Özel ihtiyaçlarınıza uygun galvaniz çözümleri için{' '}
                <a href="/contact">Bizimle İletişime Geçin</a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default SolutionsSectionCompact;
