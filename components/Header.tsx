'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Eğer ana sayfada değilsek, ana sayfaya git
    if (pathname !== '/') {
      router.push(`/#${targetId}`);
      return;
    }
    
    // Ana sayfadaysak smooth scroll
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* start: Header Area */}
      <header className="header-area header-1 header-absolute section-gap-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* site logo */}
                <div className="site_logo">
                  <a className="logo" href="/">
                    <Image 
                      alt="Galvanorm Logo" 
                      src="/images/Varlık 1.webp"
                      width={180}
                      height={60}
                      priority
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </a>
                </div>
                {/* navigation */}
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav className="mainmenu" id="mobile-menu">
                    <ul>
                      <li className={pathname === '/' ? 'current-menu-ancestor' : ''}>
                        <a href="/" style={{ color: pathname === '/' ? '#E9562D' : undefined }}>Anasayfa</a>
                      </li>
                      <li>
                        <a href="/#about" onClick={(e) => handleSmoothScroll(e, 'about')}>Hakkımızda</a>
                      </li>
                      <li className={pathname === '/about' ? 'current-menu-ancestor' : ''}>
                        <a href="/about" style={{ color: pathname === '/about' ? '#E9562D' : undefined }}>Şirketimiz</a>
                      </li>
                      <li>
                        <a href="/#solutions" onClick={(e) => handleSmoothScroll(e, 'solutions')}>Projelerimiz</a>
                      </li>
                      <li>
                        <a href="/#clients" onClick={(e) => handleSmoothScroll(e, 'clients')}>Referanslarımız</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* header right info */}
                <div className="header-right-item d-none d-lg-inline-flex">
                  <div className="header-button">
                    <a className="tj-primary-btn" href="/contact">
                      <span className="btn-text"><span>İletişim</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </a>
                  </div>
                  <div className="menu_bar menu_offcanvas d-none d-lg-inline-flex">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                {/* menu bar */}
                <div className="menu_bar mobile_menu_bar d-lg-none">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* end: Header Area */}

      {/* start: Sticky Header */}
      <header className="header-area header-1 header-duplicate header-sticky section-gap-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* site logo */}
                <div className="site_logo">
                  <a className="logo" href="/">
                    <Image 
                      alt="Galvanorm Logo" 
                      src="/images/Varlık 1.webp"
                      width={180}
                      height={60}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </a>
                </div>
                {/* navigation */}
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav className="mainmenu">
                    <ul>
                      <li className={pathname === '/' ? 'current-menu-ancestor' : ''}>
                        <a href="/" style={{ color: pathname === '/' ? '#E9562D' : undefined }}>Anasayfa</a>
                      </li>
                      <li>
                        <a href="/#about" onClick={(e) => handleSmoothScroll(e, 'about')}>Hakkımızda</a>
                      </li>
                      <li className={pathname === '/about' ? 'current-menu-ancestor' : ''}>
                        <a href="/about" style={{ color: pathname === '/about' ? '#E9562D' : undefined }}>Şirketimiz</a>
                      </li>
                      <li>
                        <a href="/#solutions" onClick={(e) => handleSmoothScroll(e, 'solutions')}>Projelerimiz</a>
                      </li>
                      <li>
                        <a href="/#clients" onClick={(e) => handleSmoothScroll(e, 'clients')}>Referanslarımız</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* header right info */}
                <div className="header-right-item d-none d-lg-inline-flex">
                  <div className="header-button">
                    <a className="tj-primary-btn" href="/contact">
                      <span className="btn-text"><span>İletişim</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </a>
                  </div>
                  <div className="menu_bar menu_offcanvas d-none d-lg-inline-flex">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                {/* menu bar */}
                <div className="menu_bar mobile_menu_bar d-lg-none">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* end: Sticky Header */}
    </>
  );
};

export default Header;
