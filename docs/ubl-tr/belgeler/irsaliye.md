---
description: "UBL-TR Sevk İrsaliyesi (Despatch Advice) V 1.2 kılavuzu: e-İrsaliye belgesinin XSD şeması, elemanları, kardinaliteleri ve XML örnekleri."
keywords: ["UBL-TR", "İrsaliye", "Sevk İrsaliyesi", "Despatch Advice", "belgeler"]
---

# UBL-TR Sevk İrsaliyesi (Despatch Advice) - V 1.2

UBL-TR v1.2 paketinde yer alan **sevk irsaliyesi belgesinin** elemanlarına ait XSD, tanımlama, kullanım şekilleri ve kardinaliteler hakkında bilgi veren kılavuzdur. Kılavuzda her eleman için diyagram, kardinalite, açıklama, kullanım ve XML örneği sunulur.

:::tip[İndir]
Sevk İrsaliyesi kılavuzunun tamamını PDF olarak indirebilirsiniz.
:::

<a
  href="/UNI-wiki/files/ubl-tr/ubl-tr-irsaliye-v1.2.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="button button--primary button--lg"
  download
  style={{textDecoration: 'none'}}
>
  📄 UBL-TR Sevk İrsaliyesi Kılavuzunu İndir (PDF)
</a>

<br />
<br />

> ℹ️ Alternatif link: <a href="/UNI-wiki/files/ubl-tr/ubl-tr-irsaliye-v1.2.pdf" target="_blank">PDF'yi doğrudan aç</a>

---

## Belge Künyesi

| Kılavuz | Sürüm | Yayın Tarihi | Sayfa Sayısı | Kaynak Kurum |
| :--- | :---: | :---: | :---: | :--- |
| UBL-TR Sevk İrsaliyesi (Despatch Advice) | V 1.2 | Aralık 2018 | 23 | GİB Denetim ve Uyum Yönetim Daire Başkanlığı |

---

## Kılavuzun Yapısı

| Bölüm | İçerik |
| :--- | :--- |
| **1. Giriş** | Kılavuzun amacı ve kullanılan tablo yapısının açıklanması. |
| **2.1 XSD Gösterimi** | Sevk irsaliyesi belgesinin XSD şemasındaki ana elemanların gösterimi. |
| **2.2 Sevk İrsaliyesi Elemanları - Genel** | Ana elemanların Türkçe karşılıkları ve içerikleri. |
| **2.3 Sevk İrsaliyesi Elemanları - Detay** | Her elemanın diyagram, kardinalite, açıklama, kullanım ve XML örneği. |

---

## Ana Elemanlar (Genel Bölüm)

| UBL Adı | Türkçe Karşılığı | İçerik |
| :--- | :--- | :--- |
| `UBLExtensions` | UBL Genişletme Alanı | XAdES formatında elektronik imza (mali mühür) bilgilerinin bulunduğu alan. |
| `UBLVersionID` | UBL Versiyon Numarası | Kullanılan UBL sürümü. |
| `CustomizationID` | Özelleştirme Numarası | UBL-TR özelleştirme numarası. |
| `ProfileID` | Senaryo | İrsaliyenin ait olduğu iş akışı (ör. `TEMELIRSALIYE`). |
| `ID` | Sevk İrsaliyesi Numarası | Sevk irsaliyesine ait numara. |
| `CopyIndicator` | Asıl / Suret | Sevk irsaliyesinin asıl veya suret bilgisi. |
| `UUID` | Evrensel Tekil Tanımlama | İrsaliyenin tekliğini sağlayan numara (ETTN). |
| `IssueDate` | Düzenleme Tarihi | İrsaliyenin düzenlenme tarihi. |
| `IssueTime` | Düzenleme Zamanı | İrsaliyenin düzenlenme zamanı. |
| `DespatchAdviceTypeCode` | Sevk İrsaliyesi Tip Kodu | Sevk irsaliyesinin tipini belirten kod. |
| `Note` | Not | İrsaliyeye ilişkin genel açıklamalar. |
| `LineCountNumeric` | Satır Sayısı | İrsaliyedeki kalem sayısı. |
| `Signature` | Mali Mühür / İmza | Elektronik mali mühür ve/veya elektronik imza ile sertifika bilgileri. |
| `DespatchSupplierParty` | Gönderen Taraf | Sevkiyatı yapan tarafın bilgileri. |
| `DeliveryCustomerParty` | Teslim Edilen Taraf | Malları teslim alan tarafın bilgileri. |
| `Shipment` | Sevkiyat | Taşıma ve teslimat bilgileri. |
| `DespatchLine` | Sevk Satırı | İrsaliyedeki sevk kalemleri. |

---

## Detay Elemanları

Kılavuzun 2.3 numaralı bölümünde aşağıdaki elemanlar tek tek açıklanır:

### Kimlik ve Versiyon Alanları
`UBLExtensions` · `UBLVersionID` · `CustomizationID` · `ProfileID` · `ID` · `CopyIndicator` · `UUID` · `IssueDate` · `IssueTime` · `DespatchAdviceTypeCode` · `Note` · `LineCountNumeric`

### Referans Alanları
`OrderReference` · `AdditionalDocumentReference`

### Taraf ve Sevkiyat Alanları
`Signature` · `DespatchSupplierParty` · `DeliveryCustomerParty` · `BuyerCustomerParty` · `SellerSupplierParty` · `OriginatorCustomerParty` · `Shipment` · `DespatchLine`

---

## Sürüm Geçmişi

| Sürüm | Yayım | Açıklama |
| :---: | :--- | :--- |
| 1.2 | 20.12.2018 | `DespatchAdviceTypeCode` elemanının alabileceği değerler güncellendi. |
| 1.1 | 01.06.2018 | `LineCountNumeric` ve `OrderReference` elemanlarının nicelikleri değişti. |
| 1.0 | 14.12.2017 | Kılavuzun ilk resmî yayımı. |
| 0.4 | 11.04.2017 | Teslim eden bilgilerinin temsil ettiği alan değişti. |
| 0.3 | 26.12.2016 | `Shipment` ve `DespatchLine` tutar alanları değişti. |
| 0.2 | 23.12.2016 | `ProfileID` değeri güncellendi. |

---

## Pratik Notlar

- **Sevk irsaliyesi tek başına değil, yanıtıyla birlikte işler.** Gönderilen e-İrsaliye, alıcı tarafından [İrsaliye Yanıtı](/docs/ubl-tr/belgeler/irsaliye-yaniti) ile karşılanır.
- **Senaryo (ProfileID)** değerleri [Kod Listeleri](/docs/ubl-tr/kod-listeleri#profileid-senaryo) sayfasındaki tabloda yer alır.
- **Ortak elemanlar** (taraf, adres, mal/hizmet, taşıma araçları vb.) [Ortak Elemanlar](/docs/ubl-tr/ortak-elemanlar) kılavuzunda detaylıdır.
- Gönderim sonrası dönen hata ve durum kodları için [GİB Durum Kodları](/docs/sss-ve-ipuclari/gib-durum-kodlari) sayfasına bakabilirsiniz.

---

## İlgili Kılavuzlar

- [UBL-TR Genel Açıklamalar - V 0.4](/docs/ubl-tr/genel-aciklamalar)
- [UBL-TR İrsaliye Yanıtı - V 1.0](/docs/ubl-tr/belgeler/irsaliye-yaniti)
- [UBL-TR Temel e-İrsaliye Senaryosu - V 0.3](/docs/ubl-tr/senaryolar/temel-irsaliye-senaryosu)
