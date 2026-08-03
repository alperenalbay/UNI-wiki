import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const icons = {
  book: (
    <svg {...iconProps}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  rocket: (
    <svg {...iconProps}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  file: (
    <svg {...iconProps}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  ),
  calculator: (
    <svg {...iconProps}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="11" x2="8" y2="11.01" />
      <line x1="12" y1="11" x2="12" y2="11.01" />
      <line x1="16" y1="11" x2="16" y2="11.01" />
      <line x1="8" y1="15" x2="8" y2="15.01" />
      <line x1="12" y1="15" x2="12" y2="15.01" />
      <line x1="16" y1="15" x2="16" y2="15.01" />
      <line x1="8" y1="19" x2="8" y2="19.01" />
      <line x1="12" y1="19" x2="12" y2="19.01" />
      <line x1="16" y1="19" x2="16" y2="19.01" />
    </svg>
  ),
  users: (
    <svg {...iconProps}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  refresh: (
    <svg {...iconProps}>
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
  tag: (
    <svg {...iconProps}>
      <path d="M20.59 13.41 12 22 2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  ),
  search: (
    <svg {...iconProps}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  package: (
    <svg {...iconProps}>
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  arrowRight: (
    <svg {...iconProps} width={14} height={14}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
};

const quickLinks = [
  {
    icon: icons.rocket,
    title: 'Unideva Nedir?',
    desc: 'Bulut mimari ve ürün ailesine hızlı bir giriş.',
    to: '/docs/baslangic-ve-kurulum/unideva-nedir',
  },
  {
    icon: icons.package,
    title: 'Kurulum ve Giriş',
    desc: 'İlk adımlar, sisteme giriş ve mobil uygulama.',
    to: '/docs/baslangic-ve-kurulum/kurulum-ve-giris',
  },
  {
    icon: icons.file,
    title: 'Fatura ve İrsaliye',
    desc: 'e-Fatura, e-Arşiv ve e-İrsaliye düzenleme.',
    to: '/docs/on-muhasebe/fatura-ve-irsaliye',
  },
  {
    icon: icons.book,
    title: 'Sık Sorulan Sorular',
    desc: 'En çok merak edilenler ve yanıtları.',
    to: '/docs/sss-ve-ipuclari/sik-sorulan-sorular',
  },
];

const modules = [
  {
    icon: icons.calculator,
    title: 'Genel Muhasebe',
    desc: 'Fiş girişi, muavin-mizan, e-Defter işlemleri ve Zirve/Luca veri aktarımı.',
    to: '/docs/genel-muhasebe/zirve-luca-aktarim',
  },
  {
    icon: icons.file,
    title: 'Ön Muhasebe',
    desc: 'Fatura, cari-stok yönetimi ve kasa-banka-çek-senet işlemleri.',
    to: '/docs/on-muhasebe/fatura-ve-irsaliye',
  },
  {
    icon: icons.users,
    title: 'İnsan Kaynakları',
    desc: 'Personel kartları, bordro hesaplama ve kanuni istisnalar.',
    to: '/docs/insan-kaynaklari/personel-kartlari',
  },
  {
    icon: icons.refresh,
    title: 'e-Dönüşüm',
    desc: 'e-Fatura, e-Arşiv, e-İrsaliye ve e-Defter süreçlerinin yönetimi.',
    to: '/docs/urunler-ve-paketler/deva-donusum',
  },
  {
    icon: icons.tag,
    title: 'Fiyatlandırma',
    desc: 'Paket fiyatları, lisanslama ve e-Defter/mükellef hesaplamaları.',
    to: '/docs/fiyatlandirma-ve-hesaplama/paket-fiyatlari',
  },
  {
    icon: icons.search,
    title: 'GİB Durum Kodları',
    desc: 'E-Fatura güvenli durum kodları ve hata çözüm rehberi.',
    to: '/docs/sss-ve-ipuclari/gib-durum-kodlari',
  },
];

const products = [
  {
    name: 'Unideva Lite',
    desc: 'Küçük ölçekli işletmeler için pratik ön muhasebe çözümü.',
    to: '/docs/urunler-ve-paketler/unideva-lite',
  },
  {
    name: 'Unideva Elite',
    desc: 'Büyüyen KOBİ\'ler için kapsamlı yönetim paketi.',
    to: '/docs/urunler-ve-paketler/unideva-elite',
  },
  {
    name: 'Unideva Prime',
    desc: 'Mali müşavirler ve muhasebe büroları için profesyonel paket.',
    to: '/docs/urunler-ve-paketler/unideva-prime',
  },
  {
    name: 'Deva Dönüşüm',
    desc: 'GİB standartlarına tam uyumlu e-dönüşüm portalı.',
    to: '/docs/urunler-ve-paketler/deva-donusum',
  },
];

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow1} />
      <div className={styles.heroGlow2} />
      <div className="container">
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Devatek Unideva Dokümantasyonu
        </div>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroActions}>
          <Link className={styles.heroPrimary} to="/docs/baslangic-ve-kurulum/unideva-nedir">
            Kılavuzları Keşfet
          </Link>
          <Link className={styles.heroGhost} to="/docs/sss-ve-ipuclari/gib-durum-kodlari">
            GİB Durum Kodları
          </Link>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statValue}>10</div>
            <div className={styles.statLabel}>İçerik Kategorisi</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>GİB</div>
            <div className={styles.statLabel}>Uyumlu e-Dönüşüm</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>7/24</div>
            <div className={styles.statLabel}>Bulut Erişim</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid4}>
          {quickLinks.map((item) => (
            <Link key={item.title} className={styles.card} to={item.to}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <div className={styles.cardTitle}>{item.title}</div>
              <div className={styles.cardDesc}>{item.desc}</div>
              <span className={styles.cardLink}>
                İncele {icons.arrowRight}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Modüller ve Rehberler</h2>
          <p className={styles.sectionLead}>
            Unideva'nın tüm modülleri için adım adım kılavuzlara buradan ulaşın.
          </p>
        </div>
        <div className={styles.grid3}>
          {modules.map((item) => (
            <Link key={item.title} className={styles.card} to={item.to}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <div className={styles.cardTitle}>{item.title}</div>
              <div className={styles.cardDesc}>{item.desc}</div>
              <span className={styles.cardLink}>
                Rehberi Aç {icons.arrowRight}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Ürün Paketleri</h2>
          <p className={styles.sectionLead}>
            İşletmenizin ölçeğine uygun Unideva paketini keşfedin.
          </p>
        </div>
        <div className={styles.grid4}>
          {products.map((item) => (
            <Link key={item.name} className={styles.productCard} to={item.to}>
              <div className={styles.productName}>{item.name}</div>
              <div className={styles.cardDesc}>{item.desc}</div>
              <span className={styles.cardLink}>
                İncele {icons.arrowRight}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.ctaBand}>
          <div className={styles.ctaGlow} />
          <h2 className={styles.ctaTitle}>Yanıtınızı bulamadınız mı?</h2>
          <p className={styles.ctaText}>
            Devatek Destek Merkezi'ne ulaşın; uzman ekibimiz her konuda size
            yardımcı olsun.
          </p>
          <Link className={styles.ctaBtn} href="https://destek.devatek.com">
            Destek Merkezi'ne Git
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Ana Sayfa`}
      description="Devatek Unideva Bulut Muhasebe ve e-Dönüşüm Çözümleri Kılavuzu">
      <Hero />
      <QuickLinks />
      <Modules />
      <Products />
      <SupportCTA />
    </Layout>
  );
}
