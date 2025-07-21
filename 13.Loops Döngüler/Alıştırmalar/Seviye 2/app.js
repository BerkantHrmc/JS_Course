/*Herhangi bir sayıda rastgele id numarası atayan bir fonksiyon yazın

örnekler:

  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba */

  const alphandnumb = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z', 0 , 1 , 2,
  3, 4 , 5 , 6 , 7 , 8 , 9
];

let id  = "" //bulunan rastgele karakterlerin ekleneceği string
for(i=0 ; i<=6 ; i++ ) {
    let randNumb = Math.floor(Math.random()*35)+1   // 0 ile 36 arasında sayı seç
    id = id + alphandnumb[randNumb]; //arraydeki o indekse göre chac bul
}

console.log("Kullanıcı Id:",id) 


