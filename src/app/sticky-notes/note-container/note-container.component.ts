import { Component, OnInit } from '@angular/core';
import { NoteData } from '../models/note-data';
import * as faker from 'faker';
import { NoteService } from '../note.service';

@Component({
  selector: 'sn-note-container',
  template: `
    <sn-note *ngFor="let noteDataItem of noteData" 
             [noteData]="noteDataItem"
             (onChangesSaved)="persistNote($event)"></sn-note>
  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
    }
  `]
})
export class NoteContainerComponent implements OnInit {

  noteData: NoteData[] = [];

  constructor(private noteService: NoteService) {
      noteService.initialize();
      noteService.loadNotes()
        .then((data: NoteData[]) => {
          this.noteData = data;
        });
  }

 ngOnInit() {
 }

 persistNote(note: NoteData) {
   this.noteService.saveNote(note);
 }
}
