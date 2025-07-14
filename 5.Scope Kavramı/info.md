
# 🔸 Scope (Kapsam) Nedir?

Scope, bir değişkenin tanımlandığı ve erişilebildiği yerdir.

## 🔹 Global Scope
- Her yerden erişilebilen değişkenlerdir.
- `var`, `let`, `const` ile dışarıda tanımlanmış değişkenler globaldir (tarayıcıda `window` objesine bağlanır).

```javascript
let globalVar = "Merhaba";

function greet() {
  console.log(globalVar); // Erişilebilir
}
```

## 🔹 Function Scope
- Sadece fonksiyonun içinde tanımlanmış değişkenlerdir.
- `var` fonksiyon scope'lu çalışır, `let` ve `const` ise blok scope'ludur ama fonksiyonda da geçerlidir.

```javascript
function example() {
  var localVar = "Fonksiyon içi";
  console.log(localVar);
}
// console.log(localVar); // Hata
```

## 🔹 Block Scope
- `{}` süslü parantezlerle tanımlanan bloklar içindeki değişkenlerin kapsamıdır.
- `let` ve `const` block-scoped'dur.

```javascript
if (true) {
  let temp = "Sadece bu blokta";
}
// console.log(temp); // Hata
```

---

# ✅ Özet

| Özellik         | `var`         | `let`         | `const`        |
|-----------------|---------------|---------------|----------------|
| Scope           | Function      | Block         | Block          |
| Yeniden Tanım   | ✅             | ❌             | ❌              |
| Değer Atama     | ✅             | ✅             | ❌ (değeri sabit) |
| Hoisting        | ✅ (undefined) | ✅ (TDZ)       | ✅ (TDZ)        |

---

🧠 Not: Modern JavaScript'te `let` ve `const` kullanılması önerilir. `var` artık çoğunlukla terk edilmiştir.
