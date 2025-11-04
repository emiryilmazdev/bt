'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  detailedDescription?: string[];
  features: string[];
  images: string[];
}

const projects: Project[] = [
  {
    id: 'katoforez',
    title: 'Katoforez Kaplama Tesisleri',
    subtitle: 'Yüksek Korozyon Direnci, Mükemmel Yüzey Kalitesi',
    description: 'Galvanorm\'un KTL sistemleriyle metal yüzeylerde uzun ömürlü, homojen ve çevre dostu kaplamalar elde edin.',
    detailedDescription: [
      'Katoforez kaplama (KTL), metal yüzeylere elektroforetik yöntemle boya kaplama işlemini gerçekleştiren en gelişmiş koruma teknolojilerinden biridir.',
      'Sistemde, metal yüzeyler elektriksel yük farkı sayesinde boyayı homojen bir şekilde çeker.',
      'Bu yöntem, özellikle otomotiv, beyaz eşya ve savunma sanayi gibi yüksek korozyon dayanımı gerektiren alanlarda kullanılır.'
    ],
    features: [
      'Tam otomatik kontrol ve PLC destekli izleme',
      'Boya tankı, ultrafiltrasyon sistemi entegrasyonu',
      'Enerji verimliliği ve kimyasal optimizasyonu',
      '1000 saat üzeri tuz püskürtme test dayanımı',
      'Yüksek yapışma gücü ve mükemmel yüzey kalitesi',
      'Uzun ömürlü korozyon direnci'
    ],
    images: ['/images/project/Katofrez.jpg']
  }
];

const ProjectsContent = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  return (
    <section className="tj-service-section-5 section-gap" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div style={{ 
              background: '#fff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
            }}>
              
              <div style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                padding: '50px 40px',
                color: '#fff'
              }}>
                <h2 style={{ 
                  fontSize: '36px', 
                  marginBottom: '15px',
                  color: '#fff',
                  fontWeight: '700'
                }}>
                  {selectedProject.title}
                </h2>
                
                {selectedProject.subtitle && (
                  <h3 style={{
                    fontSize: '20px',
                    color: '#ffd700',
                    fontWeight: '500',
                    marginBottom: '20px'
                  }}>
                    {selectedProject.subtitle}
                  </h3>
                )}
                
                <p style={{ 
                  fontSize: '18px', 
                  lineHeight: '1.8',
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: '0'
                }}>
                  {selectedProject.description}
                </p>
              </div>

              <div className="row" style={{ margin: 0 }}>
                
                <div className="col-lg-3" style={{ 
                  padding: '40px 20px',
                  borderRight: '1px solid #e9ecef'
                }}>
                  <h4 style={{ 
                    fontSize: '18px', 
                    marginBottom: '25px',
                    color: '#1a1a2e',
                    fontWeight: '600',
                    paddingLeft: '20px'
                  }}>
                    Çözümlerimiz
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {projects.map((project) => (
                      <li key={project.id} style={{ marginBottom: '8px' }}>
                        <button
                          onClick={() => setSelectedProject(project)}
                          style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '12px 20px',
                            border: 'none',
                            background: selectedProject.id === project.id 
                              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                              : 'transparent',
                            color: selectedProject.id === project.id ? '#fff' : '#555',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontSize: '14px',
                            fontWeight: selectedProject.id === project.id ? '600' : '500'
                          }}
                        >
                          {project.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-lg-9" style={{ padding: '40px' }}>
                  
                  {selectedProject.detailedDescription && (
                    <div style={{ marginBottom: '40px' }}>
                      {selectedProject.detailedDescription.map((paragraph, index) => (
                        <p key={index} style={{
                          fontSize: '16px',
                          lineHeight: '1.9',
                          color: '#555',
                          marginBottom: '20px'
                        }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                  <div className="row" style={{ marginBottom: '40px' }}>
                    {selectedProject.images.map((image, index) => (
                      <div key={index} className="col-md-6" style={{ marginBottom: '20px' }}>
                        <div style={{ 
                          borderRadius: '12px',
                          overflow: 'hidden',
                          boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
                        }}>
                          <Image
                            src={image}
                            alt={selectedProject.title}
                            width={600}
                            height={400}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 style={{ 
                      fontSize: '24px', 
                      marginBottom: '25px',
                      color: '#1a1a2e',
                      fontWeight: '600'
                    }}>
                      Teknik Özellikler ve Avantajlar
                    </h3>
                    <div className="row">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="col-md-6" style={{ marginBottom: '15px' }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            padding: '15px 20px',
                            background: '#f8f9fa',
                            borderRadius: '10px',
                            borderLeft: '4px solid #667eea'
                          }}>
                            <i className="tji-check-circle" style={{ 
                              color: '#667eea', 
                              marginRight: '12px',
                              fontSize: '20px',
                              marginTop: '2px'
                            }}></i>
                            <span style={{ fontSize: '15px', color: '#333', lineHeight: '1.6' }}>
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: '50px', textAlign: 'center' }}>
                    <a className="tj-primary-btn" href="/contact">
                      <span className="btn-text"><span>Teklif Alın</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsContent;
