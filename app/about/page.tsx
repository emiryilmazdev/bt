'use client';

import Header from '@/components/Header';
import MobileMenu from '@/components/MobileMenu';
import OffcanvasMenu from '@/components/OffcanvasMenu';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <OffcanvasMenu />
      <MobileMenu />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="site-main" id="primary">
            <div className="space-for-header"></div>

            {/* Hero - Ultra Minimal */}
            <section style={{
              padding: '180px 0 120px',
              background: '#fff'
            }}>
              <div className="container">
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                  <h1 style={{
                    fontSize: 'clamp(3rem, 6vw, 6rem)',
                    fontWeight: '300',
                    color: '#000',
                    marginBottom: '40px',
                    lineHeight: '1.1',
                    letterSpacing: '-0.03em'
                  }}>
                    Üretimin ötesinde
                  </h1>

                  <p style={{
                    fontSize: '24px',
                    lineHeight: '1.6',
                    color: '#666',
                    fontWeight: '300',
                    maxWidth: '700px',
                    margin: '0 auto'
                  }}>
                    25 yıldır mühendislik yapıyoruz
                  </p>
                </div>
              </div>
            </section>

            {/* Large Image */}
            <section style={{ padding: '0 60px 120px' }}>
              <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                position: 'relative',
                height: '70vh',
                minHeight: '500px',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <Image
                  src="/images/about-hero.jpg"
                  alt="GP Galvano Proje"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  unoptimized={true}
                />
              </div>
            </section>

            {/* Stats */}
            <section style={{
              padding: '80px 0',
              background: '#fafafa',
              borderTop: '1px solid #e0e0e0',
              borderBottom: '1px solid #e0e0e0'
            }}>
              <div className="container">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '60px',
                  maxWidth: '1000px',
                  margin: '0 auto',
                  textAlign: 'center'
                }}>
                  {[
                    { num: '25', label: 'Yıl' },
                    { num: '500+', label: 'Proje' },
                    { num: '100%', label: 'Memnuniyet' },
                    { num: '7+', label: 'Ülke' }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div style={{
                        fontSize: '64px',
                        fontWeight: '200',
                        color: '#000',
                        marginBottom: '10px',
                        letterSpacing: '-0.02em'
                      }}>
                        {stat.num}
                      </div>
                      <div style={{
                        fontSize: '14px',
                        color: '#999',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontWeight: '400'
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* About Text */}
            <section style={{
              padding: '140px 0',
              background: '#fff'
            }}>
              <div className="container">
                <div style={{
                  maxWidth: '900px',
                  margin: '0 auto'
                }}>
                  <h2 style={{
                    fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                    fontWeight: '300',
                    color: '#000',
                    marginBottom: '60px',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em'
                  }}>
                    GP Galvano Proje olarak; yüzey işlem teknolojileri, otomatik kaplama tesisleri ve özel tasarım sistemlerde uzmanlaşarak, her müşterimize katma değer sağlayan projeler geliştiriyoruz.
                  </h2>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    marginTop: '100px'
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#000',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                      }}>
                        Vizyon
                      </h3>
                      <p style={{
                        fontSize: '17px',
                        lineHeight: '1.8',
                        color: '#666',
                        fontWeight: '300'
                      }}>
                        Teknoloji, inovasyon ve sürdürülebilirliği odağına alarak sanayiye değer katmak. Yüksek kalite standartlarında mühendislik çözümleri geliştirmek.
                      </p>
                    </div>

                    <div>
                      <h3 style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#000',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                      }}>
                        Misyon
                      </h3>
                      <p style={{
                        fontSize: '17px',
                        lineHeight: '1.8',
                        color: '#666',
                        fontWeight: '300'
                      }}>
                        Yüksek mühendislik çözümleri ve sürdürülebilir teknolojilerle sanayinin geleceğini şekillendirmek. Müşterilerimize kalıcı değer katmak.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Timeline */}
            <section style={{
              padding: '140px 0',
              background: '#fafafa'
            }}>
              <div className="container">
                <div style={{
                  maxWidth: '900px',
                  margin: '0 auto'
                }}>
                  <h2 style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#000',
                    marginBottom: '80px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    textAlign: 'center'
                  }}>
                    Tarihçe
                  </h2>

                  {[
                    { year: '1999', text: 'Yüzey işlem teknolojileri alanında yenilikçi çözümler sunma hedefiyle kurulduk.' },
                    { year: '2005', text: 'Avrupa pazarına açılarak ilk uluslararası projemizi tamamladık.' },
                    { year: '2010', text: 'Kendi Ar-Ge merkezimizi kurarak yenilikçi teknolojiler geliştirmeye başladık.' },
                    { year: '2015', text: 'Türkiye ve dünyada 500\'den fazla başarılı projeye imza attık.' },
                    { year: '2020', text: 'Tam otomatik ve akıllı sistemlerle Endüstri 4.0 dönüşümüne öncülük ettik.' },
                    { year: '2024', text: 'Sektörün lider firmalarından biri olarak yenilikçi çözümler üretmeye devam ediyoruz.' }
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'grid',
                      gridTemplateColumns: '120px 1fr',
                      gap: '60px',
                      marginBottom: '60px',
                      paddingBottom: '60px',
                      borderBottom: i < 5 ? '1px solid #e0e0e0' : 'none'
                    }}>
                      <div style={{
                        fontSize: '56px',
                        fontWeight: '200',
                        color: '#000',
                        letterSpacing: '-0.02em'
                      }}>
                        {item.year}
                      </div>
                      <div style={{
                        fontSize: '20px',
                        lineHeight: '1.6',
                        color: '#666',
                        fontWeight: '300',
                        paddingTop: '12px'
                      }}>
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section style={{
              padding: '140px 0',
              background: '#fff',
              textAlign: 'center'
            }}>
              <div className="container">
                <h2 style={{
                  fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                  fontWeight: '300',
                  color: '#000',
                  marginBottom: '50px',
                  letterSpacing: '-0.02em'
                }}>
                  Projeleriniz için hazırız
                </h2>

                <a href="/contact" style={{
                  display: 'inline-block',
                  padding: '20px 50px',
                  background: '#000',
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: '400',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.5px'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#333';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#000';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                  İletişime Geç
                </a>
              </div>
            </section>

          </main>

          <FooterSection />
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          section > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
