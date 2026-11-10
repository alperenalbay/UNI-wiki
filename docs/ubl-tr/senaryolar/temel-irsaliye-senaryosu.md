---
description: "UBL-TR Temel e-İrsaliye Senaryosu V 0.3: e-İrsaliye gönderimi ve e-İrsaliye Yanıtı ile kabul, şikâyet, hasarlı ve fazla/eksik ürün bildirimlerinin iş akışı."
keywords: ["UBL-TR", "e-İrsaliye", "İrsaliye Yanıtı", "Senaryo", "senaryolar"]
---

# UBL-TR Temel e-İrsaliye Senaryosu - V 0.3

Temel e-İrsaliye senaryosunda tarafların rollerini, e-İrsaliye düzenleme iş akışını ve bu akışta **e-İrsaliye Yanıtı'nın (receipt advice)** kullanımını açıklayan kılavuzdur. Kılavuzda e-İrsaliye ve e-İrsaliye yanıtı kullanımına ilişkin şartlar, süreçler ve UBL-TR şemalarına uygun XML gösterimleri yer alır.

:::tip[İndir]
Temel e-İrsaliye Senaryosu kılavuzunun tamamını PDF olarak indirebilirsiniz.
:::

<a
  href="/UNI-wiki/files/ubl-tr/ubl-tr-temel-irsaliye-senaryosu-v0.3.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="button button--primary button--lg"
  download
  style={{textDecoration: 'none'}}
>
  📄 UBL-TR Temel e-İrsaliye Senaryosunu İndir (PDF)
</a>

<br />
<br />

> ℹ️ Alternatif link: <a href="/UNI-wiki/files/ubl-tr/ubl-tr-temel-irsaliye-senaryosu-v0.3.pdf" target="_blank">PDF'yi doğrudan aç</a>

---

## Belge Künyesi

| Kılavuz | Sürüm | Yayın Tarihi | Sayfa Sayısı | Kaynak Kurum |
| :--- | :---: | :---: | :---: | :--- |
| UBL-TR Temel e-İrsaliye Senaryosu | V 0.3 | Nisan 2017 | 48 | GİB Denetim ve Uyum Yönetimi Daire Başkanlığı |

---

## Kılavuzun Yapısı

| Bölüm | İçerik |
| :--- | :--- |
| **1. Giriş** | Kılavuzun amacı. |
| **2.1 - 2.2 Tanım ve Kapsam** | Senaryonun tanımı ve kapsamı. |
| **2.3 Taraflar ve Rolleri** | Gönderici ve alıcının rolleri. |
| **2.4 Senaryo Dokümanları** | Kullanılan belgeler. |
| **2.5 İş Süreci İçin Gereklilikler** | Tarafların sağlaması gereken koşullar. |
| **2.6 İş Süreci** | Kabul ve kısmi kabul akışları. |
| **2.7 Aktivite Diyagramları** | İş akışlarının diyagramları. |
| **3. Örnek e-İrsaliye Senaryoları** | 3 e-İrsaliye ve 4 e-İrsaliye yanıtı örneğinin XML ve görünümleri. |

---

## Tanım ve Kapsam

Bu senaryo, yapılacak satışlar dolayısıyla e-İrsaliye düzenlenmesi ve karşılığında söz konusu malların **kabul veya kısmi kabulü** için e-İrsaliye Yanıtı düzenlenmesine ilişkin iş akışlarını ve rolleri açıklar.

Senaryo şunları kapsamaktadır:

- Her ölçek ve sektördeki alıcı ve satıcıları,
- Her türlü mal satışı nedeniyle e-İrsaliye düzenlenmesini,
- e-İrsaliyeyi alan tarafın satıcıya e-İrsaliye Yanıtı (receipt advice) düzenleyerek iletmesini.

> ℹ️ e-İrsaliye sürecinin diğer unsurları olan tedarik, sipariş, katalog işlemleri ve ödeme gibi işlemler bu senaryonun dışında bırakılmış olup, mükelleflerin bu süreçleri haricen yerine getirdiği varsayılmıştır.

