//---------randomHexaNumberGenerator adında bir fonksiyon tanımlayın . Bu fonksiyon çağrıldığında rastgele 
// bir onaltılık sayı üretir. Fonksiyon, onaltılık sayıyı döndürür.

const alph = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let hexNumb = ""
const randomHexaNumberGenerator = function(){

for(i=0 ; i<6 ; i++){
    let randNumb = Math.floor((Math.random()*alph.length));
    hexNumb = hexNumb + alph[randNumb];
    
}
 return hexNumb;
}

console.log("#" + randomHexaNumberGenerator());


