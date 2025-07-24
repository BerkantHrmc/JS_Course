//---------------Klasik Fonksiyon Oluşturma 

function toplama () {

        
}
//---------------İsimsiz Fonksiyon Oluşturma ve Bir Değişkene Atama

const sonuc = function() {


}

//---------------Arrow Fonksiyon Oluşturma 

const square = n => {
  return n * n
}


//---------------Parametrelerine Göre Fonksiyonlar---------------------------------------

//---------------Parametre Döndüren Fonksiyon

function isim(){
    let ad = "Berkant";
    return ad;
}

//---------------Parametreli Foksiyon

function brutMaas(maasHam){
    let netMaas = maasHam*1.2;
    return netMaas;
}
//Çoklu parametre

function bolme (a,b){
    let c = a/b;
    return c;
}


//---------------Arrow ile çoklu parametre


const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(printFullName('Asabeneh', 'Yetayeh'))

//---------------Sınırsız sayıda parametreyle çalışan fonksiyon


function ortalama (){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
         }
      
    let ort = sum/(arguments.length);
    return ort;
}


console.log(ortalama(13,14,17,18,12,16,12,17));

//---------------Arrow ile sınırsız sayıda parametreyle çalışan fonksiyon

const sumAllNums = (...args) => {
 // console.log(arguments), arguments nesnesi bulunamadı
 // bunun yerine spread operator (...) ve parametre adı kullanalım
 console.log(args)
}

sumAllNums(1, 2, 3, 4)

//---------------Kendi kendini çağıran fonksiyon

( function () {
  // Bu blok hemen çalışır
  console.log("Ben kendi kendimi çağıran bir fonksiyonum!");
}) ();

(function(name) {
  console.log("Merhaba, " + name + "!");
})("Berkant");




//---------------Default Fonksiyonlar---------------------------------------

function greetings(name = 'Peter') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))

