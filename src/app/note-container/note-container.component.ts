import { Component, OnInit } from '@angular/core';
import { NoteData } from '../models/note-data';
import * as faker from 'faker';
import { NoteService } from '../note.service';

@Component({
  selector: 'sn-note-container',
  template: `
    <sn-note *ngFor="let noteDataItem of noteData" 
             [noteData]="noteDataItem"></sn-note>
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
   this.noteData = noteService.generateNotes(30);
  }

  ngOnInit() {
 }
}
