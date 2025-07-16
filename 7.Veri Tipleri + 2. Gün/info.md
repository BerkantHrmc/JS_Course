
# 📚 JavaScript Veri Tipleri

JavaScript'te yedi temel veri tipi bulunur. Bunlar iki ana grupta toplanabilir: **ilkel (primitive)** ve **referans (reference)** tipler.

Veri Tipleri

1- String
2- Number
3- Boolean
4- Null
5- Undefined
6- Object
7- Function

---

## 1. 🔤 `String`
Metinsel verileri tutar.

```javascript
let isim = "Ali";
let mesaj = 'Merhaba';
let tamAd = `Ali Yılmaz`;
```

---

## 2. 🔢 `Number`
Tüm sayılar (tam sayı ve ondalıklı) için kullanılır.

```javascript
let yas = 25;
let pi = 3.14;
```

---

## 3. 🔘 `Boolean`
Sadece iki değer alabilir: `true` (doğru) veya `false` (yanlış).

```javascript
let aktifMi = true;
let gecerli = false;
```

---

## 4. 🚫 `Null`
Bilinçli olarak "boş" veya "yok" anlamında atanır.

```javascript
let ogrenci = null;
```

---

## 5. ❓ `Undefined`
Değişken tanımlanmış ama henüz değer atanmamışsa `undefined` olur.

```javascript
let notVerisi;
console.log(notVerisi); // undefined
```

---

## 6. 🧱 `Object`
Birden fazla veriyi bir arada tutan yapıdır. Anahtar-değer çiftleriyle çalışır.

```javascript
let kisi = {
  ad: "Zeynep",
  yas: 30
};
```

---

## 7. 🧩 `Function`
JavaScript'te fonksiyonlar da bir veri tipidir (aslında object türünün özel bir halidir).

```javascript
function selamVer() {
  console.log("Merhaba!");
}
```

---

## 📌 Notlar:
- `typeof null` çıktısı `"object"` olur → bu JavaScript'teki eski bir hatadır.
- Fonksiyonlar aslında birer `object` türüdür ama `typeof` ile `"function"` sonucu döner.
