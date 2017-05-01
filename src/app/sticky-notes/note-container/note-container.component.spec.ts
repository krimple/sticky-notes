import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NoteContainerComponent } from './note-container.component';
import { NoteComponent } from './note/note.component';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../note.service';

describe('NoteContainerComponent', () => {
  let component: NoteContainerComponent;
  let fixture: ComponentFixture<NoteContainerComponent>;
  let noteService: NoteService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ NoteContainerComponent, NoteComponent ],
      providers: [ NoteService ]
    })
    .overrideComponent(NoteComponent, {
      set: {
        template: `<b>I am a note</b>`,
        selector: 'sn-note'
      }
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(NoteContainerComponent);
        component = fixture.componentInstance;
        noteService = getTestBed().get(NoteService);
      });
  }));

  beforeEach(() => {
    spyOn(noteService, 'hasNotes').and.returnValue(true);
    // here we'd expand it later to include at least one note and verify the nodes
    // created inside the template
    spyOn(noteService, 'loadNotes').and.returnValue([]);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
