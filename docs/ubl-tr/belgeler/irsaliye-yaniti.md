---
description: "UBL-TR İrsaliye Yanıtı (Receipt Advice) V 1.0 kılavuzu: e-İrsaliye yanıtının XSD şeması, elemanları, kardinaliteleri ve XML örnekleri."
keywords: ["UBL-TR", "İrsaliye Yanıtı", "Receipt Advice", "e-İrsaliye", "belgeler"]
---

# UBL-TR İrsaliye Yanıtı (Receipt Advice) - V 1.0

UBL-TR v1.2 paketinde yer alan **irsaliye yanıtı belgesinin** elemanlarına ait XSD, tanımlama, kullanım şekilleri ve kardinaliteler hakkında bilgi veren kılavuzdur. Kılavuzda her eleman için diyagram, kardinalite, açıklama, kullanım ve XML örneği sunulur.

:::tip[İndir]
İrsaliye Yanıtı kılavuzunun tamamını PDF olarak indirebilirsiniz.
:::

<a
  href="/UNI-wiki/files/ubl-tr/ubl-tr-irsaliye-yaniti-v1.0.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="button button--primary button--lg"
  download
  style={{textDecoration: 'none'}}
>
  📄 UBL-TR İrsaliye Yanıtı Kılavuzunu İndir (PDF)
</a>

<br />
<br />

> ℹ️ Alternatif link: <a href="/UNI-wiki/files/ubl-tr/ubl-tr-irsaliye-yaniti-v1.0.pdf" target="_blank">PDF'yi doğrudan aç</a>

---

## Belge Künyesi

| Kılavuz | Sürüm | Yayın Tarihi | Sayfa Sayısı | Kaynak Kurum |
| :--- | :---: | :---: | :---: | :--- |
| UBL-TR İrsaliye Yanıtı (Receipt Advice) | V 1.0 | Aralık 2017 | 24 | GİB Denetim ve Uyum Yönetim Daire Başkanlığı |

---

## Kılavuzun Yapısı

| Bölüm | İçerik |
| :--- | :--- |
| **1. Giriş** | Kılavuzun amacı ve kullanılan tablo yapısının açıklanması. |
| **2.1 XSD Gösterimi** | İrsaliye yanıtı belgesinin XSD şemasındaki ana elemanların gösterimi. |
| **2.2 İrsaliye Yanıtı Elemanları - Genel** | Ana elemanların Türkçe karşılıkları ve içerikleri. |
| **2.3 İrsaliye Yanıtı Elemanları - Detay** | Her elemanın diyagram, kardinalite, açıklama, kullanım ve XML örneği. |

---

## Ana Elemanlar (Genel Bölüm)

| UBL Adı | Türkçe Karşılığı | İçerik |
| :--- | :--- | :--- |
| `UBLExtensions` | UBL Genişletme Alanı | XAdES formatında elektronik imza (mali mühür) bilgilerinin bulunduğu alan. |
| `ProfileID` | Senaryo | Yanıtın ait olduğu iş akışı (ör. `TEMELIRSALIYE`). |
| `ID` | İrsaliye Yanıtı Numarası | Yanıta ait numara. |
| `CopyIndicator` | Asıl / Suret | Yanıtın asıl veya suret bilgisi. |
| `UUID` | Evrensel Tekil Tanımlama | Yanıtın tekliğini sağlayan numara (ETTN). |
| `IssueDate` | Düzenleme Tarihi | Yanıtın düzenlenme tarihi. |
| `IssueTime` | Düzenleme Zamanı | Yanıtın düzenlenme zamanı. |
| `ReceiptAdviceTypeCode` | İrsaliye Yanıtı Tip Kodu | Yanıtın tipini belirten kod (kabul, şikâyet vb.). |
| `Note` | Not | Yanıta ilişkin genel açıklamalar. |
| `DespatchDocumentReference` | Sevk İrsaliyesi Referansı | Yanıtın karşılık geldiği e-İrsaliyenin referans bilgileri. |
| `Signature` | Mali Mühür / İmza | Elektronik mali mühür ve/veya elektronik imza ile sertifika bilgileri. |
| `Shipment` | Sevkiyat | Teslim ve taşıma bilgileri. |
| `ReceiptLine` | Kabul Satırı | Yanıtta yer alan kabul/ret edilen kalemler. |

---

## Detay Elemanları

Kılavuzun 2.3 numaralı bölümünde aşağıdaki elemanlar tek tek açıklanır:

### Kimlik ve Versiyon Alanları
`UBLExtensions` · `UBLVersionID` · `CustomizationID` · `ProfileID` · `ID` · `CopyIndicator` · `UUID` · `IssueDate` · `IssueTime` · `ReceiptAdviceTypeCode` · `Note` · `LineCountNumeric`

### Referans Alanları
`OrderReference` · `DespatchDocumentReference` · `AdditionalDocumentReference`

### Taraf ve Teslimat Alanları
`Signature` · `DeliveryCustomerParty` · `DespatchSupplierParty` · `BuyerCustomerParty` · `SellerSupplierParty` · `Shipment` · `ReceiptLine`

---

## Sürüm Geçmişi

| Sürüm | Yayım | Açıklama |
| :---: | :--- | :--- |
| 1.0 | 14.12.2017 | Kılavuzun ilk resmî yayımı; irsaliye referans bilgilerinin belirtilmesi ile ilgili bilgiler eklendi. |
| 0.2 | 12.04.2017 | Teslim eden ve alan bilgilerinin temsil ettiği alanlar değişti. |
| 0.1 | 10.11.2016 | Taslak kılavuzun ilk yayım tarihi. |

---

## Pratik Notlar

- **İrsaliye yanıtı, gönderilen e-İrsaliyeye referans verir.** `DespatchDocumentReference` alanında karşılık gelen irsaliyenin numarası ve ETTN değeri yer alır.
- **Yanıt, malın kabul veya kısmi kabulünü bildirir.** Ret, şikâyet ve hasarlı/fazla-eksik ürün bildirimleri de yine yanıt belgesiyle yapılır; örnekler için [Temel e-İrsaliye Senaryosu](/docs/ubl-tr/senaryolar/temel-irsaliye-senaryosu) sayfasına bakabilirsiniz.
- **Yasal saklama:** İrsaliye yanıtı, ilgili e-İrsaliye ile birlikte yasal saklama müddeti boyunca muhafaza edilmelidir.
- **Ortak elemanlar** (taraf, adres, mal/hizmet vb.) [Ortak Elemanlar](/docs/ubl-tr/ortak-elemanlar) kılavuzunda detaylıdır.
- Gönderim sonrası dönen hata ve durum kodları için [GİB Durum Kodları](/docs/sss-ve-ipuclari/gib-durum-kodlari) sayfasına bakabilirsiniz.

---

## İlgili Kılavuzlar

- [UBL-TR Genel Açıklamalar - V 0.4](/docs/ubl-tr/genel-aciklamalar)
- [UBL-TR Sevk İrsaliyesi - V 1.2](/docs/ubl-tr/belgeler/irsaliye)
- [UBL-TR Temel e-İrsaliye Senaryosu - V 0.3](/docs/ubl-tr/senaryolar/temel-irsaliye-senaryosu)
