# Higher Order Function

Yüksek dereceden (high order) fonksiyonlar, parametre olarak başka bir fonksiyonu içerisine alan veya bir başka fonksiyonu değer olarak döndürebilen fonksiyonlardır.

Bir fonksiyon parametre olarak geçilebiliyorsa bu fonksiyona ise callback fonksiyon denir.

## Callback

Callback fonksiyon yukarıda da söylediğimiz gibi bir başka fonksiyona parametre olarak verilen fonksiyonlardır.

```javascript

// callback fonksiyonun adını istediğimiz şekilde verebiliriz.
const callback = (n) => {
  return n ** 2
}
​
// bir başka fonksiyonu callback olarak alan fonksiyon
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3))

```

## Returning function

Yüksek dereceden fonksiyonlar bir fonksiyonu değer olarak geri döndürebilir.​

```javascript

// Bir fonksiyonun başka bir fonksiyonu geri döndürme örneği.
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))

```

Callback fonksiyonunu nasıl kullandığımızı görelim. Örneğin foreach metodu callback kullanan metotlarından biridir.



```javascript

const numbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
  let sum = 0;
  function callback(element) {
    sum += element;
  }
  arr.forEach(callback);
  return sum;
}

console.log(sumArray(numbers)); // 15

```

**foreach** dizideki elemanları tek tek gezmeye yarar.


## Setting Time
JavaScript'te bazı fonksiyonları belirli bir zaman aralığında yürütebiliriz veya bazı fonksiyonları yürütmek için belirli bir süre planlama (bekleme) yapabiliriz.

* - setInterval
* - setTimeout
  
  ### setInterval ile süre ayarlama

JavaScript'te, belirli bir zaman aralığında sürekli olarak istediğimiz şeyi yapmak için SetInterval fonksiyonunu kullanırız. SetInterval, genel olarak bir callback fonksiyonu ve ikinci olarak, belirlemek istediğimiz süreyi parametre alararak kullanılır.

```javascript

var duration = 1000 // 1 saniye eder
function callback() {
  // code buraya gelecek
}
setInterval(callback, duration)

function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000)  // saniyede bir hello yazar.
```

### setTimeout ile zaman ayarlama

JavaScript'te, gelecekte belirli bir zamanda bir eylemi gerçekleştirmek için setTimeout üst düzey işlevini kullanırız. setTimeout genel yöntemi, parametre olarak bir geri çağırma işlevi ve bir süre alır. Süre milisaniye cinsindendir ve geri çağırma bu süre boyunca bekler.

Javascript'te çalıştırılan işlevleri planlıyoruz. Tam da bu iş için setTimeOut metodumuza koşuyor. setTimeOut fonksiyonu da setInterval fonksiyonuna benzer şekilde bir geri çağırma fonksiyonu ve ms cinsinden bir süre değeri parametresi olarak alınır.

```javascript
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) //2 saniye bekledikten sonra "Hello" yazdıracak


```

# Functional Programming - Fonksiyonel Programalama

JavaScript'in en son sürümü, normal döngü yazmak yerine karmaşık sorunları çözmemize yardımcı olabilecek birçok yerleşik yöntem sunmuştur.Göreceğimiz tüm metotlar callback fonksiyonu ile birlikte kullanılabilir. Bu bölümde, forEach, map, filter, reduce, find, every, some, and sort metodlarını göreceğiz

## forEach
forEach: Bir dizi elemanlarını sırasıyla gezer. "element", "index" ve dizinin kendisi ile callback fonksiyonunu parametre olarak alabilir. "index" ve dizinin kendisi isteğe bağlı olarak parametre olarak verilmeyebilir.



```javascript

arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)

numbers.forEach(num => sum += num);
// Bu satır şu anlama gelir: 
// num her seferinde dizideki bir sayı olur ve sum = sum + num yapılır

/*
1
2
3
4
5
*/

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

/*

FINLAND
DENMARK
SWEDEN
NORWAY
ICELAND

*/
```

## map 

