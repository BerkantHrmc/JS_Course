
# JavaScript: `window` ve `document` Objeleri

## 1. `window` Objesi

Tarayıcıda global context'i temsil eder. Tüm global değişkenler ve fonksiyonlar `window` objesinin birer özelliğidir.

### Özellikleri ve Fonksiyonları:
- `window.alert(message)` – Uyarı kutusu gösterir.
- `window.setTimeout(fn, delay)` – Belirli bir süre sonra fonksiyonu çalıştırır.
- `window.setInterval(fn, interval)` – Belirli aralıklarla fonksiyonu tekrarlar.
- `window.location` – Sayfanın URL bilgilerine erişim sağlar ve yönlendirme yapılabilir.
- `window.innerWidth`, `window.innerHeight` – Görünen pencerenin boyutları.

## 2. `document` Objesi

HTML sayfasını temsil eder. Sayfa üzerindeki tüm öğelere erişim ve manipülasyon sağlar.

### Yaygın Kullanımlar:
- `document.getElementById("id")`
- `document.querySelector("selector")`
- `document.createElement("tagName")`
- `document.body`, `document.head`
- `document.title` – Sayfa başlığına erişim ve değiştirme.

### Örnek:
```javascript
document.getElementById("demo").innerText = "Merhaba Dünya!";
```

## İlişki
`document`, `window` objesinin bir özelliğidir:
```javascript
console.log(window.document === document); // true
```

---

📝 Not: Bu objeler JavaScript'in tarayıcı ortamında çalışmasını sağlar. Node.js ortamında `window` ve `document` bulunmaz.
