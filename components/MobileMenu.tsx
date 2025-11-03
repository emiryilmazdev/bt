'use client';

import Image from 'next/image';
import { COMPANY_INFO } from '@/utils/constants';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function MobileMenu() {
  return (
    <>
      {/* Hamburger Menu for Mobile (d-lg-none) */}
      <div className="hamburger-area d-lg-none">
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <a className="mobile_logo" href="/">
                  <Image 
                    alt="Logo" 
                    src="/images/Varlık 1.webp"
                    width={180}
                    height={60}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </a>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn">
                  <XMarkIcon style={{ width: '24px', height: '24px' }} />
                </button>
              </div>
            </div>
            <div className="hamburger_menu">
              <div className="mobile_menu"></div>
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title">Bize Ulaşın</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="subtitle">Telefon</span>
                  <a className="contact-link" href={COMPANY_INFO.contact.phoneHref}>
                    {COMPANY_INFO.contact.phone}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">E Posta</span>
                  <a className="contact-link" href={COMPANY_INFO.contact.emailHref}>
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Adres</span>
                  <span className="contact-link">
                    {COMPANY_INFO.address.short}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">İletişim</h5>
            <div className="social-links style-3">
              <ul>
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#fff', opacity: 1 }}>
                    <FaFacebookF style={{ color: '#000' }} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#fff', opacity: 1 }}>
                    <FaInstagram style={{ color: '#000' }} />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#fff', opacity: 1 }}>
                    <FaYoutube style={{ color: '#000' }} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#fff', opacity: 1 }}>
                    <FaLinkedinIn style={{ color: '#000' }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
