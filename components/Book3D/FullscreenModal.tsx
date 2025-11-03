'use client';

import { useAtom } from "jotai";
import { fullscreenAtom, pageAtom } from "./UI";
import { useEffect } from "react";

interface FullscreenModalProps {
  children: React.ReactNode;
}

export const FullscreenModal = ({ children }: FullscreenModalProps) => {
  const [fullscreen, setFullscreen] = useAtom(fullscreenAtom);
  const [, setPage] = useAtom(pageAtom);

  // ESC tuşu ile çıkış
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && fullscreen) {
        setFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [fullscreen, setFullscreen]);

  // Body scroll kontrolü
  useEffect(() => {
    if (fullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Modal kapandığında sayfayı sıfırla
      setPage(0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [fullscreen, setPage]);

  if (!fullscreen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'zoomIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {/* Header - Kapatma Butonu */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 40px',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#C8A871',
            boxShadow: '0 0 10px rgba(200, 168, 113, 0.5)',
            animation: 'pulse 2s infinite',
          }} />
          <h3 style={{
            color: 'white',
            margin: 0,
            fontSize: '18px',
            fontWeight: '600',
            letterSpacing: '0.5px',
          }}>
            Galvanorm Katalog
          </h3>
        </div>

        <button
          onClick={() => setFullscreen(false)}
          style={{
            background: 'rgba(200, 168, 113, 0.2)',
            border: '2px solid rgba(200, 168, 113, 0.5)',
            color: 'white',
            padding: '10px 24px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(200, 168, 113, 0.4)';
            e.currentTarget.style.borderColor = 'rgba(200, 168, 113, 0.8)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(200, 168, 113, 0.2)';
            e.currentTarget.style.borderColor = 'rgba(200, 168, 113, 0.5)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <span>✕</span>
          <span>Kapat</span>
        </button>
      </div>

      {/* 3D Kitap İçeriği */}
      <div
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 20px 20px',
        }}
      >
        {children}
      </div>

      {/* CSS Animasyonları */}
      <style jsx>{`
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.5) translateZ(0);
          }
          to {
            opacity: 1;
            transform: scale(1) translateZ(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};
