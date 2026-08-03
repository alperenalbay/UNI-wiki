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
  url: 'https://unideva.devatek.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'devatek', // Usually your GitHub org/user name.
  projectName: 'unideva-docs', // Usually your repo name.

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
            href: 'https://github.com/devatek/unideva-docs',
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
                label: 'Başlangıç ve Kurulum',
                to: '/docs/baslangic-ve-kurulum/unideva-nedir',
              },
              {
                label: 'Genel Muhasebe',
                to: '/docs/genel-muhasebe/zirve-luca-aktarim',
              },
              {
                label: 'Ön Muhasebe',
                to: '/docs/on-muhasebe/fatura-ve-irsaliye',
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
