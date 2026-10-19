---
description: "Defter-Beyan API anahtarı yönetimi ve kontrol kılavuzu: üç taraf, iki anahtar türü, portalda anahtar üretme, kontrol aracı, hata mesajları sözlüğü ve hızlı teşhis akışı."
keywords: ["Defter-Beyan", "API", "Anahtarı", "Yönetimi", "Kontrolü", "genel-muhasebe"]
---

# Defter-Beyan API Anahtarı Yönetimi ve Kontrolü

Defter-Beyan Sistemi ile veri alışverişi, sisteme tanımlı bir API anahtarı çifti (**ApiKey + ApiSecret**) üzerinden yapılır. Sahadaki sorunların büyük bölümü anahtarın kendisinden değil, yanlış türde ya da yanlış yere girilmiş bir anahtardan kaynaklanır. Bu kılavuz hangi anahtarın nereye girileceğini, uygulamadaki kontrol aracının nasıl kullanılacağını ve alınan mesajların ne anlama geldiğini anlatır.

> ℹ️ **Kimin için:**
> - **Destek ekibi:** Bir pakette defter-beyan bağlantısı kurulamadığında sebebi dakikalar içinde ayırt etmek için.
> - **Muhasebeci / kullanıcı:** Anahtarı ilk kez tanımlarken ve tanımın doğruluğunu kendi başına doğrularken.

---

## 1. Üç Taraf, İki Anahtar Türü

Defter-Beyan tarafında birbirine karışması en kolay olan nokta budur. Sistemde üç taraf vardır ve anahtar hangi taraf adına üretildiyse yalnızca onun yetkisiyle çalışır:

| Taraf | Nedir | Anahtarı Kim Üretir |
| :--- | :--- | :--- |
| **Entegratör** | Yazılımı Defter-Beyan'a tanıtan taraf. Uygulamanın kendi kimliğidir; kullanıcı tarafından girilmez, yönetilmez. | Yazılım firması. Kullanıcıyı ilgilendirmez. |
| **Müşavir** | Birden fazla mükellef adına işlem yapan taraf (serbest muhasebeci mali müşavir, oda, birlik vb.). | Müşavirin kendi Defter-Beyan kullanıcısı. |
| **Mükellef (firma)** | Defteri tutulan tek bir vergi mükellefi. | Yalnızca mükellefin kendisi. |

> ⚠️ **En sık yapılan hata:** Bir mükellefin kendi anahtarının müşavir kartına girilmesi. Bu anahtar geçerlidir ve sisteme giriş yapar; fakat başka mükelleflere geçiş yetkisi yoktur. Sonuç: Tek bir firmada çalışıp diğerlerinin hepsinde yetki hatası alınması.

Defter-Beyan kuralı gereği bir mükellef adına anahtarı yalnızca o mükellefin kendisi üretebilir; müşavir anahtarı müşavirin kendi kullanıcısıyla üretilmelidir.

## 2. Hangi Anahtar Nereye Girilir

Uygulamada anahtar girilebilecek iki yer vardır. İkisi farklı çalışır; seçim, müşavirin o firma üzerinde Defter-Beyan sicilinde sözleşmesi olup olmamasına göre yapılır:

| | Müşavir Kartı <br/> *(Defter Beyan Api Bilgileri)* | Firma Şifreleri <br/> *(firmaya ait anahtar)* |
| :--- | :--- | :--- |
| **Anahtar kime ait** | Müşavire | Firmanın kendisine |
| **Kaç firmaya hizmet eder** | Müşavirin tüm firmalarına | Yalnızca o firmaya |
| **Mükellefe geçiş adımı** | Var — sözleşme doğrulaması gerekir | Yok — anahtar zaten o mükellefin |
| **Sözleşme şartı** | Zorunlu | Gerekmez |
| **Ne zaman tercih edilir** | Müşavirin sicilde sözleşmesi görünen firmalar için; tek anahtarla toplu yönetim sağlar. | Sözleşmesi görünmeyen ya da anahtarını kendisi yönetmek isteyen firmalar için. |

> ℹ️ Bir firmada her ikisi de tanımlıysa **firmanın kendi anahtarı** kullanılır; müşavir anahtarı yalnızca kendi anahtarı olmayan firmalar için devreye girer.

