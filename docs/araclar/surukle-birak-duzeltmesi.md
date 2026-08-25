---
description: "Windows sürükle-bırak (drag & drop) çalışmadığında UAC kaynaklı sorunun çözümü: DragDrop.reg düzeltmesi indirme, uygulama ve geri alma adımları."
---

# Sürükle-Bırak Düzeltmesi (Drag & Drop)

Bilgisayarda dosya sürükle-bırak işlemi hiç çalışmıyorsa veya bazı programlara dosya bırakılamıyor, “özellik aktif değil” gibi davranıyorsa sorun genellikle **UAC (Kullanıcı Hesabı Denetimi) bütünlük seviyesi uyuşmazlığıdır**. Özellikle bir program **Yönetici olarak çalıştır** ile açılmışken Windows Gezgini normal seviyede çalışırsa, Windows güvenlik gereği sürükle-bırakı engeller.

Bu sayfadaki `DragDrop.reg` düzeltmesi bu engeli kaldırır.

:::tip[İndir]
Aşağıdaki dosya RAR içinde tek bir kayıt defteri anahtarını içerir. İndirip RAR'dan çıkarın, ardından `DragDrop.reg`'i çift tıklayın.
:::

<a
  href="/UNI-wiki/files/DragDrop.rar"
  target="_blank"
  rel="noopener noreferrer"
  className="button button--primary button--lg"
  download
  style={{textDecoration: 'none'}}
>
  📦 DragDrop.rar İndir (276 B)
</a>

<span style={{margin: '0 8px'}}></span>

<a
  href="/UNI-wiki/files/DragDrop.reg"
  target="_blank"
  rel="noopener noreferrer"
  className="button button--secondary button--lg"
  download
  style={{textDecoration: 'none'}}
>
  📄 DragDrop.reg (doğrudan)
</a>

<br />
<br />

> ℹ️ Alternatif linkler: <a href="/UNI-wiki/files/DragDrop.rar" target="_blank">RAR</a> · <a href="/UNI-wiki/files/DragDrop.reg" target="_blank">REG</a>

---

## Ne yapar?

Dosya içeriği:

```reg
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System]
"EnableLUA"=dword:00000000
```

`EnableLUA=0` → **UAC (Kullanıcı Hesabı Denetimi) kapatılır**. Böylece yönetici / normal seviye ayrımı kalkar ve sürükle-bırak engeli ortadan kalkar. **Etkisi yeniden başlatmadan sonra başlar.**

## Ne zaman kullanın?

- Sürükle-bırak hiçbir programda çalışmıyorsa,
- Unideva / Zirve / başka bir muhasebe programına dosya bırakılamıyorsa ve programı **Yönetici olarak çalıştır** ile açıyorsanız,
- Diğer çözümler (aşağıya bakın) fayda etmediyse.

## Uygulama adımları

1. **Yedek / geri dönüşüm noktası oluşturun:** `Denetim Masası > Sistem > Sistem Koruması > Oluştur`.
2. Dosyayı indirin: **DragDrop.rar** → sağ tık **Buraya çıkart** (veya 7-Zip/WinRAR ile).
3. Çıkan `DragDrop.reg` üzerine **çift tıklayın** → `Evet` → UAC uyarısını onaylayın. Yazma için **yönetici yetkisi gerekir**.
4. **Bilgisayarı yeniden başlatın.** Değişiklik ancak reboot sonrası aktif olur.
5. Sürükle-bırakı test edin.

> ⚠️ **Güvenlik uyarısı:** `EnableLUA=0` UAC'yi tamamen kapatır. UAC, zararlı yazılımların sessizce yönetici yetkisi almasını engelleyen önemli bir korumadır. Bu düzeltmeyi **yalnızca sorun kesin UAC kaynaklıysa ve geçici çözüm gerekiyorsa** uygulayın. İş bitince mümkünse aşağıdaki **Geri alma** bölümünden UAC'yi tekrar açın.

## Önce denenebilecek daha güvenli alternatifler

Bu kayıt değişikliğine geçmeden önce şunları deneyin:

- Programı **normal çift tıkla** açın (Yönetici olarak çalıştır yerine). Gezgini ve programı aynı bütünlük seviyesinde çalıştırmak çoğu durumda sürükle-bırakı düzeltir.
- Program kısayolunda `Özellikler > Uyumluluk > Bu programı yönetici olarak çalıştır` tikini kaldırın.
- Windows'u ve programı güncelleyin, sonra yeniden başlatın.

Bu alternatifler yeterliyse kayıt düzeltmesine gerek yoktur.

<h2 id="geri-alma">Geri alma — UAC'yi yeniden açma</h2>

UAC'yi tekrar açmak için aşağıdaki içeriğe sahip bir `UAC-Ac.reg` oluşturup aynı şekilde çalıştırın ve yeniden başlatın:

```reg
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System]
"EnableLUA"=dword:00000001
```

Veya `Win + R` → `regedit` → `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System` → `EnableLUA` → `1` yapın → yeniden başlatın.

## Sık sorulanlar

**Antivirüs uyarı verir mi?** — Kayıt defteri değişikliği olduğu için bazı antivirüsler uyarabilir. Dosya yalnızca yukarıdaki tek değeri değiştirir; başka işlem yapmaz.

**Her kullanıcı yapabilir mi?** — Hayır, yerel yönetici (Administrator) yetkisi gerekir.

**Kalınca mı?** — Evet, değer sistemde kalır; yeniden `1` yapana kadar değişmez.

---

> ℹ️ Bu araç **Devatek** tarafından Windows UAC kaynaklı sürükle-bırak engeli için sağlanan geçici bir düzeltmedir. Sorun devam ederse [İletişim](https://www.devatek.com) veya `iletisim@devatek.com` üzerinden destek alın. `DragDrop.reg`'i yalnızca kaynağından (bu sayfa) indirin.
