# Zirve Masaüstü’nden Unideva’ya Veri Aktarım Kılavuzu

## 1. Firma Veritabanlarının Hazırlanması
- Kullanıcıdan alınan firma veritabanları **C:\zirvenet\zirvedata** yoluna kopyalanır.  
- Zirve masaüstü uygulaması açılır.  
- **F11** tuşuna basılarak veritabanları programa listelenir.  

## 2. Firma ve Dönem Seçimi
- Listelenen firmalardan aktarım yapılacak firma seçilir.  
- Aktarım yapılacak yıllar için programa giriş yapılır.  
- Her girişte program SQL üzerinde veritabanı bağlantı kodlarını çalıştırır ve ilgili dönem yüklenir.  
- Firmanın tüm dönemlerine giriş-çıkış yapıldığında veritabanları bağlanmış olur.  

## 3. Unideva Transfer Programında Veri Hazırlığı
- **Unideva Transfer Programı** açılır.  
- dataların olduğu klasör seçilir.
- Klasör olarak zirvenet seçilir.
- **Firmaları Oku** butonuna basılarak yüklenmiş firmalar listelenir.  
- Aktarım yapılacak firma seçilir.  

### İlk Aktarım Durumunda
- **Muhasebe, Personel, Sabit Kıymet, Kira, Stok, Cari Hesap, Diğer** seçenekleri işaretlenir.  
- Döviz takibi talebi yoksa **Döviz Kullan** işaretlenmez; müşteri talebi varsa işaretlenir.  
- **Veri Oluştur** butonuna basılır.  

### Sonraki Aktarımlarda
- Kullanıcının belirttiği veri tipleri işaretlenir.  
- **Veri Oluştur** butonuna basılır.  

- Veriler **C:\devatek\unideva\transfer** klasöründe oluşur.  

## 4. Unideva Programında Firma Tanımlama
- Aktarım öncesinde Unideva’da ilgili firmanın tanımlanması gerekir.  
- **Genel Ayarlar (sarı menü) > Admin > Firmalar > Ekle** yolundan firma bilgileri girilir.  
- Firma bilgileri:  
  - Manuel olarak girilebilir.  
  - Ya da **C:\zirvenet\zirvedata\FİRMAİSMİ\SirketBilgileri.ini** dosyası seçilerek otomatik getirilebilir.  

## 5. Veri Aktarımı
- Unideva’da firma kaydedildikten sonra ilgili dönem açılır.  
- **Ön Muhasebe > Firma > Veri Aktarımı** bölümüne girilir.  
- Yukarıdan **Muhasebe Veri Aktarımı** seçilir.  
- **Klasör Seç** butonuna tıklanır.  
- **C:\devatek\unideva\transfer\Paket no\Firma ADI** klasörü seçilir.  
- **Yükle** butonuna basılarak veriler aktarılır.  

## 6. Kontrol
- Aktarım tamamlandıktan sonra veriler Zirve ve Unideva üzerinde karşılaştırılarak doğrulama yapılabilir.  

---
📌 Bu kılavuz, adım adım veri aktarım sürecini standart hale getirmek için hazırlanmıştır.

Yazar: Alperen Albayın