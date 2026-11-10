---
description: "UBL-TR Ortak Elemanlar V 0.7: fatura, irsaliye ve yanıt belgelerinde paylaşılan 66 ortak sınıfın (taraf, adres, mal/hizmet, vergi, taşıma) yapısı."
keywords: ["UBL-TR", "Ortak Elemanlar", "Ortak Sınıflar", "Taraf", "Adres", "Vergi"]
---

# UBL-TR Ortak Elemanlar - V 0.7

UBL-TR içerisinde yer alan belgelerin içerdiği **ortak sınıfların** (adres, mal/hizmet, taraf gibi) nesne/eleman yapısını anlatan kılavuzdur. Ortak elemanlar, birden fazla belgede tekrar eden yapıları tek bir yerde toplar; fatura, e-İrsaliye ve e-İrsaliye yanıtı belgelerinin hepsi bu elemanları kullanır.

:::tip[İndir]
Ortak Elemanlar kılavuzunun tamamını PDF olarak indirebilirsiniz.
:::

<a
  href="/UNI-wiki/files/ubl-tr/ubl-tr-ortak-elemanlar-v0.7.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="button button--primary button--lg"
  download
  style={{textDecoration: 'none'}}
>
  📄 UBL-TR Ortak Elemanlar Kılavuzunu İndir (PDF)
</a>

<br />
<br />

> ℹ️ Alternatif link: <a href="/UNI-wiki/files/ubl-tr/ubl-tr-ortak-elemanlar-v0.7.pdf" target="_blank">PDF'yi doğrudan aç</a>

---

## Belge Künyesi

| Kılavuz | Sürüm | Yayın Tarihi | Sayfa Sayısı | Kaynak Kurum |
| :--- | :---: | :---: | :---: | :--- |
| UBL-TR Ortak Elemanlar | V 0.7 | Nisan 2017 | 81 | GİB Denetim ve Uyum Yönetimi Daire Başkanlığı |

---

## Kılavuzun Yapısı

| Bölüm | İçerik |
| :--- | :--- |
| **1. Giriş ve Temel Kavramlar** | Ortak elemanların ne olduğu ve nasıl açıklandığı. |
| **2.1 Genel** | Ortak elemanların kullanımına ilişkin genel bilgiler. |
| **2.2 Ortak Elemanlar - Detay** | 66 ortak elemanın tek tek açıklanması. |

Her ortak eleman için kılavuzda şu bölümler yer alır:

| Bölüm | İçerik |
| :--- | :--- |
| **Diyagram** | Elemanın şema içindeki diyagramı. |
| **Kardinalite** | `Zorunlu (1)`, `Zorunlu (1..n)`, `Seçimli (0..1)`, `Seçimli (0..n)` değerlerinden biri. |
| **Açıklama** | Elemanın ne amaçla kullanıldığı. |
| **Kullanım** | Elemanın veri tipi, kısıtları ve diğer elemanlarla ilişkileri; karmaşık elemanlarda "Bknz." referansları. |
| **Örnek** | Eleman için bir veya daha çok XML örneği. |

> ℹ️ Bir elemanın alt elemanları varsa **karmaşık eleman**, tek başına bir değer taşıyorsa **basit eleman** olarak adlandırılır. Örneğin `Party` (taraf) ortak elemanı, `PostalAddress` gibi karmaşık elemanlara referans verir.

---

## Ortak Elemanlar

Kılavuzda 66 ortak eleman açıklanmaktadır. Aşağıda bu elemanlar işlevlerine göre gruplandırılmıştır.

### Taraf ve İletişim

| UBL Adı | Türkçe Karşılığı |
| :--- | :--- |
| `Party` | Taraf |
| `PartyLegalEntity` | Tarafın Tüzel Kişilik Bilgileri |
| `PartyTaxScheme` | Tarafın Vergi Şeması |
| `SupplierParty` | Tedarikçi Tarafı |
| `CustomerParty` | Müşteri Tarafı |
| `Person` | Kişi |
| `Contact` | İletişim Bilgileri |
| `Communication` | İletişim Kanalı |
| `Address` | Adres |
| `Country` | Ülke |
| `Location` | Konum |
| `Branch` | Şube |
| `CorporateRegistrationScheme` | Kurumsal Kayıt Şeması |
| `ExternalReference` | Harici Referans |

### Belge ve Referans

| UBL Adı | Türkçe Karşılığı |
| :--- | :--- |
| `Attachment` | Ek |
| `BillingReference` | Faturalama Referansı |
| `BillingReferenceLine` | Faturalama Referans Satırı |
| `DocumentReference` | Belge Referansı |
| `DocumentResponse` | Belge Yanıtı |
| `Response` | Yanıt |
| `LineResponse` | Satır Yanıtı |
| `LineReference` | Satır Referansı |
| `OrderReference` | Sipariş Referansı |
| `OrderLineReference` | Sipariş Satır Referansı |

### Mal, Hizmet ve Kalemler

