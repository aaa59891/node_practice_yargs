const fs = require('fs');

const originalNote = {
  title: 'some title',
  body: 'some body'
}

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var noteObj = JSON.parse(noteString);
console.log(typeof noteObj);
console.log(noteObj);
