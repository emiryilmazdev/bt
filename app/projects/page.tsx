'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import MobileMenu from '@/components/MobileMenu';
import OffcanvasMenu from '@/components/OffcanvasMenu';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Katoforez Kaplama Tesisleri',
    shortTitle: 'Katoforez',
    subtitle: 'Yüksek Korozyon Direnci, Mükemmel Yüzey Kalitesi',
    description: `Galvanorm'un KTL sistemleriyle metal yüzeylerde uzun ömürlü, homojen ve çevre dostu kaplamalar elde edin. Otomotiv ve savunma sanayine özel çözümler sunuyoruz.

Katoforez kaplama (KTL), metal yüzeylere elektroforetik yöntemle boya kaplama işlemini gerçekleştiren en gelişmiş koruma teknolojilerinden biridir. Sistemde, metal yüzeyler elektriksel yük farkı sayesinde boyayı homojen bir şekilde çeker. 

Bu yöntem, özellikle otomotiv, beyaz eşya ve savunma sanayi gibi yüksek korozyon dayanımı gerektiren alanlarda kullanılır.

Galvanorm'un KTL Sistemleri:`,
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
    ],
  },
  {
    id: 2,
    title: 'Atık Su Arıtma Tesisleri',
    shortTitle: 'Atık Su Arıtma',
    subtitle: 'Sürdürülebilir Üretim, Temiz Gelecek',
    description: `Kimyasal ve metal içerikli endüstriyel suları arıtarak çevreye duyarlı, mevzuata uygun üretim süreçleri oluşturun. Enerji ve su tasarrufunu bir arada sağlayın.

Atık su arıtma sistemleri, endüstriyel üretimden çıkan kimyasal ve ağır metal içerikli suların doğaya zararsız hale getirilmesini sağlar. 

Galvanorm, yüzey işlem ve kaplama sektörüne özel olarak tasarlanmış modüler, otomatik ve sensör tabanlı arıtma tesisleri üretir.

Sistem Özellikleri:`,
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
    ],
  },
  {
    id: 3,
    title: 'Elektrik ve Yazılım Sistemleri',
    shortTitle: 'Elektrik & Yazılım',
    subtitle: 'Endüstri 4.0 Uyumlu Akıllı Otomasyon',
    description: `Galvanorm'un PLC ve SCADA tabanlı kontrol sistemleriyle üretim hatlarınızı uzaktan yönetin, verimliliği artırın ve her aşamada tam izlenebilirlik sağlayın.

Galvanorm'un elektrik ve yazılım çözümleri, tüm tesislerin otomasyon kalbini oluşturur. 

Sistemlerimizde kullanılan PLC, HMI ve SCADA entegrasyonları sayesinde tesisler uzaktan izlenebilir, hatalar anlık olarak tespit edilip optimize edilir.

Teknik Özellikler:`,
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
    ],
  },
  {
    id: 4,
    title: 'Otomatik Askı Kaplama Tesisleri',
    shortTitle: 'Askı Kaplama',
    subtitle: 'Hassas Parçalar İçin Akıllı Kaplama Çözümleri',
    description: `Geniş parça hacimleri için tasarlanmış askı hatlarımızla, minimum hata ve maksimum verim elde edin. PLC kontrollü sistemler ile kusursuz kaplama kalitesi.

Askı kaplama sistemleri, büyük ve geometrik olarak karmaşık parçaların seri ve hassas biçimde kaplanmasını sağlar. 

Galvanorm'un otomatik hatları servo kontrollü taşıma sistemleri ve akıllı daldırma algoritmalarıyla çalışır.

Teknik Özellikler:`,
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
    ],
  },
  {
    id: 5,
    title: 'Tam Otomatik Tambur Kaplama Tesisleri',
    shortTitle: 'Tambur Kaplama',
    subtitle: 'Küçük Parçalar, Büyük Hassasiyet',
    description: `Yüksek hacimli küçük parçaların otomatik kaplamasında maksimum homojenlik ve düşük maliyet. Tam otomatik tambur sistemlerimizle üretim sürecinizi optimize edin.

Tambur kaplama sistemleri, küçük boyutlu parçaların (vida, somun, bağlantı elemanı vb.) yüksek hacimli üretimlerde otomatik olarak kaplanması için tasarlanır.

Galvanorm'un tambur tesisleri, rotasyon kontrollü tamburlar ve akıllı taşıma üniteleriyle yüksek hassasiyet sunar.

Sistem Özellikleri:`,
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
    ],
  },
  {
    id: 6,
    title: 'Eloksal Kaplama Tesisleri',
    shortTitle: 'Eloksal',
    subtitle: 'Estetik, Dayanıklılık ve Koruma Bir Arada',
    description: `Alüminyum yüzeylerde dekoratif ve dayanıklı kaplamalar sağlayan eloksal sistemlerimiz, tam otomatik kontrol ve geniş renk seçenekleriyle üretiminizi güçlendirir.

Eloksal (anodizasyon), alüminyum yüzeylerin kontrollü şekilde oksitlenerek sert, dayanıklı ve dekoratif bir yüzey kazanmasını sağlayan elektro-kimyasal bir işlemdir.

Galvanorm'un eloksal tesisleri yüksek akım dayanımı, hassas sıcaklık kontrolü ve tam otomatik taşıma sistemleriyle donatılmıştır.

Öne Çıkan Özellikler:`,
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
    ],
  },
  {
    id: 7,
    title: 'Kimyasal Gaz Yıkama Sistemleri (SCRUBBER)',
    shortTitle: 'Scrubber',
    subtitle: 'Temiz Hava, Güvenli Çalışma Alanı',
    description: `SCRUBBER sistemleriyle asidik ve toksik gazları nötralize edin. Çevre standartlarına uygun, yüksek verimli ve otomatik kontrol altyapısına sahip sistemler sunuyoruz.

SCRUBBER sistemleri, üretim süreçlerinde açığa çıkan asit, alkali ve toksik gazları kimyasal reaksiyonlarla zararsız bileşenlere dönüştürür.

Galvanorm'un gaz yıkama sistemleri, PVC, PP veya FRP malzemeden imal edilmiş yüksek dirençli gövdeye sahiptir.

Sistem Özellikleri:`,
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
    ],
  },
];

