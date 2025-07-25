//------fullName adında bir fonksiyon tanımlayın ve bu fonksiyon tam adınızı yazdırsın.

function fullName (){
    console.log("Berkant Hurmacı");
}

fullName();

/* veya 

const fullName = function (){
    console.log("Berkant Hurmacı");
}
*/

//-------------------------------------------------------------------------------------------------------------------

//------Dikdörtgen prizmanın hacmi şu şekilde hesaplanır: hacim = uzunluk x genişlik x yükseklik . 
// volumeOfRectPrism'i hesaplayan bir fonksiyon yazın .

function volumeOfRectPrism (uzunluk , genislik , yukseklik) {

    let hacim = uzunluk*genislik*yukseklik;
    return hacim;
}

let prism1 = volumeOfRectPrism(3,4,7);
console.log(prism1)



