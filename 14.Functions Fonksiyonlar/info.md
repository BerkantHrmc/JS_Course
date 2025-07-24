
#  JavaScript Fınksiyon Yapıları

Bir fonksiyon, belirli bir görevi gerçekleştirmek üzere tasarlanmış ve yeniden kullanılabilir bir kod bloğu veya programlama tanımıdır.Bir fonksiyon, function anahtar kelimesi ardından gelen o fonksiyona ait fonksiyon ismi ve parantezler ile tanımlanır. Bu paranteler fonksiyona parametre atayabilmemizi sağlar. Şayet fonksiyon parametre alırsa bu parametre fonksiyon scope'u içerisinde geçerli olan bir değişkendir. Farklı bir kullanım olarak da bu parametreye default değerler atayabiliriz. Eğer bir fonksiyon yardımı ile veri taşımak istiyorsak söz konusu fonksiyonun belirli bir veri türünü geriye değişken olarak döndürmesi gerekir. Daha sonra dönen bu değişkeni bir başka değişkene atayarak kullanabilir.

**Fonksiyon kullanmanın avantajları:**

Fonksiyon kullanmanın avantajları:

- *temiz ve okunması kolay*
- *yeniden kullanılabilir*
- *kolay test edilir*

**Bir fonksiyon birkaç şekilde tanımlanabilir:**

- *Klasik Declaration function*
- *Expression function*
- *Anonymous function*
- *Arrow function*


---

## Klasik Fonksiyon Tanımlama
   
```javascript

//parametresiz fonksiyon tanımı:

function functionName() {

  // istenilen kod parçası

}

functionName() // fonksiyon, fonksiyon adı ve parantezler ile çağırılır

```

## Anonymous Function - İsimsiz Fonksiyon

```javascript

const anonymousFun = function() {
  console.log(
    'İsimsiz bir fonksiyonum ve değerim anonim olarak saklanıyor'
  )
}

```
## Expression Function

Expression function, isimsiz fonksiyonlardır. İsimsiz bir fonksiyon oluşturduktan sonra bir değişkene atayarak kullanırız. Fonksiyondan bir değer geri döndürmek için değişkeni çağırmalıyız. Örnek vemrek gerekirse.

```javascript

// Function expression
const square = function() {
  console.log("Bu bir expression function türünde fonksiyondur")
}

```
---

### Parametresiz ve dönüş değeri olamayan fonksiyon

Fonksiyon, parametre olmadan tanımlanabilir. (Şu ana kadar tanımladıklarımız zaten parametresizdi)

```javascript

function square() {
  let num = 2
  let square = num * num
  console.log(square)
}

square() // 4

// parametresiz fonksiyon örnek 2:
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers() // fonksiyon, kendisine verilen isim ile çağırılmalı

```
### Bir değer döndüren fonksiyon
Fonksiyonlar geriye bir değer döndürebilir. bu işlemi return anahtar kelimesini kullanarak sağlarız. Normal fonksiyondan farklı olarak bir field'a atanabilir veya bir metot içerisinde parametre olarak kullanılabilir.

```javascript

function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
}
console.log(printFullName())
```

### Parametreli fonksiyon

Bir fonksiyonda farklı veri türlerini (number, string, boolean, object, function) parametre olarak geçebiliriz.

```javascript

// bir parametreli fonksiyon
function functionName(parm1) {  
    
    // istenilen kod parçası

}

functionName(parm1) // fonksiyonu çağırma sırasında parantezler arasına bir parametreye ihtiyaç duyar

```

```javascript

function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(10)) // bağımsız bir değişkenle çağırılmalı

```

### İki parametreli fonksiyon

ES6, geleneksel bir döngüden daha basit olan bir döngü olan yeni bir döngü yöntemi sunar ve her tür için ve giriş döngülerinin eksikliklerini telafi eder.

for..of Deyimi, yinelenen nesneler üzerinde yinelemek için bir döngü oluşturur. ES6'da tanıtılan for..of döngü , yeni yinelemeli protokollerin yerini alır. for..in ve forEach() destekler. for..of Array (Diziler), String (Metinler), Map (Haritalar), Set (Kümeler), Array benzeri nesneler (örneğin arguments veya NodeList), ve diğer yinelenen veri yapıları arasında yineleme yapmanızı sağlar.


```javascript

for (const element of arr) {
  // uygulamak istediğimiz kod
}

```


```javascript

// Parametresiz fonksiyon giriş yapmaz, bu nedenle parametrelerle bir fonksiyon yapalım
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}

sumTwoNumbers(10, 20) // fonksiyon çağırımı
// Bir fonksiyon değer döndürmezse veri depolayamaz, bu nedenle değer döndürmelidir. 
```

