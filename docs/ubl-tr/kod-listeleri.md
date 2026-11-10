---
description: "UBL-TR Kod Listeleri V 1.43: para birimi, ülke, fatura tipi, ödeme şekli, vergi istisna ve tevkifat kodları, kimlik şemaları ve ProfileID değerleri."
keywords: ["UBL-TR", "Kod Listeleri", "ProfileID", "InvoiceTypeCode", "Tevkifat", "İstisna"]
---

# UBL-TR Kod Listeleri - V 1.43

UBL-TR kapsamında kullanılan **kodlama sistemleri** ve **kimlik şemaları** hakkında bilgi veren kılavuzdur. Kodla ifade edilmesi öngörülen elemanların değer kümeleri ve kimlik şemalarının kullanımı burada açıklanır.

:::tip[İndir]
Kod Listeleri kılavuzunun tamamını PDF olarak indirebilirsiniz.
:::

<a
  href="/UNI-wiki/files/ubl-tr/ubl-tr-kod-listeleri-v1.43.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="button button--primary button--lg"
  download
  style={{textDecoration: 'none'}}
>
  📄 UBL-TR Kod Listeleri Kılavuzunu İndir (PDF)
</a>

<br />
<br />

> ℹ️ Alternatif link: <a href="/UNI-wiki/files/ubl-tr/ubl-tr-kod-listeleri-v1.43.pdf" target="_blank">PDF'yi doğrudan aç</a>

---

## Belge Künyesi

| Kılavuz | Sürüm | Yayın Tarihi | Sayfa Sayısı | Kaynak Kurum |
| :--- | :---: | :---: | :---: | :--- |
| UBL-TR Kod Listeleri | V 1.43 | Temmuz 2026 | 22 | GİB Uygulama ve Veri Yönetimi Daire Başkanlığı (III) |

> ⚠️ Kod listeleri **bilgilendirme amaçlıdır** ve içerikleri sürekli değişebilir. Asıl ve güncel kod listeleri `www.efatura.gov.tr` adresinde yayımlanır.

---

## Kodla İfade Edilen Elemanlar

| UBL Adı | Türkçe Karşılığı | Eleman Tipi |
| :--- | :--- | :--- |
| `CurrencyCode` | Para Birimi Kodu | `CurrencyCodeType` |
| `PaymentCurrencyCode` | Ödeme Para Birimi Kodu | `PaymentCurrencyCodeType` |
| `PaymentAlternativeCurrencyCode` | Alternatif Ödeme Para Birimi Kodu | `PaymentAlternativeCurrencyCodeType` |
| `PricingCurrencyCode` | Fiyatlandırma Para Birimi Kodu | `PricingCurrencyCodeType` |
| `SourceCurrencyCode` | Kaynak Para Birimi Kodu | `SourceCurrencyCodeType` |
| `TargetCurrencyCode` | Hedef Para Birimi Kodu | `TargetCurrencyCodeType` |
| `TaxCurrencyCode` | Vergi Para Birimi Kodu | `TaxCurrencyCodeType` |
| `DocumentCurrencyCode` | Belge Para Birimi Kodu | `DocumentCurrencyCodeType` |
| `IdentificationCode` | Tanımlama Kodu | `IdentificationCodeType` |
| `ChannelCode` | Kanal Kodu | `ChannelCodeType` |
| `InvoiceTypeCode` | Fatura Tip Kodu | `InvoiceTypeCodeType` |
| `InvoicedQuantity` | Faturalanan Miktar | `QuantityType` |
| `ItemClassificationCode` | Mal/Hizmet Sınıflandırma Kodu | `ItemClassificationCodeType` |
| `PaymentChannelCode` | Ödeme Kanalı Kodu | `PaymentChannelCodeType` |
| `PaymentMeansCode` | Ödeme Şekli Kodu | `PaymentMeansCodeType` |
| `ResponseCode` | Yanıt Kodu | `ResponseCodeType` |
| `TaxExemptionReasonCode` | Vergi İstisna Kodu | `TaxExemptionReasonCodeType` |
| `TaxTypeCode` | Vergi Türü | `TaxTypeCodeType` |
| `RequiredCustomsID` | GTİP Kodu | `RequiredCustomsIDType` |
| `PackagingTypeCode` | Paket/Kap Cins Kodu | `PackagingTypeCodeType` |
| `DeliveryTerms/ID` | INCOTERMS Teslim Şekilleri Kodu | `IDType` |

