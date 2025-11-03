'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { COMPANY_INFO } from '@/utils/constants';

const FooterSection: React.FC = () => {
  const [isKvkkModalOpen, setIsKvkkModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = () => {
    setIsKvkkModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsKvkkModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const modalContent = isKvkkModalOpen ? (
    <div 
      id="kvkk-modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.3s ease'
      }}
      onClick={closeModal}
    >
      <div 
        style={{
          background: '#fff',
          borderRadius: '12px',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideUp 0.3s ease'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div style={{
          padding: '30px',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '500',
            color: '#1a1a1a',
            margin: 0
          }}>
            Kişisel Verilerin Korunması Kanunu (KVKK)
          </h3>
          <button
            onClick={closeModal}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '32px',
              color: '#666',
              cursor: 'pointer',
              padding: '0',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#E9562D'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div style={{
          padding: '30px',
          overflowY: 'auto',
          flex: 1
        }}>
          <div style={{
            color: '#333',
            fontSize: '15px',
            lineHeight: '1.8'
          }}>
            <p style={{ marginBottom: '25px', fontSize: '16px', color: '#555' }}>
              Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, 
              <strong> GP GALVANO PROJE DANIŞMANLIK SAN. TİC. A.Ş.</strong> tarafından internet sitesi 
              ziyaretçilerine ilişkin kişisel verilerin işlenmesine dair bilgilendirme amacıyla hazırlanmıştır.
            </p>

            <h4 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '15px', color: '#1a1a1a' }}>
              1. Veri Sorumlusu
            </h4>
            <p style={{ marginBottom: '10px' }}>
              <strong>GP GALVANO PROJE DANIŞMANLIK SAN. TİC. A.Ş.</strong>
            </p>
            <p style={{ marginBottom: '5px' }}>
              <strong>Adres:</strong> Çerkeşli OSB Mahallesi İmes 8. Cadde No:23 Dilovası/Kocaeli
            </p>
            <p style={{ marginBottom: '5px' }}>
              <strong>E-posta:</strong> info@galvanoproje.com
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Telefon:</strong> 0-262-503-9553
            </p>

            <h4 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '15px', color: '#1a1a1a' }}>
              2. İşlenen Kişisel Veriler
            </h4>
            <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
              <li>IP adresi, çerez verileri, tarayıcı bilgileri</li>
              <li>Ziyaret tarih/saat bilgisi</li>
            </ul>

            <h4 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '15px', color: '#1a1a1a' }}>
              3. İşleme Amaçları
            </h4>
            <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
              <li>Site güvenliğinin sağlanması</li>
              <li>Ziyaretçi deneyiminin geliştirilmesi</li>
              <li>Site trafik analizlerinin yapılması</li>
            </ul>

            <h4 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '15px', color: '#1a1a1a' }}>
              4. Hukuki Sebep
            </h4>
            <p style={{ marginBottom: '20px' }}>
              Kişisel verileriniz, <strong>"veri sorumlusunun meşru menfaati"</strong> hukuki sebebine dayanarak, 
              otomatik yollarla işlenmektedir.
            </p>

            <h4 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '15px', color: '#1a1a1a' }}>
              5. Haklarınız
            </h4>
            <p style={{ marginBottom: '20px' }}>
              KVKK'nın 11. maddesi uyarınca; veri sahibi olarak, verilerinize erişim, düzeltme, silme, 
              işleme itiraz hakkınız bulunmaktadır.
            </p>

            <h4 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '15px', marginTop: '30px', color: '#1a1a1a' }}>
              İlgili Belgeler
            </h4>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px',
              marginBottom: '20px'
            }}>
              <a 
                href="/documents/kvkk-islenmesi-ilkeleri.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  background: '#f8f8f8',
                  borderRadius: '8px',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                  border: '1px solid #e0e0e0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E9562D';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#E9562D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8f8f8';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.borderColor = '#e0e0e0';
                }}
              >
                <span style={{ fontSize: '18px' }}>📄</span>
                <span>KVKK İşlenmesi İlkeleri için tıklayınız</span>
              </a>

              <a 
                href="/documents/iletisim-formu-aydinlatma-metni.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  background: '#f8f8f8',
                  borderRadius: '8px',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                  border: '1px solid #e0e0e0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E9562D';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#E9562D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8f8f8';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.borderColor = '#e0e0e0';
                }}
              >
                <span style={{ fontSize: '18px' }}>📄</span>
                <span>İletişim Formu Aydınlatma Metni için tıklayınız</span>
              </a>

              <a 
                href="/documents/veri-sahibi-basvuru-formu.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  background: '#f8f8f8',
                  borderRadius: '8px',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                  border: '1px solid #e0e0e0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E9562D';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#E9562D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8f8f8';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.borderColor = '#e0e0e0';
                }}
              >
                <span style={{ fontSize: '18px' }}>📄</span>
                <span>Veri Sahibi Başvuru Formu için tıklayınız</span>
              </a>

              <a 
                href="/documents/cerez-aydinlatma-metni.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  background: '#f8f8f8',
                  borderRadius: '8px',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                  border: '1px solid #e0e0e0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E9562D';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#E9562D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8f8f8';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.borderColor = '#e0e0e0';
                }}
              >
                <span style={{ fontSize: '18px' }}>📄</span>
                <span>Çerez Aydınlatma Metni için tıklayınız</span>
              </a>

              <a 
                href="/documents/kamera-aydinlatma-metni.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  background: '#f8f8f8',
                  borderRadius: '8px',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                  border: '1px solid #e0e0e0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E9562D';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#E9562D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8f8f8';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.borderColor = '#e0e0e0';
                }}
              >
                <span style={{ fontSize: '18px' }}>📄</span>
                <span>Kamera Aydınlatma Metni için tıklayınız</span>
              </a>

              <a 
                href="/documents/web-sitesi-gizlilik-politikasi.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  background: '#f8f8f8',
                  borderRadius: '8px',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                  border: '1px solid #e0e0e0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E9562D';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#E9562D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8f8f8';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.borderColor = '#e0e0e0';
                }}
              >
                <span style={{ fontSize: '18px' }}>📄</span>
                <span>Web Sitesi Gizlilik Politikası için tıklayınız</span>
              </a>
            </div>

            <p style={{ 
              marginTop: '30px', 
              paddingTop: '20px', 
              borderTop: '1px solid #e0e0e0',
              fontSize: '14px',
              color: '#666'
            }}>
              Son Güncelleme: Ocak 2025
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '20px 30px',
          borderTop: '1px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <button
            onClick={closeModal}
            className="tj-primary-btn"
          >
            <span className="btn-text"><span>Kapat</span></span>
            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  ) : null;

  return (
    <>
      <footer className="tj-footer-section footer-2 h5-footer h6-footer h8-footer section-gap-x">
        <div className="footer-main-area h8-footer-main">
          <div className="container">
            <div className="row justify-content-between">
              
              {/* Column 1 - Konum */}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget widget-contact h6-footer-contact h8-footer-contact">
                  <h5 className="title">Konum</h5>
                  <div className="footer-contact-info">
                    <div className="contact-item">
                      <span>{COMPANY_INFO.address.full}</span>
                    </div>
                    <div className="contact-item">
                      <a href={COMPANY_INFO.contact.phoneHref}>{COMPANY_INFO.contact.phone}</a>
                      <a href={COMPANY_INFO.contact.emailHref}>{COMPANY_INFO.contact.email}</a>
                    </div>
                    <div className="contact-item">
                      <span><i className="tji-clock"></i> {COMPANY_INFO.workingHours.display}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2 - Kurumsal */}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget footer-col-2 widget-nav-menu h6-footer-col-2 h8-footer-col-2">
                  <h5 className="title">Kurumsal</h5>
                  <ul>
                    <li><a href="#">Misyon-Vizyon</a></li>
                    <li><a href="#">Hakkımızda</a></li>
                    <li><a href="#">Etik</a></li>
                    <li><a href="#">Sürdürülebilirlik</a></li>
                    <li><a href="#">Sertifikalar</a></li>
                  </ul>
                </div>
              </div>

              {/* Column 3 - Kaynaklar */}
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="footer-widget footer-col-3 widget-nav-menu h6-footer-col-3 h8-footer-col-3">
                  <h5 className="title">Kaynaklar</h5>
                  <ul>
                    <li><a href="#">Kariyer</a></li>
                    <li><a href="#">İş İlanları</a></li>
                    <li><a href="#">SSS</a></li>
                    <li><a href="/contact">İletişim</a></li>
                    <li>
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                      >
                        KVKK
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 4 - Harita */}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget widget-map h6-footer-map h8-footer-map">
                  <h5 className="title">Harita</h5>
                  <div className="footer-map-container">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.8423456789!2d29.5123456!3d40.7890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ3JzIwLjQiTiAyOcKwMzAnNDQuNCJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str" 
                      width="100%" 
                      height="250" 
                      style={{ border: 0, borderRadius: '10px' }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="tj-copyright-area-2 h5-footer-copyright h8-footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright-content-area">
                  <div className="copyright-text">
                    <p>© 2025 Galvanorm Tüm hakları saklıdır</p>
                  </div>
                </div>
              </div>
            </div>
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
      </footer>

      {/* KVKK Modal - Portal ile body'ye render et */}
      {mounted && modalContent && createPortal(modalContent, document.body)}
    </>
  );
};

export default FooterSection;
