
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



## Çeşitli Konular

### Array uzunluğu

```javascript

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

```

### Dizinin farklı veri tiplerinde elemanları olabilir

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

### Index kullanarak dizi elemanlarına ulaşmak

Dizide elemanların indexlerini kullanarak o elemana ulaşabiliriz. Dizinin index'i 0'dan başlar.

```javascript

const  fruits = ['banana', 'orange', 'mango', 'lemon']
let  firstFruit = fruits[0] //banana

let  lastIndex = fruits.length - 1
let lastFruit = fruits[lastIndex] //lemon

```

### Dizi elemanlarını düzenlemek

```javascript

const  numbers = [1, 2, 3, 4, 5]
numbers[0] = 10  // index 0'daki 1 elemanını 10 elemanı olarak değiştirdik

```

---



## Dizileri Manüple Edecek Metotlar

Diziyi manüple edebilmek için farklı metotlar vardır. Bunlar dizilerle uğraşmak için kullanışlı yöntemlerden bazılarıdır. Bu yöntemler: Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift



### Dizi constructor

**Array**: Bir dizi yaratmak için kullanılır.

```javascript

const  arr = Array() // boş bir dizi yaratır
const  eightEmptyValues = Array(8) // sekiz tane boş değer yaratır

```

### fill ile statik değerler yaratmak

**fill**: Bütün dizi elemanlarını statik değerle doldurur.

```javascript

const  arr = Array() // Boş bir dizi yaratır
const  eightXvalues = Array(8).fill('X') // 'X'değerine sahip 8 tane eleman oluşuturur.
const  eight0values = Array(8).fill(0) // '0' değerine sahip 8 tane eleman oluşturur.

```

### Concat kullanarak dizileri birleştirmek

**concat**: dizileri birbiri ile birleştirir.

```javascript

const  firstList = [1, 2, 3]
const  secondList = [4, 5, 6]
const  thirdList = firstList.concat(secondList)

// [1, 2, 3, 4, 5, 6]

```

### Dizi uzunluğuna ulaşmak

**Length**:Dizi uzunluğunu bildirir.

```javascript

const  numbers = [1, 2, 3, 4, 5]
console.log(numbers.length) // -> Dizinin uzunluğu 5'tir

```

### Arr dizisinin içindeki indexe ulaşmak

**indexOf**: O elemanın dizide olup olmadığını kontrol eder.Eğer o eleman dizide mevcutsa index numarasını, 
mevcut değilse -1 döner.

```javascript

const  numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1
console.log(numbers.indexOf(1)) // -> 0

```

### Dizinin içindeki son indexe ulaşmak

**lastIndexOf**: Dizideki son elemanın pozisyonunu verir. Eğer mevcutsa o elemanın index numarasını döner, mevcut değilse -1 döner.Sondan taramaya başlar.

```javascript

const  numbers = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbers.lastIndexOf(2)) // 7


```

### Bir dizide bir öğenin olup olmadığını kontrol etmek

**includes**:Bir dizide bir öğenin olup olmadığını kontrol etmek için kullanılır.Mevcut ise, true değerini döndürür, aksi takdirde false değerini döndürür.

```javascript

const  numbers = [1, 2, 3, 4, 5]
console.log(numbers.includes(5)) // true

```

### Diziyi kontrol etmek

**Array.isArray**: Veri tipinin bir dizi olup olmadığını kontrol etmek için kullanılır.

```javascript

const  numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

```

### Diziyi stringe çevirmek

**toString**:Diziyi string bir ifadeye çevirir.


```javascript

const  numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const  names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

```

### Dizi elemanlarını Joinlemek

**join**: Dizinin elemanlarını birleştirmek için kullanılır, join yönteminde ilettiğimiz argüman dizide birleştirilir ve bir dizi olarak döndürülür. Varsayılan olarak bir virgül ile birleşir, ancak elemanlar arasında birleştirilebilecek farklı dizi parametreleri iletebiliriz.

```javascript

const  numbers = [1, 2, 3, 4, 5]
console.log(numbers.join()) // 1,2,3,4,5

const  names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

```

### Dizi elemanlarını slice etmek

**Slice**: Bir aralıktaki çoklu elemanları dilimler İki parametre alır. Bu parametreler, başlangıç ve bitiş konumlarıdır. Bitiş konumunu dahil etmez.

.slice(başlangıç, bitiş)

```javascript

const  numbers = [1,2,3,4,5]

console.log(numbers.slice()) // -> Bütün öğeyi kopyalar
console.log(numbers.slice(0)) // -> Bütün öğeyi kopyalar
console.log(numbers.slice(0, numbers.length)) // Bütün öğeyi kopyalar
console.log(numbers.slice(1,4)) // -> [2,3,4] // son elemanı dahil etmez


```

### Dizilerde splice metodu

**Splice**: üç parametre alır.
.splice(kaldırılacakların başlagıç konumu , bitiş konumu , eklenecek sayılar)

```javascript
const  numbers = [1, 2, 3, 4, 5]
numbers.splice() // -> Bütün elemanları kaldırır

const  numbers = [1, 2, 3, 4, 5]
numbers.splice(0,1)
console.log(numbers) // ilk elemanı kaldırır

const  numbers = [1, 2, 3, 4, 5, 6]
numbers.splice(3, 3, 7, 8, 9)
console.log(numbers.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //2 eleman kaldırdı ve yerine 3 eleman ekledi

```

