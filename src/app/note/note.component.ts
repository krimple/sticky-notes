import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sn-note',
  template: `
    <p>
      I am a sticky note
    </p>
  `,
  styles: []
})
export class NoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
