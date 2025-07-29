const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// - Use map to create a new array by changing each country to uppercase in the countries array.

const upCas = countries.map((countrie) => countrie.toUpperCase());
console.log(upCas);


//- Use filter to filter out countries containing land.

const landCount = countries.filter((countrie) => countrie.endsWith("land"));
console.log(landCount);

//- Use reduce to sum all the numbers in the numbers array.

const sum = numbers.reduce((toplam,sayi) => toplam + sayi , 0);
console.log(sum);

//-