---

## Temel Kod Listeleri

### Para Birimi Kodları

`CurrencyCode`, `PaymentCurrencyCode`, `PaymentAlternativeCurrencyCode`, `PricingCurrencyCode`, `SourceCurrencyCode`, `TargetCurrencyCode`, `TaxCurrencyCode` ve `DocumentCurrencyCode` elemanlarının değer kümesi **ISO 4217 Para Birimi Kodları** listesinden alınır (ör. `TRY`, `USD`, `EUR`).

### Ülke Kodları

`IdentificationCode` elemanı ülkeleri tanımlamak için kullanılır; değer kümesi **ISO 3166-1-alpha-2 Ülke Kodları** listesinden alınır (ör. `TR`, `DE`, `US`).

### ChannelCode

**UN/EDIFACT 3155 İletişim Numarası Kod Listesi** kullanılır.

### InvoicedQuantity (Birim Kodları)

`unitCode` niteliği öncelikle UBL-TR ölçü birimi kodları listesinden alınır; listede bulunmayan birimler **UN/ECE Unit Codes** ve **EDI/XML Ölçü Birimleri Kodları** listesinden alınır.

Örnek değerler: `SET` (set), `T3` (bin adet), `KWH` (kilowatt saat), `KWT` (kilowatt), `LTR` (litre), `MTR` (metre), `MTK` (metre kare), `MTQ` (metre küp), `SM3` (standart metreküp), `CTM` (karat), `NCL` (hücre adedi), `MWH` (megawatt saat).

### PaymentMeansCode

**UN/EDIFACT 4461 Ödeme Çeşitleri Kod Listesi** kullanılır.

### ResponseCode (Uygulama Yanıtı)

| Değer | Anlamı |
| :--- | :--- |
| `KABUL` | Uygulama yanıtı faturanın kabul edildiğini gösteriyorsa. |
| `RED` | Uygulama yanıtı faturanın reddedildiğini gösteriyorsa. |
| `IADE` | Uygulama yanıtı iade faturası ile ilişkili olarak düzenlenmişse. |

---

### InvoiceTypeCode (Fatura Tip Kodu)

| Değer | Kullanım Alanı |
| :--- | :--- |
| `SATIS` | Her türlü mal ve hizmet satışı için düzenlenen faturalar. |
| `IADE` | Bir malın iadesi amacıyla alıcı tarafından düzenlenen faturalar. |
| `TEVKIFAT` | Tevkifat içeren faturalar. |
| `TEVKIFATIADE` | Tevkifat içeren faturaların iadesi. |
| `ISTISNA` | Vergi istisnası içeren faturalar. |
| `OZELMATRAH` | Özel matrah faturaları. |
| `IHRACKAYITLI` | İhraç kayıtlı satışlar ile DİİB ve geçici kabul rejimi kapsamındaki satışlar. |
| `SGK` | Sosyal Güvenlik Kurumu kapsamındaki satışlar. |
| `KOMISYONCU` | Hal Kayıt sistemi kapsamındaki satışlar. |
| `KONAKLAMAVERGISI` | Konaklama kapsamındaki satışlar. |
| `SARJANLIK` | Elektrikli araçlar sarj istasyonunda anlık düzenlenen faturalar. |
| `SARJ` | Elektrikli araçlar sarj istasyonunda haftalık düzenlenen faturalar. |
| `TEKNOLOJIDESTEK` | Teknolojik cihaz desteği kapsamında e-Arşiv faturaları (telefon, bilgisayar/tablet). |
| `YTBSATIS` | Yatırım Teşvik kapsamında e-Arşiv satış faturaları. |
| `YTBISTISNA` | Yatırım Teşvik kapsamında e-Arşiv istisna faturaları. |
| `YTBIADE` | Yatırım Teşvik kapsamında e-Arşiv iade faturaları. |
| `YTBTEVKIFAT` | Yatırım Teşvik kapsamında e-Arşiv tevkifat faturaları. |
| `YTBTEVKIFATIADE` | Yatırım Teşvik kapsamında e-Arşiv tevkifat iade faturaları. |

