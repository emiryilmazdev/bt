'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const SolutionsSection: React.FC = () => {
  return (
    <section 
      id="solutions" 
      className="tj-service-section-5 section-gap-x"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <AnimatedSection delay={0.3}>
              <div className="sec-heading style-4 text-center">
                <span className="sub-title">
                  <i className="tji-box"></i>Çözümlerimiz
                </span>
                <h2 className="sec-title">
                  Endüstriyel Galvaniz Kaplama Teknolojileri
                </h2>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-wrapper">

              {/* Service Card 1 - Katoforez */}
              <div className="service-item style-5 service-stack">
                <div className="service-content-area">
                  <div className="service-icon">
                    <i className="tji-service-1"></i>
                  </div>
                  <div className="service-content">
                    <span className="no">01.</span>
                    <h3 className="title">
                      <a href="/projects?tab=0">Katoforez Kaplama Tesisleri</a>
                    </h3>
                    <p className="desc">
                      Katoforez (KTL) sistemlerimiz, metal yüzeylere maksimum korozyon direnci kazandırır. Otomotiv ve beyaz eşya sektörlerinde fark yaratan dayanıklılık.
                    </p>
                    <a className="tj-primary-btn" href="/projects?tab=0">
                      <span className="btn-text"><span>Detaylı Bilgi</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </a>
                  </div>
                </div>
                <div className="service-img">
                  <Image
                    src="/images/project/katoforez1.jpg"
                    alt="Katoforez Kaplama Tesisleri"
                    width={300}
                    height={200}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Service Card 2 - Atık Su Arıtma */}
              <div className="service-item style-5 service-stack">
                <div className="service-content-area">
                  <div className="service-icon">
                    <i className="tji-service-2"></i>
                  </div>
                  <div className="service-content">
                    <span className="no">02.</span>
                    <h3 className="title">
                      <a href="/projects?tab=1">Atık Su Arıtma Tesisleri</a>
                    </h3>
                    <p className="desc">
                      Yüksek performanslı arıtma sistemlerimizle, çevresel sorumluluk bilinciyle suyun geri dönüşümünü sağlıyoruz. Doğaya zarar vermeden üretin.
                    </p>
                    <a className="tj-primary-btn" href="/projects?tab=1">
                      <span className="btn-text"><span>Detaylı Bilgi</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </a>
                  </div>
                </div>
                <div className="service-img">
                  <Image
                    src="/images/project/atiksu.jpg"
                    alt="Atık Su Arıtma Tesisleri"
                    width={300}
                    height={200}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Service Card 3 - Elektrik ve Yazılım */}
              <div className="service-item style-5 service-stack">
                <div className="service-content-area">
                  <div className="service-icon">
                    <i className="tji-service-3"></i>
                  </div>
                  <div className="service-content">
                    <span className="no">03.</span>
                    <h3 className="title">
                      <a href="/projects?tab=2">Elektrik ve Yazılım Sistemleri</a>
                    </h3>
                    <p className="desc">
                      Otomasyon, kontrol panoları ve yazılım entegrasyonlarıyla üretim tesislerinize akıl kazandırıyoruz. Endüstri 4.0'a bir adım daha yakın olun.
                    </p>
                    <a className="tj-primary-btn" href="/projects?tab=2">
                      <span className="btn-text"><span>Detaylı Bilgi</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </a>
                  </div>
                </div>
                <div className="service-img">
                  <Image
                    src="/images/project/elektrik.jpg"
                    alt="Elektrik ve Yazılım Sistemleri"
                    width={300}
                    height={200}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Service Card 4 - Otomatik Askı Kaplama */}
              <div className="service-item style-5 service-stack">
                <div className="service-content-area">
                  <div className="service-icon">
                    <i className="tji-service-1"></i>
                  </div>
                  <div className="service-content">
                    <span className="no">04.</span>
                    <h3 className="title">
                      <a href="/contact">Kimyasal Gaz Yıkama Sistemleri (SCRUBBER)</a>
                    </h3>
                    <p className="desc">
                      SCRUBBER sistemlerimiz, üretim süreçlerindeki zararlı gazları filtreleyerek hem çevreyi hem çalışan sağlığını korur. Endüstride sürdürülebilirliğin teminatı.
                    </p>
                    <a className="tj-primary-btn" href="/projects?tab=6">
                      <span className="btn-text"><span>Detaylı Bilgi</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </a>
                  </div>
                </div>
                <div className="service-img">
                  <Image
                    src="/images/project/kimsayalgazyikama.jpg"
                    alt="Kimyasal Gaz Yıkama Sistemleri"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Service Card 5 - Tambur Kaplama */}
              <div className="service-item style-5 service-stack">
                <div className="service-content-area">
                  <div className="service-icon">
                    <i className="tji-service-2"></i>
                  </div>
                  <div className="service-content">
                    <span className="no">05.</span>
                    <h3 className="title">
                      <a href="/projects?tab=4">Tam Otomatik Tambur Kaplama Tesisleri</a>
                    </h3>
                    <p className="desc">
                      Küçük parçaların yüksek hızda ve homojen şekilde kaplanmasını sağlayan otomatik tambur sistemlerimiz, dayanıklılık ve performansı bir araya getirir.
                    </p>
                    <a className="tj-primary-btn" href="/projects?tab=4">
                      <span className="btn-text"><span>Detaylı Bilgi</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </a>
                  </div>
                </div>
                <div className="service-img">
                  <Image
                    src="/images/project/tamotomatiktambur.jpg"
                    alt="Tam Otomatik Tambur Kaplama Tesisleri"
                    width={300}
                    height={200}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Service Card 6 - Eloksal */}
              <div className="service-item style-5 service-stack">
                <div className="service-content-area">
                  <div className="service-icon">
                    <i className="tji-service-3"></i>
                  </div>
                  <div className="service-content">
                    <span className="no">06.</span>
                    <h3 className="title">
                      <a href="/contact">Atık Su Arıtma Tesisleri</a>
                    </h3>
                    <p className="desc">
                      Yüksek performanslı arıtma sistemlerimizle, çevresel sorumluluk bilinciyle suyun geri dönüşümünü sağlıyoruz. Doğaya zarar vermeden üretin.
                    </p>
                    <a className="tj-primary-btn" href="/projects?tab=1">
                      <span className="btn-text"><span>Detaylı Bilgi</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </a>
                  </div>
                </div>
                <div className="service-img">
                  <Image
                    src="/images/project/atiksu.jpg"
                    alt="Atık Su Arıtma Tesisleri"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Service Card 7 - Scrubber */}
              <div className="service-item style-5">
                <div className="service-content-area">
                  <div className="service-icon">
                    <i className="tji-service-1"></i>
                  </div>
                  <div className="service-content">
                    <span className="no">07.</span>
                    <h3 className="title">
                      <a href="/projects?tab=6">Kimyasal Gaz Yıkama Sistemleri (SCRUBBER)</a>
                    </h3>
                    <p className="desc">
                      SCRUBBER sistemlerimiz, üretim süreçlerindeki zararlı gazları filtreleyerek hem çevreyi hem çalışan sağlığını korur. Endüstride sürdürülebilirliğin teminatı.
                    </p>
                    <a className="tj-primary-btn" href="/projects?tab=6">
                      <span className="btn-text"><span>Detaylı Bilgi</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </a>
                  </div>
                </div>
                <div className="service-img">
                  <Image
                    src="/images/project/kimsayalgazyikama.jpg"
                    alt="Kimyasal Gaz Yıkama Sistemleri"
                    width={300}
                    height={200}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              </div>

            </div>

            <div className="service-bottom-text">
              <p className="desc">
                <span>
                  <i className="tji-box"></i>Özel ihtiyaçlarınıza uygun galvaniz çözümleri için{' '}
                  <a href="/contact">Bizimle İletişime Geçin</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
