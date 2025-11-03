'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShieldCheckIcon, 
  ChartBarIcon,
  CogIcon,
  SparklesIcon,
  ClipboardDocumentCheckIcon,
  LockClosedIcon 
} from '@heroicons/react/24/outline';

const AboutSection: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState<number | null>(null);
  
  const icons = [
    { Icon: ShieldCheckIcon, text: 'Kalite ve Güvenli Hizmet Anlayışı' },
    { Icon: ChartBarIcon, text: 'Stratejik Hedefler' },
    { Icon: CogIcon, text: 'Yenilikçi Mühendislik Çözümleri' },
    { Icon: SparklesIcon, text: 'Sürdürülebilir ve Yenilikçi Çözümler' },
    { Icon: ClipboardDocumentCheckIcon, text: 'Standartlarımız ve Politikalarımız' },
    { Icon: LockClosedIcon, text: 'Güçlü ve Güvenli Altyapı' }
  ];
  
  return (
    <>
      <style jsx>{`
        .about-section-responsive {
          position: relative;
          overflow: hidden;
          background: #000;
          min-height: 700px;
          margin-top: 80px;
        }
        
        @media (max-width: 991px) {
          .about-section-responsive {
            min-height: 700px;
            margin-top: 60px;
          }
          .about-content-wrapper {
            left: 40px !important;
            right: 40px !important;
            top: 40px !important;
            bottom: 140px !important;
            max-width: calc(100% - 80px) !important;
          }
          .about-icons-wrapper {
            bottom: 40px !important;
            right: 40px !important;
            left: 40px !important;
            top: auto !important;
          }
          .about-icons-container {
            gap: 20px !important;
            justify-content: center !important;
          }
          .about-paragraph {
            font-size: 16px !important;
            margin-bottom: 24px !important;
          }
          .about-tooltip {
            white-space: normal !important;
            max-width: 200px !important;
            right: auto !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
          }
        }
        
        @media (max-width: 767px) {
          .about-section-responsive {
            min-height: 650px;
            margin-top: 40px;
          }
          .about-content-wrapper {
            left: 20px !important;
            right: 20px !important;
            top: 30px !important;
            bottom: 120px !important;
            max-width: calc(100% - 40px) !important;
            gap: 20px !important;
          }
          .about-title {
            padding-left: 16px !important;
            border-left-width: 2px !important;
          }
          .about-paragraph {
            font-size: 15px !important;
            margin-bottom: 20px !important;
            line-height: 1.6 !important;
          }
          .about-icons-wrapper {
            bottom: 20px !important;
            right: 20px !important;
            left: 20px !important;
            top: auto !important;
          }
          .about-icons-container {
            gap: 16px !important;
          }
          .about-icon {
            width: 28px !important;
            height: 28px !important;
          }
          .about-tooltip {
            font-size: 12px !important;
            padding: 10px 16px !important;
            max-width: 180px !important;
          }
        }
      `}</style>
      
      <section id="about" className="tj-about-intro-section section-gap-x about-section-responsive">
        {/* Background Video - Full Section */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden'
        }}>
          <iframe 
            src="https://player.vimeo.com/video/1123652493?badge=0&autopause=0&autoplay=1&muted=1&loop=1&background=1" 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100vw',
              height: '56.25vw',
              minHeight: '100%',
              minWidth: '177.77vh',
              border: 'none'
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            title="Galvanorm Video"
          ></iframe>
        </div>

        {/* Gradient Overlay - Minimal */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          pointerEvents: 'none',
          zIndex: 1
        }}></div>

        {/* Content - Left Side */}
        <div className="about-content-wrapper" style={{
          position: 'absolute',
          top: '60px',
          left: '60px',
          bottom: '60px',
          zIndex: 2,
          maxWidth: '650px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          {/* Title */}
          <div className="about-title" style={{
            borderLeft: '3px solid #E9562D',
            paddingLeft: '24px'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              fontWeight: '300',
              color: '#fff',
              lineHeight: '1.3',
              margin: 0,
              letterSpacing: '-0.02em'
            }}>
              Yenilikçi ve Sürdürülebilir<br/>
              <span style={{ 
                color: '#E9562D',
                fontWeight: '500'
              }}>Yüzey İşleme Hatları</span>
            </h2>
          </div>

          {/* Bottom Content */}
          <div className="about-bottom-content">
            <p className="about-paragraph" style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '17px',
              lineHeight: '1.7',
              marginBottom: '32px',
              fontWeight: '300',
              letterSpacing: '0.01em'
            }}>
              <span style={{ 
                color: '#E9562D',
                fontWeight: '400'
              }}>GP Galvano Proje</span>, 1999 yılından bu yana yüzey işleme tesisleri alanında yenilikçi ve güvenilir çözümler sunmaktadır. 25 yılı aşkın tecrübemizle, hem yurt içinde hem de uluslararası projelerde sektörün öncü firmalarından biri olduk.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <a 
                className="tj-primary-btn" 
                href="/about" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="btn-text"><span>Hakkımızda</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
              </a>
              <a 
                className="tj-primary-btn" 
                href="/projects"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <span className="btn-text"><span>Referanslar</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
              </a>
            </div>
          </div>
        </div>

        {/* Icons - Bottom Right */}
        <div className="about-icons-wrapper" style={{
          position: 'absolute',
          bottom: '60px',
          right: '60px',
          zIndex: 2
        }}>
          <div className="about-icons-container" style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            {icons.map((item, index) => {
              const IconComponent = item.Icon;
              return (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => setActiveIcon(activeIcon === index ? null : index)}
                >
                  <IconComponent
                    className="about-icon"
                    style={{ 
                      width: '32px',
                      height: '32px',
                      color: activeIcon === index ? '#E9562D' : 'rgba(255, 255, 255, 0.7)',
                      display: 'block',
                      strokeWidth: 1.5,
                      transition: 'all 0.2s ease',
                      opacity: activeIcon === index ? 1 : 0.7
                    }}
                  />
                  
                  {/* Tooltip */}
                  {activeIcon === index && (
                    <div className="about-tooltip" style={{
                      position: 'absolute',
                      bottom: '45px',
                      right: '0',
                      background: '#fff',
                      color: '#000',
                      padding: '12px 20px',
                      fontSize: '13px',
                      fontWeight: '400',
                      whiteSpace: 'nowrap',
                      zIndex: 10,
                      letterSpacing: '0.02em',
                      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.15)',
                      borderLeft: '3px solid #E9562D',
                      borderRadius: '4px'
                    }}>
                      {item.text}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Background Shapes */}
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
      </section>
    </>
  );
};

export default AboutSection;
