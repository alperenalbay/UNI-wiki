---
description: "E-Fatura, e-Arşiv ve e-İrsaliye gönderim süreçlerinde GİB'den dönen tüm durum kodları, açıklamaları, nedenleri ve yapılması gerekenler."
keywords: ["GİB", "Durum", "Kodları", "sss-ve-ipuclari"]
---

# GİB Durum Kodları

E-Fatura, e-Arşiv ve e-İrsaliye gönderim süreçlerinde Gelir İdaresi Başkanlığı (GİB) sisteminden dönen durum kodları, hata mesajları ve yapılması gereken işlemler aşağıda yer almaktadır. Bu kılavuz [Devatek e-Dönüşüm Portalı](https://portal.devadonusum.com) üzerinden gönderim yapan mükellefler için hazırlanmıştır.

> ℹ️ **Kaynak:** GİB durum kodları, [Devatek resmi GİB Durum Kodları sayfası](https://www.devatek.com/gib-durum-kodlari) esas alınarak derlenmiştir.

---

## Süreç ve Durum Kodları Tablosu

| GİB Durumu | Kod | Açıklaması | Nedeni | Çözüm / Yapılması Gereken |
| :--- | :---: | :--- | :--- | :--- |
| **Zarf Kuyruğa Eklendi** | `1000` | Gönderici birim, içerisinde fatura belgesi olan zarfı oluşturur ve Merkez Birime (GİB'e) gönderir. Zarf kuyruğa alınır. | GİB sistemindeki yoğunluk | Durum kodunun güncellenmesi beklenmelidir. |
| **Zarf İşleniyor** | `1100` | Merkez Birimde kuyruğa alınan zarf işlenmeye başlar. Faturanın ERP statüsü "GİB'e gönderildi" olur. | GİB sistemindeki yoğunluk | Durum kodunun güncellenmesi beklenmelidir. |
| **Zip Dosyası Değil** | `1110` | Gönderilen zarfın GİB'in belirlediği standartlara uygun olmaması veya format hatası. | Zarf formatı `.ZIP` formatında değil. | Zarf formatı `.ZIP` olmalıdır. Faturalar yeniden gönderilmelidir. |
| **Zarf ID Uzunluğu Geçersiz** | `1111` | Zarf ID uzunluğu 32 karakterden farklı. | Zarf ID karakter uzunluğu hatası | Zarf ID uzunluğu 32 karakter olmalıdır. Faturalar yeniden gönderilmelidir. |
| **Zarf Arşivden Kopyalanamadı** | `1120` | — | — | — |
| **Zip Açılıramadı** | `1130` | Zarf okunamadı veya dosya bozuk. | GİB sisteminde geçici durum veya dosya hatası | Dosya kontrol edilip yeniden zarflanarak gönderilmelidir. |
| **Zip Bir Dosya İçermeli** | `1131` | Zarf içerisinde gerekli dosya bulunamadı. | Zarf içeriği eksik | Zarf içerisinde Fatura, uygulama yanıtı veya sistem yanıtı olmalıdır. |
| **XML Dosyası Değil** | `1132` | Gönderilen dosyalar XML formatında değil. | Hatalı dosya formatı | Dosyalar `.XML` formatında olmalıdır. |
| **Zarf ID ve XML Adı Aynı Olmalı** | `1133` | Zarf ID ile XML dosya adı eşleşmiyor. | İsim uyumsuzluğu | Zarf ID ile XML ID aynı karakterleri içermelidir. |
| **Doküman Ayrıştırılamadı** | `1140` | Zarftaki faturalar doğru şekilde çıkarılamadı. | — | — |
| **Zarf ID Yok** | `1141` | Zarf ID alanı boş. | — | Zarf ID alanı boş olmamalıdır. |
| **Zarf ID ve Zip Dosyası Adı Aynı Olmalı** | `1142` | — | — | — |
| **Geçersiz Versiyon** | `1143` | — | — | — |
| **Schematron Kontrolü Hatalı** | `1150` | GİB standartlarına uygun olmayan veri girişi. | Yanlış veya eksik alanlar | Bilgiler kontrol edilip GİB standartlarına uygun hale getirilmelidir. |
| **XML Şema Kontrolünden Geçemedi** | `1160` | Şema validasyon hataları. | UBL-TR şema uyumsuzluğu | Alıcı sistemi ve şema kuralları kontrol edilmelidir. |
| **İmza Sahibi TCKN/VKN Alınamadı** | `1161` | — | — | — |
| **İmza Kaydedilemedi** | `1162` | — | — | Hatasız gönderim için gönderimden önce imza doğrulama kontrolü yapılmalıdır. |
| **Gönderilen Zarf Kayıtlı** | `1163` | Gönderilen zarf sistemde daha önce kayıtlı bir faturayı içermektedir. | Mükerrer gönderim (Aynı ETTN veya fatura numarası) | Faturalar yeniden gönderilmemelidir. |
| **Yetki Kontrol Edilemedi** | `1170` | Posta kutusu etiket tanımlama hatası. | Etiketlerde "PK" yerine "GB" tanımlanmış olabilir. | Posta kutusu etiketinde "PK" tanımlı olmalıdır. |
| **Gönderici Birim Yetkisi Yok** | `1171` | Gönderici etiket hatası. | Etiketlerde "GB" yerine "PK" tanımlanmış olabilir. | Gönderici birim etiketinde "GB" tanımlı olmalıdır. |
| **Posta Kutusu Yetkisi Yok** | `1172` | Alıcı posta kutusu etiket hatası. | Etiket yapılandırma hatası | Posta kutusu etiketinde "PK" tanımlı olmalıdır. |
| **İmza Yetkisi Kontrol Edilemedi** | `1175` | — | — | İmza yetkisi kontrol edilemedi yanıtı imzanın yetersiz olduğu anlamına gelmez. Mükellefin ekstra kontrol isteği olabilir. |
| **İmza Sahibi Yetkisiz** | `1176` | — | — | — |
| **Geçersiz İmza** | `1177` | İmza doğrulama geçersiz. | Mali mühür veya imza hatası | Gönderimden önce imza doğrulama kontrolü yapılmalıdır. |
| **Adres Kontrol Edilemedi** | `1180` | — | — | — |
| **Adres Bulunamadı** | `1181` | Etiket bilgisi ve VKN eşleşmesi yapılamıyor. | Güncel olmayan VKN/TCKN veya etiket bilgisi | Alıcı ve gönderici VKN/TCKN ile etiket bilgilerinin güncelliği kontrol edilmelidir. |
| **Kullanıcı Eklenemedi** | `1182` | — | — | — |
| **Kullanıcı Silinemedi** | `1183` | — | — | — |
| **Sistem Yanıtı Hazırlanamadı** | `1190` | — | — | — |
| **Sistem Hatası** | `1195` | — | — | — |
| **Zarf Başarıyla İşlendi** | `1200` | Zarf işlenmiş ve kontrollerden geçmiştir. | Başarılı işlem | ERP statüsü "GİB'de işlendi - Alıcıya gönderilecek" olarak güncellenir. |
| **Doküman Gönderilemedi** | `1210` | Alıcıya gönderme sırasında sorun yaşandı. | Alıcı taraf erişim sorunu | GİB otomatik olarak 4 kez daha deneme yapar. Beklenmelidir. |
| **Gönderim Başarısız / Sonlandı** | `1215` | Tekrar deneme süreleri sonlandı ve iletilemedi. | Alıcı sistemlerin kapalı olması | İlgili zarftaki faturalar aynı Fatura ID'si ile tekrar gönderilebilir. |
| **Hedeften Sistem Yanıtı Gelmedi** | `1220` | Alıcıdan merkeze sistem yanıtı henüz gelmedi. | Alıcı henüz onay/ret yanıtı dönmedi | Alıcı ile iletişime geçilerek yanıt dönmesi sağlanabilir. Mükerrer gönderim yapılmamalıdır. |
| **Hedeften Yanıt Başarısız Geldi** | `1230` | Alıcı faturayı işleyemediğini bildirdi. | Alıcı sistem ret yanıtı | İlgili zarftaki faturalar aynı Fatura ID ile tekrar gönderilebilir. |
| **Başarıyla Tamamlandı** | `1300` | Alıcıdan sistem yanıtı başarıyla alındı. | İşlem tamamlandı | Fatura alıcıda başarıyla işlenmiştir. |

---

> 💡 **Devatek Destek Notu:** GİB durum kodları hakkında takıldığınız teknik konularda [Destek Merkezi](https://destek.devatek.com) üzerinden bizimle iletişime geçebilirsiniz.
