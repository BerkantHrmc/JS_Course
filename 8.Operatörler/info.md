
# ⚙️ JavaScript Atama Operatörleri

Atama operatörleri, bir değişkene değer atamak veya mevcut değeri üzerinde işlem yaparak güncellemek için kullanılır.

// ----------- ATAMA OPERATORLERİ -----------


| Operatör | Açıklama                                                                 |
|----------|--------------------------------------------------------------------------|
| `=`      | Değer atama operatörü                                                    |
| `==`     | Eşitlik operatörü (veri tipleri dikkate alınmaz)                         |
| `===`    | Sıkı eşitlik operatörü (değer ve veri tipi kontrol edilir)               |
| `+=`     | Toplayarak atama → `x += y` ≡ `x = x + y`                                 |
| `-=`     | Çıkararak atama → `x -= y` ≡ `x = x - y`                                  |
| `*=`     | Çarparak atama → `x *= y` ≡ `x = x * y`                                   |
| `/=`     | Bölerek atama → `x /= y` ≡ `x = x / y`                                    |
| `%=`     | Mod alarak atama → `x %= y` ≡ `x = x % y`                                 |
| `**=`    | Üs alarak atama → `x **= y` ≡ `x = x ** y`                                |


---

## 📌 Temel Atama Operatörü

### `=`
Bir değeri değişkene atar.

```javascript
let x = 5;
```

---

## ➕ Toplama ve Atama

### `+=`
Mevcut değere ekleme yapar.

```javascript
let x = 5;
x += 3; // x = x + 3 → x = 8
```

---

## ➖ Çıkarma ve Atama

### `-=`
Mevcut değerden çıkarma yapar.

```javascript
let x = 10;
x -= 4; // x = x - 4 → x = 6
```

---

## ✖️ Çarpma ve Atama

### `*=`
Mevcut değeri çarpar.

```javascript
let x = 4;
x *= 2; // x = x * 2 → x = 8
```

---

## ➗ Bölme ve Atama

### `/=`
Mevcut değeri böler.

```javascript
let x = 20;
x /= 5; // x = x / 5 → x = 4
```

---

## 🟰 Mod (Kalan) ve Atama

### `%=`
Mevcut değerin kalanı ile günceller.

```javascript
let x = 10;
x %= 3; // x = x % 3 → x = 1
```

---

## ⬆️ Üs Alma ve Atama

### `**=`
Mevcut değeri üs alarak günceller.

```javascript
let x = 2;
x **= 3; // x = x ** 3 → x = 8
```

---

## 🧠 Not

Bu operatörler, kısaltma sağlar ve okunabilirliği artırır. Her biri, `x = x (operatör) y` ifadesinin kısaltılmış halidir.

---

# 🔀 Mantıksal Atama Operatörleri

### `||` – Mantıksal VEYA (OR)
Soldan sağa ilk doğru (truthy) değeri döndürür.

```javascript
let ad = "" || "Ziyaretçi";
console.log(ad); // "Ziyaretçi"
```

---

### `&&` – Mantıksal VE (AND)
Soldan sağa ilk yanlış (falsy) değeri döndürür. Hepsi doğruysa sonuncuyu verir.

```javascript
let durum = true && "Giriş Başarılı";
console.log(durum); // "Giriş Başarılı"
```

---

### `!` – Mantıksal DEĞİL (NOT)
Bir değerin mantıksal tersini alır.

```javascript
let aktif = false;
console.log(!aktif); // true
```

---

# 🔍 Karşılaştırma Operatörleri

### `!=` – Eşit Değil
Değerler eşit değilse `true` döner.

```javascript
console.log(5 != 3); // true
```

---

### `!==` – Değer ve Tip Eşit Değil
Değer veya tip farklıysa `true` döner.

```javascript
console.log(5 !== "5"); // true
```

---

### `>` – Büyüktür
Soldaki sağdakinden büyükse `true` döner.

```javascript
console.log(10 > 7); // true
```

---

### `<` – Küçüktür
Soldaki sağdakinden küçükse `true` döner.

```javascript
console.log(3 < 7); // true
```

---

### `>=` – Büyük veya Eşit
Soldaki sağdakine eşit veya büyükse `true` döner.

```javascript
console.log(5 >= 5); // true
```

---

### `<=` – Küçük veya Eşit
Soldaki sağdakine eşit veya küçükse `true` döner.

```javascript
console.log(4 <= 6); // true
```

