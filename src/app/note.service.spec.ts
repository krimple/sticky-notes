import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { NoteService } from './note.service';
import { NoteData } from './models/note-data';

describe('NoteService', () => {
  let service: NoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteService]
    });
    service = getTestBed().get(NoteService);
  });

  it('should create the service', () => {
    expect(service).toBeDefined();
  });

  it('should respond in negative when localStorage does not have values', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    expect(service.hasNotes()).toBe(false);
    expect(localStorage.getItem).toHaveBeenCalledWith('notes');
  });

  it('should send notes to the local storage system when saving', () => {
    spyOn(localStorage, 'setItem');
    const testData = [new NoteData('title', 'content'), new NoteData('title2', 'content2')];
    service.saveNotes(testData);
    // note - the API generates a string for JSON so we need to stringify it in the test
    expect(localStorage.setItem).toHaveBeenCalledWith('notes', JSON.stringify(testData));
  });
});
