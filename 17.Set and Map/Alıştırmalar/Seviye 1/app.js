/*

1.Boş bir set oluşturun
2.Döngü kullanarak 0 ile 10 aralığını içeren bir set oluşturun 
3.Set içinden bir eleman silin 
4.Set'i temizleyin 
5 string eleman içeren bir set oluşturun (dizi ile oluşturulacak) 
6. bir ülke map'ı oluşturun ve içindeki ülkelerin karakter sayısını girin

*/

const mySet = new Set();
console.log(mySet);

const numSet = new Set();
for(i=0 ; i<11 ; i++) {

    numSet.add(i);

}

console.log(numSet);

numSet.delete(4); //4 ü siler

console.log(numSet);

numSet.clear; //set temizlendi.

const meyveler = ["elma","armut","çilek","muz","kiraz","şeftali"];
const setMeyveler = new Set(meyveler);
console.log(setMeyveler);

const countMap = new Map();
countMap.set("Türkiye", 7)
countMap.set("Almanya" , 7)
countMap.set("Norveç", 6)
countMap.set("İsveç" , 5)
countMap.set("Danimarka" , 9)
countMap.set("Hollanda" , 8)
countMap.set("Amerika" , 7)
countMap.set("Fas" , 3)

console.log(countMap);