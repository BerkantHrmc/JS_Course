
# ⚙️ JavaScript Atama Operatörleri

Atama operatörleri, bir değişkene değer atamak veya mevcut değeri üzerinde işlem yaparak güncellemek için kullanılır.

// ----------- ATAMA OPERATORLERİ -----------


=   : Değer atama operatörü
==  : Eşitlik operatörü (veri tiplerinin önemi yoktur)
=== : Eşitlik operatörü ( veri tipinin de önemi vardır)
+=  : Toplayarak atama (x += y → x = x + y)
-=  : Çıkararak atama (x -= y → x = x - y)
*=  : Çarparak atama (x *= y → x = x * y)
/=  : Bölerken atama (x /= y → x = x / y)
%=  : Mod alarak atama (x %= y → x = x % y)
**= : Üs alarak atama (x **= y → x = x ** y)


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

//-----------MANTIKSAL ATAMA OPERATORLERİ-----------

// ||  : Mantıksal VEYA (logical OR)
// &&  : Mantıksal VE (logical AND)
// !   : Mantıksal DEĞİL (logical NOT)

//-----------KARŞILAŞTIRMA OPERATORLERİ-----------

// !=  : Eşit değil (not equal)
// !== : Eşit değil (değer ve tip eşitliği)
// >   : Büyüktür (greater than)
// <   : Küçüktür (less than)
// >=  : Büyük veya eşit (greater than or equal)
// <=  : Küçük veya eşit (less than or equal)

