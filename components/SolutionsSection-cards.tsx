'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const services = [
    {
        id: 1,
        title: 'Katoforez Kaplama Tesisleri',
        desc: 'Metal yüzeylere maksimum korozyon direnci kazandıran KTL sistemleri.',
        image: '/images/project/katoforez1.jpg',
        link: '/projects?tab=0',
        icon: 'tji-service-1'
    },
    {
        id: 2,
        title: 'Atık Su Arıtma Tesisleri',
        desc: 'Çevresel sorumluluk bilinciyle suyun geri dönüşümünü sağlayan sistemler.',
        image: '/images/project/atiksu.jpg',
        link: '/projects?tab=1',
        icon: 'tji-service-2'
    },
    {
        id: 3,
        title: 'Elektrik ve Yazılım Sistemleri',
        desc: 'Otomasyon ve kontrol sistemleriyle Endüstri 4.0 çözümleri.',
        image: '/images/project/elektrik.jpg',
        link: '/projects?tab=2',
        icon: 'tji-service-3'
    },
    {
        id: 4,
        title: 'Kimyasal Gaz Yıkama',
        desc: 'Zararlı gazları filtreleyerek çevre ve çalışan sağlığını koruyan sistemler.',
        image: '/images/project/kimsayalgazyikama.jpg',
        link: '/projects?tab=6',
        icon: 'tji-service-1'
    },
    {
        id: 5,
        title: 'Tam Otomatik Tambur Kaplama',
        desc: 'Küçük parçaların homojen kaplanması için otomatik tambur sistemleri.',
        image: '/images/project/tamotomatiktambur.jpg',
        link: '/projects?tab=4',
        icon: 'tji-service-2'
    },
    {
        id: 6,
        title: 'Eloksal Kaplama Tesisleri',
        desc: 'Alüminyum yüzeylere üstün koruma ve estetik görünüm.',
        image: '/images/project/atiksu.jpg',
        link: '/projects?tab=5',
        icon: 'tji-service-3'
    }
];

const SolutionsSectionCards: React.FC = () => {
    return (
        <>
            <style jsx>{`
        .solutions-cards {
          background: #F5F5F5;
          position: relative;
        }
        
        .solutions-grid-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }
        
        @media (max-width: 767px) {
          .solutions-grid-cards {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        
        .service-card-clean {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .service-card-clean:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .service-image-card {
          width: 100%;
          height: 280px;
          overflow: hidden;
          position: relative;
        }
        
        .service-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        
        .service-card-clean:hover .service-image-card img {
          transform: scale(1.1);
        }
        
        .service-number-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 50px;
          height: 50px;
          background: #E9562D;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          z-index: 2;
        }
        
        .service-content-card {
          padding: 30px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .service-icon-card {
          font-size: 40px;
          color: #E9562D;
          margin-bottom: 20px;
        }
        
        .service-title-card {
          font-size: 22px;
          font-weight: 600;
          color: #1B1B1B;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        
        .service-desc-card {
          font-size: 15px;
          color: #737373;
          line-height: 1.7;
          margin-bottom: 24px;
          flex: 1;
        }
        
        .service-link-card {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #E9562D;
          font-size: 15px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .service-link-card i {
          font-size: 18px;
          transition: transform 0.3s ease;
        }
        
        .service-card-clean:hover .service-link-card i {
          transform: translateX(5px);
        }
        
        .section-header-cards {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }
        
        @media (max-width: 767px) {
          .section-header-cards {
            margin-bottom: 40px;
          }
        }
        
        .section-subtitle-cards {
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
        
        .section-title-cards {
          font-size: clamp(32px, 5vw, 48px);
          color: #1B1B1B;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        
        .section-desc-cards {
          font-size: 17px;
          color: #737373;
          line-height: 1.7;
        }
      `}</style>

            <section id="solutions" className="solutions-cards section-gap">
                <div className="container">
                    <AnimatedSection delay={0.2}>
                        <div className="section-header-cards">
                            <div className="section-subtitle-cards">
                                <i className="tji-box"></i>
                                HİZMETLERİMİZ
                            </div>
                            <h2 className="section-title-cards">
                                Endüstriyel Galvaniz Kaplama Teknolojileri
                            </h2>
                            <p className="section-desc-cards">
                                25 yıllık deneyimimizle, yüzey işleme tesislerinde yenilikçi çözümler sunuyoruz.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="solutions-grid-cards">
                        {services.map((service, index) => (
                            <AnimatedSection key={service.id} delay={0.1 * (index + 1)}>
                                <a href={service.link} className="service-card-clean">
                                    <div className="service-image-card">
                                        <div className="service-number-badge">{String(service.id).padStart(2, '0')}</div>
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={400}
                                            height={280}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="service-content-card">
                                        <i className={`${service.icon} service-icon-card`}></i>
                                        <h3 className="service-title-card">{service.title}</h3>
                                        <p className="service-desc-card">{service.desc}</p>
                                        <span className="service-link-card">
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

export default SolutionsSectionCards;
