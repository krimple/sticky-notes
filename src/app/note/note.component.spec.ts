import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteComponent } from './note.component';
import { NoteData } from '../models/note-data';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    component.noteData = new NoteData('Title', 'Content');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain note data', () => {
    expect(component.noteData).toBeDefined();
  });

  it('should hold note data in divs', () => {
    const titleRef: HTMLDivElement = fixture.nativeElement.getElementsByClassName('title')[0];
    const contentRef: HTMLDivElement = fixture.nativeElement.getElementsByClassName('content')[0];
    expect(titleRef.innerText).toContain('Title');
    expect(contentRef.innerText).toContain('Content');
  });
});