### Push kullanarak diziye eleman eklemek

**Push**: Dizinin sonuna eleman ekler.Varolan bir diziye eleman eklemek için push metodunu kullanırız.


```javascript

const  arr = ['item1', 'item2','item3']
arr.push('new item') // ['item1', 'item2','item3','new item']


```

### pop kıllanarak diziden eleman çıkarmak

**pop**: Dizinin sonundaki elemanı siler.

```javascript

const  numbers = [1, 2, 3, 4, 5]
numbers.pop() // -> Sondaki elemanı siler
console.log(numbers) // -> [1,2,3,4]

```

### Dizinin en başından eleman kaldırmak

**shift**: Dizinin en başındaki elemanı siler.

```javascript

const  numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> baştan bir elemanı kaldırır.
console.log(numbers) // -> [2,3,4,5]

```

### Dizinin en başına eleman eklemek

**unshift**: Dizinin başına dizi elemanı ekler.

```javascript

const  numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) // -> en başa eleman ekler
console.log(numbers) // -> [0,1,2,3,4,5]

```

### Dizi sırasını terse çevirmek

**reverse**: Dizi sıralamasını terse çevirir.

```javascript

const  numbers = [1, 2, 3, 4, 5]
numbers.reverse() // -> ters dizi sırası
console.log(numbers) // [5, 4, 3, 2, 1]

```

### Dizi elemanlarını sıralamak
**sort**: Dizi elemanlarını alfabetik sırada düzenleyin.Sort call back fonksyonu alır, sort'un call back fonksiyonu ile nasıl kullandığımızı ilerleyen bölümlerde göreceğiz.


```javascript

const  webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
webTechs.sort() // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse() // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]


```

### Dizi içinde diziler

Diziler farklı veri tiplerinde elemanları ve yeni bir dizi de depolayabilirler.


```javascript

const  firstNums = [1, 2, 3]
const  secondNums = [1, 4, 9]
const  arrayOfArray = [[1, 2, 3], [1, 2, 3]]

console.log(arrayOfArray[0]) // [1, 2, 3]


const  frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const  backEnd = ['Node','Express', 'MongoDB']
const  fullStack = [frontEnd, backEnd] // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]


```


---



📌 **Tablo:** 

# JavaScript Array Yapıları – Özet Tablosu

| **Başlık**                              | **Özet Açıklama**                                                                 |
|----------------------------------------|----------------------------------------------------------------------------------|
| **Boş Dizi Oluşturma**                 | `[]` veya `Array()` ile boş dizi tanımlanabilir, `const` kullanımı yaygındır.   |
| **Diziye Örnek**                       | Sayılar veya stringlerden oluşan dizi örnekleri kullanılabilir.                 |
| **Dizi Uzunluğu**                      | `.length` ile dizinin kaç eleman içerdiği öğrenilir.                            |
| **Farklı Veri Tipleri**                | Dizi farklı türde veriler içerebilir (string, number, obje, dizi).              |
| **Split ile Dizi**                     | String ifadeler `.split()` metodu ile diziye dönüştürülebilir.                  |
| **Index ile Erişim**                   | Dizi elemanlarına `index` numarasıyla erişilir (`0`'dan başlar).                |
| **Eleman Güncelleme**                  | Belirli bir index'e yeni değer atanarak eleman güncellenebilir.                 |
| **Array Constructor**                  | `Array()` ile yeni bir dizi oluşturulur.                                        |
| **fill Metodu**                        | Tüm dizi elemanlarını aynı değerle doldurur.                                    |
| **concat Metodu**                      | İki veya daha fazla diziyi birleştirir.                                         |
| **indexOf**                            | Elemanın ilk bulunduğu index'i döner, yoksa -1.                                 |
| **lastIndexOf**                        | Elemanın son bulunduğu index'i döner, yoksa -1.                                 |
| **includes**                           | Dizi içinde belirli bir eleman var mı diye `true/false` döner.                 |
| **isArray**                            | Verinin dizi olup olmadığını kontrol eder.                                      |
| **toString**                           | Dizi elemanlarını virgül ile ayırarak string'e çevirir.                         |
| **join**                               | Dizi elemanlarını belirtilen ayraç ile birleştirip string döner.                |
| **slice**                              | Belirtilen aralıktaki dizi elemanlarını döner (orijinal diziyi değiştirmez).   |
| **splice**                             | Belirtilen aralıktaki elemanları kaldırır ve yerine yenilerini ekleyebilir.     |
| **push**                               | Dizi sonuna eleman ekler.                                                       |
| **pop**                                | Dizi sonundaki elemanı siler.                                                   |
| **shift**                              | Dizi başındaki elemanı siler.                                                   |
| **unshift**                            | Dizi başına yeni bir eleman ekler.                                              |
| **reverse**                            | Dizi elemanlarının sırasını tersine çevirir.                                     |
| **sort**                               | Dizi elemanlarını alfabetik olarak sıralar.                                     |
| **İç İçe Diziler**                     | Dizi içinde başka diziler olabilir, matris gibi kullanılabilir.                 |