Eğer bir fonksiyon herhangi bir değer döndürmüyorsa (örneğin void tipindeyse ya da return ifadesi yoksa), bu fonksiyonun dış dünyaya veri iletmesi mümkün değildir. Yani o fonksiyonun içinde bir hesaplama yapılırsa, bu hesaplamanın sonucu başka yerlerde kullanılamaz.

Eğer bir fonksiyonun amacı bir veri üretmek, hesaplamak veya bir sonucu dış dünyaya iletmekse, mutlaka return ile değer döndürmelidir. Aksi takdirde yaptığı işlemin dışarıya bir katkısı olmaz.

### Çok parametreli fonksiyon


```javascript

// çok parametreli fonksiyon
function functionName(parm1, parm2, parm3,...){
  //istenilen kod parçası
}
functionName(parm1,parm2,parm3,...) // fonksiyon çağırımı sırasında birden çok parametreye ihtiyaç duyar                  

```


### Sınırsız sayıda parametreyle çalışan fonksiyon
Fonksiyonlarla çalışırken kaç tane parametre gerekebileceğini bilemeyebiliriz. Javascript'te bu durumda bize sınırsız sayıda parametre alan fonksiyon yazabilme imkanı tanır. Bu şekilde bir fonksiyon tanımlamanın iki yolu vardır:

1. Klasik fonksiyonda sınırsız sayıda parametre : 
   Bu fonksiyonun tanımlanmasını fonksiyon scope'nda object temelli arguments anahtar kelimesi ile erişilir. Parametre olarak atanan her öğeye arguments üzerinden ulaşabiliriz. Bir örneğine bakmak gerekirse;

```javascript

// arguments nesnesine erişelim
​
function sumAllNums() {
 console.log(arguments).  //arguman girilirse yaz
}

sumAllNums(1, 2, 3, 4)

// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

```

2.Kendi kendine çağırılan fonksiyon
JavaScript sözdiziminde birçok ilginç şey vardır, bunlardan biri kendi kendine çalışan (kendi kendini çağıran) fonksiyonların tanımıdır. Böyle bir fonksiyonu şu şekilde tanımlayabiliriz:

```javascript

( function () {
  // Bu blok hemen çalışır
  console.log("Ben kendi kendimi çağıran bir fonksiyonum!");
}) ();

(function(name) {
  console.log("Merhaba, " + name + "!");
})("Berkant");

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum);
```


## Arrow Function

Klasik fonksiyona alternatif olarak kullanılan arrow function sözdiziminde ufak bir farklılık vardır. function anahtar kelimesi yerine => işareti kullanılır.

Sırasıyla aynı fonksiyonun klasik ve arrow function halini yazalım

```javascript

function square(n) {
  return n * n
}

console.log(square(2)) // 4


const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// kod bloğumuzda sadece bir satır kod varsa bu fonksiyon şu şekilde yazılabilir.
const square = n => n * n  // -> 4


```

```javascript

const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(printFullName('Asabeneh', 'Yetayeh'))


```


### Arrow function'da sınırsız sayıda parametre

Arrow function, klasik fonksiyon gibi arguments nesnesine sahip değildir. Arrow function'da sınırsız sayıda parametre kullanmak istersek spread operatör (...) ve hemen ardından parametre adı kullanılır. Fonksiyonda bağımsız değişken olarak geçtiğimiz her şeye arrow functionda dizi olarak erişilebilir. Bir örnek görelim

```javascript

// arguments nesnesine erişmemize bir örnek
​
const sumAllNums = (...args) => {
 // console.log(arguments), arguments nesnesi bulunamadı
 // bunun yerine spread operator (...) ve parametre adı kullanalım
 console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]


// function declaration
​
const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

```

### Default parametre ile fonksiyon kullanımı

Bazen parametrelere default değerler geçmek isteyebiliriz. Bu durumda fonksiyon çağırımı sırasında söz konusu parametreyi vermek zorunda olmadan kullanabiliriz. Eğer bu parametreyi vermezsek fonksiyon işlevinin parametrenin default değerini kullanarak tamamlayacaktır.

```javascript

// syntax - söz dizimi
// fonksiyon tanımı
function functionName(param = value) {
  //codes
}

// fonksiyon çağırımı
functionName()
functionName(arg)

//-------------------------

function greetings(name = 'Peter') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))

//-------------------------

function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear
  return age
}

console.log('Age: ', calculateAge(1819))

//-------------------------

const greetings = (name = 'Peter') => {
  let message = name + ', welcome to 30 Days Of JavaScript!'
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
```