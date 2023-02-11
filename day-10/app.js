// Exercise 1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const count = new Set()
for(let i = 0; i < 10; i++) {
  count.add(i+1)
}
console.log(count)

count.delete(4)
console.log(count)

count.clear()
console.log(count)

const counties = ['Galway', 'Mayo', 'Offaly', 'Dublin', 'Tipperary']
const countySet = new Set(counties)
console.log(countySet)

const countryMap = new Map()
countries.forEach(country => {
  countryMap.set(country, country.length)
})
console.log(countryMap)

// exercise 2
const A = new Set(a)
const B = new Set(b)
const c = [...a, ...b]
const C = new Set(c)
console.log(C)

const inter = a.filter(num => B.has(num))
const intersection = new Set(inter)
console.log(intersection)