export default function ProjectsPageTab() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // URL'den tab parametresini oku
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');
    if (tabParam !== null) {
      const tabIndex = parseInt(tabParam);
      if (tabIndex >= 0 && tabIndex < projects.length) {
        setActiveTab(tabIndex);
      }
    }
  }, []);

  const nextImage = () => {
    const maxIndex = projects[activeTab].images.length - 1;
    setCurrentImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevImage = () => {
    const maxIndex = projects[activeTab].images.length - 1;
    setCurrentImageIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Tab değişince image index'i sıfırla ve sayfayı yukarı kaydır
  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setCurrentImageIndex(0);
    
    // Sayfayı yumuşak bir şekilde en üste kaydır
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style jsx>{`
        .projects-page {
          background: #f8f9fa;
          min-height: 100vh;
        }
        
        .projects-tabs-container {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          height: calc(100vh - 180px);
          display: flex;
          flex-direction: column;
        }
        
        /* Tabs Header */
        .tabs-header {
          display: flex;
          border-bottom: 2px solid #e9ecef;
          background: #fff;
          overflow-x: auto;
          position: sticky;
          top: 0;
          z-index: 100;
          flex-shrink: 0;
        }
        
        .tab-button {
          flex: 1;
          min-width: 160px;
          padding: 20px 16px;
          background: transparent;
          border: none;
          border-bottom: 3px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          text-align: center;
        }
        
        .tab-button:hover {
          background: #f8f9fa;
        }
        
        .tab-button.active {
          border-bottom-color: #1a1a1a;
          background: #f8f9fa;
        }
        
        .tab-number {
          font-size: 12px;
          font-weight: 700;
          color: #999;
          margin-bottom: 6px;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 1px;
        }
        
        .tab-button.active .tab-number {
          color: #1a1a1a;
        }
        
        .tab-title {
          font-size: 14px;
          font-weight: 600;
          color: #495057;
          line-height: 1.3;
        }
        
        .tab-button.active .tab-title {
          color: #1a1a1a;
        }
        
        /* Tab Content */
        .tab-content {
          flex: 1;
          overflow: hidden;
          animation: fadeIn 0.5s ease;
          position: relative;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 100%;
          gap: 0;
        }
        
        .content-text {
          padding: 50px 60px;
          overflow-y: visible;
          background: #fff;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        
        .content-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          color: #1a1a1a;
          background: #f8f9fa;
          padding: 6px 14px;
          border-radius: 6px;
          margin-bottom: 20px;
          font-family: 'Rajdhani', sans-serif;
          letter-spacing: 1.5px;
          width: fit-content;
        }
        
        .content-title {
          font-size: 40px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 14px;
          line-height: 1.2;
          letter-spacing: -1px;
        }
        
        .content-subtitle {
          font-size: 18px;
          color: #6c757d;
          margin: 0 0 24px;
          font-weight: 500;
          line-height: 1.5;
        }
        
        .content-description {
          font-size: 15px;
          line-height: 1.8;
          color: #495057;
          margin-bottom: 28px;
        }
        
        .content-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .feature-item:last-child {
          border-bottom: none;
        }
        
        .feature-icon {
          width: 20px;
          height: 20px;
          background: #1a1a1a;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 11px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .feature-text {
          font-size: 14px;
          color: #495057;
          line-height: 1.6;
        }
        
        .content-image {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #f8f9fa;
          border-left: 1px solid #e9ecef;
        }
        
        .image-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #adb5bd;
        }
        
        .image-placeholder i {
          font-size: 80px;
          margin-bottom: 20px;
          opacity: 0.3;
        }
        
        /* Responsive */
        @media (max-width: 1200px) {
          .projects-tabs-container {
            height: auto;
            min-height: calc(100vh - 180px);
          }
          
          .content-grid {
            grid-template-columns: 1fr;
            height: auto;
          }
          
          .content-text {
            padding: 40px;
            overflow-y: visible;
            height: auto;
          }
          
          .content-image {
            min-height: 500px;
            border-left: none;
            border-top: 1px solid #e9ecef;
          }
        }
        
        @media (max-width: 768px) {
          .projects-tabs-container {
            border-radius: 12px;
          }
          
          .tabs-header {
            overflow-x: scroll;
          }
          
          .tab-button {
            min-width: 120px;
            padding: 16px 12px;
          }
          
          .tab-title {
            font-size: 13px;
          }
          
          .content-text {
            padding: 30px 24px;
          }
          
          .content-title {
            font-size: 28px;
          }
          
          .content-subtitle {
            font-size: 16px;
          }
          
          .content-description {
            font-size: 14px;
          }
          
          .content-image {
            min-height: 350px;
          }
        }
      `}</style>

      <OffcanvasMenu />
      <MobileMenu />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="site-main projects-page" id="primary">
            <div className="space-for-header"></div>

            {/* Projects Section */}
            <section className="tj-project-section" style={{ padding: '40px 0 40px' }}>
              <div className="container-fluid" style={{ maxWidth: '1800px', padding: '0 40px' }}>
                <div className="row">
                  <div className="col-12">
                    <div className="projects-tabs-container">
                      {/* Tabs Header */}
                      <div className="tabs-header">
                        {projects.map((project, index) => (
                          <button
                            key={project.id}
                            className={`tab-button ${activeTab === index ? 'active' : ''}`}
                            onClick={() => handleTabChange(index)}
                          >
                            <div className="tab-number">
                              {String(index + 1).padStart(2, '0')}
                            </div>
                            <div className="tab-title">
                              {project.shortTitle}
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Tab Content */}
                      <div className="tab-content" key={activeTab}>
                        <div className="content-grid">
                          {/* Text Content */}
                          <div className="content-text">
                            <span className="content-badge">
                              PROJE {String(activeTab + 1).padStart(2, '0')}
                            </span>
                            <h1 className="content-title">
                              {projects[activeTab].title}
                            </h1>
                            <p className="content-subtitle">
                              {projects[activeTab].subtitle}
                            </p>
                            <div className="content-description">
                              {projects[activeTab].description}
                            </div>
                            <ul className="content-features">
                              {projects[activeTab].features.map((feature, index) => (
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
                          <div className="content-image" style={{ position: 'relative' }}>
                            {projects[activeTab].images && projects[activeTab].images.length > 0 ? (
                              <>
                                <Image
                                  src={projects[activeTab].images[currentImageIndex]}
                                  alt={projects[activeTab].title}
                                  fill
                                  style={{ objectFit: 'cover' }}
                                  unoptimized={true}
                                  priority
                                />

                                {/* Slider Controls */}
                                {projects[activeTab].images.length > 1 && (
                                  <>
                                    {/* Navigation Arrows */}
                                    <button
                                      onClick={prevImage}
                                      style={{
                                        position: 'absolute',
                                        left: '20px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        background: 'rgba(0, 0, 0, 0.5)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        color: '#fff',
                                        fontSize: '20px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                        zIndex: 10,
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
                                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                                      }}
                                    >
                                      ‹
                                    </button>

                                    <button
                                      onClick={nextImage}
                                      style={{
                                        position: 'absolute',
                                        right: '20px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        background: 'rgba(0, 0, 0, 0.5)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        color: '#fff',
                                        fontSize: '20px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                        zIndex: 10,
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
                                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                                      }}
                                    >
                                      ›
                                    </button>

                                    {/* Image Counter */}
                                    <div
                                      style={{
                                        position: 'absolute',
                                        top: '20px',
                                        right: '20px',
                                        background: 'rgba(0, 0, 0, 0.6)',
                                        backdropFilter: 'blur(10px)',
                                        color: '#fff',
                                        padding: '8px 16px',
                                        borderRadius: '20px',
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        zIndex: 10,
                                        fontFamily: 'Rajdhani, sans-serif',
                                        letterSpacing: '1px',
                                      }}
                                    >
                                      {currentImageIndex + 1} / {projects[activeTab].images.length}
                                    </div>

                                    {/* Dots */}
                                    <div
                                      style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        display: 'flex',
                                        gap: '8px',
                                        background: 'rgba(0, 0, 0, 0.4)',
                                        backdropFilter: 'blur(10px)',
                                        padding: '10px 16px',
                                        borderRadius: '20px',
                                        zIndex: 10,
                                      }}
                                    >
                                      {projects[activeTab].images.map((_, idx) => (
                                        <div
                                          key={idx}
                                          onClick={() => setCurrentImageIndex(idx)}
                                          style={{
                                            width: currentImageIndex === idx ? '28px' : '8px',
                                            height: '8px',
                                            borderRadius: '4px',
                                            background: currentImageIndex === idx ? '#fff' : 'rgba(255, 255, 255, 0.4)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                          }}
                                        />
                                      ))}
                                    </div>
                                  </>
                                )}
                              </>
                            ) : (
                              <div className="image-placeholder">
                                <i className="tji-box"></i>
                                <p style={{ margin: 0, fontSize: '16px', fontWeight: 500 }}>
                                  Fotoğraf eklenecek
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <FooterSection />
        </div>
      </div>
    </>
  );
}
