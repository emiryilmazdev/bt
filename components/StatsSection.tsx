'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 1999, label: 'Kuruluş Yılı', suffix: '' },
  { number: 10, label: 'Ülke', suffix: '+' },
  { number: 200, label: 'Müşteri', suffix: '+' },
  { number: 100, label: 'Çalışan', suffix: '+' },
  { number: 25, label: 'Yıllık Tecrübe', suffix: '+' },
];

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(
              Math.round(increment * currentStep),
              stat.number
            );
            return newCounts;
          });
        } else {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="stats"
      style={{
        padding: '120px 0',
        background: '#fff',
      }}
    >
      <div className="container">
        {/* Minimal Grid with Lines */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Horizontal Line */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: '1px',
              background: '#e0e0e0',
              zIndex: 0,
            }}
          ></div>

          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '60px 20px',
                position: 'relative',
                borderRight: index < stats.length - 1 ? '1px solid #e0e0e0' : 'none',
              }}
            >
              {/* Vertical Line */}
              {index < stats.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '1px',
                    background: '#e0e0e0',
                  }}
                ></div>
              )}

              <div
                style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  marginBottom: '12px',
                  fontFamily: 'Rajdhani, sans-serif',
                }}
              >
                {counts[index]}
                {stat.suffix}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: '#999',
                  fontWeight: '400',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
