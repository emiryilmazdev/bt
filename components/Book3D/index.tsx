'use client';

import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAtom } from "jotai";
import { Experience } from "./Experience";
import { pageAtom, pages } from "./UI";

export const Book3D = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useAtom(pageAtom);
  
  useEffect(() => {
    setMounted(true);
    
    // Intersection Observer - Lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Klavye kısayolları
  useEffect(() => {
    if (!isZoomed) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'Escape':
          setIsZoomed(false);
          break;
        case 'ArrowLeft':
          if (page > 0) {
            setPage(page - 1);
          }
          break;
        case 'ArrowRight':
          if (page < pages.length - 1) {
            setPage(page + 1);
          }
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed, page, setPage]);
  
  const cameraPosition = useMemo(() => {
    if (typeof window === "undefined") return [0, 0.5, 4] as [number, number, number];
    return [0, 0.5, window.innerWidth > 800 ? 4 : 5] as [number, number, number];
  }, []);

  return (
    <>
      <div 
        style={{
          width: '100%',
          height: '350px',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        {/* 3D Kitap Canvas - Normal */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'pointer',
        }}
        onClick={() => setIsZoomed(true)}
      >
        {isVisible ? (
          <Canvas
            shadows
            camera={{ position: cameraPosition, fov: 45 }}
            style={{ background: 'transparent', width: '100%', height: '100%' }}
          >
            <group position-y={0}>
              <Suspense fallback={null}>
                <Experience />
              </Suspense>
            </group>
          </Canvas>
        ) : (
          <div className="book3d-loading">
            <div className="loading-spinner"></div>
            <p className="loading-text">3D Katalog Yüklüyor...</p>
          </div>
        )}
        </div>

        {/* İpucu */}
        {!isZoomed && (
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '13px',
            pointerEvents: 'none',
            zIndex: 10,
          }}>
            Tıklayarak büyüt
          </div>
        )}
        </div>

      {/* Zoom Canvas - Çerçevesiz Body'ye portal ile */}
      {isZoomed && mounted && createPortal(
        <>
          {/* Arka plan blur overlay */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              zIndex: 9998,
            }}
          />
          
          {/* Kitap - Tam Ekran */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 9999,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Canvas
              shadows
              camera={{ position: cameraPosition, fov: 45 }}
              style={{ background: 'transparent', width: '100%', height: '100%' }}
            >
              <group position-y={0}>
                <Suspense fallback={null}>
                  <Experience />
                </Suspense>
              </group>
            </Canvas>
          </div>

          {/* Kapat butonu */}
          <button
            onClick={() => setIsZoomed(false)}
            className="book3d-close-btn"
            style={{
              position: 'fixed',
              top: 'clamp(10px, 3%, 40px)',
              right: 'clamp(10px, 3%, 40px)',
              width: 'clamp(45px, 8vw, 55px)',
              height: 'clamp(45px, 8vw, 55px)',
              borderRadius: '50%',
              border: '2px solid rgba(198, 162, 93, 0.8)',
              background: 'rgba(255, 255, 255, 0.95)',
              color: '#1a1a1a',
              fontSize: 'clamp(20px, 4vw, 26px)',
              fontWeight: 'bold',
              cursor: 'pointer',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              touchAction: 'manipulation',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
              e.currentTarget.style.background = '#e9562d';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = '#e9562d';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.color = '#1a1a1a';
              e.currentTarget.style.borderColor = 'rgba(198, 162, 93, 0.8)';
            }}
          >
            ✕
          </button>

          {/* Sayfa Navigasyon Butonları */}
          <div
            className="book3d-navigation"
            style={{
              position: 'fixed',
              bottom: 'clamp(10px, 3%, 40px)',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(12px, 3vw, 20px)',
              background: 'rgba(255, 255, 255, 0.95)',
              padding: 'clamp(10px, 2vw, 15px) clamp(20px, 4vw, 30px)',
              borderRadius: '50px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
              backdropFilter: 'blur(10px)',
              zIndex: 10000,
            }}
          >
            {/* Geri Butonu */}
            <button
              onClick={() => {
                const newPage = Math.max(0, page - 1);
                if (newPage !== page) {
                  setPage(newPage);
                }
              }}
              disabled={page === 0}
              style={{
                background: page === 0 ? '#cccccc' : '#e9562d',
                border: 'none',
                color: 'white',
                width: 'clamp(40px, 8vw, 50px)',
                height: 'clamp(40px, 8vw, 50px)',
                borderRadius: '50%',
                fontSize: 'clamp(18px, 3.5vw, 22px)',
                fontWeight: 'bold',
                cursor: page === 0 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                opacity: page === 0 ? 0.5 : 1,
                boxShadow: page === 0 ? 'none' : '0 4px 15px rgba(233, 86, 45, 0.3)',
                touchAction: 'manipulation',
              }}
              onMouseEnter={(e) => {
                if (page !== 0) {
                  e.currentTarget.style.background = '#d14a26';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(233, 86, 45, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (page !== 0) {
                  e.currentTarget.style.background = '#e9562d';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(233, 86, 45, 0.3)';
                }
              }}
            >
              ←
            </button>

            {/* Sayfa Göstergesi */}
            <div style={{
              color: '#1a1a1a',
              fontSize: 'clamp(14px, 3vw, 17px)',
              fontWeight: '700',
              minWidth: 'clamp(60px, 12vw, 90px)',
              textAlign: 'center',
              userSelect: 'none',
            }}>
              {page} / {pages.length - 1}
            </div>

            {/* İleri Butonu */}
            <button
              onClick={() => {
                const newPage = Math.min(pages.length - 1, page + 1);
                if (newPage !== page) {
                  setPage(newPage);
                }
              }}
              disabled={page === pages.length - 1}
              style={{
                background: page === pages.length - 1 ? '#cccccc' : '#e9562d',
                border: 'none',
                color: 'white',
                width: 'clamp(40px, 8vw, 50px)',
                height: 'clamp(40px, 8vw, 50px)',
                borderRadius: '50%',
                fontSize: 'clamp(18px, 3.5vw, 22px)',
                fontWeight: 'bold',
                cursor: page === pages.length - 1 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                opacity: page === pages.length - 1 ? 0.5 : 1,
                boxShadow: page === pages.length - 1 ? 'none' : '0 4px 15px rgba(233, 86, 45, 0.3)',
                touchAction: 'manipulation',
              }}
              onMouseEnter={(e) => {
                if (page !== pages.length - 1) {
                  e.currentTarget.style.background = '#d14a26';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(233, 86, 45, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (page !== pages.length - 1) {
                  e.currentTarget.style.background = '#e9562d';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(233, 86, 45, 0.3)';
                }
              }}
            >
              →
            </button>
          </div>
        </>,
        document.body
      )}
    </>
  );
};
