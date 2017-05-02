import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NoteContainerComponent } from './note-container.component';
import { NoteComponent } from './note/note.component';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../note.service';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MockBackend } from '@angular/http/testing';

describe('NoteContainerComponent', () => {
  let component: NoteContainerComponent;
  let fixture: ComponentFixture<NoteContainerComponent>;
  let noteService: NoteService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpModule ],
      declarations: [ NoteContainerComponent, NoteComponent ],
      providers: [
        NoteService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
        }
      ]
    })
    .overrideComponent(NoteComponent, {
      set: {
        template: `<b>I am a note</b>`,
        selector: 'sn-note'
      }
    }).compileComponents()
      .then(() => {
        // how to grab component???
        fixture = TestBed.createComponent(NoteContainerComponent);
        component = fixture.componentInstance;
        noteService = getTestBed().get(NoteService);
        spyOn(noteService, 'loadNotes').and.returnValue(Promise.resolve([]));
      });
  }));

  beforeEach(() => {
    spyOn(noteService, 'hasNotes').and.returnValue(Promise.resolve(true));
    // here we'd expand it later to include at least one note and verify the nodes
    // created inside the template
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
