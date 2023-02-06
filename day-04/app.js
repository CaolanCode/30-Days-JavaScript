// Exercise 1
const age = parseInt(prompt('Enter your age'))
if(age >= 18) {
    console.log('You are old enough to drive')
} else {
    console.log('You have ', 18 - age, 'years to drive')
}
const myAge = 27
const yourAge = parseInt(prompt('Enter your age'))
if(myAge > yourAge) {
    console.log('I am', myAge - yourAge,'years older than you')
} else {
    console.log('I am', myAge - yourAge,'years younger than you')
}
let a = 4
let b = 3
if(a > b) {
    console.log(`a is greater than b`)
} else {
    console.log('a is less than b')
}
a > b ? console.log(`a is greater than b`) : console.log('a is less than b')
const num = parseInt(prompt('Enter a number'))
if(num % 2 == 0) {
    console.log(`${num} is an even number`)
} else {
    console.log(`${num} is an odd number`)
}

// Exercise 2
const grade = parseInt(prompt('Enter grade'))
if(grade >= 80 || grade <= 100) {
    console.log('A')
} else if(grade >= 70 || grade <= 79) {
    console.log('B')
} else if(grade >= 60 || grade <= 69) {
    console.log('C')
} else if(grade >= 50 || grade <= 59) {
    console.log('D')
} else {
    console.log('F')
}
let month = prompt('Enter month')
month = month.toLowerCase()
if(month === 'september' || month === 'october' ||month === 'november') {
    console.log(`${month} is Autumn`)
} else if(month === 'december' || month === 'january' ||month === 'february') {
    console.log(`${month} is Winter`)
} else if(month === 'march' || month === 'april' ||month === 'may') {
    console.log(`${month} is Spring`)
} else if(month === 'june' || month === 'july' ||month === 'august') {
    console.log(`${month} is Summer`)
} else {
    console.log('Error')
} 
let day = prompt('Enter day of the week')
day = day.toLowerCase()
const dayFormat = day.charAt(0).toUpperCase() + day.slice(1)
if(day === 'saturday' || day === 'sunday') {
    console.log(`${dayFormat} is a weekend`)
} else {
    console.log(`${dayFormat} is a week day`)
}

// Exercise 3
let monthDays = prompt('Enter month to recieve days')
monthDays = monthDays.toLowerCase()
let monthFormat = monthDays.charAt(0).toUpperCase() + monthDays.slice(1)
switch(monthDays) {
    case 'january':
        console.log(`${monthFormat} has 31 days`)
        break
    case 'february':
        console.log(`${monthFormat} has 28 days`)
        break
    case 'march':
        console.log(`${monthFormat} has 31 days`)
        break
    case 'april':
        console.log(`${monthFormat} has 30 days`)
        break
    case 'may':
        console.log(`${monthFormat} has 31 days`)
        break
    case 'june':
        console.log(`${monthFormat} has 30 days`)
        break
    case 'july':
        console.log(`${monthFormat} has 31 days`)
        break
    case 'august':
        console.log(`${monthFormat} has 31 days`)
        break
    case 'september':
        console.log(`${monthFormat} has 30 days`)
        break
    case 'october':
        console.log(`${monthFormat} has 31 days`)
        break
    case 'november':
        console.log(`${monthFormat} has 30 days`)
        break
    case 'december':
        console.log(`${monthFormat} has 31 days`)
        break
    default:
        console.log('Error with input')
}