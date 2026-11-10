---
description: "UBL-TR Ticari Fatura Senaryosu V 0.3: e-Faturanın uygulama yanıtı ile kabul, ret ve iade işlemlerinin iş akışı, taraf rolleri ve örnek XML'ler."
keywords: ["UBL-TR", "Ticari Fatura", "Senaryo", "Uygulama Yanıtı", "İade", "senaryolar"]
---

# UBL-TR Ticari Fatura Senaryosu - V 0.3

Ticari fatura senaryosunda tarafların rollerini, fatura düzenleme iş akışını ve bu akışta **uygulama yanıtının** kullanımını açıklayan kılavuzdur. Kılavuzda fatura ve uygulama yanıtının kullanımına ilişkin şartlar, süreçler ve örnek XML gösterimleri yer alır.

:::tip[İndir]
Ticari Fatura Senaryosu kılavuzunun tamamını PDF olarak indirebilirsiniz.
:::

<a
  href="/UNI-wiki/files/ubl-tr/ubl-tr-ticari-fatura-senaryosu-v0.3.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="button button--primary button--lg"
  download
  style={{textDecoration: 'none'}}
>
  📄 UBL-TR Ticari Fatura Senaryosunu İndir (PDF)
</a>

<br />
<br />

> ℹ️ Alternatif link: <a href="/UNI-wiki/files/ubl-tr/ubl-tr-ticari-fatura-senaryosu-v0.3.pdf" target="_blank">PDF'yi doğrudan aç</a>

---

## Belge Künyesi

| Kılavuz | Sürüm | Yayın Tarihi | Sayfa Sayısı | Kaynak Kurum |
| :--- | :---: | :---: | :---: | :--- |
| UBL-TR Ticari Fatura Senaryosu | V 0.3 | Mart 2016 | 35 | GİB Denetim ve Uyum Yönetimi Daire Başkanlığı |

---

## Kılavuzun Yapısı

| Bölüm | İçerik |
| :--- | :--- |
| **1. Giriş** | Kılavuzun amacı. |
| **2.1 Tanım** | Senaryonun tanımı ve temel fatura senaryosu ile farkı. |
| **2.2 Kapsam** | Kapsama giren işlemler. |
| **2.3 Taraflar ve Rolleri** | Satıcı ve alıcının rolleri. |
| **2.4 Senaryo Dokümanları** | Kullanılan belgeler. |
| **2.5 İş Süreci İçin Gereklilikler** | Tarafların sağlaması gereken koşullar. |
| **2.6 İş Süreci** | Kabul, ret ve iade iş akışları. |
| **2.7 Aktivite Diagramları** | İş akışlarının diyagramları. |
| **3. Örnek Senaryo** | Örnek fatura bilgileri, XML dokümanları ve görünümler. |

---

## Tanım

Bu senaryo, yapılacak mal ve hizmet satışları dolayısıyla fatura düzenlenmesi, söz konusu faturaların **kabul edilmesi, reddedilmesi veya iade faturası düzenlenmesi** durumlarında uygulama yanıtı düzenlenmesine ilişkin iş akışlarını ve rolleri açıklar.

Senaryo kapsamında düzenlenen fatura, temel fatura senaryosunda düzenlenen faturadan farklı değildir. Temel fatura senaryosundan farklı olarak **Ticari Fatura Senaryosu'nda uygulama yanıtı kullanımına imkân verilmiştir** ve bu kullanım tarafların açık rızasına bağlıdır.

Uygulama yanıtı, e-Fatura Uygulaması kapsamında gönderilen faturanın kabul, ret ve iade işlemlerinin uygulama içerisinde yapılmasını sağlayan bir belgedir.

### Kapsam

Senaryo şunları kapsamaktadır:

- Her ölçek ve sektördeki kamu ve özel sektör alıcı ve satıcılarını,
- Her türlü mal ve hizmet satışı nedeniyle e-fatura düzenlenmesini,
- Faturaların alıcılar tarafından uygulama yanıtı düzenlenmesi suretiyle **kabul edilebilmesini**,
- Faturaların alıcılar tarafından uygulama yanıtı düzenlenmesi suretiyle **reddedilebilmesini**,
- **İade faturası** düzenlenmesini,
- İade faturası düzenlenmesi gereken durumlarda **uygulama yanıtının** kullanılmasını.

> ℹ️ Faturalama sürecinin diğer unsurları olan tedarik, sipariş, katalog işlemleri ve ödeme gibi işlemler bu senaryonun dışında bırakılmıştır; bu süreçlerin haricen yerine getirildiği varsayılır.

---

## Taraflar ve Rolleri

