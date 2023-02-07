// Exercise Level 1
const empty = new Array()
const six = [1,2,3,4,5,6,7]
console.log(six.length)
const middle = Math.floor(six.length/2)
console.log(six[0], six[middle], six[six.length-1])
const mixedDataTypes = [1, 'Bob', false, 'Monday', 3.5, true]
console.log(mixedDataTypes.length)
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
const middleCompany = Math.floor(itCompanies.length/2)
console.log(itCompanies[0], itCompanies[middleCompany], itCompanies[itCompanies.length-1])
itCompanies.forEach(company => console.log(company))
itCompanies = itCompanies.map(company => company.toUpperCase())
console.log(itCompanies)
itCompanies = itCompanies.map(company => company.toLowerCase())
console.log(itCompanies.toString() + ' are big IT companies')
if(itCompanies.includes('AMAZON')) {
    console.log('Amazon exists')
} else {
    console.log('Amazon doesn\'t exists')
}
itCompanies = itCompanies.filter(company => !company.includes('oo'))
console.log(itCompanies)
itCompanies.sort()
console.log(itCompanies)
itCompanies.reverse()
console.log(itCompanies)
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(1,-1))
itCompanies.shift()
console.log(itCompanies)
itCompanies.shift(itCompanies.length/2)
console.log(itCompanies)
itCompanies.splice(itCompanies.length/2, 1)
console.log(itCompanies)
itCompanies.pop()
console.log(itCompanies)
itCompanies = []
console.log(itCompanies)

// Exercise 2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ')
words = words.map(word => word.replace(/[.,]/g, ""))
console.log(words)
console.log(words.length)
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
let index = shoppingCart.indexOf('Honey')
shoppingCart.splice(index, 1)
index = shoppingCart.indexOf('Tea')
shoppingCart[index] = 'Green Tea'
console.log(shoppingCart)
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

import { countries } from "./countries"
console.log(countries)