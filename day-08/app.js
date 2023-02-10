// Exercise 1
const dog = {
  name : 'Rex',
  legs: 4,
  color: 'white',
  bark : function() {
      return 'woof woof'
  },
  breed: 'Labrador',
  getDogInfo: function() {
    return `Name: ${this.name}, Legs: ${this.legs}, color: ${this.color}, breed: ${this.breed}`
  }
}
console.log(dog)
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.bark())
console.log(dog.getDogInfo())