### TaxExemptionReasonCode (Vergi İstisna Kodu)

Faturaya ilişkin istisna sebebinin kodu yazılır. Fatura tipine göre kullanılacak liste değişir:

| Liste | Kod Aralığı | Örnekler |
| :--- | :--- | :--- |
| **Kısmi İstisna Kodları** | `201` - `238` | `201` 17/1 Kültür ve Eğitim Amaçlı Taşıyan İşlemler, `202` 17/2-a Sağlık, Çevre ve Sosyal Yardım Amaçlı İşlemler, `219` Hazine ve belediye işlemleri, `235` Transit ve Gümrük Antrepo Rejimleri ile Geçici Depolama ve Serbest Bölge Hükümlerinin Uygulandığı Malların Teslimi. |
| **Tam İstisna Kodları** | `301` - `323` | `301` 11/1-a Mal İhracatı, `302` 11/1-a Hizmet İhracatı, `311` 14/1 Uluslararası Taşımacılık, `312` 15/a Diplomatik Organ ve Misyonlara Yapılan Teslim ve Hizmetler. |
| **İhraç Kayıtlı Satışlar, DİİB ve Geçici Kabul Rejimi** | `701` - `704` | `701` 3065 s. KDV Kanunu 11/1-c kapsamındaki ihraç kayıtlı satış, `702` DİİB ve Geçici Kabul Rejimi kapsamındaki satışlar. |

### TaxTypeCode (Vergi Türü)

`TaxTotal` altında bulunduğunda **Vergi Kodları Listesi**'ndeki kodları alır:

| Kod | Vergi | Kısaltma |
| :--- | :--- | :--- |
| `0003` | Gelir Vergisi Stopajı | GV STOPAJI |
| `0011` | Kurumlar Vergisi Stopajı | KV STOPAJI |
| `0015` | Gerçek Usulde Katma Değer Vergisi | KDV GERCEK |
| `0021` | Banka Muameleleri Vergisi | BMV |
| `0022` | Sigorta Muameleleri Vergisi | SMV |
| `0061` | Kaynak Kullanımı Destekleme Fonu Kesintisi | KKDF KESİNTİ |
| `0071` | Petrol ve Doğalgaz Ürünlerine İlişkin ÖTV (1. Liste) | ÖTV 1. LİSTE |
| `0073` - `0077` | Kolalı, alkollü içecek ve tütün mamullerine ilişkin ÖTV listeleri | ÖTV 3. LİSTE / 3A / 3B / 3C |
| `1047` | Damga Vergisi | DAMGA V |
| `4071` | Elektrik ve Havagazı Tüketim Vergisi | ELK. HAVAGAZ. TÜK. VER. |
| `4080` / `4081` | Özel İletişim Vergisi | Ö. İLETİŞİM V |
| `4171` | Petrol ve Doğalgaz Ürünlerine İlişkin ÖTV Tevkifatı | PTR-DGZ ÖTV TEVKİFAT |
| `8005` | Elektrik Tüketim Vergisi | ELK. TÜK. VER. |
| `8008` | Çevre Temizlik Vergisi | ÇEV. TEM. VER. |
| `9077` | Motorlu Taşıt Araçlarına İlişkin ÖTV (Tescile Tabi Olanlar) | ÖTV 2. LİSTE |
| `9944` | Belediyelere Ödenen Hal Rüsumu | BEL. ÖD. HAL RÜSUM |

`WithholdingTaxTotal` altında bulunduğunda ise **Tevkifat Kodları Listesi** kullanılır (ör. `601` Yapım İşleri 4/10, `602` Etüt/Plan-Proje/Danişmanlık 9/10, `604` Yemek Servis Hizmeti 5/10, `609` Fason Tekstil ve Konfeksiyon İşleri 7/10, `611` Spor Kulüplerinin Yayın, Reklâm ve İsim Hakkı Gelirlerine Konu İşlemleri 9/10, `614` Servis Taşımacılığı Hizmeti 5/10, `624` Yük Taşımacılığı Hizmeti 2/10, `801` - `825` Yapım İşleri ve Benzeri Hizmetler 10/10).

