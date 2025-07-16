
# 🔀 JavaScript Koşul Yapıları

JavaScript'te koşul yapıları, belirli bir durumun doğru veya yanlış olmasına göre farklı işlemler gerçekleştirmek için kullanılır.

---

## ✅ `if` Yapısı

Belirli bir koşul doğruysa bir kod bloğunu çalıştırır.

```javascript
let yas = 18;

if (yas >= 18) {
  console.log("Reşitsiniz.");
}
```

---

## ✅ `if - else` Yapısı

Koşul doğruysa bir kod bloğu, yanlışsa başka bir kod bloğu çalıştırılır.

```javascript
let puan = 45;

if (puan >= 50) {
  console.log("Geçtiniz.");
} else {
  console.log("Kaldınız.");
}
```

---

## ✅ `if - else if - else` Yapısı

Birden fazla koşul kontrol edilir.
Sadece biri çalışır.

```javascript
let notDegeri = 85;

if (notDegeri >= 90) {
  console.log("Pekiyi");
} else if (notDegeri >= 70) {
  console.log("İyi");
} else if (notDegeri >= 50) {
  console.log("Orta");
} else {
  console.log("Kaldı");
}
```

---

## 🔄 `switch` Yapısı

Birden fazla durumu kontrol etmek için kullanılır. `case` ifadeleri ile çalışır.

```javascript
let gun = "Pazartesi";

switch (gun) {
  case "Pazartesi":
    console.log("Haftanın ilk günü.");
    break;
  case "Cuma":
    console.log("Haftanın son iş günü.");
    break;
  default:
    console.log("Hafta sonu veya geçersiz gün.");
}
```

---

## 💡 Ternary (Üçlü) Operatör

Kısa if-else ifadesidir.

```javascript
let yas = 20;
let mesaj = (yas >= 18) ? "Reşit" : "Reşit değil";
console.log(mesaj);
```

---

📌 **Not:** Koşul yapıları, uygulamanın akışını yönlendirmek için temel yapı taşlarındandır.
