const dic = {
    name: 'taofeek',
    last: 'olusola',
    age: '20'
}

// const person = {}

// for (let i in dic) 
//     person[i] = dic[i]

// const person = Object.assign({}, dic)

const person = {...dic}

console.log(person)

