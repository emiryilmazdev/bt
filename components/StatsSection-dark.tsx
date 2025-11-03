'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 1999, label: 'Kuruluş Yılımız', suffix: '', icon: '📅' },
  { number: 10, label: 'Ülke', suffix: '+', icon: '🌍' },
  { number: 200, label: 'Müşteri', suffix: '+', icon: '🤝' },
  { number: 100, label: 'Müşteri Memnuniyeti', suffix: '%', icon: '⭐' },
  { number: 25, label: 'Yıllık Tecrübe', suffix: '+', icon: '🏆' },
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
        padding: '100px 0',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage:
            'radial-gradient(circle, #E9562D 2px, transparent 2px)',
          backgroundSize: '50px 50px',
          animation: 'moveBackground 20s linear infinite',
        }}
      ></div>

      <style jsx>{`
        @keyframes moveBackground {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }
      `}</style>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '40px 20px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(233, 86, 45, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(233, 86, 45, 0.3)';
                e.currentTarget.style.transform = 'translateY(-10px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                {stat.icon}
              </div>
              <div
                style={{
                  fontSize: 'clamp(40px, 5vw, 56px)',
                  fontWeight: '700',
                  color: '#fff',
                  marginBottom: '12px',
                  fontFamily: 'Rajdhani, sans-serif',
                }}
              >
                {counts[index]}
                <span style={{ color: '#E9562D' }}>{stat.suffix}</span>
              </div>
              <div
                style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: '500',
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
