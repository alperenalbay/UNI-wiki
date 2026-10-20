import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function NotFound() {
  return (
    <Layout title="Sayfa bulunamadı">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 1.5rem',
          maxWidth: '720px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            fontSize: '4rem',
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: '0.5rem',
          }}
        >
          404
        </div>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          Aradığınız sayfa bulunamadı
        </h1>
        <p style={{ marginBottom: '2rem', opacity: 0.75 }}>
          Bağlantı hatalı olabilir veya sayfa taşınmış olabilir. Aşağıdaki
          bağlantılardan birini deneyin.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Link
            to="/"
            className="button button--primary"
            style={{ textDecoration: 'none' }}
          >
            Ana Sayfa
          </Link>
          <Link
            to="/docs/genel-muhasebe/zirve-firma-aktarim"
            className="button button--secondary"
            style={{ textDecoration: 'none' }}
          >
            Kılavuzlar
          </Link>
        </div>
      </main>
    </Layout>
  );
}