---

## Taraflar ve Rolleri

| Taraf | Rolü |
| :--- | :--- |
| **Gönderici** | e-İrsaliye düzenleyerek alıcıya gönderen taraftır. (Satıcı taraftan farklı olabilir.) |
| **Alıcı** | Malları teslim alan taraftır. (Satın alan taraftan farklı olabilir.) |

**Senaryo dokümanları:**

- UBL-TR e-İrsaliye (Despatch Advice) → [Sevk İrsaliyesi kılavuzu](/docs/ubl-tr/belgeler/irsaliye)
- UBL-TR e-İrsaliye Yanıtı (Receipt Advice) → [İrsaliye Yanıtı kılavuzu](/docs/ubl-tr/belgeler/irsaliye-yaniti)

---

## İş Süreci İçin Gereklilikler

- Satıcı ve alıcı e-İrsaliye gönderme, alma ve **e-İrsaliye Yanıtı düzenleme** konusunda gerekli şartları sağlamış olmalıdır.
- Alıcı ve satıcı uygulama kapsamındaki belgeleri düzenleme yetkisine sahip olmalıdır.
- e-İrsaliye ve e-İrsaliye Yanıtı vergi kanunları ve ilgili mevzuata uygun olarak düzenlenmelidir.

### İş Akışları

- Gönderilen e-İrsaliye, **e-İrsaliye Yanıtı düzenlenerek yanıtlanır**.
- e-İrsaliyede yer alan malların **tümünün ya da belli kalemlerinin kabulü**, alıcı tarafından e-İrsaliye Yanıtı düzenlenerek gerçekleştirilir.

---

## Örnek Senaryolar

Kılavuzun 3. bölümünde **3 e-İrsaliye** ve **4 e-İrsaliye Yanıtı** örneği, her biri için XML görünümü ve örnek görünüm ile anlatılır.

### e-İrsaliye Örnekleri

| Örnek | Konu |
| :--- | :--- |
| **1** | Temel e-İrsaliye |
| **2** | Kısmi gönderim içeren e-İrsaliye |
| **3** | Farklı tarafların bulunduğu e-İrsaliye |

### e-İrsaliye Yanıtı Örnekleri

| Örnek | Konu |
| :--- | :--- |
| **1** | Bütün sevkiyatı kabul eden e-İrsaliye Yanıtı |
| **2** | Şikâyet içeren e-İrsaliye Yanıtı |
| **3** | Hasarlı ürünleri bildiren e-İrsaliye Yanıtı |
| **4** | Fazla/Eksik ürünlerin bildirilmesine dair e-İrsaliye Yanıtı |

---

## Pratik Notlar

- Senaryo, **Senaryo (ProfileID)** değeri `TEMELIRSALIYE` olan irsaliyeleri ifade eder. Profil değerleri için [Kod Listeleri](/docs/ubl-tr/kod-listeleri#profileid-senaryo) sayfasına bakabilirsiniz.
- **Kısmi kabul**, kısmi gönderim ve hasarlı/fazla-eksik ürün gibi durumlar yanıt belgesiyle bildirilir; bu durumlar e-İrsaliye satırı (`DespatchLine`) ile yanıt satırı (`ReceiptLine`) eşleşmesi üzerinden yürütülür.
- **Yasal saklama:** e-İrsaliye ve e-İrsaliye yanıtı birlikte yasal saklama müddeti boyunca muhafaza edilmelidir.
- Gönderim sonrası dönen hata ve durum kodları için [GİB Durum Kodları](/docs/sss-ve-ipuclari/gib-durum-kodlari) sayfasına bakabilirsiniz.

---

## İlgili Kılavuzlar

- [UBL-TR Genel Açıklamalar - V 0.4](/docs/ubl-tr/genel-aciklamalar)
- [UBL-TR Sevk İrsaliyesi - V 1.2](/docs/ubl-tr/belgeler/irsaliye)
- [UBL-TR İrsaliye Yanıtı - V 1.0](/docs/ubl-tr/belgeler/irsaliye-yaniti)
