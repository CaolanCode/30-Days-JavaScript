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

// Exercise 3
const users2 = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]
function signIn() {
  let loggedIn = false
  const username = prompt('Enter username')
  const password = prompt('Enter password')
  for(const user in users2) {
    if(users2[user].username === username && users2[user].password === password) {
      loggedIn = true
    }
  }
  if(loggedIn) {
    console.log('Logged In')
  } else {
    console.log('Incorrect credentials')
  }
}
function signUp() {
  const username = prompt('Enter username')
  for(const user in users2) {
    if(users2[user].username === username) {
      console.log('You already have an account')
      return
    }
  }
  const password = prompt('Enter password')
  const email = prompt('Enter email')
  let id = []
  const chars = "abcdefghiklmnopqrstuvwxyz"
  for(let i = 0; i < 6; i++) {
    id.push(chars[Math.floor(Math.random() * chars.length)])
  }
  id = id.join('')
  const now = new Date()
  users2.push({
    _id: id,
    username: username,
    email: email,
    password: password,
    createdAt: `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`,
    isLoggedIn: false
  })
}
signUp()