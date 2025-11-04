'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    id: 1,
    title: 'Katoforez Kaplama',
    desc: 'Metal yüzeylere maksimum korozyon direnci kazandıran KTL sistemleri.',
    image: '/images/project/katoforez1.jpg',
    link: '/projects?tab=0'
  },
  {
    id: 2,
    title: 'Atık Su Arıtma',
    desc: 'Çevresel sorumluluk bilinciyle suyun geri dönüşümünü sağlayan sistemler.',
    image: '/images/project/atiksu.jpg',
    link: '/projects?tab=1'
  },
  {
    id: 3,
    title: 'Elektrik & Yazılım',
    desc: 'Otomasyon ve kontrol sistemleriyle Endüstri 4.0 çözümleri.',
    image: '/images/project/elektrik.jpg',
    link: '/projects?tab=2'
  },
  {
    id: 4,
    title: 'Gaz Yıkama (SCRUBBER)',
    desc: 'Zararlı gazları filtreleyerek çevre ve çalışan sağlığını koruyan sistemler.',
    image: '/images/project/kimsayalgazyikama.jpg',
    link: '/projects?tab=6'
  },
  {
    id: 5,
    title: 'Tambur Kaplama',
    desc: 'Küçük parçaların homojen kaplanması için otomatik tambur sistemleri.',
    image: '/images/project/tamotomatiktambur.jpg',
    link: '/projects?tab=4'
  },
  {
    id: 6,
    title: 'Eloksal Kaplama',
    desc: 'Alüminyum yüzeylere üstün koruma ve estetik görünüm.',
    image: '/images/project/atiksu.jpg',
    link: '/projects?tab=5'
  }
];

const SolutionsSectionMinimal: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .solutions-minimal {
          background: #fff;
          position: relative;
        }
        
        .service-list-minimal {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .service-item-minimal {
          display: grid;
          grid-template-columns: 80px 1fr 400px;
          gap: 40px;
          align-items: center;
          padding: 60px 0;
          border-bottom: 1px solid #e0e0e0;
          transition: all 0.3s ease;
          position: relative;
        }
        
        @media (max-width: 991px) {
          .service-item-minimal {
            grid-template-columns: 60px 1fr 300px;
            gap: 30px;
            padding: 40px 0;
          }
        }
        
        @media (max-width: 767px) {
          .service-item-minimal {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 30px 0;
          }
        }
        
        .service-item-minimal:hover {
          padding-left: 20px;
          background: #fafafa;
        }
        
        .service-number-minimal {
          font-size: 48px;
          font-weight: 700;
          color: #e0e0e0;
          line-height: 1;
          transition: all 0.3s ease;
        }
        
        .service-item-minimal:hover .service-number-minimal {
          color: #E9562D;
        }
        
        @media (max-width: 767px) {
          .service-number-minimal {
            font-size: 36px;
          }
        }
        
        .service-info-minimal {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .service-title-minimal {
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 600;
          color: #1B1B1B;
          margin: 0;
          transition: all 0.3s ease;
        }
        
        .service-item-minimal:hover .service-title-minimal {
          color: #E9562D;
        }
        
        .service-desc-minimal {
          font-size: 16px;
          color: #737373;
          line-height: 1.6;
          margin: 0;
        }
        
        .service-image-minimal {
          width: 100%;
          height: 250px;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
        }
        
        @media (max-width: 767px) {
          .service-image-minimal {
            height: 200px;
          }
        }
        
        .service-image-minimal img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        
        .service-item-minimal:hover .service-image-minimal img {
          transform: scale(1.05);
        }
        
        .service-link-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        
        .section-header-minimal {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 80px;
        }
        
        @media (max-width: 767px) {
          .section-header-minimal {
            margin-bottom: 50px;
          }
        }
        
        .section-subtitle-minimal {
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
        
        .section-title-minimal {
          font-size: clamp(32px, 5vw, 48px);
          color: #1B1B1B;
          font-weight: 600;
          line-height: 1.2;
        }
      `}</style>

      <section id="solutions" className="solutions-minimal section-gap">
        <div className="container">
          <AnimatedSection delay={0.2}>
            <div className="section-header-minimal">
              <div className="section-subtitle-minimal">
                <i className="tji-box"></i>
                HİZMETLERİMİZ
              </div>
              <h2 className="section-title-minimal">
                Endüstriyel Galvaniz Kaplama Teknolojileri
              </h2>
            </div>
          </AnimatedSection>

          <div className="service-list-minimal">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={0.1 * (index + 1)}>
                <div className="service-item-minimal">
                  <a href={service.link} className="service-link-overlay"></a>
                  <div className="service-number-minimal">
                    {String(service.id).padStart(2, '0')}
                  </div>
                  <div className="service-info-minimal">
                    <h3 className="service-title-minimal">{service.title}</h3>
                    <p className="service-desc-minimal">{service.desc}</p>
                  </div>
                  <div className="service-image-minimal">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={250}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsSectionMinimal;
