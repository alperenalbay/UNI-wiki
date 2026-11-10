---
description: "UBL-TR Uygulama Yanıtı (Application Response) V 0.2 kılavuzu: e-Fatura kabul, ret ve iade işlemlerinde kullanılan uygulama yanıtının XSD şeması ve elemanları."
keywords: ["UBL-TR", "Uygulama Yanıtı", "Application Response", "KABUL", "RED", "belgeler"]
---

# UBL-TR Uygulama Yanıtı (Application Response) - V 0.2

UBL-TR paketinde yer alan **uygulama yanıtı belgesinin** elemanlarına ait XSD, tanımlama, kullanım şekilleri ve kardinaliteler hakkında bilgi veren kılavuzdur. Kılavuzda her eleman için diyagram, kardinalite, açıklama, kullanım ve XML örneği sunulur.

Uygulama yanıtı, e-Fatura Uygulaması kapsamında gönderilen faturanın **kabul, ret ve iade** işlemlerinin uygulama içerisinde yapılmasını sağlayan belgedir.

:::tip[İndir]
Uygulama Yanıtı kılavuzunun tamamını PDF olarak indirebilirsiniz.
:::

<a
  href="/UNI-wiki/files/ubl-tr/ubl-tr-uygulama-yaniti-v0.2.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="button button--primary button--lg"
  download
  style={{textDecoration: 'none'}}
>
  📄 UBL-TR Uygulama Yanıtı Kılavuzunu İndir (PDF)
</a>

<br />
<br />

> ℹ️ Alternatif link: <a href="/UNI-wiki/files/ubl-tr/ubl-tr-uygulama-yaniti-v0.2.pdf" target="_blank">PDF'yi doğrudan aç</a>

---

## Belge Künyesi

| Kılavuz | Sürüm | Yayın Tarihi | Sayfa Sayısı | Kaynak Kurum |
| :--- | :---: | :---: | :---: | :--- |
| UBL-TR Uygulama Yanıtı (Application Response) | V 0.2 | Mart 2015 | 15 | GİB Denetim ve Uyum Yönetimi Daire Başkanlığı |

---

## Kılavuzun Yapısı

| Bölüm | İçerik |
| :--- | :--- |
| **1. Giriş** | Kılavuzun amacı ve kullanılan tablo yapısının açıklanması. |
| **2.1 XSD Gösterimi** | Uygulama yanıtı belgesinin XSD şemasındaki ana elemanların gösterimi. |
| **2.2 Uygulama Yanıtı Elemanları - Genel** | Ana elemanların Türkçe karşılıkları ve içerikleri. |
| **2.3 Uygulama Yanıtı Elemanları - Detay** | Her elemanın diyagram, kardinalite, açıklama, kullanım ve XML örneği. |

---

## Ana Elemanlar (Genel Bölüm)

| UBL Adı | Türkçe Karşılığı | İçerik |
| :--- | :--- | :--- |
| `UBLExtensions` | UBL Genişletme Alanı | XAdES formatında elektronik imza (mali mühür) bilgilerinin bulunduğu alan. |
| `UBLVersionID` | UBL Versiyon Numarası | Kullanılan UBL sürümü. |
| `CustomizationID` | Özelleştirme Numarası | UBL-TR özelleştirme numarası. |
| `ProfileID` | Senaryo | Yanıtın ait olduğu iş akışı (ör. `TICARIFATURA`). |
| `ID` | Uygulama Yanıtı Numarası | Yanıta ait numara. |
| `UUID` | Evrensel Tekil Tanımlama | Yanıtın tekliğini sağlayan numara (ETTN). |
| `IssueDate` | Düzenleme Tarihi | Yanıtın düzenlenme tarihi. |
| `IssueTime` | Düzenleme Zamanı | Yanıtın düzenlenme zamanı. |
| `Note` | Not | Uygulama yanıtı ile ilgili genel açıklamalar (red nedeni vb.). |
| `Signature` | Mali Mühür / İmza | Elektronik mali mühür ve/veya elektronik imza ile sertifika bilgileri. |
| `SenderParty` | Gönderen Taraf | Uygulama yanıtını düzenleyen tarafın bilgileri. |
| `ReceiverParty` | Alan Taraf | Uygulama yanıtını alan tarafın bilgileri. |
| `DocumentResponse` | Belge Yanıtı | Yanıt verilen belgenin (faturanın) bilgileri. |

---

## Detay Elemanları

Kılavuzun 2.3 numaralı bölümünde aşağıdaki elemanlar tek tek açıklanır:

`UBLExtensions` · `UBLVersionID` · `CustomizationID` · `ProfileID` · `ID` · `UUID` · `IssueDate` · `IssueTime` · `Note` · `Signature` · `SenderParty` · `ReceiverParty` · `DocumentResponse`

---

## Kullanım Senaryoları

| İşlem | Nasıl Yapılır? |
| :--- | :--- |
| **Kabul (A Durumu)** | Alıcı, faturanın kendisine ulaşmasını takiben `KABUL` uygulama yanıtını düzenleyerek satıcıya iletir. Satıcı, yanıtı fatura ile birlikte yasal saklama müddetince muhafaza eder. |
| **Ret (B Durumu)** | Fatura eksik, yanlış, hatalı veya satış anlaşması ile ilgili nedenlerden dolayı reddedilirse `RED` uygulama yanıtı düzenlenir. Ret durumunda reddedilme nedeni **genel açıklamalar bölümüne yazılmalıdır**. |
| **İade (C Durumu)** | Faturanın tamamının veya bazı kalemlerinin iadesi halinde alıcı tarafından iade faturası ve bu iadeye ilişkin uygulama yanıtı düzenlenir. |

> ℹ️ Reddedilen fatura değiştirilmeksizin "ret uygulama yanıtı" ile birlikte saklanır. Satıcı, reddedilen faturayı ve uygulama yanıtını faturayı alıcısına gönderdiği tarihten itibaren yasal saklama süresi boyunca muhafaza etmek zorundadır.

---

## Pratik Notlar

- Uygulama yanıtı kullanımı, satıcı ve alıcı arasında önceden anlaşmaya bağlıdır; tarafların rızası olmadan uygulama yanıtı düzenlenmez.
- **Senaryo (ProfileID)** değerleri [Kod Listeleri](/docs/ubl-tr/kod-listeleri#profileid-senaryo) sayfasındaki tabloda yer alır.
- **Ret nedeni**, `Note` (genel açıklamalar) alanına yazılır.
- Örnek XML ve görünümler için [Ticari Fatura Senaryosu](/docs/ubl-tr/senaryolar/ticari-fatura-senaryosu) sayfasına bakabilirsiniz.

---

## İlgili Kılavuzlar

- [UBL-TR Genel Açıklamalar - V 0.4](/docs/ubl-tr/genel-aciklamalar)
- [UBL-TR Fatura - V 1.0](/docs/ubl-tr/belgeler/fatura)
- [UBL-TR Ticari Fatura Senaryosu - V 0.3](/docs/ubl-tr/senaryolar/ticari-fatura-senaryosu)
