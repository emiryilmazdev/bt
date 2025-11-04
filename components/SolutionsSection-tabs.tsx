'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    id: 1,
    title: 'Katoforez Kaplama Tesisleri',
    shortTitle: 'Katoforez',
    subtitle: 'Yüksek Korozyon Direnci, Mükemmel Yüzey Kalitesi',
    desc: 'Galvanorm\'un KTL sistemleriyle metal yüzeylerde uzun ömürlü, homojen ve çevre dostu kaplamalar elde edin. Otomotiv ve savunma sanayine özel çözümler sunuyoruz. Katoforez kaplama (KTL), metal yüzeylere elektroforetik yöntemle boya kaplama işlemini gerçekleştiren en gelişmiş koruma teknolojilerinden biridir. Sistemde, metal yüzeyler elektriksel yük farkı sayesinde boyayı homojen bir şekilde çeker. Bu yöntem, özellikle otomotiv, beyaz eşya ve savunma sanayi gibi yüksek korozyon dayanımı gerektiren alanlarda kullanılır. Galvanorm\'un KTL sistemleri:',
    features: [
      'Tam otomatik kontrol ve PLC destekli izleme altyapısına sahiptir.',
      'Boya tankı, ultrafiltrasyon sistemi ve kürleme fırını tamamen entegre çalışır.',
      'Enerji verimliliği ve kimyasal optimizasyonu maksimum düzeydedir.',
      '1000 saat üzeri tuz püskürtme test dayanımı (ASTM B117) sunar.',
      'Sonuç olarak, yüksek yapışma gücü, mükemmel yüzey kalitesi ve uzun ömürlü korozyon direnci elde edilir.'
    ],
    images: [
      '/images/project/katoforez1.jpg',
      '/images/project/katoforez2.jpg',
      '/images/project/katoforez3.jpg'
    ]
  },
  {
    id: 2,
    title: 'Atık Su Arıtma Tesisleri',
    shortTitle: 'Atık Su Arıtma',
    subtitle: 'Sürdürülebilir Üretim, Temiz Gelecek',
    desc: 'Kimyasal ve metal içerikli endüstriyel suları arıtarak çevreye duyarlı, mevzuata uygun üretim süreçleri oluşturun. Enerji ve su tasarrufunu bir arada sağlayın. Atık su arıtma sistemleri, endüstriyel üretimden çıkan kimyasal ve ağır metal içerikli suların doğaya zararsız hale getirilmesini sağlar. Galvanorm, yüzey işlem ve kaplama sektörüne özel olarak tasarlanmış modüler, otomatik ve sensör tabanlı arıtma tesisleri üretir. Sistem özellikleri:',
    features: [
      'Kimyasal çöktürme, nötralizasyon ve flokülasyon aşamaları tam otomatik olarak gerçekleşir.',
      'PH, ORP, iletkenlik sensörleri ile sürekli izleme yapılır.',
      'Arıtılmış su, geri kullanım için filtrasyon ve iyon değişim üniteleri üzerinden geçirilebilir.',
      'Çamur kurutma ve bertaraf süreçleri çevre yönetmeliklerine uygundur.',
      'Bu sayede işletmeler hem Çevre Mevzuatına (SKKY) tam uyum sağlar hem de su tüketiminde %40\'a varan tasarruf elde eder.'
    ],
    images: [
      '/images/project/atiksu.jpg',
      '/images/project/atiksu2.jpg',
      '/images/project/atiksu3.jpg',
      '/images/project/atiksu4.jpg'
    ]
  },
  {
    id: 3,
    title: 'Elektrik ve Yazılım Sistemleri',
    shortTitle: 'Elektrik & Yazılım',
    subtitle: 'Endüstri 4.0 Uyumlu Akıllı Otomasyon',
    desc: 'Galvanorm\'un PLC ve SCADA tabanlı kontrol sistemleriyle üretim hatlarınızı uzaktan yönetin, verimliliği artırın ve her aşamada tam izlenebilirlik sağlayın. Galvanorm\'un elektrik ve yazılım çözümleri, tüm tesislerin otomasyon kalbini oluşturur. Sistemlerimizde kullanılan PLC, HMI ve SCADA entegrasyonları sayesinde tesisler uzaktan izlenebilir, hatalar anlık olarak tespit edilip optimize edilir. Teknik Özellikler:',
    features: [
      'Siemens, Schneider, Mitsubishi altyapılı endüstriyel kontrol sistemleri',
      'Dokunmatik HMI paneller ile kullanıcı dostu arayüz',
      'Endüstri 4.0 uyumlu veri toplama ve raporlama altyapısı',
      'Modbus, Profibus ve Ethernet protokolleriyle tam entegrasyon',
      'Yazılım sistemlerimiz sayesinde operatör hataları minimize edilir, üretim verimliliği artar ve %100 izlenebilir üretim süreci elde edilir.'
    ],
    images: [
      '/images/project/elektrik.jpg',
      '/images/project/elektrik1.jpg',
      '/images/project/elektrik2.jpeg',
      '/images/project/elektrik3.jpeg',
      '/images/project/elektrik4.jpg'
    ]
  },
  {
    id: 4,
    title: 'Otomatik Askı Kaplama Tesisleri',
    shortTitle: 'Askı Kaplama',
    subtitle: 'Hassas Parçalar İçin Akıllı Kaplama Çözümleri',
    desc: 'Geniş parça hacimleri için tasarlanmış askı hatlarımızla, minimum hata ve maksimum verim elde edin. PLC kontrollü sistemler ile kusursuz kaplama kalitesi. Askı kaplama sistemleri, büyük ve geometrik olarak karmaşık parçaların seri ve hassas biçimde kaplanmasını sağlar. Galvanorm\'un otomatik hatları servo kontrollü taşıma sistemleri ve akıllı daldırma algoritmalarıyla çalışır. Teknik özellikler:',
    features: [
      'PLC kontrollü hat yönetimi ve proses optimizasyonu',
      'Manuel, yarı otomatik ve tam otomatik konfigürasyon seçenekleri',
      'Askı yükleme kapasitesi: 100–150 kg',
      'Kimyasal tank izolasyonu ve ısıtma-soğutma kontrolü',
      'Avantaj: Minimum insan müdahalesi, maksimum homojenlik ve yüksek üretim hızı.'
    ],
    images: [
      '/images/project/otomatikaski.jpg',
      '/images/project/otomatikaski1.jpg',
      '/images/project/otomatikaski2.jpg',
      '/images/project/otomatikaski3.jpg',
      '/images/project/otomatikaski4.jpg',
      '/images/project/otomatikaski5.jpg'
    ]
  },
  {
    id: 5,
    title: 'Tam Otomatik Tambur Kaplama Tesisleri',
    shortTitle: 'Tambur Kaplama',
    subtitle: 'Küçük Parçalar, Büyük Hassasiyet',
    desc: 'Yüksek hacimli küçük parçaların otomatik kaplamasında maksimum homojenlik ve düşük maliyet. Tam otomatik tambur sistemlerimizle üretim sürecinizi optimize edin. Tambur kaplama sistemleri, küçük boyutlu parçaların (vida, somun, bağlantı elemanı vb.) yüksek hacimli üretimlerde otomatik olarak kaplanması için tasarlanır. Galvanorm\'un tambur tesisleri, rotasyon kontrollü tamburlar ve akıllı taşıma üniteleriyle yüksek hassasiyet sunar. Sistem Özellikleri:',
    features: [
      'Polipropilen (PP) veya PVDF malzemeden kimyasal dirençli tamburlar',
      'Zaman kontrollü daldırma ve karıştırma fonksiyonları',
      'Tam otomatik yükleme-boşaltma sistemleri',
      'Parça başına düşük kimyasal tüketimi ve yüksek kaplama homojenliği',
      'Bu sayede hem maliyetler düşer hem de seri üretim kalitesi standardize edilir.'
    ],
    images: [
      '/images/project/tamotomatiktambur.jpg',
      '/images/project/tamotomatiktambur1.jpg',
      '/images/project/tamotomatiktambur2.jpg',
      '/images/project/tamotomatiktambur3.jpg',
      '/images/project/tamotomatiktambur4.jpg'
    ]
  },
  {
    id: 6,
    title: 'Eloksal Kaplama Tesisleri',
    shortTitle: 'Eloksal',
    subtitle: 'Estetik, Dayanıklılık ve Koruma Bir Arada',
    desc: 'Alüminyum yüzeylerde dekoratif ve dayanıklı kaplamalar sağlayan eloksal sistemlerimiz, tam otomatik kontrol ve geniş renk seçenekleriyle üretiminizi güçlendirir. Eloksal (anodizasyon), alüminyum yüzeylerin kontrollü şekilde oksitlenerek sert, dayanıklı ve dekoratif bir yüzey kazanmasını sağlayan elektro-kimyasal bir işlemdir. Galvanorm\'un eloksal tesisleri yüksek akım dayanımı, hassas sıcaklık kontrolü ve tam otomatik taşıma sistemleriyle donatılmıştır. Öne çıkan özellikler:',
    features: [
      'DC güç kaynakları ile sabit akım ve voltaj kontrolü',
      'Renk eloksalı (altın, siyah, bronz, mavi vb.) seçenekleri',
      'Soğutma sistemleri ile sıcaklık dengesi',
      'Sealing (mühürleme) ünitesi ile maksimum yüzey dayanımı',
      'Uygulama alanları: mimari profiller, otomotiv parçaları, savunma sanayi ve endüstriyel ekipmanlar.'
    ],
    images: [
      '/images/project/eloksalkaplama.jpg',
      '/images/project/eloksalkaplama1.jpg',
      '/images/project/eloksalkaplama2.jpg',
      '/images/project/eloksalkaplama3.jpg',
      '/images/project/eloksalkaplama4.jpg'
    ]
  },
  {
    id: 7,
    title: 'Kimyasal Gaz Yıkama Sistemleri (SCRUBBER)',
    shortTitle: 'Scrubber',
    subtitle: 'Temiz Hava, Güvenli Çalışma Alanı',
    desc: 'SCRUBBER sistemleriyle asidik ve toksik gazları nötralize edin. Çevre standartlarına uygun, yüksek verimli ve otomatik kontrol altyapısına sahip sistemler sunuyoruz. SCRUBBER sistemleri, üretim süreçlerinde açığa çıkan asit, alkali ve toksik gazları kimyasal reaksiyonlarla zararsız bileşenlere dönüştürür. Galvanorm\'un gaz yıkama sistemleri, PVC, PP veya FRP malzemeden imal edilmiş yüksek dirençli gövdeye sahiptir. Sistem Özellikleri:',
    features: [
      'Karşı akışlı (counter-flow) gaz-sıvı temasıyla maksimum arıtma verimi',
      'Otomatik dozaj kontrolü ile optimum kimyasal tüketimi',
      'Damlacık tutucu (demister) sayesinde yüksek hava çıkış kalitesi',
      'Emisyon sınırları: HCl, HF, NOx, SO₂ < 5 mg/Nm³ (standartlara uygun)',
      'Bu sistemler hem iş güvenliği hem çevre yönetimi açısından ISO 14001 standartlarına tam uyumludur.'
    ],
    images: [
      '/images/project/kimsayalgazyikama.jpg',
      '/images/project/kimsayalgazyikama1.jpg',
      '/images/project/kimsayalgazyikama2.jpg'
    ]
  }
];

const SolutionsSectionTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const maxIndex = services[activeTab].images.length - 1;
    setCurrentImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevImage = () => {
    const maxIndex = services[activeTab].images.length - 1;
    setCurrentImageIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setCurrentImageIndex(0);
  };

  return (
    <>
      <style jsx>{`
        .solutions-tabs {
          background: #fff;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          padding: 60px 60px 80px;
        }
        
        @media (max-width: 991px) {
          .solutions-tabs {
            padding: 50px 40px 60px;
          }
        }
        
        @media (max-width: 767px) {
          .solutions-tabs {
            padding: 40px 24px 50px;
          }
        }
        
        .section-header-tabs {
          margin-bottom: 50px;
        }
        
        .section-title-tabs {
          font-size: clamp(32px, 4vw, 48px);
          color: #1B1B1B;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: -0.02em;
          margin: 0;
          padding-left: 24px;
          border-left: 3px solid #1a1a1a;
        }
        
        @media (max-width: 767px) {
          .section-title-tabs {
            padding-left: 16px;
            border-left-width: 2px;
          }
        }
        
        .tabs-container {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
        }
        
        .tabs-header {
          display: flex;
          border-bottom: 2px solid #e0e0e0;
          background: #fff;
          overflow-x: auto;
        }
        
        .tabs-header::-webkit-scrollbar {
          height: 4px;
        }
        
        .tabs-header::-webkit-scrollbar-thumb {
          background: #ddd;
          border-radius: 4px;
        }
        
        .tab-button {
          flex: 1;
          min-width: 140px;
          padding: 24px 20px;
          background: transparent;
          border: none;
          border-bottom: 3px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .tab-button::before {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          right: 0;
          height: 3px;
          background: #1a1a1a;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .tab-button:hover {
          background: #fafafa;
        }
        
        .tab-button.active {
          background: #fafafa;
        }
        
        .tab-button.active::before {
          transform: scaleX(1);
          box-shadow: 0 0 20px rgba(233, 86, 45, 0.4);
        }
        
        .tab-button.active {
          animation: tabGlow 2s ease-in-out infinite;
        }
        
        @keyframes tabGlow {
          0%, 100% {
            box-shadow: 0 0 0 rgba(233, 86, 45, 0);
          }
          50% {
            box-shadow: 0 4px 20px rgba(233, 86, 45, 0.15);
          }
        }
        
        .tab-number {
          font-size: 11px;
          font-weight: 700;
          color: #bbb;
          margin-bottom: 8px;
          letter-spacing: 1.5px;
          transition: all 0.3s ease;
        }
        
        .tab-button:hover .tab-number,
        .tab-button.active .tab-number {
          color: #1a1a1a;
        }
        
        .tab-title {
          font-size: 14px;
          font-weight: 600;
          color: #666;
          line-height: 1.3;
          transition: all 0.3s ease;
        }
        
        .tab-button:hover .tab-title,
        .tab-button.active .tab-title {
          color: #1a1a1a;
        }
        
        .tab-content {
          animation: slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeInStagger {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        
        @media (max-width: 991px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .content-text {
          padding: 50px 60px;
          background: #fafafa;
        }
        
        @media (max-width: 991px) {
          .content-text {
            padding: 40px;
          }
        }
        
        @media (max-width: 767px) {
          .content-text {
            padding: 30px 24px;
          }
        }
        
        .content-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          color: #666;
          background: #f5f5f5;
          padding: 8px 16px;
          border-radius: 20px;
          margin-bottom: 24px;
          letter-spacing: 1.5px;
          border: 1px solid #e0e0e0;
        }
        
        .content-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #1a1a1a;
          border-radius: 50%;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
        }
        
        .content-title {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 16px;
          line-height: 1.2;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .content-subtitle {
          font-size: 17px;
          color: #666;
          margin: 0 0 28px;
          font-weight: 500;
          line-height: 1.5;
          letter-spacing: 0.3px;
        }
        
        .content-description {
          font-size: 15px;
          line-height: 1.6;
          color: #495057;
          margin-bottom: 20px;
        }
        
        .content-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 0;
          border-bottom: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }
        
        .feature-item:nth-child(1) { animation-delay: 0.1s; }
        .feature-item:nth-child(2) { animation-delay: 0.2s; }
        .feature-item:nth-child(3) { animation-delay: 0.3s; }
        .feature-item:nth-child(4) { animation-delay: 0.4s; }
        
        .feature-item:hover {
          padding-left: 8px;
        }
        
        .feature-item:last-child {
          border-bottom: none;
        }
        
        .feature-icon {
          width: 18px;
          height: 18px;
          background: #1a1a1a;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }
        
        .feature-text {
          font-size: 14px;
          color: #555;
          line-height: 1.5;
        }
        
        .content-image {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
          background: #f8f9fa;
          border-left: 1px solid #e9ecef;
        }
        
        .content-image::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%);
          z-index: 1;
          pointer-events: none;
        }
        
        @media (max-width: 991px) {
          .content-image {
            height: 450px;
            border-left: none;
            border-top: 1px solid #e9ecef;
          }
        }
        
        .content-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
        }
        
        .content-image:hover img {
          transform: scale(1.05);
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }
        
        .slider-arrow:hover {
          background: rgba(0, 0, 0, 0.9);
          transform: translateY(-50%) scale(1.1);
        }
        
        .slider-arrow-left {
          left: 20px;
        }
        
        .slider-arrow-right {
          right: 20px;
        }
        
        @media (max-width: 767px) {
          .slider-arrow {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }
          
          .slider-arrow-left {
            left: 12px;
          }
          
          .slider-arrow-right {
            right: 12px;
          }
        }
        
        .slider-counter {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          color: #fff;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          z-index: 10;
          letter-spacing: 1px;
        }
        
        @media (max-width: 767px) {
          .slider-counter {
            top: 12px;
            right: 12px;
            padding: 6px 12px;
            font-size: 12px;
          }
        }
        
        .slider-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          padding: 10px 16px;
          border-radius: 20px;
          z-index: 10;
        }
        
        @media (max-width: 767px) {
          .slider-dots {
            bottom: 12px;
            padding: 8px 12px;
            gap: 6px;
          }
        }
        
        .slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .slider-dot.active {
          width: 28px;
          background: #fff;
        }
        
        .slider-dot:hover {
          background: rgba(255, 255, 255, 0.7);
        }
        

      `}</style>

      <section id="solutions" className="solutions-tabs section-gap section-gap-x">
        <div className="container" style={{ maxWidth: '100%', padding: '0' }}>
          <AnimatedSection delay={0.2}>
            <div className="section-header-tabs">
              <h2 className="section-title-tabs">
                Sistemlerimiz<br />
                Projelerimiz
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="tabs-container">
              {/* Tabs Header */}
              <div className="tabs-header">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    className={`tab-button ${activeTab === index ? 'active' : ''}`}
                    onClick={() => handleTabChange(index)}
                  >
                    <div className="tab-number">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="tab-title">
                      {service.shortTitle}
                    </div>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="tab-content" key={activeTab}>
                <div className="content-grid">
                  {/* Text Content */}
                  <div className="content-text">
                    <h3 className="content-title">
                      {services[activeTab].title}
                    </h3>
                    <p className="content-subtitle">
                      {services[activeTab].subtitle}
                    </p>
                    <div className="content-description">
                      {services[activeTab].desc}
                    </div>
                    <ul className="content-features">
                      {services[activeTab].features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <div className="feature-icon">
                            ✓
                          </div>
                          <div className="feature-text">
                            {feature}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Slider */}
                  <div className="content-image">
                    <Image
                      src={services[activeTab].images[currentImageIndex]}
                      alt={services[activeTab].title}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    />

                    {/* Slider Controls */}
                    {services[activeTab].images.length > 1 && (
                      <>
                        {/* Navigation Arrows */}
                        <button
                          onClick={prevImage}
                          className="slider-arrow slider-arrow-left"
                          aria-label="Önceki fotoğraf"
                        >
                          ‹
                        </button>

                        <button
                          onClick={nextImage}
                          className="slider-arrow slider-arrow-right"
                          aria-label="Sonraki fotoğraf"
                        >
                          ›
                        </button>

                        {/* Image Counter */}
                        <div className="slider-counter">
                          {currentImageIndex + 1} / {services[activeTab].images.length}
                        </div>

                        {/* Dots */}
                        <div className="slider-dots">
                          {services[activeTab].images.map((_, idx) => (
                            <div
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`slider-dot ${currentImageIndex === idx ? 'active' : ''}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>


        </div>
      </section>
    </>
  );
};

export default SolutionsSectionTabs;
