
#  JavaScript Fınksiyon Yapıları

Bir fonksiyon, belirli bir görevi gerçekleştirmek üzere tasarlanmış ve yeniden kullanılabilir bir kod bloğu veya programlama tanımıdır.Bir fonksiyon, function anahtar kelimesi ardından gelen o fonksiyona ait fonksiyon ismi ve parantezler ile tanımlanır. Bu paranteler fonksiyona parametre atayabilmemizi sağlar. Şayet fonksiyon parametre alırsa bu parametre fonksiyon scope'u içerisinde geçerli olan bir değişkendir. Farklı bir kullanım olarak da bu parametreye default değerler atayabiliriz. Eğer bir fonksiyon yardımı ile veri taşımak istiyorsak söz konusu fonksiyonun belirli bir veri türünü geriye değişken olarak döndürmesi gerekir. Daha sonra dönen bu değişkeni bir başka değişkene atayarak kullanabilir.

**Fonksiyon kullanmanın avantajları:**

Fonksiyon kullanmanın avantajları:

- *temiz ve okunması kolay
- *yeniden kullanılabilir
- *kolay test edilir

**Bir fonksiyon birkaç şekilde tanımlanabilir:**

- *Klasik Declaration function*
- *Expression function*
- *Anonymous function*
- *Arrow function*




---

## for Loop - for Döngüsü
   
```javascript

// For Döngüsünün yapısı
for(başlangıç_değeri, şart, arttırma/azaltma){ // uygulamak istediğimiz kod
}

```

```javascript

for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`) 
}

```

```javascript

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase()) // ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

}

```
---




## while loop - while Döngüsü
while anahtar kelimesinin yanında belirtilen şarta doğru olduğu sürece çalışan bir döngü türüdür. Eğer koşul sürekli doğru çıkacak şekilde ayarlanırsa while döngüsü uygulama kasten kesilmediği sürece sonsuza kadar devam edebilir. Bu yüzden buraya dikkat etmek gerekebilir.


```javascript

let i = 0
while (i <= 5) {
  console.log(i)
  i++
}                   // 0 1 2 3 4 5

```


```javascript

const  arr = [
'Asabeneh',  //string
250, //number
true, //boolean
{ country:  'Finland', city:  'Helsinki' }, //Sınıf
{ skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] } //Array
]

```

## do while loop do while döngüsü
do while döngüsü Koşul ile belirtilen alanın doğru olup olmadığına bakmadan kod bloğunu bir kez çalıştırır ve daha sonra Koşul ile belirtilen alan doğru (true) olduğu sürece kod bloğunun çalışması için kullanılır.

```javascript

let i = 0
do {
  console.log(i)
  i++
} while (i <= 5) // 0 1 2 3 4 5

```

## for of loop - for of döngüsü

ES6, geleneksel bir döngüden daha basit olan bir döngü olan yeni bir döngü yöntemi sunar ve her tür için ve giriş döngülerinin eksikliklerini telafi eder.

for..of Deyimi, yinelenen nesneler üzerinde yinelemek için bir döngü oluşturur. ES6'da tanıtılan for..of döngü , yeni yinelemeli protokollerin yerini alır. for..in ve forEach() destekler. for..of Array (Diziler), String (Metinler), Map (Haritalar), Set (Kümeler), Array benzeri nesneler (örneğin arguments veya NodeList), ve diğer yinelenen veri yapıları arasında yineleme yapmanızı sağlar.


```javascript

for (const element of arr) {
  // uygulamak istediğimiz kod
}

```


```javascript

const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}                           // 1 2 3 4 5

// array içindeki tüm nsayıları toplama
let sum = 0
for (const num of numbers) {
  sum = sum + num   // daha pratik kullanım için, sum += num bundan sonra pratik olan bu syntax türünün kullanacağız.(+=, -=, *=, /= etc)
}
```

## break
Break, bir döngüyü kesmek için kullanılır.


```javascript

for(let i = 0; i <= 5; i++){
  if(i == 3){
    break;
  }
  console.log(i)
}                   // 0 1 2

```


## continue
Belirli bir döngü aşamasını atlamak için continue anahtar kelimesi kullanılır.

```javascript

for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}                   // 0 1 2 4 5

```
