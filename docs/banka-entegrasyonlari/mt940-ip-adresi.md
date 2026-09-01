---
description: "Tüm bankalar için MT940 entegrasyon IP adresi: 213.250.144.198 — banka tarafında beyaz listeye eklenmesi gereken statik IP."
---

# MT940 Entegrasyon IP Adresi

Tüm bankalar için MT940 entegrasyonunda kullanılan IP adresimiz **aynıdır** ve sabittir.

:::tip[Statik IP — Tüm Bankalar]

**213.250.144.198**

Bu IP’yi bankanızın / bilgi işlem biriminizin güvenlik duvarında ve MT940 izni verilen IP listesinde **beyaz listeye (whitelist)** ekleyin.

:::

<div style={{display:'flex',gap:'0.6rem',flexWrap:'wrap',margin:'1rem 0'}}>
  <a href="tel:" className="button button--primary" onClick={(e)=>{e.preventDefault(); navigator.clipboard.writeText('213.250.144.198'); const b=e.currentTarget; const t=b.textContent; b.textContent='✓ Kopyalandı'; setTimeout(()=>b.textContent=t,1500);}}>
    📋 IP'yi Kopyala
  </a>
  <span style={{alignSelf:'center',fontSize:'0.85rem',color:'var(--ifm-color-emphasis-700)'}}>
    Tek IP — banka fark etmeksizin aynı.
  </span>
</div>

---

## Ne için gerekli?

MT940, banka hesap hareketlerinin (hesap ekstresi) otomatik olarak Unideva’ya aktarılmasını sağlar. Banka, bağlantıya yalnızca onaylı IP’lerden izin verdiği için bu adresin **önceden tanımlı olması gerekir**. Aksi halde bağlantı `timeout` / `erişim reddedildi` hatası verir.

## Bankanıza ileteceğiniz metin (hazır)

> Merhaba,  
> Unideva MT940 entegrasyonu için IP beyaz liste talebimiz var.  
> **Tüm bankalar için tek IP:** `213.250.144.198`  
> Lütfen bu IP’yi MT940 erişim listesine ekler misiniz?

## Sık sorulanlar

**Her banka için farklı mı?** — Hayır, tüm bankalar için aynı: `213.250.144.198`.

**IP değişir mi?** — Hayır, statik. Değişmesi halinde bu sayfa ve duyurular güncellenir.

**Port / protokol gerekir mi?** — Bankanıza göre değişebilir; genellikle banka kendi dokümanında belirtir. IP dışında ek bir ayar gerekiyorsa bankanız bilgilendirir — biz tarafında IP yeterlidir.

**Test edemedik, ne yapalım?** — Önce beyaz liste onayını teyit edin, sonra Unideva’da banka entegrasyon ekranından **Bağlantıyı Test Et**’i kullanın. Sorun sürerse `iletisim@devatek.com` ve bankanızın MT940 destek birimiyle eş zamanlı görüşün.

---

> ℹ️ Not: Bu IP yalnızca MT940 entegrasyonu içindir. Diğer e-Dönüşüm / GİB servisleri farklı altyapı kullanır.

