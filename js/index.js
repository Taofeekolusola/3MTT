//Factory function
function createPerson(age) {
    return {
        age,
        talk: function talk() {
            console.log('talk')
        }
    }
}
const person = createPerson(20)

console.log(person)

//Constructor function
function Person(age) {
    this.age = age
    this.talk = function talk() {
        console.log('talk')
    }
}

const person1 = new Person(20)
console.log(person1)