import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoteComponent } from './note.component';
import { NoteData } from '../../models/note-data';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;
  let titleDivs: HTMLCollection;
  let contentDivs: HTMLCollection;
  let titleEditingDivs: HTMLCollection;
  let contentEditingDivs: HTMLCollection;
  // this is deterministic - we will always have a button
  let editButton: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [NoteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    titleDivs = fixture.nativeElement.getElementsByClassName('title');
    contentDivs = fixture.nativeElement.getElementsByClassName('content');
    titleEditingDivs = fixture.nativeElement.getElementsByClassName('title-editing');
    contentEditingDivs = fixture.nativeElement.getElementsByClassName('content-editing');
    editButton = fixture.nativeElement.getElementsByTagName('button')[0];
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

  it('should hold note data in non-editable divs by default', () => {
    expect(titleDivs.length).toBe(1);
    expect(titleDivs[0].textContent).toContain('Title');
    expect(contentDivs.length).toBe(1);
    expect(contentDivs[0].textContent).toContain('Content');
  });

  it('should not display editing by default', () => {
    // it's not just an array, it's a HTMLCollection with zero elements!
    expect(titleEditingDivs.length).toBe(0);
    expect(contentEditingDivs.length).toBe(0);
  });

  it('should toggle editing when button is clicked', () => {
    spyOn(component.onChangesSaved, 'next');
    expect(component.editing).toBe(false);

    // edit mode
    fixture.detectChanges();
    editButton.click();

    // now, time must pass and the component must digest the action and change its template
    fixture.detectChanges();
    expect(component.editing).toBe(true);
    expect(titleDivs.length).toBe(0);
    expect(contentDivs.length).toBe(0);
    expect(titleEditingDivs.length).toBe(1);
    expect(contentEditingDivs.length).toBe(1);
    editButton.click();
    fixture.detectChanges();
    expect(component.editing).toBe(false);
    expect(titleDivs.length).toBe(1);
    expect(contentDivs.length).toBe(1);
    expect(titleEditingDivs.length).toBe(0);
    expect(contentEditingDivs.length).toBe(0);
    expect(component.onChangesSaved.next).toHaveBeenCalledTimes(1);
  });
});
