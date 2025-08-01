# JavaScript `Set` İşlemleri

| İşlem                         | Açıklama                               | Kod Örneği                                  | Sonuç / Açıklama                             |
|------------------------------|----------------------------------------|---------------------------------------------|----------------------------------------------|
| ✅ Set oluşturma             | Yeni bir Set nesnesi oluşturur         | `const s = new Set();`                      | Boş bir Set                                  |
| ➕ Eleman ekleme              | Set’e yeni bir eleman ekler            | `s.add(1);`                                  | `Set {1}` olur                               |
| ➖ Eleman silme               | Belirli bir elemanı siler              | `s.delete(1);`                               | Eleman varsa silinir                         |
| 🔍 Eleman kontrolü           | Eleman var mı diye kontrol eder        | `s.has(1);`                                  | true veya false                              |
| 🧹 Set'i temizleme           | Tüm elemanları siler                   | `s.clear();`                                 | Set boşalır                                  |
| 🔄 Set birleşimi (union)     | İki Set’i birleştirir                  | `let union = new Set([...A, ...B]);`         | Tüm benzersiz elemanlar                      |
| 🔁 Set kesişimi (intersection)| Ortak elemanları alır                  | `let inter = new Set([...A].filter(x => B.has(x)));` | Ortak elemanlar                    |
| ➗ Set farkı (difference)     | A kümesinde olup B’de olmayanlar       | `let diff = new Set([...A].filter(x => !B.has(x)));` | Sadece A’ya özgü elemanlar         |

## Örnek Kod:

```js
const A = new Set([1, 2, 3]);
const B = new Set([3, 4, 5]);

// Birleşim
const union = new Set([...A, ...B]);
console.log('Birleşim:', union); // Set {1, 2, 3, 4, 5}

// Kesişim
const intersection = new Set([...A].filter(x => B.has(x)));
console.log('Kesişim:', intersection); // Set {3}

// Fark (A - B)
const difference = new Set([...A].filter(x => !B.has(x)));
console.log('Fark:', difference); // Set {1, 2}
```

---

