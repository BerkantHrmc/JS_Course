/* Herhangi bir sayıda hexa veya rgb renk üretebilen generateColors isimli bir fonksiyon yazın .

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

*/

const alph = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
const colors = [];


function generateColors () {
    for(i=0 ; i<3 ; i++){
        let hexNumb = ""
    for(k=0 ; k<6 ; k++){
    let randNumb = Math.floor((Math.random()*alph.length));
    hexNumb = hexNumb + alph[randNumb];
    
}
    colors.push("#" + hexNumb);
}
return colors;
}

console.log(generateColors());
