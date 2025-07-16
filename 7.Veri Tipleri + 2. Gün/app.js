/*
? Veri Tipleri

1- String
2- Number
3- Boolean
4- Null
5- Undefined
6- Object
7- Function
*/

// ------------------------------------- String veri tipi

let isim = "Berkant";
console.log("Merhaba, " + isim + "!");

// ------------------------------------- Number veri tipi

let sayi1 = 10.7;
let sayi2 = 5;
let toplam = sayi1 + sayi2;
console.log("Toplam: " + toplam); 


// ------------------------------------- Boolean veri tipi

let durum = true;
console.log("Durum: " + durum);
console.log(5<3); 

// ------------------------------------- Null veri tipi

let bosDegisken = null;
console.log("Boş Değişken: " + bosDegisken);

// ------------------------------------- Undefined veri tipi

let tanimsizDegisken; //değer bir değişken tanımlanır ama değer atanmadan bırakılırsa undefined olur.   
console.log("Tanımsız Değişken: " + tanimsizDegisken);

// ------------------------------------- Object veri tipi

let kisi = {
    ad: "Berkant",
    yas: 23,
};
console.log("Kişi: " + JSON.stringify(kisi));

let rakamlar = [1,2,3,4,5,6,7,8,9,0]; // Array de bir object türüdür.
console.log("Rakamlar: " + rakamlar);

// ------------------------------------- Function veri tipi

function selamVer() {
    console.log("Merhaba!");
}

let func = function() {
    console.log("Bu bir fonksiyon ifadesidir.");
}

selamVer();
func();