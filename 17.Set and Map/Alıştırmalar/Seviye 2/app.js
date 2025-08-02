/*
1.A birleşim B'yi bulun 
2.A kesişim B'yi bulun 

*/

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const c = [...a,...b]
const A = new Set(a)
const B = new Set(b);
const C = new Set(c);
console.log(C)

let d = a.filter((num) => B.has(num)) 

console.log(d);




