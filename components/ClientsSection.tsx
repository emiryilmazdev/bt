'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const ClientsSection: React.FC = () => {
  return (
    <AnimatedSection delay={0.4}>
      <section 
        id="clients" 
        className="tj-client-section client-section-gap" 
        style={{ marginTop: '80px', marginBottom: '80px' }}
      >
      <div className="container-fluid client-container">
        <div className="row">
          <div className="col-12">
            <div className="swiper client-slider client-slider-1">
              <div className="swiper-wrapper">
                
                {/* Client 1 - Lafonte */}
                <div className="swiper-slide client-item">
                  <div className="client-logo">
                    <Image 
                      alt="Lafonte" 
                      src="/images/lafonte.webp"
                      width={150}
                      height={80}
                      style={{ maxWidth: '150px', height: 'auto' }}
                    />
                  </div>
                </div>

                {/* Client 2 - LM */}
                <div className="swiper-slide client-item">
                  <div className="client-logo">
                    <Image 
                      alt="LM" 
                      src="/images/lm.webp"
                      width={150}
                      height={80}
                      style={{ maxWidth: '150px', height: 'auto' }}
                    />
                  </div>
                </div>

                {/* Client 3 - Progalvano */}
                <div className="swiper-slide client-item">
                  <div className="client-logo">
                    <Image 
                      alt="Progalvano" 
                      src="/images/progalvano.webp"
                      width={150}
                      height={80}
                      style={{ maxWidth: '150px', height: 'auto' }}
                    />
                  </div>
                </div>

                {/* Client 4 - Lafonte (repeat) */}
                <div className="swiper-slide client-item">
                  <div className="client-logo">
                    <Image 
                      alt="Lafonte" 
                      src="/images/lafonte.webp"
                      width={150}
                      height={80}
                      style={{ maxWidth: '150px', height: 'auto' }}
                    />
                  </div>
                </div>

                {/* Client 5 - LM (repeat) */}
                <div className="swiper-slide client-item">
                  <div className="client-logo">
                    <Image 
                      alt="LM" 
                      src="/images/lm.webp"
                      width={150}
                      height={80}
                      style={{ maxWidth: '150px', height: 'auto' }}
                    />
                  </div>
                </div>

                {/* Client 6 - Progalvano (repeat) */}
                <div className="swiper-slide client-item">
                  <div className="client-logo">
                    <Image 
                      alt="Progalvano" 
                      src="/images/progalvano.webp"
                      width={150}
                      height={80}
                      style={{ maxWidth: '150px', height: 'auto' }}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </AnimatedSection>
  );
};

export default ClientsSection;
