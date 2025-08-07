
**this:** this, bulunduğu bağlamdaki (context) nesneyi temsil eder. Bir sınıf (class) içindeki this, o sınıftan oluşturulan nesneyi (instance) işaret eder.


# JavaScript Sınıflar (Classes)

## 🧱 Sınıflar Nedir?
- Nesne tabanlı programlamada, sınıflar benzer nesneler için bir şablondur.
- `class` anahtar kelimesiyle tanımlanır.

## 🏗 Sınıf Tanımı
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

## 🧪 Constructor (Yapıcı Metot)
- Nesne oluşturulurken otomatik çağrılır.
- Özellikleri başlatmak için kullanılır.

## 📦 Örnek Üzerinden Nesne Oluşturma
```js
const person1 = new Person("Ali", 25);
```

## ⚙ Metotlar
- Sınıf içinde fonksiyonlar tanımlanabilir.
```js
class Person {
  sayHello() {
    console.log("Merhaba!");
  }
}
```

## ♻ Getter ve Setter
- Değerlere kontrollü erişim sağlar.
```js
class Person {
  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }
}
```

## 📌 Statik Metotlar
- Sınıfa özgüdür, nesne üzerinden çağrılamaz.
```js
class MathHelper {
  static add(x, y) {
    return x + y;
  }
}
```

## 🧬 Kalıtım (Inheritance)
- Bir sınıf başka bir sınıftan miras alabilir.
```js
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
}
```

## 🔁 Override (Ezme)
- Alt sınıfta, üst sınıftaki metotlar yeniden tanımlanabilir.

## 🧩 Tümünü Kapsayan Örnek
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} ses çıkarıyor.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} havlıyor.`);
  }
}

const dog = new Dog("Karabas");
dog.speak(); // Karabas havlıyor.
```

## 📚 Özet
- `class`, `constructor`, `extends`, `super`, `get`, `set`, `static` gibi kavramlar önemli.
- OOP yapısını anlamak için sınıflar hayati önem taşır.
