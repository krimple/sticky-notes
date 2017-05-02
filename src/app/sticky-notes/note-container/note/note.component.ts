import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteData } from '../../models/note-data';

@Component({
  selector: 'sn-note',
  templateUrl: './note.component.html',
  styleUrls: [`./note.component.css`]
})
export class NoteComponent implements OnInit {

  @Input() noteData: NoteData;
  @Output() onChangesSaved = new EventEmitter<NoteData>();


  editing = false;

  ngOnInit() {
  }

  toggleEdit() {
    if (this.editing) {
      this.onChangesSaved.next(this.noteData);
    }
    // toggle state
    this.editing = !this.editing;
  }

}
