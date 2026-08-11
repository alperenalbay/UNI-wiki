---
description: "Zirve Masaüstü'nden Unideva'ya firma veri aktarımının adım adım kılavuzu: veritabanı hazırlama, transfer programı, firma tanımlama ve yükleme süreci."
---

# Zirve Masaüstü'nden Unideva'ya Veri Aktarım Kılavuzu

Bu kılavuz, Zirve masaüstü programından Unideva'ya firma verilerinin eksiksiz ve hatasız aktarılması için izlenmesi gereken tüm adımları açıklar.

> ⚠️ **Not:** Bu doküman, Devatek ekibinin müşteri veri aktarım süreçlerinde kullandığı operasyonel bir kılavuzdur.

## 1. Firma Veritabanlarının Hazırlanması

1. Kullanıcıdan alınan firma veritabanlarını `C:\zirvenet\zirvedata` yoluna kopyalayın.
2. Zirve masaüstü uygulamasını açın.
3. **F11** tuşuna basarak veritabanlarını programa listeletin.

## 2. Firma ve Dönem Seçimi

1. Listelenen firmalardan aktarım yapılacak firmayı seçin.
2. Aktarım yapılacak yıllar için programa giriş yapın.
3. Her girişte program, SQL üzerinde veritabanı bağlantı kodlarını çalıştırır ve ilgili dönemi yükler.
4. Firmanın tüm dönemlerine giriş-çıkış yapıldığında veritabanları bağlanmış olur.

## 3. Unideva Transfer Programında Veri Hazırlığı

1. **Unideva Transfer Programı**'nı açın.
2. Verilerin bulunduğu `C:\zirvenet` klasörünü seçin.
3. **Firmaları Oku** butonuna basarak yüklenmiş firmaları listeletin.
4. Aktarım yapılacak firmayı seçin.

### İlk Aktarım

- **Muhasebe, Personel, Sabit Kıymet, Kira, Stok, Cari Hesap, Diğer** seçeneklerini işaretleyin.
- Döviz takibi talebi yoksa **Döviz Kullan** seçeneğini işaretlemeyin; müşteri talebi varsa işaretleyin.
- **Veri Oluştur** butonuna basın.

### Sonraki Aktarımlar

- Kullanıcının belirttiği veri tiplerini işaretleyin.
- **Veri Oluştur** butonuna basın.

Veriler `C:\devatek\unideva\transfer` klasöründe oluşturulur.

## 4. Unideva Programında Firma Tanımlama

Aktarım öncesinde Unideva'da ilgili firmanın tanımlanması gerekir.

1. **Genel Ayarlar (sarı menü) > Admin > Firmalar > Ekle** yolundan firma bilgilerini girin.
2. Firma bilgileri:
   - Manuel olarak girilebilir.
   - Ya da `C:\zirvenet\zirvedata\FİRMAİSMİ\SirketBilgileri.ini` dosyası seçilerek otomatik getirilebilir.

## 5. Veri Aktarımı

1. Unideva'da firma kaydedildikten sonra ilgili dönemi açın.
2. **Ön Muhasebe > Firma > Veri Aktarımı** bölümüne girin.
3. Yukarıdan **Muhasebe Veri Aktarımı** seçin.
4. **Klasör Seç** butonuna tıklayın.
5. `C:\devatek\unideva\transfer\Paket No\Firma Adı` klasörünü seçin.
6. **Yükle** butonuna basarak verileri aktarın.

## 6. Kontrol

Aktarım tamamlandıktan sonra verileri Zirve ve Unideva üzerinde karşılaştırarak doğrulayın.

---

📌 Bu kılavuz, adım adım veri aktarım sürecini standart hale getirmek için hazırlanmıştır.
