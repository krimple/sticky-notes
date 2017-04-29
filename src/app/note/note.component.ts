import { Component, Input, OnInit } from '@angular/core';
import { NoteData } from '../models/note-data';

@Component({
  selector: 'sn-note',
  templateUrl: './note.component.html',
  styleUrls: [`./note.component.css`]
})
export class NoteComponent implements OnInit {

  @Input() noteData: NoteData;

  editing = false;

  ngOnInit() {
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

}