### Taşıma Gönderim Şekli Kodları

`TransportModeCode` elemanında kullanılır:

| Kod | Taşıma Şekli | Kod | Taşıma Şekli |
| :--- | :--- | :--- | :--- |
| `1` | Denizyolu | `5` | Posta |
| `2` | Demiryolu | `6` | Çok araçlı |
| `3` | Karayolu | `7` | Sabit taşıma tesisleri |
| `4` | Havayolu | `8` | İç su taşımacılığı |

### Taşıma Araç Kodları

`TransportMeansTypeCode` elemanında **UN/ECE Taşıma araç kodları** listesinden alınır.

### GTİP Kodları

`RequiredCustomsID` elemanında **Gümrük Genel Tebliği (Gümrük Tarife Cetveli İzahnamesi)** ekli listesinden alınır.

### Paket/Kap Cins Kodları

`PackagingTypeCode` elemanında kullanılır: `BA` Varil, `BE` Bohça, `BG` Torba, `BH` Demet, `BI` Çöp kutusu, `BJ` Kova, `BK` Sepet, `BX` Kutu, `CB` Bira kasası, `CH` Sandık, `CI` Teneke kutu, `CK` Fıçı, `CN` Konteyner, `CR` Kasa, `DK` Karton kasa, `DR` Bidon, `EC` Plastik torba, `FC` Meyve kasası, `JR` Kavanoz, `LV` Liftvan, `NE` Ambalajsız, `SA` Çuval, `SU` Bavul, `TN` Teneke, `VG` Dökme gaz, `VL` Dökme sıvı, `VO` Dökme katı.

### INCOTERMS Teslim Şekilleri/Şartları Kodları

`DeliveryTerms/ID[schemeID="INCOTERMS"]` elemanında ihracat teslim şartı tanımlamak için kullanılır:

| Kod | Açıklama | Kod | Açıklama |
| :--- | :--- | :--- | :--- |
| `EXW` | İşyerinde Teslim | `CIF` | Masraflar, Sigorta ve Navlun |
| `FCA` | Taşıyıcıya Masrafsız | `CPT` | Taşıma Ödenmiş Olarak |
| `FAS` | Gemi Doğrultusunda Masrafsız | `CIP` | Taşıma ve Sigorta Ödenmiş Olarak |
| `FOB` | Gemide Masrafsız | `DAF` | Sınırda Teslim |
| `CFR` | Masraflar ve Navlun | `DAP` | Belirlenen Yerde Teslim |
| `DES` | Gemide Teslim | `DPU` | Belirlenmiş Yerde Boşaltılmış Olarak Teslim |
| `DEQ` | Rıhtımda Teslim | `DDP` | Gümrük Vergileri Ödenmiş Olarak |
| `DDU` | Gümrük Resmi Ödenmemiş Olarak Teslim | | |

---

## Kimlik Şemaları

### PartyIdentification (Alıcı/Satıcı Numarası)

Alıcı ve satıcıyı tanımlamak için `PartyIdentification/ID` elemanı kullanılır. Gerçek kişi alıcı ve satıcılar için **TC Kimlik Numarası**, tüzel kişiler için **Vergi Kimlik Numarası** girilmelidir. `schemeID` özelliği **zorunludur**.

| Kullanılacak Değer | Açıklama |
| :--- | :--- |
| `VKN` | Vergi Kimlik Numarası |
| `TCKN` | TC Kimlik Numarası |
| `HIZMETNO` | Hizmet No |
| `MUSTERINO` | Müşteri No |
| `TESISATNO` | Tesisat No |
| `TELEFONNO` | Telefon No |
| `DISTRIBUTORNO` | Distribütör No |
| `TICARETSICILNO` | Ticaret Sicil No |
| `TAPDKNO` | TAPDK No |
| `BAYINO` | Bayi No |
| `ABONENO` | Abone No |
| `SAYACNO` | Sayaç No |
| `EPDKNO` | EPDK No |
| `SUBENO` | Şube No |
| `PASAPORTNO` | Pasaport No |
| `URETICINO` | Üretici No |
| `CIFTCINO` | Çiftçi No |
| `IMALATCINO` | İmalatçı No |
| `DOSYANO` | Dosya No |
| `HASTANO` | Hasta No |
| `MERSISNO` | Mersis No |
| `ARACIKURUMVKN` | Yolcu Beraber Eşya Aracı Kurum VKN |
| `ARACIKURUMETIKET` | Yolcu Beraber Eşya Aracı Kurum Etiketi |
| `GTB_REFNO` | GTB Belge Referans No |
| `GCB_TESCILNO` | Gümrük Çıkış Belgesi Tescil No |
| `GTB_FIILI_IHRACAT_TARIHI` | Gümrük Fiili İhracat Tarihi |
| `ARACKIMLIKNO` | Elektrikli Araç Kimlik Numarası |
| `PLAKA` | Araç Plakası |
| `SEVKIYATNO` | İnşaat Demiri İzleme Sistemi Sevkiyat Numarası |

