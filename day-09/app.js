// Exercise 1
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
// forEach: loops through array
// map: Alters each element in the array
// filter: takes elements that meet criteria
// reduce: accumulates result from each element
// callback function: can be passed as a parameter to another function
countries.forEach(country => console.log(country))
names.forEach(name => console.log(name))
numbers.forEach(numbers => console.log(numbers))
const countriesUppercase = countries.map(country => country.toUpperCase())
console.log(countriesUppercase)
const countriesLenth = countries.map(country => country.length)
console.log(countriesLenth)
const squareNumbers = numbers.map(number => number * number)
console.log(squareNumbers)
const namesUppercase = names.map(name => name.toUpperCase())
console.log(namesUppercase)
const productPrices = products.map(product => product.price)
console.log(productPrices)
const landCountries = countries.filter(country => country.includes('land'))
console.log(landCountries)
const sixChars = countries.filter(country => country.length === 6)
console.log(sixChars)
const sixCharsMore = countries.filter(country => country.length >= 6)
console.log(sixCharsMore)
const startsE = countries.filter(country => country.startsWith('E'))
console.log(startsE)
const hasPrices = products.filter(product => product.price > 0)
console.log(hasPrices)
const sum = numbers.reduce((a,b) => a + b, 0)
console.log(sum)
const countriesString = countries.reduce((a,b) => a + ', ' + b.toString(), '')
console.log(countriesString)
// some: check if element is present
// every: check if every element meets criteria
console.log(names.some(name => name.length > 7))
console.log(countries.every(country => country.includes('land')))
// find: returns first element that meets condition
// findIndex: returns the first index that meets condition
console.log(countries.find(country => country.length === 6))
console.log(countries.findIndex(country => country.length === 6))
console.log(countries.findIndex(country => country === 'Norway'))
console.log(countries.findIndex(country => country === 'Russia'))


