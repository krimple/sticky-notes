import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NoteContainerComponent } from './note-container/note-container.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NoteContainerComponent,
        NoteComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
