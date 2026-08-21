<div align="center">

# Unideva Bilgi ve Dokümantasyon Havuzu

**Devatek Unideva Bulut Muhasebe ve e-Dönüşüm çözümleri için resmî bilgi ve dokümantasyon merkezi**

[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.10.2-3ECC5F?logo=docusaurus&logoColor=white)](https://docusaurus.io/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Otomatik%20Yayın-222222?logo=githubactions&logoColor=white)](https://pages.github.com/)
[![Lisans: MIT](https://img.shields.io/badge/Lisans-MIT-yellow.svg)](LICENSE)

</div>

---

## 📖 Hakkında

**Unideva Bilgi ve Dokümantasyon Havuzu**, Devatek'in **Unideva Bulut Muhasebe** ve **e-Dönüşüm** çözümlerine yönelik kapsamlı bir dokümantasyon platformudur. Proje, [Docusaurus](https://docusaurus.io/) altyapısı üzerine inşa edilmiş olup; kullanıcı rehberleri, kurulum talimatları, sık sorulan sorular ve ürün bilgilerini Türkçe olarak sunar.

Bu depo, dokümantasyon sitesinin kaynak kodlarını ve içerik dosyalarını barındırır. Site, GitHub Actions iş akışı aracılığıyla her değişiklikte otomatik olarak GitHub Pages üzerinde yayınlanır.

## ✨ Özellikler

- 🇹🇷 **Tamamen Türkçe içerik** — Doğru karakter kodlaması ile profesyonel Türkçe dokümantasyon
- 🧭 **Kenar çubuğu navigasyonu** — Kategorilere ayrılmış, hiyerarşik belge yapısı
- 🔍 **Yerel arama motoru** — `docusaurus-search-local` eklentisi ile hızlı tam metin arama
- 📝 **Blog desteği** — RSS ve Atom beslemeleri ile güncel duyurular
- 🌗 **Koyu / Açık tema** — Kullanıcı tercihine göre otomatik geçiş
- 🚀 **Otomatik dağıtım** — GitHub Actions ile GitHub Pages'e sürekli yayın
- 📋 **Konu şablonları** — Dokümantasyon talepleri için hazır GitHub issue şablonları

## 🚀 Hızlı Başlangıç

### Gereksinimler

| Araç | Sürüm |
|------|-------|
| [Node.js](https://nodejs.org/) | 20 veya üzeri |
| npm | Node.js ile birlikte gelir |

### Kurulum

Depoyu klonlayın:

```bash
git clone https://github.com/alperenalbay/UNI-wiki.git
cd UNI-wiki
```

Bağımlılıkları yükleyin:

```bash
npm install
```

### Geliştirme Sunucusu

Canlı yeniden yükleme (hot-reload) destekli yerel geliştirme sunucusunu başlatın:

```bash
npm run start
```

Site varsayılan olarak `http://localhost:3000` adresinde çalışır.

### Üretim Derlemesi

Statik siteyi derleyin:

```bash
npm run build
```

Derlenen siteyi yerel olarak önizleyin:

```bash
npm run serve
```

## 📁 Proje Yapısı

```
UNIDEVA_WIKI/
├── docs/                    # Dokümantasyon içeriği (Markdown/MDX)
│   ├── baslangic-ve-kurulum/
│   ├── fiyatlandirma-ve-hesaplama/
│   ├── genel-muhasebe/
│   ├── indirmeler-ve-kurulum/
│   ├── insan-kaynaklari/
│   ├── kurumsal-ve-genel/
│   ├── on-muhasebe/
│   ├── rehberler-ve-kodlar/
│   ├── sss-ve-ipuclari/
│   └── urunler-ve-paketler/
├── blog/                    # Blog yazıları (RSS/Atom destekli)
├── src/                     # React bileşenleri ve özel sayfalar
│   ├── components/
│   ├── css/
│   └── pages/
├── static/                  # Statik varlıklar (görseller, ikonlar)
├── drafts/                  # Yayınlanmamış taslak dokümanlar
├── reference_data/          # devatek.com'dan alınan genel referans verileri
├── scrape_devatek.py        # Referans verilerini doldurmak için yardımcı betik
├── .github/
│   ├── ISSUE_TEMPLATE/      # Dokümantasyon talebi şablonları
│   └── workflows/           # GitHub Pages otomatik dağıtım iş akışı
├── docusaurus.config.js     # Docusaurus ana yapılandırması
├── sidebars.js              # Kenar çubuğu navigasyon yapılandırması
└── package.json             # Proje bağımlılıkları ve komutlar
```

> ℹ️ `reference_data/` klasörü, `scrape_devatek.py` yardımcı betiği kullanılarak devatek.com'un kamuya açık sayfalarından derlenen içerik referanslarını içerir. Bu veriler, dokümantasyon içeriğinin hazırlanmasında kaynak görevi görür.

## 🛠️ Teknolojiler

| Teknoloji | Sürüm | Amaç |
|-----------|-------|------|
| [Docusaurus](https://docusaurus.io/) | 3.10.2 | Statik site oluşturucu |
| [React](https://react.dev/) | 19 | Arayüz kütüphanesi |
| [Node.js](https://nodejs.org/) | 20+ | Çalışma ortamı |
| [TypeScript](https://www.typescriptlang.org/) | — | Yapılandırma ve tip güvenliği |
| [docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local) | — | Çevrimdışı yerel arama |
| [GitHub Pages](https://pages.github.com/) | — | Barındırma ve dağıtım |
| [GitHub Actions](https://github.com/features/actions) | — | Sürekli entegrasyon / dağıtım |

## 📚 İçerik Kategorileri

Dokümantasyon havuzu, **10 kategori altında 11 doküman** içermektedir:

| Kategori | Açıklama |
|----------|----------|
| 💰 Fiyatlandırma | Paket ve lisans seçenekleri |
| 📊 Genel Muhasebe | Genel muhasebe modülü kullanımı |
| ⚙️ Kurulum | Sistem gereksinimleri ve kurulum adımları |
| 👥 İnsan Kaynakları (İK) | Bordro ve personel yönetimi |
| 🧾 Ön Muhasebe | Ön muhasebe işlemleri ve faturalama |
| 📘 Rehberler | Adım adım uygulama rehberleri |
| ❓ SSS | Sık sorulan sorular |
| 📦 Ürünler | Unideva ürün tanıtımları |

## 🤝 Katkı Sağlama

Katkılarınız memnuniyetle karşılanır! Dokümantasyona katkıda bulunmak için:

1. Bu depoyu fork edin.
2. Yeni bir dal (branch) oluşturun:
   ```bash
   git checkout -b feature/yeni-dokuman
   ```
3. Değişikliklerinizi yapın ve commit edin:
   ```bash
   git commit -m "docs: yeni doküman eklendi"
   ```
4. Dalınızı gönderin:
   ```bash
   git push origin feature/yeni-dokuman
   ```
5. Bir Pull Request açın.

### Dokümantasyon Talebi

Eksik veya hatalı bir doküman fark ettiyseniz, depoda bulunan **issue şablonlarını** kullanarak dokümantasyon talebi oluşturabilirsiniz. Talepleriniz en kısa sürede değerlendirilir.

### Yazım Kuralları

- Türkçe karakterlerin (ç, ğ, ı, İ, ö, ş, ü) doğru kullanımına özen gösterin.
- Markdown/MDX sözdizimine uygun yazım kullanın.
- Ekran görüntülerinizi `static/` klasörüne ekleyin.

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

---

<div align="center">

**Unideva Bilgi ve Dokümantasyon Havuzu** · [Devatek](https://devatek.com) tarafından geliştirilmektedir

⭐ Projeyi beğendiyseniz yıldızlamayı unutmayın!

</div>