Bir dizi elemanını yinelemek ve dizi öğelerini değiştirmek. callback fonksiyonla birlikte "elements", "index" yeni bir diziyi parametre olarak alabilir.

```javascript

const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)

// Her sayının karesini almak için map() kullanıyoruz
// map(): dizideki her eleman için bir işlem yapar ve yeni bir dizi döner
// num: dizideki her bir sayı
// num * num: sayının karesi alınır
// Örneğin: 1*1, 2*2, 3*3, ... gibi

const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)
```

## filter

Filter: Dizi içerisinden istediğimiz koşullara uyan elemanları filtreleyerek geri döndürür


```javascript

//Ülkeler "land" ifadesi içersin
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)


const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80) // her bir öğresine score dedik
console.log(scoresGreaterEighty)

```
## reduce
reduce: Reduce fonksiyonu bir callback fonksiyonu gerektirir. Dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere düşürür. Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır.

```javascript
// Toplanacak sayıların olduğu dizi
const numbers = [1, 2, 3, 4, 5];

// reduce() ile tüm sayılar toplanıyor
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

// acc: toplamı tutan biriktirici (accumulator)
// cur: her adımdaki mevcut sayı (current value)
// 0: başlangıç değeri (acc ilk başta 0'dır)

// Örnek adımlar:
// 1. acc = 0, cur = 1 → acc + cur = 1
// 2. acc = 1, cur = 2 → 3
// 3. acc = 3, cur = 3 → 6
// 4. acc = 6, cur = 4 → 10
// 5. acc = 10, cur = 5 → 15

// Sonuç yazdırılıyor
console.log(sum); // Çıktı: 15


```

## every
every: Tüm elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Booelan türünde geri dönüş yapar


```javascript

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // hepsi string türünde mi?

console.log(areAllStr)

```

## find

find: İstenilen koşulu karşılayan ilk elemanı geri döndürür.

```javascript

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

```

## findIndex

findIndex: koşulu karşılayan ilk elemanın index değerini döndürür.

```javascript
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5



```

## some
some: Bazı elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Boolean türünde geri dönüş yapar.


```javascript

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true

```

## sort
sort: sort fonksiyonu, bir diziyi, öğelerini dizelere dönüştürerek ve bu dizeleri Unicode kod karakterleri sırasına göre karşılaştırarak (diziyi alfabetik olarak sıralar) sıralamanıza olanak tanır. Yeni bir dizi oluşturmadan eldeki olan diziyi düzenler


### String değerleri sıralama

```javascript
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']


```

### Sayısal değerleri sıralama

Sayıları sıralamak malesef o kadar basit değil. Sıralama yöntemini doğrudan bir sayı dizisine uygularsak, beklenmedik bir sonuç göreceğiz:

```javascript
const numbers = [9.81, 3.14, 100, 37]

console.log(numbers.sort()) //[100, 3.14, 37, 9.81]

```

Sayısal değerleri artan veya azalan düzende sıralamak için, sıralama kriterini belirleyen bir fonksiyon kullanmamız gerekir. Sıralama yöntemi neyse ki negatif, sıfır ve pozitif değerleri doğru sırada sıralayabilir. Sort() methodu iki değeri karşılaştırdığında, değerleri karşılaştırma fonksiyonuna gönderir ve döndürülen değere göre sıralar.

* - Sonuç negatifse; a, b'den önce sıralanır
* - Sonuç pozitifse; a, b'den sonra sıralanır
* - Sonuç 0 ise; hiçbir şey değişmez
Tek ihtiyacın olan şey: sort() içine bir karşılaştırma fonksiyonu yazmak.

```javascript
numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]

```
### Array nesnelerini sıralamak
Bir dizideki nesneleri sıraladığımız zaman karşılaştırmak için key objesini kullanırız. Aşağıdaki örneğe bakalım.

```javascript
objArr.sort(function (a, b) {
  if (a.key < b.key) return -1;  // a, b'den önce gelsin
  if (a.key > b.key) return 1;   // a, b'den sonra gelsin
  return 0;                      // a ve b eşitse yer değiştirme
});


```

