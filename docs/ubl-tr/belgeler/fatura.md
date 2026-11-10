---
description: "UBL-TR Fatura (Invoice) V 1.0 kılavuzu: fatura belgesinin XSD şeması, elemanları, kardinaliteleri ve örnek XML kullanımları."
keywords: ["UBL-TR", "Fatura", "Invoice", "XSD", "belgeler"]
---

# UBL-TR Fatura (Invoice) - V 1.0

UBL-TR v1.2 paketinde yer alan **fatura belgesinin** elemanlarına ait XSD, tanımlama, kullanım şekilleri ve kardinaliteler hakkında bilgi veren kılavuzdur. Kılavuzda her eleman için diyagram, kardinalite, açıklama, kullanım ve XML örneği sunulur.

:::tip[İndir]
Fatura kılavuzunun tamamını PDF olarak indirebilirsiniz.
:::

<a
  href="/UNI-wiki/files/ubl-tr/ubl-tr-fatura-v1.0.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="button button--primary button--lg"
  download
  style={{textDecoration: 'none'}}
>
  📄 UBL-TR Fatura Kılavuzunu İndir (PDF)
</a>

<br />
<br />

> ℹ️ Alternatif link: <a href="/UNI-wiki/files/ubl-tr/ubl-tr-fatura-v1.0.pdf" target="_blank">PDF'yi doğrudan aç</a>

---

## Belge Künyesi

| Kılavuz | Sürüm | Yayın Tarihi | Sayfa Sayısı | Kaynak Kurum |
| :--- | :---: | :---: | :---: | :--- |
| UBL-TR Fatura (Invoice) | V 1.0 | Aralık 2017 | 37 | GİB Denetim ve Uyum Yönetim Daire Başkanlığı |

---

## Kılavuzun Yapısı

| Bölüm | İçerik |
| :--- | :--- |
| **1. Giriş** | Kılavuzun amacı ve kullanılan tablo yapısının açıklanması. |
| **2.1 XSD Gösterimi** | Fatura belgesinin XSD şemasındaki ana elemanların gösterimi. |
| **2.2 Fatura Elemanları - Genel** | Ana elemanların Türkçe karşılıkları ve içerikleri. |
| **2.3 Fatura Elemanları - Detay** | Her elemanın diyagram, kardinalite, açıklama, kullanım ve XML örneği. |

### Kardinalite Sembolleri

| Sembol | Anlamı |
| :--- | :--- |
| `Zorunlu (1)` | Eleman zorunludur ve mutlaka bir tane bulunmalıdır. |
| `Zorunlu (1..n)` | Eleman zorunludur, en az bir tane bulunmalı ve tekrarlanabilir. |
| `Seçimli (0..1)` | Eleman seçimlidir ve en çok bir tane bulunabilir. |
| `Seçimli (0..n)` | Eleman seçimlidir ve birden fazla tekrarlanabilir. |

---

## Ana Elemanlar (Genel Bölüm)

| UBL Adı | Türkçe Karşılığı | İçerik |
| :--- | :--- | :--- |
| `UBLExtensions` | UBL Genişletme Alanı | XAdES formatında elektronik imza (mali mühür) bilgilerinin bulunduğu alan. |
| `UBLVersionID` | UBL Versiyon Numarası | Kullanılan UBL sürümü. |
| `CustomizationID` | Özelleştirme Numarası | UBL-TR özelleştirme numarası. |
| `ProfileID` | Senaryo | Faturanın ait olduğu iş akışı (ör. `TEMELFATURA`, `TICARIFATURA`). |
| `ID` | Fatura Numarası | Faturaya ait numara. |
| `CopyIndicator` | Asıl / Suret | Faturanın asıl veya suret bilgisi. |
| `UUID` | Evrensel Tekil Tanımlama | Faturanın tekliğini sağlayan numara (ETTN). |
| `IssueDate` | Düzenleme Tarihi | Faturanın düzenlenme tarihi. |
| `IssueTime` | Düzenleme Zamanı | Faturanın düzenlenme zamanı. |
| `InvoiceTypeCode` | Fatura Tip Kodu | `SATIS`, `IADE`, `TEVKIFAT`, `ISTISNA` vb. Fatura tipi. |
| `Note` | Not | Faturaya ilişkin genel açıklamalar. |
| `DocumentCurrencyCode` | Belge Para Birimi | Faturanın para birimi (ISO 4217). |
| `Signature` | Mali Mühür / İmza | Elektronik mali mühür ve/veya elektronik imza ile sertifika bilgileri. |
| `AccountingSupplierParty` | Fatura Düzenleyen | Faturayı düzenleyen tarafın bilgileri. |
| `AccountingCustomerParty` | Fatura Alıcısı | Faturayı alan tarafın bilgileri. |
| `LegalMonetaryTotal` | Yasal Toplam | `TaxInclusiveAmount`, `PayableAmount` gibi ödeme toplamları. |
| `InvoiceLine` | Fatura Satırı | Fatura kalemleri. |

