const fs = require('fs')


const person = {
    name:'ali',
    age:50
}

const personJson = JSON.stringify(person)
console.log(personJson)

fs.writeFileSync('person.json',personJson)

const data = fs.readFileSync('person.json').toString()
console.log(data)

const newObject = JSON.parse(data)
console.log(newObject)

newObject.name = 'yassin'
newObject.age = 40

const newJson = JSON.stringify(newObject)
fs.writeFileSync('person.json',newJson)
