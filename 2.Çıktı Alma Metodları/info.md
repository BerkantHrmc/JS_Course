
# JavaScript – document, window, write, writeln, alert, console.log

## window Nesnesi
- Tarayıcıda çalışan JavaScript’in global (küresel) nesnesidir.
- Tüm global değişkenler ve fonksiyonlar aslında `window` nesnesinin bir üyesidir.
- Örnek:
```js
console.log(window.innerWidth); // Pencere genişliğini verir
```

## document Nesnesi
- HTML sayfasının içeriğini temsil eder.
- DOM (Document Object Model) aracılığıyla erişim sağlar.
- Örnek:
```js
document.getElementById("id"); // Belirtilen id'ye sahip öğeyi seçer
```

## document.write()
- HTML akışına doğrudan metin yazar.
- Sayfa yüklendikten sonra kullanılırsa, mevcut içeriği siler.
```js
document.write("Merhaba Dünya!");
```

## document.writeln()
- `document.write()` ile aynıdır, fakat satır sonu (newline) ekler.
```js
document.writeln("Satır 1");
document.writeln("Satır 2");
```

## alert()
- Kullanıcıya bilgi vermek için açılır pencere (popup) gösterir.
```js
alert("Bu bir uyarıdır!");
```

## console.log()
- Geliştiricilere bilgi vermek için kullanılır.
- Tarayıcı konsoluna mesaj yazar.
```js
console.log("Bu bir log mesajıdır.");
```

## Karşılaştırmalı Tablo

| Komut            | Görünüm Yeri         | Kullanım Amacı             |
|------------------|----------------------|----------------------------|
| `document.write` | Sayfa içeriği        | Basit çıktı, test amaçlı   |
| `writeln`        | Sayfa içeriği        | Satır sonu ile yazım       |
| `alert`          | Açılır kutu (popup)  | Kullanıcıya bilgi vermek   |
| `console.log`    | Geliştirici konsolu  | Hata ayıklama ve loglama   |

## Not
- `document.write()` günümüzde nadiren kullanılır.
- Modern uygulamalarda `console.log()` ve DOM yöntemleri tercih edilir.
