# SET

JavaScript’te Set nesnesi, benzersiz (duplicate olmayan) değerleri saklamak için kullanılır. Set, tıpkı bir dizi gibi bir koleksiyon yapısıdır ama her elemandan yalnızca bir tane içerir.

## Boş Bir Set Oluşturma 


```javascript

const companies = new Set()
console.log(companies) // Set(0) {}

```

## Diziden Set Oluşturma


```javascript

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)  //Set(4) {English, Finnish, French, Spanish} (aynı olan ögeleri tekrar yazmadı)

```

Set iterable bir nesnedir ve her öğeye iterable işlemi uygulanabilir
* - Elemanları sırayla dolaşılabilir (örneğin for...of döngüsüyle).
* - Symbol.iterator özelliğini barındırır.

Bir Set nesnesi de iterable olduğu için içindeki her elemana tek tek erişebilirsin.





```javascript
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)

for (const language of setOfLanguages) {
  console.log(language)
}

/*
  English
  Finnish
  French
  Spanish
*/


```

## Bir set'e eleman ekleme


```javascript

const companies = new Set()  // boş bir set oluşturuyoruz
console.log(companies.size)  // 0

companies.add('Google')  // set'e eleman ekliyoruz
companies.add('Facebook')
companies.add('Amazon')

```

Bir set'e eleman eklemek için döngülerde kullanabiliriz.


```javascript

const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}

```

## Bir elemanı set'den silme

```javascript
console.log(companies.delete('Google'))
console.log(companies.size)  //Set'de 4 eleman kaldı

```

## Set'deki bir elemanı kontrol etme

```javascript

console.log(companies.has('Apple'))  //false
console.log(companies.has('Facebook'))  //true

```

## Seti Temizleme

```javascript

companies.clear()
console.log(companies)

```
## Set'lerin birleşimi

```javascript
 
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b] // ...a ve ...b ifadesi, dizinin tüm elemanlarını tek tek açar.



let A = new Set(a)
let B = new Set(b)
let C = new Set(c) // Burada c dizisinden bir Set oluşturuluyor. Set, tekrar edenleri otomatik siler.

 
console.log(C)

```

## Setlerin Kesişimi

```javascript

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num)) //B nin sahip olduğu numlar a da da varsa tut.
let C = new Set(c)

console.log(C)

```

## Setlerin Farkı

```javascript
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

console.log(C) // Set(2) {1, 2}


```

 # MAP

JavaScript'te Map, anahtar-değer (key-value) çiftlerini saklayan bir koleksiyon (collection) türüdür. Object'e benzer ama daha esnek ve güçlüdür.

## Map Oluşturma

```javascript

const map = new Map()
console.log(map) //Map(0) {}

```
## Bir diziden map oluşturma

```javascript

countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]

const map = new Map(countries)
console.log(map) //Map(3) {Finland = Helsinki, Sweden = Stockholm, Norway = Oslo}
console.log(map.size) // 3 

```
## Map'e değerler ekleme

```javascript

const countriesMap = new Map()
console.log(countriesMap.size)  0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap) // Map(3) {Finland = Helsinki, Sweden = Stockholm, Norway = Oslo}

```

## Map'ten Değer Alma

```javascript

console.log(countriesMap.get('Finland')) //Helsinki


```
## Map içindeki anahtarı kontrol etme

Eğer Map içinde bir anahtarın olup olmadığını kontrol etmek istiyorsak has methodunu kullanabiliriz bu method bize true veya false döndürür.


```javascript

console.log(countriesMap.has('Finland')) //true

```

Map içindeki bütün değerleri döngü kullanarak almak

```javascript
for (const country of countriesMap) {
  console.log(country)
}

```
```javascript


```
```javascript


```
```javascript


```
```javascript


```