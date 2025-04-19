// const person = {
//     firstName: 'Taofeelk',
//     lastName: 'Olusola',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value) {
//         const part = value.split(' ');
//         this.firstName = part[0],
//         this.lastName = part[1]
//     }
// }

// person.fullName = 'James Smith'
// console.log(person)

const birthDay = {
    day: '6',
    month: 'march',
    year: '1993',

    get birthDayDate() {
        return `${birthDay.day} ${birthDay.month} ${birthDay.year}`
    },
    set birthDayDate(date) {
        const birth = date.split(' ');
        this.day = birth[0],
        this.month = birth[1],
        this.year = birth[2]
    }
}

birthDay.birthDayDate = '3 12 1991';
console.log(birthDay)