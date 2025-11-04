'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    id: 1,
    title: 'Katoforez Kaplama Tesisleri',
    shortTitle: 'Katoforez',
    subtitle: 'Yüksek Korozyon Direnci',
    desc: 'Katoforez (KTL) sistemlerimiz, metal yüzeylere maksimum korozyon direnci kazandırır. Otomotiv ve beyaz eşya sektörlerinde fark yaratan dayanıklılık sunuyoruz.',
    features: [
      'Tam otomatik kontrol ve PLC destekli izleme',
      'Enerji verimliliği ve kimyasal optimizasyonu',
      '1000 saat üzeri tuz püskürtme test dayanımı',
      'Yüksek yapışma gücü ve mükemmel yüzey kalitesi'
    ],
    images: [
      '/images/project/katoforez1.jpg',
      '/images/project/katoforez2.jpg',
      '/images/project/katoforez3.jpg'
    ]
  },
  {
    id: 2,
    title: 'Atık Su Arıtma Tesisleri',
    shortTitle: 'Atık Su Arıtma',
    subtitle: 'Sürdürülebilir Üretim',
    desc: 'Yüksek performanslı arıtma sistemlerimizle, çevresel sorumluluk bilinciyle suyun geri dönüşümünü sağlıyoruz.',
    features: [
      'Kimyasal çöktürme ve nötralizasyon',
      'PH, ORP sensörleri ile sürekli izleme',
      'Çevre Mevzuatına tam uyum',
      'Su tüketiminde %40 tasarruf'
    ],
    images: [
      '/images/project/atiksu.jpg',
      '/images/project/atiksu2.jpg',
      '/images/project/atiksu3.jpg',
      '/images/project/atiksu4.jpg'
    ]
  },
  {
    id: 3,
    title: 'Elektrik ve Yazılım Sistemleri',
    shortTitle: 'Elektrik & Yazılım',
    subtitle: 'Endüstri 4.0 Uyumlu',
    desc: 'PLC ve SCADA tabanlı kontrol sistemleriyle üretim hatlarınızı uzaktan yönetin.',
    features: [
      'Siemens, Schneider altyapılı sistemler',
      'Dokunmatik HMI paneller',
      'Endüstri 4.0 uyumlu veri toplama',
      '%100 izlenebilir üretim süreci'
    ],
    images: [
      '/images/project/elektrik.jpg',
      '/images/project/elektrik1.jpg',
      '/images/project/elektrik2.jpeg'
    ]
  },
  {
    id: 4,
    title: 'Kimyasal Gaz Yıkama (SCRUBBER)',
    shortTitle: 'Scrubber',
    subtitle: 'Temiz Hava Güvenli Alan',
    desc: 'SCRUBBER sistemlerimiz, üretim süreçlerindeki zararlı gazları filtreleyerek çevre ve çalışan sağlığını korur.',
    features: [
      'Karşı akışlı maksimum arıtma verimi',
      'Otomatik dozaj kontrolü',
      'ISO 14001 standartlarına uyum',
      'Emisyon sınırları < 5 mg/Nm³'
    ],
    images: [
      '/images/project/kimsayalgazyikama.jpg',
      '/images/project/kimsayalgazyikama1.jpg',
      '/images/project/kimsayalgazyikama2.jpg'
    ]
  },
  {
    id: 5,
    title: 'Tam Otomatik Tambur Kaplama',
    shortTitle: 'Tambur Kaplama',
    subtitle: 'Küçük Parçalar Büyük Hassasiyet',
    desc: 'Küçük parçaların yüksek hızda ve homojen şekilde kaplanmasını sağlayan otomatik tambur sistemlerimiz.',
    features: [
      'Kimyasal dirençli tamburlar',
      'Zaman kontrollü daldırma',
      'Tam otomatik yükleme-boşaltma',
      'Düşük kimyasal tüketimi'
    ],
    images: [
      '/images/project/tamotomatiktambur.jpg',
      '/images/project/tamotomatiktambur1.jpg',
      '/images/project/tamotomatiktambur2.jpg'
    ]
  },
  {
    id: 6,
    title: 'Eloksal Kaplama Tesisleri',
    shortTitle: 'Eloksal',
    subtitle: 'Estetik ve Dayanıklılık',
    desc: 'Alüminyum yüzeylere üstün koruma ve estetik görünüm kazandıran eloksal kaplama çözümlerimiz.',
    features: [
      'DC güç kaynakları ile hassas kontrol',
      'Renk eloksalı seçenekleri',
      'Soğutma sistemleri',
      'Maksimum yüzey dayanımı'
    ],
    images: [
      '/images/project/eloksalkaplama.jpg',
      '/images/project/eloksalkaplama1.jpg',
      '/images/project/eloksalkaplama2.jpg'
    ]
  }
];

const SolutionsSectionAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
      setCurrentImageIndex(0);
    }
  };

  const nextImage = (serviceIndex: number) => {
    const maxIndex = services[serviceIndex].images.length - 1;
    setCurrentImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevImage = (serviceIndex: number) => {
    const maxIndex = services[serviceIndex].images.length - 1;
    setCurrentImageIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <>
      <style jsx>{`
        .solutions-accordion {
          background: #fff;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          padding: 60px 60px 80px;
        }
        
        @media (max-width: 991px) {
          .solutions-accordion {
            padding: 50px 40px 60px;
          }
        }
        
        @media (max-width: 767px) {
          .solutions-accordion {
            padding: 40px 24px 50px;
          }
        }
        
        .section-header-accordion {
          margin-bottom: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        
        @media (max-width: 767px) {
          .section-header-accordion {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 40px;
          }
        }
        
        .section-title-accordion {
          font-size: clamp(32px, 4vw, 48px);
          color: #1B1B1B;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0;
        }
        
        .section-description-accordion {
          font-size: 16px;
          color: #737373;
          line-height: 1.6;
          max-width: 500px;
          margin: 0;
        }
        
        .accordion-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .accordion-item {
          background: #fafafa;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .accordion-item:hover {
          border-color: #e0e0e0;
        }
        
        .accordion-item.open {
          background: #fff;
          border-color: #E9562D;
          box-shadow: 0 8px 30px rgba(233, 86, 45, 0.12);
        }
        
        .accordion-header {
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          gap: 24px;
          transition: all 0.3s ease;
        }
        
        @media (max-width: 767px) {
          .accordion-header {
            padding: 20px 20px;
            gap: 16px;
          }
        }
        
        .accordion-header:hover {
          background: rgba(233, 86, 45, 0.03);
        }
        
        .accordion-left {
          display: flex;
          align-items: center;
          gap: 24px;
          flex: 1;
        }
        
        @media (max-width: 767px) {
          .accordion-left {
            gap: 16px;
          }
        }
        
        .accordion-number {
          font-size: 32px;
          font-weight: 700;
          color: #e0e0e0;
          line-height: 1;
          min-width: 60px;
          transition: all 0.3s ease;
        }
        
        .accordion-item.open .accordion-number {
          color: #E9562D;
        }
        
        @media (max-width: 767px) {
          .accordion-number {
            font-size: 24px;
            min-width: 40px;
          }
        }
        
        .accordion-title-area {
          flex: 1;
        }
        
        .accordion-title {
          font-size: clamp(18px, 2.5vw, 24px);
          font-weight: 600;
          color: #1B1B1B;
          margin: 0 0 4px;
          line-height: 1.3;
          transition: all 0.3s ease;
        }
        
        .accordion-item.open .accordion-title {
          color: #E9562D;
        }
        
        .accordion-subtitle {
          font-size: 14px;
          color: #999;
          margin: 0;
          transition: all 0.3s ease;
        }
        
        .accordion-item.open .accordion-subtitle {
          color: #666;
        }
        
        .accordion-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        
        .accordion-item.open .accordion-icon {
          background: #E9562D;
          transform: rotate(180deg);
        }
        
        .accordion-icon i {
          font-size: 20px;
          color: #999;
          transition: all 0.3s ease;
        }
        
        .accordion-item.open .accordion-icon i {
          color: #fff;
        }
        
        @media (max-width: 767px) {
          .accordion-icon {
            width: 40px;
            height: 40px;
          }
          
          .accordion-icon i {
            font-size: 16px;
          }
        }
        
        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease;
        }
        
        .accordion-item.open .accordion-content {
          max-height: 2000px;
        }
        
        .accordion-inner {
          padding: 0 32px 32px;
          display: grid;
          grid-template-columns: 1fr 500px;
          gap: 40px;
        }
        
        @media (max-width: 991px) {
          .accordion-inner {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 0 20px 24px;
          }
        }
        
        .accordion-text {
          padding-top: 8px;
        }
        
        .accordion-desc {
          font-size: 15px;
          color: #555;
          line-height: 1.8;
          margin-bottom: 28px;
        }
        
        .accordion-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .feature-item:last-child {
          border-bottom: none;
        }
        
        .feature-icon {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #E9562D, #ff7a50);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .feature-text {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }
        
        .accordion-image {
          position: relative;
          height: 400px;
          border-radius: 12px;
          overflow: hidden;
          background: #f0f0f0;
        }
        
        @media (max-width: 991px) {
          .accordion-image {
            height: 350px;
          }
        }
        
        @media (max-width: 767px) {
          .accordion-image {
            height: 280px;
          }
        }
        
        .accordion-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border: none;
          color: #fff;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }
        
        .slider-arrow:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: translateY(-50%) scale(1.1);
        }
        
        .slider-arrow-left {
          left: 12px;
        }
        
        .slider-arrow-right {
          right: 12px;
        }
        
        .slider-counter {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          color: #fff;
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 600;
          z-index: 10;
        }
        
        .slider-dots {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          padding: 8px 12px;
          border-radius: 16px;
          z-index: 10;
        }
        
        .slider-dot {
          width: 6px;
          height: 6px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .slider-dot.active {
          width: 20px;
          background: #fff;
        }
      `}</style>

      <section id="solutions" className="solutions-accordion section-gap section-gap-x">
        <div className="container" style={{ maxWidth: '100%', padding: '0' }}>
          <AnimatedSection delay={0.2}>
            <div className="section-header-accordion">
              <h2 className="section-title-accordion">
                Hizmetlerimiz
              </h2>
              <p className="section-description-accordion">
                25 yıllık deneyimimizle endüstriyel galvaniz kaplama teknolojilerinde yenilikçi çözümler sunuyoruz.
              </p>
            </div>
          </AnimatedSection>

          <div className="accordion-list">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={0.1 * (index + 1)}>
                <div className={`accordion-item ${openIndex === index ? 'open' : ''}`}>
                  <div 
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="accordion-left">
                      <div className="accordion-number">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="accordion-title-area">
                        <h3 className="accordion-title">{service.title}</h3>
                        <p className="accordion-subtitle">{service.subtitle}</p>
                      </div>
                    </div>
                    <div className="accordion-icon">
                      <i className="tji-arrow-down"></i>
                    </div>
                  </div>

                  <div className="accordion-content">
                    <div className="accordion-inner">
                      <div className="accordion-text">
                        <p className="accordion-desc">{service.desc}</p>
                        <ul className="accordion-features">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="feature-item">
                              <div className="feature-icon">✓</div>
                              <div className="feature-text">{feature}</div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="accordion-image">
                        <Image
                          src={service.images[currentImageIndex]}
                          alt={service.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />

                        {service.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                prevImage(index);
                              }}
                              className="slider-arrow slider-arrow-left"
                            >
                              ‹
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                nextImage(index);
                              }}
                              className="slider-arrow slider-arrow-right"
                            >
                              ›
                            </button>

                            <div className="slider-counter">
                              {currentImageIndex + 1} / {service.images.length}
                            </div>

                            <div className="slider-dots">
                              {service.images.map((_, idx) => (
                                <div
                                  key={idx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(idx);
                                  }}
                                  className={`slider-dot ${currentImageIndex === idx ? 'active' : ''}`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
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

export default SolutionsSectionAccordion;
