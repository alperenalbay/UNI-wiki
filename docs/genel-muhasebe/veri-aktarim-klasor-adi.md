---
description: "Veri aktarımında paket klasör adı kuralı: klasör adı neden firma adı olmalı, sayısal kod neden 'Could not find a part of the path' hatası verir, hata teşhisi ve düzeltme adımları."
---

# Veri Aktarımında Paket Klasör Adı Kuralı

Veri aktarımı yüklemesi sunucuda, paket numarası ve oturum kimliğinden oluşan bir klasöre açılır. Aktarım modülü (**LedgerData**) çalıştırılırken aranan ilk şey, bu klasörün **içindeki firma klasörüdür**. Firma klasörünün adı, Unideva'daki firma adıyla birebir uyuşmuyorsa aktarım, dosyalar eksiksiz yüklenmiş olsa bile başarısız olur.

:::info Kimin için
- **Destek ekibi:** `Could not find a part of the path` hatası geldiğinde sebebi dakikalar içinde ayırt etmek için.
- **Aktarımı yapan kişi:** Paketi hazırlarken klasör adını ilk seferde doğru vermek için.
:::

---

## 1. Kural

:::warning
Aktarım klasörünün adı harf içermeli, yani firma adının kendisi olmalıdır. Sayısal kod (`0023`, `23` gibi) kullanılmamalıdır.
:::

Doğru yapı, transfer kılavuzundaki standart yerleşimdir:

```
C:\devatek\unideva\transfer\Paket No\Firma Adı\
```

| Örnek | Sonuç |
| :--- | :--- |
| `transfer\888881\NEBARI\` | ✅ Çalışır |
| `transfer\888881\0023\` | ❌ Hata |
| `transfer\888881\23\` | ❌ Hata |

Klasör adı, firma kartında kayıtlı isimle **büyük/küçük harf ve boşluk dahil birebir** aynı olmalıdır. Aynı kural zip dosyasının kök klasörü için de geçerlidir: zip içinde `0023/` yerine `NEBARI/` olmalıdır.

## 2. Hata Ne Zaman Çıkar

Yükleme tamamlanır, sunucu dosyaları paket klasörüne açar; ancak LedgerData, firma klasörünü farklı bir adla aradığında yol bulunamaz ve şu hata döner:

```
(LedgerData) Could not find a part of the path
'/app/uploads/<Paket No>/transfer/<Oturum Kimliği>/<aranan klasör>'
```

| Hata parçası | Anlamı |
| :--- | :--- |
| `/app/uploads/...` | Sunucunun (Linux) paket deposu — hatanın kaynağı bilgisayarınız değil, sunucudur. |
| `<Paket No>` | Giriş yapılan paket numarası. |
| `<Oturum Kimliği>` | Bu yükleme için açılan benzersiz klasör (GUID). |
| `<aranan klasör>` | Bulunamayan firma klasörü. Adı genellikle beklenen firma kimliğidir. |

:::info Bilgi
Hata metninde yolun sonu sayısal görünebilir (ör. `/23`). Bu, sunucunun firma kimliğini sayı olarak tutmasından kaynaklanır; çözümü yine de klasörü **firma adıyla** adlandırmaktır. Sayısal ad (`23`) ile denemek işe yaramaz.
:::

## 3. Teşhis

1. Hata metnindeki **paket numarasını** not edin.
2. `C:\devatek\unideva\transfer\<Paket No>\` klasörüne girin.
3. Firma klasörünün adını, Unideva'da **Genel Ayarlar > Admin > Firmalar** ekranındaki isimle karşılaştırın.
4. Zip oluşturulduysa kök klasörün de aynı adla olduğunu kontrol edin:

```
zip içinde:   NEBARI/2025/Account.csv   ✅
zip içinde:   0023/2025/Account.csv     ❌
```

## 4. Düzeltme

1. Klasörü firma adıyla yeniden adlandırın (ya da Veri Oluştur adımını firma adıyla bir klasör üretecek şekilde tekrar çalıştırın).
2. Zip gerekiyorsa yeniden paketleyin — eski zip'i kullanmayın, içinde eski ad kalır.
3. Tekrar yükleyin.

Klasör adı düzeltildikten sonra dosya içeriği değişmeden aktarım geçer. Ek olarak hata alınan pakette bir de **eksik veri tipi** var mı bakın: hızlı olsun diye bazı kutuların işaretlenmemesi, aktarım "başarılı" görünse bile personel, sabit kıymet, stok, defter kaydı gibi verilerin hiç gitmemesine yol açar. İlk aktarımda tüm veri tipleri işaretlenmelidir.

## 5. Sık Yapılan Hatalar

| Hata | Sonuç |
| :--- | :--- |
| Klasöre firma **kodu** vermek (`0023`, `123609`) | Yol bulunamaz, hata. |
| Klasörü `23` gibi kısaltmak | Yine hata — kısaltma çözüm değil. |
| Klasörü doğru adlandırıp **eski zip'i** yüklemek | Zip içinde hâlâ eski ad var, hata sürer. |
| Hızlı aktarım için veri tiplerini boş bırakmak | Hata alınmaz ama veriler eksik aktarılır. |

---

## İlgili Kılavuzlar

- [Zirve Masaüstü'nden Unideva'ya Veri Aktarım Kılavuzu](/docs/genel-muhasebe/zirve-firma-aktarim)