| Taraf | Rolü |
| :--- | :--- |
| **Satıcı** | Faturayı düzenleyerek alıcıya gönderen taraftır; genel olarak alacaklıdır. Alıcı ile önceden anlaşmış olmak koşulu ile düzenlediği faturanın alıcı tarafından kabulünün uygulama yanıtı düzenlenerek yapılmasını talep edebilir. |
| **Alıcı** | Faturayı alan veya adına fatura düzenlenen taraftır; faturanın borçlusudur. Faturayı uygulama yanıtı ile kabul edebilir, belli şartlar dahilinde reddedebilir ve belli koşulların gerçekleşmesi halinde iade faturası ve iade uygulama yanıtı düzenleyebilir. |

**Senaryo dokümanları:** UBL-TR Fatura (Invoice) ve UBL-TR Uygulama Yanıtı (Application Response)

---

## İş Süreci İçin Gereklilikler

- Satıcı ve alıcı e-fatura gönderme, alma ve **uygulama yanıtı düzenleme** konusunda gerekli şartları sağlamış olmalıdır.
- Alıcı ve satıcı uygulama kapsamında e-fatura ve uygulama yanıtı düzenleme yetkisine sahip olmalıdır.
- e-Fatura ve uygulama yanıtı vergi kanunları ve ilgili mevzuata uygun olarak düzenlenmelidir.

---

## İş Akışları

### A. Faturanın Kabul Edilmesi

Satıcı ile alıcı faturalaşma sürecinde uygulama yanıtının kullanılması hususunda anlaşır. Alıcı, faturanın kendisine ulaşmasını takiben **"KABUL" uygulama yanıtını** düzenleyerek satıcıya iletir ve kabul işlemini tamamlar. Satıcı, uygulama yanıtını fatura ile birlikte yasal saklama müddetince muhafaza eder.

### B. Faturanın Reddedilmesi

e-Faturanın alıcı tarafından eksik, yanlış, hatalı veya satış anlaşması ile ilgili nedenlerden dolayı reddedilmesi halinde **"RED" uygulama yanıtı** düzenlenerek satıcıya iletilir. **Ret durumunda uygulama yanıtının genel açıklamalar bölümüne reddedilme nedeninin yazılması gerekir.**

Faturanın tamamının ya da belli kalemlerinin reddedilmesi üzerine reddedilen fatura değiştirilmeksizin "red uygulama yanıtı" ile birlikte saklanacaktır. Satıcı, reddedilen faturayı ve uygulama yanıtını faturayı alıcısına gönderdiği tarihten itibaren yasal saklama süresi boyunca muhafaza etmek zorundadır.

### C. İade Faturası

Faturaya konu malların tümünün ya da belli kalemlerinin iadesi halinde alıcı tarafından **iade faturası ve bu iadeye ilişkin uygulama yanıtı** düzenlenmesi gerekir.

---

## Örnek Senaryo

Kılavuzun 3. bölümünde üç durum için XML ve görünüm örnekleri verilir:

| Durum | XML Görünümü | Örnek Görünüm |
| :--- | :--- | :--- |
| **A - Kabul** | Kabul Uygulama Yanıtının XML Görünümü | Kabul Uygulama Yanıtının Görünümü |
| **B - Ret** | Red Uygulama Yanıtının XML Görünümü | Red Uygulama Yanıtının Görünümü |
| **C - İade** | İade Faturası ve İade Uygulama Yanıtının XML Görünümü | İade Faturası ve İade Uygulama Yanıtının Görünümü |

---

## Pratik Notlar

- Senaryo, **Senaryo (ProfileID)** değeri `TICARIFATURA` olan faturaları ifade eder. Profil değerleri için [Kod Listeleri](/docs/ubl-tr/kod-listeleri#profileid-senaryo) sayfasına bakabilirsiniz.
- **Ret nedeni** uygulama yanıtının genel açıklamalar (`Note`) bölümüne yazılır.
- Uygulama yanıtının belgenin yapısı için [UBL-TR Uygulama Yanıtı](/docs/ubl-tr/belgeler/uygulama-yaniti) sayfasına bakabilirsiniz.
- Gönderim sonrası dönen hata ve durum kodları için [GİB Durum Kodları](/docs/sss-ve-ipuclari/gib-durum-kodlari) sayfasına bakabilirsiniz.

---

## İlgili Kılavuzlar

- [UBL-TR Genel Açıklamalar - V 0.4](/docs/ubl-tr/genel-aciklamalar)
- [UBL-TR Fatura - V 1.0](/docs/ubl-tr/belgeler/fatura)
- [UBL-TR Uygulama Yanıtı - V 0.2](/docs/ubl-tr/belgeler/uygulama-yaniti)
- [UBL-TR Temel Fatura Senaryosu - V 0.2](/docs/ubl-tr/senaryolar/temel-fatura-senaryosu)
