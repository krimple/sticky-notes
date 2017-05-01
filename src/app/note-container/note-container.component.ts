import { Component, OnInit } from '@angular/core';
import { NoteData } from '../models/note-data';
import * as faker from 'faker';
import { NoteService } from '../note.service';

@Component({
  selector: 'sn-note-container',
  template: `
    <sn-note *ngFor="let noteDataItem of noteData" 
             [noteData]="noteDataItem"
             (onChangesSaved)="persistNotes()"></sn-note>
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
    if (!noteService.hasNotes()) {
      this.noteData = noteService.generateNotes(30);
      noteService.saveNotes(this.noteData);
    } else {
      this.noteData = noteService.loadNotes();
    }
  }

 ngOnInit() {
 }

 persistNotes() {
   this.noteService.saveNotes(this.noteData);
 }
}
