import { Component, OnInit } from '@angular/core';
import { NoteData } from '../models/note-data';
import * as faker from 'faker';

@Component({
  selector: 'sn-note-container',
  template: `
    <sn-note *ngFor="let noteDataItem of noteData" [noteData]="noteDataItem"></sn-note>
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

  constructor() {
    for (let i = 0; i < 30; i++) {
      this.noteData.push(
        new NoteData(faker.random.words(2), faker.random.words(15))
      );
    }
  }

  ngOnInit() {
 }
}
