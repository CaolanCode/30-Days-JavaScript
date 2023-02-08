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
