const fs = require('fs');

const filename = 'notes-data.json';

const fetchNotes = () => {
  try{
    const fileDataString = fs.readFileSync(filename);
    return JSON.parse(fileDataString)
  }catch(e){
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync(filename, JSON.stringify(notes));
}

module.exports = {
  addNote(title, body){

    let notes = fetchNotes();

    const note = {
      title,
      body
    };

    let duplicateNote = notes.filter((data) => data.title === note.title);
    if(duplicateNote.length === 0){
      notes.push(note);
      saveNotes(notes);
      return note;
    }

  },
  getAll(){
    return fetchNotes();
  },
  getNote(title){
    const notes = fetchNotes();
    return notes.filter((note) => note.title === title)[0];
  },
  remove(title){
    const notes = fetchNotes();
    const filterNotes = notes.filter((data) => data.title !== title);
    saveNotes(filterNotes);
    return notes.length !== filterNotes.length
  }
}
