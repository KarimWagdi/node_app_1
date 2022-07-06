const fs = require("fs");


const addNote = (title, body) => {
  const notes = loadNotes();
  
  const duplicateTitle = notes.find((el) => {
   
    return el.title === title;
  });
  console.log(duplicateTitle); 

  if (!duplicateTitle) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("Saved Successfully");
  } else {
    console.log("Error duplicate title");
  }
};

const loadNotes = () => {
  try {
   
    const data = fs.readFileSync("notes.json").toString();
   
    return JSON.parse(data); 
  } catch (e) {
    return [];
  }
};
const saveNotes = (notes) => {
 
  const saveData = JSON.stringify(notes);
  console.log(saveData);
  fs.writeFileSync("notes.json", saveData);
};

 
const deleteNote = (title) =>{
    const notes = loadNotes()
    console.log(notes)
    const notesToKeep = notes.filter((el)=>{
        
        return el.title !== title
    })
    
    console.log(notesToKeep) 

    if(notes.length !== notesToKeep.length)
    {
    saveNotes(notesToKeep)
    console.log('Deleted sucessfully')
    }
    else {
    console.log('No title is found')
    }
}
// read
const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((el)=>{
       
        return el.title === title
    })
    console.log(note)
    if(note){
        console.log(note.body)
    }
    else {
        console.log('Not found')
    }
}


const listNotes = () =>{
    const notes = loadNotes()
    notes.forEach((el)=>{
        console.log(el.title)
    })
}

module.exports = {
  addNote, 
  deleteNote,
  readNote,
  listNotes
};
