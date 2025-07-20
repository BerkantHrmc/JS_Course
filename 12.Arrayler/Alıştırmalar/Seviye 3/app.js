/* Aşağıdaki dizide 10 öğrencinin yaşı vardır:
const  ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

Diziyi sıralayın ve en küçük ve en büyük yaşı bulun

1.Medyan yaşı bulun(dizinin ortasındaki eleman ama ortada iki eleman varsa elemanlar ikiye bölünür)

2.Ortalama yaşı bulun(tüm elemanlar eleman sayısına bölünür)

3.Yaş aralığını bulun (maks - min)

4.abs() metodunu kullanarak (min - ortalama) ve (maks - ortalama) değerlerini karşılaştırın */

const  ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sToB = ages.sort();
smallNumb = sToB[0];
bigNumb = sToB[(sToB.length-1)];
console.log(sToB);
console.log(smallNumb);
console.log(bigNumb);

//-----------------------------------------------------------------------------

if (sToB.length%2==0) {

    middleElementIndex = (sToB.length/2);
    let smalMid = Math.floor(middleElementIndex);
    let bigMid = Math.ceil(middleElementIndex);

    let median = (sToB[smalMid]+sToB[bigMid])/2;
    console.log(median);

} else {
    middleElementIndex = (sToB.length/2);
    let floor_middleElementIndex = Math.floor(middleElementIndex);

    let median = sToB[floor_middleElementIndex];
    console.log(median);
}

//-----------------------------------------------------------------------------

  let ageRange = sToB[sToB.length-1] - sToB[0];
  console.log(ageRange); 

//-----------------------------------------------------------------------------

let total = 0 ;
for(i=0 ; i<sToB.length ; i++) {
    total = total+sToB[i];

}

console.log("total",total);

average = total / sToB.length;
console.log ("average",average);

console.log("min-average",Math.abs(smallNumb - average))
console.log("maks-average",Math.abs(bigNumb - average))