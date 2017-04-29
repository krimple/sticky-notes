import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NoteContainerComponent } from './note-container.component';
import { NoteComponent } from '../note/note.component';
import { FormsModule } from '@angular/forms';

describe('NoteContainerComponent', () => {
  let component: NoteContainerComponent;
  let fixture: ComponentFixture<NoteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ NoteContainerComponent, NoteComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
