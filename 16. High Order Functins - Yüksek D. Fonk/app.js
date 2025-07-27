function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000) 

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum);


const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)