## 3. Anahtar Nasıl Üretilir

Anahtar Defter-Beyan portalında üretilir; uygulama anahtar üretmez. Adımlar her iki taraf için aynıdır, fark hangi kullanıcıyla giriş yapıldığıdır.

### 3.1. Portal Adımları

1. Anahtar kimin adına üretilecekse o tarafın kendi kullanıcısıyla Defter-Beyan portalına giriş yapılır. (Müşavir anahtarı için müşavirin kullanıcısı; firma anahtarı için firmanın kullanıcısı.)
2. Sol menüden **Sistem Yönetimi > Dış Sistem Kullanıcısı Tanımlama** açılır.
3. **Entegratör Seçimi** alanında kullandığınız yazılımın entegratörü seçilip **Seç** düğmesine basılır.
4. Ekrana gelen bilgilendirme okunur, onay kutusu işaretlenir ve **Oluştur** düğmesine basılır.
5. Portal **API KEY** ve **API SECRET** değerlerini bir kez gösterir. Bu iki değer kopyalanıp güvenli bir yere kaydedilir.

> ⚠️ **API SECRET yalnızca bir kez gösterilir:** Portal bu değeri sonradan tekrar göstermez. Kaybedilmesi hâlinde sorumluluk mükellefe aittir ve yeni bir anahtar üretilmesi gerekir. Değerleri e-posta gibi kalıcı ortamlarda saklamayın.

### 3.2. Uygulamaya Girme

- **Müşavir anahtarı:** Müşavir kartı > **Defter Beyan Api Bilgileri** bölümündeki *Api Key* ve *Api Secret* alanlarına girilir.
- **Firma anahtarı:** İlgili firmanın **Firma Şifreleri** ekranındaki Defter-Beyan kaydına girilir.

## 4. Uygulama İçi Kontrol Aracı

Müşavir kartındaki **Defter Beyan Api Bilgileri** başlığının sağında **Kontrol** düğmesi bulunur. Bu düğme, ekranda görünen (kayıtlı ya da yeni yazılmış) anahtarla Defter-Beyan'a bağlanır ve iki soruyu yanıtlar:

1. Bu anahtar gerçekten müşaviri mi açıyor, yoksa başka bir mükellefe mi ait?
2. Müşavirin firmalarından hangilerinde mükellefe geçiş yapılamıyor? (Sözleşme koşulunu sağlamayanların listesi.)

Kontrol **yalnızca sorgulama yapar**; hiçbir kayıt oluşturmaz, değiştirmez veya silmez. İşlem sırasında bir bilgi penceresi açılır, ilerleme gösterilir ve istenildiği an **Durdur** ile kesilebilir. Firma sayısı yüksek paketlerde işlem birkaç dakika sürebilir.

### 4.1. Sonuç Ekranının Okunması

