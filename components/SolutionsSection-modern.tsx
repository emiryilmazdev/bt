'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    id: 1,
    title: 'Katoforez Kaplama Tesisleri',
    desc: 'Katoforez (KTL) sistemlerimiz, metal yüzeylere maksimum korozyon direnci kazandırır.',
    image: '/images/project/katoforez1.jpg',
    link: '/projects?tab=0',
    icon: 'tji-service-1'
  },
  {
    id: 2,
    title: 'Atık Su Arıtma Tesisleri',
    desc: 'Yüksek performanslı arıtma sistemlerimizle çevresel sorumluluk bilinciyle suyun geri dönüşümünü sağlıyoruz.',
    image: '/images/project/atiksu.jpg',
    link: '/projects?tab=1',
    icon: 'tji-service-2'
  },
  {
    id: 3,
    title: 'Elektrik ve Yazılım Sistemleri',
    desc: 'Otomasyon, kontrol panoları ve yazılım entegrasyonlarıyla üretim tesislerinize akıl kazandırıyoruz.',
    image: '/images/project/elektrik.jpg',
    link: '/projects?tab=2',
    icon: 'tji-service-3'
  },
  {
    id: 4,
    title: 'Kimyasal Gaz Yıkama Sistemleri',
    desc: 'SCRUBBER sistemlerimiz, üretim süreçlerindeki zararlı gazları filtreleyerek hem çevreyi hem çalışan sağlığını korur.',
    image: '/images/project/kimsayalgazyikama.jpg',
    link: '/projects?tab=6',
    icon: 'tji-service-1'
  },
  {
    id: 5,
    title: 'Tam Otomatik Tambur Kaplama',
    desc: 'Küçük parçaların yüksek hızda ve homojen şekilde kaplanmasını sağlayan otomatik tambur sistemlerimiz.',
    image: '/images/project/tamotomatiktambur.jpg',
    link: '/projects?tab=4',
    icon: 'tji-service-2'
  },
  {
    id: 6,
    title: 'Eloksal Kaplama Tesisleri',
    desc: 'Alüminyum yüzeylere üstün koruma ve estetik görünüm kazandıran eloksal kaplama çözümlerimiz.',
    image: '/images/project/atiksu.jpg',
    link: '/projects?tab=5',
    icon: 'tji-service-3'
  }
];

const SolutionsSectionModern: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .solutions-modern {
          background: #fff;
          position: relative;
          overflow: hidden;
        }
        
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #e0e0e0;
          border: 1px solid #e0e0e0;
        }
        
        @media (max-width: 991px) {
          .solutions-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 767px) {
          .solutions-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .service-card-modern {
          background: #fff;
          position: relative;
          overflow: hidden;
          aspect-ratio: 1;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        
        .service-card-modern:hover {
          z-index: 2;
        }
        
        .service-image-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        
        .service-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        
        .service-card-modern:hover .service-image-wrapper img {
          transform: scale(1.1);
        }
        
        .service-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%);
          transition: all 0.4s ease;
        }
        
        .service-card-modern:hover .service-overlay {
          background: linear-gradient(180deg, rgba(233,86,45,0.3) 0%, rgba(0,0,0,0.95) 100%);
        }
        
        .service-content-modern {
          position: absolute;
          inset: 0;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          z-index: 2;
        }
        
        @media (max-width: 767px) {
          .service-content-modern {
            padding: 30px;
          }
        }
        
        .service-number {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          font-weight: 600;
          margin-bottom: 12px;
          letter-spacing: 2px;
        }
        
        .service-title-modern {
          font-size: clamp(20px, 2.5vw, 28px);
          color: #fff;
          font-weight: 600;
          margin-bottom: 12px;
          line-height: 1.3;
          transition: all 0.3s ease;
        }
        
        .service-desc-modern {
          font-size: 15px;
          color: rgba(255,255,255,0.85);
          line-height: 1.6;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease;
          max-height: 0;
          overflow: hidden;
        }
        
        .service-card-modern:hover .service-desc-modern {
          opacity: 1;
          transform: translateY(0);
          max-height: 200px;
        }
        
        .service-link-modern {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s ease 0.1s;
        }
        
        .service-card-modern:hover .service-link-modern {
          opacity: 1;
          transform: translateY(0);
        }
        
        .service-link-modern i {
          font-size: 18px;
          transition: transform 0.3s ease;
        }
        
        .service-link-modern:hover i {
          transform: translateX(5px);
        }
        
        .section-header-modern {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 80px;
        }
        
        @media (max-width: 767px) {
          .section-header-modern {
            margin-bottom: 50px;
          }
        }
        
        .section-subtitle-modern {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #E9562D;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        
        .section-title-modern {
          font-size: clamp(32px, 5vw, 48px);
          color: #1B1B1B;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        
        .section-desc-modern {
          font-size: 17px;
          color: #737373;
          line-height: 1.7;
        }
      `}</style>

      <section id="solutions" className="solutions-modern section-gap">
        <div className="container">
          <AnimatedSection delay={0.2}>
            <div className="section-header-modern">
              <div className="section-subtitle-modern">
                <i className="tji-box"></i>
                ÇÖZÜMLER
              </div>
              <h2 className="section-title-modern">
                Endüstriyel Galvaniz Kaplama Teknolojileri
              </h2>
              <p className="section-desc-modern">
                25 yıllık deneyimimizle, yüzey işleme tesislerinde yenilikçi ve sürdürülebilir çözümler sunuyoruz.
              </p>
            </div>
          </AnimatedSection>

          <div className="solutions-grid">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={0.1 * (index + 1)}>
                <a href={service.link} className="service-card-modern">
                  <div className="service-image-wrapper">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={600}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="service-overlay"></div>
                  <div className="service-content-modern">
                    <div className="service-number">0{service.id}</div>
                    <h3 className="service-title-modern">{service.title}</h3>
                    <p className="service-desc-modern">{service.desc}</p>
                    <span className="service-link-modern">
                      Detaylı Bilgi
                      <i className="tji-arrow-right-long"></i>
                    </span>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsSectionModern;
