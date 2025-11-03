'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {

  return (
    <section id="hero" className="tj-banner-section section-gap-x">
      <div className="banner-area">

        {/* Left Box - Content */}
        <div className="banner-left-box">
          <div className="banner-content">
            <span className="sub-title wow fadeInDown" data-wow-delay=".2s">
              <i className="tji-excellence"></i> 25 YILLIK DENEYİM
            </span>
            <h1 className="banner-title title-anim">
              GalvaNorm'a <span>Hoş Geldiniz</span>
            </h1>
            <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
              <a className="banner-link" href="about.html">
                <span style={{
                  display: 'inline-block',
                  animation: 'rotate3d 4s linear infinite'
                }}>
                  <Image
                    src="/images/favicon.svg"
                    alt="Galvanorm"
                    width={200}
                    height={200}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </span>
              </a>
              <div className="banner-desc">
                GalvaNorm'a hoş geldiniz. Endüstriyel kaplama teknolojilerinde yüksek kaliteyi, enerji verimliliğini ve sürdürülebilirliği bir araya getiriyoruz. Son teknoloji yarı ve tam otomatik kaplama tesislerimizle süreçlerinizi optimize ediyor, maliyetlerinizi en aza indiriyoruz.
              </div>
            </div>
          </div>
          <div className="banner-shape">
            <Image
              src="/images/qLNZY8G2Zoyp.webp"
              alt=""
              width={500}
              height={500}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Right Box - Hero Image */}
        <div className="banner-right-box">
          <div className="banner-img">
            <Image
              src="/images/galvanormhero.webp"
              alt="Galvanorm - Endüstriyel Galvaniz Kaplama Teknolojileri"
              width={800}
              height={600}
              priority
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px'
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
