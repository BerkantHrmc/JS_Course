# Destructuring Nedir?

Destructuring, diziler veya nesneler gibi veri yapılarını **parçalayarak** değişkenlere atamayı kolaylaştıran bir JavaScript özelliğidir.

## Destructing Dizilerde Kullanımı


```javascript

  const numbers = [1, 2, 3]
  let [numOne, numTwo, numThree] = numbers

  console.log(numOne, numTwo, numThree). //1 2 3

//---------------------

  const names = ['Asabeneh', 'Brook', 'David', 'John']
  let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

  console.log(firstPerson, secondPerson,thirdPerson, fourthPerson) // Asabeneh Brook David John

```

```javascript

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

console.log(frontEnd)
console.log(backEnd)

```

  **Eğer dizideki değerleri atlanması isteniyorsa virgül(,) işareti kullanmak gerekir. Virgül söz konusu indisteki değeri atlamaya yardımcı olur.**


```javascript

  const numbers = [1, 2, 3]
  let [numOne, , numThree] = numbers //2 atlandı

  console.log(numOne, numThree) // 1 3

```

**Bu index için dizinin değeri tanımsız olduğunda varsayılan değeri kullanabiliriz.**


```javascript

const names = [undefined, 'Brook', 'David']
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  //Asabeneh Brook David John

```

**Dizideki tüm elemanlara değişken atanmayabilir. İlkinin birkaçını yok edip ve kalanını spread operatörünü (...) kullanarak dizi olarak alabiliriz.**

```javascript

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

/*

1 2 3
[4, 5, 6, 7, 8, 9, 10]

*/

```

## Iterasyon sırasında Destructuring 

```javascript

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}

/*
Finland Helsinki
Sweden Stockholm
Norway Oslo
*/

```

## Objeye Destructuring işlemi yapma

Destruct işleminde kullandığımız değişkenin adı, nesnenin anahtarı veya özelliği ile tamamen aynı olmalıdır. Aşağıdaki örneğe bakınız.


```javascript

const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)  // 20 10 200 undefined

```

**Eğer yeniden adlandırmak istersekte**

```javascript

const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width: w, height: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p)

```
**Eğer anahtar nesnede bulunmazsa, değişken tanımsız olarak atanır. Anahtar nesnede olmadığında bildirim sırasında varsayılan bir değer verilebilir. Aşağıdaki örneğe bakınız.**

```javascript

const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter = 60 } = rectangle

console.log(width, height, area, perimeter) //20 10 200 60
//Nesneyi değiştirelim:width=30 ve perimeter=80

```

## Iterasyon sırasında objeye destructuring işlemi uygulamak


```javascript
const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2020 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2020 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2020 1:00',
  completed:false
}
]

for (const {task, time, completed} of todoList){
  console.log(task, time, completed)
}

```

# Spread veya Rest Operatörleri

Bir diziye destructuring işlemi uygulandığında, kalan elemanları dizi olarak almak için yayılma operatörünü (...) kullanırız.Buna ek olarak, dizi öğelerini başka bir diziye yaymak için spread operatörünü kullanırız.


## Dizi ogelerinin geri kalanını almak için spread operatörü

```javascript

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
​
console.log(num1, num2, num3) // 1 2 3
console.log(rest) // [4, 5, 6, 7, 8, 9, 10]


```

## Diziyi kopyalamak için spread operatörü

```javascript

const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

/*
[0, 2, 4, 6, 8, 10]
[1, 3, 5, 7, 9]
[0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]
*/
```

## Nesneyi kopyalamak için spread operatörü

```javascript

const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user}
console.log(copiedUser) //{name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}

```
## Ok fonksiyonu ve spread operatörü
Sınırsız sayıda argüman alan bir ok fonksiyonu yazmak istersek, bir yayılma spread kullanırız. Parametre olarak bir spread işleci kullanırsak, bir işlevi çağırdığımızda iletilen bağımsız değişken bir diziye dönüşecektir.

```javascript


const sumAllNums = (...args) => {
  console.log(args)
}

sumAllNums(1, 2, 3, 4, 5)

// [1, 2, 3, 4, 5]



```

```javascript


```

```javascript


```

```javascript


```

```javascript


```

```javascript


```

