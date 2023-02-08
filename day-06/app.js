// Exercise 1
const countries = [
'Albania',
'Bolivia',
'Canada',
'Denmark',
'Ethiopia',
'Finland',
'Germany',
'Hungary',
'Ireland',
'Japan',
'Kenya'
]

const webTechs = [
'HTML',
'CSS',
'JavaScript',
'React',
'Redux',
'Node',
'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

for(let i = 0; i <= 10; i++){ console.log(i) }
for(let i = 10; i >= 0; i--){ console.log(i) }
let n = 5
for(let i = 0; i <= n; i++){ console.log(i) }
for(let i = 0; i <= 7; i++) {
for(let j = 0; j < i; j++) {
    console.log('#')
}
console.log('\n')
}
for(let i = 0; i <= 10; i++){  
    console.log(`${i} x ${i} =`, i * i)
}
console.log('i\ti^2\ti^3')
for(let i = 0; i <= 10; i++){  
    console.log(i + '\t' + Math.pow(i,2) + '\t' + Math.pow(i,3))
}
for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
}
let sieve = [], primes = []
console.log('primes:')
for(let i = 2; i <= 100; i++) {
    if(!sieve[i]) {
        primes.push(i)
        for(let j = i; j <= 100; j+=i) {
            sieve[j] = true
        }
    }
}
primes.forEach(prime => console.log(prime))    
let sum = 0
let oddSum = 0
let evenSum = 0
for(let i = 0; i <= 100; i++) {
    sum += i
    if(i % 2 === 0) {
        evenSum += i
    } else {
        oddSum += i
    }
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`)
console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`)

let randomArr = []
for(let i = 0; i < 5; i++) {
    let random = Math.random() * 100
    randomArr.push(Math.floor(random))
}
console.log(randomArr)
let newRandom = []
for(let i = 0; i < 5; i++) {
    let random = Math.random() * 100
    random = Math.floor(random)
    if(newRandom.includes(random)) {
        i--
    } else {
        newRandom.push(Math.floor(random))
    }
}
console.log(newRandom)
let randomID = ""
var charset = "abcdefghijklmnopqrstuvwxyz23456789"
for(let i = 0; i < 6; i++) {
    let choice = Math.floor(Math.random() * 2)
    if(choice === 0) {
        randomID += charset.charAt(Math.floor(Math.random() * charset.length))
    } else {
        randomID += Math.floor(Math.random() * 10)
    }
}

// Exercise 2
console.log(randomID)
randomID = ""
const idSize = prompt('Enter size of ID')
for(let i = 0; i < idSize; i++) {
    let choice = Math.floor(Math.random() * 2)
    if(choice === 0) {
        randomID += charset.charAt(Math.floor(Math.random() * charset.length))
    } else {
        randomID += Math.floor(Math.random() * 10)
    }
}
console.log(randomID)

let hexResult = '#'
const hex = '0123456789ABCDEF'
for(let i = 0; i < 6; i++) {
    hexResult += hex.charAt(Math.floor(Math.random() * hex.length)) 
}
console.log(hexResult) 

const r = Math.floor(Math.random() * 255)
const g = Math.floor(Math.random() * 255)
const b = Math.floor(Math.random() * 255)
const rgb = `rgb(${r},${g},${b})`
console.log(rgb)

const capCountries = countries.map(country => country.toUpperCase())
console.log(capCountries)

const countryLength = countries.map(country => country.length)
console.log(countryLength)

const listOfCountries = []
countries.forEach(country => {
    listOfCountries.push([country,country.substring(0,3).toUpperCase(), country.length])
})
console.log(listOfCountries)

const landArray = countries.filter(country => country.includes('land'))
if(landArray.length > 0) {
    console.log(landArray)
} else {
    console.log('All these countries without land')
}

const iaArray = countries.filter(country => country.substring(country.length-2) === 'ia')
if(iaArray.length > 0) {
    console.log(iaArray)
} else {
    console.log('These are countries that end without ia')
}

let bigWord = ""
countries.forEach(country => {
    if(country.length > bigWord.length) {
        bigWord = country
    }
})
console.log(bigWord)

const fiveChars = countries.filter(country => country.length === 5)
console.log(fiveChars)

let largestWeb = webTechs[0]
for(let i = 1; i < webTechs.length; i++) {
    if(webTechs[i].length > largestWeb.length) {
        largestWeb = webTechs[i]
    }
}
console.log(largestWeb)

const webSize = webTechs.map(item => [item, item.length])
console.log(webSize)

const mernArr = ['MongoDB', 'Express', 'React', 'Node']
let mern = mernArr.map(item => item.charAt(0))
mern = mern.join('')
console.log(mern)

webTechs.forEach(item => console.log(item))

let fruit = ['banana', 'orange', 'mango', 'lemon']
for(let i = 0; i < fruit.length/2; i++) {
    let temp = fruit[fruit.length - 1 - i]
    fruit[fruit.length - 1 - i] = fruit[i]
    fruit[i] = temp
}
console.log(fruit)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
fullStack.forEach(item => {
    item.forEach(i => console.log(i))
})

// exercise 3
let copyCountries = []
countries.forEach(country => copyCountries.push(country))
console.log(copyCountries)

const sortedCountries = copyCountries.sort((a,b) => a > b ? 1 : -1)
console.log(sortedCountries)

const sortedWebTech = webTechs.sort((a,b) => a > b ? 1 : -1)
console.log(sortedWebTech)

const sortedMern = mernArr.sort((a,b) => a > b ? 1 : -1)
console.log(sortedMern)

const twoWords = countries.filter(country => country.includes(' '))
if(twoWords.length > 0) {
    console.log(twoWords)
} else {
    console.log("No country has two words")
}
