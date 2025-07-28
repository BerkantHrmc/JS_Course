# Higher Order Functions (Yüksek Dereceden Fonksiyonlar)

| Konu                 | Açıklama |
|----------------------|----------|
| **Higher Order Function** | Başka bir fonksiyonu **parametre** olarak alabilen veya bir fonksiyonu **geri döndürebilen** fonksiyonlardır. |
| **Callback Function** | Bir fonksiyona **parametre olarak verilen** fonksiyondur. |
| **Örnek: Callback Kullanımı** | `cube(callback, n)` fonksiyonunda `callback`, `n`'in karesini alır, sonuç `n` ile çarpılır. <br> ```javascript<br>const callback = (n) => n ** 2;<br>function cube(callback, n) { return callback(n) * n; }<br>console.log(cube(callback, 3)); // 27<br>``` |
| **Returning Function** | Fonksiyonun başka bir fonksiyonu **geri döndürmesi** durumudur. <br> ```javascript<br>const higherOrder = n => m => t => 2 * n + 3 * m + t;<br>console.log(higherOrder(2)(3)(10)); // 23<br>``` |
| **Callback ile foreach Kullanımı** | `forEach` metodu, her eleman için callback fonksiyon çalıştırır. <br> ```javascript<br>const numbers = [1, 2, 3, 4, 5];<br>function sumArray(arr) {<br> let sum = 0;<br> function callback(el) { sum += el; }<br> arr.forEach(callback);<br> return sum;<br>}<br>console.log(sumArray(numbers)); // 15<br>``` |
| **forEach** | Bir dizideki **her eleman** için belirli bir işlemi (callback) gerçekleştirmeye yarar. |

# Setting Time (Zaman Ayarlama Fonksiyonları)

JavaScript'te zamanı kontrol etmek için iki temel fonksiyon kullanılır:

| Fonksiyon | Açıklama | Kullanımı |
|----------|----------|-----------|
| **setInterval** | Belirli aralıklarla bir fonksiyonu sürekli çalıştırır. | ```javascript<br>function sayHello() {<br>  console.log('Hello');<br>}<br>setInterval(sayHello, 1000); // Her 1 saniyede bir "Hello" yazdırır<br>``` |
| **setTimeout** | Belirli bir süre sonra bir defaya mahsus olarak fonksiyonu çalıştırır. | ```javascript<br>function sayHello() {<br>  console.log('Hello');<br>}<br>setTimeout(sayHello, 2000); // 2 saniye sonra bir kez "Hello" yazdırır<br>``` |

## Ek Bilgi

- **Süre değeri** milisaniye (ms) cinsindendir.  
  - `1000 ms = 1 saniye`
- **setInterval** sürekli tekrar ederken, **setTimeout** sadece **bir kere** çalışır.
- Her iki fonksiyon da **callback** fonksiyon alır.


# Functional Programming - Fonksiyonel Programlama

JavaScript'te fonksiyonel programlama yaklaşımı ile diziler üzerinde işlemler yapabiliriz. Bu işlemler çoğunlukla callback fonksiyonlarla birlikte çalışır.

| Metot         | Açıklama |
|---------------|---------|
| **forEach**   | Dizideki her eleman üzerinde sırayla işlem yapar. Geriye değer döndürmez. |
| **map**       | Her elemanı dönüştürür, yeni bir dizi döndürür. Orijinal diziyi değiştirmez. |
| **filter**    | Belirli koşulları sağlayan elemanlardan yeni bir dizi oluşturur. |
| **reduce**    | Dizi elemanlarını birleştirerek tek bir değere indirger. |
| **every**     | Tüm elemanlar belirli bir koşulu sağlıyorsa `true` döner. |
| **some**      | En az bir eleman belirli bir koşulu sağlıyorsa `true` döner. |
| **find**      | Koşulu sağlayan ilk elemanı döner. |
| **findIndex** | Koşulu sağlayan ilk elemanın indeksini döner. |
| **sort**      | Elemanları alfabetik ya da sayısal olarak sıralar. Orijinal diziyi değiştirir. |

## Ekstra Bilgiler:

- `map`, `filter`, `reduce` gibi metotlar **orijinal diziyi değiştirmez**, yeni diziler döner.
- `forEach` ve `sort` **orijinal diziyi değiştirir**.
- `every`, `some`, `find`, `findIndex` gibi metotlar **boolean** ya da tek bir değer döndürür.



