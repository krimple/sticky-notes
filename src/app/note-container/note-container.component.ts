import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sn-note-container',
  template: `
    <sn-note></sn-note>
    <sn-note></sn-note>
    <sn-note></sn-note>
    <sn-note></sn-note>
    <sn-note></sn-note>
  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
    }
  `]
})
export class NoteContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
