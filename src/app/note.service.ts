import { Injectable } from '@angular/core';
import { NoteData } from './models/note-data';
import * as faker from 'faker';
@Injectable()
export class NoteService {

  generateNotes(numberOfNotes: number): NoteData[] {
    const noteData = [];
    for (let i = 0; i < numberOfNotes; i++) {
      noteData.push(
        new NoteData(faker.random.words(2), faker.random.words(15))
      );
    }
    return noteData;
  }

  hasNotes() {
    return localStorage.getItem('notes') !== null;
  }

  saveNotes(notes: NoteData[]) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  loadNotes(): NoteData[] {
    return JSON.parse(localStorage.get('notes') || '[]');
  }
}