---

## Detay Elemanları

Kılavuzun 2.3 numaralı bölümünde aşağıdaki elemanlar tek tek açıklanır:

### Kimlik ve Versiyon Alanları
`UBLExtensions` · `UBLVersionID` · `CustomizationID` · `ProfileID` · `ID` · `CopyIndicator` · `UUID` · `IssueDate` · `IssueTime` · `InvoiceTypeCode` · `Note`

### Para Birimi ve Referans Alanları
`DocumentCurrencyCode` · `TaxCurrencyCode` · `PricingCurrencyCode` · `PaymentCurrencyCode` · `PaymentAlternativeCurrencyCode` · `AccountingCost` · `LineCountNumeric` · `InvoicePeriod` · `OrderReference` · `BillingReference` · `DespatchDocumentReference` · `ReceiptDocumentReference` · `OriginatorDocumentReference` · `ContractDocumentReference` · `AdditionalDocumentReference`

### Taraf, Teslim ve Ödeme Alanları
`Signature` · `AccountingSupplierParty` · `AccountingCustomerParty` · `BuyerCustomerParty` · `SellerSupplierParty` · `TaxRepresentativeParty` · `Delivery` · `PaymentMeans` · `PaymentTerms` · `AllowanceCharge` · `TaxExchangeRate` · `PricingExchangeRate` · `PaymentExchangeRate` · `PaymentAlternativeExchangeRate`

### Vergi, Toplam ve Satır Alanları
`TaxTotal` · `WithholdingTaxTotal` · `LegalMonetaryTotal` · `InvoiceLine`

---

## Pratik Notlar

- **Senaryo (ProfileID)** fatura tipinden bağımsızdır; iş akışını belirtir. Kullanılabilir değerler için [Kod Listeleri - ProfileID](/docs/ubl-tr/kod-listeleri#profileid-senaryo) bölümüne bakabilirsiniz.
- **Fatura Tip Kodu (InvoiceTypeCode)** ile **Senaryo (ProfileID)** birlikte değerlendirilmelidir. Fatura tipi kodlarının tam listesi [Kod Listeleri](/docs/ubl-tr/kod-listeleri#invoicetypecode-fatura-tip-kodu) sayfasındadır.
- **İmza**, `UBLExtensions` alanında XAdES formatında taşınır; mali mühür veya elektronik imza bilgisi bu alanda bulunur.
- **Ortak elemanlar** (taraf, adres, mal/hizmet, vergi şeması vb.) [Ortak Elemanlar](/docs/ubl-tr/ortak-elemanlar) kılavuzunda detaylıdır.
- Gönderim sonrası dönen hata ve durum kodları için [GİB Durum Kodları](/docs/sss-ve-ipuclari/gib-durum-kodlari) sayfasına bakabilirsiniz.

---

## İlgili Kılavuzlar

- [UBL-TR Genel Açıklamalar - V 0.4](/docs/ubl-tr/genel-aciklamalar)
- [UBL-TR Uygulama Yanıtı - V 0.2](/docs/ubl-tr/belgeler/uygulama-yaniti)
- [UBL-TR Temel Fatura Senaryosu - V 0.2](/docs/ubl-tr/senaryolar/temel-fatura-senaryosu)
- [UBL-TR Ticari Fatura Senaryosu - V 0.3](/docs/ubl-tr/senaryolar/ticari-fatura-senaryosu)
