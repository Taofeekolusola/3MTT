let Person = function(name, age) {
    this.name = name,
    this.age = age,
    this.greet = function () {
        console.log(`good morning from ${this.name}`)
    }
    this.introduce = function () {
        console.log(`My name is ${this.name} and i am ${this.age} years old`)
    }
}

let person1 = new Person('Tafeek', 32)
let person2 = new Person('Ganiyyu', 30)
let person3 = new Person('Ibrahim', 37)
let person4 = new Person('Kazeem', 35)

person1.greet()
person2.introduce()
person3.greet()
person4.introduce()