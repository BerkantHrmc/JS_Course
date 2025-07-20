//--- Bir dizi tanımlayalım.Dizinizdeki ilk elemanı, ortadaki elemanı ve sondaki elemanı bulun.

const NumberArr = [17,23,45,67,86,34,35,67,89,77,1,12,43,77,19];

const firstElement = NumberArr[0]; // İlk eleman
const middleElementNumber= parseInt((NumberArr.length)/2);
const middleElement = NumberArr[middleElementNumber];
const lastElement  = NumberArr[NumberArr.length-1]; //Son Eleman
console.log(firstElement);
console.log(middleElement);
console.log(lastElement);

//-----------------------------------------------------------------------------------------------------

