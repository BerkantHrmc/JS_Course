# Hata Yakalama

JavaScript geniş yazılmış bir dildir. Bazı zamanlar, tanımsız bir değişkene erişmeye veya tanımsız bir işlevi çağırmaya çalıştığınızda bir çalışma zamanı hatası alırsınız.

JavaScript, Python veya Java'ya benzer, try-catch-finally bloğunu kullanarak çalışma zamanı hatalarını yakalamak için bir hata işleme mekanizması sağlar.

```javascript

try {
  // hata verilebilicek kod
} catch (err) {
  // bir hata oluşursa çalıştırılacak kod
} finally {
  // bir hatanın oluşup oluşmadığına bakılmaksızın yürütülecek kod
}

```

* - try: try bloğunda hata oluşturabilecek kodu yazın. try ifadesi, yürütülürken hatalar için test edilecek bir kod bloğu tanımlamamızı sağlar.

* - catch: Bir hata oluştuğunda catch bloğunda bir şeyler yapmak için kod yazın. Catch bloğu, size hata bilgisi verecek parametrelere sahip olabilir. Yakalama bloğu, bir hatayı günlüğe kaydetmek veya kullanıcıya belirli mesajları görüntülemek için kullanılır.

* - finally: finally bloğu, bir hata oluşmasından bağımsız olarak her zaman yürütülür. finally bloğu, kalan görevi tamamlamak veya try bloğunda hata oluşmadan önce değişmiş olabilecek değişkenleri sıfırlamak için kullanılabilir.


```javascript

try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log("Şu hatayı aldık : " + err)
}finally {
  console.log('Her ihtimalde yazılacak')
}

/*
Şu hatayı aldık : ReferenceError: fistName is not defined
    at <anonymous>:4:20v
    Her ihtimalde yazılacak.
*/
```
**Catch bloğu bir parametre alır. Catch bloğuna parametre olarak e, err veya error iletmek yaygındır. Bu parametre bir nesnedir ve isim ve mesaj anahtarlarına sahiptir. Adı ve mesajı kullanalım.**

```javascript

try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log('Name of the error', err.name)
  console.log('Error message', err.message)
} finally {
  console.log('In any case I will be executed')
}

/*
Name of the error ReferenceError
Error message fistName is not defined
In any case I will be executed
*/

```


## throw

**throw:** throw ifadesi özel bir hata oluşturmamıza izin verir. Bir dize, sayı, boolean veya bir nesne aracılığıyla yapabiliriz. Bir istisna atmak için throw ifadesini kullanın. Bir throw exception yazdığınızda, expression specifies değerini belirtir. Aşağıdakilerin her biri throw exception atar:

```javascript

throw 'Error2' // generates an exception with a string value
throw 42 // generates an exception with the value 42
throw true // generates an exception with the value true
throw new Error('Required') // generates an error object with the message of Required

```


```javascript

const throwErrorExampleFun = () => {
  let message
  let x = prompt('Enter a number: ')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err)
  }
}
throwErrorExampleFun()


```

## error types

**ReferenceError:** Geçersiz bir referans oluşturur. Tanımlanmamış bir değişken kullanırsak bir ReferenceError atılır.

```javascript

let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName

console.log(fullName)

/*
Uncaught ReferenceError: lastName is not defined
    at <anonymous>:2:35
*/
```

**SyntaxError:** Bir syntax(sözdizim) hatası oluşturur.

```javascript

let square = 2 x 2
console.log(square)

console.log('Hello, world")

/*
Uncaught SyntaxError: Unexpected identifier
*/
```

**TypeError:** Bir type hatası oluşturur

```javascript

let num = 10
console.log(num.toLowerCase())

/*Uncaught TypeError: num.toLowerCase is not a function
    at <anonymous>:2:17 */



```
