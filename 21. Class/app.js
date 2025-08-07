// 🔵 Üst Sınıf (Super Class)
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(newName) {
    if (newName.length < 2) {
      console.log("İsim çok kısa!");
    } else {
      this._name = newName;
    }
  }

  // Normal metod
  greet() {
    console.log(`Merhaba, ben ${this._name}, ${this._age} yaşındayım.`);
  }

  // Statik metod
  static species() {
    return "Homo sapiens";
  }
}

// 🟢 Alt Sınıf (Subclass - Inheritance)
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Üst sınıfın constructor'ı
    this._jobTitle = jobTitle;
  }

  // Getter
  get jobTitle() {
    return this._jobTitle;
  }

  // Setter
  set jobTitle(newTitle) {
    this._jobTitle = newTitle;
  }

  // Override (üst sınıftaki greet metodunu ezmek)
  greet() {
    console.log(
      `Merhaba, ben ${this.name}, ${this._age} yaşındayım ve ${this.jobTitle} olarak çalışıyorum.`
    );
  }

  // Ekstra statik method
  static company() {
    return "Tech Corp";
  }
}

// 🔘 Kullanım:

// Nesne oluştur
const person1 = new Person("Ahmet", 30);
person1.greet(); // Merhaba,
