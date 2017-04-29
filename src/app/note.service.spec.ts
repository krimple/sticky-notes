import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { NoteService } from './note.service';

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
  });
});
