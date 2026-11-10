---
description: "UBL-TR v1.2.1 (UBL 2.1 Türkiye Özelleştirmesi) paketinin ne olduğu, kılavuz setinin içeriği, sürüm farkları ve tüm UBL-TR kılavuzlarına giriş noktası."
keywords: ["UBL-TR", "UBL", "v1.2.1", "Genel Açıklamalar", "ubl-tr"]
---

# UBL-TR v1.2.1 Genel Açıklamalar (V 0.4)

Gelir İdaresi Başkanlığı (GİB) tarafından hazırlanan UBL-TR paketi, e-Fatura uygulamasında kullanılan XML belge formatının ulusal özelleştirmesidir. **UBL-TR v1.2.1**, UBL 2.1 standardındaki fatura, uygulama yanıtı, e-İrsaliye ve e-İrsaliye yanıtı belgelerinin Türkiye koşullarına göre uyarlanmış hâlidir.

Bu sayfa, UBL-TR paketine giriş noktasıdır; ilgili kılavuzların tamamına buradan ulaşabilirsiniz.

:::tip[İndir]
Genel Açıklamalar kılavuzunun tamamını PDF olarak indirebilirsiniz.
:::

<a
  href="/UNI-wiki/files/ubl-tr/ubl-tr-genel-aciklamalar-v0.4.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="button button--primary button--lg"
  download
  style={{textDecoration: 'none'}}
>
  📄 UBL-TR Genel Açıklamalar Kılavuzunu İndir (PDF)
</a>

<br />
<br />

> ℹ️ Alternatif link: <a href="/UNI-wiki/files/ubl-tr/ubl-tr-genel-aciklamalar-v0.4.pdf" target="_blank">PDF'yi doğrudan aç</a>

---

## Belge Künyesi

| Kılavuz | Sürüm | Yayın Tarihi | Sayfa Sayısı | Kaynak Kurum |
| :--- | :---: | :---: | :---: | :--- |
| UBL-TR Genel Açıklamalar | V 0.4 | Aralık 2016 | 19 | GİB Denetim ve Uyum Yönetimi Daire Başkanlığı |

---

## UBL Nedir?

OASIS tarafından geliştirilen **UBL (Evrensel İş Dili - Universal Business Language)**, iş dünyasının evrensel ölçekte birlikte iş yapabilirliğini sağlamak amacıyla standart XML elektronik iş dokümanı formatları geliştirmiştir.

- **UBL 1.0** 2004 yılında, **UBL 2.0** 2006 yılında yayımlanmış; uluslararası süreçleri kapsayacak şekilde 2008'de güncellenmiştir.
- **UBL 2.1**, 4 Kasım 2013 tarihinde standartlaştırılmıştır ve bugün itibariyle 66 adet ticari belgenin XML formatını içerir.
- UBL, EDI ve ebXML gibi yapıların tamamını kapsayan genişletilmiş bir yapıdır; satınalma, sipariş, ödeme ve faturalama gibi süreçlere yönelik belge kütüphaneleri içerir.
- Belge şemaları, Birleşmiş Milletler/Ticareti Kolaylaştırma ve Elektronik Ticaret Merkezi'nin (UN/CEFACT) **CCTS** metodolojisine dayanır; böylece belgelerde önceden tanımlanmış ortak elemanlar yeniden kullanılabilir.
- UBL'i ilk kullanan ülkeler arasında Danimarka (OIOUBL), İsveç (Svefaktura), Norveç, İngiltere, Finlandiya ve İzlanda yer alır. Avrupa Komisyonunun **PEPPOL** projesi de UBL tabanlıdır.

> ℹ️ UBL standartında süreç tanımları, belgeler ve elemanlar veri taşınabilirliği için İngilizce adlandırılmıştır. UBL-TR özelleştirmesinde de eleman adları İngilizce (UBL adı) olarak korunmuştur; Türkçe karşılıkları kılavuzlarda açıklanmaktadır.

---

## UBL-TR v1.2.1 Nasıl Türetildi?

Türkiye'ye uyarlama yöntemi dört adımda özetlenebilir:

1. **Zorunlu elemanlar korunur.** UBL 2.1'de zorunlu olan elemanlar UBL-TR'de de kullanılmıştır (ör. Fatura numarası).
2. **Gerekli seçimli elemanlar seçilir.** Türkiye için gerekli görülen seçimli elemanlar alınmış, kalanları silinmiştir (ör. `TaxPointDate`).
3. **Kardinaliteler sınırlandırılır.** Bazı elemanların kardinalite değerleri değiştirilmiştir (ör. UBL 2.1'de seçimli olan "Fatura Tipi" elemanı UBL-TR'de zorunlu olarak belirlenmiştir).
4. **Kod listeleri belirlenir.** Kodla ifade edilmesi gereken elemanlar için değer kümeleri tanımlanır.

