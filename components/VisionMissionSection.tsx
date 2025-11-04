'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const VisionMissionSection: React.FC = () => {
  return (
    <section 
      id="vision-mission" 
      className="tj-service-section service-2 section-gap-x slidebar-stickiy-container"
    >
      <div className="container">
        <div className="row">
          
          {/* Left Column - Sticky Header */}
          <div className="col-lg-4">
            <div className="content-wrap slidebar-stickiy">
              <AnimatedSection delay={0.3}>
                <div className="sec-heading style-2">
                  <span className="sub-title">Hizmetlerimiz</span>
                  <h2 className="sec-title text-white">
                    Kaliteyle <span>Güven</span>, İnovasyon ile <span>Değer</span> Yaratıyoruz
                  </h2>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.6}>
                <a className="tj-primary-btn" href="service.html">
                  <span className="btn-text"><span>Hizmetlerimizi Keşfedin</span></span>
                  <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                </a>
              </AnimatedSection>
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="col-lg-8">
            <div className="service-wrapper-2">
              
              {/* Service 1 - Kaplama Teknolojisi */}
              <AnimatedSection direction="right" className="service-item-wrapper">
                <div className="service-item style-2">
                  <div className="title-area">
                    <div className="service-icon">
                      <i className="tji-service-1"></i>
                    </div>
                    <h4 className="title">
                      <a href="service-details.html">Kaplama Teknolojisinde Yenilikçi Olmak</a>
                    </h4>
                  </div>
                  <div className="service-content">
                    <p className="desc">
                      GalvaNorm, GP Galvano Proje&apos;nin tescilli markası olarak, müşteri ihtiyaçlarını 
                      anlamanın başarının anahtarı olduğunu biliyordu. Bu yüzden işe dinleyerek başladılar 
                      - gerçek anlamda dinleyerek.
                    </p>
                    <ul className="list-items">
                      <li><i className="tji-list"></i>Özel Gereksinimler İçin Uyarlama</li>
                      <li><i className="tji-list"></i>Verimlilik ve Sürdürülebilirlik</li>
                      <li><i className="tji-list"></i>Maliyet Tasarrufu Çözümleri</li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>

              {/* Service 2 - Vizyonumuz */}
              <AnimatedSection direction="right" delay={0.1} className="service-item-wrapper">
                <div className="service-item style-2">
                  <div className="title-area">
                    <div className="service-icon">
                      <i className="tji-service-2"></i>
                    </div>
                    <h4 className="title">
                      <a href="service-details.html">Vizyonumuz</a>
                    </h4>
                  </div>
                  <div className="service-content">
                    <p className="desc">
                      GP Galvanorm Proje olarak, geleceği inşa eden mühendislik ve yüzey işlem çözümleri ile 
                      sanayiye değer katmayı hedefliyoruz. Teknoloji, inovasyon ve sürdürülebilirliği 
                      odağımıza alarak yüksek kalite standartlarında projeler geliştiriyoruz.
                    </p>
                    <ul className="list-items">
                      <li><i className="tji-list"></i>Küresel Ölçekte Liderlik</li>
                      <li><i className="tji-list"></i>Sürdürülebilir Teknolojiler</li>
                      <li><i className="tji-list"></i>Sanayinin Dönüşümüne Öncülük</li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>

              {/* Service 3 - Misyonumuz */}
              <AnimatedSection direction="right" delay={0.2} className="service-item-wrapper">
                <div className="service-item style-2">
                  <div className="title-area">
                    <div className="service-icon">
                      <i className="tji-service-3"></i>
                    </div>
                    <h4 className="title">
                      <a href="service-details.html">Misyonumuz</a>
                    </h4>
                  </div>
                  <div className="service-content">
                    <p className="desc">
                      GP Galvanorm Proje olarak, yüksek mühendislik çözümleri ve sürdürülebilir teknolojilerle 
                      sanayinin geleceğini şekillendirmeyi misyon edindik. Yüzey işlem teknolojilerinde 
                      mükemmeliyetci yaklaşım sergiliyoruz.
                    </p>
                    <ul className="list-items">
                      <li><i className="tji-list"></i>Müşteri Odaklı Çözümler</li>
                      <li><i className="tji-list"></i>Mühendislikle Gelecek İnşası</li>
                      <li><i className="tji-list"></i>Kalıcı Değer Katma</li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>

              {/* Service 4 - Değerlerimiz & Taahhüdümüz */}
              <AnimatedSection direction="right" delay={0.3} className="service-item-wrapper">
                <div className="service-item style-2">
                  <div className="title-area">
                    <div className="service-icon">
                      <i className="tji-service-4"></i>
                    </div>
                    <h4 className="title">
                      <a href="service-details.html">Değerlerimiz & Taahhüdümüz</a>
                    </h4>
                  </div>
                  <div className="service-content">
                    <p className="desc">
                      Bizim için işimiz sadece hizmet sunmak değil, sanayiye yön veren bir güç olmaktır. 
                      İş sağlığı ve güvenliği ön planda tutarak, çevreye duyarlı üretim anlayışımızla 
                      sürdürülebilir çözümler sunuyoruz.
                    </p>
                    <ul className="list-items">
                      <li><i className="tji-list"></i>Sürdürülebilirlik ve İnovasyon</li>
                      <li><i className="tji-list"></i>Dürüstlük ve Etik Değerler</li>
                      <li><i className="tji-list"></i>Çevre Dostu Üretim</li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>

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

export default VisionMissionSection;
