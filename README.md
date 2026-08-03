# Unideva Bilgi ve Dokümantasyon Havuzu

Devatek Unideva Bulut Muhasebe ve e-Dönüşüm çözümleri için [Docusaurus](https://docusaurus.io/) ile oluşturulmuş statik dokümantasyon sitesidir.

## İçerik Yapısı

- `docs/` — Kılavuz ve dokümantasyon sayfaları (Markdown/MDX)
- `blog/` — Duyuru ve mevzuat güncellemeleri
- `reference_data/` — İçerik üretiminde kullanılan kaynak veri (devatek.com kazıma çıktısı)
- `user_doc/` — Müşteri dokümanı taslakları
- `sidebars.js` — Dokümantasyon kenar çubuğu yapılandırması
- `src/pages/` — Özel sayfalar (ana sayfa)
- `static/` — Statik görseller ve indirilebilir dosyalar

## Yerel Geliştirme

```bash
npm install
npm run start
```

Değişiklikler canlı olarak yansıtılır. Tarayıcıda `http://localhost:3000` üzerinden erişilir.

## Üretim Derlemesi

```bash
npm run build
npm run serve
```

Derleme çıktısı `build/` klasörüne yazılır ve herhangi bir statik barındırma hizmetiyle yayınlanabilir.

## Doğrulama

```bash
npm run build
```

Build, kırık link ve geçersiz yapılandırmaları raporlar. Doküman eklerken mutlaka `npm run build` ile doğrulayın.

## İçerik Kuralları

- Tüm içerik Türkçe yazılır.
- Her doküman başlığı anlamlı bir `description` front matter alanı içermelidir.
- Yollar ve dosya adları ASCII karakterlerle, tire (`-`) ile ayrılarak yazılır.
- Yeni doküman eklerken `sidebars.js` güncellenmelidir.
