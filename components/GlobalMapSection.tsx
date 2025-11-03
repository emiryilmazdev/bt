'use client';

import React from 'react';
import Image from 'next/image';

const GlobalMapSection: React.FC = () => {
  return (
    <section id="global-map" className="tj-contact-section section-gap section-gap-x" style={{ marginTop: '80px' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <h2 className="sec-title title-anim">
                Çalıştığımız <span>Ülkeler</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-11">
            <div className="global-map-wrapper">
              <div className="global-map-img">
                <Image 
                  alt="Image" 
                  src="/images/GsYfrFpVHxXt.svg" 
                  width={1200}
                  height={600}
                  style={{ width: '100%', height: 'auto' }}
                />
                
                {/* Location 1 - Morocco */}
                <div className="location-indicator loc-1">
                  <div className="location-tooltip">
                    <span>Fas</span>
                    <p>
                      1. Otomatik 1 Robotlu Askı Asitli Çinko Hattı<br/>
                      2. Otomatik 2 Robotlu Eloksal Hattı
                    </p>
                  </div>
                </div>

                {/* Location 2 - Mısır */}
                <div className="location-indicator loc-2">
                  <div className="location-tooltip">
                    <span>Mısır</span>
                    <p>
                      1. Otomatik 1 Robotlu Mangan ve Çinko Fosfat<br/>
                      2. Otomatik 2 Robotlu Bakır, Kalay, Nikel
                    </p>
                  </div>
                </div>

                {/* Location 3 - Italy */}
                <div className="location-indicator loc-3">
                  <div className="location-tooltip">
                    <span>İtalya</span>
                    <p>
                      1. Otomatik 1 Robotlu Krom Hattı<br/>
                      2. Otomatik 2 Robotlu Eloksal Hattı<br/>
                      3. Otomatik 1 Robotlu Askı Asitli Çinko Hattı
                    </p>
                  </div>
                </div>

                {/* Location 4 - Romanya */}
                <div className="location-indicator loc-4">
                  <div className="location-tooltip">
                    <span>Romanya</span>
                    <p>
                      1. Otomatik 2 Robotlu Bakır, Kalay, Nikel, Gümüş<br/>
                      2. Otomatik 1 Robotlu Mangan ve Çinko Fosfat
                    </p>
                  </div>
                </div>

                {/* Location 5 - Ukrayna */}
                <div className="location-indicator loc-5">
                  <div className="location-tooltip">
                    <span>Ukrayna</span>
                    <p>
                      1. Otomatik 1 Robotlu Krom Hattı<br/>
                      2. Otomatik 1 Robotlu Askı Asitli Çinko Hattı<br/>
                      3. Otomatik 2 Robotlu Eloksal Hattı
                    </p>
                  </div>
                </div>

                {/* Location 6 - Rusya */}
                <div className="location-indicator loc-6">
                  <div className="location-tooltip">
                    <span>Rusya</span>
                    <p>
                      1. Otomatik 2 Robotlu Bakır, Kalay, Nikel, Gümüş<br/>
                      2. Otomatik 1 Robotlu Mangan ve Çinko Fosfat<br/>
                      3. Otomatik 2 Robotlu Eloksal Hattı
                    </p>
                  </div>
                </div>

                {/* Location 7 - Almanya */}
                <div className="location-indicator loc-7">
                  <div className="location-tooltip">
                    <span>Almanya</span>
                    <p>
                      1. Otomatik 1 Robotlu Krom Hattı<br/>
                      2. Otomatik 2 Robotlu Bakır, Kalay, Nikel<br/>
                      3. Otomatik 1 Robotlu Askı Asitli Çinko Hattı
                    </p>
                  </div>
                </div>

                {/* Location 8 - Azerbeycan */}
                <div className="location-indicator loc-8">
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
                </div>

              </div>
            </div>
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
