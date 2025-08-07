# JavaScript Regular Expressions (RegEx)

JavaScript'te **Regular Expressions (RegEx)**, metin içerisinde desen aramak, eşleştirmek ve değiştirmek için kullanılan güçlü bir araçtır. Bu rehber, temel tanımlardan ileri düzey kullanıma kadar tüm detayları içerir.

---

## 📌 1. RegExp Tanımı ve Oluşturulması

### ➤ Literal Notasyonu:
```js
const regex1 = /abc/;
```

### ➤ Constructor Notasyonu:
```js
const regex2 = new RegExp('abc');
```

---

## 📌 2. Temel Karakterler ve Anlamları

| Karakter | Açıklama |
|----------|----------|
| `.`      | Herhangi bir karakter |
| `^`      | Satırın başı |
| `$`      | Satırın sonu |
| `*`      | 0 veya daha fazla tekrar |
| `+`      | 1 veya daha fazla tekrar |
| `?`      | 0 veya 1 tekrar (opsiyonel) |
| `\`     | Özel karakter kaçışı |
| `[...]`  | Belirli karakterlerden biri |
| `[^...]` | Belirli karakterler dışındakiler |
| `|`      | Veya (alternatif) |
| `()`     | Grup oluşturma |

---

## 📌 3. Kullanım Örnekleri

### ✅ Basit Kelime Arama:
```js
/cat/.test("My cat is cute"); // true
```

### ✅ Sayı ile Başlayan Metin:
```js
/^\d/.test("1abc"); // true
/^\d/.test("abc1"); // false
```

### ✅ Belirli Karakter Aralığı:
```js
/[A-Z]/.test("Hello"); // true
```

### ✅ Alternatif Seçenekler:
```js
/apple|banana/.test("I like banana"); // true
```

---

## 📌 4. RegEx Bayrakları (Flags)

| Bayrak | Anlamı |
|--------|--------|
| `g`    | Global (tüm eşleşmeleri bul) |
| `i`    | Harf duyarsız eşleştirme |
| `m`    | Çok satırlı eşleştirme |

### Örnek:
```js
"Hello hello".match(/hello/gi); // ["Hello", "hello"]
```

---

## 📌 5. RegEx Metotları

### 🔹 `test()`
```js
/abc/.test("abcdef"); // true
```

### 🔹 `match()`
```js
"abcabc".match(/abc/g); // ["abc", "abc"]
```

### 🔹 `replace()`
```js
"abc123".replace(/\d/g, "*"); // "abc***"
```

### 🔹 `search()`
```js
"hello world".search(/world/); // 6
```

### 🔹 `split()`
```js
"a,b;c.d".split(/[;,.]/); // ["a", "b", "c", "d"]
```

---

## 📌 6. Quantifier (Tekrar Belirteçleri)

| Sembol | Açıklama |
|--------|----------|
| `*`    | 0 veya daha fazla tekrar |
| `+`    | 1 veya daha fazla tekrar |
| `?`    | 0 veya 1 tekrar |
| `{n}`  | n kez tekrar |
| `{n,}` | n veya daha fazla tekrar |
| `{n,m}`| n ile m arasında tekrar |

---

## 📌 7. Grup ve Yakalama

```js
const result = /(\d{4})-(\d{2})-(\d{2})/.exec("2025-08-05");
console.log(result); // ["2025-08-05", "2025", "08", "05"]
```

---

## 📌 8. Gelişmiş Kullanımlar

### 📧 E-mail Kontrolü:
```js
const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
regex.test("user@mail.com"); // true
```

### 👤 Türkçe İsim Kontrolü:
```js
const regex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/;
```

---