| UBL Adı | Türkçe Karşılığı |
| :--- | :--- |
| `GoodsItem` | Mal/Hizmet Kalemi |
| `Item` | Mal/Hizmet |
| `ItemIdentification` | Mal/Hizmet Tanımlama |
| `ItemInstance` | Mal/Hizmet Örneği |
| `CommodityClassification` | Mal/Hizmet Sınıflandırması |
| `InvoiceLine` | Fatura Satırı |
| `ReceiptLine` | Kabul Satırı |
| `DespatchLine` | Sevk Satırı |
| `Package` | Paket |
| `Dimension` | Ölçü / Boyut |
| `Temperature` | Sıcaklık |

### Vergi ve Finans

| UBL Adı | Türkçe Karşılığı |
| :--- | :--- |
| `TaxCategory` | Vergi Kategorisi |
| `TaxScheme` | Vergi Şeması |
| `TaxSubtotal` | Vergi Ara Toplamı |
| `TaxTotal` | Vergi Toplamı |
| `FinancialAccount` | Finansal Hesap |
| `FinancialInstitution` | Finansal Kurum |
| `PaymentMeans` | Ödeme Şekli |
| `PaymentTerms` | Ödeme Koşulları |
| `AllowanceCharge` | İndirim / Ek Ücret |
| `ExchangeRate` | Döviz Kuru |
| `Price` | Fiyat |
| `MonetaryTotal` | Parasal Toplam |
| `Period` | Dönem |

### Taşıma, Sevkiyat ve Teslimat

| UBL Adı | Türkçe Karşılığı |
| :--- | :--- |
| `Despatch` | Sevkiyat / Gönderim |
| `Shipment` | Sevkiyat |
| `ShipmentStage` | Sevkiyat Aşaması |
| `Stowage` | Yükleme / Devan |
| `TransportMeans` | Taşıma Aracı |
| `TransportEquipment` | Taşıma Ekipmanı |
| `TransportHandlingUnit` | Taşıma Birimi |
| `AirTransport` | Hava Taşımacılığı |
| `MaritimeTransport` | Deniz Taşımacılığı |
| `RailTransport` | Demiryolu Taşımacılığı |
| `RoadTransport` | Karayolu Taşımacılığı |
| `HazardousGoodsTransit` | Tehlikeli Madde Taşımacılığı |
| `CustomsDeclaration` | Gümrük Beyannamesi |
| `Delivery` | Teslimat |
| `DeliveryTerms` | Teslim Şartları |

### İmza ve Genişletme

| UBL Adı | Türkçe Karşılığı |
| :--- | :--- |
| `Signature` | Mali Mühür / İmza |
| `ExtensionContent` | Genişletme İçeriği |
| `UBLExtension` | UBL Genişletme |

---

## Sürüm Geçmişi

| Sürüm | Yayım | Açıklama |
| :---: | :--- | :--- |
| 0.7 | 12.04.2017 | `Contact` elemanı güncellendi ve `DespatchContact`, `DeliveryContact` elemanları eklendi. |
| 0.6 | 21.02.2017 | `OriginCountry` eklendi. |
| 0.5 | 26.12.2016 | `Consignment` alanı silindi. |
| 0.4 | 10.11.2016 | DespatchAdvice ve ReceiptAdvice belgelerinin ortak elemanları entegre edildi. |
| 0.3 | 25.03.2016 / 04.05.2016 | `LineExtensionAmount` ve `MonetaryTotal - LineExtensionAmount` alanları değiştirildi. |
| 0.2 | 31.03.2015 | Örnekteki `TaxInclusiveAmount` ve `PayableAmount` alanları değiştirildi; `ExchangeRate` örneği güncellendi. |
| 0.1 | 28.11.2014 | Taslak kılavuzun ilk yayım tarihi. |

---

## Pratik Notlar

- Ortak elemanlar **ortak sınıflar** olarak tanımlanır; bir belge şemasında geçen bir elemanın ayrıntısını bu kılavuzda arayabilirsiniz.
- `Party` (taraf) yapısında vergi şeması, iletişim ve adres bilgileri **ayrı ayrı** alt elemanlar olarak taşınır; taraf bilgisi girerken bu ayrımı göz önünde bulundurun.
- `TaxTotal`, `TaxSubtotal` ve `TaxCategory` yapıları birbirine referans verir; vergi kodu değerleri için [Kod Listeleri](/docs/ubl-tr/kod-listeleri) sayfasına bakabilirsiniz.
- `AllowanceCharge` (iskonto/ek ücret) ve `MonetaryTotal` ilişkisi, `LineExtensionAmount` hesabında kritik rol oynar; ticari fatura senaryosunda bu hesap ayrıca güncellenmiştir.

---

## İlgili Kılavuzlar

- [UBL-TR Genel Açıklamalar - V 0.4](/docs/ubl-tr/genel-aciklamalar)
- [UBL-TR Fatura - V 1.0](/docs/ubl-tr/belgeler/fatura)
- [UBL-TR Sevk İrsaliyesi - V 1.2](/docs/ubl-tr/belgeler/irsaliye)
- [UBL-TR Kod Listeleri - V 1.43](/docs/ubl-tr/kod-listeleri)
