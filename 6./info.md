
# JavaScript'te `var`, `let` ve `const` Arasındaki Farklar (Özet)

Modern JavaScript'te değişken tanımlamak için üç anahtar kelime kullanılır: `var`, `let`, `const`.

---

## 🔹 Kısa Kısa Tanımlar

- **`var`**  
  ✅ Function Scope  
  🔁 Yeniden tanımlanabilir  
  ⚠️ Hoisting yapılır (tanımlanmadan önce erişilebilir ama `undefined`)  
  ❌ Modern kullanımda önerilmez

- **`let`**  
  ✅ Block Scope  
  🔁 Değeri değiştirilebilir  
  🚫 Yeniden tanımlanamaz  
  ⚠️ Hoisting yapılır ama tanımlamadan önce kullanılamaz (TDZ)

- **`const` (constant) **  
  ✅ Block Scope  
  🔁 Değeri değiştirilemez (primitive değerlerde)  
  🚫 Yeniden tanımlanamaz  
  ⚠️ Hoisting yapılır ama TDZ etkisi vardır  
  ⚠️ Objelerde içeriği değiştirilebilir

---

## 🧠 Karşılaştırma Tablosu

| Özellik         | `var`          | `let`         | `const`        |
|-----------------|----------------|---------------|----------------|
| Scope           | Function Scope | Block Scope   | Block Scope    |
| Hoisting        | ✅ (undefined) | ✅ (TDZ)       | ✅ (TDZ)        |
| Yeniden Tanım   | ✅              | ❌             | ❌              |
| Değer Atama     | ✅              | ✅             | ❌ (sabit)      |
| Modern Kullanım | ❌ Önerilmez    | ✅ Önerilir    | ✅ (sabitler için) |

---

## 🎯 Ne Zaman Hangisini Kullanmalı?

- Değişkenin değeri değişmeyecekse `const`
- Değişkenin değeri değişecekse `let`
- `var` kullanmaktan kaçının

