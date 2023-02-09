// Exercise 1
function fullName1() {
    let firstName = 'John'
    let lastName = 'Doe'
    console.log(`${firstName} ${lastName}`)
}
fullName1()

function fullName2(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullName2('John', 'Doe'))

function addNumbers(num1, num2) {
    return num1 + num2
}
console.log(addNumbers(4,3))

function areaOfRectangle(length, width) {
    return length * width
}
console.log(areaOfRectangle(4,5))

function perimeterOfRectangle(length, width) {
    return 2*(length + width)
}
console.log(perimeterOfRectangle(4,5))

function volumeOfRectPrism(length, width, height) {
    return length * width * height
}
console.log(4,5,6)

function areaOfCircle(r) {
    return Math.PI * r * r
}
console.log(areaOfCircle(6))

function circumOfCircle(r) {
    return 2 * Math.PI * r
}
console.log(circumOfCircle(8))

function density(mass, volume) {
    return mass * volume
}
console.log(80, 12)

function speed(metres, sec) {
    const speed = metres / sec
    return `${speed} m/s`
}
console.log(speed(100,12))

function weight(mass, gravity) {
    return mass * gravity
}
console.log(weight(12,10))

function convertCelsiusToFahrenheit(cel) {
    return ((cel * (9/5)) + 32)
}
console.log(convertCelsiusToFahrenheit(32))
    
function bmi(kg, height) {
    return kg / (height * height)
}
console.log(bmi(70, 1.8))

function checkSeason(month) {
    let m = month.toLowerCase()
    if(m === 'december' || m === 'january'|| m === 'february') {
        return 'Winter'
    } else if(m === 'march' || m === 'april'|| m === 'may') {
        return 'Spring'
    } else if(m === 'june' || m === 'july'|| m === 'august') {
        return 'Summer'
    } else if(m === 'september' || m === 'october'|| m === 'november') {
        return 'Autumn'
    } else {
        return 'Error'
    }
}
console.log(checkSeason('March'))

function findMax() {
    let largest = 0
    for(let i = 0; i < 3; i++) {
        if(arguments[i] > largest) {
            largest = arguments[i]
        }
    }
    return largest
}
console.log(findMax(6,2,10))

// Exercise 2
function solveLinEquation(a = 0, b = 0, c = 0) {
    if(a === 0 && b === 0 && c === 0) {
        console.log(0)
        return
    }
    let bx = b / a
    let cx = c / a
    console.log(`x = ${bx}y - ${cx}`) 
    let ay = a / b 
    let cy = c / b
    console.log(`y = ${ay}x - ${cy}`) 
}
solveLinEquation(3,5,2)

function solveQuadEquation(a, b, c) {
    if(a === 0 && b === 0 && c === 0) {
        console.log(0)
        return
    }
    let x1 = (-b + Math.sqrt((b*b) - (4 * a * c))) / (2 * a)
    let x2 = (-b - Math.sqrt((b*b) - (4 * a * c))) / (2 * a)
    console.log(`the roots of quadratic equation are ${x1} and ${x2}`)
}
solveQuadEquation(1,-1,-2)

function printArray(arr) {
    arr.forEach(item => console.log(item))
}
let arr = [1,2,3,4,5]
printArray(arr)

function showDateTime() {
    const now = new Date()
    let hour = now.getHours()
    let min = now.getMinutes()
    if(hour < 10) {
        hour = `0${hour}`
    }
    if(min < 10) {
        min = `0${min}`
    }
    const day = now.getDate()
    const month = now.getMonth() + 1
    const year = now.getFullYear()
    console.log(`${day}/${month}/${year} ${hour}:${min}`)
}
showDateTime()

function swapValues(x, y) {
    let temp = x
    x = y
    y = temp 
    console.log(`x = ${x}, y = ${y}`)
}
swapValues(3,4)

function reverArray(arr) {
    let j = arr.length-1
    for(let i = 0; i < arr.length/2; i++) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j--
    }
    return arr
}
arr = reverArray(arr)
arr.forEach(item => console.log(item))

let counties = ['mayo', 'galway', 'sligo', 'waterford']
counties = counties.map(country => country.charAt(0).toUpperCase() + country.slice(1))
console.log(counties)

function addItem(item) {
    let arr = [item]
    return arr
}
console.log(addItem(1))

function removeItem(index) {
    return arr.slice(0,index).concat(arr.splice(index+1))
}
console.log(removeItem(0))

function sumOfNumbers(num) {
    let total = 0
    for(let i = 1; i <= num; i++) {
        total += i
    }
    return total
}
console.log(sumOfNumbers(4))

function sumOfOdds(num) {
    let total = 0
    for(let i = 1; i <= num; i += 2) {
        total += i
    }
    return total
}
console.log(sumOfOdds(5))

function sumOfEvens(num) {
    let total = 0
    for(let i = 2; i <= num; i += 2) {
        total += i
    }
    return total
}
console.log(sumOfEvens(6))

function evenAndOdds(num) {
    let even = 0 
    let odd = 0
    if(num % 2 === 1) {
        odd = Math.floor(num / 2) + 1
        even = Math.floor(num / 2)
    } else {
        odd = num / 2
        even = num / 2
    }
    console.log(`the number of evens are ${even}`)
    console.log(`the number of odds are ${odd}`)
}
evenAndOdds(51)

function sum() {
    let total = 0
    for(const element of arguments) {
        total += element
    }
    return total
}
console.log(sum(1,2,3,4))

function randomUserIp() {
    let a = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let c = Math.floor(Math.random() * 255)
    let d = Math.floor(Math.random() * 255)
    return `${a}.${b}.${c}.${d}`
}
console.log(randomUserIp())

function randomMacAddress() {
    let mac = ''
    for(let i = 0; i < 17; i++) {
        if((i + 1) % 3 === 0) {
            mac += ':'
        } else {
            mac += (Math.floor(Math.random() * 16)).toString(16)
        }
    }
    return mac
}
console.log(randomMacAddress())

function randomHexaNumberGenerator() {
    let hex = '#'
    for(let i = 0; i < 6; i++) {
        hex += (Math.floor(Math.random() * 16)).toString(16)
    }
    return hex
}
console.log(randomHexaNumberGenerator())

function userIdGenerator() {
    let id = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i = 0; i < 7; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return id
}
console.log(userIdGenerator())


