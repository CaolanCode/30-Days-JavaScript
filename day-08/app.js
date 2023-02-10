// Exercise 1
const dog = {}
console.log(dog)
dog.name = 'Rex'
console.log(dog.name)
dog.legs = 4
console.log(dog.legs)
dog.color = 'white'
console.log(dog.color)
dog.bark = function() {
  return 'woof woof'
}
console.log(dog.bark())
dog.breed = 'Labrador'
dog.getDogInfo = function() {
  return `Name: ${this.name}, Legs: ${this.legs}, color: ${this.color}, breed: ${this.breed}`
}
console.log(dog.getDogInfo())

// Exercise 2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: "asab@asab.com",
    skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: "paul@paul.com",
    skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
let largest = 0
for(const property in users) {
  if(users[property].skills.length > largest) {
    largest = users[property].skills.length
  }
}
console.log('largest skill set:', largest)

let loggedUsers = 0
for(const property in users) {
  if(users[property].points >= 50) {
    loggedUsers++
  }
}
console.log('Points greater than 50:', loggedUsers)

const mernDevs = []
for(const property in users) {
  if(users[property].skills.includes('MongoDB') && users[property].skills.includes('Express') && users[property].skills.includes('React') && users[property].skills.includes('Node')) {
    mernDevs.push(property)
  }
}
console.log(mernDevs)

users.Bob = 'Bob'
users.Bob.email = 'bob@bob.com'
users.Bob.skills = ['HTML', 'CSS'] 
users.Bob.age = 55
users.Bob.isLoggedIn = false
users.Bob.points = 40

const keys = Object.keys(users)
console.log(keys)

//