Bu nedenle **UBL-TR v1.2.1 şemaları, UBL 2.1 standardının bir alt kümesidir.**

---

## Kılavuz Seti

UBL-TR kılavuzları beş dizinden oluşur:

| Dizin | İçerik |
| :--- | :--- |
| **Genel Açıklamalar** | UBL-TR paketiyle ilgili genel bilgiler, sürüm farkları ve özelleştirme yöntemi. |
| **Senaryolar** | Belgelerin hangi durumlarda ve nasıl düzenlendiğini anlatan iş akışları, taraf rolleri ve örnek XML'ler. |
| **Belgeler** | Fatura, Uygulama Yanıtı, e-İrsaliye ve e-İrsaliye Yanıtı belgelerinin nesne/eleman yapısı. |
| **Ortak Elemanlar** | Adres, taraf, mal/hizmet gibi belgeler arasında paylaşılan ortak sınıflar. |
| **Kod Listeleri** | Kodla ifade edilen elemanların değer kümeleri ve kimlik şemaları. |

### Belgeler Kılavuzları

- [UBL-TR Fatura (Invoice) - V 1.0](/docs/ubl-tr/belgeler/fatura)
- [UBL-TR Sevk İrsaliyesi (Despatch Advice) - V 1.2](/docs/ubl-tr/belgeler/irsaliye)
- [UBL-TR İrsaliye Yanıtı (Receipt Advice) - V 1.0](/docs/ubl-tr/belgeler/irsaliye-yaniti)
- [UBL-TR Uygulama Yanıtı (Application Response) - V 0.2](/docs/ubl-tr/belgeler/uygulama-yaniti)

### Senaryo Kılavuzları

- [UBL-TR Temel Fatura Senaryosu - V 0.2](/docs/ubl-tr/senaryolar/temel-fatura-senaryosu)
- [UBL-TR Ticari Fatura Senaryosu - V 0.3](/docs/ubl-tr/senaryolar/ticari-fatura-senaryosu)
- [UBL-TR Temel e-İrsaliye Senaryosu - V 0.3](/docs/ubl-tr/senaryolar/temel-irsaliye-senaryosu)

### Referans Kılavuzları

- [UBL-TR Ortak Elemanlar - V 0.7](/docs/ubl-tr/ortak-elemanlar)
- [UBL-TR Kod Listeleri - V 1.43](/docs/ubl-tr/kod-listeleri)

---

## UBL-TR v1.2.1 Paketi

Paket, kılavuzların yanı sıra şu dizinleri içerir:

- **`xsdrt/maindoc`** - Belge XSD'leri (UBLTR-Invoice-2.1, UBLTR-ApplicationResponse-2.1 vb.).
- **`xsdrt/common`** - Belgelerin kullandığı ortak sınıflar, veri tipleri ve genişletilmiş elemanların XSD'leri.
- **`xml`** - Örnek XML dokümanları.
- **`cl`** - Kod listelerinde belirtilen değerler.

---

## Sürüm Farkları

### v1.2.1 → v1.2

Bu sürümde e-İrsaliye ve e-İrsaliye Yanıtı belgelerinin şemaları ve bu şemaların içerdiği ortak elemanlar eklenmiştir. Ortak eleman seviyesindeki değişiklikler:

- `Shipment` / `Delivery` eklendi
- `Shipment` / `GoodsItem` eklendi
- `Shipment` / `ShipmentStage` eklendi
- `Party` / `PhysicalLocation` eklendi
- `TaxScheme` / `ID` eklendi

### v1.2 → v1.1

Değişiklikler üç kategoride sunulur: belge seviyesi, ortak eleman seviyesi ve kod listesi seviyesi. Belge seviyesindeki örnekler:

- `/Invoice/AccountingCost` elemanı eklendi
- `/Invoice/BillingReference` elemanı eklendi

---

## Pratik Notlar

- Belgelerdeki alanlar için, mevzuatın zorunlu tuttuğu bilgililerin yanında kullanıcı ihtiyaçlarına yönelik alanlar da tanımlanmıştır. Entegrasyon yaparken her elemanın kılavuzdaki açıklamasını dikkatlice değerlendirin.
- Kod listeleri **bilgilendirme amaçlıdır** ve sürekli değişebilir. Asıl ve güncel kod listeleri `www.efatura.gov.tr` adresinde yayımlanır.
- Gönderim sonrası dönen hata ve durum kodları için [GİB Durum Kodları](/docs/sss-ve-ipuclari/gib-durum-kodlari) sayfasına bakabilirsiniz.
- UBL-TR belgeleri ile ilgili tereddüt, görüş ve öneriler `forum.efatura.gov.tr` üzerinden GİB'ye iletilebilir.

> ⚠️ **Yasal saklama:** Uygulama yanıtı, irsaliye yanıtı gibi belgeler fatura/irsaliye ile birlikte yasal saklama müddeti boyunca muhafaza edilmelidir.
