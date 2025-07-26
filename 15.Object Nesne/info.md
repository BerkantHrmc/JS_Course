
#  Nesne Yapıları

Her şey bir nesne olabilir ve nesnelerin özellikleri ve özelliklerinin değerleri vardır, bu nedenle bir nesne bir anahtar değer çiftidir. Bir nesneyi tam anlamıyla oluşturmak için iki köşeli parantez kullanırız.



---

## Klasik Nesne Tanımlama
   
```javascript

const person = {}


```

## Değerle birlikte nesne oluşturmak

```javascript

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true
}
console.log(person)
```
## Nesneden değerleri alabilmek
Nesnenin değerlerine iki yöntem kullanarak erişebiliriz:

1. . operatörünü kullanarak erişebiliriz
2. köşeli parantez kullanarak erişebiliriz

```javascript

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) 

console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location'])
```
---

## Object methodları oluşturma
Şimdi, kişi nesnesinin getFullName özellikleri vardır. getFullName, kişi nesnesinin içindeki işlevdir ve biz ona nesne yöntemi diyoruz. this anahtar sözcüğü, nesnenin kendisine atıfta bulunur. Nesnenin farklı özelliklerinin değerlerine erişmek için this kelimesini kullanabiliriz. Bir arrow funtionu nesne yöntemi olarak kullanamayız çünkü bu sözcüğü nesnenin kendisi yerine bir arrow funtionun içindeki pencereyi ifade eder. Örnek olarak:

```javascript

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',

  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.getFullName())

```

## Object için yeni bir anahtar değer (key) oluşturma
Nesne, eşlenebilen bir veri yapısıdır ve oluşturulduktan sonra nesnenin içeriğini değiştirebiliriz.



```javascript

person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

```

## Object methodları
Bir nesneyi manipüle etmek için farklı yöntemler vardır. Mevcut yöntemlerden bazılarını görelim.


### Object.assign:
Nesneyi orijinal nesneyi değiştirmeden kopyalamak için kullanılır.


```javascript

const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
}

const copyPerson = Object.assign({}, person)
console.log(copyPerson)

```

### Object.keys() methodu

Object.keys: Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır


```javascript

const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']
```


### Object.values() methodu
Object.values: Nesnenin key'lerine karşılık gelen değerleri dizi içerisinde almak için kullanılır.

```javascript

const values = Object.values(copyPerson)
console.log(values)

```




## Object.entries() methodu
Object.entries: Bir dizideki key ve value değerlerini almak için kullanılır

```javascript

const entries = Object.entries(copyPerson)
console.log(entries)


```



### hasOwnProperty() methodu
hasOwnProperty: Bir nesnede belirli bir anahtar veya özelliğin bulunup bulunmadığını kontrol etmek için kullanılır

```javascript

console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))

```

