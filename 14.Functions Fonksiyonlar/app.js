//---------------Klasik Fonksiyon Oluşturma 

function toplama () {

        
}

//---------------İsimsiz Fonksiyon Oluşturma ve Bir Değişkene Atama

const sonuc = function() {


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

function bolme (a,b){
    let c = a/b;
    return c;
}

//---------------Sınırsız sayıda parametreyle çalışan fonksiyon


function ortalama (){
    let sum =0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
         }
      
    let ort = sum/(arguments.length);
    return ort;
}

console.log(ortalama(13,14,17,18,12,16,12,17));




