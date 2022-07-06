
const fs = require('fs')
fs.writeFileSync('notes.txt','Hello ')

console.log(fs.readFileSync('notes.txt').toString())

fs.appendFileSync('notes.txt',' omar')

const x = require('./data')
console.log(x)
console.log(x.nameUser)
console.log(x.name1)
console.log(x.sum1(5,5))

 var validator = require('validator');
 console.log(validator.isEmail('omar@gmail.com')); //true
 console.log(validator.isEmail('omar')); //=> false 
 
 
const yargs = require('yargs')

const notes = require('./notes')

yargs.command({
    command:'add',
    describe:'Add notes',

    builder:{   
        title:{
            describe:'This is title description in add command',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'This is body description in add command',
            demandOption:true,
            type:'string'
        }
    },
  
    handler:()=>{
      notes.addNote(yargs.argv.title,yargs.argv.body)
    }
})

yargs.command({
    command:'delete',
    describe:'Delete notes command',
    builder:{
        title:{
            describe:'This is body description in delete command',
            demandOption:true,
            type:'string'
        }
    },

    handler:()=>{
       notes.deleteNote(yargs.argv.title)
    }
})

yargs.command({
    command:'read',
    describe:'Read notes command',
    builder:{
        title:{
            describe:'This is body description in read command',
            demandOption:true,
            type:'string'
        }
    },
    handler:()=>{
       notes.readNote(yargs.argv.title)
    }
})


yargs.command({
    command:'list',
    describe:'List notes command',
    handler:()=>{
        notes.listNotes()
    }
})

yargs.parse()

console.log('tessssssssssst')