| Üst Satırdaki Hüküm | Anlamı | Yapılması Gereken |
| :--- | :--- | :--- |
| **Anahtar bu müşaviri açıyor** | Anahtar doğru tarafa ait. Geçiş yapılamayan firmalar varsa sebep anahtar değil, sözleşme eksikliğidir. | Alt listedeki firmalar için [bölüm 4.2](#42-geçiş-yapılamayan-firmalar-listesi)'ye bakın. |
| **Anahtar bu müşavire ait değil** | Anahtar, ekranda gösterilen başka bir mükellef adına üretilmiş. Bu anahtarla diğer firmalara geçilemez. | Müşavirin kendi kullanıcısıyla yeni anahtar üretin ([bölüm 3](#3-anahtar-nasıl-üretilir)). |
| **Anahtar ile giriş yapılamadı** | ApiKey/ApiSecret hatalı, eksik ya da farklı bir entegratör için üretilmiş. | Değerleri yeniden kopyalayın; portalda doğru entegratörün seçili olduğunu doğrulayın. |
| **Oturum sahibi doğrulanamadı** | Giriş başarılı fakat Defter-Beyan kimlik bilgisini döndürmedi. Nadir bir durumdur. | İşlemi tekrarlayın; sürerse destek ekibine iletin. |

### 4.2. Geçiş Yapılamayan Firmalar Listesi

Alt bölümde, denenen firmalardan geçiş yapılamayanlar Defter-Beyan'ın döndürdüğü hata kodu ve mesajıyla listelenir. **Kopyala** düğmesi listeyi panoya alır; destek kaydına eklenebilir.

Yetki hatası alınan firmalar, müşavirin o mükellef üzerinde işlem yapma yetkisinin Defter-Beyan sicilinde görünmediği firmalardır. Bir müşavirin bir mükellef üzerinde işlem yapabilmesi sicil kayıtlarındaki sözleşme doğrulamasına bağlıdır. İki çözüm vardır:

- Sicildeki sözleşme kaydının tamamlanması (Defter-Beyan tarafında yapılır),
- ya da o firmanın kendi anahtarının **Firma Şifreleri** ekranına girilmesi — bu yol geçiş adımını hiç kullanmadığı için sözleşme gerektirmez.

## 5. Uygulamanın Otomatik Güvenlik Kontrolü

Kontrol düğmesinden bağımsız olarak, defter-beyan işlemlerinin her başlangıcında uygulama oturumun gerçekten açık firmanın mükellefi adına açıldığını doğrular. Doğrulama, Defter-Beyan'ın bildirdiği mükellef kimliğini firmanın VKN/TCKN bilgisiyle karşılaştırır.

Uyuşmazlık hâlinde işlem durdurulur ve aşağıdakine benzer bir mesaj gösterilir:

```text
Defter beyan oturumu farklı bir mükellef adına açıldı !..
Firma kimliği      : 9999999999
Oturumdaki mükellef : 8888888888 - ÖRNEK MÜKELLEF
```

> ℹ️ **Bu kontrol neden var:** Yanlış anahtar kullanıldığında kayıtlar sessizce başka bir mükellefin defterine yazılabiliyordu; ekranda hiçbir uyarı görünmüyordu. Kontrol bu durumu, defter seçimi yapılmadan önce durdurur. Böyle bir mesaj görüyorsanız **veri kaybı ya da yanlış kayıt oluşmamıştır** — işlem başlamadan kesilmiştir.

**Yapılması gereken:** Mesajdaki iki kimliği karşılaştırın. Oturumdaki mükellef müşavirinizse anahtar doğru fakat o firmaya geçiş yapılamamıştır (sözleşme). Oturumdaki mükellef tanımadığınız bir taraf ise girilen anahtar yanlıştır.

## 6. Mesaj Sözlüğü

Uygulamanın verdiği defter-beyan bağlantı mesajları, sebebe göre ayrılmıştır. Aşağıdaki tablo mesajı gören kişinin ne yapacağını gösterir:

| Mesaj | Gerçek Sebep | Çözüm |
| :--- | :--- | :--- |
| **Defter Beyan Api bilgileri bulunamadı** | Ne firmada ne müşavirde tanımlı bir anahtar var. | [Bölüm 3](#3-anahtar-nasıl-üretilir)'e göre anahtar üretip ilgili ekrana girin. |
| **Firmanın Defter Beyan anahtarı eksik ya da okunamadı** | Firma Şifreleri'ndeki kayıt yarım ya da farklı bir kullanıcı tarafından şifrelenmiş. | Firma anahtarını yeniden girip kaydedin. |
| **Yetki bulunamadı** | Kullanılan anahtarın o mükellef üzerinde işlem yetkisi yok; genellikle sözleşme eksikliği veya mükellef anahtarının müşavir kartına girilmesi. | Kontrol düğmesini çalıştırıp hükme bakın ([bölüm 4.1](#41-sonuç-ekranının-okunması)). |
| **Defter beyan oturumu farklı bir mükellef adına açıldı** | Anahtar başka bir mükellefe ait; oturum yanlış tarafta açılmış. | Anahtarı doğru tarafın anahtarıyla değiştirin. |
| **Firma kartındaki Defter Beyan anahtarı başka bir mükellefe ait** | Firma Şifreleri'ne, o firmaya ait olmayan bir anahtar girilmiş. | Firmanın kendi anahtarını girin. |
| **Defter Beyan'da bu mükellefe ait defter bulunamadı** | Oturum doğru mükellefte fakat istenen yıl/defter türü için kayıt yok. | Firma kartındaki defter türünü ve dönemi kontrol edin. |
| **Defter-Beyan Sistemi başvuru onaylanmalıdır** | Mükellefin portalda onaylaması gereken bir bildirim var. | Portala tarayıcıyla girip onay adımını tamamlayın. |
| **Ortak müşavir anahtarına düşüldü (uyarı)** | Firma kartında seçili müşavirin anahtarı tanımlı değil; sistemdeki genel anahtar kullanıldı. Bu anahtar başka bir müşavire ait olabilir. | Seçili müşavire kendi anahtarını tanımlayın. |

## 7. DBS Kimlik Türü Ayarı

Firma kartındaki dönem satırında **DBS Kimlik Türü** alanı bulunur. Bu alan, Defter-Beyan'a firmanın VKN'siyle mi TCKN'siyle mi bağlanılacağını belirler:

| Seçim | Davranış | Ne Zaman |
| :--- | :--- | :--- |
| **Otomatik** *(defter türüne göre)* | Uygulama defter türüne ve mükellefiyet tipine göre karar verir. Varsayılan ve önerilen seçimdir. | Normal durumlarda değiştirmeyin. |
| **TCKN** | Bağlantı her zaman TCKN ile kurulur. | Otomatik seçim VKN gönderiyor fakat mükellef Defter-Beyan'da TCKN ile tanımlıysa. |
| **VKN** | Bağlantı her zaman VKN ile kurulur. | Otomatik seçim TCKN gönderiyor fakat mükellef Defter-Beyan'da VKN ile tanımlıysa. |

> ⚠️ Bu ayarı **yalnızca yetki hatası alınıyor** ve mükellefin Defter-Beyan'daki kimliğinin diğer numara olduğu biliniyorsa değiştirin. Değişiklikten sonra **Kontrol** düğmesiyle doğrulayın.

## 8. Destek Ekibi İçin Hızlı Teşhis Akışı

1. Müşavir kartını açın, **Kontrol** düğmesine basın.
2. Giriş yapılamadıysa → anahtar değerleri veya entegratör seçimi hatalı. Anahtarı yeniden alın.
3. Anahtar müşavire ait değilse → müşavir adına yeni anahtar üretilmeli. Sorun burada biter; firma listesine bakmaya gerek yoktur.
4. Anahtar müşaviri açıyor fakat bazı firmalar başarısızsa → listeyi kopyalayın. Bu firmalar sözleşme koşulunu sağlamıyor; ya sicil kaydı tamamlanacak ya firma anahtarı girilecek.
5. Tüm firmalar başarılı fakat kullanıcı hâlâ hata alıyorsa → hatayı aldığı firmada defter türü / dönem ve DBS Kimlik Türü ayarına bakın ([bölüm 6](#6-mesaj-sözlüğü) ve [7](#7-dbs-kimlik-türü-ayarı)).

## 9. Kontrol Listesi

| # | Kontrol | Beklenen |
| :---: | :--- | :--- |
| 1 | Anahtar, işlem yapacak tarafın kendi kullanıcısıyla üretildi mi? | Evet |
| 2 | Portalda doğru entegratör seçildi mi? | Evet |
| 3 | ApiKey ve ApiSecret eksiksiz kopyalandı mı (baş/son boşluk yok)? | Evet |
| 4 | Anahtar doğru ekrana girildi mi (müşavir kartı / Firma Şifreleri)? | Evet |
| 5 | Kontrol düğmesi "Anahtar bu müşaviri açıyor" diyor mu? | Evet |
| 6 | Geçiş yapılamayan firma listesi boş mu? | Evet ya da sebebi biliniyor |
| 7 | Çok müşavirli pakette firma kartlarında doğru müşavir seçili mi? | Evet |

---

> ⚠️ **Güvenlik notu:** Bu kılavzdaki kimlik numaraları ve unvanlar örnektir; gerçek kayıtlarla ilgisi yoktur. API anahtarlarını destek talebi, e-posta veya ekran görüntüsü yoluyla paylaşmayın; destek ekibi anahtarın kendisine ihtiyaç duymaz, Kontrol ekranının sonucu yeterlidir.
