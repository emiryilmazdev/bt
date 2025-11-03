'use client';

import { atom, useAtom } from "jotai";
import { useEffect } from "react";

// Katalog içinde kaç sayfa olacak (PDF sayfalarınızı buraya ekleyeceksiniz)
const PICTURES_COUNT = 37; // Toplam 37 sayfa texture
// 01, 02, 03 formatında isimlendir (düzgün sıralama için)
const pictures = Array.from({ length: PICTURES_COUNT }, (_, i) => 
  String(i + 1).padStart(2, '0')
);

export const pageAtom = atom<number>(0);
export const zoomedAtom = atom<boolean>(false); // Zoom durumu
export const fullscreenAtom = atom<boolean>(false); // Tam ekran durumu

export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [fullscreen] = useAtom(fullscreenAtom);

  useEffect(() => {
    // Sayfa çevirme sesi eklenebilir (opsiyonel)
    // const audio = new Audio("/audios/page-flip-01a.mp3");
    // audio.play();
  }, [page]);

  // Tam ekran modda değilse basit kontroller
  if (!fullscreen) {
    return null;
  }

  const totalPages = pages.length;

  return (
    <div style={{ 
      position: 'absolute', 
      bottom: '30px', 
      left: '50%', 
      transform: 'translateX(-50%)',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px'
    }}>
      {/* Sayfa Navigasyonu */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        background: 'rgba(0, 0, 0, 0.8)',
        padding: '12px 24px',
        borderRadius: '50px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
      }}>
        <button
          onClick={() => setPage(Math.max(0, page - 1))}
          disabled={page === 0}
          style={{
            background: 'transparent',
            border: 'none',
            color: page === 0 ? 'rgba(255, 255, 255, 0.3)' : 'white',
            cursor: page === 0 ? 'not-allowed' : 'pointer',
            fontSize: '24px',
            padding: '5px 10px',
            transition: 'all 0.2s',
          }}
        >
          ←
        </button>
        
        <span style={{
          color: 'white',
          fontSize: '14px',
          fontWeight: '600',
          minWidth: '80px',
          textAlign: 'center',
        }}>
          {page} / {totalPages - 1}
        </span>
        
        <button
          onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
          disabled={page === totalPages - 1}
          style={{
            background: 'transparent',
            border: 'none',
            color: page === totalPages - 1 ? 'rgba(255, 255, 255, 0.3)' : 'white',
            cursor: page === totalPages - 1 ? 'not-allowed' : 'pointer',
            fontSize: '24px',
            padding: '5px 10px',
            transition: 'all 0.2s',
          }}
        >
          →
        </button>
      </div>
      
      {/* Yardımıcı Metin */}
      <div style={{
        padding: '10px 20px',
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        borderRadius: '8px',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <span>🖱️ Mouse ile döndür</span>
        <span>|</span>
        <span>👆 Sayfalara tıkla</span>
        <span>|</span>
        <span>🔍 Çift tıkla = Uzaklaş</span>
      </div>
    </div>
  );
};
