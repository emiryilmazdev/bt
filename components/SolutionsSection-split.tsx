'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    id: 1,
    title: 'Katoforez Kaplama Tesisleri',
    desc: 'Katoforez (KTL) sistemlerimiz, metal yüzeylere maksimum korozyon direnci kazandırır. Otomotiv ve beyaz eşya sektörlerinde fark yaratan dayanıklılık sunuyoruz.',
    image: '/images/project/katoforez1.jpg',
    link: '/projects?tab=0'
  },
  {
    id: 2,
    title: 'Atık Su Arıtma Tesisleri',
    desc: 'Yüksek performanslı arıtma sistemlerimizle, çevresel sorumluluk bilinciyle suyun geri dönüşümünü sağlıyoruz. Doğaya zarar vermeden üretin.',
    image: '/images/project/atiksu.jpg',
    link: '/projects?tab=1'
  },
  {
    id: 3,
    title: 'Elektrik ve Yazılım Sistemleri',
    desc: 'Otomasyon, kontrol panoları ve yazılım entegrasyonlarıyla üretim tesislerinize akıl kazandırıyoruz. Endüstri 4.0\'a bir adım daha yakın olun.',
    image: '/images/project/elektrik.jpg',
    link: '/projects?tab=2'
  },
  {
    id: 4,
    title: 'Kimyasal Gaz Yıkama (SCRUBBER)',
    desc: 'SCRUBBER sistemlerimiz, üretim süreçlerindeki zararlı gazları filtreleyerek hem çevreyi hem çalışan sağlığını korur.',
    image: '/images/project/kimsayalgazyikama.jpg',
    link: '/projects?tab=6'
  },
  {
    id: 5,
    title: 'Tam Otomatik Tambur Kaplama',
    desc: 'Küçük parçaların yüksek hızda ve homojen şekilde kaplanmasını sağlayan otomatik tambur sistemlerimiz.',
    image: '/images/project/tamotomatiktambur.jpg',
    link: '/projects?tab=4'
  },
  {
    id: 6,
    title: 'Eloksal Kaplama Tesisleri',
    desc: 'Alüminyum yüzeylere üstün koruma ve estetik görünüm kazandıran eloksal kaplama çözümlerimiz.',
    image: '/images/project/atiksu.jpg',
    link: '/projects?tab=5'
  }
];

const SolutionsSectionSplit: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      <style jsx>{`
        .solutions-split {
          background: #fff;
          position: relative;
        }
        
        .section-header-split {
          margin-bottom: 60px;
        }
        
        .section-subtitle-split {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #999;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        
        .section-subtitle-split::before {
          content: '';
          width: 60px;
          height: 1px;
          background: #999;
        }
        
        .section-title-split {
          font-size: clamp(36px, 5vw, 64px);
          color: #1B1B1B;
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }
        
        .split-container {
          display: grid;
          grid-template-columns: 1fr 480px;
          gap: 0;
          align-items: start;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(0,0,0,0.08);
        }
        
        @media (max-width: 1199px) {
          .split-container {
            grid-template-columns: 1fr 420px;
          }
        }
        
        @media (max-width: 991px) {
          .split-container {
            grid-template-columns: 1fr;
          }
        }
        
        .split-image-area {
          position: relative;
          height: 650px;
          overflow: hidden;
        }
        
        @media (max-width: 991px) {
          .split-image-area {
            height: 450px;
          }
        }
        
        .split-image-area img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.6s ease;
        }
        
        .split-menu-area {
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          gap: 0;
          background: #fff;
        }
        
        @media (max-width: 991px) {
          .split-menu-area {
            padding: 40px 30px;
          }
        }
        
        @media (max-width: 767px) {
          .split-menu-area {
            padding: 30px 20px;
          }
        }
        
        .service-accordion-item {
          background: transparent;
          border-radius: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
          border-bottom: 1px solid #e8e8e8;
        }
        
        .service-accordion-item:last-child {
          border-bottom: none;
        }
        
        .service-accordion-item:hover {
          background: #fafafa;
        }
        
        .service-accordion-item.active {
          background: #CDFF00;
          border-bottom-color: #CDFF00;
        }
        
        .service-accordion-header {
          padding: 24px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        
        .service-accordion-title {
          font-size: 19px;
          font-weight: 500;
          color: #1B1B1B;
          margin: 0;
          transition: color 0.3s ease;
        }
        
        .service-accordion-item.active .service-accordion-title {
          color: #1B1B1B;
        }
        
        .service-accordion-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        
        .service-accordion-icon i {
          font-size: 14px;
          color: #666;
          transition: all 0.3s ease;
        }
        
        .service-accordion-item.active .service-accordion-icon {
          transform: rotate(180deg);
        }
        
        .service-accordion-item.active .service-accordion-icon i {
          color: #1B1B1B;
        }
        
        .service-accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.4s ease;
          padding: 0 20px;
        }
        
        .service-accordion-item.active .service-accordion-content {
          max-height: 300px;
          padding: 0 20px 24px 20px;
        }
        
        .service-accordion-desc {
          font-size: 15px;
          color: #555;
          line-height: 1.7;
          margin-bottom: 16px;
        }
        
        .service-accordion-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #1B1B1B;
          font-size: 14px;
          font-weight: 500;
          text-decoration: underline;
        }
        
        .service-accordion-link:hover {
          gap: 12px;
        }
        
        .discover-more {
          margin-top: 60px;
          text-align: center;
        }
        
        .discover-more-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 56px;
          height: 56px;
          background: #CDFF00;
          border: none;
          border-radius: 50%;
          color: #1B1B1B;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .discover-more-btn:hover {
          background: #1B1B1B;
          color: #CDFF00;
          transform: scale(1.1);
        }
        
        .discover-more-btn i {
          font-size: 20px;
          transition: transform 0.3s ease;
        }
        
        .discover-more-btn:hover i {
          transform: translateY(2px);
        }
      `}</style>

      <section id="solutions" className="solutions-split section-gap">
        <div className="container">
          <AnimatedSection delay={0.2}>
            <div className="section-header-split">
              <div className="section-subtitle-split">
                Portfolio
              </div>
              <h2 className="section-title-split">
                HİZMETLERİMİZ
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="split-container">
              {/* Sol taraf - Görsel */}
              <div className="split-image-area">
                <Image
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  width={800}
                  height={600}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  priority
                />
              </div>

              {/* Sağ taraf - Accordion Menü */}
              <div className="split-menu-area">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={`service-accordion-item ${activeService === index ? 'active' : ''}`}
                    onClick={() => setActiveService(index)}
                  >
                    <div className="service-accordion-header">
                      <h3 className="service-accordion-title">{service.title}</h3>
                      <div className="service-accordion-icon">
                        <i className="tji-arrow-down"></i>
                      </div>
                    </div>
                    <div className="service-accordion-content">
                      <p className="service-accordion-desc">{service.desc}</p>
                      <a href={service.link} className="service-accordion-link">
                        See more →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="discover-more">
              <a href="/projects" className="discover-more-btn" title="Tüm projelerimizi görüntüle">
                <i className="tji-arrow-down"></i>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default SolutionsSectionSplit;
