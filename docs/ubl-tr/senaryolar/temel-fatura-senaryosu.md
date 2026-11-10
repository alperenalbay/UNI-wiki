---
description: "UBL-TR Temel Fatura Senaryosu V 0.2: e-Faturanın gönderilmesi sürecindeki taraflar, iş akışı, aktivite diyagramı ve örnek fatura XML'i."
keywords: ["UBL-TR", "Temel Fatura", "Senaryo", "İş Akışı", "senaryolar"]
---

# UBL-TR Temel Fatura Senaryosu - V 0.2

Temel fatura senaryosundaki iş akışını, bu akıştaki fatura belgesini ve tarafların rollerini anlatan kılavuzdur. Kılavuzda senaryoda kullanılan fatura örneğine ve bu örneğin UBL-TR şemalarına uygun XML gösterimine yer verilmektedir.

:::tip[İndir]
Temel Fatura Senaryosu kılavuzunun tamamını PDF olarak indirebilirsiniz.
:::

<a
  href="/UNI-wiki/files/ubl-tr/ubl-tr-temel-fatura-senaryosu-v0.2.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="button button--primary button--lg"
  download
  style={{textDecoration: 'none'}}
>
  📄 UBL-TR Temel Fatura Senaryosunu İndir (PDF)
</a>

<br />
<br />

> ℹ️ Alternatif link: <a href="/UNI-wiki/files/ubl-tr/ubl-tr-temel-fatura-senaryosu-v0.2.pdf" target="_blank">PDF'yi doğrudan aç</a>

---

## Belge Künyesi

| Kılavuz | Sürüm | Yayın Tarihi | Sayfa Sayısı | Kaynak Kurum |
| :--- | :---: | :---: | :---: | :--- |
| UBL-TR Temel Fatura Senaryosu | V 0.2 | Mart 2015 | 12 | GİB Denetim ve Uyum Yönetimi Daire Başkanlığı |

---

## Kılavuzun Yapısı

| Bölüm | İçerik |
| :--- | :--- |
| **1. Giriş** | Kılavuzun amacı. |
| **2.1 Tanım ve Kapsam** | Senaryonun kapsamı ve kullanılan senaryo dokümanı. |
| **2.2 Harici İşlemler** | Senaryo kapsamı dışında bırakılan işlemler. |
| **2.3 İş Süreci İçin Gereklilikler** | Tarafların sağlaması gereken altyapı koşulları. |
| **2.4 Taraflar** | Satıcı ve alıcının rolleri. |
| **2.5 Aktivite Diagramı ve Tanımı** | İş akışının adım adım tanımı. |
| **3. Örnek Senaryo** | Örnek fatura bilgileri, XML dokümanı ve fatura görünümü. |

---

## Tanım ve Kapsam

Bu senaryo, **e-Faturanın sadece gönderilmesi sürecini** kapsar ve uygulamanın temel seviyede kullanımı hakkında bilgi verir. e-Fatura kendi başına bir belge olup vergi kanunları ve ilgili mevzuata uygun düzenlenmelidir.

Senaryo şunları kapsamaktadır:

- Her ölçek ve sektördeki kamu veya özel sektör satıcı ve alıcıları,
- Her türlü mal veya hizmet satışı.

**Senaryo dokümanı:** UBL-TR Fatura (Invoice) → [UBL-TR Fatura kılavuzu](/docs/ubl-tr/belgeler/fatura)

### Harici İşlemler

Bu senaryoda faturaya ilişkin itirazlar harici yollarla gerçekleştirilir. Faturanın reddedilmesi ve iade işlemleri bu senaryoda yer almaz; red ve iade için [Ticari Fatura Senaryosu](/docs/ubl-tr/senaryolar/ticari-fatura-senaryosu) kullanılır.

---

## İş Süreci İçin Gereklilikler

- **Satıcı**, e-fatura gönderme, alma ve işleme konusunda yeterli altyapıya sahip olmalıdır.
- **Alıcı**, e-fatura alabilmeyi sağlayacak altyapıya sahip olmalıdır.
- **e-Fatura**, vergi kanunları ve ilgili mevzuata uygun olarak düzenlenmiş olmalıdır.

---

## Taraflar

| Taraf | Rolü |
| :--- | :--- |
| **Satıcı** | e-Faturayı gönderen taraftır. Ayrıca alacaklı olarak da adlandırılır. |
| **Alıcı** | e-Faturayı alan taraftır. Ayrıca borçlu olarak da adlandırılır. |

### Aktivite Diyagramı

```text
ALICI                              SATICI
                                    Faturayı oluşturur
                                    ve gönderir
                                    ────────────────►
                                    e-Fatura
Faturayı alır
◄────────────────────────────────
```

| Taraf | Aktivite | Tanım |
| :--- | :--- | :--- |
| Satıcı | Fatura düzenleme ve gönderme | Satıcı, alıcıya faturayı gönderir. |
| Alıcı | Fatura alma | Alıcı, faturayı alır. |

> ℹ️ Faturanın alıcıya kayıtlı ve güvenli bir biçimde ulaştırılması ile işlemin tamamlandığı varsayılmakla birlikte alıcılar fatura ile ilgili itirazlarını harici yollarla gerçekleştirebilirlerdir.

---

## Örnek Senaryo

Kılavuzun 3. bölümünde `AAA Anonim Şirketi` tarafından `Ali YILMAZ` adına düzenlenen örnek fatura üzerinden şu üç çıktı gösterilir:

1. **Örnek Fatura Bilgileri** - Fatura düzenleyene ilişkin bilgiler (unvan, vergi dairesi, vergi numarası, adres, telefon, e-posta), fatura alıcısına ilişkin bilgiler (unvan, TCKN, adres, e-posta) ve faturaya ilişkin bilgiler (fatura numarası, ETTN, fatura tarihi, düzenleme zamanı, dönem bilgisi, son ödeme tarihi, ödeme koşulları).
2. **Örnek Faturanın UBL-TR Şemasına Uygun XML Dokümanı** - Faturanın XML gösterimi.
3. **UBL-TR e-Fatura Örnek Görünümü** - Faturanın nihai görünümü.

---

## Pratik Notlar

- Senaryo, **Senaryo (ProfileID)** değeri `TEMELFATURA` olan faturaları ifade eder. Diğer profil değerleri için [Kod Listeleri](/docs/ubl-tr/kod-listeleri#profileid-senaryo) sayfasına bakabilirsiniz.
- Faturaya ilişkin itirazlar senaryo kapsamı dışındadır; itiraz süreçleri harici yollarla yürütülür.
- Gönderim sonrası dönen hata ve durum kodları için [GİB Durum Kodları](/docs/sss-ve-ipuclari/gib-durum-kodlari) sayfasına bakabilirsiniz.

---

## İlgili Kılavuzlar

- [UBL-TR Genel Açıklamalar - V 0.4](/docs/ubl-tr/genel-aciklamalar)
- [UBL-TR Fatura - V 1.0](/docs/ubl-tr/belgeler/fatura)
- [UBL-TR Ticari Fatura Senaryosu - V 0.3](/docs/ubl-tr/senaryolar/ticari-fatura-senaryosu)
