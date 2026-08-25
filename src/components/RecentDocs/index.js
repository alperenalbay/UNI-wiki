import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import recentDocs from '@site/src/data/recentDocs.json';

export default function RecentDocs() {
  if (!recentDocs || recentDocs.length === 0) return null;
  return (
    <section className={styles.recentSection}>
      <div className="container">
        <div className={styles.recentHead}>
          <div>
            <h2 className={styles.recentTitle}>Son Eklenenler</h2>
            <p className={styles.recentLead}>
              En son eklenen 5 doküman — her yeni içerik otomatik olarak burada listelenir.
            </p>
          </div>
          <Link className={styles.recentAllLink} to="/docs/urunler-ve-paketler/deva-donusum">
            Tüm kılavuzlar →
          </Link>
        </div>

        <div className={styles.recentGrid}>
          {recentDocs.slice(0, 5).map((doc, idx) => (
            <Link key={doc.url} to={doc.url} className={styles.recentCard}>
              <div className={styles.recentMeta}>
                <span className={styles.recentCategory}>{doc.category}</span>
                <span className={styles.recentDot} aria-hidden>·</span>
                <span className={styles.recentDate}>{doc.date}</span>
                {idx === 0 && <span className={styles.recentBadge}>Yeni</span>}
              </div>
              <div className={styles.recentCardTitle}>{doc.title}</div>
              <div className={styles.recentDesc}>{doc.description}</div>
              <span className={styles.recentLink}>
                Oku <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>

        <div className={styles.recentFootNote}>
          Liste <code>git log</code> tarihine göre her build'de otomatik güncellenir. Yeni bir <code>docs/*.md</code> ekleyip <code>main</code>'e pushlamanız yeterli.
        </div>
      </div>
    </section>
  );
}
