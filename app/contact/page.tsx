'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import MobileMenu from '@/components/MobileMenu';
import OffcanvasMenu from '@/components/OffcanvasMenu';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form gönderme işlemi buraya eklenecek
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <OffcanvasMenu />
      <MobileMenu />
      <Header />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
          padding: '120px 0 80px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            backgroundImage: 'radial-gradient(circle, #E9562D 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '300',
                color: '#fff',
                marginBottom: '20px',
                letterSpacing: '-0.02em'
              }}>
                Bizimle
                <span style={{ 
                  color: '#E9562D',
                  fontWeight: '500',
                  display: 'block',
                  marginTop: '10px'
                }}>İletişime Geçin</span>
              </h1>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '18px',
                lineHeight: '1.7',
                fontWeight: '300'
              }}>
                Projeleriniz için profesyonel çözümler sunmaya hazırız. Size en kısa sürede dönüş yapacağız.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section style={{ padding: '80px 0', background: '#fff' }}>
          <div className="container">
            <div className="row" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              
              {/* Contact Info */}
              <div style={{ flex: '1 1 350px' }}>
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: '500',
                  marginBottom: '30px',
                  color: '#1a1a1a'
                }}>
                  İletişim Bilgileri
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  {/* Address */}
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: '#E9562D',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <MapPinIcon style={{ width: '24px', height: '24px', color: '#fff' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px', color: '#1a1a1a' }}>
                        Adres
                      </h4>
                      <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                        Organize Sanayi Bölgesi<br/>
                        İstanbul, Türkiye
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: '#E9562D',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <PhoneIcon style={{ width: '24px', height: '24px', color: '#fff' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px', color: '#1a1a1a' }}>
                        Telefon
                      </h4>
                      <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                        +90 (212) 123 45 67<br/>
                        +90 (212) 123 45 68
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: '#E9562D',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <EnvelopeIcon style={{ width: '24px', height: '24px', color: '#fff' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px', color: '#1a1a1a' }}>
                        E-posta
                      </h4>
                      <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                        info@gpgalvano.com<br/>
                        sales@gpgalvano.com
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: '#E9562D',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <ClockIcon style={{ width: '24px', height: '24px', color: '#fff' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px', color: '#1a1a1a' }}>
                        Çalışma Saatleri
                      </h4>
                      <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                        Pazartesi - Cuma: 08:00 - 18:00<br/>
                        Cumartesi: 09:00 - 14:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div style={{ flex: '1 1 500px' }}>
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: '500',
                  marginBottom: '30px',
                  color: '#1a1a1a'
                }}>
                  Mesaj Gönderin
                </h3>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Adınız Soyadınız"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '15px',
                        fontWeight: '300',
                        transition: 'all 0.3s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#E9562D'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-posta Adresiniz"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        flex: '1 1 200px',
                        padding: '16px 20px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '15px',
                        fontWeight: '300',
                        transition: 'all 0.3s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#E9562D'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Telefon Numaranız"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        flex: '1 1 200px',
                        padding: '16px 20px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '15px',
                        fontWeight: '300',
                        transition: 'all 0.3s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#E9562D'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Konu"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '15px',
                        fontWeight: '300',
                        transition: 'all 0.3s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#E9562D'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Mesajınız"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '15px',
                        fontWeight: '300',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#E9562D'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="tj-primary-btn"
                    style={{
                      alignSelf: 'flex-start'
                    }}
                  >
                    <span className="btn-text"><span>Mesaj Gönder</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

          </main>

          <FooterSection />
        </div>
      </div>
    </>
  );
}
