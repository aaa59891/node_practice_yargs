const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOption = {
  describe: 'Title for note',
  demand: true,
  alias: 't'
};

const bodyOption = {
  describe: 'Body for note',
  demand: true,
  alias: 'b'
};

const args = yargs
  .command('add', 'Add a new note', {
    title: titleOption,
    body: bodyOption
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOption
  })
  .command('remove', 'Remove a note', {
    title: titleOption
  })
  .help()
  .argv;
const command = args._[0];

switch(command){
  case 'add':
    const data = notes.addNote(args.title, args.body);
    console.log(data || 'Already had the same title\' note');
    break;
  case 'list':
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => console.log(note));
    break;
  case 'read':
    console.log(notes.getNote(args.title) || 'Note not found');
    break;
  case 'remove':
    const result = notes.remove(args.title);
    console.log(result? `Note with title: ${args.title} had been removed.` : 'there is no data with this title');
    break;
}
