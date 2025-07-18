
#  JavaScript Array Yapıları


Değişkenlerin aksine, diziler Çoklu değerleri depolayabilirler. Dizi'deki her bir değer index'e sahiptir, 
ve her index bellek adresindeki bir referans'ı işaret eder. Bu index'ler kullanılarak her bir değere ulaşım 
sağlanabilir. Bir dizinin index'i sıfır'dan başlar ve dizinin son elemanının index'i, dizinin uzunluğundan 
bir eksiktir.

Bir dizi, tekrar edilen elemanların ve farklı veri türlerinin depolanmasına izin verir. Bir dizi boş olabilir veya farklı veri türü değerlerine sahip olabilir.

---

## Boş bir dizi nasıl oluşturulur

Bir dizi değişkeni tanımlamak için let yerine const kullanmak çok yaygındır. Const kullanıyorsanız, bu değişken adını bir daha kullanmayacağınız anlamına gelir.

JavaScript'te birçok farklı yol ile dizi oluşturabiliriz:

Belirli bir koşul doğruysa bir kod bloğunu çalıştırır.

1. Array constructor'ı ( yapıcı metot ) kullanmak :
   
```javascript

const  arr = Array()

//ya da

let arr = new Array()

```

2. Köşeli Parantez Kullanmak

```javascript

// Bu boş bir dizi oluşturmak için en çok tavsiye edilen yöntemdir.

const  arr = []

```

Değerlere sahip örnek diziler : 

```javascript

const  numbers = [0, 3.14, 9.81, 37, 98.6, 100] // sayı dizisi
const  fruits = ['banana', 'orange', 'mango', 'lemon'] // string dizisi, meyveler

```
---

## Çeşitli Fonksiyonlar 

### Array Uzunluğu

```javascript

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

```

### Dizinin farklı veri tiplerinde elemanları olabilir.

```javascript

const  arr = [
'Asabeneh',  //string
250, //number
true, //boolean
{ country:  'Finland', city:  'Helsinki' }, //Sınıf
{ skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] } //Array
]

```

### Split kullanarak dizi oluşturmak 

```javascript

let  js = 'JavaScript'
const  charsInJavaScript = js.split('') //harflerine ayır

// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let  companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const  companies = companiesString.split(',') //virgülden ayır

// ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

```
---

## ✅ `if - else if - else` Yapısı

Birden fazla koşul kontrol edilir.
Sadece biri çalışır.

```javascript
let notDegeri = 85;

if (notDegeri >= 90) {
  console.log("Pekiyi");
} else if (notDegeri >= 70) {
  console.log("İyi");
} else if (notDegeri >= 50) {
  console.log("Orta");
} else {
  console.log("Kaldı");
}
```

---

## 🔄 `switch` Yapısı

Birden fazla durumu kontrol etmek için kullanılır. `case` ifadeleri ile çalışır.

```javascript
let gun = "Pazartesi";

switch (gun) {
  case "Pazartesi":
    console.log("Haftanın ilk günü.");
    break;
  case "Cuma":
    console.log("Haftanın son iş günü.");
    break;
  default:
    console.log("Hafta sonu veya geçersiz gün.");
}
```

---

## 💡 Ternary (Üçlü) Operatör

Kısa if-else ifadesidir.

```javascript
let yas = 20;
let mesaj = (yas >= 18) ? "Reşit" : "Reşit değil";
console.log(mesaj);
```

---

📌 **Not:** Koşul yapıları, uygulamanın akışını yönlendirmek için temel yapı taşlarındandır.
