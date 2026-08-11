// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Unideva Bilgi ve Dokümantasyon Havuzu',
  tagline: 'Devatek Unideva Bulut Muhasebe ve e-Dönüşüm Çözümleri Kılavuzu',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://alperenalbay.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/UNI-wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'alperenalbay', // Usually your GitHub org/user name.
  projectName: 'UNI-wiki', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["tr", "en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexPages: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Unideva Doküman',
        logo: {
          alt: 'Devatek Logo',
          src: 'img/deva-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Kılavuz',
          },
          {
            href: 'https://github.com/alperenalbay/UNI-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Kılavuzlar',
            items: [
              {
                label: 'Paket Fiyatları',
                to: '/docs/fiyatlandirma-ve-hesaplama/paket-fiyatlari',
              },
              {
                label: 'GİB Durum Kodları',
                to: '/docs/sss-ve-ipuclari/gib-durum-kodlari',
              },
              {
                label: 'Kredi Havuzuna Firma Ekleme',
                to: '/docs/rehberler-ve-kodlar/kredi-havuzu-ekleme',
              },
            ],
          },
          {
            title: 'Devatek & Unideva',
            items: [
              {
                label: 'Resmi Web Sitesi',
                href: 'https://www.devatek.com',
              },
              {
                label: 'Destek Merkezi',
                href: 'https://destek.devatek.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Devatek Yazılım A.Ş. Tüm hakları saklıdır.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
