// Exercise 1
const totalIncome = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const numbers = totalIncome.match(/\d+/g)
const income = numbers.reduce((a,b) => a + parseInt(b), 0)
console.log(income)

const pointsArr = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.'
const points = pointsArr.match(/[-]?\d+/g)
const sortPoints = points.sort((a,b) => parseInt(a) > parseInt(b) ? 1 : -1)
const difference = parseInt(sortPoints[sortPoints.length-1]) - parseInt(sortPoints[0]) 
console.log(difference)
