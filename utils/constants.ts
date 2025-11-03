/**
 * Şirket Bilgileri ve Sabitler
 * 
 * Bu dosya tüm projede kullanılan şirket bilgilerini, 
 * iletişim detaylarını ve sosyal medya linklerini içerir.
 * Merkezi yönetim sayesinde değişiklikler tek yerden yapılabilir.
 */

export const COMPANY_INFO = {
  name: 'Galvanorm',
  fullName: 'Galvanorm Otomatik Kaplama Tesisleri',
  
  contact: {
    phone: '0-262-503-9553',
    phoneHref: 'tel:0-262-503-9553',
    email: 'gp@galvanoproje.com',
    emailHref: 'mailto:gp@galvanoproje.com',
  },
  
  address: {
    full: 'Çerkeşli OSB, İmes 8.Cadde No:23, 41455 Dilovası/Kocaeli, Türkiye',
    short: 'Çerkeşli OSB Mahallesi İmes 8. Cadde No:23 Dilovası/Kocaeli',
    city: 'Kocaeli',
    country: 'Türkiye',
  },
  
  workingHours: {
    display: 'Pzt-Cuma 8:30-18:30',
    days: 'Pazartesi - Cuma',
    hours: '08:30 - 18:30',
  },
  
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    twitter: 'https://x.com/',
    linkedin: 'https://www.linkedin.com/',
  },
  
  description: {
    short: 'Yüksek kalite galvaniz çözümlerimizle çeliği koruyor, endüstriye uzun ömürlü ve güvenilir ürünler kazandırıyoruz.',
    offcanvas: 'GalvaNorm ekibiyle iletişime geçerek gelişmiş kaplama çözümlerine doğru bir yolculuğa çıkın. İster özel gereksinimleriniz olsun, ister uzman rehberliğine ihtiyacınız, biz buradayız ve kaplama süreçlerinizi yükseltmek için iş birliği yapmaya hazırız.',
  },
  
  seo: {
    keywords: ['galvaniz', 'kaplama', 'yüzey işlem', 'endüstriyel çözümler', 'otomatik kaplama tesisleri'],
  },
} as const;

/**
 * Kullanım Örnekleri:
 * 
 * import { COMPANY_INFO } from '@/utils/constants';
 * 
 * <a href={COMPANY_INFO.contact.phoneHref}>{COMPANY_INFO.contact.phone}</a>
 * <a href={COMPANY_INFO.contact.emailHref}>{COMPANY_INFO.contact.email}</a>
 * <span>{COMPANY_INFO.workingHours.display}</span>
 */