### ProfileID (Senaryo)

Dokümanın ait olduğu süreci tanımlamak için `/Invoice/ProfileID` elemanı kullanılır.

| Senaryo | Açıklama |
| :--- | :--- |
| `TEMELFATURA` | Temel Fatura sürecini belirtir. |
| `TICARIFATURA` | Ticari Fatura sürecini belirtir. |
| `YOLCUBERABERFATURA` | Yolcu Beraber Eşya Fatura sürecini belirtir. |
| `EARSIVFATURA` | e-Arşiv Fatura sürecini belirtir. |
| `IHRACAT` | İhracat Fatura sürecini belirtir. |
| `OZELFATURA` | Özel Fatura sürecini belirtir. |
| `KAMU` | Kamu Fatura sürecini belirtir. |
| `HKS` | Hal Kayıt Sistemi Fatura sürecini belirtir. |
| `STDKODFATURA` | Standart Kod Fatura sürecini belirtir. |
| `TEMELIRSALIYE` | İrsaliye sürecini belirtir. |
| `HKSIRSALIYE` | Hal Kayıt Sistemi İrsaliye sürecini belirtir. |
| `ENERJI` | Elektrikli Araçlar için düzenlenecek faturayı belirtir. |
| `ILAC_TIBBICIHAZ` | İlaç ve Tıbbi Cihaz için düzenlenecek faturayı belirtir. |
| `YATIRIMTESVIK` | Yatırım Teşvik için düzenlenecek faturayı belirtir. |
| `IDIS` | İnşaat Demiri İzleme Sistemleri için düzenlenecek faturayı belirtir. |

### Diğer Kimlik Şemaları

| Şema | Açıklama |
| :--- | :--- |
| **AdditionalItemIdentification** | Ek Öğe Tanımlama Alanı - mal/hizmet ek tanımları için kullanılır. |
| **IhracKayitliPartyIdentification** | Ek Kimlik Tanımlama Alanı - ihracat kayıtlı satışlarda taraf kimliği için kullanılır. |
| **YatırımTesvikItemClassificationCodeList** | Yatırım Teşvik Harcama Bildirimi Alanı - yatırım teşvik kapsamındaki faturalarda kullanılır. |

---

## Pratik Notlar

- Kod listeleri sık sık güncellenir; uygulamada kullanılan kod listelerini periyodik olarak güncelleyin.
- Tevkifat oranları (`4/10`, `5/10`, `7/10`, `9/10`, `10/10` vb.) vergi mevzuatına göre değişebilir; güncel oranları PDF'teki tevkifat kodları listesinden kontrol edin.
- Fatura tipi kodu (`InvoiceTypeCode`) ile senaryo (`ProfileID`) birlikte değerlendirilmelidir; örnek `ISTISNA` tipindeki bir faturada `TaxExemptionReasonCode` zorunlu hâle gelir.
- Gönderim sonrası dönen hata ve durum kodları için [GİB Durum Kodları](/docs/sss-ve-ipuclari/gib-durum-kodlari) sayfasına bakabilirsiniz.

---

## İlgili Kılavuzlar

- [UBL-TR Genel Açıklamalar - V 0.4](/docs/ubl-tr/genel-aciklamalar)
- [UBL-TR Fatura - V 1.0](/docs/ubl-tr/belgeler/fatura)
- [UBL-TR Ortak Elemanlar - V 0.7](/docs/ubl-tr/ortak-elemanlar)
