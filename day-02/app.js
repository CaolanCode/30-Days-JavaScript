let string = '     30 Days of JavaScript    '
string = string.trim()
console.log(string.split())
console.log(string.split(' '))
console.log(string.includes(30))
console.log(string.search(/javascript/gi)) // search whole string, i = case insensitive
console.log(Number(' '))

// Exercise 1
let challenge = '30 Days of JavaScript'
console.log(challenge)
console.log(challenge.length)
let upper = challenge.toUpperCase()
console.log(upper)
let lower = challenge.toLowerCase()
console.log(lower)
let firstWord = challenge.substr(0,2)
console.log(firstWord)
let rest = challenge.substring(2)
console.log(rest)
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))
let companys = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companys.split(', '))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
let line = 'You cannot end a sentence with because because because is a conjunction'
console.log(line.indexOf('because'))
console.log(line.lastIndexOf('because'))
console.log(line.search('because'))
console.log(challenge.trim())
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('Script'))
console.log(challenge.match('a'))
let start = '30 Days of '
let end = 'JavaScript'
console.log(start.concat(end))
console.log(challenge.repeat(2))


// Exercise 2
console.log('There is no exercise better for the heart than reaching down and lifting people up. by John Holmes teaches us to help one another.')
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
let ten = '10'
console.log(typeof ten)
ten = Number(ten)
console.log(typeof ten)
console.log(ten)
let nine = '9.8'
nine = parseFloat(nine)
console.log(nine)
nine = Math.ceil(nine)
console.log(nine)
let python = 'python'
let jargon = 'jargon'
console.log(python.includes('on') && jargon.includes('on'))
let course = 'I hope this course is not full of jargon'
console.log(course.includes('jargon'))
let oneToHundred = Math.floor(Math.random() * 100)
console.log(oneToHundred)
let fiftyToHundred = Math.floor(Math.random() * (100 - 50) + 50)
console.log(fiftyToHundred)
let zeroToTwoFiveFive = Math.floor(Math.random() * 255)
console.log(zeroToTwoFiveFive)
const js = 'JavaScript'
let index = Math.floor(Math.random() * 9)
console.log(js.charAt(index))
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n5 1 5 25 125')
console.log(line.substr(30, 24))


// Exercise 3
function wordFreq(newSentence) {
    let freqMap = {}
    let commonWord
    let highest = 0
    newSentence.forEach(function (word) {
        if(!freqMap[word]) {
            freqMap[word] = 0
        }
        freqMap[word] += 1
    })
    Object.keys(freqMap).sort().forEach(function(word) {
        if(freqMap[word] > highest) {
            commonWord = word
            highest = freqMap[word]
        }
    })
    return commonWord
}
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(love.match(/love/gi) || [].length)
console.log(line.match(/because/g) || [].length)
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let newSentence = sentence.replace(/[^a-z0-9\s]+/gi,"") 
console.log(wordFreq(newSentence.split(" ")))
let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
income = income.split(' ')
function totalIncome(income) {
    let total = 0
    for(let i = 0; i < income.length; i++) {
        if(Number(income[i])) {
            let num = Number(income[i])
            total += num
        }
    }
    return total
}
console.log(totalIncome(income))
