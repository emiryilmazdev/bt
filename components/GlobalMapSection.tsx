'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const stats = [
  { number: 25, label: 'Yıllık Tecrübe', suffix: '+' },
  { number: 200, label: 'Tamamlanan Proje', suffix: '+' },
  { number: 10, label: 'Ülke', suffix: '+' },
  { number: 100, label: 'Başarı Oranı', suffix: '%' },
];

const GlobalMapSection: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  React.useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(
              Math.round(increment * currentStep),
              stat.number
            );
            return newCounts;
          });
        } else {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      id="global-impact" 
      className="tj-contact-section section-gap-x"
    >
      <div className="container">
        {/* Main Heading */}
        <div className="row">
          <div className="col-12">
            <AnimatedSection>
              <div className="sec-heading text-center" style={{ marginBottom: '60px' }}>
                <span style={{
                  display: 'inline-block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#E9562D',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '15px'
                }}>
                  Global Impact
                </span>
                <h2 className="sec-title" style={{ marginBottom: '15px' }}>
                  Dünya Çapında <span>Etki</span> & <span>Başarı</span>
                </h2>
                <p style={{
                  fontSize: '16px',
                  color: '#666',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  25 yılı aşkın tecrübemizle, dünya genelinde yüzlerce projeye imza attık
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="row">
          <div className="col-12">
            <AnimatedSection delay={0.2}>
              <div className="stats-grid-wrapper">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-grid-item">
                    <div className="stat-number">
                      {counts[index]}{stat.suffix}
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Map Section */}
        <div className="row" style={{ marginTop: '80px' }}>
          <div className="col-12">
            <AnimatedSection delay={0.3}>
              <div className="text-center" style={{ marginBottom: '40px' }}>
                <h3 style={{ 
                  fontSize: '28px', 
                  fontWeight: '600', 
                  color: '#1a1a1a',
                  marginBottom: '8px'
                }}>
                  Çalıştığımız <span style={{ color: '#E9562D' }}>Ülkeler</span>
                </h3>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-11">
            <AnimatedSection delay={0.2}>
              <div className="global-map-wrapper">
                <div className="global-map-img">
                  <Image 
                    alt="Image" 
                    src="/images/GsYfrFpVHxXt.svg" 
                    width={1200}
                    height={600}
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy"
                  />
                  
                  {/* Location 1 - Morocco */}
                  <div 
                    className="location-indicator loc-1"
                    onMouseEnter={() => setActiveLocation(1)}
                    onMouseLeave={() => setActiveLocation(null)}
                  >
                    {activeLocation === 1 && (
                      <div className="location-tooltip">
                        <span>Fas</span>
                        <p>
                          1. Otomatik 1 Robotlu Askı Asitli Çinko Hattı<br/>
                          2. Otomatik 2 Robotlu Eloksal Hattı
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Location 2 - Mısır */}
                  <div 
                    className="location-indicator loc-2"
                    onMouseEnter={() => setActiveLocation(2)}
                    onMouseLeave={() => setActiveLocation(null)}
                  >
                    {activeLocation === 2 && (
                      <div className="location-tooltip">
                        <span>Mısır</span>
                        <p>
                          1. Otomatik 1 Robotlu Mangan ve Çinko Fosfat<br/>
                          2. Otomatik 2 Robotlu Bakır, Kalay, Nikel
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Location 3 - Italy */}
                  <div 
                    className="location-indicator loc-3"
                    onMouseEnter={() => setActiveLocation(3)}
                    onMouseLeave={() => setActiveLocation(null)}
                  >
                    {activeLocation === 3 && (
                      <div className="location-tooltip">
                        <span>İtalya</span>
                        <p>
                          1. Otomatik 1 Robotlu Krom Hattı<br/>
                          2. Otomatik 2 Robotlu Eloksal Hattı<br/>
                          3. Otomatik 1 Robotlu Askı Asitli Çinko Hattı
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Location 4 - Romanya */}
                  <div 
                    className="location-indicator loc-4"
                    onMouseEnter={() => setActiveLocation(4)}
                    onMouseLeave={() => setActiveLocation(null)}
                  >
                    {activeLocation === 4 && (
                      <div className="location-tooltip">
                        <span>Romanya</span>
                        <p>
                          1. Otomatik 2 Robotlu Bakır, Kalay, Nikel, Gümüş<br/>
                          2. Otomatik 1 Robotlu Mangan ve Çinko Fosfat
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Location 5 - Ukrayna */}
                  <div 
                    className="location-indicator loc-5"
                    onMouseEnter={() => setActiveLocation(5)}
                    onMouseLeave={() => setActiveLocation(null)}
                  >
                    {activeLocation === 5 && (
                      <div className="location-tooltip">
                        <span>Ukrayna</span>
                        <p>
                          1. Otomatik 1 Robotlu Krom Hattı<br/>
                          2. Otomatik 1 Robotlu Askı Asitli Çinko Hattı<br/>
                          3. Otomatik 2 Robotlu Eloksal Hattı
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Location 6 - Rusya */}
                  <div 
                    className="location-indicator loc-6"
                    onMouseEnter={() => setActiveLocation(6)}
                    onMouseLeave={() => setActiveLocation(null)}
                  >
                    {activeLocation === 6 && (
                      <div className="location-tooltip">
                        <span>Rusya</span>
                        <p>
                          1. Otomatik 2 Robotlu Bakır, Kalay, Nikel, Gümüş<br/>
                          2. Otomatik 1 Robotlu Mangan ve Çinko Fosfat<br/>
                          3. Otomatik 2 Robotlu Eloksal Hattı
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Location 7 - Almanya */}
                  <div 
                    className="location-indicator loc-7"
                    onMouseEnter={() => setActiveLocation(7)}
                    onMouseLeave={() => setActiveLocation(null)}
                  >
                    {activeLocation === 7 && (
                      <div className="location-tooltip">
                        <span>Almanya</span>
                        <p>
                          1. Otomatik 1 Robotlu Krom Hattı<br/>
                          2. Otomatik 2 Robotlu Bakır, Kalay, Nikel<br/>
                          3. Otomatik 1 Robotlu Askı Asitli Çinko Hattı
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Location 8 - Azerbeycan */}
                  <div 
                    className="location-indicator loc-8"
                    onMouseEnter={() => setActiveLocation(8)}
                    onMouseLeave={() => setActiveLocation(null)}
                  >
                    {activeLocation === 8 && (
                      <div className="location-tooltip">
                        <span>Azerbaycan</span>
                        <p>
                          1. Otomatik 1 Robotlu Krom Hattı<br/>
                          2. Otomatik 1 Robotlu Askı Asitli Çinko Hattı<br/>
                          3. Otomatik 1 Robotlu Mangan ve Çinko Fosfat<br/>
                          4. Otomatik 2 Robotlu Eloksal Hattı<br/>
                          5. Otomatik 2 Robotlu Bakır, Kalay, Nikel, Gümüş
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Clients Grid - Side Panel */}
        <div className="row align-items-center" style={{ marginTop: '60px' }}>
          <div className="col-lg-8">
            <AnimatedSection delay={0.4}>
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ 
                  fontSize: '32px', 
                  fontWeight: '600', 
                  color: '#1a1a1a',
                  marginBottom: '12px'
                }}>
                  Güvenilen <span style={{ color: '#E9562D' }}>İş Ortaklarımız</span>
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#666',
                  lineHeight: '1.6'
                }}>
                  Dünya çapında önde gelen firmalarla uzun vadeli iş birlikleri kuruyoruz
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <AnimatedSection delay={0.5}>
              <div className="clients-grid-wrapper">
                <div className="clients-grid">
                  
                  {/* Client 1 */}
                  <div className="client-grid-item">
                    <Image 
                      alt="Lafonte" 
                      src="/images/lafonte.webp"
                      width={150}
                      height={80}
                      style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>

                  {/* Client 2 */}
                  <div className="client-grid-item">
                    <Image 
                      alt="LM" 
                      src="/images/lm.webp"
                      width={150}
                      height={80}
                      style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>

                  {/* Client 3 */}
                  <div className="client-grid-item">
                    <Image 
                      alt="Progalvano" 
                      src="/images/progalvano.webp"
                      width={150}
                      height={80}
                      style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>

                  {/* Client 4 */}
                  <div className="client-grid-item">
                    <Image 
                      alt="Lafonte" 
                      src="/images/lafonte.webp"
                      width={150}
                      height={80}
                      style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>

                  {/* Client 5 */}
                  <div className="client-grid-item">
                    <Image 
                      alt="LM" 
                      src="/images/lm.webp"
                      width={150}
                      height={80}
                      style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>

                  {/* Client 6 */}
                  <div className="client-grid-item">
                    <Image 
                      alt="Progalvano" 
                      src="/images/progalvano.webp"
                      width={150}
                      height={80}
                      style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>

                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

      </div>
      <div className="bg-shape-1">
        <Image 
          alt="" 
          src="/images/pattern-2.svg" 
          width={200}
          height={200}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="bg-shape-2">
        <Image 
          alt="" 
          src="/images/pattern-3.svg" 
          width={200}
          height={200}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
};

export default GlobalMapSection;
