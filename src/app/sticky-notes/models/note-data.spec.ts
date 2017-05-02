import { NoteData } from './note-data';
describe('Note data model object', () => {
  it('should provide title and content without ID when created without one', () => {
    const noteData = new NoteData('This is the title', 'This is the content');
    expect(noteData.title).toBe('This is the title');
    expect(noteData.content).toBe('This is the content');
    expect(noteData.constructor).toBe(NoteData);
  });
});
