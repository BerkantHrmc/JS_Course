const ilkArray = Array();
const ikinciArray = new Array();
const ucuncuArray = new Array(5); // 5 elemanlı boş bir dizi oluşturur
console.log("ucuncuArray: ", ucuncuArray); // [undefined, undefined, undefined, undefined, undefined]
const dorduncuArray = new Array(1, 2, 3, 4, 5); // 1, 2, 3, 4, 5 elemanlarını içeren bir dizi oluşturur
console.log("dorduncuArray: ", dorduncuArray); // [1, 2, 3, 4, 5]
const besinciArray = []; // Dizi tanımlamanın en yaygın yolu

//------------------------- Dizi Tanımlama  -------------------------

const dorduncuArrayUzunlugu = dorduncuArray.length;
console.log("dorduncuArray Uzunluğu: ", dorduncuArrayUzunlugu); // 5
//-- Dizi Uzunluğu
let splitIleAyırma = "JavaScript";
const splitArray = splitIleAyırma.split(""); // Her karakteri ayrı bir eleman olarak alır
console.log("splitArray: ", splitArray); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
//--Stringi Diziye Çevirme
let IndexIleErişim = splitArray[2]; // 3. elemanı alır (0'dan başlar)
console.log("Index ile erişim: ", IndexIleErişim); // 3
//-- Dizi Elemanına Erişim
const fillIleXDoldurma = new Array(5).fill("X"); // 5 elemanlı, tüm elemanları x olan bir dizi oluşturur
console.log("fillIleXDoldurma: ", fillIleXDoldurma); // ['X', 'X', 'X', 'X', 'X']
const fillIleSıfırDoldurma = new Array(5).fill(0); // 5 elemanlı, tüm elemanları 0 olan bir dizi oluşturur
console.log("fillIleSıfırDoldurma: ", fillIleSıfırDoldurma); // [0, 0, 0, 0, 0]
//-- Dizi Elemanlarını Doldurma
const firstArray = ["Elma", "Armut", "Muz"];
const secondArray = ["Çilek", "Kavun", "Karpuz"];
console.log("firstArray: ", firstArray); // ['Elma', 'Armut', 'Muz']
console.log("secondArray: ", secondArray); // ['Çilek', 'Kavun', 'Karpuz']
const concatArray = firstArray.concat(secondArray); // İki diziyi birleştirir
console.log("concatArray: ", concatArray); // ['Elma', 'Armut', 'Muz', 'Çilek', 'Kavun', 'Karpuz']
//-- Dizi Birleştirme
concatArray.indexOf("Çilek") //Çilek'in dizideki indeksini bulur
console.log("Çilek'in indeksi: ", concatArray.indexOf("Çilek")); // 3
//---Dizi Elemanının İndeksini Bulma
concatArray.includes("Muz") // Muz dizide var mı?
console.log("Muz dizide var mı?: ", concatArray.includes("Muz")); // true
//---Dizi Elemanının Varlığını Kontrol Etme
const reverseArray = concatArray.reverse(); // Diziyi ters çevirir
console.log("reverseArray: ", reverseArray); // ['Karpuz', 'Kavun', 'Çilek', 'Muz', 'Armut', 'Elma']
//  -- Dizi Ters Çevirme
const sortArray = concatArray.sort(); // Diziyi alfabetik sıraya göre sıralar
console.log("sortArray: ", sortArray); // ['Armut', 'Çilek', 'Elma', 'Kavun', 'Karpuz', 'Muz']
// -- Dizi Sıralama
const sliceArray = concatArray.slice(1, 4); // 1. indeksten 4. indekse kadar olan elemanları alır
console.log("sliceArray: ", sliceArray); // ['Çilek', 'Elma', 'Kavun']
// -- Dizi Parçalama
const spliceArray = concatArray.splice(1, 2); // 1. indeksten başlayarak 2 elemanı siler
console.log("spliceArray: ", spliceArray); // ['Çilek', 'Elma']
console.log("concatArray after splice: ", concatArray); // ['Armut', 'Kavun', 'Karpuz', 'Muz']
// -- Dizi Elemanlarını Silme
const pushArray = concatArray.push("Çilek"); // Diziye "Çilek" ekler
console.log("concatArray after push: ", concatArray); // ['Armut', 'Kavun', 'Karpuz', 'Muz', 'Çilek']
// -- Diziye Eleman Ekleme
const popArray = concatArray.pop(); // Dizi son elemanını siler ve döner
console.log("concatArray after pop: ", concatArray); // ['Armut', 'Kavun', 'Karpuz', 'Muz']
console.log("Pop edilen eleman: ", popArray); // 'Çilek'
// -- Dizi Son Elemanını Silme
const shiftArray = concatArray.shift(); // Dizi ilk elemanını siler ve döner
console.log("concatArray after shift: ", concatArray); // ['Kavun', 'Karpuz', 'Muz']
console.log("Shift edilen eleman: ", shiftArray); // 'Armut'  
// -- Dizi İlk Elemanını Silme
const unshiftArray = concatArray.unshift("Elma"); // Diziye "Elma" ekler
console.log("concatArray after unshift: ", concatArray); // ['Elma', 'Kavun', 'Karpuz', 'Muz']
// -- Diziye İlk Eleman Ekleme
const joinArray = concatArray.join(", "); // Dizi elemanlarını virgülle birleştirir
console.log("joinArray: ", joinArray); // 'Elma, Kavun, Karpuz, Muz'
// -- Dizi Elemanlarını Birleştirme

//------------------------- Dizi Metotları  -------------------------
