# Taslak Dokümanlar

Bu klasör, **henüz siteye eklenmemiş** doküman taslaklarınız için ayrılmıştır.

## Kullanım

- Yeni bir doküman yazdığınızda buraya bırakın. Alt klasör adları sitedeki
  sidebar kategorilerini yansıtır:
  - `kurumsal-ve-genel`
  - `urunler-ve-paketler`
  - `fiyatlandirma-ve-hesaplama`
  - `indirmeler-ve-kurulum`
  - `baslangic-ve-kurulum`
  - `genel-muhasebe`
  - `on-muhasebe`
  - `insan-kaynaklari`
  - `sss-ve-ipuclari`
  - `rehberler-ve-kodlar`

  Kategoriye uygun alt klasör yoksa oluşturabilirsiniz.

## Nasıl yayına alınır?

Kontrol sırasında içerik incelenir, uygunsa:

1. Dosya `docs/<kategori>/<slug>.md` altına taşınır.
2. En üste Docusaurus front matter'ı eklenir:
   ```md
   ---
   sidebar_position: 1
   description: Kısa açıklama
   ---
   ```
3. `sidebars.js`'teki ilgili kategoriye sayfa eklenir.
4. Commit → push → GitHub Actions otomatik yayınlar.

> Not: `drafts/` altındaki dosyalar sitede **görünmez**; yalnızca `docs/`
> içeriği yayınlanır.
