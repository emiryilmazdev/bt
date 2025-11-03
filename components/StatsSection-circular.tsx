'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 1999, label: 'Kuruluş Yılı', suffix: '', max: 2024 },
  { number: 10, label: 'Ülke', suffix: '+', max: 20 },
  { number: 200, label: 'Müşteri', suffix: '+', max: 300 },
  { number: 100, label: 'Memnuniyet', suffix: '%', max: 100 },
  { number: 25, label: 'Yıl Tecrübe', suffix: '+', max: 30 },
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
        background: 'linear-gradient(180deg, #f8f9fa 0%, #fff 100%)',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '16px',
            }}
          >
            Başarılarımız
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {stats.map((stat, index) => {
            const percentage = (counts[index] / stat.max) * 100;
            const circumference = 2 * Math.PI * 70;
            const strokeDashoffset =
              circumference - (percentage / 100) * circumference;

            return (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                {/* Circular Progress */}
                <svg
                  width="180"
                  height="180"
                  style={{ transform: 'rotate(-90deg)' }}
                >
                  {/* Background Circle */}
                  <circle
                    cx="90"
                    cy="90"
                    r="70"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="12"
                  />
                  {/* Progress Circle */}
                  <circle
                    cx="90"
                    cy="90"
                    r="70"
                    fill="none"
                    stroke="#E9562D"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{
                      transition: 'stroke-dashoffset 2s ease',
                    }}
                  />
                </svg>

                {/* Number in Center */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    marginTop: '-10px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: '700',
                      color: '#1a1a1a',
                      fontFamily: 'Rajdhani, sans-serif',
                    }}
                  >
                    {counts[index]}
                    <span style={{ color: '#E9562D' }}>{stat.suffix}</span>
                  </div>
                </div>

                {/* Label */}
                <div
                  style={{
                    marginTop: '20px',
                    fontSize: '16px',
                    color: '#666',
                    fontWeight: '500',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
